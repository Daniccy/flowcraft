/Users/daniccy/.rvm/scripts/rvm:29: operation not permitted: ps
# FlowCraft Diagram IR Specification

## 1. 目的
Diagram IR（Intermediate Representation，中间逻辑模型）用于隔离业务语义与最终视觉表现。

- IR 描述“业务中有什么、它们如何关联”；
- Layout Plan 描述“这些内容如何摆放”；
- HTML/SVG 描述“最终如何绘制”。

不要把像素坐标、颜色、字体大小等表现细节作为业务事实写进核心 IR。

## 2. 顶层结构
```json
{
  "schema_version": "1.0",
  "meta": {
    "title": "Diagram title",
    "description": "What this diagram explains",
    "language": "zh-CN",
    "audience": ["product", "engineering"],
    "source_files": []
  },
  "diagram_type": "flowchart",
  "direction": "LR",
  "sections": [],
  "actors": [],
  "nodes": [],
  "edges": [],
  "legends": [],
  "notes": []
}
```

## 3. diagram_type
推荐枚举：
- `flowchart`
- `system_architecture`
- `agent_architecture`
- `data_flow`
- `sequence`
- `swimlane`
- `lifecycle`
- `framework`
- `hybrid`

如果图形混合多种关系，使用 `hybrid` 并在 meta.description 解释。

## 4. Node
```json
{
  "id": "stable-node-id",
  "type": "process",
  "label": "节点标题",
  "description": "节点说明",
  "section_id": "section-main",
  "actor_id": null,
  "attributes": {},
  "source_refs": [
    {
      "source": "requirements.md",
      "quote": "支持预算耗尽后的异常处理",
      "certainty": "confirmed"
    }
  ]
}
```

推荐 node.type：
`start`, `end`, `process`, `decision`, `actor`, `system`, `agent`, `tool`, `datastore`, `document`, `event`, `boundary`, `annotation`, `output`。

## 5. Edge
```json
{
  "id": "edge-01",
  "from": "node-a",
  "to": "node-b",
  "type": "normal",
  "label": "通过",
  "condition": "校验全部通过",
  "certainty": "confirmed",
  "source_refs": []
}
```

推荐 edge.type：
`normal`, `success`, `failure`, `exception`, `feedback`, `retry`, `data`, `dependency`, `control`, `async`。

每条 edge 必须引用存在的节点。分支边应尽可能填写 label 或 condition。

## 6. Sections / Actors
Section 用于组织图形区域，不等同于技术系统边界。
```json
{
  "id": "section-main",
  "label": "核心处理",
  "purpose": "说明该分区承担的职责",
  "order": 1
}
```

Actor 用于表达参与者、系统或责任主体：
```json
{
  "id": "actor-reviewer",
  "type": "human",
  "label": "人工审核"
}
```

## 7. Certainty 与来源追踪
允许的 certainty：
- `confirmed`：材料明确说明；
- `inferred`：由上下文推断；
- `suggested`：优化建议；
- `unknown`：缺少信息。

不要把 inferred、suggested 或 unknown 内容绘制成与 confirmed 完全等价的业务事实。可通过注释、虚线或待确认标记体现。

## 8. Loops 与 feedback
循环可以用一条 feedback / retry edge 表达；如需明确终止条件，在 notes 或相关节点 attributes 中写明。
```json
{
  "id": "edge-retry",
  "from": "validate",
  "to": "process",
  "type": "retry",
  "label": "校验失败且仍有重试预算",
  "condition": "retry_count < max_retry"
}
```

## 9. Layout Plan 分离
布局单独保存，例如：
```json
{
  "layout_engine": "manual-svg",
  "direction": "LR",
  "canvas": {"width": 1800, "height": 1200},
  "groups": [],
  "positions": {
    "node-a": {"x": 100, "y": 200, "width": 240, "height": 100}
  },
  "routing": {
    "edge-01": {"style": "solid", "route": "orthogonal"}
  }
}
```
布局坐标不是业务逻辑，不应反向改变 IR 的语义。

## 10. 必须执行的结构检查
- node ID 唯一；
- edge ID 唯一；
- edge.from / edge.to 都存在；
- section_id / actor_id 若非空，必须引用存在对象；
- decision 节点的分支关系可解释；
- 反馈边、重试边可识别；
- 未确认项显式标记；
- 不得静默删除没有被布局引擎容纳的节点。
