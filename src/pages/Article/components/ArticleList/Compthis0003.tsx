
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h1>this</h1>\n<h3>关键词</h3>\n<ul>\n<li>TC39</li>\n</ul>\n<h3>执行上下文对象</h3>\n<p>指向函数执行时所在的上下文对象，箭头函数（表达式）除外，它直接指向函数定义时所在的上下文对象。</p>\n<p>普通对象（无论多少层级）、普通函数调用，this指向全局</p>\n<pre><code class=\"language-js\">const obj = {a:this}\nobj.a // window\n\nconst fn = function (){ return this }\nfn() // window\n</code></pre>\n<h3>this指向的4种情况</h3>\n<ol>\n<li>普通函数调用</li>\n<li>对象方法调用</li>\n<li>new 构造函数</li>\n<li>call、apply和bind</li>\n</ol>\n<h3>对象方法调用</h3>\n<pre><code class=\"language-js\">var x = 1;\n\nvar obj = {\n  x: 3,\n  fun: function () {\n    var x = 5;\n    return this.x;\n  }\n};\n\nvar fun = obj.fun;\nconsole.log(obj.fun(), fun());\n</code></pre>\n<pre><code class=\"language-js\">var obj = {\n  name: &quot;zhangsan&quot;,\n  sayName: function () {\n    console.info(this.name);\n  }\n}\n\nvar wfunc = obj.sayName;\nobj.sayName();\nwfunc();\nvar name = &quot;lisi&quot;;\nobj.sayName();\nwfunc();\n</code></pre>\n<pre><code class=\"language-js\">var name = 'test'\nvar a = {\n  name: 'ass',\n  getName: function () {\n    return this.name;\n  }\n}\nvar b = a.getName;\nb();\n</code></pre>\n<h3>构造函数调用（new）</h3>\n<pre><code class=\"language-js\">var a = 5;\nfunction test () {\n  a = 0;\n  console.log(a);\n  console.log(this.a);\n  var a;\n  console.log(a);\n}\nnew test();\n</code></pre>\n<pre><code class=\"language-js\">const Person = (name = &quot;wang&quot;, age = 10) => {\n  this.name = name;\n  this.age = age;\n  return this.name + ' is ' + this.age + 'years old'\n}\nlet result = new Person('zhang', 11)\nconsole.log(result)\n</code></pre>\n<pre><code class=\"language-js\">var person = {\n  age: 18,\n  getAge: function () {\n    return this.age;\n  }\n};\nvar getAge = person.getAge\ngetAge()\n</code></pre>\n<h3>call调用</h3>\n<pre><code class=\"language-js\">function fun () {\n  return () => {\n    return () => {\n      return () => {\n        console.log(this.name)\n      }\n    }\n  }\n}\nvar f = fun.call({ name: 'foo' })\nvar t1 = f.call({ name: 'bar' })()()\nvar t2 = f().call({ name: 'baz' })()\nvar t3 = f()().call({ name: 'qux' })\n</code></pre>\n<h3>箭头函数调用</h3>\n<pre><code class=\"language-js\">let obj1 = {\n  a: 1,\n  foo: () => {\n    console.log(this.a)\n  }\n}\nobj1.foo()\nconst obj2 = obj1.foo\nobj2()\n</code></pre>\n<h3>异步回调</h3>\n<pre><code class=\"language-js\">var name = 'global';\n\nvar obj = {\n  name: 'local',\n  foo: function () {\n    this.name = 'foo';\n  }.bind(window)\n};\n\nvar bar = new obj.foo();\nsetTimeout(function () {\n  console.log(window.name);\n}, 0);\nconsole.log(bar.name);\n\nvar bar3 = bar2 = bar;\nbar2.name = 'foo2';\nconsole.log(bar3.name);\n</code></pre>\n"}}></div>
  }
  