
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<h1>函数</h1>\n<ul>\n<li>写一个判断数据类型的方法</li>\n</ul>\n<pre><code class=\"language-js\">const getType = (data) => {\n  const originType = Object.prototype.toString.call(data);\n  const index = originType.indexOf(' ');\n  const type = originType.slice(index + 1, -1);\n  return type.toLowerCase();\n}\n\n// 测试\nconst arr = [true, 'hello', 123, Symbol(), []];\n\narr.forEach((item) => console.log(getType(item)));\n</code></pre>\n<ul>\n<li>手写防抖和节流</li>\n<li>分别写出防抖和节流的两个函数，并描述它们分别有什么运用场景？</li>\n</ul>\n<pre><code class=\"language-js\">const myThrottle = (fn,delay)=>{\n  let timer = -1;\n  return ()=>{\n    if(timer === -1){\n      timer = setTimeout(()=>{\n        fn();\n        clearTimeout(timer);\n        timer =-1;\n      },delay)\n    }\n  }\n}\nconst myDebounce = (fn,delay)=>{\n  let timer = -1;\n  return ()=>{\n    if(timer>-1){\n      clearTimeout(timer);\n      timer =-1;\n    }\n    timer=setTimeout(fn,delay)\n  }\n}\n</code></pre>\n<ul>\n<li>手写函数柯里化（curry）和函数组合（compose）</li>\n</ul>\n<pre><code class=\"language-js\">const curry = (fn,len,...args) => {\n  return (...newArgs)=>{\n    let _args = [...args,...newArgs];\n    if(_args.length>=len){\n      return fn.apply(this,_args);\n    }\n    return curry.call(this,fn,len,..._args)\n  }\n}\nconst myCurry = (fn,len = fn.length)=>{\n  return curry.call(this,fn,len)\n}\n\nconst myCompose = (...fns) => fns.reduce((f1, f2) => (...args) => f1(f2(...args)));\n</code></pre>\n<ul>\n<li>手写sleep函数（考虑兼容性）</li>\n<li>请写一个sleep（暂停）函数</li>\n</ul>\n<pre><code class=\"language-js\">var sleep =(fn,ms)=> setTimeout(fn)\n</code></pre>\n<ul>\n<li>判断设备来源的方法（isIos、isAndroid、isIphoneX）</li>\n</ul>\n<pre><code class=\"language-js\">const DeviceInfo = (() => {\n  const ua = window.navigator?.userAgent;\n  const isMobile = /Mobile|Android|iPhone/i.test(ua);\n  const isAndroid = /android/i.test(ua);\n  const isIos = /iPhone|iPad|iPod|iOS/i.test(ua);\n  const isIphoneX = isIos &amp;&amp; (\n    (window.screen.height === 812 &amp;&amp; window.screen.width === 375) || \n    (window.screen.height === 896 &amp;&amp; window.screen.width === 414)\n  );\n  return {\n    isMobile,\n    isAndroid,\n    isIos,\n    isIphoneX,\n  };\n})();\n</code></pre>\n<ul>\n<li>手写深克隆方法,考虑性能</li>\n</ul>\n<pre><code class=\"language-js\">const deepClone = (target)=>{\n  if(typeof target === 'object'){\n    const obj = Array.isArray(target)?[]:{};\n    for(let item in target){\n      if(obj.hasOwnProperty(item)){\n        obj[item] = deepClone(target(item));\n      }\n    }\n  }else{\n    return target;\n  }\n}\n</code></pre>\n<ul>\n<li>写一个深比较对象的方法？</li>\n</ul>\n<pre><code class=\"language-js\">const isPrimitive = (val) => {\n  return val === null || typeof val !== 'object';\n}\nconst isTypeEq = (obj1, obj2) => {\n  return Object.prototype.toString.call(obj1) === Object.prototype.toString.call(obj2)\n}\nconst isDeepEq = (obj, newObj) => {\n  if (isPrimitive(obj) || isPrimitive(newObj) || !isTypeEq(obj, newObj)) {\n    return obj === newObj;\n  }\n  if (obj === newObj) return true;\n  if (Object.keys(obj).length !== Object.keys(newObj).length) {\n    return false;\n  }\n  for (let key in obj) {\n    if (!isDeepEq(obj[key], newObj[key])) return false;\n  }\n  return true;\n}\n// 测试\nconst ans = isDeepEq([0, 1, 2, 3], { 0: 0, 1: 1, 2: 2, 3: 3 })\nconsole.log(ans)\n</code></pre>\n<ul>\n<li>html字符串转虚拟dom</li>\n</ul>\n<pre><code class=\"language-js\">/**\n * 例如\n * 输入：<div id=&quot;main&quot; data-x=&quot;hello&quot;>Hello<span id=&quot;sub&quot; /></div>\n * 输出：\n * {\n    tag: &quot;div&quot;,\n    selfClose: false,\n    attributes: {&quot;id&quot;: &quot;main&quot;,&quot;data-x&quot;: &quot;hello&quot;},\n    text: &quot;Hello&quot;,\n    children: [\n      {\n        tag: &quot;span&quot;,\n        selfClose: true,\n        attributes: {&quot;id&quot;: &quot;sub&quot;}\n      }\n    ]\n  }\n * /\n \n</code></pre>\n<ul>\n<li>实现jsonp、ajax</li>\n</ul>\n<pre><code class=\"language-js\">/**\n * \n * @param {*} options \n * https://github.com/webmodules/jsonp/blob/master/index.js\n */\nfunction myJsonp(options) {\n\treturn new Promise((resolve, reject) => {\n\t\t//判断是否是第一次jsonp请求\n\t\tif (!window.jsonpNum) {\n\t\t\twindow.jsonpNum = 1\n\t\t} else {\n\t\t\twindow.jsonpNum++\n\t\t}\n\n\t\tlet {\t\t\t\t\t\n\t\t\turl,\n\t\t\tdata,\n\t\t\ttimeout = 5000,\n\t\t\tcbkey = 'callback',\n\t\t} = options\n        \n\t\t//保证每次请求接收的方法都不会重复\n\t\tlet funName = 'jsonpReceive' + window.jsonpNum\n        \n\t\t//清除本次jsonp请求产生的一些无用东西\n\t\tfunction clear() { \t\t\t\t\t\t\t\n\t\t\twindow[funName] = null\n\t\t\tscript.parentNode.removeChild(script);\n\t\t\tclearTimeout(timer)\n\t\t}\n\t\t\n\t\t//定义jsonp接收函数\n\t\twindow[funName] = function(res) {\n\t\t//一旦函数执行了，就等于说请求成功了\n\t\t\tresolve(res) \t\t\t\t\t\t\t\n\t\t\tclear()\n\t\t}\n\t\t\n\t\t//请求超时计时器\n\t\tlet timer = setTimeout(() => {\t\t\t\t\n\t\t\treject('超时了')\n\t\t\tclear()\n\t\t}, timeout)\n\t\t\n\t\t//定义请求的参数\n\t\tlet params = '' \t\t\t\t\t\t\t\t\n\t\t\n\t\t//如果有参数\n\t\tif (Object.keys(data).length) { \t\t\t\n\t\t\tfor (let key in data) {\n\t\t\t\tparams += '&amp;'+key+'='+encodeURIComponent(data[key]);\n\t\t\t}\n\t\t\t\n\t\t\tparams = params.substr(1)\n\t\t}\n\t\t\n\t\t//拼接最终的请求路径，结尾拼接回调的方法名\n\t\turl = url + '?' + params + '&amp;'+cbkey+'='+funName;  \t\n\n\t\tlet script = document.createElement('script');\n\t\tscript.src = url;\n\t\tdocument.body.appendChild(script);\n\t})\n}\n\n</code></pre>\n<ul>\n<li>用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值</li>\n</ul>\n<pre><code class=\"language-js\">const getRandomNumber = (fromNumber, toNumber) => {\n  return Math.floor((toNumber - 1) * Math.random()) + fromNumber;\n}\nconst getFiveNumberDuplicate = (len, set) => {\n  if (set.size === len) return;\n  set.add(getRandomNumber(2, 32));\n  getFiveNumberDuplicate(len, set);\n}\n\n// 测试\nconst set = new Set([])\ngetFiveNumberDuplicate(5, set);\nconsole.log(set)\n</code></pre>\n<ul>\n<li>实现一个极简的模版引擎(参考handlebars)</li>\n</ul>\n<pre><code class=\"language-js\">function getHtmlFromTemp (data, temp) {\n  return temp.replace(/{{([a-zA-Z0-9]+)}}/g, (_, $1) => data[$1])\n}\n// 测试\nconst data = { name2: 'jack', age: 11 };\nconst temp = '<div>my name is {{name2}}</div><span>age is {{age}}</span>'\nconst ans = getHtmlFromTemp(data, temp);\nconsole.log(ans);\n</code></pre>\n<ul>\n<li>实现一个极简的数据响应式\n方法一</li>\n</ul>\n<pre><code class=\"language-js\">function defineReactive (object, key, value, effect) {\n  Object.defineProperty(object, key, {\n    get () {\n      return value;\n    },\n    set (newValue) {\n      value = newValue\n      effect();\n    }\n  })\n}\nfunction observer (object, effect) {\n  for (let key in object) {\n    if (object.hasOwnProperty(key)) {\n      defineReactive(obj, key, object[key], effect)\n    }\n  }\n}\n\n// 测试\nconst obj = {\n  name: 'jack',\n  other: { age: 11 }\n}\nfunction effect () {\n  console.log(`<div>${obj.other.age}</div>`)\n}\n\nobserver(obj, effect);\nobj.other = 11;\n</code></pre>\n<p>方法二</p>\n<pre><code class=\"language-js\">function reactive (object, effect) {\n  return new Proxy(object, {\n    get (target, prop) {\n      return reactive(Reflect.get(target, prop), effect);\n    },\n    set (target, prop, value) {\n      const result = Reflect.set(target, prop, value);\n      effect();\n      return result;\n    }\n  })\n}\n\nconst obj = {\n  name: 'jack',\n  other: { age: 11 }\n}\n\nconst reactiveObj = reactive(obj, () => console.log(`<div>${obj.other.age}</div>`));\nreactiveObj.other.age = 0;\n\n</code></pre>\n<ul>\n<li>手写一个函数getValue，获取对象的指定属性</li>\n</ul>\n<pre><code class=\"language-js\">const getValue = (o,path) => {\n  try {\n    return path.split('.').reduce((o,k) => o[k],o)\n  } catch (error) {\n    return undefined\n  }\n}\n// 测试\nvar data = { a: { b: { c: '1' } } }\ngetValue(data, 'a.b.c') // => 1\ngetValue(data, 'a.b.c.d') // => undefined\ngetValue(data, 'a.b.c.d.e.f.g') // => undefined\n</code></pre>\n<ul>\n<li>实现一个极简的webpack</li>\n<li>写一个方法判断js的方法是内置的还是自定义的</li>\n<li>实现一个函数记忆的方法</li>\n</ul>\n<pre><code class=\"language-js\">function memo(fn){\n  const cache = {};\n  return (arg)=>cache[arg] || (cache[arg]=fn(arg));\n}\n</code></pre>\n<ul>\n<li>使用js实现变态跳台阶</li>\n<li>写一个方法，使得sum(x)(y)和sum(x,y)返回的结果相同</li>\n<li>如何使用js实现撤消和重做并写出伪代码</li>\n<li>写一个方法对对象中的key进行排序</li>\n<li>写一个方法遍历指定对象的所有属性</li>\n<li>写出几种创建对象的方式</li>\n<li>手动实现一个Promisify函数</li>\n<li>设计一个函数，奇数次执行的时候打印 1，偶数次执行的时候打印 2</li>\n<li>简单封装一个异步fecth，使用async await的方式来使用</li>\n<li>请写一个函数，输出出多级嵌套结构的Object的所有key值</li>\n<li>versions 是一个项目的版本号列表，因多人维护，不规则，动手实现一个版本号处理函数</li>\n<li>简单封装一个异步 fecth，使用 async await 的方式来使用</li>\n<li>给 JavaScript 的 String 原生对象添加一个名为 trim 的原型方法，用于截取字符串前后的空白字符</li>\n<li>请编写一个 JavaScript 函数 parseQueryString,它的用途是把 URL 参数解析为一个对象，url=&quot;http://iauto360.cn/index.php?key0=0&amp;key1=1&amp;key2=2&quot;</li>\n</ul>\n"}}></div>
  }
  