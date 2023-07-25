
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h3>声明式编程和命令式编程</h3>
<pre><code>声明式编程表达逻辑而不显式地定义步骤，关注做什么而非怎么做。命令式关注过程步骤
</code></pre>
<h3>运行时和编译时</h3>
<pre><code>运行时即代码运行阶段，直接可以被宿主环境执行的代码。
例如浏览器可以直接解析document.createElment,不需要编译。编译时则需要经过再一层转化
</code></pre>
<h3>immutable和纯函数</h3>
<pre><code>immutable即不可改变，数据不能被更改。如果要改变或更改数据，则必须复制数据副本来更改
纯函数
1. 幂等输入输出
2. 不会产生副作用
一个参数的immutable，内部代码不会产生副作用，不会对外界造成影响的函数。
</code></pre>
<h3>函数式编程</h3>
<pre><code>1. 函数是一等公民
2. 纯函数
</code></pre>
<p>React是一个专注于构建UI界面的库。遵循组件化的开发模式、声明式编程范式和函数式编程概念，让前端应用的开发更加高效。
它的特点有虚拟DOM、单向数据流、状态驱动视图，页面组件化。</p>
<h3>React虚拟DOM</h3>
<pre><code>利用虚拟DOM可以不用关心宿主环境的影响，通过diff算法找出DOM中变化的部分进行细粒度的更新来提高DOM更新的效率。
虚拟DOM具有提升渲染性能、跨平台、规避XSS等优点

当状态改变触发更新时，组件树自顶向下进行diff

diff算法遵循三个层级策略
树层级：忽略跨层级比较，只有创建和删除操作，只会对相同层级节点进行比较
组件层级：组件的type对比，判断是否同一类型的组件
元素层级：列表key，每个节点对应层级用唯一的key标识
</code></pre>
<p>React单向数据流</p>
<pre><code>在React中对数据的流向做了限制，即数据在组件树中通过props自顶向下由外层组件向内层组件的单向流动。
数据变化之后只会影响单方向的其他节点，从而保证了状态变化的可追溯和可预测，这是一种更加规范的约定。
</code></pre>
<p>React状态驱动视图</p>
<pre><code>唯有状态的变化才能引起渲染，通过setState/useState更新函数触发，批量更新
UI=F(data)

状态的immutable：React更新时只是浅比较引用是否发生变化，由于引用类型的可变和共享的特性，为了加速diff算法中reconcile的过程，需要保证数据的引用和值的一致性。保持一致性的方式有纯函数操作、深拷贝+修改数据同时改变其引用、immutable.js
视图的批量更新
</code></pre>
<p>React组件化</p>
<pre><code>React组件可以帮助我们将界面成了各个独立的小块，每一个块就是组件，这些组件之间可以组合、嵌套，构成整体页面。
React类组件使用一个名为render()的方法或者函数组件return，接收输入的数据并返回需要展示的内容

关于jsx
HTML也是xml协议，有由浏览器解析，而JSX是由js解析。浏览器引擎没有固有的实现来读取和理解它们， JSX并非旨在由引擎或浏览器实现，它旨在被各种转译器用来将这些JSX转换为有效的js代码。
jsx能有效防止xss攻击,ReactElement的$$typeof属性是一个symbol类型，通过JSON.stringify之后会被丢失
</code></pre>
<p>React class组件</p>
<pre><code>class组件特点：耦合性高、逻辑复用困难
适用
1. 适合用于高内聚的公共模块，解决某一类特定问题
2. errorboundary组件，必须用class组件

缺点
1. 状态的逻辑复用
2. 很难tree-shaking
3. componentdidupdate, 在复杂的情况下preState、nextstate、prevprop、nextprops的判断
</code></pre>
<p>React把所有的工作分成了两个阶段“render”和“commit”</p>
<pre><code>render阶段利用双缓冲技术，在内存中构造另一颗 Fiber 树，在其上进行协调计算，找到需要更新的节点并记录，这个过程会被重复中断恢复执行；
commit 阶段，根据 render 阶段的计算结果，执行更新操作，这个过程是同步执行的
</code></pre>
<p>Fiber</p>
<pre><code>第一层含义是react的一种程序架构，最重要的特点就是异步可以中断和恢复的并发架构

第二层含义是react最新版本虚拟DOM节点的数据结构。它是一个链表的结构，通过child、sibling、return三个属性记录了树型结构中的子节点、兄弟节点、父节点的关系信息，从而可以实现从任一节点出发，都可以访问其他节点的特性
</code></pre>
<p>Mixin（混合）/Extend（继承）</p>
<pre><code>特点：强耦合，隐式依赖，不可预测
场景：Mixin经常依赖组件的特定方法/状态，但是在定义组件的时候并不知道这种依赖关系

由于依赖关系不透明，Mixin逻辑最后会合并到一起，又很难搞清楚一个Mixin的输入输出，导致难以快速理解组件的行为
由于需要全盘了解所有依赖Mixin的扩展行为以及它们之间的相互影响，导致维护成本和理解成本增加,并且可能存在(命名)冲突
由于Mixin倾向于增加更多状态，降低应用的可预测性，导致复杂度剧增
</code></pre>
<p>HOC（高阶组件）接收一个组件作为参数，返回一个新的组件，是对装饰模式的一种实现</p>
<pre><code>特点：原组件不会感知HOC的存在，HOC会在原组件基础上增强功能
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
1. 属性代理
2. 反向继承：返回的组件去继承之前的组件

HOC的应用
1. 非受控组件转化为受控组件
</code></pre>
<p>Render Props:一个值为函数的props，这个函数返回一个react元素</p>
<pre><code>优点：
1. 动态构建
缺点：
1. 丢失组件上下问题，没有this.props属性
2. render props基于闭包实现的

</code></pre>
<p>Hook：逻辑复用</p>
<pre><code>来源
为细粒度的代码复用，不和组件复用捆绑在一起。HOC和Render Props都是基于组件的组合方案，先把要复用的逻辑封装成组件，再利用组件复用机制实现逻辑复用。将函数当成最小的代码复用单元同时内置一些模式简化状态逻辑复用

缺点
1. 额外学习成本，函数组件和类组件的比较
2. 写法限制，增加重构成本
3. 破坏了PureComponent、React.memo浅比较的性能优化效果
4. 闭包场景可能引用到旧的state、props值
5. 内部实现上不直观，依赖一份可变的全局状态，不再那么pure
6. React.memo并不能完全替代ShouldComponentUpdate（拿不到state change，只针对props change）
7. useState API设计上不完美（初始化、可选链、闭包陷阱、引用类型、多个状态）

</code></pre>
`}}></div>
  }
  