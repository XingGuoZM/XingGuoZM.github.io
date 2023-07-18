# Hooks

## 历史

mvc软件架构模式

Backbone
- [Backbone.js 的最佳应用场景有哪些？](https://www.zhihu.com/question/19720745/answer/14315565)


### React作用（解决了什么问题/产生什么影响/核心的几个版本）
react提出了全新的组织代码的方式，使其更可预测，即页面组件化。并且加入了DOM diff，当DOM发生变化时，通过dom diff算法计算出变化点，以最小粒度更新。通过将用户界面拆分成更细粒度的包含逻辑代码段的组件描述来减少构建UI时发生的错误。

react核心版本16.8，全新的Fiber架构、加入Hook

### React特点（优缺点）
react是一个组件化、单向数据流、支持函数式编程、基于Virtual DOM、专注视图层的UI框架，其优点是代码逻辑简单、性能出众、能和其他库一起使用，渲染到特定的环境。由于其特定的更新方式，非常容易造成重渲染，导致不需要更新的组件更新了

### 应对后来的框架

preact：能实现react的核心功能，体积比react小很多

vue：mvvm框架，能达到视图细粒度的更新

solid：去除Virtual DOM
svelet：去除Virtual DOM
