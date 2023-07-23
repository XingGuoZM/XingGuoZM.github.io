
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<p>声明式编程和命令式编程</p>
<pre><code>声明式编程表达逻辑而不显式地定义步骤，关注做什么而非怎么做。命令式关注过程步骤
</code></pre>
<p>运行时和编译时</p>
<pre><code>运行时即代码运行阶段，直接可以被宿主环境执行的代码。
例如浏览器可以直接解析document.createElment,不需要编译。编译时则需要经过再一层转化
</code></pre>
<p>immutable</p>
<pre><code>immutable即不可改变，数据不能被更改。如果要改变或更改数据，则必须复制数据副本来更改
</code></pre>
<p>纯函数</p>
<pre><code>一个参数的immutable，内部代码不会产生副作用，不会对外界造成影响的函数。
</code></pre>
<p>React是一个专注于构建UI界面的库。遵循组件化的开发模式、声明式编程范式和函数式编程概念，让前端应用的开发更加高效。
它的特点有虚拟DOM、单向数据流、状态驱动视图，页面组件化。</p>
<p>React虚拟DOM</p>
<pre><code>利用虚拟DOM可以不用关心宿主环境的影响，通过diff算法找出DOM中变化的部分进行细粒度的更新来提高DOM更新的效率。
虚拟DOM具有提升渲染性能、跨平台等优点

diff过程
相似的两颗dom树
组件的type对比
列表key
</code></pre>
<p>React单向数据流</p>
<pre><code>在React中对数据的流向做了限制，即数据在组件树中通过props自顶向下由外层组件向内层组件的单向流动。
数据变化之后只会影响单方向的其他节点，从而保证了状态变化的可追溯和可预测，这是一种更加规范的约定。
</code></pre>
<p>React状态驱动视图</p>
<pre><code>唯有状态的变化才能引起渲染，通过setState触发，批量更新
UI=F(data)
</code></pre>
<p>React组件化</p>
<pre><code>React组件可以帮助我们将界面成了各个独立的小块，每一个块就是组件，这些组件之间可以组合、嵌套，构成整体页面。
React类组件使用一个名为render()的方法或者函数组件return，接收输入的数据并返回需要展示的内容
</code></pre>
<p>React把所有的工作分成了两个阶段“render”和“commit”</p>
<pre><code>render阶段利用双缓冲技术，在内存中构造另一颗 Fiber 树，在其上进行协调计算，找到需要更新的节点并记录，这个过程会被重复中断恢复执行；
commit 阶段，根据 render 阶段的计算结果，执行更新操作，这个过程是同步执行的
</code></pre>
<p>Fiber</p>
<pre><code>第一层含义是react的一种程序架构，最重要的特点就是异步可以中断和恢复的并发架构

第二层含义是react最新版本虚拟DOM节点的数据结构。它是一个链表的结构，通过child、sibling、return三个属性记录了树型结构中的子节点、兄弟节点、父节点的关系信息，从而可以实现从任一节点出发，都可以访问其他节点的特性
</code></pre>
<p>Hook</p>
<pre><code>
</code></pre>
`}}></div>
  }
  