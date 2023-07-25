
# Hooks

### 来源
为细粒度的代码复用，不和组件复用捆绑在一起。HOC和Render Props都是基于组件的组合方案，先把要复用的逻辑封装成组件，再利用组件复用机制实现逻辑复用。将函数当成最小的代码复用单元同时内置一些模式简化状态逻辑复用

### Hook不足
1. 额外学习成本，函数组件和类组件的比较
2. 写法限制，增加重构成本
3. 破坏了PureComponent、React.memo浅比较的性能优化效果
4. 闭包场景可能引用到旧的state、props值
5. 内部实现上不直观，依赖一份可变的全局状态，不再那么pure
6. React.memo并不能完全替代ShouldComponentUpdate（拿不到state change，只针对props change）
7. useState API设计上不完美（初始化、可选链、闭包陷阱、引用类型、多个状态）
