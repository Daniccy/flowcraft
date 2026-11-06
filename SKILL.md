---
name: flowcraft
description: 从业务逻辑到专业视觉表达。将自然语言需求、PRD、技术方案或现有图表，蒸馏为结构准确、视觉统一、可编辑的专业技术图。支持业务流程、系统架构、Agent 协作、数据流、时序、风控治理等图形；Draw.io、Mermaid 等仅作为可选输入/输出格式。
---

# FlowCraft — 从业务逻辑到专业视觉表达

## 1. 使命与边界

FlowCraft 不是单纯的流程图美化器，核心工作流：

**理解业务逻辑 → 建立结构化模型 → 规划图形架构 → 生成专业视觉 → 检查并交付。**

优先保证业务准确性、可读性和可编辑性。视觉风格服务于信息表达，不得为了画面好看改变业务含义。

### 适用场景
- 业务流程与审批流程
- 系统架构与技术方案
- AI Agent / Multi-Agent 协作架构
- 数据流与处理链路
- 时序图与交互关系
- 风控、审核、治理与反馈闭环
- 研发、部署、发布和运维流程
- 评测体系、指标框架和决策机制

### 输入形式
用户可以提供任意一种或多种：
- 自然语言描述、会议纪要、需求说明；
- PRD、技术方案、设计文档；
- Draw.io 文件或 XML；
- Mermaid、PlantUML 等图形源代码；
- 现有 HTML、SVG、PNG；
- 手绘草图或截图。

Draw.io、Mermaid 和其他绘图工具都是可选的输入/输出适配器，不是工作流的必经步骤。

### 默认输出
- `diagram-ir.json`：结构化业务逻辑模型；
- `layout-plan.json`：布局与视觉规划；
- `diagram.html`：自包含 HTML/SVG，可编辑源文件；
- `diagram.svg`：矢量图（环境支持时）；
- `diagram.png`：高清预览图（环境支持真实渲染时）；
- `diagram-review.md`：逻辑检查、假设和待确认项。

用户只要求部分产物时，不要强制生成全部文件。

## 2. 核心原则

1. **Logic First：先理解业务，再绘制图形。**
2. **Semantic Fidelity：不丢节点、不改方向、不虚构条件。**
3. **Separate Logic and Visuals：业务逻辑与布局样式分离。**
4. **Readable by Design：阅读顺序、层级和信息密度优先。**
5. **Editable First：优先保留结构化源文件，不只交付截图。**
6. **Inspect Before Delivery：必须检查真实渲染结果；无法渲染时明确说明。**
7. **Evidence over Assumption：区分来源事实、推断、建议和待确认项。**

## 3. 标准工作流

### Phase 0 — 识别目标与范围
明确图要回答的问题、目标读者、使用场景和交付格式。

识别：
- 图的主题和目标；
- 目标读者（研发、产品、管理层、客户等）；
- 重点强调内容；
- 必须保留的术语、字段、参数和状态；
- 输出尺寸、语言、格式和可编辑要求。

信息足够时直接开始。只有一个关键事实缺失且会影响逻辑正确性时，才询问一个明确问题。

### Phase 1 — Logic Extraction：业务逻辑蒸馏
提取以下信息：
- **Actors / Systems**：参与角色、Agent、服务、外部系统；
- **Nodes**：输入、处理、判断、事件、存储、输出、人工操作；
- **Edges**：调用、依赖、数据流、控制流、成功、失败、回退；
- **Conditions**：判断条件、分支条件、触发条件；
- **Loops**：循环、重试、反馈和终止条件；
- **Boundaries**：系统边界、权限边界、责任边界；
- **Constraints**：超时、预算、配额、阈值、人工审批；
- **Artifacts**：输入输出数据、报告、候选集、日志和版本。

保留用户原始术语、数字、变量名、状态名和条件表达。不要擅自将业务描述升级为未经确认的技术事实。

### Phase 2 — IR Modeling：生成中间逻辑模型
先生成 `diagram-ir.json`，不要直接开始排版。

IR 至少包含：
- diagram metadata；
- diagram type；
- actors / groups / sections；
- nodes；
- edges；
- conditions；
- loops / feedback；
- legends；
- notes；
- source traceability。

逻辑模型不应依赖像素坐标。节点的语义 ID 应稳定，边的起点和终点必须引用存在的节点。

字段定义见 `references/diagram-ir-spec.md`，参考实例见 `templates/diagram-ir.example.json`。

### Phase 3 — Logic Validation：逻辑校验
生成图形前执行检查：
- 所有边的 source / target 是否存在；
- 是否存在孤立节点，孤立是否有业务理由；
- 关键路径是否有入口和出口；
- 判断节点是否明确标注分支条件；
- 循环是否有回流路径和终止条件；
- 失败、超时、预算耗尽、权限拒绝是否有处理路径；
- 并行任务是否有汇聚或结束规则；
- 人工审核与自动执行是否区分；
- 数据产出、状态变化和责任边界是否清楚；
- 是否存在重复节点、矛盾方向或不完整关系。

把问题分类为：
- `confirmed`：材料明确支持；
- `inferred`：根据上下文推断，需标注；
- `suggested`：优化建议，不得伪装成原始业务事实；
- `unknown`：信息缺失，需确认。

