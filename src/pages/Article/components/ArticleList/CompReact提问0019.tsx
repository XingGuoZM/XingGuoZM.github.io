
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
例如要绘制一个按钮，声明式是html+css,直接写。命令式写法，先new一个按钮对象，调用对象的各种方法set边框，背景，边距等
</code></pre>
<ul>
<li>说说你对运行时的理解？运行时和编译时?</li>
</ul>
<pre><code>运行时即代码的解析阶段
编译时即源代码需要被编译成机器可以识别的程序，这个阶段就是编译时

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
2. 参数传递和避免副作用：有副作用的函数/方法经常会产生一些隐晦的bug —— 一个对象作为参数传入了一些函数/方法，却被故意/无意地修改了其中的值，然而代码的其他部分并不知情，就会产生意料之外的bug。一个有益的办法就是将作为参数的对象类设计成不可变的，在编码和编译时期就直接避免了这个问题。
3. interning 和 object pooling（对象池）
//Java
String s1 = &quot;Hello&quot;;
String s2 = &quot;Hello&quot;;
System.out.println(s1 == s2); // 输出 true

//Java
String s1 = new String(&quot;Hello&quot;); // 非字面量
String s2 = new String(&quot;Hello&quot;);
System.out.println(s1 == s2); // 输出 false

4. 不可变对象的变化和比较优势
由于不可变对象创建后值就不再变化，想“更改”它的值只有一个办法 —— 创建一个新的对象。如果“修改的逻辑”处理之后不发生任何变化，那么就把原对象返回。这种设计的好处就是 —— 直接比较原对象和新对象的引用地址就可以知道是否发生变化，大大提高了比较的性能。 react 和 redux 就采用了这种设计：redux store 内的 state 可以直接使用 === 来比较，确认是否发生了变化。React 的 state, props 也是如此。

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
<pre><code>react是一个js库。它专注于视图层ui的渲染，能将页面拆分成小块独立开发，最后经过一定的逻辑进行组装得到我们需要的前端系统，并且可与其他库和框架结合使用。遵循组件化的开发模式、声明式编程范式和函数式编程概念，让前端应用的开发更加高效。。它有以下三个特点
1. 页面组件化：React将UI分解为小的、可重用的组件，使得开发人员可以更轻松的组合和重用代码，React的组件化使得代码更容易维护和测试。

2. 虚拟DOM：虚拟DOM是一个轻量级的js对象，用于表示真实dom的层次结构。第一个好处是可以保证性能下限，通过虚拟dom，React使用了diff算法来计算出两次dom变更的最小差异，并且只渲染最小差异变化，同时React会将多次dom操作进行合并并且批量更新，从而提升性能，即在不需要手动优化的情况下，依然可以提供还不错的性能；第二个好处是们不再需要手动去操作 DOM，开发者只需专注于代码逻辑，框架会帮助我们以可预期的方式更新视图，极大提高我们的开发效率；第三个好处是虚拟 DOM 本质上是 JavaScript 对象,与平台不相关，可以更方便的跨平台操作，例如服务端渲染、native等

3. 状态驱动视图：即UI=F(data),状态是输入, 视图是输出: 状态 => 视图, 视图是基于状态的渲染结果。核心思想就是: 只要状态变化, 就重新渲染视图。状态不能直接修改，而是要通过setState方法进行修改

4. 单向数据流：即数据从父组件通过 props 传给子组件的过程中，子组件只接收父组件传来的 props，并且响应父组件传来的 props 的变化，而不能直接修改 props 来影响父组件。单向数据流的好处在于所有的状态改变可追溯。

