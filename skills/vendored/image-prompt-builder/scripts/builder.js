#!/usr/bin/env node
/**
 * Image Prompt Builder — CLI engine
 *
 * Originally ported from Simple Prompt Master
 * (https://deno2026.github.io/Deno-Image-Prompt-builder/image.html).
 *
 * Commands:
 *   list-subjects                     → JSON of 21 subject categories
 *   list-steps   <subjectKey>         → flow steps for that subject
 *   list-options <subjectKey> <step> [selectionsJson]
 *                                     → conditionally filtered option list
 *   knowledge    <subjectKey>         → knowledge profile (summary + consider)
 *   assemble     <configJson>         → build final LLM prompt text
 *
 * The conditional filtering mirrors getResolvedOptions() from the source page
 * verbatim, so option narrowing behaves exactly like the web UI.
 */

// Load raw data (runs the source-of-truth JS: OPTIONS, FLOW_PROFILES,
// KNOWLEDGE_OVERRIDES, renameStep/reorder side effects, getResolvedOptions).
// _data.js was copy-pasted straight from the HTML so it stays 1:1 with the web.
const path = require("path");
const fs = require("fs");
const dataPath = path.join(__dirname, "_data.js");
const src = fs.readFileSync(dataPath, "utf8");

// We need to expose identifiers defined via `const` inside _data.js.
// Wrap in a Function so we can return all top-level bindings.
const idRegex = /^\s*const\s+([A-Z_][A-Z0-9_]*)\s*=/gm;
const ids = new Set();
let m;
while ((m = idRegex.exec(src)) !== null) ids.add(m[1]);

// state + selected() are referenced inside getResolvedOptions; expose them.
const bootstrap = `
  const state = { currentSubject: null, selections: {} };
  function selected(key) { return state.selections[key] || null; }
  ${src}
  return {
    state,
    selected,
    getResolvedOptions,
    ${[...ids].join(", ")}
  };
`;

const api = new Function(bootstrap)();

// ---------- Public helpers ----------

function cloneOption(o) {
  return { key: o.key, title: o.title, desc: o.desc, kicker: o.kicker };
}

function listSubjects() {
  return api.SUBJECT_OPTIONS.map(cloneOption);
}

function getStep(subjectKey, stepKey) {
  const flow = api.FLOW_PROFILES[subjectKey];
  if (!flow) return null;
  return flow.find((s) => s.key === stepKey) || null;
}

function listSteps(subjectKey) {
  const flow = api.FLOW_PROFILES[subjectKey];
  if (!flow) return [];
  return flow.map((step) => ({
    key: step.key,
    title: step.title,
    summaryLabel: step.summaryLabel,
    promptLabel: step.promptLabel,
    description: step.description || "",
    optionCount: step.options.length
  }));
}

function listOptions(subjectKey, stepKey, selections = {}) {
  const step = getStep(subjectKey, stepKey);
  if (!step) return [];
  // Reconstruct the state the resolver expects: selections are {stepKey: {key,...}}.
  api.state.currentSubject = subjectKey;
  api.state.selections = { ...selections };
  const resolved = api.getResolvedOptions(step);
  const list = Array.isArray(resolved) && resolved.length ? resolved : step.options;
  // Always include the direct-input escape hatch (mirrors the web UI behavior).
  return [api.DIRECT_OPTION, ...list].map(cloneOption);
}

function knowledge(subjectKey) {
  if (api.KNOWLEDGE_OVERRIDES[subjectKey]) {
    return api.KNOWLEDGE_OVERRIDES[subjectKey];
  }
  const flow = api.FLOW_PROFILES[subjectKey] || [];
  const labels = flow.map((s) => s.summaryLabel).filter(Boolean);
  const title = api.SUBJECT_OPTIONS.find((s) => s.key === subjectKey)?.title || "이미지";
  return {
    summary: `${title}에서는 ${labels.join(", ")} 조합이 맞아야 결과가 자연스럽게 정리됩니다.`,
    consider: labels.slice(0, 5)
  };
}

const ENHANCED_SYSTEM_PROMPT = `You are an expert image-prompt planner.

Use the structured inputs below to create 3 final image prompt options.

Core goal:
- Keep every explicit user selection.
- If some useful visual details are missing, infer them naturally from the context and add them.
- Write prompts that are detailed enough for weaker text encoders such as ComfyUI workflows, not only for GPT, Gemini, or Grok image chat models.

Output rules:
1. Output only Option 1, Option 2, Option 3.
2. For each option, write one final English image prompt.
3. Under each English prompt, add one short Korean explanation line.
4. Keep the chosen subject and direction, but vary the expression style slightly across the 3 options.
5. Do not use code blocks.
6. Do not ask questions back.

Expansion rules:
- Never ignore explicit inputs.
- Do not contradict selected pose, composition, background, styling, or mood.
- When the user did not specify enough detail, add only compatible supporting details.
- Prefer concrete visual wording over vague adjectives.
- Especially infer and strengthen: pose nuance, hand placement, gaze direction, facial expression, body angle, framing, lens feel, camera distance, lighting direction, color palette, material texture, background simplicity, foreground/background separation, depth, atmosphere, and focal emphasis.
- For people, add natural details like posture balance, hair flow, wardrobe texture, skin tone harmony, and flattering light if they fit the context.
- For products, food, architecture, landscape, and service scenes, add realistic support details like surface texture, reflection control, environment cues, clean background handling, and composition anchors when relevant.
- If the prompt is for ComfyUI-style generation, make the final prompt visually rich and explicit enough that the image can be rendered well even without the user manually specifying every small detail.

Quality rules:
- Make the result feel intentional, visual, and production-ready.
- Avoid text inside the generated image unless the user clearly wants text.
- Avoid weak filler words and avoid repetitive wording.`;

