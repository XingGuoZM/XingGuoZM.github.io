
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<ul>
<li>实现一个函数arrange函数，使得支持以下功能</li>
</ul>
<pre><code class="language-js">// 实现该函数
function arrange(name){}

arrange('william').execute();
// > william is notified

arrage('william').do('commit').execute();
// > william is notified
// > Start to commit

arrage('william').wait(5).do('commit').execute();
// > william is notified
// 等待5s
// > Start to commit

arrage('william').waitFirst(5).do('push').execute();
// 等待5s
// > william is notified
// > Start to push
</code></pre>
<p>题解</p>
<pre><code class="language-js">
function arrange (name) {
  const task = [];
  task.push(() => {
    console.log(name + ' is notified');
  });
  function doSomething (name) {
    task.push(() => {
      console.log('Start to ' + name);
    })
    return this;
  }
  function wait (s) {
    task.push(async () => new Promise(resolve => {
      setTimeout(resolve, s * 1000)
    }))
    return this;
  }
  function waitFirst (s) {
    task.unshift(async () => new Promise(resolve => {
      setTimeout(resolve, s * 1000)
    }))
    return this;
  }
  async function execute () {
    for (const t of task) {
      await t();
    }
  }

  return {
    do: doSomething,
    wait,
    waitFirst,
    execute,
  }
}
</code></pre>
`}}></div>
  }
  