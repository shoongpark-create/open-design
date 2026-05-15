# Open Design — one-shot setup for team members (Windows).
#
# Run once in PowerShell after `git clone`. Materialises %USERPROFILE%\.claude\skills\
# and %USERPROFILE%\.codex\skills\ junction points so Claude Code and Codex CLI
# discover every skill in this repo. Idempotent — safe to re-run after `git pull`.
#
# Requires: Windows 10+ (junction points work without admin).
# If your shell complains about execution policy, run once:
#   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

param(
    [switch]$Start
)

$ErrorActionPreference = "Stop"

$RepoRoot   = Split-Path -Parent $MyInvocation.MyCommand.Path
$SkillsRoot = Join-Path $RepoRoot "skills"

if (-not (Test-Path $SkillsRoot)) {
    Write-Host "✗ skills/ not found under $RepoRoot — did the clone finish?" -ForegroundColor Red
    exit 1
}

$ClaudeMount = Join-Path $env:USERPROFILE ".claude\skills"
$CodexMount  = Join-Path $env:USERPROFILE ".codex\skills"

New-Item -ItemType Directory -Force -Path $ClaudeMount | Out-Null
New-Item -ItemType Directory -Force -Path $CodexMount  | Out-Null

$Categories = @("fashion", "marketing", "data", "vendored")

$Added = 0; $Refreshed = 0; $Skipped = 0

function Link-One {
    param([string]$Source, [string]$TargetDir)

    $Name = Split-Path $Source -Leaf
    if ($Name -eq "_shared" -or $Name -eq "_archive") { return }

    $Dest = Join-Path $TargetDir $Name

    if (Test-Path $Dest) {
        $Item = Get-Item $Dest -Force
        if ($Item.LinkType -eq "Junction" -or $Item.LinkType -eq "SymbolicLink") {
            Remove-Item $Dest -Force
            cmd /c mklink /J "`"$Dest`"" "`"$Source`"" | Out-Null
            $script:Refreshed++
        } else {
            $script:Skipped++
        }
    } else {
        cmd /c mklink /J "`"$Dest`"" "`"$Source`"" | Out-Null
        $script:Added++
    }
}

# Single-skill 'impeccable'
$Impeccable = Join-Path $SkillsRoot "impeccable"
if (Test-Path $Impeccable) {
    Link-One $Impeccable $ClaudeMount
    Link-One $Impeccable $CodexMount
}

foreach ($Cat in $Categories) {
    $CatDir = Join-Path $SkillsRoot $Cat
    if (-not (Test-Path $CatDir)) {
        Write-Host "  (skip) $Cat — directory missing"
        continue
    }
    Get-ChildItem -Directory $CatDir | ForEach-Object {
        Link-One $_.FullName $ClaudeMount
        Link-One $_.FullName $CodexMount
    }
}

Write-Host ""
Write-Host "Open Design setup complete."
Write-Host "  Added new junctions   : $Added"
Write-Host "  Refreshed existing    : $Refreshed"
Write-Host "  Skipped (real folder) : $Skipped"
Write-Host ""
Write-Host "Mounts:"
Write-Host "  $ClaudeMount"
Write-Host "  $CodexMount"
Write-Host ""

if ($Start) {
    if (-not (Get-Command pnpm -ErrorAction SilentlyContinue)) {
        Write-Host "✗ pnpm not found. Install Node ~24 + pnpm >=10.33.2, then re-run with -Start." -ForegroundColor Red
        exit 1
    }
    Write-Host "Installing deps and starting daemon…"
    Push-Location $RepoRoot
    pnpm install
    pnpm tools-dev
    Pop-Location
}