/**
 * Assemble the final prompt text exactly like buildPromptText() on the web.
 * config = {
 *   subjectKey,
 *   subjectLabel?,        // override (direct-input mode)
 *   selections: { stepKey: {title,desc} | {manual} },
 *   extraRequest?: string,
 *   systemPrompt?: string
 * }
 */
function assemble(config) {
  const { subjectKey, selections = {}, extraRequest = "", systemPrompt } = config;
  const flow = api.FLOW_PROFILES[subjectKey] || [];
  const subject = api.SUBJECT_OPTIONS.find((s) => s.key === subjectKey);
  const subjectLabel = config.subjectLabel || subject?.title || subjectKey;
  const know = knowledge(subjectKey);
  const sys = (systemPrompt || ENHANCED_SYSTEM_PROMPT).trim();

  const inputLines = flow.map((step) => {
    const sel = selections[step.key];
    if (!sel) return `${step.promptLabel}: `;
    const value = sel.manual ? sel.manual : `${sel.title} - ${sel.desc || ""}`.trim();
    return `${step.promptLabel}: ${value}`;
  });

  const parts = [
    sys,
    "",
    "[User Input]",
    `Main subject: ${subjectLabel}`,
    ...inputLines
  ];

  if (extraRequest.trim()) {
    parts.push(
      "",
      "[Final Extra Request]",
      extraRequest.trim(),
      "",
      "[Extra Input Handling]",
      "Treat the extra input as cumulative keyword-style notes.",
      "Combine it with the structured selections above, infer the user's final desired image, and reflect that intent naturally in every option."
    );
  }

  parts.push(
    "",
    "[Category Knowledge]",
    `Category summary: ${know.summary}`,
    `Must automatically consider: ${know.consider.join(", ")}.`
  );

  parts.push(
    "",
    "[Contextual Expansion Rules]",
    "If some useful visual details are missing, infer and add only compatible supporting details instead of leaving the prompt thin.",
    "Especially strengthen pose nuance, hand placement, gaze, body angle, crop, camera distance, lens feel, lighting direction, texture, background simplicity, color harmony, depth, atmosphere, and focal emphasis when relevant.",
    "Make the final prompts explicit enough for ComfyUI and weaker text encoders, not only for chat-based image models.",
    "Never contradict the selected inputs, and never add text inside the image unless the user clearly requested it."
  );

  return parts.join("\n");
}

// ---------- CLI ----------

function readStdin() {
  return new Promise((res) => {
    let buf = "";
    process.stdin.setEncoding("utf8");
    process.stdin.on("data", (c) => (buf += c));
    process.stdin.on("end", () => res(buf));
  });
}

async function main() {
  const [cmd, ...args] = process.argv.slice(2);

  const emit = (value) => {
    process.stdout.write(typeof value === "string" ? value : JSON.stringify(value, null, 2));
    process.stdout.write("\n");
  };

  try {
    switch (cmd) {
      case "list-subjects":
        emit(listSubjects());
        return;

      case "list-steps": {
        const [subject] = args;
        if (!subject) throw new Error("usage: list-steps <subjectKey>");
        emit(listSteps(subject));
        return;
      }

      case "list-options": {
        const [subject, stepKey, selJson] = args;
        if (!subject || !stepKey) throw new Error("usage: list-options <subjectKey> <stepKey> [selectionsJson]");
        const selections = selJson ? JSON.parse(selJson) : {};
        emit(listOptions(subject, stepKey, selections));
        return;
      }

      case "knowledge": {
        const [subject] = args;
        if (!subject) throw new Error("usage: knowledge <subjectKey>");
        emit(knowledge(subject));
        return;
      }

      case "assemble": {
        // Read config either from argv[0] or stdin.
        const raw = args[0] === "-" ? await readStdin() : (args[0] || await readStdin());
        if (!raw) throw new Error("assemble: pass configJson as arg or via stdin");
        const cfg = JSON.parse(raw);
        emit(assemble(cfg));
        return;
      }

      case undefined:
      case "help":
      case "--help":
      case "-h":
        process.stdout.write(
`Image Prompt Builder CLI

  node builder.js list-subjects
  node builder.js list-steps   <subjectKey>
  node builder.js list-options <subjectKey> <stepKey> [selectionsJson]
  node builder.js knowledge    <subjectKey>
  node builder.js assemble     <configJson | - for stdin>

Subject keys: thumbnail-person, portrait, selfie-sns, group-family,
  fashion-beauty, profile-id, product, food-drink, vehicle, space,
  architecture, landscape, travel, animal, workspace, service, poster,
  fantasy, illustration, event, broll
`
        );
        return;

      default:
        throw new Error(`unknown command: ${cmd}`);
    }
  } catch (err) {
    process.stderr.write(`ERROR: ${err.message}\n`);
    process.exit(1);
  }
}

main();
