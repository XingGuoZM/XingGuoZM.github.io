
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h1>React发展历史</h1>
<h3>如何定义React？React是什么？</h3>
<p>react是一个UI界面库，专注于视图层的实现。拥有三个维度的优点，
第一对于用户使用来说，采用声明式编程，本质为组件化，分而治之
第二对于底层DOM更新来说，采用虚拟dom，diff找到变化部分，实现最小化更新
第三对于其他类库和框架来说，React能够与它们配合使用</p>
<p>如果把React比作一个中层管理者，对上能够让老板知道你带领的团队有什么样的能力，对下能够让下面的人工作更有效率，和同等级的其他中层合作融洽，不会产生冲突。</p>
<p>因此我们可以称React是一个基于组件化的开发模式、采用虚拟DOM来最小化更新DOM、通过props数据通信和state更新数据、为抹平不同浏览器差异而统一封装DOM事件系统的UI界面库。如果把react比做一家公司，这家公司的流程是规范而且清晰的，你要更新组件必须通过setState来提交更新流程，通过流程能找到并实现最小化的更新；你要监听一个事件，规范的事件触发系统能够帮助你应对外部环境下不可预知的错误</p>
<h3>React主要为解决什么问题而产生的</h3>
<p>我们先来分析一下设计一个前端框架需要考虑到哪些问题？</p>
<p>首先开发过程中问题，考虑学习门槛（快速上手）、使用门槛（预备知识）、灵活（对业务架构设计）、开发效率（代码的复用和移植）</p>
<p>其次运行过程中的问题，考虑兼容性（各个平台/浏览器支持情况）、稳定性和容错容灾（各种极端环境的边界考虑，如网络、内存、）、安全性（）</p>
<p>最后后期迭代中的问题，考虑扩展性(跨端)</p>
<p>React解决了哪些问题？</p>
<p>jsx->灵活、组件化->可复用和移植，事件系统/虚拟DOM->兼容性，react/react-dom分工明确->扩展性，跨端等</p>
<p>React设计</p>
<ol>
<li>react怎么实现渲染的</li>
</ol>
<p>jsx->React Component,
reconcile -></p>
<p>ReactComponent</p>
<h3>React主要版本</h3>
<p>react 0.3</p>
<pre><code>初步确定了react的运作机制，拥有核心组成部分，组件（拥有渲染方法的对象，支持原生HTML标签，div等）、jsx、事件、事务、虚拟DOM等
</code></pre>
<p>react 0.4</p>
<pre><code>支持更多原生HTML标签如canvas、iframe
支持服务端渲染
添加prop验证和默认值
支持列表key，在协调时进行更精细的控制
对input、textarea、option和select标签进行包装成受控组件
移除事件的autoBind
实现标准的符合W3C规范的事件系统
setState,组件批量更新
</code></pre>
<p>react 0.5</p>
<pre><code>优化相关：内存使用提升、性能提升加快速度、更好的服务端渲染
标准化：标准化prop、支持合成事件、添加一系列html标签属性（完善HTML标签
开始着手性能分析
使用react开发chrome插件成为可能
</code></pre>
<p>react 0.8</p>
<pre><code>发布了npm包，可以通过npm install安装
完善了一些html标签的属性支持，如textarea标签的rows和cols属性，script标签的defer和async属性
改进了错误消息
支持onContextMenu事件，支持IE11的Selection事件
</code></pre>
<p>react 0.9</p>
<pre><code>重大变更：整页渲染（渲染html标签）只支持服务端渲染，一些api的使用变更，例如this.context只能在react内部使用
新特性：对html标签的属性/事件较为完善的支持、propTypes的完善、jsx支持空格
修复bug：支持key值包含'.'
</code></pre>
<p>react 0.11</p>
<pre><code>重大变更：自定义的propType应该返回error
新特性：React.Children.count
修复bug：重渲染的批处理支持更多情况，css支持属性的前缀（Webkit, ms, Moz, O），重复keys降级为warning,在没有DOM的环境下setState可以在componentWillMount中调用
</code></pre>
<p>react 0.12</p>
<pre><code>重大变更：key和ref不挂在prop上，直接挂在元素上，
新特性：jsx的prop解构传值，完善HTNL标签的属性
</code></pre>
<p>react 0.13</p>
<pre><code>新特性：通过es6 class构建组件、React.findDOMNode(component)、React.cloneElement(el, props)、setState接收一个函数
</code></pre>
<p>react 0.14</p>
<pre><code>新特性：分离react-dom包，修改react-dom bug
</code></pre>
<p>react 15</p>
<pre><code>react-dom
react-perf
react-native
新特性：初始渲染使用document.createElement而不是通过生成html字符串然后innerHTNML的方式、错误/警告栈、React.pureComponents、通过各种方式提高开发构建时性能
</code></pre>
<p>react 16</p>
<pre><code>react-reconciler
react-art
react-is
scheduler
新特性：render函数可以返回字符串或者数组、Error boundaries 、传送门ReactDOM.createPortal()、流模式服务端渲染
、React.createRef()、React.forwardRef()、React.lazy()Suspense、React.memo()

