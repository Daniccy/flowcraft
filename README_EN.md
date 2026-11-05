/Users/daniccy/.rvm/scripts/rvm:29: operation not permitted: ps
# FlowCraft

### Turn Business Logic into Professional Visuals
**从业务逻辑到专业视觉表达。**

FlowCraft is an Agent Skill that transforms business requirements, technical documents, and existing diagrams into clear, structured, editable technical visuals.

> **Logic first. Visuals follow.**

## What is FlowCraft?

```text
Business Input
      ↓
Logic Extraction
      ↓
Diagram IR
      ↓
Logic Validation
      ↓
Architecture & Layout Planning
      ↓
HTML / SVG Rendering
      ↓
Quality Inspection
      ↓
Export
```

Draw.io, Mermaid, and PlantUML are optional input/output adapters. None is required as a mandatory step.

## Supported Diagram Types

- Business workflow
- System architecture
- Agent / multi-agent architecture
- Data flow
- Sequence and swimlane diagrams
- Risk and governance workflows
- Lifecycle and feedback loops
- Evaluation frameworks

## Why FlowCraft?

Many AI-generated diagrams omit business nodes, misrepresent relationships, produce confusing layouts, cross connectors, clip text, or leave no editable source. FlowCraft separates business understanding, structured modeling, layout planning, visual rendering, and quality inspection so that visual polish does not replace semantic accuracy.

## Quick Start

### Download

**From the GitHub webpage:** Open the repository, select `Code` → `Download ZIP`, then extract the archive while preserving the directory structure.

**Using Git:**

```bash
git clone https://github.com/Daniccy/flowcraft.git
cd flowcraft
```

After downloading, load `SKILL.md` in an Agent Skills-compatible environment.

### Install with npx

If Node.js 18 or later is available, you can install the Skill directly from GitHub without an npm account:

```bash
npx --yes github:Daniccy/flowcraft init
```

By default, this installs to `.agents/skills/flowcraft/` in the current directory. You can also choose a target directory:

```bash
npx --yes github:Daniccy/flowcraft init .agents/skills/flowcraft
```

### Use FlowCraft

1. Provide business requirements, a PRD, technical documentation, or an existing diagram.
2. Ask FlowCraft to extract and validate the logic, plan the layout, render HTML/SVG, inspect the result, and export the requested format.

Example:

> Use FlowCraft to turn my business requirements into a professional technical diagram. Do not require a Draw.io draft. First generate and validate the diagram IR, then plan the layout, generate HTML/SVG, inspect the rendering, and export the requested format.

Installation details depend on the Agent client. Only add client-specific instructions that have been tested.

## Project Structure

```text
flowcraft/
├── SKILL.md
├── README.md
├── README_EN.md
├── references/
├── templates/
├── prompts/
└── assets/
```

## Design Principles

1. Logic before aesthetics.
2. Separate business semantics from visual layout.
3. Choose diagram type based on relationships, not habit.
4. Use semantic colors and meaningful connections.
5. Keep source files editable.
6. Inspect rendered output before delivery.

## Quality Standards

Review every diagram for missing or duplicated nodes, incorrect edge direction, missing decision conditions, unclear loops and exception handling, boundary errors, clipped text, overlapping nodes, and inconsistent color semantics. Check the result against the original business requirements before production use.

## License

A license has not yet been selected. Until a license is added, do not assume that public visibility grants permission to redistribute or commercially reuse the source. See `LICENSE-DECISION.md`.

---

**FlowCraft — Turn Business Logic into Professional Visuals.**
