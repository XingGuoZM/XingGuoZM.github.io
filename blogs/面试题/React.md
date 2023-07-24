# React面试题

问题形式构成包括是什么?为什么？优缺点？例如React单向数据流

- 什么是数据流？
- 为什么是自顶向下的？
- 单向数据流是什么意思？
- 为什么是单向的？不能是双向的数据流嘛？
- 单向数据流有什么作用呢

### React概念和理解
```
说说你对声明式编程的理解？声明式和命令式？
说说你对运行时的理解？运行时和编译时?
你对immutable有了解吗？它有什么作用？
immutable的原理是什么？
请描述你对纯函数的理解？

说说你对React的理解？
React是什么？主要特点？设计思想？工作原理？优缺点？对比其他框架

研究过 React 的运行时吗？
React是哪个公司开发的？

你是如何学习React的？
你觉得React上手快不快？它有哪些限制？
在使用React过程中你都踩过哪些坑？你是怎么填坑的？
说说你喜欢React的原因是什么？它有什么优缺点？
你最喜欢React的哪一个特性（说一个就好）？你最不喜欢React的哪一个特性（说一个就好）？
说出几点你认为的React最佳实践

你阅读了几遍React的源码？都有哪些收获？你是怎么阅读的？
React与angular、vue有什么区别？
```

### JSX和虚拟DOM
```
JSX和HTML有什么区别？
浏览器为什么无法直接JSX？怎么解决呢？
说说Real DOM和Virtual DOM的区别？优缺点？框架为什么要设计Virtual DOM？
React的虚拟DOM和Vue的虚拟DOM有什么区别？
你知道Virtual DOM的工作原理吗？
说说React diff的原理是什么？
JSX是什么，它和JS有什么区别？说说React jsx转换成真实DOM的过程？如何解析JSX？
React必须使用JSX吗？
写个例子说明什么是JSX的内联条件渲染？写例子说明React如何在JSX中实现for循环
在JSX中如何写注释？
怎么在JSX里属性可以被覆盖吗？覆盖的原则是什么？
怎么在JSX里使用自定义属性？
怎么防止HTML被转义？
```

### React组件化
```
在构造函数中调用super(props)的目的是什么？
React的书写规范有哪些？
React声明组件有哪几种方法，各有什么不同？
写React你是用es6还是es5的语法？有什么区别？
ES6的语法'...'在React中有哪些应用？
给组件设置很多属性时不想一个个去设置有什么办法可以解决这问题呢？
React中你知道creatClass的原理吗？
React.createClass和extends Component的区别有哪些？
有用过React的严格模式吗？
React的严格模式有什么用处？
请说说React中Portal是什么？
怎样在React中使用innerHTML？
有用过React的Fragment吗？它的运用场景是什么？
在React中遍历的方法有哪些？它们有什么区别呢？
props.children.map和js的map有什么区别？为什么优先选择React的？
受控组件和非受控组件有什么区别？
React中什么是非控组件和受控组件？
在React中无状态组件有什么运用场景？
描述下在React中无状态组件和有状态组件的区别是什么？
写一个React的高阶组件(HOC)并说明你对它的理解
说说你对“在React中，一切都是组件”的理解
createElement与cloneElement两者有什么区别？
解释下React中Element 和Component两者的区别是什么？
解释下React中component和pureComponent两者的区别是什么？
React自定义组件你写过吗？说说看都写过哪些？
React组件的state和props两者有什么区别？
React有几种构建组件的方式？可以写出来吗？
在React中如何判断点击元素属于哪一个组件？
在React中组件和元素有什么区别？
在React中声明组件时组件名的第一个字母必须是大写吗？为什么？
什么是React的实例？函数式组件有没有实例？
使用ES6的class定义的组件不支持mixins了，那用什么可以替代呢？
React的mixins有什么作用？适用于什么场景？

对函数式编程的理解？对高阶组件（HOC）的理解？什么渲染劫持？
举例说明什么是高阶组件(HOC)的属性代理？
举例说明什么是高阶组件(HOC)的反向继承？
在React使用高阶组件(HOC)有遇到过哪些问题？如何解决？
在使用React过程中什么时候用高阶组件(HOC)？
高阶组件(HOC)有哪些优点和缺点？
说说你是怎么理解React的业务组件和技术组件的？
展示组件和容器组件有什么区别？
React怎么拿到组件对应的DOM元素？
装饰器(Decorator)在React中有什么应用？
为什么标签里的for要写成htmlFor呢？
React组件间共享数据方法有哪些？
React的isMounted有什么作用？
React组件命名推荐的方式是哪个？为什么不推荐使用displayName？
React的displayName有什么作用？
React中getInitialState方法的作用是什么？
举例说明React的插槽有哪些运用场景？
你有用过React的插槽(Portals)吗？怎么用？

React中你有使用过getDefaultProps吗？它有什么作用？
React中验证props的目的是什么？
在React中我们怎么做静态类型检测？都有哪些方法可以做到？
React中你有使用过propType吗？它有什么作用？
React中怎么检验props？
使用React的方式有哪几种？
说说你对reader的context的理解
React中除了在构造函数中绑定this,还有别的方式吗？
在React中页面重新加载时怎样保留数据？
React中可以在render访问refs吗？为什么？
React中refs的作用是什么？有哪些应用场景？
为什么建议不要过渡使用Refs？
```

