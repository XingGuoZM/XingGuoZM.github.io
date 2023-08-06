
  import React,{useEffect} from 'react';
 
  import 'highlight.js/styles/xcode.css';
  const hljs = require('highlight.js');

  export default () => {
    useEffect(()=>{
      document.querySelectorAll('code').forEach(el => {
        el.style.backgroundColor='#f8f8f8';
        el.style.marginBottom='0.1rem';
        hljs.highlightElement(el);
      });
    },[])
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h1>React常见的面试题</h1>
<p>问题形式构成包括是什么?为什么？优缺点？例如React单向数据流</p>
<pre><code>什么是数据流？
为什么是自顶向下的？
单向数据流是什么意思？
为什么是单向的？不能是双向的数据流嘛？
单向数据流有什么作用呢
</code></pre>
<h3>React概念和理解</h3>
<ul>
<li>说说你对声明式编程的理解？声明式和命令式？</li>
</ul>
<pre><code>声明式面向对象编程，命令式面向过程编程
例如要绘制一个按钮，命令式写法是html+css,直接写。声明式写法，先new一个按钮对象，调用对象的各种方法set边框，背景，边距等
</code></pre>
<ul>
<li>说说你对运行时的理解？运行时和编译时?</li>
</ul>
<pre><code>运行时即代码的运行阶段，代码被机器识别解析过程
编译时即源代码需要被编译成机器可以识别的程序，这个阶段就是编译时
例如document.createElement,document.appendChild等就是运行时，它能直接被浏览器所识别，做过其他转化即编译时
</code></pre>
<ul>
<li>你对immutable有了解吗？它有什么作用？</li>
</ul>
<pre><code>不可变（immutable）指的是 在变量赋值或对象创建结束之后就使用者就不能再改变它的值或状态。java中的final关键词/String，js中的const。不可变指的是对象的引用不可变

不可变通常用于：常量、只读变量。常量指的时默认不会变的值，例如圆周率，摄氏度转华氏度的差值。我们在还没写代码前就知道这些值了，且它们永远不会变；只读变量的值是在 程序运行时才初始化的，初始化后就不会再变化

不可变关键字的上述这两种用法主要出于两个目的

1. 增强语义，提高代码可读性 —— 阅读代码时，一看就能把常量和只读变量和其他可变变量区别开。
（拓展：不少学生/初级程序员轻视了代码的可读性，其实优秀的代码最重要的指标之一就是可读性 —— 高质量的代码结构分明，一目了然，方便扩展。可读性高的代码可维护性自然也高，即使有bug也能快速定位到。）
2. 防止人为错误不小心修改 —— 试想一下一个数学计算程序里， PI 的值不小心被修改了，会有什么后果

不可变还有其他好处

1. 线程安全：不可变对象天然支持线程安全 —— 创建成功后就不变，可读不可写，大大降低了编写多线程代码的负担。
2. 参数传递和避免副作用：有副作用的函数/方法经常会产生一些隐晦的bug。一个对象作为参数传入了一些函数/方法，却被故意/无意地修改了其中的值，然而代码的其他部分并不知情，就会产生意料之外的bug。一个有益的办法就是将作为参数的对象类设计成不可变的，在编码和编译时期就直接避免了这个问题。
3. interning 和 object pooling（对象池）
//Java
String s1 = &quot;Hello&quot;;
String s2 = &quot;Hello&quot;;
System.out.println(s1 == s2); // 输出 true

//Java
String s1 = new String(&quot;Hello&quot;); // 非字面量
String s2 = new String(&quot;Hello&quot;);
System.out.println(s1 == s2); // 输出 false

4. 不可变对象的变化和对比优势
由于不可变对象创建后值就不再变化，想“更改”它的值只有一个办法就是创建一个新的对象。如果“修改的逻辑”处理之后不发生任何变化，那么就把原对象返回。这种设计的好处就是直接比较原对象和新对象的引用地址就可以知道是否发生变化，大大提高了比较的性能。react 和 redux 就采用了这种设计：redux store 内的 state 可以直接使用 === 来比较，确认是否发生了变化。React 的 state, props 也是如此。

不可变也存在一些痛点
1.  很多时候，不可变对象的设计都会导致更多的对象被创建，造成了一定的内存压力，但事实上，这点内存压力并不会对性能造成太大影响。相比不可变带来的好处而言，这不算什么。
2. 创建不可变对象有时候需要会写更多的代码，例如redux 或 react 中，假设有一下 state 定义


//JavaScript
const state = {
  a: &quot;jobs&quot;,
  b: {
    e: {
      f: {
        g: &quot;hello&quot;,
        y: &quot;omg&quot;
      },
      k: 3
    },
    i: 2
  },
  h: &quot;deep&quot;
}
要基于state生成一个新的state，且更改 g 的值，用原生ES6语法就得这么写

//JavaScript
const newState = {
  ...state,
  b: {
    ...state.b,
    e: {
      ...state.b.e,
      f: {
        ...state.b.e.f,
        g: &quot;new hello&quot;      
      }
    }
  }
}
对于存在深层嵌套的对象，有不少解决方案，比如immer.js
import produce from &quot;immer&quot;

const newState = produce(state, draftState => {
  draftState.b.e.f.g=&quot;new hello&quot;
})
</code></pre>
<ul>
<li>immutable.js的原理是什么？</li>
</ul>
<pre><code>Immutable.js 采用了持久化数据结构和结构共享，保证每一个对象都是不可变的，任何添加、修改、删除等操作都会生成一个新的对象，且通过结构共享等方式大幅提高性能。

对于一个持久化数据结构，每次修改我们都会得到一个新的版本，且旧版本可以完好保留。
结构共享：新生成一个根节点，对于有修改的部分，把相应路径上的所有节点重新生成，对于本次操作没有修改的部分，我们可以直接把相应的旧的节点拷贝过去，这其实就是结构共享。

</code></pre>
<ul>
<li>请描述你对纯函数的理解？</li>
</ul>
<pre><code>纯函数有两个特点

1. 相同的输入，永远会得到相同的输出。
2. 执行过程中不会产生副作用
</code></pre>
<ul>
<li>说说你对React的理解？React是什么？主要特点？设计思想？工作原理？优缺点？对比其他框架</li>
</ul>
<pre><code>react是一个js库。它专注于视图层ui的渲染，能将页面拆分成小块独立开发，最后经过一定的逻辑进行组装得到我们需要的前端系统，并且可与其他库和框架结合使用。遵循组件化的开发模式、声明式编程范式和函数式编程概念，让前端应用的开发更加高效。。它有以下四个特点
1. 页面组件化：React将UI分解为小的、可重用的组件，使得开发人员可以更轻松的组合和重用代码，React的组件化使得代码更容易维护和测试。

2. 虚拟DOM：虚拟DOM是一个轻量级的js对象，用于表示真实dom的层次结构。第一个好处是可以保证性能下限，通过虚拟dom，React使用了diff算法来计算出两次dom变更的最小差异，并且只渲染最小差异变化，同时React会将多次dom操作进行合并并且批量更新，从而提升性能，即在不需要手动优化的情况下，依然可以提供还不错的性能；第二个好处是们不再需要手动去操作 DOM，开发者只需专注于代码逻辑，框架会帮助我们以可预期的方式更新视图，极大提高我们的开发效率；第三个好处是虚拟 DOM 本质上是 JavaScript 对象,与平台不相关，可以更方便的跨平台操作，例如服务端渲染、native等

3. 状态驱动视图：即UI=F(data),状态是输入, 视图是输出: 状态 => 视图, 视图是基于状态的渲染结果。核心思想就是: 只要状态变化, 就重新渲染视图。状态不能直接修改，而是要通过setState方法进行修改

4. 单向数据流：即数据从父组件通过props传给子组件的过程中，子组件只接收父组件传来的props，并且响应父组件传来的 props的变化，而不能直接修改props来影响父组件。单向数据流的好处在于所有的状态改变可追溯。

它的设计思想
  React的设计思想是用js构建快速响应的大型Web应用程序，其设计理念就是快速响应。为了实现这一理念，需要突破CPU的瓶颈和IO瓶颈。CPU瓶颈即当遇到大计算量的操作或者设备性能不足使页面掉帧，导致卡顿。IO瓶颈即发送网络请求后，由于需要等待数据返回才能进一步操作导致不能快速响应。

  由于js引擎和gui渲染线程的互斥性，当js执行时间过长，超出了浏览器的刷新频率（每一次16.7ms），那么这次刷新就没有时间执行样式布局和样式绘制了。导致页面掉帧，造成卡顿。react为了解决这个问题，通过时间切片的方式将长任务分拆到每一帧中，这就就能让浏览器有时间渲染UI，避免阻塞ui渲染。

  为了解决IO瓶颈，React实现了Suspense组件及配套的hook——useDeferredValue。来应对异步操作带来的ui不一致问题。

工作原理
  React是一个专注于视图渲染的ui库，它的更新原理即
  1. 调用函数组件或者调用类组件的render方法，将返回的JSX转化为虚拟DOM;
  2. 将虚拟DOM和上次更新时的虚拟DOM对比;
  3. 通过对比找出本次更新中变化的DOM节点;
  4. 通知渲染器将变化的DOM节点渲染到页面上;

对比其他框架

  jquery：事件驱动，优点开发迅速，缺点混乱易错，在大量dom需要更新的情况容易出错
  react：状态驱动，基于单向数据流、组件化、虚拟dom的运行时框架
  vue：mvvm，基于视图和状态双向绑定的编译时+运行时的框架，使用模版语法，可以使用 v-if v-for 这些指定的语法去编码，虽然这不够动态，但是由于语法是可枚举的，所以它可以在预编译层面做更多的预判，让Vue在运行时有更好的性能
  svelte：纯编译时，性能好
  backbone.js：mvc

  React面世时提出的三个核心特点是Just UI、 虚拟dom和单向数据流，随着React团队对于React的不断优化，现在React的三个最大特点是声明式、组件化和多端(native、node)渲染

  Just UI：React可以认为只是一个模板引擎，使用在任何mv*(mvc,mvvvm等)的框架中做view层，使用react的组件化思想。在MVC模式中，controller是十分重要的一环，它负责从数据库中取出数据并处理渲染到View上，同时当用户进行交互时它也负责获取用户交互内容并处理，进而存储到数据库中，controller承担了巨大的责任。然而，随着项目越来越复杂，尤其是数据解析能力的复杂化，承担巨大责任的controller会变得越来越复杂和臃肿，使其难以维护。聪明的开发者提出了ViewModel的概念，ViewModel的主要作用就是处理数据解析。ViewModel将用户行为和视图状态的处理抽象出来，成为可复用的模块，解决了复杂数据处理下Controller的臃肿，和频繁更新dom等问题
</code></pre>
<ul>
<li>研究过 React 的运行时吗？</li>
</ul>
<pre><code>React 是一个重运行时的框架，在数据发生变化后，并没有直接去操作dom，而是生成一个新的虚拟dom，它可以帮助我们解决跨平台和兼容性问题，并且通过diff算法得出最小的操作行为，这些全部都是在运行时来做的，而Svelte ，就是一个典型的重编译的框架，作为开发者我们只需要去写模版和数据，经过Svelte的编译和预处理，代码基本全部会解析成原生的DOM操作，Svelte的性能也是最接近原生js的。

React本身的思路是纯JS写法，这种方式非常灵活，但是，这也使它在编译时很难做太多的事情，像上面这样的编译时优化是很难实现的。所以，我们可以看到React几个大版本的的优化主要都在运行时。运行时主要关注CPU和IO问题，

react 15版本架构：协调+渲染，比较两颗虚拟Dom进行Diff找出变化进行渲染，更新的批处理。由于本身架构的问题，diff是通过递归同步更新的，如果节点非常多，即使只有一次state变更，React也需要进行复杂的递归更新，递归更新时间超过了16ms，如果这时有用户操作或动画渲染等，就会表现为卡顿。

react 16版本架构：协调+调度+渲染，通过时间切片的方式将长任务拆分到每一帧中，每一帧执行一小段任务。底层重构完成了Fiber架构，实现异步可中断可恢复的更新操作,并且实现按照优先级执行任务。
</code></pre>
<ul>
<li>你是如何学习React的？</li>
</ul>
<pre><code>1. 获取高质量的资料（官方、权威）
2. 敢于尝试和勤于练习
3. 善于思考总结、愿意交流分享
4. 持续学习
</code></pre>
<ul>
<li>你觉得React上手快不快？它有哪些限制？</li>
</ul>
<pre><code>1. React 只是一个库，而不是一个完整的框架
2. 它的库非常庞大，需要时间来理解
3. 新手程序员可能很难理解
4. 编码变得复杂，因为它使用内联模板和JSX
</code></pre>
<ul>
<li>在使用React过程中你都踩过哪些坑？你是怎么填坑的？</li>
</ul>
<pre><code>1. React最大的问题是重渲染问题，即父组件更新时，它下面的所有子组件也会默认更新（如果不做处理的话）。
2. setState是同步还是异步的问题
3. react合成事件的问题，合成事件是池化的，也就是说不同的事件，可能会共享一个合成事件对象。React对所有事件都进行了代理，将所有事件都绑定document上

class component 
1. extends React.Component或者React.pureComponent,导致依赖不透明
2. 类组件，this 默认不指向组件实例
在construtor中绑定this，或者使用箭头函数

react hooks
必须在函数组件中才能使用且不能在循环、条件的代码段里调用。

关于useState
1. 一个state必须不能通过其它state/props直接计算出来，否则就不用定义state
2. useState返回的更新状态方法是异步的，要在下次重绘才能获取新值。不要试图在更改状态之后立马获取状态
3. 管理多个字段时适当合并

关于useEffect
1. 闭包问题
组件中出现setTimeout等闭包时，尽量在闭包内部引用ref而不是state，否则容易出现读取到旧值的情况

</code></pre>
<ul>
<li>说说你喜欢React的原因是什么？它有什么优缺点？</li>
</ul>
<pre><code>1. 能够实现服务器端的渲染，便于搜索引擎优化。
2. 能够很好的和现有的代码结合。React专注View层，
3. 组件化，React部分重构因为一切都是component，所以代码更加模块化，重用代码更容易
4. 虚拟DOM，性能很好
5. 灵活，

</code></pre>
<ul>
<li>你最喜欢React的哪一个特性（说一个就好）？你最不喜欢React的哪一个特性（说一个就好）？</li>
</ul>
<pre><code>最喜欢函数式编程
它与react设计是贴合的，在 React中，强调一个组件不能去修改传入的prop值，也是遵循Immutable的原则。React中的render函数应该是一个纯函数来保证组件渲染的结果只和props和state有关系，遵从UI = F(data)公式

最不喜欢React的合成事件
现代浏览器的DOM API已经趋于一致和稳定。只要放弃 IE，打薄事件层，立刻可以让react-dom大幅度瘦身。并且这个合成事件带来了和原生事件不一致的地方。例如onChange 和 onInput。
</code></pre>
<ul>
<li>说出几点你认为的React最佳实践</li>
</ul>
<pre><code>在管理react项目时需要做到高内聚低耦合可扩展、分离关注点，降低心智负担，持续降低复杂度，因此以下几点非常重要
1. 做好状态管理
多个组件的状态同步
子组件通过props去操作父组件的状态
跨多级组件传递状态
2. 类型很重要
3. 不要自己封装公用函数
处理时间的库：day.js。
处理数据的库：lodash。
处理表单的库：formik。
处理数据请求的库：SWR、axios
4. 管理好项目目录
5. 选择适合自己的组件库
mantine
Antd
Mui
如果是 C 端项目，建议使用 TailwindCSS。
</code></pre>
<ul>
<li>你阅读了几遍React的源码？都有哪些收获？你是怎么阅读的？</li>
</ul>
<pre><code>阅读源码的收获
阅读源码的过程中，能够了解底层是怎么运作的。如果在工作中遇到某些问题，如果读过源码，就会找到办法，问题也就会迎刃而解

阅读源码绝对是提高编程能力，拓展知识点的捷径

优秀的源码有着纵览大局，运筹帷幄的思维，和中流砥柱的架构能力，这对一个正在进阶或者正打算进阶的工程师来说，是最缺少的。

如何进行阅读
1. 有计划的去阅读源码。把整个源码分割成多个模块，一点点去消化，不要想着一口气把源码看完，一天抽出时间看一点，然后重点记笔记。
2. 在阅读源码的时候先问几个为什么？带着问题去看源码会起到事半功倍的效果
3. 我们要学会提炼源码的精髓，把真正的核心逻辑代码提取出来
4. 实践是检验真理的唯一标准。如果想搞清楚源码，不要单独停留在看的层面，也要真正去跑一遍源码
5. 并不是所有的框架源码都需要一个固定的模式去解析的，不同的框架用不同的方法

</code></pre>
<h3>JSX和虚拟DOM</h3>
<ul>
<li>React必须使用JSX吗？</li>
</ul>
<pre><code>React 并不强制要求使用JSX。当你不想在构建环境中配置有关JSX编译时，不在React中使用JSX会更加方便。每个JSX元素只是调用React.createElement(component, props, ...children)的语法糖。因此，使用JSX可以完成的任何事情都可以通过纯 JavaScript 完成。
</code></pre>
<ul>
<li>JSX和HTML有什么区别？</li>
</ul>
<pre><code>1. HTML 和 JSX 之间的主要区别之一是，在 JSX 中，你必须返回单个父元素，否则将无法编译。

2. 在JSX中，可以直接编写JS。你可以通过将JS放在花括号 {...} 中来实现。而在 HTML 中，你需要一个脚本标签或一个外部JS文件来实现JS

3. 标签可以在 JSX 中自闭合。也就是说，可以将 <div></div> 写成 <div />，将 <span></span> 写成 <span />。HTML 中的自闭合标签可以在右尖括号没有斜线的情况下自闭合，即 <br /> 可以写成 <br>。但是在 JSX 中，需要加上斜杠。这应该让人想到——JSX 严重依赖于 HTML 4 语法。

4. 要在 JSX 中定义 class 名和 for 属性，不要将其定义为 class 或 for，因为两者都是 JavaScript 中的保留关键字。你实际上使用 class 关键字创建 class 组件。因此，要在 JSX 中定义 class 名，你可以将其定义为 “className”，而对于标签的 for 属性，你可以写成 “HTMLFor”

5. 在编写 JSX 时，你需要将所有 HTML 属性和事件引用以驼峰命名法编写。所以，onclick 变成 onClick，onmouseover 变成 onMouseOver，依此类推

6. 在 JSX 中将内联样式编写为对象
</code></pre>
<ul>
<li>JSX是什么，它和JS有什么区别？说说React jsx转换成真实DOM的过程？如何解析JSX？</li>
</ul>
<pre><code>JSX是react的语法糖，它允许在html中写JS，它不能被浏览器直接识别，需要通过webpack、babel之类的编译工具转换为JS执行

JSX与JS的区别：
JS可以被打包工具直接编译，不需要额外转换，jsx需要通过babel编译，它是React.createElement的语法糖，使用jsx等价于React.createElement
jsx是js的语法扩展，允许在html中写JS；JS是原生写法，需要通过script标签引入

react中的jsx语法会通过babel转化为 js代码，以React.createElement函数形式存在，createElement函数返回一个ReactElement函数，ReactElement函数返回一个的虚拟节点，虚拟节点中嵌套虚拟节点，就形成了虚拟DOM，最后通过ReactDOM.render方法转化为真实DOM。

babel在转化jsx过程中，会判断首字母大小写
当首字母为小写的时候，会被认为是原生DOM标签，那么createElement中的第一个参数就是一个字符串，表示标签的名称
当首字母为大写的时候，会被认为是组件，那么createElement中的第一个参数就是组件的名称

createElement会根据传入的type进行判断
如果是原生标签节点，type是字符串，如 span div
如果是文本节点，type就没有
如果是函数组件，type就是函数名
如果是类组件，type就是类组件名

</code></pre>
<ul>
<li>浏览器为什么无法直接JSX？怎么解决呢？</li>
</ul>
<pre><code>因为浏览器只能解决原生的JS代码，jsx不属于原生的js，它是类似于html的语法，然后转化成一个js对象。 这个转化的过程就是通过Babel的@babel/plugin-transform-react-jsx插件实现的。 
</code></pre>
<ul>
<li>怎么防止HTML被转义？</li>
</ul>
<pre><code>直接使用 UTF-8 字符 ©
使用对应字符的 Unicode 编码，查询编码
使用数组组装 <div>{['cc ', <span>&amp;copy;</span>, ' 2015']}</div>
直接插入原始的 HTML
</code></pre>
<ul>
<li>写React你是用es6还是es5的语法？有什么区别？</li>
</ul>
<pre><code>使用createClass, 每一个函数属性都会被React自动绑定。指的是this.whateverFn这样的函数在任何你需要调用的时候都会自动为你绑定正确的this。

在ES6的class中，就不同了: 函数不再被自动绑定。你需要手动去绑定它们。最好的地方就是和以上例子一样，在构造函数里。
</code></pre>
<ul>
<li>ES6的语法'...'在React中有哪些应用？</li>
</ul>
<pre><code>1. 向子组件传递props
2. redux中参数合并
</code></pre>
<ul>
<li>给组件设置很多属性时不想一个个去设置有什么办法可以解决这问题呢？</li>
</ul>
<pre><code>通过es6展开符。例如<MyComp {...this.props}/>
</code></pre>
<ul>
<li>为什么建议Fragment包裹元素？它的简写是什么？你有用过React.Fragment吗？说说它有什么用途？</li>
</ul>
<pre><code>在我们定义组件的时候return里最外层包裹的div往往不想渲染到页面，那么就要用到我们的Fragment组件了。它可以代替div作为外层，可做不可见的包裹元素。它的简写为<></>。
</code></pre>
<ul>
<li>React中怎么操作虚拟DOM的Class属性？</li>
</ul>
<pre><code>通过组件的内置方法classList，包含contains,add等方法
</code></pre>
<ul>
<li>为什么属性使用className而不是class呢？为什么标签里的for要写成htmlFor呢？</li>
</ul>
<pre><code>JS的DOM API中使用的是className，React的JSX为了保持和DOM API一致。
同理还有for-> htmlFor
</code></pre>
<ul>
<li>说说Real DOM和Virtual DOM的区别？优缺点？框架为什么要设计Virtual DOM？</li>
</ul>
<pre><code>Real DOM 意思为文档对象模型，是一个结构化文本的抽象，在页面渲染出的每一个结点都是一个真实DOM结构
Virtual Dom，本质上是以 JavaScript 对象形式存在的对 DOM 的描述

区别
虚拟DOM不会进行排版与重绘操作，而真实DOM会频繁重排与重绘
虚拟DOM的总损耗是“虚拟DOM增删改+真实DOM差异增删改+排版与重绘”，真实DOM的总损耗是“真实DOM完全增删改+排版与重绘”

真实DOM优缺点
优点：易用
缺点：效率低，解析速度慢，内存占用量过高性能差：频繁操作真实DOM，易于导致重绘与回流

虚拟DOM的优缺点
优点
简单方便：如果使用手动操作真实DOM来完成页面，繁琐又容易出错，在大规模应用下维护起来也很困难
性能方面：使用Virtual DOM，能够有效避免真实DOM数频繁更新，减少多次引起重绘与回流，提高性能
跨平台：React借助虚拟DOM， 带来了跨平台的能力，一套代码多端运行

缺点
在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化
首次渲染大量DOM时，由于多了一层虚拟DOM的计算，速度比正常稍慢

</code></pre>
<ul>
<li>React的虚拟DOM和Vue的虚拟DOM有什么区别？</li>
</ul>
<pre><code>结构并没有多大差别，主要体现在diff过程中的差别

vue基于编译时+运行时的框架，做到动静结合的 DOM diff，之所以能够做到预编译优化，是因为 Vue core 可以静态分析 template，在解析模版时，整个 parse 的过程是利用正则表达式顺序解析模板，当解析到开始标签、闭合标签、文本的时候都会分别执行对应的回调函数，来达到构造 AST 树的目的。

react是重运行时框架，React JSX 过度的灵活性导致运行时可以用于优化的信息不足，但是，在 React 框架之外，我们作为开发者还是可以通过工程化手段达到类似的目的，因为我们能够接触到 JSX 编译成 React.createElement 的整个过程。开发者在项目中开发 babel 插件，实现 JSX 编译成 React.createElement，那么优化手段就是是从编写 babel 插件开始。
</code></pre>
<ul>
<li>你知道Virtual DOM的工作原理吗？</li>
</ul>
<pre><code>创建和更新：即创建或者更新js对象的属性，更难且核心的部分是diff，diff的目的就是比较新旧Virtual DOM Tree找出差异并更新
diff：通常情况下的DOM变更是同级的,因此在现代的各种Virtual DOM库都是只比较同级差异，双端比较过程即
1. 头头对比: 对比两个数组的头部，如果找到，把新节点patch到旧节点，头指针后移
2. 尾尾对比: 对比两个数组的尾部，如果找到，把新节点patch到旧节点，尾指针前移
3. 旧尾新头对比: 交叉对比，旧尾新头，如果找到，把新节点patch到旧节点，旧尾指针前移，新头指针后移
4. 旧头新尾对比: 交叉对比，旧头新尾，如果找到，把新节点patch到旧节点，新尾指针前移，旧头指针后移
5. 利用key对比: 用新指针对应节点的key去旧数组寻找对应的节点,这里分三种情况,当没有对应的key，那么创建新的节点,如果有key并且是相同的节点，把新节点patch到旧节点,如果有key但是不是相同的节点，则创建新节点

优化：双端比较算法
</code></pre>
<ul>
<li>说说React diff的原理是什么？</li>
</ul>
<pre><code>diff算法就是更高效地通过对比新旧Virtual DOM来找出真正的Dom变化之处,react中diff算法主要遵循三个层级的策略：

1. tree层级:DOM节点跨层级的操作不做优化，只会对相同层级的节点进行比较,只有删除和创建操作
2. conponent 层级:如果是同一个类的组件，则会继续往下diff运算，如果不是一个类的组件，那么直接删除这个组件下的所有子节点，创建新的
3. element 层级:对于比较同一层级的节点们，为了节点复用，每个节点在对应的层级用唯一的key作为标识。提供了 3 种节点操作，分别为 INSERT_MARKUP(插入)、MOVE_EXISTING (移动)和 REMOVE_NODE (删除)
</code></pre>
<ul>
<li>为何说虚拟DOM会提高性能？</li>
</ul>
<pre><code>虚拟DOM相当于在js和真实的dom中间加了缓存，利用了dom的diff算法减少了没有必要的dom操作，从而提高了性能。

</code></pre>
<h3>React组件化</h3>
<ul>
<li>说说你对“在React中，一切都是组件”的理解</li>
</ul>
<pre><code>组件是 React 应用 UI 的构建块的基本单位。这些组件将整个 UI 分成小的独立并可重用的部分。每个组件彼此独立，而不会影响 UI 的其余部分
</code></pre>
<ul>
<li>有用过React的严格模式吗？有什么用？</li>
</ul>
<pre><code>严格模式使用<StrictMode>组件，它将为组件内的整个组件树启用额外的开发环境检查，这些检查有助于在开发过程中尽早地发现组件中的常见错误，启用严格模式如下：
<StrictMode>
  <App />
</StrictMode>

严格模式启用后，将会有以下行为：

1. 组件将 重新渲染一次，以查找由于非纯渲染而引起的错误。
2. 组件将 重新运行 Effect 一次，以查找由于缺少 Effect 清理而引起的错误。
3. 组件将被 检查是否使用了已弃用的 API。
所有这些检查仅在开发环境中进行，不会影响生产构建。
</code></pre>
<ul>
<li>请说说React中Portal是什么？有用过React的插槽(Portals)吗？怎么用？举例说明React的插槽有哪些运用场景？</li>
</ul>
<pre><code>调用 createPortal 创建 portal，接收两个参数，分别为JSX组件节点和实际渲染的目标DOM节点

portal 只改变 DOM 节点的所处位置。在其他方面，渲染至 portal 的 JSX 的行为表现与作为 React 组件的子节点一致。该子节点可以访问由父节点树提供的 context 对象、事件将从子节点依循 React 树冒泡到父节点

特别注意的是事件传播
portal 中的事件传播遵循 React 树而不是 DOM 树。例如点击 <div onClick> 内部的 portal，将触发 onClick 处理程序。如果这会导致意外的问题，请在 portal 内部停止事件传播，或将 portal 移动到 React 树中的上层

portal应用
1. 你可以使用 portal 创建一个浮动在页面其余部分之上的模态对话框
2. portal 允许组件将它们的某些子元素渲染到 DOM 中的不同位置。这使得组件的一部分可以“逃脱”它所在的容器。
</code></pre>
<ul>
<li>怎样在React中使用innerHTML？</li>
</ul>
<pre><code><div dangerouslySetInnerHTML={{__html:''}} />

innerHTML不适当的用法会带来跨站脚本攻击（XSS），dangerouslySetInnerHTML被设计用来警示开发者，赋值给__html属性的值必须得是经过处理的（react不会帮你处理，需要开发者自己保证数据是值得信赖的），你可以用第三方库dompurify来帮你处理数据

</code></pre>
<ul>
<li>有用过React的Fragment吗？它的运用场景是什么？</li>
</ul>
<pre><code><Fragment> 通常使用 <>...</> 代替，它们都允许你在不添加额外节点的情况下将子元素组合

运用场景
1. 返回多个元素，你可以使用它将多个元素等效于单个元素
2. 分配多个元素给一个变量
3. 组合文本与组件 
4. 渲染 Fragment 列表，当你在循环中渲染多个元素时，你需要为每一个元素分配一个 key。如果这个元素为 Fragment 时，则需要使用普通的 JSX 语法来提供 key 属性
</code></pre>
<ul>
<li>React中什么是非控组件和受控组件？ 受控组件和非受控组件有什么区别？</li>
</ul>
<pre><code>React中的组件分为将状态变化交由React处理的组件和通过ref引用获取的组件两种，前者称为受控组件，后者称为非受控组件。
非受控组件的状态在组件自身存储，需要的时候通过ref查询DOM并查找其值。
</code></pre>
<ul>
<li>createElement与cloneElement两者有什么区别？</li>
</ul>
<pre><code>React.createElement():JSX 语法就是用 React.createElement()来构建 React 元素的。它接受三个参数，第一个参数type可以是一个标签名。如 div、span，或者 React 组件。第二个参数props为传入的属性。第三个以及之后的参数children，皆作为组件的子组件。

React.cloneElement()与 React.createElement()相似，不同的是它传入的第一个参数element是一个 React 元素，而不是标签名或组件。新添加的属性会并入原有的属性，传入到返回的新元素中，而旧的子元素将被替换。将保留原始元素的键和引用。
</code></pre>
<ul>
<li>解释下React中Element（元素） 和Component（组件）两者的区别是什么？</li>
</ul>
<pre><code>ReactElement是描述屏幕上所见的内容的数据结构,是对于UI的对象的表述，它的数据结构本质是一个 JS 对象.典型的ReactElement就是利用JSX构建的声明式代码片段,然后被转化为createElement的调用组合.

ReactComponent则是可以接收参数输入并且返回某个ReactElement的函数或者类.
</code></pre>
<ul>
<li>解释下React中component和pureComponent两者的区别是什么？</li>
</ul>
<pre><code>Component是React App的基本构建的单位，也是React中的基本代码复用单位。PureComponent与Component在除了shouldComponentUpdate方法的实现之外几乎完全相同，PureComponent已经替我们实现了shouldComponentUpdate方法

对于PureComponent而言，当其props或者state改变之时，新旧props与state将进行浅对比（shallow comparison）。另一方面，Component默认的情况下其shouldComponentUpdate方法并不进行新旧props与state的对比

比于Component，PureCompoent的性能表现将会更好。但使用PureCompoent要求满足如下条件：

props和state都必须是不可变对象（immutable object）。
props和state不能有层级嵌套的结构，（否则对子层级的改变无法反映在浅拷贝中）。
如果数据改变无法反应在浅拷贝上，则应该调用forceUpdate来更新Component。
一个PureComponent的子Component也应当是PureComponent。

</code></pre>
<ul>
<li>React自定义组件你写过吗？说说看都写过哪些？</li>
</ul>
<pre><code>根据类型划分即函数组件和类组件，现在基本都使用函数组件了；根据业务划分两类组件 全局可复用组件和局部功能组件
card组件，基本实现：枚举几类尺寸不同的卡片，分别给这几种卡片写好样式，外面传入数据进行展示
弹窗组件，基本实现：使用portal传送门来实现全局的弹窗管理

</code></pre>
<ul>
<li>React组件的state和props两者有什么区别？</li>
</ul>
<pre><code>props是组件的属性，是从父组件传递子组件的数据，props是只读的，子组件无法修改它的值。可以将props看成是组件的配置项，用于传递数据和函数给组件

state是组件内部的状态，用于存储组件的数据和更新组件，state是可变的，一般通过setState来修改它的值，当state值发生变化时，react会自动重渲染组件。
</code></pre>
<ul>
<li>在React中声明组件时组件名的第一个字母必须是大写吗？为什么？</li>
</ul>
<pre><code>react组件首字母必须大写；因为React根据首字母是否大写来区分是react组件还是dom元素。React中使用JSX语法，但浏览器无法识别JSX语法，需通过babel对JSX语法进行转义；而如果组件的首字母为小写时，其会被认定为原生DOM标签，创建一个不存在的标签是会报错的。
</code></pre>
<ul>
<li>什么是React的组件实例？函数式组件有没有实例？</li>
</ul>
<pre><code>class组件通过new关键，实例化之后，再调用实例的render函数获得React元素。而函数组件是函数直接返回了React元素(没有实例化)。再将这些元素通过ReactDOM.render(React元素,  目标dom节点);函数渲染到指定节点。
</code></pre>
<ul>
<li>说说你是怎么理解React的业务组件和技术组件的？</li>
</ul>
<pre><code>业务组件：耦合业务逻辑，与业务强相关的小范围内复用的组件
技术组件：通用的与业务不相关的组件，可在全局范围内通用的组件
</code></pre>
<ul>
<li>展示组件和容器组件有什么区别？</li>
</ul>
<pre><code>容器组件/展示组件的划分，采用了单一职责原则的设计模式，容器组件专门负责和 store 通信，展示组件只负责展示，解除了组件的耦合，可以带来更好的可复用性
</code></pre>
<ul>
<li>React怎么拿到组件对应的DOM元素？</li>
</ul>
<pre><code>在函数组件中，父组件要拿到子组件的真实dom，需通过forwardRef包裹子组件，并且在子组件中使用useImperativeHandle对外透出钩子，这样就能从父组件中拿到子组件的DOM了。
</code></pre>
<ul>
<li>React组件间共享数据方法有哪些？</li>
</ul>
<pre><code>父子组件间的通信：props+callback
兄弟组件间的通信：通过共同的父组件
不太相关组件间通信：Context、发布-订阅模式、redux等全局管理库
</code></pre>
<ul>
<li>React中验证props的目的是什么？</li>
</ul>
<pre><code>由于js是一门动态类型的语言，只有当程序运行时才能发现变量类型错误。react的props是当作组件的输入，对props的类型验证可以避免运行时的类型错误，并且可以提高程序的可读性。
</code></pre>
<ul>
<li>在React中我们怎么做静态类型检测？都有哪些方法可以做到？</li>
</ul>
<pre><code>flow、prop-types、typescript
</code></pre>
<ul>
<li>React中你有使用过propType吗？它有什么作用？</li>
</ul>
<pre><code>随着应用程序不断增长，可以通过类型检查捕获大量错误。PropTypes就是一种类型验证工具，PropTypes 提供一系列验证器，可用于确保组件接收到的数据类型是有效的
</code></pre>
<ul>
<li>React中怎么检验props？</li>
</ul>
<pre><code>PropTypes
</code></pre>
<ul>
<li>React中除了在构造函数中绑定this,还有别的方式吗？</li>
</ul>
<pre><code>箭头函数
</code></pre>
<ul>
<li>在React中页面重新加载时怎样保留数据？</li>
</ul>
<pre><code>这个问题就设计到了数据持久化， 主要的实现方式有以下几种：

Redux： 将页面的数据存储在redux中，在重新加载页面时，获取Redux中的数据；
data.js： 使用webpack构建的项目，可以建一个文件，data.js，将数据保存data.js中，跳转页面后获取；
sessionStorge： 在进入选择地址页面之前，componentWillUnMount的时候，将数据存储到sessionStorage中，每次进入页面判断sessionStorage中有没有存储的那个值，有，则读取渲染数据；没有，则说明数据是初始化的状态。返回或进入除了选择地址以外的页面，清掉存储的sessionStorage，保证下次进入是初始化的数据
history API： History API 的 pushState 函数可以给历史记录关联一个任意的可序列化 state，所以可以在路由 push 的时候将当前页面的一些信息存到 state 中，下次返回到这个页面的时候就能从 state 里面取出离开前的数据重新渲染。react-router 直接可以支持。这个方法适合一些需要临时存储的场景。
</code></pre>
<ul>
<li>React中可以在render访问refs吗？为什么？</li>
</ul>
<pre><code>不可以，render阶段DOM还没有生成，无法获取DOM，可以在pre-commit阶段(getSnapshotBeforeUpdate)或者commit阶段(componentDidMount,componentDidUpdate)
</code></pre>
<ul>
<li>React中refs的作用是什么？有哪些应用场景？</li>
</ul>
<pre><code>Refs 是 React 提供的用来保存 object 引用的一个解决方案，在函数式组件使用 useRef 创建一个 ref 对象，ref 对象存在一个可直接修改的 current 属性，内容都是存在 current 上。Refs 使用场景主要分为两个方向，其一是实现 DOM 访问与操控、在两次render之间传递数据内容

应用场景
1. 访问或者操作DOM节点
2. 保存数据，并且数据的变化不会引起渲染
</code></pre>
<ul>
<li>为什么建议不要过渡使用Refs？</li>
</ul>
<pre><code>refs会占用内存，过度使用容易浪费内存
</code></pre>
<ul>
<li>React 废弃了哪些生命周期？为什么？</li>
</ul>
<pre><code>componentWillMount
componentWillReceiveProps
componentWillUpdate
废弃的原因，是在React16的Fiber架构中，调和过程会多次执行will周期，不再是一次执行，失去了原有的意义。此外，多次执行， 在周期中如果有setState或者dom操作，会触发多次重绘，影响性能，也会导致数据错乱
</code></pre>
<ul>
<li>React16跟之前的版本生命周期有哪些变化？</li>
</ul>
<pre><code>新增
getDerivedStateFromProps
getSnapshotBeforeUpdate

getDerivedStateFromError
componentDidCatch
</code></pre>
<ul>
<li>说说React的生命周期有哪些？？说说React生命周期有哪些不同的阶段？每个阶段对应的方法是？</li>
</ul>
<pre><code>旧的生命周期
挂载
constructor
componentWillMount
render
componentDidMount
更新
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
render
componentDidUpdate
卸载
componentWillUnmount

新的生命周期
挂载
constructor
getDerivedStateFromProps
render
componentDidMount
更新
getDerivedStateFromProps
shouldComponentUpdate
render
getSnapshotBeforeUpdate
componentDidUpdate
卸载
componentWillUnmount

</code></pre>
<ul>
<li>componentWillUpdate可以直接修改state的值吗？</li>
</ul>
<pre><code>不能，会造成死循环。因为componentWillUpdate会在render之前触发，在这个函数中我们之所以不调用this.setState()是因为该方法会触发另一个componentWillUpdate(),如果我们componentWillUpdate()中触发状态更改,我们将以无限循环结束.

</code></pre>
<ul>
<li>React组件的构造函数有什么作用？React组件的构造函数是必须的吗？</li>
</ul>
<pre><code>在react的新的写法中，每一个组件都是一个类，这个很符合es6的语法规范，在es6中要想创建一个对象，就要调用相应的构造函数, react的组件渲染有两种情况，第一种情况是第一次渲染，第二种情况是状态更新时候重新渲染,构造函数在组件的初次渲染中只会运行一次，构造函数里进行的操作一般有三种用途：
1、指定this --> super(props)
2、设置初始化的状态 --> this.setState({});
3、为组件上的构造函数绑定this
</code></pre>
<ul>
<li>在构造函数中调用super(props)的目的是什么？</li>
</ul>
<pre><code>代表调用父类的构造函数。ES6要求，子类的构造函数必须执行一次super函数。这是必须的，否则JavaScript引擎会报错。
</code></pre>
<ul>
<li>super()和super(props)有什么区别？</li>
</ul>
<pre><code>在访问子组件中的任何方法或数据之前，super是构造函数中的第一条语句，使用这个语句，this.props返回未定义，为了使其成为this.props，你必须在子类构造函数的第一行调用super(props)。
</code></pre>
<ul>
<li>constructor和getInitialState有不同？</li>
</ul>
<pre><code>constructor用在class组件中
getInitialState用在createReactClass实现的组件中

如果使用createClass方法创建一个Component组件，可以自动调用它的getInitialState方法来获取初始化的State对象
在constructor里我们可以直接指定 this.state = { }， 我们可以当前组件内任何地方使用 this.setState()来改变组件状态;
</code></pre>
<ul>
<li>React中传入组件的props改变时更新组件的几种实现方法</li>
</ul>
<pre><code>我们使用react的时候常常需要在一个组件传入的props更新时重新渲染该组件，常用的方法是在componentWillReceiveProps中将新的props更新到组件的state中（这种state被成为派生状态（Derived State）），从而实现重新渲染。React 16.3中还引入了一个新的钩子函数getDerivedStateFromProps来专门实现这一需求。更好的实现方案
1. 完全受控组件
2. 完全不受控组件
3. 在父组件中调用子组件的方法设置state
</code></pre>
<ul>
<li>React的性能优化在哪个生命周期？它优化的原理是什么？</li>
</ul>
<pre><code>shouldComponentUpdate

当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。返回值默认为 true。首次渲染或使用 forceUpdate() 时不会调用该方法。

React中props,state值的变化，会导致组件重新渲染。使用shouldComponentUpdate就是为了减少不必要的渲染。 返回布尔值，然后做 Virtual DOM 比较，并得出是否需要做真实 DOM 更新，尽管React的虚拟算法复杂度已经有了很多优化，但是在大规模组件更新时，依然会是个不必要的损耗。会带来很多无必要的渲染并成为性能瓶颈。接下来使用来这个生命周期来解决吧

内置的 React.PureComponent 组件。PureComponent 会对 props 和 state 进行浅层比较，并减少了跳过必要更新的可能性。不建议shouldComponentUpdate() 中进行深层比较或使用 JSON.stringify()。这样非常影响效率，且会损害性能。
注意：如果你的state或props永远都会变，那PureComponent并不会比较快，因为shallowEqual也需要花时间
</code></pre>
<ul>
<li>React的函数式组件有没有生命周期？</li>
</ul>
<pre><code>没有，也不需要

1. 贴合函数式编程，
2. 函数没有实例，调用完了就销毁了，没有生命周期概念
</code></pre>
<ul>
<li>React中修改prop引发的生命周期有哪几个？</li>
</ul>
<pre><code>componentWillReceiveProps(nextProps)：组件从父组件接收到新的 props 之前调用。
componentWillUpdate()：组件开始重新渲染之前调用。 
componentDidUpdate()：组件重新渲染并且把更改变更到真实的 DOM 以后调用
</code></pre>
<ul>
<li>React中调用setState会更新的生命周期有哪几个？</li>
</ul>
<pre><code>componentWillReceiveProps
componentShouldUpdate
componentWillUpdate
render
componentDidUpdate
</code></pre>
<ul>
<li>React中发起网络请求应该在哪个生命周期中进行？为什么？</li>
</ul>
<pre><code>总的来说，对于异步请求，最好放在componentDidMount中去操作，对于同步的状态改变，可以放在componentWillMount中，一般用的比较少

1.跟服务器端渲染（同构）有关系，如果在componentWillMount里面获取数据，fetch data会执行两次，一次在服务器端一次在客户端。在componentDidMount中可以解决这个问题，componentWillMount同样也会render两次。

2.在componentWillMount中fetch data，数据一定在render后才能到达，如果你忘记了设置初始状态，用户体验不好。

3.react16.0以后，componentWillMount可能会被执行多次。
</code></pre>
<ul>
<li>说说react的事件机制？16和17有什么区别？</li>
</ul>
<pre><code>react自身实现了一套自己的事件机制，包括事件注册、事件的合成、事件冒泡、事件派发等，虽然和原生的是两码事，但也是基于浏览器的事件机制下完成的。react 的所有事件并没有绑定到具体的dom节点上而是绑定在了document 上，然后由统一的事件处理程序来处理，同时也是基于浏览器的事件机制（冒泡），所有节点的事件都会在 document 上触发。

17版本改进
 不在document对象上绑定事件，改为绑定于每个react应用的rootNode节点，因为各个应用的rootNode肯定不同，所以这样可以使多个版本的react应用同时安全的存在于页面中，不会因为事件绑定系统起冲突。react应用之间也可以安全的进行嵌套。

</code></pre>
<ul>
<li>在React中什么是合成事件？有什么用？</li>
</ul>
<pre><code>合成事件是 React模拟原生 DOM事件所有能力的一个事件对象，即浏览器原生事件的跨浏览器包装器。根据 W3C规范来定义合成事件，兼容所有浏览器，拥有与浏览器原生事件相同的接口。如果想要获得原生DOM事件，可以通过e.nativeEvent属性获取，和原生事件有一定的却别
1.事件名称命名方式不同
2.事件处理函数书写不同

原生事件和合成事件可以混合使用，执行顺序为
React 所有事件都挂载在 document 对象上
当真实 DOM 元素触发事件，会冒泡到 document 对象后，再处理 React 事件
所以会先执行原生事件，然后处理 React 事件
最后真正执行 document 上挂载的事件

</code></pre>
<ul>
<li>请描述下事件在React中的处理方式是什么？</li>
</ul>
<pre><code>React事件并没有原生的绑定在真实的DOM上，而是使用了行为委托方式实现事件机制。行为委托的实质就是将子元素事件的处理委托给父级元素处理。React会将所有的事件都绑定在最外层(document)，使用统一的事件监听，并在冒泡阶段处理事件，当挂载或者卸载组件时，只需要在通过的在统一的事件监听位置增加或者删除对象，因此可以提高效率。

合成事件分为以下三个主要过程：

一 事件注册

所有事件都会注册到document上，拥有统一的回调函数dispatchEvent来执行事件分发

二 事件合成

从原生的nativeEvent对象生成合成事件对象，同一种事件类型只能生成一个合成事件Event，如onclick这个类型的事件，dom上所有带有通过jsx绑定的onClick的回调函数都会按顺序（冒泡或者捕获）会放到Event._dispatchListeners 这个数组里，后面依次执行它

三 事件派发

每次触发事件都会执行根节点上 addEventListener 注册的回调，也就是 ReactEventListener.dispatchEvent 方法，事件分发入口函数。该函数的主要业务逻辑如下：
1. 找到事件触发的 DOM 和 React Component
2. 从该 React Component，调用 findParent 方法，遍历得到所有父组件，存在数组中。
3. 从该组件直到最后一个父组件，根据之前事件存储，用 React 事件名 + 组件 key，找到对应绑定回调方法，执行，详细过程为：
4. 根据 DOM 事件构造 React 合成事件。
5. 将合成事件放入队列。
6. 批处理队列中的事件（包含之前未处理完的，先入先处理）

React合成事件的冒泡并不是真的冒泡，而是节点的遍历。

</code></pre>
<ul>
<li>React的事件和普通的HTML事件有什么不同？</li>
</ul>
<pre><code>1.事件名称命名方式不同
2.事件处理函数书写不同
</code></pre>
<ul>
<li>在React中怎么阻止事件的默认行为？</li>
</ul>
<pre><code>阻止合成事件间的冒泡，用e.stopPropagation()

阻止合成事件与最外层 document 上的事件间的冒泡，用e.nativeEvent.stopImmediatePropagation()

阻止合成事件与除最外层document上的原生事件上的冒泡，通过判断e.target来避免
</code></pre>
<ul>
<li>组件卸载前，加在DOM元素的监听事件和定时器要不要手动清除？为什么？</li>
</ul>
<pre><code>定时器要在 componentWillUnmount 手动清除，直接绑定在JSX里的事件监听器不用，使用ref绑定的要清除。 因为如果不清除定时器，组件卸载后依然执行，this指向，event等都会因为找不到而报错。 原生事件也要清除，声明变量时保存了某个DOM的引用，内存中依然会保留，事件也就不会被清除，导致不会进入垃圾回收机制。可能会造成内存溢出。
</code></pre>
<ul>
<li>React的触摸事件有哪几种？</li>
</ul>
<pre><code>onTouchCancel 
onTouchEnd 
onTouchMove 
onTouchStart
</code></pre>
<h3>React更新(setState)和渲染(render)</h3>
<ul>
<li>React的状态提升是什么？使用场景有哪些？</li>
</ul>
<pre><code>React的状态提升就是用户对子组件操作，子组件不改变自己的状态，通过自己的props把这个操作改变的数据传递给父组件，改变父组件的状态，从而改变受父组件控制的所有子组件的状态，这也是React单项数据流的特性决定的。
官方的原话是：共享 state(状态) 是通过将其移动到需要它的组件的最接近的共同祖先组件来实现的。 这被称为“状态提升(Lifting State Up)”。
</code></pre>
<ul>
<li>请说说你对React的render方法的理解</li>
</ul>
<pre><code>是class组件中必须被重载的方法，组件执行render方法的条件如下：
1. 初始渲染
2. this.setState方法，参数不能为,及时this.setState({}),或者setState一个相同的值，也会导致render函数的执行
3. props的改变(采用浅比较)
4. this.forceUpdate,render函数中如果依赖了非state和props的其它变量，就需要用这个方式强制render函数执行
5. 父组件更新，会导致所有子组件的render方法执行

render方法的执行不一定会导致DOM的重新渲染，DOM的重新渲染的条件是render前后的DOM diff比较的结构不一致。

</code></pre>
<ul>
<li>render方法的原理你有了解吗？它返回的数据类型是什么？</li>
</ul>
<pre><code>render的第一个参数通过babel转为React.createElement，后者根据参数类型的不同调用不同的内部方法来转换为原生dom并生成真实dom插入到容器中.

对原生html标签调用ReactDOMComponent的mountComponent方法，将element转化为真实的dom节点， 并插入到对应的container中，返回realDom；

对于自定义组件，递归调用ReactCompositeComponentWrapper转化为原生dom标签，然后和上面一样通过ReactDOMComponentmountComponent方法，生成realDom; 

string和number，调用的是ReactDOMTextComponent；
null和boolean，调用的是ReactEmptyComponment;
</code></pre>
<ul>
<li>自定义组件时render是可选的吗？为什么？</li>
</ul>
<pre><code> 当一个自定义class组件，继承另一个组件的时候，render不是必须的，它会自动继承父类的render方法。 
</code></pre>
<ul>
<li>render在什么时候会被触发？</li>
</ul>
<pre><code>在React 中，类组件只要执行了 setState 方法，就一定会触发 render 函数执行，函数组件使用useState更改状态不一定导致重新render
组件的props 改变了，不一定触发 render 函数的执行，但是如果 props 的值来自于父组件或者祖先组件的 state,在这种情况下，父组件或者祖先组件的 state 发生了改变，就会导致子组件的重新渲染,所以，一旦执行了setState就会执行render法，useState 会判断当前值有无发生改变确定是否执行render方法，一旦父组件发生渲染，子组件也会渲染。

</code></pre>
<ul>
<li>React中怎样有条件地渲染组件？怎样阻止组件渲染？</li>
</ul>
<pre><code>1.先写好不同组件的内容
2.在state里面加一个type进行记录
3.通过type映射渲染对应的组件

类组件中
使用shouldComponentUpdate生命周期，return false
继承，React.PureComponent,只要prop没有改变(浅比较)，就不会执行render函数

函数组件中
使用React.memo包裹组件函数，props没有改变就不会执行函数
使用React.memo包裹函数的同时传入比较函数作为第二个参数，return true，组件函数就不会执行

通用
jsx中三元表达式或者 &amp;&amp; 运算符
</code></pre>
<ul>
<li>能简单介绍一下React执行过程吗？</li>
</ul>
<pre><code>react 运行的主要3阶段
1. jsx 转成 js 代码
2. js 代码生成 vdom
3. vdom 转化成 dom 挂载到 #root
</code></pre>
<ul>
<li>请说下react组件更新的机制是什么？</li>
</ul>
<pre><code>setState或者forceUpdate触发更新
1.将setState传入的partialState参数存储在当前组件实例的state暂存队列中。
2.判断当前React是否处于批量更新状态，如果是，将当前组件加入待更新的组件队列中。
3.如果未处于批量更新状态，将批量更新状态标识设置为true，用事务再次调用前一步方法，保证当前组件加入到了待更新组件队列中。
4.调用事务的waper方法，遍历待更新组件队列依次执行更新。
5.执行生命周期componentWillReceiveProps。
6.将组件的state暂存队列中的state进行合并，获得最终要更新的state对象，并将队列置为空。
7.执行生命周期componentShouldUpdate，根据返回值判断是否要继续更新。
8.执行生命周期componentWillUpdate。
9.执行真正的更新，render。
10.执行生命周期componentDidUpdate。

</code></pre>
<ul>
<li>React16的reconciliation和commit分别是什么？</li>
</ul>
<pre><code>React 16 三个核心：

Scheduler
调度器：决定什么时候调度 Reconciler
Reconciler
协调器：进行 Fiber diff 及新的 Fiber 树的生成以及副作用记录
Commit
将新的树应用到 DOM 中并且执行所有副作用
</code></pre>
<ul>
<li>在React中怎样改变组件状态，以及状态改变的过程是什么？</li>
</ul>
<pre><code>this.setState()
改变的过程中，React Fiber Reconciler遍历了整个Fiber Tree，得到了最新的DOM diff结果，并把这个结果应用到真实的DOM上。同时相应的生命周期(static getStateFromProps、shouldComponentupdate、render、getSnapshotBeforeUpdate、componentDidUpdate)也在相应的时机执行.
</code></pre>
<ul>
<li>React为什么不要直接修改state？如果想修改怎么做？</li>
</ul>
<pre><code>直接修改state，react不会重新render,setState的更新是异步的，而且，react会将要修改的状态放到一个更新队列，并考虑到render次数，会将多个值一起改变并一次render。其实react官方还是推荐immutable的state，也就是说，我们在改变state的时候，需要重新生成一个对象去代替原来的state，而不是直接改原来的。

作者：xhbisme
链接：https://www.jianshu.com/p/da84ae0804a3
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
</code></pre>
<ul>
<li>说说React中setState执行机制？setState是同步的还是异步的？</li>
</ul>
<pre><code>setState是同步执行的，但是state并不一定会同步更新，setState在React生命周期和合成事件中批量覆盖执行。在React的生命周期和合成事件执行前后都有相应的钩子，分别是pre钩子和post钩子，pre钩子会调用batchedUpdate方法将isBatchingUpdates变量置为true，开启批量更新，而post钩子会将isBatchingUpdates置为false。isBatchingUpdates变量置为true，则会走批量更新分支，setState的更新会被存入队列中，待同步代码执行完后，再执行队列中的state更新。而在原生事件和异步操作中，不会执行pre钩子，或者生命周期的中的异步操作之前执行了pre钩子，但是pos钩子也在异步操作之前执行完了，isBatchingUpdates必定为false，也就不会进行批量更新。

react18版本以前
原生事件、异步函数中是同步的
合成事件、生命周期函数中是异步的
react 18版本都是异步的
</code></pre>
<ul>
<li>React中的setState批量更新的过程是什么？</li>
</ul>
<pre><code>1. 调用this.setState(newState)
2. 将新状态newState存入pending队列
3. 判断是否处于batch Update（isBatchingUpdates是否为true）
  1. isBatchingUpdates=true，保存组件于dirtyComponents中，走异步更新流程，合并操作，延迟更新；
  2. isBatchingUpdates=false，走同步过程。遍历所有的dirtyComponents，调用updateComponent，更新pending state or props
</code></pre>
<ul>
<li>React多个setState调用的原理是什么？</li>
</ul>
<pre><code>当遇到多个setState调用时，它会提取单次传递给setState的对象，把它们合并在一起形成一个新的单一的对象，并用这个单一的对象去做setState的事情
</code></pre>
<ul>
<li>React中如何监听state的变化？</li>
</ul>
<pre><code>1. 函数组件，useEffect+state依赖
2. 类组件，ComponentWillReceiveProps或者getDerivedStateFromProps生命周期函数
</code></pre>
<ul>
<li>React中的setState和replaceState的区别是什么？</li>
</ul>
<pre><code>setState和replaceState类似，setState会先合并之前的状态，replaceState会先清空之前的状态。setState可能会引起不必要的重渲染，setState任何值都会触发更新
</code></pre>
<ul>
<li>React中的setState缺点是什么呢？</li>
</ul>
<pre><code>1. 调用时机不正确可能引起死循环，例如在componentWillUpdate、render、componentDidUpdate
2. setState可能引起不必要的重渲染，setState任何值都会引起组件的render函数执行。
</code></pre>
<ul>
<li>为什么建议setState的第一个参数是callback而不是一个对象呢？</li>
</ul>
<pre><code>React 为了优化性能，有可能会将多个 setState() 调用合并为一次更新。 因为this.props和this.state 可能是异步更新的，你不能依赖他们的值计算下一个state(状态)。为了弥补这个问题，使用另一种 setState() 的形式，接受一个函数。这个函数将接收前一个状态作为第一个参数，应用更新时的 props 作为第二个参数。
</code></pre>
<ul>
<li>React中setState的第二个参数作用是什么呢？</li>
</ul>
<pre><code>该函数会在函数调用完成并且组件开始重渲染的时候被调用，我们可以用该函数来监听渲染是否完成
</code></pre>
<h3>React优化</h3>
<ul>
<li>你知道的React性能优化有哪些方法？</li>
</ul>
<pre><code>React重渲染问题来源，在diff过程中，react只会对前后做浅比较，即引用的比较，所以极容易造成重渲染。可以通过一系列的方式进行优化重渲染问题
1. React.memo、pureComponent
2. shouldComponentUpdate
3. 列表加唯一key,确保元素是否移动，提高节点复用
4. 避免使用内联对象和匿名函数
5. 组件懒加载
6. React.Fragment
7. React.lay和Suspense，代码分割，组件懒加载
8. 关于useEvent，函数的引用不变，状态能拿到最新的。
</code></pre>
<ul>
<li>使用webpack打包React项目，怎么减小生成的js大小？</li>
</ul>
<pre><code>压缩：uglifyjsWebpackPlugin

动态加载:lazy+import函数、suspence、react-loadable
</code></pre>
<ul>
<li>如何提高组件的渲染效率呢？</li>
</ul>
<pre><code>1. 对比props和state，减少无效的重渲染
  1. React.memo、pureComponent
  2. shouldComponentUpdate
  3. 列表加唯一key,确保元素是否移动，提高节点复用
2. 减少重绘回流
3. js包的体积
</code></pre>
<ul>
<li>在React中如何避免不必要的render？React的优化方法？</li>
</ul>
<pre><code>1. 缩小render范围，无关组件尽量分离
2. 合理使用 memo、useMemo 、useCallback 和 PureComponent
3. 对 Context 中一个只使用在某个小组件内的字段的更改，都可能导致整个应用的重新渲染。第一种方式将数据拆得更细粒度、第二种方式使用useMemo进行缓存
</code></pre>
<ul>
<li>React怎样跳过重新渲染？</li>
</ul>
<pre><code>React组件在默认情况下，父组件或兄弟组件触发更新后，会按照父组件、子组件的顺序重新渲染，并且即使子组件本身没有发生任何变化，也会重复触发更新。在React Hooks中，可以通过memo来避免组件的重复渲染。memo是一个高阶组件。它的功能我们可以这么理解：
被调用时返回传入的组件
每次传入的组件要执行更新时，组件的新props和之前的老props会进行一次浅比较：
结果相等，不触发更新
结果不相等，触发更新，重新渲染

把内联回调函数及依赖项数组作为参数传入useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如shouldComponentUpdate）的子组件时，它将非常有用

memo与class组件中的pureComponent类似，通过props浅比较来判断组件需不需要重新渲染
useMemo、useCallBack通过浅比较依赖数组项中的变量，判断对应变量/function需不需要重新生成
</code></pre>
<ul>
<li>React怎么判断什么时候重新渲染组件呢？</li>
</ul>
<pre><code>只有在组件的state变化时才会出发组件的重新渲染。状态的改变可以因为props的改变，或者直接通过setState方法改变。组件获得新的状态然后React决定是否应该重新渲染组件。不幸的是，React难以置信简单地将默认行为设计为每次都重新渲染

当React将要渲染组件时他会执行shouldComponentUpdate方法来看它是否返回true（组件应该更新，也就是重新渲染）。所以你需要重写shouldComponentUpdate方法让它根据情况返回true或者false来告诉React什么时候重新渲染什么时候跳过重新渲染

</code></pre>
<ul>
<li>怎样实现React组件的记忆？原理是什么？</li>
</ul>
<pre><code>React.memo 为高阶组件。它与 React.PureComponent 非常相似，但它适用于函数组件，但不适用于 class 组件。如果你的函数组件在给定相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。其原理是根据传入的compare函数比较prevProps和nextProps，最终决定生成对象，并影响渲染效果。
</code></pre>
<ul>
<li>shouldComponentUpdate方法是做什么的？</li>
</ul>
<pre><code>在react开发中，经常需要对数据state状态进行改变，但是这种方式每当setState的时候都会将所有的组件重新渲染一遍，这样就会有重复渲染render的问题。shouldComponentUpdate就是用来解决这种重渲染的问题的。官方API解释道根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。默认行为是 state 每次发生变化组件都会重新渲染。
</code></pre>
<ul>
<li>如何解决引用类型在pureComponent下修改值的时候，页面不渲染的问题？</li>
</ul>
<pre><code>不要在state或者props当中修改数组或者对象
通过使用es6的assign方法或者数组的扩展运算符或者使用第三方库，强制返回一个新的对象
(页面为什么不渲染)
是因为组件内容是采用的浅拷贝，对象的值虽然发生改变，但是引用的地址没有发生改变
</code></pre>
<ul>
<li>React怎么提高列表渲染的性能？</li>
</ul>
<pre><code>展示大型列表和表格数据(比如:城市列表、通讯录、微博等), 会导致页面卡顿、滚动不流畅等性能问题，产生原因是因为大量的DOM节点的重绘重排，尤其在老旧设备下异常突出。
解决方案即可视区域懒渲染，通常使用react-virtualized库来帮助我们实现。

</code></pre>
<ul>
<li>React中的key有什么作用？</li>
</ul>
<pre><code>用于判断列表元素节点是否移动操作，提高节点复用率
</code></pre>
<ul>
<li>React中遍历时为什么不用索引作为唯一的key值？</li>
</ul>
<pre><code>key值的目的在Diff DOM的时候根据render前后的唯一key值快速的对树进行比较，保证key值得唯一性，如在进行中间插入或者最顶上插入时，算法会很明显得知道这是一个插入动作，然后让后续的node往后移位，如果是以索引index作为key值，那么在进入上述的操作后，插入后面的元素key值完全变了，算法不能准确的定位到树中node的位置，只能从插入的位置起，后续的全部重新生成，影响性能 
</code></pre>
<ul>
<li>React中key的作用？key改了，会发生什么，会执行哪些周期函数？</li>
</ul>
<pre><code>Dom diff过程如下
当元素类型变化时，会销毁重建
当元素类型不变时，对比属性
当组件元素类型不变时，通过props递归判断子节点
递归对比子节点，当子节点是列表时，通过key和props来判断。若key一致，则进行更新，若key不一致，就销毁重建

如果key改了则无法复用节点，需要销毁重建
</code></pre>
<ul>
<li>需要把keys设置为全局唯一吗？</li>
</ul>
<pre><code>不需要,key是用来进行diff算法的时候进行同层比较,准备的说key只需要在兄弟节点之间唯一,一般情况key选取是后端定义的id.万不得已的时候可以选择index(选择index是万不得已的选择,因为选择了index后,一些操作会改变index的值,违背了唯一不变,在进行diff算法的时候出现问题)
</code></pre>
<ul>
<li>什么是React.forwardRef？它有什么作用？</li>
</ul>
<pre><code>forwardRef API 允许我们从父组件向子组件传递一个 ref，从而让父组件能够访问子组件的 DOM 节点或实例
应用
1. 转发 ref 到组件内部的DOM 节点上，将一个组件内部的某个元素暴露出去
2. 在高阶组件中转发ref，在高阶组件中不会传递ref, 这是因为 ref 不是 prop属性。就像 key 一样，其被 React 进行了特殊处理

</code></pre>
<ul>
<li>在React中怎么使用async/await？</li>
</ul>
<pre><code>类组件的生命周期函数可以直接定义成async方法，直接使用await调用
useEffect中不能直接传入async函数，因为回调中必须返回一个函数，而async返回一个promise
</code></pre>
<ul>
<li>在React中什么时候使用箭头函数更方便呢？</li>
</ul>
<pre><code>1. 解决 this 引起的问题
</code></pre>
<ul>
<li>使用PropTypes和Flow有什么区别？</li>
</ul>
<pre><code>Flow是一个静态分析工具（静态检查器），它使用语言的超集，使您可以在所有代码中添加类型注释，并在编译时捕获整个错误类。PropTypes是一个基本的类型检查器（运行时检查器），已被修补到React上。除了传递给给定组件的道具类型外，它无法检查其他任何东西。如果您想对整个项目进行更灵活的类型检查，则Flow / TypeScript是适当的选择。
</code></pre>
<ul>
<li>React中在哪捕获错误？</li>
</ul>
<pre><code>React 16引入了一个 “错误边界(Error Boundaries)” 的新概念。 错误边界是 React 组件，它可以在子组件树的任何位置捕获 JavaScript 错误，记录这些错误，并显示一个备用 UI ，而不是使整个组件树崩溃。 错误边界(Error Boundaries) 在渲染，生命周期方法以及整个组件树下的构造函数中捕获错误。
</code></pre>
<ul>
<li>React v15中怎么处理错误边界？</li>
</ul>
<pre><code>React 15 中有一个支持有限的错误边界方法 unstable_handleError。此方法不再起作用，同时自 React 16 beta 发布起你需要在代码中将其修改为 componentDidCatch。
</code></pre>
<ul>
<li>说说你对Error Boundaries的理解</li>
</ul>
<pre><code>如果一个类组件定义了生命周期方法中的任何一个（或两个）static getDerivedStateFromError() 或 componentDidCatch()，那么它就成了一个错误边界。 使用在抛出错误后渲染回退UI。 使用 componentDidCatch() 来记录错误信息。它能捕获子组件渲染过程中、生命周期方法、子组件树各组件constructor构造函数中异常。不能捕获事件处理器中的异常，需要使用try/catch进行捕获；不能捕获异步任务中的异常，例如setTimeout，ajax请求等，需要使用window.addEventListener进行捕获；不能捕获服务端渲染异常；不能捕获异常边界组件自身的异常，需要将边界组件和业务组件分离，各司其职，不能在边界组件中处理逻辑代码，也不能在业务组件中使用didcatch

componentDidCatch 和 getDerivedStateFromError 的区别
1. render phase 里产生异常的时候， 会调用 getDerivedStateFromError
2. 在 commit phase 里产生异常大的时候， 会调用 componentDidCatch

componentDidCatch 是不会在服务器端渲染的时候被调用的 而 getDerivedStateFromError 会。

</code></pre>
<ul>
<li>在React中你有遇到过安全问题吗？怎么解决？</li>
</ul>
<pre><code>prerender / SSR 的 hydrate 过程会生成 html ，需要小心测试其中是否有 XSS 漏洞。
dangerouslySetInnerHTML、onload=字符串、href=字符串 等，都有可能造成 XSS 漏洞。

需要对特殊字符进行转译，例如<>等
</code></pre>
<ul>
<li>使用React的memo和forwardRef包装的组件为什么提示children类型不对？</li>
</ul>
<pre><code>过去使用Component、FC等类型定义组件时一般不需要我们定义props里children的类型，因为在上述类型里已经帮你默认加上了 { children?: ReactNode } 的定义。但是@types/react的维护者认为这样导致children几乎没有类型约束，组件开发者应该显式地声明children类型。所以对新的API应该都不会自动加上children的定义了，需要开发者手动添加。
</code></pre>
<ul>
<li>使用ES6的class定义的组件不支持mixins了，那用什么可以替代呢？</li>
</ul>
<pre><code>HOC
render props
</code></pre>
<ul>
<li>React的mixins有什么作用？适用于什么场景？</li>
</ul>
<pre><code>虽然组件的原则就是模块化，彼此之间相互独立，但是有时候不同的组件之间可能会共用一些功能，共享一部分代码。所以 React 提供了 mixins 这种方式来处理这种问题Mixin 就是用来定义一些方法，使用这个 mixin 的组件能够自由的使用这些方法（就像在组件中定义的一样），所以 mixin 相当于组件的一个扩展，在 mixin 中也能定义“生命周期”方法

</code></pre>
<ul>
<li>对高阶组件（HOC）的理解？什么渲染劫持？有什么问题？怎么解决？优缺点？使用场景？</li>
</ul>
<pre><code>接收一个组件作为参数，返回一个新的组件，是对装饰模式的一种实现。高阶作用用于强化组件，复用逻辑，提升渲染性能等作用。渲染劫持的概念是控制组件从另一个组件输出的能力，高阶组件可以在渲染函数中做非常多的操作从而控制原组件的渲染输出。

优点：复用、逻辑和抽象，可以劫持render方法，控制props于state等
缺点：
1. 无法从外部访问子组件的state
2. ref传递问题
3. dom层级变深,调试困难
4. props变得混乱

HOC需要注意的地方
1. 不能修改原始组件
2. 过滤props
3. 最大化可组合性
4. 不要在render中使用HOC
5. 务必复制静态方法
6. refs不会被传递

实现HOC的方式有
1. 属性代理：对props进行代理
2. 反向继承：返回的组件去继承之前的组件

HOC的应用
1. 非受控组件转化为受控组件
2. 渲染劫持
3. 抽象state
4. 通过refs使用引用
5. 控制props
</code></pre>
<ul>
<li>举例说明什么是高阶组件(HOC)的属性代理和反向继承？</li>
</ul>
<pre><code>属性代理：并没有深入到组件内部，在外部去操作WrapperComponent，可以操作 props，抽象state\event 或者条件渲染。

反向继承：更多是从‘继承’的角度出发，可以在内部去操作WrapperComponent，可以在内部操作props,state,event甚至是生命周期，功能更强大。

</code></pre>
<ul>
<li>类组件和函数式组件有什么区别？</li>
</ul>
<pre><code>1. 设计思想
类组件的根基是 OOP(面向对象编程)，所以它会有继承，有内部状态管理等
函数组件的根基是 FP(函数式编程)，与数学中的函数思想类似，所以假定输入和输出存在某种关联的话，那么相同输入必定会有相同的输出
所以相对于类组件，函数组件会更加的纯粹，简单，更利于测试，这就是它们本质上的区别

类组件是通过各种生命周期函数来包装业务逻辑的，这也是类组件所特有的，hooks提供了新的开发模式让组件渲染和业务逻辑进行分离
函数组件useEffect和类组件生命周期

2. 性能优化
类组件是通过 shouldComponentUpdate 生命周期函数去阻断渲染
函数组件是通过React.Memo 函数来优化，但它不并不是去阻断渲染，而是跳过渲染组件的操作并直接复用最近一次渲染的结果，这与 shouldComponentUpdate 是完全不同的

</code></pre>
<ul>
<li>说说你对fiber架构的理解？解决了什么问题？可中断/恢复怎么实现的？fiber的更新机制</li>
</ul>
<pre><code>当有更新任务来的时候，不会马上去做 Diff 操作，而是先把当前的更新送入一个 Update Queue 中，然后交给 Scheduler 去处理，Scheduler 会根据当前主线程的使用情况去处理这次 Update。为了实现这种特性，使用了requestIdelCallbackAPI。对于不支持这个API 的浏览器，React 会加上 pollyfill。requestIdleCallback
处理低优先级任务，并且在多个空闲期调用空闲期回调，执行任务，并且还提供deadline，即任务执行限制时间，以切分任务，避免长时间执行，阻塞UI渲染而导致掉帧；requestAnimationFrame处理高优先级任务，例如动画等。实现过程中存在以下问题

如何拆分成子任务？多大合适？
怎么判断是否还有剩余时间？
有剩余时间怎么去调度应该执行哪一个任务？
没有剩余时间之前的任务怎么办？

fiber架构就是为了解决这个问题，它是一个链表结构，将递归遍历编程循环遍历，然后配合 requestIdleCallback API, 实现任务拆分、中断与恢复

是否中断的判断依据，最重要的一点便是每个任务的剩余时间是否用完
借助 requestIdleCallback 这个函数，可以将一个大任务分割成多个个小任务，在每一帧有空余时间情况下，逐步去执行小任务。
</code></pre>
<ul>
<li>说说你对React的reconciliation（一致化算法）的理解？</li>
</ul>
<pre><code>就是启发式Diff算法 ，时间复杂度从N的三次方下降到N ，实现的策略是 tree diff , element diff , component diff 算法 。在diff算法中如果element 没有变只是位置移动，则移位就可以。 
</code></pre>
<ul>
<li>React为什么要搞一个Hooks？React Hooks帮我们解决了哪些问题？</li>
</ul>
<pre><code>
hooks是为了解决长时间使用和维护react过程中常遇到的问题
难以重用和共享组件中的与状态相关的逻辑
逻辑复杂的组件难以开发与维护，当我们的组件需要处理多个互不相关的 local state 时，每个生命周期函数中可能会包含着各种互不相关的逻辑在里面
类组件中的this增加学习成本，类组件在基于现有工具的优化上存在些许问题
由于业务变动，函数组件不得不改为类组件等等

为细粒度的代码复用，不和组件复用捆绑在一起。HOC和Render Props都是基于组件的组合方案，先把要复用的逻辑封装成组件，再利用组件复用机制实现逻辑复用。将函数当成最小的代码复用单元同时内置一些模式简化状态逻辑复用

Hooks为了帮助函数组件补齐这些（相对于类组件来说）缺失的能力,例如使用状态、处理副作用等
</code></pre>
<ul>
<li>请描述下你对React的新特性Hooks的理解？它有哪些应用场景？</li>
</ul>
<pre><code>在 React 中使用 class 继承 React.Component，就可以在类里面使用各种各样的钩子函数，比如 componentWillMount、componentDidMount、componentWillUnmount 等。

你也可以直接写 function 来构建 reander 方法，但是就无法使用钩子函数，无法使用 setState 修改状态。
在 React 16 版本之后新增了 hooks 特性，hooks 特性的主要表现形式为：在 React 中可以直接使用函数的形式来完成所有组件逻辑。

应用场景
1.修改数据状态: useState
2.执行 DOM 挂载或者更新之后的事务 ：useEffect
3.共享数据，跨组件传值：useContext
4. 复杂的状态管理:useReducer

应用场景
在函数组件中通过useState实现函数内部维护state，useState 使用起来更为简洁，减少了this指向不明确的情况

useEffect可以让我们在函数组件中进行一些带有副作用的操作。useEffect相当于componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个生命周期函数的组合
</code></pre>
<ul>
<li>使用Hooks要遵守哪些原则？为什么不能在条件语句中写Hook？</li>
</ul>
<pre><code>1. 只在 React 函数中调用 Hook
2. 不要在循环、条件或嵌套函数中调用 Hook。

函数本身不能保存状态，我们需要额外维护一个有序的表，在执行 setState 之类的 hook 时，将它们保存到这个表里。这要求每次函数组件的 hook 执行的位置相同，数量正确，否则会导致错位，不能拿到预期的状态值。
</code></pre>
<ul>
<li>在React中组件的state和setState有什么区别？</li>
</ul>
<pre><code>this.state的方式会改变值，但不会重新渲染组件（这就是为什么你改变了值，但是页面没有响应你）
在使用时。可以先使用this.state.的方式来赋值。在最后一次赋值使用setState的方式。这样组件之渲染一次达到赋值的效果。
</code></pre>
<ul>
<li>请说说什么是useImperativeHandle？useReducer？useRef？useEffect？</li>
</ul>
<pre><code>useImperativeHandle
可以让你在使用 ref 时自定义暴露给父组件的实例值。通常与forwardRef一起使用，暴露之后父组件就可以通过 selectFileModalRef.current?.handleCancel();来调用子组件的暴露方法。

useReducer
第一个参数：reducer函数，没错就是我们上一篇文章介绍的。第二个参数：初始化的state。返回值为最新的state和dispatch函数（用来触发reducer函数，计算对应的state）。对于复杂的state操作逻辑，嵌套的state的对象，推荐使用useReducer

useRef
当你需要在组件中一直缓存一些状态，但是并不想因为这些状态的改变而重新触发渲染,可以使用 useRef 钩子去保存对 DOM 对象的引用。

useEffect
在函数组件主体内（这里指在 React 渲染阶段）改变 DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作都是不被允许的，因为这可能会产生莫名其妙的 bug 并破坏 UI 的一致性。使用 useEffect 完成副作用操作。赋值给 useEffect 的函数会在组件渲染到屏幕之后执行
</code></pre>
<ul>
<li>为什么React useState要使用数组而不是对象?</li>
</ul>
<pre><code>通过解构赋值来降低复杂度
如果 useState 返回的是数组，那么使用者可以对数组中的元素命名，代码看起来也比较干净
如果 useState 返回的是对象，在解构对象的时候必须要和 useState 内部实现返回的对象同名，想要使用多次的话，必须得设置别名才能使用返回值
</code></pre>
<ul>
<li>请说说什么是useState？为什么要使用useState？</li>
</ul>
<pre><code>useState是React原生的Hook，它接受一个参数，这个参数可以是对象或者普通的基本数据类型的值，也可以是一个有返回值的函数，useState函数返回一个数组，数组的第一个元素是useState接受的值或函数的返回值，第二个元素是设置这个值的方法； 在Hooks之前，函数式组件都是无状态的组件，引入了useState这个hook之后，让函数式组件也能够管理自己的状态
</code></pre>
<ul>
<li>useState的原理？相对于有状态组件state区别是什么？</li>
</ul>
<pre><code>useState 的 mountState 阶段返回的 setXxx 是绑定了几个参数的 dispatch 函数。执行它会创建  hook.queue 记录更新，然后标记从当前到根节点的 fiber 的 lanes 和 childLanes 需要更新，然后调度下次渲染。下次渲染执行到 updateState 阶段会取出 hook.queue，根据优先级确定最终的 state，最后返回来渲染。
这样就实现了 state 的更新和重新渲染


区别
1. 命名：useState可以自定义命名
2. 是否浅合并：setState支持浅合并，useState覆盖
3. 是否有第二个回调函数，setState有第二个回调函数，useState没有
</code></pre>
<ul>
<li>useCallback和useMemo的区别？useEffect和useLayoutEffect的区别？useState和useRef的区别？</li>
</ul>
<pre><code>useCallback和useMemo
useMemo 计算结果是 return 回来的值, 主要用于 缓存计算结果的值 ，应用场景如： 需要 计算的状态
useCallback 计算结果是 函数, 主要用于 缓存函数，应用场景如: 需要缓存的函数，因为函数式组件每次任何一个 state 的变化 整个组件 都会被重新刷新，一些函数是没有必要被重新刷新的，此时就应该缓存起来，提高性能，和减少资源浪费。

useEffect和useLayoutEffect
useEffect 是在render之后执行的，而useLayoutEffect是在render之前执行的。

useState和useRef
useState 是 React Hooks 的基础，它允许您在函数式组件中管理状态和更新状态，useRef 也是 React Hooks 的一种，它的作用是提供一个可以在函数式组件中访问的全局变量，而不必渲染组件
</code></pre>
<ul>
<li>useEffect 依赖为空数组与 componentDidMount 区别？</li>
</ul>
<pre><code>在 render 执行之后，componentDidMount 会执行，如果在这个生命周期中再一次 setState ，会导致再次 render ，返回了新的值，浏览器只会渲染第二次 render 返回的值，这样可以避免闪屏。
但是 useEffect 是在真实的 DOM 渲染之后才会去执行，这会造成两次 render ，有可能会闪屏。
实际上 useLayoutEffect 会更接近 componentDidMount 的表现，它们都同步执行且会阻碍真实的 DOM 渲染的。
</code></pre>
<ul>
<li>怎样使用Hooks获取服务端数据？</li>
</ul>
<pre><code>useState，初始化数据
useEffect中发起请求，拿到数据之后设置state
</code></pre>
<h3>React工程化与三方库</h3>
<ul>
<li>React 16+和React15的区别？</li>
</ul>
<pre><code>react 15 
Reconciler 协调器 + Renderer 渲染器。

react16 异步可中断的更新
React16改写了架构，将React15的同步更新，变成异步可中断的更新。Reconciler 协调器 + Scheduler 调度器 + Renderer 渲染器。
协调器会将需要更新的节点打上update标签，讲做了标记的虚拟dom交给渲染器，渲染器接收到通知，查看有哪些被打了标记的虚拟dom，执行更新dom操作。
</code></pre>
<ul>
<li>React16新特性有哪些？</li>
</ul>
<pre><code>1. 使用Error Boundary处理错误组件
2. render支持2种新的返回类型(数组、字符串)
3. 使用createProtal 将组件渲染到当前组件树之外
4. 自定义DOM属性 ：把不会识别的属性传递给DOM
5. setState传入null时不会再触发更新 
</code></pre>
<ul>
<li>React18有哪些更新？IE支持情况？</li>
</ul>
<pre><code>停止对ie11支持
1. 增加Hooks：useId、useTransition、useDeferredValue、useSyncExternalStore、useInsertionEffect
2. 在所有情况下，setState更新都会批处理
3. 退出批量更新的flushSync
4. 移除了卸载组件时执行状态更新警告
5. React组件允许返回undefined
6. 对Suspense组件fallback属性做了处理，可以不写fallback，React不会跳过它
</code></pre>
<ul>
<li>
<p>有用过React Devtools吗？说说它的优缺点分别是什么？</p>
</li>
<li>
<p>create-react-app有什么好处？</p>
</li>
<li>
<p>create-react-app创建新运用怎么解决卡的问题？</p>
</li>
<li>
<p>不用脚手架，你会手动搭建React项目吗？</p>
</li>
<li>
<p>说说你对React的组件命名规范的理解</p>
</li>
<li>
<p>说说你对React的项目结构的理解</p>
</li>
<li>
<p>React如何进行代码拆分？拆分的原则是什么？</p>
</li>
<li>
<p>怎么在React中引入其它的UI库/插件等，例如Bootstrap、jQuery</p>
</li>
<li>
<p>同时引用这三个库React.js、React-dom.js和babel.js它们都有什么作用？</p>
</li>
<li>
<p>你有用过哪些React的UI库？它们的优缺点分别是什么？</p>
</li>
<li>
<p>有在项目中使用过Antd吗？说说它的好处？</p>
</li>
<li>
<p>有在项目中使用ahooks吗？</p>
</li>
<li>
<p>你有做过React的单元测试吗？如果有，用的是哪些工具？怎么做的？</p>
</li>
<li>
<p>什么是浅层渲染？</p>
</li>
<li>
<p>你有使用过formik库吗？说说它的优缺点</p>
</li>
<li>
<p>React根据不同的环境打包不同的域名？</p>
</li>
<li>
<p>怎样在React中开启生产模式？</p>
</li>
<li>
<p>在React中如何去除生产环境上的sourcemap？</p>
</li>
<li>
<p>React的应用如何打包发布？它的步骤是什么？</p>
</li>
<li>
<p>说说你对受控组件和非受控组件的理解？应用场景？如何给非控组件设置默认的值？</p>
</li>
<li>
<p>React什么是有状态组件？</p>
</li>
<li>
<p>常用的React组件</p>
</li>
<li>
<p>你有用过哪些React的表单库吗？说说它们的优缺点</p>
</li>
<li>
<p>你有使用过loadable组件吗？它帮我们解决了什么问题？</p>
</li>
<li>
<p>你有使用过suspense组件吗？它帮我们解决了什么问题？</p>
</li>
<li>
<p>使用高阶组件(HOC)实现一个loading组件</p>
</li>
<li>
<p>如何封装一个React的全局公共组件？Antd的Message.error的调用方式</p>
</li>
<li>
<p>怎么定时更新一个组件？</p>
</li>
<li>
<p>使用React写一个todo应用，说说你的思路</p>
</li>
<li>
<p>写出React动态改变class切换组件样式</p>
</li>
<li>
<p>怎样将多个组件嵌入到一个组件中？</p>
</li>
<li>
<p>React怎样引入svg的文件？</p>
</li>
<li>
<p>在React中怎么使用字体图标？</p>
</li>
<li>
<p>在React中如何引入图片？哪种方式更好？</p>
</li>
<li>
<p>举例说明在React中怎么使用样式？</p>
</li>
<li>
<p>在React中怎么引用sass或less？</p>
</li>
<li>
<p>怎样动态导入组件？</p>
</li>
<li>
<p>创建React动画有哪些方式？</p>
</li>
<li>
<p>如何用React实现滚动动画？</p>
</li>
<li>
<p>在React项目中你用过哪些动画的包？</p>
</li>
<li>
<p>React有哪几种方法来处理表单输入？</p>
</li>
<li>
<p>有用过React的服务端渲染吗？怎么做的？</p>
</li>
<li>
<p>你用过React版本有哪些？</p>
</li>
<li>
<p>简单描述下你有做过哪些React项目？</p>
</li>
<li>
<p>从旧版本的React升级到新版本的React有做过吗？有遇到过什么坑？</p>
</li>
</ul>
<h3>React组件通信和状态管理</h3>
<p>React组件间的通信有哪些？兄弟/非兄弟/父子/非父子
为什么说React中的props是只读的？在React中你有经常使用常量吗？
如果组件的属性没有传值，那么它的默认值是什么？
在React中你是怎么进行状态管理的？
在React怎么使用Context？说说Context有哪些属性？
怎么使用Context开发组件？
为什么React并不推荐我们优先考虑使用Context？
除了实例的属性可以获取Context外哪些地方还能直接获取Context呢？</p>
<p>Consumer向上找不到Provider的时候怎么办？
有使用过Consumer吗？
状态管理器解决了什么问题？什么时候用状态管理器？状态管理器它精髓是什么？</p>
<ul>
<li>redux工作原理？mobx工作原理？</li>
</ul>
<pre><code>Redux整个工作过程中，数据流是严格单向的，只能通过dispatch action 的方式触发数据状态的修改。Action会进入对应的Reducer进行处理最终得到新的状态State，然后进一步的触发View的数据更新


</code></pre>
<ul>
<li>什么是Redux？说说你对Redux的理解？有哪些运用场景？</li>
</ul>
<pre><code></code></pre>
<ul>
<li>redux三个原则？</li>
</ul>
<pre><code>1. 单一数据源：整个应用的state被存储在一棵object tree中，并且这个object tree只存在于唯一一个store中；
2. state是只读的：唯一改变state的方法就是触发action，action是一个用于描述发生事件的普通对象；
3. 使用纯函数修改数据；
</code></pre>
<p>你有了解Rxjs是什么吗？它是做什么的？
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
在Redux中，什么是action？store？
为什么Redux能做到局部渲染呢？
说说Redux的优缺点分别是什么？
Redux和Flux的区别是什么？
什么是单一数据源？</p>
<p>你有写过React的中间件插件吗？
React的中间件机制是怎么样的？这种机制有什么作用？
React中你用过哪些第三方的中间件？</p>
<h3>前端路由</h3>
<pre><code>React-Router工作原理？为什么需要前端路由？前端路由解决了什么问题？前端通用路由解决方案？
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
</code></pre>
<h2>冷门</h2>
<ul>
<li>说说你对windowing的了解</li>
<li>React Intl是什么原理？你有使用过React Intl吗？怎么实现React组件的国际化呢？</li>
<li>说说你对Relay的理解</li>
<li>在JSX中如何写注释？</li>
<li>装饰器(Decorator)在React中有什么应用？</li>
<li>React组件命名推荐的方式是哪个？为什么不推荐使用displayName？</li>
<li>React的displayName有什么作用？</li>
<li>写个例子说明什么是JSX的内联条件渲染？写例子说明React如何在JSX中实现for循环</li>
<li>怎么在JSX里属性可以被覆盖吗？覆盖的原则是什么？</li>
</ul>
<ul>
<li>怎么在JSX里使用自定义属性？</li>
<li>React的书写规范有哪些？</li>
<li>React声明组件有哪几种方法，各有什么不同？</li>
<li>React中你知道creatClass的原理吗？</li>
<li>React.createClass和extends Component的区别有哪些？</li>
<li>React有几种构建组件的方式？可以写出来吗？</li>
<li>在React中遍历的方法有哪些？它们有什么区别呢？</li>
<li>props.children.map和js的map有什么区别？为什么优先选择React的？</li>
<li>在React中无状态组件有什么运用场景？</li>
<li>描述下在React中无状态组件和有状态组件的区别是什么？</li>
<li>在React中如何判断点击元素属于哪一个组件？</li>
<li>React的isMounted有什么作用？</li>
<li>React中getInitialState方法的作用是什么？</li>
<li>React中你有使用过getDefaultProps吗？它有什么作用？</li>
<li>使用React的方式有哪几种？</li>
<li>说说你对reader的context的理解</li>
<li>React的render中可以写{if else}这样的判断吗？</li>
<li>Mern和Yeoman脚手架有什么区别？</li>
<li>你有在项目中使用过Yeoman脚手架吗？</li>
<li>你有在项目中使用过Mern脚手架吗？</li>
<li>childContextTypes是什么？它有什么用？</li>
<li>contextType是什么？它有什么用？</li>
</ul>
`}}></div>
  }
  