
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h2>promise</h2>\n<ul>\n<li>\n<p>手写promise，包括then，catch和finally</p>\n</li>\n<li>\n<p>手写promise的all、race、allSettled</p>\n</li>\n</ul>\n<pre><code class=\"language-js\">const all = (arr) => {\n  return new Promise((resolve,reject)=>{\n    const ret = [];\n    let count = 0;\n    for(let i=0;i<arr.length;i++){\n      arr[i].then(res=>{\n        ret[i] = res;\n        count++;\n        if(count === arr.length) {\n          resolve(ret);\n        }\n      }).catch(reject)\n    }\n  })\n}\nconst race = (arr) => {\n  return new Promise((resolve,reject)=>{\n    for(let i = 0;i<arr.length;i++){\n      arr[i].then(resolve).catch(reject);\n    }\n  })\n}\nconst allSettled = (arr)=>{\n  return new Promise((resolve,reject)=>{\n    const ret = [];\n    let count = 0;\n    for(let i=0;i<arr.length;i++){\n      arr[i].then(res=>{\n        ret[i] = res;\n      }).catch(err=>{\n        ret[i]=err;\n      }).finally(()=>{\n        count++;\n        if(count === arr.length) {\n          resolve(ret);\n        }\n      })\n    }\n  })\n}\n</code></pre>\n<ul>\n<li>手写promise的并发（limit）</li>\n</ul>\n<pre><code class=\"language-js\">\nconst request = (msg,delay)=>new Promise(resolve=>setTimeout(()=>resolve(msg),delay));\n\nconst arr = [\n  ()=>request(1,2000),\n  ()=>request(2,1000),\n  ()=>request(3,6000),\n  ()=>request(4,5000),\n  ()=>request(5,4000),\n]\n\nconst limitPromise = (arr,max)=>{\n  const pool = [];\n  const wait = [];\n\n  const run = (task)=>{\n    task().then(res=>{\n      const next = wait.shift();\n      console.log(res);\n      if(next) run(next);\n    })\n  }\n  for(let i =0;i<arr.length;i++){\n    const item = arr[i]\n    if(i<max){\n      run(item)\n    }else{\n      wait.push(arr[i]);\n    }\n  }\n}\n\nlimitPromise(arr,2);\n</code></pre>\n<ul>\n<li>手写promise重试（retry）</li>\n</ul>\n<pre><code class=\"language-js\">\n// 重试\nconst myPromiseRetry = (promise,times)=>{\n  return new Promise((resolve,reject)=>{\n    const fn = promise().then(res=>{\n      resolve(res);\n    }).catch(err=>{\n      if(times>0){\n        times--;\n        fn();\n      }else{\n        console.error('重试次数使用完毕');\n        reject(err);\n      }\n    })\n    fn();\n  })\n}\n</code></pre>\n<ul>\n<li>手写promise超时（timeout）</li>\n</ul>\n<pre><code class=\"language-js\">// 超时\nconst promiseTimeout = (promise,delay)=>{\n  return Promise.race([promise,new Promise(resolve=>{\n    setTimeout(()=>resolve(),delay)\n  })])\n}\n</code></pre>\n<ul>\n<li>用 Promise 封装一个 ajax</li>\n</ul>\n"}}></div>
  }
  