如果存在影响核心流程的未知项，先向用户提出最关键的一个问题；如果不影响主图，可以保留注释并继续。

### Phase 4 — Architecture Planning：架构与布局规划
根据逻辑关系选择图形类型和布局，不要所有内容都画成同一种流程图。

| 业务关系 | 优先图形/布局 |
|---|---|
| 顺序步骤与条件分支 | Flowchart |
| 多系统组件及依赖 | System Architecture |
| 多角色交互 | Swimlane / Sequence |
| Agent 协作与工具调用 | Agent Architecture |
| 数据产生、加工、存储 | Data Flow |
| 多层嵌套与循环 | Nested / Layered |
| 审核、复核、治理闭环 | Lifecycle + Feedback Loop |
| 阶段和时间顺序 | Timeline / Stage Flow |
| 指标与分类关系 | Framework / Matrix |

规划时明确：
- 阅读方向（左→右、上→下或分区阅读）；
- 主链路、次级链路、反馈和异常路径；
- 分区边界和节点层级；
- 图例和底部约束说明；
- 画布尺寸与信息密度。

复杂图优先扩大画布或拆成总览图 + 细节图，不要无限缩小字体。

输出 `layout-plan.json` 或等价布局说明。布局坐标属于表现层，不得污染业务逻辑 IR。

### Phase 5 — Visual Rendering：专业视觉生成
默认采用 FlowCraft 专业技术图风格，具体规范见 `references/style-system.md`。

核心视觉语言：
- 浅灰蓝画布；
- 白色分区容器；
- 深蓝灰标题与正文；
- 语义化颜色；
- 统一圆角、细描边和间距；
- 清晰的实线/虚线/箭头规则；
- 编号分区、图例和必要注释；
- 高信息密度但不拥挤。

输出优先级：
1. 自包含 HTML + SVG；
2. 独立 SVG；
3. PNG / PDF 等交付格式（按需且环境支持时）；
4. Draw.io / Mermaid 等互操作格式（按需）。

不要声称生成了可编辑 Draw.io 文件，除非确实创建并验证了该文件。

### Phase 6 — Quality Inspection：渲染与质量检查
在可用环境中真实渲染 HTML/SVG，并检查：
- 中文字体是否正常；
- 文字是否裁切、重叠、溢出；
- 节点是否遮挡；
- 连线是否穿过文字或错误连接；
- 箭头方向是否正确；
- 条件标签是否贴合对应分支；
- 画布是否留白合理；
- 图例是否解释所有语义颜色和线型；
- 主流程是否一眼可读；
- 缩放后关键内容是否仍可辨认。

发现问题就修改并再次渲染。PNG 必须来自最终版本，而不是旧版本。

如果当前环境无法真实渲染或截图：
- 明确说明尚未完成视觉验证；
- 交付源文件；
- 给出可执行的本地渲染步骤；
- 不得声称已经检查或导出 PNG。

### Phase 7 — Delivery：交付与说明
默认交付结构：
```text
flowcraft-output/
├── diagram-ir.json
├── layout-plan.json
├── diagram.html
├── diagram.svg
├── diagram.png
└── diagram-review.md
```

按用户要求省略不需要的产物。

`diagram-review.md` 应说明：
- 本图回答的问题；
- 使用的图形类型与布局；
- 已确认的业务逻辑；
- 推断、建议和待确认项；
- 质量检查结果；
- 未能完成的渲染或格式转换。

## 4. 视觉与内容的冲突处理

发生冲突时按以下优先级决策：
1. 业务语义准确；
2. 阅读顺序清楚；
3. 关键内容完整；
4. 文字可读；
5. 视觉美观；
6. 画布紧凑。

不能为了对称而改变流程，不能为了缩短画布而删掉异常路径，不能为了视觉统一而把不同含义的节点涂成同一种语义颜色。

## 5. 与用户协作
- 用户给了完整材料：直接提取，不要求重复描述。
- 用户给了旧图：先理解和保留原图语义，再决定是否重构。
- 用户只给业务文字：直接从逻辑模型开始，不要求先画 Draw.io。
- 用户要求沿用既有风格：读取 `references/style-system.md`。
- 用户要求其他视觉风格：允许覆盖主题，但保留逻辑校验流程。
- 用户只要求 PNG：仍可在内部使用 IR，但不强制向用户交付所有中间文件。
- 用户要求修改：指出修改了哪些节点、关系、布局或视觉元素。
- 用户要求多格式：每种格式都要真实生成并说明验证状态。

## 6. 快速调用示例

> 使用 FlowCraft，把以下业务逻辑转化为专业技术架构图，先提取节点、关系、条件、异常和反馈闭环，生成结构化 IR，检查逻辑完整性，再规划布局并生成 HTML/SVG。真实渲染检查后导出高清 PNG。保留所有业务术语和参数，并把推断与待确认项单独列出。

## 7. 相关参考
- `references/diagram-ir-spec.md`：中间逻辑模型规范；
- `references/style-system.md`：视觉系统；
- `references/quality-checklist.md`：质量门禁；
- `templates/diagram-ir.example.json`：IR 示例；
- `templates/diagram-shell.html`：HTML/SVG 起始模板；
- `prompts/quick-start.md`：快速调用提示词。