它的设计思想
  React的设计思想是用JavaScript构建快速响应的大型Web应用程序，其设计理念就是快速响应。为了实现这一理念，需要突破CPU的瓶颈和IO瓶颈。CPU瓶颈即当遇到大计算量的操作或者设备性能不足使页面掉帧，导致卡顿。IO瓶颈即发送网络请求后，由于需要等待数据返回才能进一步操作导致不能快速响应。

  由于js引擎和gui渲染线程的互斥性，当js执行时间过长，超出了浏览器的刷新频率（每一次16.7ms），那么这次刷新就没有时间执行样式布局和样式绘制了。导致页面掉帧，造成卡顿。react为了解决这个问题，通过时间切片的方式将长任务分拆到每一帧中，这就就能让浏览器有时间渲染UI，避免阻塞ui渲染。

  将虚拟DOM改造成类似链表的形式连接父节点、子节点和兄弟节点，

  为了解决IO瓶颈，React实现了Suspense组件及配套的hook——useDeferredValue。

工作原理
  React是一个专注于视图渲染的ui库，它的更新原理即
  1. 调用函数组件或类组件的render方法，将返回的JSX转化为虚拟DOM;
  2. 将虚拟DOM和上次更新时的虚拟DOM对比;
  3. 通过对比找出本次更新中变化的虚拟DOM;
  4. 通知渲染器将变化的虚拟DOM渲染到页面上;

对比其他框架

  jquery：事件驱动，优点开发迅速，缺点混乱易错，在大量dom需要更新的情况容易出错
  react：状态驱动，单向数据流、组件化，运行时
  vue：mvvm，编译时+运行时，模版语法，可以使用 v-if v-for 这些指定的语法去编码，虽然这不够动态，但是由于语法是可枚举的，所以它可以在预编译层面做更多的预判，让 Vue 在运行时有更好的性能
  svelte：编译时
  backbone.js：mvc

  React面世时提出的三个核心特点是Just UI、 虚拟dom和单向数据流，随着React团队对于React的不断优化，现在React的三个最大特点是声明式、组件化和多端(native、node)渲染

  Just UI：React可以认为只是一个模板引擎，使用在任何mv*(mvc,mvvvm等)的框架中做view层，使用react的组件化思想。在MVC模式中，controller是十分重要的一环，它负责从数据库中取出数据并处理渲染到View上，同时当用户进行交互时它也负责获取用户交互内容并处理，进而存储到数据库中，controller承担了巨大的责任。然而，随着项目越来越复杂，尤其是数据解析能力的复杂化，承担巨大责任的controller会变得越来越复杂和臃肿，使其难以维护。聪明的开发者提出了ViewModel的概念，ViewModel的主要作用就是处理数据解析。ViewModel将用户行为和视图状态的处理抽象出来，成为可复用的模块，解决了复杂数据处理下Controller的臃肿，和频繁更新dom等问题

</code></pre>
<ul>
<li>研究过 React 的运行时吗？</li>
</ul>
<pre><code>React 是一个重运行时的框架，在数据发生变化后，并没有直接去操作 dom，而是生成一个新的所谓的虚拟dom，它可以帮助我们解决跨平台和兼容性问题，并且通过diff算法得出最小的操作行为，这些全部都是在运行时来做的，而Svelte ，就是一个典型的重编译的框架，作为开发者我们只需要去写模版和数据，经过 Svelte 的编译和预处理，代码基本全部会解析成原生的 DOM 操作，Svelte 的性能也是最接近原生js的。vue

本身的思路是纯 JS 写法，这种方式非常灵活，但是，这也使它在编译时很难做太多的事情，像上面这样的编译时优化是很难实现的。所以，我们可以看到 React 几个大版本的的优化主要都在运行时。运行时主要关注CPU和IO问题，

react 15版本架构协调+渲染，比较两颗虚拟Dom进行Diff找出变化进行渲染，更新的批处理。由于本身架构的问题，diff是通过递归同步更新的，如果节点非常多，即使只有一次 state 变更，React 也需要进行复杂的递归更新，递归更新时间超过了16ms，如果这时有用户操作或动画渲染等，就会表现为卡顿。

