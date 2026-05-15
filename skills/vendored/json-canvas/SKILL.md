---
name: json-canvas
description: Create and edit JSON Canvas files (.canvas) for visual note-taking and mind mapping in Obsidian. Use when the user wants to create visual diagrams, mind maps, or canvas views.
---

# JSON Canvas Skill

JSON Canvas is an open file format for infinite canvas tools. Obsidian uses this format for .canvas files.

## File Structure

```json
{
  "nodes": [],
  "edges": []
}
```

## Node Types

### Text Node
```json
{
  "id": "unique-id",
  "type": "text",
  "x": 0,
  "y": 0,
  "width": 250,
  "height": 60,
  "text": "Your text content here"
}
```

### File Node
```json
{
  "id": "unique-id",
  "type": "file",
  "x": 300,
  "y": 0,
  "width": 400,
  "height": 400,
  "file": "path/to/note.md"
}
```

### Link Node
```json
{
  "id": "unique-id",
  "type": "link",
  "x": 0,
  "y": 200,
  "width": 400,
  "height": 300,
  "url": "https://example.com"
}
```

### Group Node
```json
{
  "id": "unique-id",
  "type": "group",
  "x": -50,
  "y": -50,
  "width": 500,
  "height": 400,
  "label": "Group Label"
}
```

## Edges (Connections)

```json
{
  "id": "edge-id",
  "fromNode": "node-id-1",
  "toNode": "node-id-2",
  "fromSide": "right",
  "toSide": "left",
  "label": "Connection label"
}
```

### Side Values
- `top`, `right`, `bottom`, `left`

## Node Colors

Use the `color` property with values: `1`-`6` (preset colors) or hex codes.

```json
{
  "id": "colored-node",
  "type": "text",
  "color": "1",
  "text": "Red node"
}
```

## Complete Example

```json
{
  "nodes": [
    {
      "id": "main",
      "type": "text",
      "x": 0,
      "y": 0,
      "width": 200,
      "height": 60,
      "text": "Main Idea",
      "color": "1"
    },
    {
      "id": "sub1",
      "type": "text",
      "x": 300,
      "y": -80,
      "width": 150,
      "height": 50,
      "text": "Sub-topic 1"
    },
    {
      "id": "sub2",
      "type": "text",
      "x": 300,
      "y": 80,
      "width": 150,
      "height": 50,
      "text": "Sub-topic 2"
    }
  ],
  "edges": [
    {
      "id": "e1",
      "fromNode": "main",
      "toNode": "sub1",
      "fromSide": "right",
      "toSide": "left"
    },
    {
      "id": "e2",
      "fromNode": "main",
      "toNode": "sub2",
      "fromSide": "right",
      "toSide": "left"
    }
  ]
}
```

## References

- [JSON Canvas Specification](https://jsoncanvas.org/)
- [Obsidian Canvas Documentation](https://help.obsidian.md/Plugins/Canvas)
