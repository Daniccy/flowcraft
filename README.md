# FlowCraft

### 从业务逻辑到专业视觉表达
**Turn Business Logic into Professional Visuals.**

FlowCraft is an Agent Skill that transforms business requirements, technical documents, and existing diagrams into clear, structured, editable technical visuals.

它不只是让 AI 画一张好看的流程图，而是让 AI 先理解复杂业务，再组织信息结构，最后生成专业、清晰、可编辑的视觉资产。

> **Logic first. Visuals follow.**

## ✨ What is FlowCraft?

```text
Business Input
      ↓
Logic Extraction
      ↓
Intermediate Representation (IR)
      ↓
Logic Validation
      ↓
Architecture & Layout Planning
      ↓
HTML / SVG Rendering
      ↓
Quality Inspection
      ↓
PNG / SVG / HTML Export
```

Draw.io、Mermaid、PlantUML 等工具可以作为输入或输出适配器，但不是必经步骤。

## 🎯 Supported Diagram Types
- Business Workflow
- System Architecture
- Agent / Multi-Agent Architecture
- Data Flow Diagram
- Sequence Diagram
- Swimlane Diagram
- Risk & Governance Workflow
- Lifecycle and Feedback Loop
- Evaluation Framework

## 🧠 Why FlowCraft?
普通 AI 画图容易遇到业务节点遗漏、关系错误、布局混乱、连线交叉、文字溢出、风格不统一和源文件难以编辑等问题。

FlowCraft 把业务理解、结构化建模、布局规划和视觉生成拆成独立阶段，减少逻辑与表现混在一起的问题。

## ⚙️ Quick Start
### Download

**网页下载：** 打开仓库主页，点击 `Code` → `Download ZIP`，解压后保留完整目录结构。

**命令行下载：**

```bash
git clone https://github.com/Daniccy/flowcraft.git
cd flowcraft
```

下载后，将 `SKILL.md` 加载到支持 Agent Skills 的环境中，再提供业务需求、PRD、技术文档或现有图表。

### Use FlowCraft

1. Load `SKILL.md` in an Agent Skills-compatible environment.
2. Provide business requirements, a PRD, technical documentation, or an existing diagram.
3. Ask FlowCraft to extract logic, validate it, plan the layout, and render the diagram.

Example:
> Use FlowCraft to turn my business requirements into a professional technical diagram. Do not require a Draw.io draft. First generate and validate the diagram IR, then plan the layout, generate HTML/SVG, inspect the rendering, and export a high-resolution PNG.

Installation details depend on the Agent client. Add only client-specific instructions that have been tested.

## 📁 Project Structure
```text
flowcraft/
├── SKILL.md
├── README.md
├── references/
│   ├── diagram-ir-spec.md
│   ├── style-system.md
│   └── quality-checklist.md
├── templates/
│   ├── diagram-ir.example.json
│   └── diagram-shell.html
├── prompts/
│   └── quick-start.md
└── assets/
    └── README.md
```

## 🎨 Design Principles
1. Logic before aesthetics.
2. Separate business semantics from visual layout.
3. Choose diagram type based on relationships, not habit.
4. Use semantic colors and meaningful connections.
5. Keep source files editable.
6. Inspect rendered output before delivery.

## 🧪 Quality Standards
Review every diagram for missing or duplicated nodes, incorrect edge direction, missing decision conditions, unclear loops and exception handling, boundary errors, clipped text, overlapping nodes and inconsistent color semantics.

AI-generated diagrams must still be checked against their original business requirements before production use.

## 🗺️ Roadmap
- [x] Core FlowCraft Skill
- [x] Diagram IR specification
- [x] Visual design system
- [x] Quality checklist
- [x] HTML/SVG starter template
- [ ] More real-world examples
- [ ] Tested client-specific installation guides
- [ ] Automated rendering/export helper
- [ ] Optional Draw.io import/export adapter
- [ ] Advanced layout presets

## 🤝 Contributing
Issues, examples, and improvement suggestions are welcome. If you build a diagram with FlowCraft, share the use case and output.

## 📄 License
A license has not yet been selected. Until a license is added, do not assume that public visibility grants permission to redistribute or commercially reuse the source. See `LICENSE-DECISION.md`.

---
**FlowCraft — Turn Business Logic into Professional Visuals.**