react 16版本架构协调+调度+渲染，通过时间切片的方式将长任务分拆到每一帧中，每一帧执行一小段任务。底层重构完成了Fiber架构，实现异步可中断可恢复的更新操作,并且实现按照优先级执行任务。
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
4. 编码变得复杂，因为它使用内联模板和 JSX
</code></pre>
<ul>
<li>在使用React过程中你都踩过哪些坑？你是怎么填坑的？</li>
</ul>
<pre><code>1.React最大的问题是重渲染问题，即父组件更新时，它下面的所有子组件也会默认更新（如果不做处理的话）。
2. setState是同步还是异步的问题
3. react合成事件的问题，合成事件是池化的，也就是说不同的事件，可能会共享一个合成事件对象。React 对所有事件都进行了代理，将所有事件都绑定 document 上


class component 
1. extends React.Component或者React.pureComponent,导致依赖不透明
2. 类组件，this 默认不指向组件实例
在construtor中绑定this，或者使用箭头函数
3. 

react hooks
必须在函数组件中才能使用且不能在循环、条件的代码段里头调用。


关于useState
1. 一个 state 必须不能通过其它 state/props 直接计算出来，否则就不用定义 state
2. useState 返回的更新状态方法是异步的，要在下次重绘才能获取新值。不要试图在更改状态之后立马获取状态
3. 管理多个字段时适当合并

关于useEffect
1. 闭包问题
组件中出现 setTimeout 等闭包时，尽量在闭包内部引用 ref 而不是 state，否则容易出现读取到旧值的情况

</code></pre>
<ul>
<li>说说你喜欢React的原因是什么？它有什么优缺点？</li>
</ul>
<pre><code>1. 能够实现服务器端的渲染，便于搜索引擎优化。这一点要比Backbone, Angular 1.x和Ember早期强
2. 能够很好的和现有的代码结合。React只是MVC中的View层，对于其他的部分并没有硬性要求。意味着很多公司在选择用Angular全部重构和用React部分重构的时候，选择了React部分重构
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
现代浏览器的 DOM API 已经趋于一致和稳定。只要放弃 IE，打薄事件层，立刻可以让 react-dom 大幅度瘦身。并且这个合成事件带来了和原生事件不一致的地方。最著名的莫过于 onChange 和 onInput。


</code></pre>
<ul>
<li>说出几点你认为的React最佳实践</li>
</ul>
<pre><code>在管理react项目时需要做到高内聚低耦合可扩展、分离关注点，降低心智负担，持续降低复杂度，因此以下几点非常重要
1. 做好状态管理
多个组件的状态同步
子组件通过 props 去操作父组件的状态
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
<pre><code>
阅读源码的收获
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
<pre><code>React 并不强制要求使用JSX。当你不想在构建环境中配置有关JSX编译时，不在 React 中使用JSX会更加方便。每个JSX元素只是调用React.createElement(component, props, ...children)的语法糖。因此，使用 JSX 可以完成的任何事情都可以通过纯 JavaScript 完成。
</code></pre>
<ul>
<li>JSX和HTML有什么区别？</li>
</ul>
<pre><code>1. HTML 和 JSX 之间的主要区别之一是，在 JSX 中，你必须返回单个父元素，否则将无法编译。

2. 在 JSX 中，可以直接编写 JavaScript。你可以通过将 JavaScript 放在花括号 {...} 中来实现。而在 HTML 中，你需要一个脚本标签或一个外部 JavaScript 文件来实现 JavaScript

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
<h3>React组件化</h3>
<pre><code>说说你对“在React中，一切都是组件”的理解
在构造函数中调用super(props)的目的是什么？
React的书写规范有哪些？
React声明组件有哪几种方法，各有什么不同？

React中你知道creatClass的原理吗？
React.createClass和extends Component的区别有哪些？
有用过React的严格模式吗？有什么用？

请说说React中Portal是什么？
怎样在React中使用innerHTML？
有用过React的Fragment吗？它的运用场景是什么？
在React中遍历的方法有哪些？它们有什么区别呢？
props.children.map和js的map有什么区别？为什么优先选择React的？
受控组件和非受控组件有什么区别？
React中什么是非控组件和受控组件？
在React中无状态组件有什么运用场景？
描述下在React中无状态组件和有状态组件的区别是什么？

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

