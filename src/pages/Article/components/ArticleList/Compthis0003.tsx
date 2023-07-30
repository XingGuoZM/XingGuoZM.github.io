
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h1>this</h1>
<h3>关键词</h3>
<ul>
<li>TC39</li>
</ul>
<h3>执行上下文对象</h3>
<p>指向函数执行时所在的上下文对象，箭头函数（表达式）除外，它直接指向函数定义时所在的上下文对象。</p>
<p>普通对象（无论多少层级）、普通函数调用，this指向全局</p>
<pre><code class="language-js">const obj = {a:this}
obj.a // window

const fn = function (){ return this }
fn() // window
</code></pre>
<h3>this指向的4种情况</h3>
<ol>
<li>普通函数调用</li>
<li>对象方法调用</li>
<li>new 构造函数</li>
<li>call、apply和bind</li>
</ol>
<h3>对象方法调用</h3>
<pre><code class="language-js">var x = 1;

var obj = {
  x: 3,
  fun: function () {
    var x = 5;
    return this.x;
  }
};

var fun = obj.fun;
console.log(obj.fun(), fun());
</code></pre>
<pre><code class="language-js">var obj = {
  name: &quot;zhangsan&quot;,
  sayName: function () {
    console.info(this.name);
  }
}

var wfunc = obj.sayName;
obj.sayName();
wfunc();
var name = &quot;lisi&quot;;
obj.sayName();
wfunc();
</code></pre>
<pre><code class="language-js">var name = 'test'
var a = {
  name: 'ass',
  getName: function () {
    return this.name;
  }
}
var b = a.getName;
b();
</code></pre>
<h3>构造函数调用（new）</h3>
<pre><code class="language-js">var a = 5;
function test () {
  a = 0;
  console.log(a);
  console.log(this.a);
  var a;
  console.log(a);
}
new test();
</code></pre>
<pre><code class="language-js">const Person = (name = &quot;wang&quot;, age = 10) => {
  this.name = name;
  this.age = age;
  return this.name + ' is ' + this.age + 'years old'
}
let result = new Person('zhang', 11)
console.log(result)
</code></pre>
<pre><code class="language-js">var person = {
  age: 18,
  getAge: function () {
    return this.age;
  }
};
var getAge = person.getAge
getAge()
</code></pre>
<h3>call调用</h3>
<pre><code class="language-js">function fun () {
  return () => {
    return () => {
      return () => {
        console.log(this.name)
      }
    }
  }
}
var f = fun.call({ name: 'foo' })
var t1 = f.call({ name: 'bar' })()()
var t2 = f().call({ name: 'baz' })()
var t3 = f()().call({ name: 'qux' })
</code></pre>
<h3>箭头函数调用</h3>
<pre><code class="language-js">let obj1 = {
  a: 1,
  foo: () => {
    console.log(this.a)
  }
}
obj1.foo()
const obj2 = obj1.foo
obj2()
</code></pre>
<h3>异步回调</h3>
<pre><code class="language-js">var name = 'global';

var obj = {
  name: 'local',
  foo: function () {
    this.name = 'foo';
  }.bind(window)
};

var bar = new obj.foo();
setTimeout(function () {
  console.log(window.name);
}, 0);
console.log(bar.name);

var bar3 = bar2 = bar;
bar2.name = 'foo2';
console.log(bar3.name);
</code></pre>
`}}></div>
  }
  