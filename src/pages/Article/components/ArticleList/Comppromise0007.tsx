
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h2>promise</h2>
<ul>
<li>
<p>手写promise，包括then，catch和finally</p>
</li>
<li>
<p>手写promise的all、race、allSettled</p>
</li>
</ul>
<pre><code class="language-js">const all = (arr) => {
  return new Promise((resolve,reject)=>{
    const ret = [];
    let count = 0;
    for(let i=0;i<arr.length;i++){
      arr[i].then(res=>{
        ret[i] = res;
        count++;
        if(count === arr.length) {
          resolve(ret);
        }
      }).catch(reject)
    }
  })
}
const race = (arr) => {
  return new Promise((resolve,reject)=>{
    for(let i = 0;i<arr.length;i++){
      arr[i].then(resolve).catch(reject);
    }
  })
}
const allSettled = (arr)=>{
  return new Promise((resolve,reject)=>{
    const ret = [];
    let count = 0;
    for(let i=0;i<arr.length;i++){
      arr[i].then(res=>{
        ret[i] = res;
      }).catch(err=>{
        ret[i]=err;
      }).finally(()=>{
        count++;
        if(count === arr.length) {
          resolve(ret);
        }
      })
    }
  })
}
</code></pre>
<ul>
<li>手写promise的并发（limit）</li>
</ul>
<pre><code class="language-js">
const request = (msg,delay)=>new Promise(resolve=>setTimeout(()=>resolve(msg),delay));

const arr = [
  ()=>request(1,2000),
  ()=>request(2,1000),
  ()=>request(3,6000),
  ()=>request(4,5000),
  ()=>request(5,4000),
]

const limitPromise = (arr,max)=>{
  const pool = [];
  const wait = [];

  const run = (task)=>{
    task().then(res=>{
      const next = wait.shift();
      console.log(res);
      if(next) run(next);
    })
  }
  for(let i =0;i<arr.length;i++){
    const item = arr[i]
    if(i<max){
      run(item)
    }else{
      wait.push(arr[i]);
    }
  }
}

limitPromise(arr,2);
</code></pre>
<ul>
<li>手写promise重试（retry）</li>
</ul>
<pre><code class="language-js">
// 重试
const myPromiseRetry = (promise,times)=>{
  return new Promise((resolve,reject)=>{
    const fn = promise().then(res=>{
      resolve(res);
    }).catch(err=>{
      if(times>0){
        times--;
        fn();
      }else{
        console.error('重试次数使用完毕');
        reject(err);
      }
    })
    fn();
  })
}
</code></pre>
<ul>
<li>手写promise超时（timeout）</li>
</ul>
<pre><code class="language-js">// 超时
const promiseTimeout = (promise,delay)=>{
  return Promise.race([promise,new Promise(resolve=>{
    setTimeout(()=>resolve(),delay)
  })])
}
</code></pre>
`}}></div>
  }
  