### React更新(setState)和渲染(render)
```
能简单介绍一下React执行过程吗？
React16的reconciliation和commit分别是什么？
React的状态提升是什么？使用场景有哪些？
如何更新组件的状态？
说说React中setState执行机制？setState是同步的还是异步的？
React中可以在render访问refs吗？为什么？
render方法的原理你有了解吗？它返回的数据类型是什么？
自定义组件时render是可选的吗？为什么？
React中怎样有条件地渲染组件？怎样阻止组件渲染？
React为什么不要直接修改state？如果想修改怎么做？
React中如何监听state的变化？
在React中怎样改变组件状态，以及状态改变的过程是什么？
React中的setState和replaceState的区别是什么？
React中的setState缺点是什么呢？
为什么建议setState的第一个参数是callback而不是一个对象呢？
React多个setState调用的原理是什么？
React中setState的第二个参数作用是什么呢？
React中的setState是同步还是异步的呢？为什么state并不一定会同步更新？
React中的setState批量更新的过程是什么？
React中的setState执行机制是什么呢？
请说说你对React的render方法的理解
React的render中可以写{if else}这样的判断吗？
```

### React优化
```
为何说虚拟DOM会提高性能？
在React中如何避免不必要的render？React的优化方法？
React中key的作用？key改了，会发生什么，会执行哪些周期函数？
需要把keys设置为全局唯一吗？
使用webpack打包React项目，怎么减小生成的js大小？
React根据不同的环境打包不同的域名？
为什么建议Fragment包裹元素？它的简写是什么？你有用过React.Fragment吗？说说它有什么用途？
你知道的React性能优化有哪些方法？
如何提高组件的渲染效率呢？
在React中如何避免不必要的render？
render在什么时候会被触发？
React怎样跳过重新渲染？
React怎么判断什么时候重新渲染组件呢？
写出React动态改变class切换组件样式
React中怎么操作虚拟DOM的Class属性？
为什么属性使用className而不是class呢？
请说下react组件更新的机制是什么？
React怎么提高列表渲染的性能？
怎样实现React组件的记忆？原理是什么？
shouldComponentUpdate方法是做什么的？
React中遍历时为什么不用索引作为唯一的key值？
React中的key有什么作用？
如何解决引用类型在pureComponent下修改值的时候，页面不渲染的问题？
```

### React事件
```
说说react的事件机制？16和17有什么区别？
在React中什么是合成事件？有什么用？

请描述下事件在React中的处理方式是什么？
怎样将事件传递给子组件？
React的事件和普通的HTML事件有什么不同？
在React中怎么将参数传递给事件？
在React中怎么阻止事件的默认行为？
举例说明如何在React创建一个事件?
组件卸载前，加在DOM元素的监听事件和定时器要不要手动清除？为什么？
React的触摸事件有哪几种？
```

