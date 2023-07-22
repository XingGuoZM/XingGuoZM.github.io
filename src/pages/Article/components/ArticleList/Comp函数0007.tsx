
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
<li>手写instanceof</li>
</ul>
<pre><code class="language-js">// 引用类型判断
const myInstanceof = (object,constructor)=>{
  let prototype = constructor.prototype;
  object = object.__proto__;
  while(true){
    if(!object) return false;
    if(prototype == object) return true;
    object = object.__proto__;
  }
}
</code></pre>
<ul>
<li>
<p>写一个判断数据类型的方法</p>
</li>
<li>
<p>手写let、const</p>
</li>
</ul>
<pre><code class="language-js">/**
 * 块级作用域下有效
 * 不能重复声明
 * 不能预处理，不存在变量提升，即未声明之前的代码不能调用
 */
  (function(){
    var i = 0;
    console.log(i)
  })()

  //const
/**
 * @param {*} key 
 * @param {*} value 
 * 用于声明一个常量
 * 块级作用域有效
 * 不能重复声明
 * 不能预处理，不存在变量提升，未声明之前不能调用
 * 不能修改
 * 声明时必须初始化
 */
function myConst(key,value){
  window[key]=value;
  Object.defineProperty(window,key,{
    enumerable:false,
    configurable:false,
    get:function(){
      return value;
    },
    set:function(newValue){
      if(newValue!==value){
        throw TypeError('这是只读变量，不可修改')
      }else{
        return value;
      }
    }
  })
}
</code></pre>
<ul>
<li>
<p>手写一个函数，获取对象的指定属性</p>
</li>
<li>
<p>手写一个new方法</p>
</li>
</ul>
<pre><code class="language-js">// 实现一：
const myNew = (fn,...args)=>{
  const obj = {};
  // 补齐原型链
  obj.__proto__ = fn.prototype;
  // 补齐this指向
  const ret = fn.call(obj,...args);
  return typeof ret === 'object' ? ret:obj;
}

// 实现二：
function myNew2(){

  const Constructor = [].shift.call(arguments);
  const obj = Object.create(Constructor.prototype);
  const ret = Constructor.apply(obj,arguments);
  return typeof ret === 'object' ? ret:obj;
}
</code></pre>
<ul>
<li>手写一个继承函数</li>
<li>手写一个call、bind的方法</li>
</ul>
<pre><code class="language-js">Function.prototype.myCall = function(ctx,...args){
  ctx = ctx || window;
  args = args || [];
  const key = Symbol();
  ctx[key] = this;
  const ret = ctx[key](...args);
  delete ctx[key];
  return ret;
}
Function.prototype.myBind = function(ctx,...args){
  const fn = this;
  args = args || [];
  return function newFn(...newArgs){
    if(this instanceof newFn){
      return new fn(...args,...newArgs);
    }
    return fn.apply(ctx,args.concat(newArgs))
  }
}
</code></pre>
<ul>
<li>手写防抖和节流</li>
</ul>
<pre><code class="language-js">const myThrottle = (fn,delay)=>{
  let timer = -1;
  return ()=>{
    if(timer === -1){
      timer = setTimeout(()=>{
        fn();
        clearTimeout(timer);
        timer =-1;
      },delay)
    }
  }
}
const myDebounce = (fn,delay)=>{
  let timer = -1;
  return ()=>{
    if(timer>-1){
      clearTimeout(timer);
      timer =-1;
    }
    timer=setTimeout(fn,delay)
  }
}
</code></pre>
<ul>
<li>手写函数柯里化（curry）和函数组合（compose）</li>
</ul>
<pre><code class="language-js">const curry = (fn,len,...args) => {
  return (...newArgs)=>{
    let _args = [...args,...newArgs];
    if(_args.length>=len){
      return fn.apply(this,_args);
    }
    return curry.call(this,fn,len,..._args)
  }
} 
const myCurry = (fn,len = fn.length)=>{
  return curry.call(this,fn,len)
}

