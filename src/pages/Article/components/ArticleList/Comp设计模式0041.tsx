
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h3>设计模式</h3>\n<ul>\n<li>手写单例模式（singleton）</li>\n</ul>\n<pre><code class=\"language-js\">//单例模式\nfunction Singleton(name){\n  this.name=name;\n  this.instance = null;\n}\nSingleton.prototype.getName=function(){\n  console.log(this.name);\n}\n\nSingleton.getInstance = function(name){\n  if(this.instance){\n    return this.instance;\n  }\n  return this.instance = new Singleton(name);\n}\n\nlet A = Singleton.getInstance('A');\nlet B = Singleton.getInstance('B');\n\nconsole.log(A===B);\nconsole.log(A.getName());\nconsole.log(B.getName());\n</code></pre>\n<ul>\n<li>手写观察者模式（observer）、发布订阅模式</li>\n</ul>\n<pre><code class=\"language-js\">// 观察者模式\nclass Observer{\n  static event = new Map();\n  static on = (name,fn)=>{\n    this.event.set(name,{isOnce:false,fn})\n  }\n  static once = (name,fn)=>{\n    this.event.set(name,{isOnce:true,fn});\n  }\n  static off = (name)=>{\n    this.event.delete(name);\n  }\n  static emit = (name,data)=>{\n    let cashe = this.event.get(name);\n    if(cashe){\n      if(cashe.isOnce){\n        this.event.delete(name);\n      }\n      cashe.fn(data);\n    }\n  }\n}\n</code></pre>\n"}}></div>
  }
  