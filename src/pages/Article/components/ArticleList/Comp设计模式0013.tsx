
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h3>设计模式</h3>
<ul>
<li>手写单例模式（singleton）</li>
</ul>
<pre><code class="language-js">//单例模式
function Singleton(name){
  this.name=name;
  this.instance = null;
}
Singleton.prototype.getName=function(){
  console.log(this.name);
}

Singleton.getInstance = function(name){
  if(this.instance){
    return this.instance;
  }
  return this.instance = new Singleton(name);
}

let A = Singleton.getInstance('A');
let B = Singleton.getInstance('B');

console.log(A===B);
console.log(A.getName());
console.log(B.getName());
</code></pre>
<ul>
<li>手写观察者模式（observer）、发布订阅模式</li>
</ul>
<pre><code class="language-js">// 观察者模式
class Observer{
  static event = new Map();
  static on = (name,fn)=>{
    this.event.set(name,{isOnce:false,fn})
  }
  static once = (name,fn)=>{
    this.event.set(name,{isOnce:true,fn});
  }
  static off = (name)=>{
    this.event.delete(name);
  }
  static emit = (name,data)=>{
    let cashe = this.event.get(name);
    if(cashe){
      if(cashe.isOnce){
        this.event.delete(name);
      }
      cashe.fn(data);
    }
  }
}
</code></pre>
`}}></div>
  }
  