ReactDOM添加getDerivedStateFromProps()、getSnapshotBeforeUpdate()生命钩子、添加严格模式<React.StrictMode>、<Context.Consumer>
</code></pre>
<p>react 16.8</p>
<pre><code>hook
useState、useReducer、useEffect、useMemo、useCallback、useImperativeHandle、useLayoutEffect

</code></pre>
<p>react 16.9</p>
<pre><code><React.Profiler>：收集性能度量
</code></pre>
<p>react 16.13</p>
<pre><code>Concurrent Mode

</code></pre>
<p>react 17</p>
<pre><code>解决一些问题 fix bugs
移除一些没有用到的依赖
将事件委托放在了root上而不是以前的 document上
</code></pre>
<p>react 18</p>
<pre><code>停止对ie11支持
react-dom/client
1. 增加Hooks：useId、useTransition、useDeferredValue、useSyncExternalStore、useInsertionEffect
2. 在所有情况下，setState更新都会批处理
3. 退出批量更新的flushSync
4. 移除了卸载组件时执行状态更新警告
5. React组件允许返回undefined
6. 对Suspense组件fallback属性做了处理，可以不写fallback，React不会跳过它


react-dom/server

client：reactDOM.createRoot()、reactDOM.hydrateRoot()
</code></pre>
<h2>历史</h2>
<p>mvc软件架构模式</p>
<p>Backbone</p>
<ul>
<li><a href="https://www.zhihu.com/question/19720745/answer/14315565">Backbone.js 的最佳应用场景有哪些？</a></li>
</ul>
<h3>React作用（解决了什么问题/产生什么影响/核心的几个版本）</h3>
<p>react提出了全新的组织代码的方式，使其更可预测，即页面组件化。并且加入了DOM diff，当DOM发生变化时，通过dom diff算法计算出变化点，以最小粒度更新。通过将用户界面拆分成更细粒度的包含逻辑代码段的组件描述来减少构建UI时发生的错误。</p>
<p>react核心版本16.8，全新的Fiber架构、加入Hook</p>
<h3>React特点（优缺点）</h3>
<p>react是一个组件化、单向数据流、支持函数式编程、基于Virtual DOM、专注视图层的UI框架，其优点是代码逻辑简单、性能出众、能和其他库一起使用，渲染到特定的环境。由于其特定的更新方式，非常容易造成重渲染，导致不需要更新的组件更新了</p>
<h3>应对后来的框架</h3>
<p>preact：能实现react的核心功能，体积比react小很多</p>
<p>vue：mvvm框架，能达到视图细粒度的更新</p>
<p>solid：去除Virtual DOM
svelet：去除Virtual DOM</p>
`}}></div>
  }
  