说说你是怎么理解React的业务组件和技术组件的？
展示组件和容器组件有什么区别？
React怎么拿到组件对应的DOM元素？

React组件间共享数据方法有哪些？
React的isMounted有什么作用？

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

说说react的事件机制？16和17有什么区别？
在React中什么是合成事件？有什么用？
请描述下事件在React中的处理方式是什么？
React的事件和普通的HTML事件有什么不同？
在React中怎么阻止事件的默认行为？
组件卸载前，加在DOM元素的监听事件和定时器要不要手动清除？为什么？
React的触摸事件有哪几种？
</code></pre>
<h3>React更新(setState)和渲染(render)</h3>
<pre><code>React的状态提升是什么？使用场景有哪些？
请说说你对React的render方法的理解
React中可以在render访问refs吗？为什么？
render方法的原理你有了解吗？它返回的数据类型是什么？
自定义组件时render是可选的吗？为什么？
render在什么时候会被触发？
React中怎样有条件地渲染组件？怎样阻止组件渲染？
React的render中可以写{if else}这样的判断吗？

能简单介绍一下React执行过程吗？
请说下react组件更新的机制是什么？
React16的reconciliation和commit分别是什么？


在React中怎样改变组件状态，以及状态改变的过程是什么？
React为什么不要直接修改state？如果想修改怎么做？
说说React中setState执行机制？setState是同步的还是异步的？
React中的setState批量更新的过程是什么？
React多个setState调用的原理是什么？
React中如何监听state的变化？
React中的setState和replaceState的区别是什么？
React中的setState缺点是什么呢？
为什么建议setState的第一个参数是callback而不是一个对象呢？
React中setState的第二个参数作用是什么呢？
</code></pre>
<h3>React优化</h3>
<p>你知道的React性能优化有哪些方法？
为何说虚拟DOM会提高性能？</p>
<p>使用webpack打包React项目，怎么减小生成的js大小？</p>
<p>如何提高组件的渲染效率呢？
在React中如何避免不必要的render？React的优化方法？
React怎样跳过重新渲染？
React怎么判断什么时候重新渲染组件呢？
怎样实现React组件的记忆？原理是什么？
shouldComponentUpdate方法是做什么的？
如何解决引用类型在pureComponent下修改值的时候，页面不渲染的问题？</p>
<p>React怎么提高列表渲染的性能？
React中的key有什么作用？
React中遍历时为什么不用索引作为唯一的key值？
React中key的作用？key改了，会发生什么，会执行哪些周期函数？
需要把keys设置为全局唯一吗？</p>
<p>什么是React.forwardRef？它有什么作用？
在React中怎么使用async/await？
在React中什么时候使用箭头函数更方便呢？
使用PropTypes和Flow有什么区别？
React中在哪捕获错误？
React v15中怎么处理错误边界？
说说你对Error Boundaries的理解
在React中你有遇到过安全问题吗？怎么解决？
使用React的memo和forwardRef包装的组件为什么提示children类型不对？</p>
<p>使用ES6的class定义的组件不支持mixins了，那用什么可以替代呢？
React的mixins有什么作用？适用于什么场景？
写一个React的高阶组件(HOC)并说明你对它的理解
对函数式编程的理解？对高阶组件（HOC）的理解？什么渲染劫持？
举例说明什么是高阶组件(HOC)的属性代理？
举例说明什么是高阶组件(HOC)的反向继承？
在React使用高阶组件(HOC)有遇到过哪些问题？如何解决？
在使用React过程中什么时候用高阶组件(HOC)？
高阶组件(HOC)有哪些优点和缺点？</p>
<p>类组件和函数式组件有什么区别？
说说你对fiber架构的理解？解决了什么问题？可中断/恢复怎么实现的？fiber的更新机制</p>
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
<p>函数式组件有没有生命周期？为什么？
说说你对React的reconciliation（一致化算法）的理解？
React为什么要搞一个Hooks？
React Hooks帮我们解决了哪些问题？
使用Hooks要遵守哪些原则？
请描述下你对React的新特性Hooks的理解？它有哪些应用场景？
在React中组件的state和setState有什么区别？
React hook解决了什么问题？函数组件和类组件区别？为什么不能在条件语句中写Hook？</p>
<p>请说说什么是useImperativeHandle？useReducer？useRef？useEffect？
请说说什么是useState？为什么要使用useState？
useState的原理？相对于有状态组件state区别是什么？
useCallback和useMemo的区别？useEffect和useLayoutEffect的区别？useState和useRef的区别？
useEffect 依赖为空数组与 componentDidMount 区别？
为什么React useState要使用数组而不是对象? 
怎样使用Hooks获取服务端数据？</p>
<h3>React工程化与三方库</h3>
<pre><code>简单描述下你有做过哪些React项目？