### React规范
- 
- React中在哪捕获错误？
- 什么是React.forwardRef？它有什么作用？
- 在React中怎么使用async/await？
- 在React中什么时候使用箭头函数更方便呢？
- 使用PropTypes和Flow有什么区别？
- React v15中怎么处理错误边界？
- 说说你对Error Boundaries的理解
- 在React中你有遇到过安全问题吗？怎么解决？
- 
- 使用React的memo和forwardRef包装的组件为什么提示children类型不对？

### React生命周期
```
React 废弃了哪些生命周期？为什么？
React16跟之前的版本生命周期有哪些变化？
说说React的生命周期有哪些？？说说React生命周期有哪些不同的阶段？每个阶段对应的方法是？
componentWillUpdate可以直接修改state的值吗？
React组件的构造函数有什么作用？React组件的构造函数是必须的吗？
super()和super(props)有什么区别？
constructor和getInitialState有不同？
在React中组件的props改变时更新组件的有哪些方法？
React的性能优化在哪个生命周期？它优化的原理是什么？
React的函数式组件有没有生命周期？
React中修改prop引发的生命周期有哪几个？
React中调用setState会更新的生命周期有哪几个？
React中发起网络请求应该在哪个生命周期中进行？为什么？
```
### Fiber/Hook
```
类组件和函数式组件有什么区别？
说说你对fiber架构的理解？解决了什么问题？可中断/恢复怎么实现的？fiber的更新机制
函数式组件有没有生命周期？为什么？
说说你对React的reconciliation（一致化算法）的理解？
React为什么要搞一个Hooks？
React Hooks帮我们解决了哪些问题？
使用Hooks要遵守哪些原则？
请描述下你对React的新特性Hooks的理解？它有哪些应用场景？
在React中组件的state和setState有什么区别？
React hook解决了什么问题？函数组件和类组件区别？为什么不能在条件语句中写Hook？
useState和this.state的区别是什么？
请说说什么是useImperativeHandle？
请说说什么是useReducer？
请说说什么是useRef？
请说说什么是useEffect？
请说说什么是useState？为什么要使用useState？
useState的原理？相对于有状态组件state区别是什么？
useCallback和useMemo的区别？useEffect和useLayoutEffect的区别？useState和useRef的区别？
useEffect 依赖为空数组与 componentDidMount 区别？
为什么React useState要使用数组而不是对象? 
怎样使用Hooks获取服务端数据？
```
### React工程化与三方库
```
简单描述下你有做过哪些React项目？
你用过React版本有哪些？
React18有哪些更新？React 16+和React15的区别？IE支持情况？
React16新特性有哪些？
从旧版本的React升级到新版本的React有做过吗？有遇到过什么坑？

create-react-app有什么好处？
create-react-app创建新运用怎么解决卡的问题？
怎么在React中引入其它的UI库/插件等，例如Bootstrap、jQuery
有用过React Devtools吗？说说它的优缺点分别是什么？
你有用过哪些React的UI库？它们的优缺点分别是什么？
有在项目中使用过Antd吗？说说它的好处
你有做过React的单元测试吗？如果有，用的是哪些工具？怎么做的？
什么是浅层渲染？
你有使用过formik库吗？说说它的优缺点

说说你对React的组件命名规范的理解
说说你对React的项目结构的理解

怎样在React中开启生产模式？
在React中如何去除生产环境上的sourcemap？
不用脚手架，你会手动搭建React项目吗？
Mern和Yeoman脚手架有什么区别？
你有在项目中使用过Yeoman脚手架吗？
你有在项目中使用过Mern脚手架吗？
React的应用如何打包发布？它的步骤是什么？

同时引用这三个库React.js、React-dom.js和babel.js它们都有什么作用？
说说你对受控组件和非受控组件的理解？应用场景？如何给非控组件设置默认的值？
React什么是有状态组件？
常用的React组件

你有用过哪些React的表单库吗？说说它们的优缺点

你有使用过loadable组件吗？它帮我们解决了什么问题？
你有使用过suspense组件吗？它帮我们解决了什么问题？

React怎样引入svg的文件？
在React中怎么使用字体图标？
在React中如何引入图片？哪种方式更好？
举例说明在React中怎么使用样式？
在React中怎么引用sass或less？
怎样动态导入组件？
使用高阶组件(HOC)实现一个loading组件
如何封装一个React的全局公共组件？
React如何进行代码拆分？拆分的原则是什么？

怎么定时更新一个组件？
使用React写一个todo应用，说说你的思路

创建React动画有哪些方式？
如何用React实现滚动动画？
在React项目中你用过哪些动画的包？
React有哪几种方法来处理表单输入？

怎样将多个组件嵌入到一个组件中？

有用过React的服务端渲染吗？怎么做的？

```

