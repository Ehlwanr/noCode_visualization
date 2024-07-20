# noCode_visualization
 基于Vue3 + TypeScript的零代码与可视化


## 特性
- 物料管理
- 编排
- 渲染
- 数据管理
- 流程引擎

## 效果展示

PC 端布局编排
![pc 布局](example/layout-pc.jpg)

mobile 端布局编排
![mobile 布局](example/layout-mobile.jpg)

数据源管理
![数据源](example/dataSource.jpg)

流程引擎
![流程引擎](example/flow.jpg)

PC 渲染器
![pc 渲染器](example/runner-pc.jpg)

mobile 渲染器
![mobile 渲染器](example/runner-mobile.jpg)

### 项目需求分析评审（入料、编排、渲染、出码）
#### 背景介绍
近年来，无代码平台与可视化相关平台日益火热。
无代码允许开发人员低成本通过拖拉拽的方式快速构建企业内部系统或落地页，常见的无代码平台能力包括：审批流、应用构建等。其在企业开发提效与运营方面取得了不错的成绩。例如国外的：Coda、Airtable、Notion 等产品，例如国内的：明道云、集简云、ClickPaaS 等产品。

可视化平台允许数据分析人员通过拖拉拽的方式快速组建仪表盘或数据分析大盘，其在企业运营方面发挥重要作用。例如国外的：PowerBI、Monday、Coda 等产品，国内的：观远数据、BDP、FineBI 等产品。

技术选型方面，我们会选用 Vue3 作为技术栈，状态管理选用 Pinia，编辑器开发我们会基于 tiptap 来展开，Echarts 开发图表相关内容。

请注意无代码与低代码的主要区别:
1. 无代码一般面向普通用户，可以没有编程经验，可以以最简单形式搭建应用。而低代码需要用户具备一定的编程能力。
2. 在实现上，低代码比无代码更复杂，低代码还会存在例如 DSL 以及代码植入的能力，低代码的代码片段植入思路接近微前端。
核心能力
- 可视化配置面板
- 具有可拓展能力：组件、模板、逻辑复用
- 生命周期管理：开发管理、页面管理、部署管理

#### 架构设计
##### 物料堆
包含可供使用的物料，通常物料的组织与消费是插件化的，还有很多产品将物料组织发布到插件市场，可供用户自行拓展，这都是跟插件化思想与 js 沙盒设计离不开的。
https://juejin.cn/post/6981374562877308936

##### 编排
- 微内核思想：操作的是DSL（json树），f(state)->view 
  - 组合和渲染层隔离
  - render runtime(渲染引擎sdk) + dsl(json) = 页面
- 事件：DND拖拽、Mouse Event
- 画布分层技术：借鉴浏览器渲染模型，使用冒泡机制，走到所有层 
  - 第一层：div，负责渲染，render(dsl, document.querySelector("#root"))
  - 第二层：加一层div，只负责处理右键事件
  - 第三层：加一层div，只处理快捷键
  - event bus：所有层可通过 event bus 进行通信
- 画布功能及拓展：
  - 简单编排
    - 物料均为块级，操作简便，不涉及复杂布局问题
  - 画布灵活编排
    - 无限画布、引导线（衫格）、吸附对齐、旋转、快捷键、右键、缩放 
    - 无限画布：监听滚动事件，每次给画布加宽带
    - 引导线：使用div画线（高度和宽带为1px）、绝对定位可拖动，下方
    - 吸附对齐：计算想尽的dom节点，定6个点和3个线，距离相近时，设置距离为0

##### 配置面板
配置面板就是对物料进行配置，我们需要将数据、视图、操作解耦
- 功能：撤销、重做、预览、提测、发布 
  - 重做（undo/redo）：使用队列，指针移动
  - 预览：render(dsl: {type, key,props{},animate{},actions:{},attrs:{},children[]})
- 中间层：权限控制、数据操作（转换），暴露部分api
这块比较考验大家对于复杂表单的设计实现

##### 渲染器与出码
通常平台会提供 schema 渲染页面的功能，同时也可将所有配置输出 JSON Schema，我们称为出码功能

##### 扩展功能与进阶（这部分内容）
历史记录和版本、模版、分享、主题
进阶：协同编辑、定时任务、微前端（集成到其他系统的能力）、混合开发
- 混合开发：组件（ts、flow）和 json 混合开发
- 逻辑的配置：使用流程图（flow），最后生成业务逻辑
- 协同：crdt算法，yjs、ot 等方案

#### Vue 项目基础架构设计，基于 Vite、Pinia、Vue-Router
技术选型
- 包管理：pnpm
- 工程化相关
  - vite
  - lint-staged
  - cspell
  - commitizen
  - cz-git
  - husky
  - zx
  - tsno
- lint规范：
  - commitlint；
  - stylelint；
  - prettier；
  - eslint；
  - editorconfig;
- Vue CLI、Vue3
- Pinia
- Vue-Router
- 拖拽库：基于原生的 smooth-dnd 封装用于 Vue3 的拖拽组件
- 编辑器：tiptap for vue3，https://tiptap.dev/installation/vue3
- UI 库：Arco Design，https://arco.design/vue/docs/start
- 表单校验：vee-validate，https://vee-validate.logaretm.com/v4/
- 流程编排：@vue-flow/core，https://vueflow.dev/
- 图表：echarts


