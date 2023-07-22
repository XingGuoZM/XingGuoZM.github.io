# React发展历史

### 如何定义React？React是什么？
react是一个UI界面库，专注于视图层的实现。拥有三个维度的优点，
第一对于用户使用来说，采用声明式编程，本质为组件化，分而治之
第二对于底层DOM更新来说，采用虚拟dom，diff找到变化部分，实现最小化更新
第三对于其他类库和框架来说，React能够与它们配合使用

如果把React比作一个中层管理者，对上能够让老板知道你带领的团队有什么样的能力，对下能够让下面的人工作更有效率，和同等级的其他中层合作融洽，不会产生冲突。

因此我们可以称React是一个基于组件化的开发模式、采用虚拟DOM来最小化更新DOM、通过props数据通信和state更新数据、为抹平不同浏览器差异而统一封装DOM事件系统的UI界面库。如果把react比做一家公司，这家公司的流程是规范而且清晰的，你要更新组件必须通过setState来提交更新流程，通过流程能找到并实现最小化的更新；你要监听一个事件，规范的事件触发系统能够帮助你应对外部环境下不可预知的错误

### React主要为解决什么问题而产生的

我们先来分析一下设计一个前端框架需要考虑到哪些问题？

首先开发过程中问题，考虑学习门槛（快速上手）、使用门槛（预备知识）、灵活（对业务架构设计）、开发效率（代码的复用和移植）

其次运行过程中的问题，考虑兼容性（各个平台/浏览器支持情况）、稳定性和容错容灾（各种极端环境的边界考虑，如网络、内存、）、安全性（）

最后后期迭代中的问题，考虑扩展性(跨端)

React解决了哪些问题？

jsx->灵活、组件化->可复用和移植，事件系统/虚拟DOM->兼容性，react/react-dom分工明确->扩展性，跨端等

React设计
1. react怎么实现渲染的

jsx->React Component,
reconcile ->

ReactComponent


### React主要版本

react 0.3
```
初步确定了react的运作机制，拥有核心组成部分，组件（拥有渲染方法的对象，支持原生HTML标签，div等）、jsx、事件、事务、虚拟DOM等
```
react 0.4
```
支持更多原生HTML标签如canvas、iframe
支持服务端渲染
添加prop验证和默认值
支持列表key，在协调时进行更精细的控制
对input、textarea、option和select标签进行包装成受控组件
移除事件的autoBind
实现标准的符合W3C规范的事件系统
setState,组件批量更新
```
react 0.5
```
优化相关：内存使用提升、性能提升加快速度、更好的服务端渲染
标准化：标准化prop、支持合成事件、添加一系列html标签属性（完善HTML标签
开始着手性能分析
使用react开发chrome插件成为可能
```
react 0.8
```
发布了npm包，可以通过npm install安装
完善了一些html标签的属性支持，如textarea标签的rows和cols属性，script标签的defer和async属性
改进了错误消息
支持onContextMenu事件，支持IE11的Selection事件
```
react 0.9
```
重大变更：整页渲染（渲染html标签）只支持服务端渲染，一些api的使用变更，例如this.context只能在react内部使用
新特性：对html标签的属性/事件较为完善的支持、propTypes的完善、jsx支持空格
修复bug：支持key值包含'.'
```
react 0.11
```
重大变更：自定义的propType应该返回error
新特性：React.Children.count
修复bug：重渲染的批处理支持更多情况，css支持属性的前缀（Webkit, ms, Moz, O），重复keys降级为warning,在没有DOM的环境下setState可以在componentWillMount中调用
```
react 0.12
```
重大变更：key和ref不挂在prop上，直接挂在元素上，
新特性：jsx的prop解构传值，完善HTNL标签的属性
```
react 0.13
```
新特性：通过es6 class构建组件、React.findDOMNode(component)、React.cloneElement(el, props)、setState接收一个函数
```
react 0.14
```
新特性：分离react-dom包，修改react-dom bug
```
react 15
```
react-dom
react-perf
react-native
新特性：初始渲染使用document.createElement而不是通过生成html字符串然后innerHTNML的方式、错误/警告栈、React.pureComponents、通过各种方式提高开发构建时性能
```
react 16
```
react-reconciler
react-art
react-is
scheduler
新特性：render函数可以返回字符串或者数组、Error boundaries 、传送门ReactDOM.createPortal()、流模式服务端渲染
、React.createRef()、React.forwardRef()、React.lazy()Suspense、React.memo()

ReactDOM添加getDerivedStateFromProps()、getSnapshotBeforeUpdate()生命钩子、添加严格模式<React.StrictMode>、<Context.Consumer>
```

react 16.8
```
hook
useState、useReducer、useEffect、useMemo、useCallback、useImperativeHandle、useLayoutEffect

```
react 16.9
```
<React.Profiler>：收集性能度量
```
react 16.13
```
Concurrent Mode

```

react 17
```
解决一些问题 fix bugs
移除一些没有用到的依赖
```

react 18
```
react-dom/client
react-dom/server
useId、useTransition、useDeferredValue、useSyncExternalStore、useInsertionEffect

client：reactDOM.createRoot()、reactDOM.hydrateRoot()
```