### React组件通信和状态管理
```
React组件间的通信有哪些？兄弟/非兄弟/父子/非父子
为什么说React中的props是只读的？在React中你有经常使用常量吗？
如果组件的属性没有传值，那么它的默认值是什么？
在React中你是怎么进行状态管理的？
在React怎么使用Context？说说Context有哪些属性？
怎么使用Context开发组件？
为什么React并不推荐我们优先考虑使用Context？
除了实例的属性可以获取Context外哪些地方还能直接获取Context呢？
childContextTypes是什么？它有什么用？
contextType是什么？它有什么用？
Consumer向上找不到Provider的时候怎么办？
有使用过Consumer吗？
状态管理器解决了什么问题？什么时候用状态管理器？状态管理器它精髓是什么？
redux工作原理？mobx工作原理？
什么是Redux？说说你对Redux的理解？有哪些运用场景？
redux三个原则？
你有了解Rxjs是什么吗？它是做什么的？
在Redux中怎么发起网络请求？
Redux怎样重置状态？
Redux怎样设置初始状态？
Context api可以取代Redux吗？为什么？
推荐在reducer中触发Action吗？为什么？
Redux怎么添加新的中间件？
redux-saga和redux-thunk有什么本质的区别？
在React中你是怎么对异步方案进行选型的？
你知道redux-saga的原理吗？
你有使用过redux-saga中间件吗？它是干什么的？
Redux中异步action和同步action最大的区别是什么？
Redux和vuex有什么区别？
Redux的中间件是什么？你有用过哪些Redux的中间件？
说说Redux的实现流程
Mobx的设计思想是什么？
Redux由哪些组件构成？
Mobx和Redux有什么区别？
在React项目中你是如何选择Redux和Mobx的？说说你的理解
你有在React中使用过Mobx吗？它的运用场景有哪些？
Redux的thunk作用是什么？
Redux的数据存储和本地储存有什么区别？
在Redux中，什么是reducer？它有什么作用？
举例说明怎么在Redux中定义action？
在Redux中，什么是action？
在Redux中，什么是store？
为什么Redux能做到局部渲染呢？
说说Redux的优缺点分别是什么？
Redux和Flux的区别是什么？
什么是单一数据源？

你有写过React的中间件插件吗？
React的中间件机制是怎么样的？这种机制有什么作用？
React中你用过哪些第三方的中间件？
```

### 前端路由
```
React-Router工作原理？为什么需要前端路由？前端路由解决了什么问题？前端通用路由解决方案？
React-Router怎么获取历史对象？
React-Router怎么获取URL的参数？
在history模式中push和replace有什么区别？
React-Router怎么设置重定向？
React-Router 4中<Router>组件有几种类型？
React-Router 3和React-Router 4有什么变化？添加了什么好的特性？
React-Router的实现原理是什么？
React-Router 4的switch有什么用？
React-Router的路由有几种模式？
React-Router 4怎样在路由变化时重新渲染同一个组件？
React-Router的<Link>标签和<a>标签有什么区别？
React的路由和普通路由有什么区别？
请你说说React的路由的优缺点？
请你说说React的路由是什么？
路由切换时同一组件无法重新渲染的有什么方法可以解决？
```



## 冷门
- 说说你对windowing的了解
- React Intl是什么原理？你有使用过React Intl吗？怎么实现React组件的国际化呢？
- 说说你对Relay的理解


