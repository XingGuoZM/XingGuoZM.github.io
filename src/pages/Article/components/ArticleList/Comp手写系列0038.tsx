
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h3>手写原生方法</h3>\n<ol>\n<li>考虑兼容性</li>\n<li>考虑方法本身特点</li>\n</ol>\n<ul>\n<li>手写instanceof</li>\n</ul>\n<pre><code class=\"language-js\">// 引用类型判断\nconst myInstanceof = (object,constructor)=>{\n  let prototype = constructor.prototype;\n  object = object.__proto__;\n  while(true){\n    if(!object) return false;\n    if(prototype == object) return true;\n    object = object.__proto__;\n  }\n}\n</code></pre>\n<ul>\n<li>手写let、const</li>\n</ul>\n<pre><code class=\"language-js\">/**\n * 块级作用域下有效\n * 不能重复声明\n * 不能预处理，不存在变量提升，即未声明之前的代码不能调用\n */\n  (function(){\n    var i = 0;\n    console.log(i)\n  })()\n\n  //const\n/**\n * @param {*} key \n * @param {*} value \n * 用于声明一个常量\n * 块级作用域有效\n * 不能重复声明\n * 不能预处理，不存在变量提升，未声明之前不能调用\n * 不能修改\n * 声明时必须初始化\n */\nfunction myConst(key,value){\n  window[key]=value;\n  Object.defineProperty(window,key,{\n    enumerable:false,\n    configurable:false,\n    get:function(){\n      return value;\n    },\n    set:function(newValue){\n      if(newValue!==value){\n        throw TypeError('这是只读变量，不可修改')\n      }else{\n        return value;\n      }\n    }\n  })\n}\n</code></pre>\n<ul>\n<li>手写一个new方法</li>\n</ul>\n<pre><code class=\"language-js\">// 实现一：\nconst myNew = (fn,...args)=>{\n  const obj = {};\n  // 补齐原型链\n  obj.__proto__ = fn.prototype;\n  // 补齐this指向\n  const ret = fn.call(obj,...args);\n  return typeof ret === 'object' ? ret:obj;\n}\n\n// 实现二：\nfunction myNew2(){\n\n  const Constructor = [].shift.call(arguments);\n  const obj = Object.create(Constructor.prototype);\n  const ret = Constructor.apply(obj,arguments);\n  return typeof ret === 'object' ? ret:obj;\n}\n</code></pre>\n<ul>\n<li>手写一个call、bind的方法</li>\n</ul>\n<pre><code class=\"language-js\">/*\n* 思路：在指定的上下文对象里添加一个属性（目标函数）并执行\n* 1. 确保ctx一定是一个对象\n  2. 确保添加key的唯一性\n*/\nFunction.prototype.myCall = function(ctx,...args){\n  ctx = (ctx === undefined || ctx === null) ? globalThis : Object(ctx);\n  var key = Symbol();\n  var fn = this;\n  Object.defineProperty(ctx,key,{\n    enumerable:false,\n    value:fn,\n  })\n  var ret = ctx[key](...args);\n  delete ctx[key];\n  return ret;\n}\n/*\n*思路：将this与指定上下文对象绑定，返回一个函数\n1. 参数合并\n2. 判断bind之后的函数是不是构造函数\n*/\nFunction.prototype.myBind = function (ctx) {\n  ctx = (ctx === null || ctx === undefined) ? globalThis : Object(ctx);\n  var args = Array.prototype.slice.call(arguments, 1);\n  var fn = this;\n  return function func () {\n    var nextArgs = Array.prototype.slice.call(arguments);\n    var allArgs = args.concat(nextArgs);\n    if (Object.getPrototypeOf(this) === func.prototype) {\n      var obj = { };\n      Object.setPrototypeOf(obj, fn.prototype);\n      fn.apply(obj, allArgs);\n      return obj;\n    }\n    return fn.apply(ctx, allArgs);\n  }\n}\n\n</code></pre>\n<ul>\n<li>实现setTimeout、setInterval</li>\n</ul>\n<pre><code class=\"language-js\">const mySetInterval=(cb,delay)=>{\n  const context =this;\n  const timer = setTimeout(()=>{\n    cb.call(context);\n    clearTimeout(timer);\n    mySetInterval(cb,delay)\n  },delay);\n}\n</code></pre>\n<ul>\n<li>实现一个寄生式组合继承</li>\n<li>手写一个继承函数</li>\n<li>手写数组的map、filter、find方法</li>\n</ul>\n<pre><code class=\"language-js\">Array.prototype.myMap = function (callback) {\n  const arr = []\n  for (let i = 0; i < this.length; i++) {\n    arr[i] = callback(this[i], i);\n  }\n  return arr;\n}\n\nArray.prototype.myFilter = function (callback) {\n  const arr = [];\n  for (let i = 0; i < this.length; i++) {\n    if (callback(this[i], i)) {\n      arr.push(this[i]);\n    }\n  }\n  return arr;\n}\n\nArray.prototype.myFind = function (callback) {\n  for (let i = 0; i < this.length; i++) {\n    if (callback(this[i], i)) {\n      return this[i];\n    }\n  }\n}\n\n// 测试\nconst arr = [1, 2, 3, 4, 9, 5];\nconst mapArr = arr.myMap((item, index) => item + index);\nconsole.log(mapArr);\n\nconst filterArr = arr.myFilter((item, index) => item > index);\nconsole.log(filterArr);\n\nconst findArr = arr.myFind((item, index) => item === index);\nconsole.log(findArr)\n</code></pre>\n<ul>\n<li>手写数组拉平方法(flat)</li>\n</ul>\n<pre><code class=\"language-js\">// flat即根据指定深度递归将所有子元素拼接到新数组中\n/**\n * 存在空项的数组\n * 类数组 arguments等\n */\nArray.prototype.myFlat = function (depth = 1) {\n  return this.reduce((pre, cur) => {\n    return pre.concat(Array.isArray(cur) &amp;&amp; depth > 1 ? cur.myFlat(depth - 1) : cur)\n  }, [])\n}\n\nconst arr = [1, 2, [3, 4, [5, 6, [7, { name: 'hello' }, [9, 10]]]]];\nconst arrayLike = {\n  length: 3,\n  0: [1, 2],\n  // 嵌套的类数组对象不会被展平\n  1: { length: 2, 0: 3, 1: 4 },\n  2: 5,\n};\nconsole.log(arr.myFlat(Infinity));\nconsole.log(Array.prototype.flat.call(arrayLike));\n</code></pre>\n<ul>\n<li>请实现一个flattenDeep函数，把多维数组扁平化</li>\n</ul>\n<pre><code class=\"language-js\">Array.prototype.myFlatDeep = function (depth = 1) {\n  return this.flat().reduce((pre, cur) => {\n    return pre.concat(Array.isArray(cur) &amp;&amp; depth > 1 ? cur.myFlat(depth - 1) : cur)\n  }, [])\n}\n\nconst arr = [\n  [1, 2, 3],\n  [4, 5, 6],\n  [7, 8, 9],\n];\nconsole.log(arr.myFlatDeep(2));\n</code></pre>\n<ul>\n<li>使用js写个方法，使得数组的两个元素互换，要求高性能</li>\n<li>使用js写一个方法，使得数组的某个元素置顶</li>\n<li>写一个方法，让数组里的元素上移一格/下移一格</li>\n</ul>\n<pre><code class=\"language-js\">Array.prototype.swap = function (i, j) {\n  this[i] = this.splice(j, 1, this[i])[0];\n  return this;\n}\nArray.prototype.movePrev = function (index) {\n  this.swap(index, index - 1);\n  return this;\n}\nArray.prototype.moveNext = function (index) {\n  this.swap(index, index + 1);\n  return this;\n}\n\nArray.prototype.moveTop = function (index) {\n  while (index > 0) {\n    this.movePrev(index--);\n  }\n  return this;\n}\nArray.prototype.moveBottom = function (index) {\n  while (index < this.length - 1) {\n    this.moveNext(index++);\n  }\n  return this;\n}\n\nconst arr = [0, 1, 2, 3, 4, 5];\n// console.log(arr.swap(2, 4));\nconsole.log(arr.moveBottom(2));\n</code></pre>\n<ul>\n<li>分别写出数组的交集、并集、差集、补集这四个方法</li>\n</ul>\n<pre><code class=\"language-js\">// 交集\nArray.prototype.intersect = function (arr) {\n  return this.filter(item => arr.includes(item));\n}\n// 差集\nArray.prototype.minus = function (arr) {\n  return this.filter(item => !arr.includes(item));\n}\n// 补集\nArray.prototype.complement = function (arr) {\n  return [...this.filter(item => !arr.includes(item)), ...arr.filter(item => !this.includes(item))]\n}\n// 并集\nArray.prototype.unionset = function (arr) {\n  return this.concat(arr.filter(v => !this.includes(v)))\n}\n\nconst arr1 = [1, 2, 3, 4, 5];\nconst arr2 = [2, 4, 6, 8, 10]\nconsole.log(arr1.intersect(arr2))\nconsole.log(arr1.minus(arr2))\nconsole.log(arr1.complement(arr2))\nconsole.log(arr1.unionset(arr2))\n</code></pre>\n<ul>\n<li>手写数组indexOf</li>\n</ul>\n<pre><code class=\"language-js\">const myIndexOf = (arr, item) => {\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] === item) return i;\n  }\n  return -1;\n}\n</code></pre>\n<ul>\n<li>手写数组reduce</li>\n</ul>\n<pre><code class=\"language-js\">\nconst myReduce = (array, callback, initialValue) => {\n  const fakeArray = [...array]\n  if (initialValue) {\n    fakeArray.unshift(initialValue);\n  }\n  let preValue = fakeArray[0];\n  for (let i = 0; i < fakeArray.length - 1; i++) {\n    preValue = callback(preValue, fakeArray[i + 1]);\n  }\n  console.log(preValue);\n  return preValue;\n}\n</code></pre>\n<ul>\n<li>用reduce实现map方法</li>\n</ul>\n<pre><code class=\"language-js\">const mapFromReduce = (array, callback) => {\n  return array.reduce((value, currValue, currIndex, array) => {\n    value.push(callback(currValue, currIndex, array));\n    return value;\n  }, []);\n}\n</code></pre>\n<ul>\n<li>手写数组排序方法(sort)</li>\n</ul>\n<pre><code class=\"language-js\">// 快速排序\nconst quickSort = (arr)=>{\n  const left =[];\n  const right =[];\n  const flag = arr.splice(0,1);\n  for(let i=0;i<arr.length;i++){\n    if(flag<arr[i]){\n      right.push(arr[i]);\n    }else{\n      left.push(arr[i]);\n    }\n  }\n  return quickSort(left).concat(flag,quickSort(right));\n}\n</code></pre>\n<ul>\n<li>实现一个isNaN的方法</li>\n</ul>\n<pre><code class=\"language-js\">Number.prototype.myIsNaN = function (num) {\n  return num !== Number(num)\n}\n</code></pre>\n<ul>\n<li>用js实现typeof的功能</li>\n<li>请实现一个 JSON.stringfy</li>\n<li>请实现一个 JSON.parse</li>\n</ul>\n<pre><code class=\"language-js\">//方法一：eval\nfunction jsonParse (opt) {\n  return eval(`(${opt})`);\n}\njsonParse(JSON.stringify({ x: 5 }))\n// Object { x: 5}\njsonParse(JSON.stringify([1, &quot;false&quot;, false]))\n// [1, &quot;false&quot;, false]\njsonParse(JSON.stringify({ b: undefined }))\n// {}\n\n// 方法二：Function\nvar func= new Function(arg1,arg2,...,functionBody);\nvar jsonStr = '{ &quot;age&quot;: 20, &quot;name&quot;: &quot;jack&quot; }'\nvar json = (new Function('return ' + jsonStr))()\n\n</code></pre>\n<ul>\n<li>原生实现 ES5 的 Object.create()方法</li>\n<li>写一个方法实现js的函数重载</li>\n<li>用js实现一个HashMap，不可以使用Object</li>\n<li>写一个方法代替eval</li>\n</ul>\n"}}></div>
  }
  