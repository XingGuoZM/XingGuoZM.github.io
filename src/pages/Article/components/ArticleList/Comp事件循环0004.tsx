
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h3>关键词</h3>\n<ul>\n<li>Promise A+（https://promisesaplus.com/）</li>\n</ul>\n<h2>事件循环</h2>\n<p>异步任务执行规则，先对异步任务进行分类，然后按照优先级执行。\n宏任务在下一次事件循环开始执行，微任务在本次事件循环执行完成，\n识别宏任务->宏任务触发存入事件触发线程->微任务入队->js引擎执行所有微任务->gui渲染线程开始渲染页面->js引擎执行宏任务</p>\n<h2>promise</h2>\n<p>回调函数完成异步操作，有诸多缺点</p>\n<ul>\n<li>混乱：回调函数没有明确的调用时机，边界模糊，任何时候任何地点都可以调用</li>\n<li>不统一的：自定义成功/失败回调</li>\n<li>嵌套：回调函数的嵌套地狱，加剧混乱</li>\n</ul>\n<p>promise的重要意义是完成了异步操作趋于统一化、规范化、流程化的管理</p>\n<ul>\n<li>统一：任务状态，pending->fulfilled或者pending->reject</li>\n<li>规范：then成功，catch失败</li>\n<li>流程：链式调用,并且链式完整的，不会中途中断。</li>\n</ul>\n<p>promise特点：</p>\n<ul>\n<li>\n<p>回调函数作用域指向全局的，包括then的回调</p>\n</li>\n<li>\n<p>链式调用:then、catch、finally串联操作</p>\n</li>\n<li>\n<p>then可以无限调用，前一个then的return值会传递到下一个then里。</p>\n</li>\n<li>\n<p>catch和finally只有一次调用生效，但是不会阻塞链式传递，后面仍然可以catch、then</p>\n</li>\n</ul>\n<h3>关于thenable对象，先执行then方法，并且resolve可以透传参数</h3>\n<pre><code class=\"language-js\">const thenable = {\n  then (resolve, reject) {\n    console.log('then');\n    resolve(1)\n  }\n}\nPromise.resolve(thenable)\nPromise.resolve(thenable).then(res => console.log(res))\n</code></pre>\n<h2>async...await</h2>\n<p>await的意义是将promise链式调用执行异步任务转化为同步代码块执行异步任务，贴合代码顺序执行\nawait执行规则</p>\n<pre><code>await expression\nif(value is Promise){\n    expression.then()\n}else if(value is thenable){\n    Promise.resolve(expression.then())\n}else{\n    Promise.resolve(expression)\n}\n\n</code></pre>\n<p>当async...await遇上forEach时，特别注意。forEach执行规则如下</p>\n<pre><code>arr.forEach((item.i)=>{\n    fn(item,i)\n});\n//等价于\nconst fnWrap = (item,i) =>{\n    fn(item,i);\n}\nfor(let i = 0;i<array.length;i++){\n    fnWrap(arr[i],i);\n}\n\n</code></pre>\n<p>例子</p>\n<pre><code class=\"language-js\">var arr=[{a:1},{}];\narr.forEach(function(item,idx){\n    item.b=idx;\n});\n</code></pre>\n<p>forEach、map、filter、every、some和reduce会跳过空位</p>\n<pre><code class=\"language-js\">let array = [,1,,2,,3];\narray = array.map((i) => ++i) // array [,2,,3,,4]\n</code></pre>\n"}}></div>
  }
  