const myCompose=(...fns)=>{
  let isFirst = true;
  return fns.reduceRight((result,fn)=>{
    if(isFirst){
      isFirst=false;
      return fn(...result);
    }
    return fn(result);
  },args)
}
</code></pre>
<ul>
<li>
<p>手写sleep函数（考虑兼容性）</p>
</li>
<li>
<p>判断设备来源的方法（isIos、isAndroid、isIphoneX）</p>
</li>
</ul>
<pre><code class="language-js">const DeviceInfo = (() => {
  const ua = window.navigator?.userAgent;
  const isMobile = /Mobile|Android|iPhone/i.test(ua);
  const isAndroid = /android/i.test(ua);
  const isIos = /iPhone|iPad|iPod|iOS/i.test(ua);
  const isIphoneX = isIos &amp;&amp; (
    (window.screen.height === 812 &amp;&amp; window.screen.width === 375) || 
    (window.screen.height === 896 &amp;&amp; window.screen.width === 414)
  );
  return {
    isMobile,
    isAndroid,
    isIos,
    isIphoneX,
  };
})();
</code></pre>
<ul>
<li>手写深/浅克隆方法</li>
</ul>
<pre><code class="language-js">// 方法一
JSON.parse(JSON.stringify())
//方法二：
const deepClone = (target)=>{
  if(typeof target === 'object'){
    const obj = Array.isArray(target)?[]:{};
    for(let item in target){
      if(obj.hasOwnProperty(item)){
        obj[item] = deepClone(target(item));
      }
    }
  }else{
    return target;
  }
}
</code></pre>
<ul>
<li>手写一个函数，数组转对象（二维数组，每一项都是一个仅有2项的字符串数组）</li>
<li>手写一个函数，数组转树（每一项带父级id：pid）</li>
</ul>
<pre><code class="language-js">const arrayToTree = (arr,treeArr,pid)=>{
  for(let node of arr){
    if(node.pid === pid){
      const newNode = {...node,children:[]};
      treeArr.push(newNode);
      arrayToTree(arr,newNode.children,node.id)
    }
  }
}

const result = [];
arrayToTree(arr,result,null);
console.log(result);
</code></pre>
<ul>
<li>html字符串转虚拟dom</li>
</ul>
<pre><code class="language-js">/**
 * 例如
 * 输入：<div id=&quot;main&quot; data-x=&quot;hello&quot;>Hello<span id=&quot;sub&quot; /></div>
 * 输出：
 * {
    tag: &quot;div&quot;,
    selfClose: false,
    attributes: {&quot;id&quot;: &quot;main&quot;,&quot;data-x&quot;: &quot;hello&quot;},
    text: &quot;Hello&quot;,
    children: [
      {
        tag: &quot;span&quot;,
        selfClose: true,
        attributes: {&quot;id&quot;: &quot;sub&quot;}
      }
    ]
  }
 * /
 
</code></pre>
<ul>
<li>实现jsonp、ajax</li>
</ul>
<pre><code class="language-js">/**
 * 
 * @param {*} options 
 * https://github.com/webmodules/jsonp/blob/master/index.js
 */
function myJsonp(options) {
	return new Promise((resolve, reject) => {
		//判断是否是第一次jsonp请求
		if (!window.jsonpNum) {
			window.jsonpNum = 1
		} else {
			window.jsonpNum++
		}

		let {					
			url,
			data,
			timeout = 5000,
			cbkey = 'callback',
		} = options
        
		//保证每次请求接收的方法都不会重复
		let funName = 'jsonpReceive' + window.jsonpNum
        
		//清除本次jsonp请求产生的一些无用东西
		function clear() { 							
			window[funName] = null
			script.parentNode.removeChild(script);
			clearTimeout(timer)
		}
		
		//定义jsonp接收函数
		window[funName] = function(res) {
		//一旦函数执行了，就等于说请求成功了
			resolve(res) 							
			clear()
		}
		
		//请求超时计时器
		let timer = setTimeout(() => {				
			reject('超时了')
			clear()
		}, timeout)
		
		//定义请求的参数
		let params = '' 								
		
		//如果有参数
		if (Object.keys(data).length) { 			
			for (let key in data) {
				params += '&amp;'+key+'='+encodeURIComponent(data[key]);
			}
			
			params = params.substr(1)
		}
		
		//拼接最终的请求路径，结尾拼接回调的方法名
		url = url + '?' + params + '&amp;'+cbkey+'='+funName;  	

		let script = document.createElement('script');
		script.src = url;
		document.body.appendChild(script);
	})
}

</code></pre>
<ul>
<li>
<p>实现一个极简的webpack</p>
</li>
<li>
<p>实现一个极简的模版引擎</p>
</li>
<li>
<p>实现一个极简的数据响应式</p>
</li>
<li>
<p>用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值</p>
</li>
<li>
<p>实现setTimeout、setInterval</p>
</li>
</ul>
<pre><code class="language-js">const mySetInterval=(cb,delay)=>{
  const context =this;
  const timer = setTimeout(()=>{
    cb.call(context);
    clearTimeout(timer);
    mySetInterval(cb,delay)
  },delay);
}
</code></pre>
`}}></div>
  }
  