你用过React版本有哪些？
React16新特性有哪些？
React18有哪些更新？React 16+和React15的区别？IE支持情况？
从旧版本的React升级到新版本的React有做过吗？有遇到过什么坑？

有用过React Devtools吗？说说它的优缺点分别是什么？
Mern和Yeoman脚手架有什么区别？
你有在项目中使用过Yeoman脚手架吗？
你有在项目中使用过Mern脚手架吗？
create-react-app有什么好处？
create-react-app创建新运用怎么解决卡的问题？
不用脚手架，你会手动搭建React项目吗？
说说你对React的组件命名规范的理解
说说你对React的项目结构的理解
React如何进行代码拆分？拆分的原则是什么？
怎么在React中引入其它的UI库/插件等，例如Bootstrap、jQuery
同时引用这三个库React.js、React-dom.js和babel.js它们都有什么作用？

你有用过哪些React的UI库？它们的优缺点分别是什么？
有在项目中使用过Antd吗？说说它的好处？
有在项目中使用ahooks吗？
你有做过React的单元测试吗？如果有，用的是哪些工具？怎么做的？
什么是浅层渲染？
你有使用过formik库吗？说说它的优缺点

React根据不同的环境打包不同的域名？
怎样在React中开启生产模式？
在React中如何去除生产环境上的sourcemap？
React的应用如何打包发布？它的步骤是什么？

说说你对受控组件和非受控组件的理解？应用场景？如何给非控组件设置默认的值？
React什么是有状态组件？
常用的React组件
你有用过哪些React的表单库吗？说说它们的优缺点
你有使用过loadable组件吗？它帮我们解决了什么问题？
你有使用过suspense组件吗？它帮我们解决了什么问题？
使用高阶组件(HOC)实现一个loading组件
如何封装一个React的全局公共组件？Antd的Message.error的调用方式
怎么定时更新一个组件？
使用React写一个todo应用，说说你的思路
写出React动态改变class切换组件样式
怎样将多个组件嵌入到一个组件中？

React怎样引入svg的文件？
在React中怎么使用字体图标？
在React中如何引入图片？哪种方式更好？
举例说明在React中怎么使用样式？
在React中怎么引用sass或less？
怎样动态导入组件？

创建React动画有哪些方式？
如何用React实现滚动动画？
在React项目中你用过哪些动画的包？
React有哪几种方法来处理表单输入？

有用过React的服务端渲染吗？怎么做的？

</code></pre>
<h3>React组件通信和状态管理</h3>
<pre><code>React组件间的通信有哪些？兄弟/非兄弟/父子/非父子
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
在Redux中，什么是action？store？
为什么Redux能做到局部渲染呢？
说说Redux的优缺点分别是什么？
Redux和Flux的区别是什么？
什么是单一数据源？

你有写过React的中间件插件吗？
React的中间件机制是怎么样的？这种机制有什么作用？
React中你用过哪些第三方的中间件？
</code></pre>
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
</ul>
`}}></div>
  }
  