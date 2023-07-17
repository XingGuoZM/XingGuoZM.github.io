
  import React,{useEffect} from 'react';
 
  import 'highlight.js/styles/xcode.css';
  const hljs = require('highlight.js');

  export default () => {
    useEffect(()=>{
      document.querySelectorAll('code').forEach(el => {
        el.style.backgroundColor='#f8f8f8';
        hljs.highlightElement(el);
      });
    },[])
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h2>事件循环</h2>
<p>异步任务执行规则，先对异步任务进行分类，然后按照优先级执行。
宏任务在下一次事件循环开始执行，微任务在本次事件循环执行完成，
识别宏任务->宏任务触发存入事件触发线程->微任务入队->js引擎执行所有微任务->gui渲染线程开始渲染页面->js引擎执行宏任务</p>
<h2>promise</h2>
<p>回调函数完成异步操作，有诸多缺点</p>
<ul>
<li>混乱：回调函数没有明确的调用时机，边界模糊，任何时候任何地点都可以调用</li>
<li>不统一的：自定义成功/失败回调</li>
<li>嵌套：回调函数的嵌套地狱，加剧混乱</li>
</ul>
<p>promise的重要意义是完成了异步操作趋于统一化、规范化、流程化的管理</p>
<ul>
<li>统一：任务状态，pending->fulfilled或者pending->reject</li>
<li>规范：then成功，catch失败</li>
<li>流程：链式调用,并且链式完整的，不会中途中断。</li>
</ul>
<p>promise特点：</p>
<ul>
<li>
<p>回调函数作用域指向全局的，包括then的回调</p>
</li>
<li>
<p>链式调用:then、catch、finally串联操作</p>
</li>
<li>
<p>then可以无限调用，前一个then的return值会传递到下一个then里。</p>
</li>
<li>
<p>catch和finally只有一次调用生效，但是不会阻塞链式传递，后面仍然可以catch、then</p>
</li>
</ul>
<h3>关于thenable对象，先执行then方法，并且resolve可以透传参数</h3>
<pre><code class="language-js">const thenable = {
  then (resolve, reject) {
    console.log('then');
    resolve(1)
  }
}
Promise.resolve(thenable)
Promise.resolve(thenable).then(res => console.log(res))
</code></pre>
<h2>async...await</h2>
<p>await的意义是将promise链式调用执行异步任务转化为同步代码块执行异步任务，贴合代码顺序执行
await执行规则</p>
<pre><code>await expression
if(value is Promise){
    expression.then()
}else if(value is thenable){
    Promise.resolve(expression.then())
}else{
    Promise.resolve(expression)
}

</code></pre>
<p>当async...await遇上forEach时，特别注意。forEach执行规则如下</p>
<pre><code>arr.forEach((item.i)=>{
    fn(item,i)
});
//等价于
const fnWrap = (item,i) =>{
    fn(item,i);
}
for(let i = 0;i<array.length;i++){
    fnWrap(arr[i],i);
}

</code></pre>
<p>例子</p>
<pre><code class="language-js">var arr=[{a:1},{}];
arr.forEach(function(item,idx){
    item.b=idx;
});
</code></pre>
<p>forEach、map、filter、every、some和reduce会跳过空位</p>
<pre><code class="language-js">let array = [,1,,2,,3];
array = array.map((i) => ++i) // array [,2,,3,,4]
</code></pre>
`}}></div>
  }
  