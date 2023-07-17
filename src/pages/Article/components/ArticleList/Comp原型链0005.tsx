
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h1>原型链</h1>
<h3>关键词</h3>
<ul>
<li>TC39</li>
<li>__proto__、prototype、constructor</li>
<li>class、extends、super、new、new.target</li>
<li>instanceof、Object.create</li>
<li>Object.getPrototypeOf、Object.setPrototypeOf</li>
</ul>
<h3>原型</h3>
<ul>
<li>prototype：TC39上原话object that provides shared properties for other objects，翻译过来就是一个给其他对象提供共享属性的对象</li>
</ul>
<h3>原型链</h3>
<p>原型：构造函数和实例对象的连接的纽带，函数和对象的关系（横向），js中原型是继承的基础。每个对象（object）都有一个原型链对象（也叫隐式原型）__proto__（现在__proto__已经废弃，改为使用Object.getPrototypeOf()和Object.setPrototypeOf()来实现），所有构造函数都有一个原型对象prototype</p>
<p>原型链：对象属性/方法的访问规则，它是顺着对象的隐式原型（__proto__）向上（构造函数）查找，父类和子类以及他们的实例对象之间的关联关系（垂直）。就像我们抽水的时候，水是顺着建好的水管来流动的，水管就是一个水的流动规则，可以向上流，也可以向下流，可以动态的构造水管的走向，自定义规则。原型链、作用域链等也是这样的，我们可以动态修改隐式原型，可以修改__proto__对象的某个属性，也可以重写__proto__对象，也可以通过对象隐式原型访问构造函数。</p>
<p>原型和原型链组成了对象属性访问的规则网络（横向和纵向二维关系）</p>
<p>如果原型链中断，会发生什么？</p>
<p>我们知道可以使用instanceof来检测某个实例对象的原型链上是否存在构造函数的原型对象（prototype）。其实现伪代码如下</p>
<pre><code class="language-js">function myInstanceof(object,constructor){
  left = object.__proto__
  right = constructor.prototype
  while(true){
    if(left === null) return false
    if(left === right) return true
    left = left.__proto__
  } 
}
</code></pre>
<h3>创建对象的几种方式</h3>
<p>new关键词和Object.create()都会创建一个对象并返回一个对象，new的过程概括起来有4步,实现伪代码如下</p>
<pre><code class="language-js">function myNew(constructor){
  // 第1步，创建一个对象
  object = {}
  // 第2步，补齐原型链
  object.__proto__ = constructor.prototype
  // 第3步，确保执行上下文对象正确（this）
  ret = constructor.call(object)
  // 第4步，返回一个对象
  return ret || object
}
</code></pre>
<p>Object.create(proto)即以现有对象（proto）作为原型创建一个新的对象。实现伪代码如下</p>
<pre><code class="language-js">function objectCreate(object){
  const newObj = {}
  newObj.__proto__ = object
  return newObj
}
</code></pre>
<p>我们最常用的是通过字面量来创建对象，即const obj = {}这种方式等价于const obj = Object()</p>
<p>怎么识别我的对象是通过哪种方式创建的呢？比如我们通过new来创建一个对象，就可以在构造函数中通过new.target来检测这个函数是否作为构造函数通过new来调用的，它指向直接被new执行的构造函数。例如</p>
<pre><code class="language-js">function Foo() {
  if (!new.target) throw &quot;Foo() must be called with new&quot;;
  console.log(&quot;Foo instantiated with new&quot;);
  console.log(new.target)
}

Foo(); // throws &quot;Foo() must be called with new&quot;
new Foo(); // logs &quot;Foo instantiated with new&quot;
</code></pre>
<h3>原型、隐式原型和构造函数(prototype、__proto__、constructor)</h3>
<p>实例对象、构造函数，父类子类的关联关系总结如下公式</p>
<pre><code>// 原型：描述了实例对象和构造函数的关联关系
实例对象.constructor === 构造函数
实例对象.__proto__ === 构造函数.prototype

// 原型链：描述了构造函数和其祖先构造函数的关联关系
子类.__proto__ === 父类
子类.prototype.__proto__ === 父类.prototype
</code></pre>
<p>上面的公式等价于下面的例子</p>
<pre><code class="language-js">class A {}
class B extends A {}

const a = new A();
const b = new B();

// a.constructor === A
// a.__proto__ === A.prototype

// B是一个对象
// B.__proto__ === A
// B是一个函数
// B.prototype.__proto__ === A.prototype
</code></pre>
<h3>原型对象属性的操作</h3>
<pre><code class="language-js">function Fn1 (name) {
  if (name) {
    this.name = name;
  }
}
Fn1.prototype.name = &quot;jack&quot;
let a = new Fn1();
console.log('a:', a.name);

function Fn2 (name) {
  this.name = name;
}
Fn2.prototype.name = &quot;jack&quot;
let b = new Fn2();
console.log('b:', b.name);
</code></pre>
<pre><code class="language-js">function Foo () { }
Foo.prototype.z = 3;
var obj = new Foo();
console.info(obj.z)
obj.z = 10;
console.info(obj.z);
delete obj.z;
console.info(obj.z);
</code></pre>
<pre><code class="language-js">var tmp = {};
var A = function () { };
A.prototype = tmp;

var a = new A();
A.prototype = {};

var b = Object.create(tmp);
b.constructor = A.constructor;

console.log(a instanceof A);
console.log(b instanceof A);
</code></pre>
<pre><code class="language-js">function Person(age){
  this.age = age;
}

Person.prototype = {
  constructor:Person,
  getAge:function(){
    console.log(this.age);
  },
 }

var p = new Person(24);
Person.prototype.age = 18;
Object.prototype.age = 20;
p.getAge();
</code></pre>
<h3>es6 class get/set</h3>
<pre><code class="language-js">class Phone{
  constructor(price){
    this.price = price;
  }
  get price(){
    return 999;
  }
}
var p = new Phone(888);
console.log(p.price);
</code></pre>
<h3>prototype和__proto__关系</h3>
<pre><code class="language-js">class A { }
class B extends A { }
const a = new A()
const b = new B()

console.log(a.__proto__)
console.log(b.__proto__)
console.log(B.__proto__)
console.log(B.prototype.__proto__)
console.log(b.__proto__.__proto__)
</code></pre>
<h3>构造函数和普通函数</h3>
<pre><code class="language-js">var name = 'Jay'
function Person (name) {
  this.name = name;
  console.log(this.name)
}
var a = Person('Tom')
console.log(name)
console.log(a)
var b = new Person('Michael')
console.log(b)
</code></pre>
<h3>Object.create()实现原理</h3>
<pre><code class="language-js">const Book = {
  price: 32
}
const book = Object.create(Book);
book.type = 'Math';
delete book.price;
delete book.type;
console.log(book.price);
console.log(book.type);
</code></pre>
<h3>原型链与闭包</h3>
<pre><code class="language-js">var Foo = (function () {
  var x = 0;
  function Foo () { }
  Foo.prototype.increment = function () {
    ++x;
    console.log(x);
  };
  return Foo;
})();

var a = new Foo();
a.increment();
a.increment();
var b = new Foo();
a.increment();
</code></pre>
`}}></div>
  }
  