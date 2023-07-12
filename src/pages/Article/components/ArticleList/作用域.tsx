
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h1>作用域</h1>
<h3>关键词</h3>
<ul>
<li>var、let/const、变量提升、暂时性死区</li>
<li>词法作用域、执行上下文</li>
<li>闭包</li>
<li>函数、方法、IIFE、模块</li>
</ul>
<p>作用域是变量/常量的访问规则，或者说是变量/常量的影响范围，通过指定作用域的类型来分配变量的访问权限，例如函数作用域只在函数代码块内生效，全局作用域在全局任何地方都能访问。作用域类型即变量访问权限分配规则</p>
<p>作用域链：在多层嵌套的父子作用域中，提供变量查找的渠道。</p>
<h3>var变量提升</h3>
<p>关键词：词法环境、块作用域、暂时死区</p>
<p>变量的声明周期：创建、初始化、赋值、引用、销毁。变量提升相关的三个阶段是创建、初始化和赋值</p>
<p>var变量提升：创建和初始化（undefined）是被提升的，赋值不是
let变量提升：创建是被提升的（存入暂时性死区），初始化和赋值不是
function变量提升：创建、初始化和赋值同时被提升</p>
<p>var定义变量特点</p>
<ol>
<li>变量提升：在任何时候都会在执行代码之前处理变量声明，var变量声明是编译时</li>
<li>变量同名覆盖：var可以重复声明赋值，后面会覆盖前面</li>
<li>全局使用var定义的变量会成为window的属性</li>
<li>只认函数作用域和全局作用域</li>
</ol>
<p>块作用域
词法环境：当执行代码块（{}包裹的代码）时会创建一个词法环境，与全局环境形成嵌套，词法环境里包含环境记录。而我们的let定义的变量就存放在这个词法环境中。let在多个块作用域中声明变量时，js会创建单独的区域由词法环境为这些变量维护一个类似栈的结构，所以同名的let变量在不同的代码块中声明是不会冲突的。即词法环境是执行上下文的另一个组件</p>
<p>es6的let和const声明的变量在代码执行开始到声明之前，变量都处于暂时性死区（Temporal dead zone，TDZ）之中。暂时性死区是代码执行时，一段从当前作用域开始到使用let/const声明变量/常量行之前的区域，在这段区域中变量尚未被初始化，如果在这期间尝试访问变量将会抛出ReferenceError。例如</p>
<pre><code class="language-js">// TDZ，开始
console.log(a);// undefined
console.log(b);//RefernceError
var a = 1
let b = 2; // TDZ，结束(b)
</code></pre>
<p>let声明的变量将作用域限制在块作用域内，在代码没有执行到它的初始化语句之前，它仍然存在于TDZ中</p>
<pre><code class="language-js">function foo(){
  var a = 1;
  if(a){
    let a = a + 1; // ReferenceError
  }
}
foo();
</code></pre>
<pre><code class="language-js">function bar(n){
  console.log(n); // {a:[1,2,3]}
  for(let n of n.a){// ReferenceError
    console.log(n);
  }
}
bar({a: [1,2,3]})
</code></pre>
<p>let定义变量的特点</p>
<ol>
<li>存在暂时性死区，死区内访问变量会报错</li>
<li>不能重复命名，存在重复命名会报错</li>
<li>在块作用域中生效</li>
</ol>
<h3>函数作用域</h3>
<p>创建函数有多种方式</p>
<ol>
<li>函数表达式</li>
<li>function关键词</li>
<li>箭头函数表达式（lamada函数）和自执行函数表达式（IIFE）</li>
</ol>
<p>函数作用域</p>
<h3>模块</h3>
<p>模块化的重要意义即拆分，作用域拆分，变量的影响</p>
<h3>var 函数作用域/全局作用域</h3>
<pre><code class="language-js">if(! &quot;a&quot; in window){
    var a = 1;
}
console.log(a);
</code></pre>
<pre><code class="language-js">var a = 1;
b = 2;
eval('var c = 3');
delete a;
delete b;
delete c;
</code></pre>
<h3>function</h3>
<pre><code class="language-js">(function f () {
  function f () { return 1; }
  return f();
  function f () { return 2; }
})();
</code></pre>
<pre><code class="language-js">(function(x){
  delete x;
  return x;    
}
)(1);
</code></pre>
<h3>var与IIFE</h3>
<pre><code class="language-js">(function() {
  var a = b = 5;
})();   
console.log(b);
console.log(a);
</code></pre>
<pre><code class="language-js">var a = 10;
(function () {
  console.log(a)
  a = 5
  console.log(window.a);
  var a = 20;
  console.log(a)
})()
</code></pre>
<pre><code class="language-js">var b = 10;
(function b() {
  b = 20;
  console.log(b)
})()
</code></pre>
<pre><code class="language-js">var foo = &quot;Hello&quot;;
(function () {
  var bar = &quot; World&quot;;
  console.log(foo + bar);
})();
console.log(foo + bar);
</code></pre>
<pre><code class="language-js">// 输出结果
var name = 'Tom';
(function () {
  if (typeof name === 'undefined') {
    var name = 'Jack';
    console.log('Goodbye ' + name)
  } else {
    console.log('Hello ' + name);
  }
})();

//输出结果
var name = 'Tom';
(function () {
  if (typeof name === 'undefined') {
    name = 'Jack';
    console.log('Goodbye ' + name)
  } else {
    console.log('Hello ' + name);
  }
})();

</code></pre>
<pre><code class="language-js">var foo = {n:1};
(function(foo){
    console.log(foo.n);
    foo.n = 3;
    var foo = {n:2};
    console.log(foo.n);
})(foo);
console.log(foo.n);
</code></pre>
<h3>变量覆盖</h3>
<pre><code class="language-js">meili()
function meili () {
  console.log(&quot;meili&quot;)
}
mogu()
var mogu = function () {
  console.log(&quot;mogu&quot;)
}
</code></pre>
<pre><code class="language-js">compute(10, 100);
var compute = function (A, B) {
  console.info(A * B);
};
function compute (A, B) {
  console.info(A + B);
}
function compute (A, B) {
  console.info((A + B) * 2);
}
compute(2, 10);
</code></pre>
<pre><code class="language-js">
check('first');
function check (ars) {
  console.log(1, ars);
}

check('second');
var check = function (ars) {
  console.log(2, ars);
}
</code></pre>
<h3>异步操作中作用域</h3>
<pre><code class="language-js">// html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
</ul>
// js
var elements = document.getElementsByTagName(&quot;li&quot;);
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    console.log(i);
  };
}
</code></pre>
<pre><code class="language-js">for (var i = 0; i < 3; i++) {
  setTimeout(_ => {
    console.log(i)
  })
}

for (let i = 0; i < 3; i++) {
  setTimeout(_ => {
    console.log(i)
  })
}
</code></pre>
<pre><code class="language-js">for (var i = 0; i< 10; i++){
   setTimeout(() => {
    console.log(i);
   }, 1000)
}

for (var i = 0; i< 10; i++){
  (function(i){
    setTimeout(() => {
    console.log(i);
   }, 1000)
  })(i)
}

for (var i = 0; i< 10; i++){
  (function(i){
    setTimeout(() => {
    console.log(i);
   }, 1000*i)
  })(i)
}

for (var i = 0; i< 10; i++){
  setTimeout(() => {
    (function(i){console.log(i);}(i)
  }), 1000)
}

for (var i = 0; i< 10; i++){
  setTimeout(() => {
    console.log(i);
  }, 1000)
}
</code></pre>
`}}></div>
  }
  