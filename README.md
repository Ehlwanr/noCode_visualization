# noCode_visualization
 基于Vue3 + TypeScript的零代码与可视化

## 效果展示

PC 端布局拖拽页面
![pc 布局-1](https://Ehlwanr.github.io/picx-images-hosting/noCode_visualization_images/example_1.1aoxcpkify.webp)
![pc 布局-2](https://Ehlwanr.github.io/picx-images-hosting/noCode_visualization_images/example_2.9gwi37m696.webp)

mobile 端布局拖拽页面
![mobile 布局](https://Ehlwanr.github.io/picx-images-hosting/noCode_visualization_images/example_3.3nrjtwzlvk.webp)

PC 渲染器
![pc 渲染器](https://Ehlwanr.github.io/picx-images-hosting/noCode_visualization_images/example_4.99ta7s1ifa.webp)

mobile 渲染器
![mobile 渲染器](https://Ehlwanr.github.io/picx-images-hosting/noCode_visualization_images/example_5.1e8jafg54t.webp)

数据源管理
![数据源](https://Ehlwanr.github.io/picx-images-hosting/noCode_visualization_images/image.8hgeq1s1ny.webp)

## 物料介绍
### 引述 quote
- 支持修改引述内容
- 支持修改引述类型/颜色
### 图片 image
- 支持修改图片(URL)
### 超级标题 title
- 支持修改标题内容
### 笔记 notes
- 支持 markdown
- 支持修改笔记内容
### 图表 chart
- Echart 支持切换主题色
- ZRender 
- D3
### 表单 table
- input 
- select
### 按钮 button
- 支持定制左中右布局

## 表格备注
- 支持大数据展示
- 仅支持修改 Text 和 Boolean 类型的表格内容

## 项目运行
#### install
`pnpm install` or `pnpm i`
#### run
`pnpm dev`
#### build
`pnpm build-only`


## Vue 项目基础架构设计
### 技术选型
- Vue CLI、Vue3
- 状态管理store: Pinia
- 路由: Vue-Router
- 拖拽库：smooth-dnd
- 编辑器：tiptap for vue3
- UI 库：Arco Design
- 表单校验：vee-validate
- 流程编排：@vue-flow/core
- 图表：echarts
- 包管理：pnpm
