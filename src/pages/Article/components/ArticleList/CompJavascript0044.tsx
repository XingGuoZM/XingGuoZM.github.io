
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h1>js试题</h1>
<h3>js面试题</h3>
<hr>
<ul>
<li>infinity代表什么数据？</li>
<li>你是如何做前端性能分析的？从哪些方面入手？有哪些指标？</li>
<li>如何计算动画的帧率（FPS）？</li>
<li>如何排查页面中CPU占用高的情况？</li>
<li>javascript什么时候会占CPU？</li>
<li>请说说new String(&quot;A&quot;)和String(&quot;A&quot;)分别返回的结果，请解释为什么？</li>
<li>如何把10.36四舍五入为最接近的整数？</li>
<li>请说说IEEE 754规定了哪些标准？</li>
<li>请说说IEEE 754标准指的是什么？</li>
<li>在严格模式下，全局作用域中函数中this的值是什么？</li>
<li>请说说严格模式下的this指向</li>
<li>分别解释下js中默认绑定、隐式绑定、显式绑定、new绑定的区别</li>
<li>浏览器中的剪切板是如何监听复制事件的？</li>
<li>js中Iterable对象和Array有什么区别？</li>
<li>请解释下什么是softbind，并实现一个softbind</li>
<li>js的作用域有哪些？</li>
<li>说说你对函数是一等公民的理解</li>
<li>setTimeout(fn,0)，延迟执行吗？</li>
<li>添加原生事件如果不移除为什么会内存泄露？</li>
<li>Promise和setTimeout执行先后有什么区别？</li>
<li>解释下什么是暂时性死区？</li>
<li>使用原生js给一个按钮绑定两个onclick事件</li>
<li>写一个函数时，如果有多个参数，如何传才比较好？</li>
<li>如何区分返回内容是文件流还是json数据？</li>
<li>如何监听浏览器窗口大小变化？</li>
<li>请问，javascript可以读取本地的文件吗？为什么？</li>
<li>请说说html、body、document、window四者的区别是什么？</li>
<li>如何创建视频文件的blob？</li>
<li>解释下3 + &quot;2&quot; - 5的值为多少？</li>
<li>js能够保证object属性的输出顺序吗？如果可以怎么做？</li>
<li>请解释下setTimeout的运行机制</li>
<li>哈希表的原理是什么？</li>
<li>如果要让你去实现一个散列函数，你将从哪些方面考虑？</li>
<li>什么是散列函数？它有什么特征？</li>
<li>对象的键可以重复吗？为什么？如果可以重复将会又什么样的表现？</li>
<li>举例说明createDocumentFragment和createElement有什么区别？</li>
<li>null是对象吗？</li>
<li>解释下JavaScript并发模型</li>
<li>请问typeof typeof 168的结果是什么？</li>
<li>实现一个isNaN的方法</li>
<li>解释下点击一个input输入框，依次会触发哪些事件？</li>
<li>说说你对稀疏数组的理解</li>
<li>举例说明你对尾递归的理解，它有什么应用场景？</li>
<li>如果使用JSON.stringify进行深拷贝有什么弊端？如何解决？</li>
<li>请说说你对内置对象和宿主对象的理解</li>
<li>为什么js里定义的数组可以不定长且数据类型可以不固定呢？</li>
<li>js最大支持多少长度的数组？为什么？</li>
<li>promise有哪几种状态？是如何变化的？</li>
<li>写出js各类型转化为Boolean的值分别是什么？及转化的规则是什么？</li>
<li>遍历一个树结构，除了可以用递归外还能用哪些方法？</li>
<li>for(;;)循环里如果省略第二个条件，则需要注意什么问题？</li>
<li>分析下<code>sum = n * (n - 1) / 2</code>的时间复杂度是什么？</li>
<li>一个好的算法都应包含哪些要素？</li>
<li>请解释下算法有什么特征（基本要素）？</li>
<li>请解释下数据结构与算法的关系</li>
<li>说说你对数据结构和数据类型的理解</li>
<li>js函数调用方式有哪些？</li>
<li>js函数定义方式有哪些？</li>
<li>请解释下执行栈有哪些特点？</li>
<li>请解释下为什么我们可以在声明函数前使用它？</li>
<li>举例说明哪些场景会遇到超大计算量的问题？</li>
<li>为什么eval要添加括号呢？</li>
<li>url链接中如果有两个问号会出现什么问题？如果通过js获取url的参数时能正常获取到吗？</li>
<li>字符串从哪里来的split方法和length属性？</li>
<li>是否所有的循环都能用递归代替？为什么？如果不可以，请举例说明</li>
<li>你觉得递归好写吗？</li>
<li>闭包是如何形成的？</li>
<li>请说说你对活动对象的理解</li>
<li>请说说你对变量对象的理解</li>
<li>如果给你一段代码，你能画出执行过程的上下文堆栈的变化吗？</li>
<li>如何激活一个上下文？</li>
<li>一个函数调用会产生多少个上下文环境？</li>
<li>map和forEach有什么区别？</li>
<li>一次JS的请求哪些地方会有缓存处理？</li>
<li>深拷贝里的循环引用如何解决？</li>
<li>使用js如何改变url参数值，并且页面不刷新？</li>
<li>使用js按贝格尔编排算法生成单循环对阵表</li>
<li>举例说明把一个数组扁平化的方法有哪些？</li>
<li>请问css/html/js/img的下载顺序是怎样的？都是并发执行的吗？</li>
<li>现在有一个宏任务，又有一个微任务两者同一层级，在微任务里面又有一个宏任务和一个微任务，请问执行顺序是什么,为什么？</li>
<li>new Function有什么应用场景？</li>
<li>js如何实现函数缓存？函数缓存有什么运用场景？</li>
<li>说说你对堆栈跟踪的理解</li>
<li>函数的调用栈是怎么工作的？</li>
<li>接口请求时需要做哪些安全处理？怎么做？</li>
<li>举例说明判断浏览器是否支持某个事件的方法有哪些？</li>
<li>请说说focus、blur与focusin、focusout的区别是什么？</li>
<li>举例说明+运算符的运行机制</li>
<li>请举例说明比较运算符<code>>,>=,<,<=</code>的比较规则</li>
<li>把对象转换到字符串类型是如何转换的？</li>
<li>把对象转换到数字类型是如何转换的？</li>
<li>requestIdleCallback在EventLoop的什么阶段执行？如何执行？</li>
<li>EventLoop有优点但也有缺点，请说说它的缺点是什么？</li>
<li>你知道什么是空闲回调(requestIdleCallback)吗？</li>
<li>requestAnimationFrame在EventLoop的什么阶段执行？</li>
<li>假设要在UI渲染之前处理一些事情你该怎么办？</li>
<li>js的请求一般情况下在哪些地方会有缓存的处理？</li>
<li>请说说DOM节点的操作如何优化？</li>
<li>说说你对RAIL性能评估模型的了解</li>
<li>如何设计一个JS SDK？说说你的方法</li>
<li>如何设计一个pageAPI？说说你的方法</li>
<li>SeaJS和RequireJS有什么区别？</li>
<li>如果要你自己实现一个requireJS库，你该怎么做？</li>
<li>class和普通构造函数有什么区别？</li>
<li>Math.min() < Math.max() 返回结果是什么？为什么？</li>
<li>js的哪些操作可以改变作用域链？</li>
<li>请说说JS中的索引数组、关联数组和静态数组、动态数组的定义与区别</li>
<li>在js中undefined和not defined的区别是什么？</li>
<li>js中的数字在电脑内存储为多少Byte？</li>
<li>列举出JS的全局函数</li>
<li>使用js如何创建一个private方法？</li>
<li>举例说明json的标准格式</li>
<li>如何取消promise？</li>
<li>在多个页面之间需要传递参数，你是如何传递这些参数的？</li>
<li>怎样做到js无阻塞加载？</li>
<li>什么情况下会出现js阻塞？</li>
<li>cookie的值可以设置为中文吗？为什么？如果可以怎么设置？</li>
<li>你有用过哪些模板引擎？你觉得哪个好用？为什么？</li>
<li>浏览器中window.length的结果是什么？为什么？</li>
<li>Array(3)和Array(3, 4)的区别是什么？</li>
<li>ArrayBuffer和Blob有什么区别？</li>
<li>动态加载的li如何绑定事件？</li>
<li>getComputedStyle和element.style有什么不同？</li>
<li>说说MutationObserver的应用场景有哪些？</li>
<li>使用try catch哪些异常是捕获不到的？哪些能捕获到？捕获不到的要怎样才能捕获到？</li>
<li>为什么jsonp不支持post的方法？</li>
<li>前端下载文件的方式有哪些？</li>
<li>使用window.open(url)下载文件时为什么会被浏览器拦截？如何解决？</li>
<li>sessionStrorage也可以使用onstorage事件吗?</li>
<li>解释下隐式全局变量和外部函数作用域</li>
<li>async属性诞生的初衷是什么？</li>
<li>你能用js模拟出右键的复制和粘贴功能吗？如果可以说下是如何操作的？如果不可以请说明下理由</li>
<li>js延迟加载的方式中，只有IE浏览器支持的是哪一种方式</li>
<li>当用户打开一个网页时，想一直停留在当前打开的页面，如何禁止页面前进和后退</li>
<li>前端如何保持与服务器时间同步（如何解决客户端与服务端时间不对称的问题）？</li>
<li>客户端与服务端时间为什么会不对称？不对称将会出现哪些问题？</li>
<li>你用过Navigator.sendBeacon()吗？说说它有什么应用场景？</li>
<li>请使用js实现商品的sku，并说说你的思路</li>
<li>js中的undefined和 ReferenceError: xxx is not defined 有什么区别？</li>
<li>一道变态题 Number.call.call(Number, undefined, 0) 等于什么？</li>
<li>ReferenceError和TypeError有什么区别？</li>
<li>如何避免JS浮点运算的精度问题（例：0.1+0.7=0.7999999999999999）</li>
<li>举例说明js立即执行函数的写法有哪些？</li>
<li>ajax请求地址只支持http/https吗？能做到让它支持rtmp://等其它自定义协议吗 ？</li>
<li>微信小程序实现轨迹回放，微信原生小程序，基于uniapp的小程序？</li>
<li>for in 和 for of 的区别？</li>
<li>异步请求重试策略有哪些呢？</li>
<li>写一个方法判断数组内元素是否全部相同</li>
<li>说说防止重复发送ajax请求的方法有哪些？各自有什么优缺点？</li>
<li>ajax如何接收后台传来的图片？</li>
<li>js源代码压缩都有哪些方法？它们的压缩原理分别是什么？</li>
<li>写一个 document.querySelector 的逆方法</li>
<li>说说你对js沙箱的理解，它有什么应用场景？</li>
<li>纯函数和函数式编程有什么关系？</li>
<li>为什么要用纯函数？</li>
<li>promise的构造函数是同步执行还是异步执行，它的then方法呢？</li>
<li>使用for-in语句能保证遍历对象的顺序吗？如果不能那为什么？如果可以那又如何保证？</li>
<li>内存泄漏和内存溢出有什么区别</li>
<li>js怎样避免原型链上的对象共享？</li>
<li>使用delete删除数组，其长度会改变吗？</li>
<li>代码中如果遇到未定义的变量，会抛出异常吗？程序还会不会继续往下走？</li>
<li>说说你对JSBridge的理解</li>
<li>js循环中调用异步的方法，如何确保执行结果的顺序是正确的？</li>
<li>你是如何比较js函数的执行速度的？</li>
<li>axios拦截器原理是什么？</li>
<li>axios为什么可以使用对象和函数两种方式调用？是如何实现的？</li>
<li>fetch和axios请求的原理都是基于XMLHttpRerequst吗？</li>
<li>举例说明面向对象编程有什么缺点？</li>
<li>一个api接口从请求数据到请求结束共与服务器进行了几次交互？</li>
<li>Number()的存储空间是多大？假如接口返回一个超过最大字节的数字怎么办？</li>
<li>alert如何让文本换行？</li>
<li>在不支持js的浏览器中如何隐藏JavaScript代码？</li>
<li>js的循环结构有哪些？</li>
<li>字符串拼接有哪些方式？哪种性能好？</li>
<li>innerHTML有什么缺点？</li>
<li>举例说明js中什么是尾调用优化？</li>
<li>如何判断两个对象相等？</li>
<li>localStorage什么时候过期？</li>
<li>XML与JSON有什么的区别？</li>
<li>flash如何与js交互？</li>
<li>说说你对js对象生命周期的理解</li>
<li>js操作节点的方法有哪些？</li>
<li>如何判断对象是否属于某个类？</li>
<li>在DOM上同时绑定两个点击事件（一个用捕获，一个用冒泡），事件总共会执行几次，先执行哪个事件？</li>
<li>json和对象有什么区别？</li>
<li>js怎么实现一个类并实例化这个类？</li>
<li>script所在的位置会影响首屏显示时间吗？</li>
<li>callee和caller的区别和作用是什么？</li>
<li>AudioContext有什么应用场景？</li>
<li>如何按回车自动提交表单</li>
<li>在设置keyup监听事件后按F5刷新和按浏览器中刷新键刷新有什么区别？</li>
<li>Geolocation.getCurrentPosition()用来做什么的？在什么浏览器不受兼容？</li>
<li>setTimeout的第三个参数有什么用？</li>
<li>解释下深度优先遍历和广度优先遍历的区别及如何实现</li>
<li>你认为es5的设计缺陷有哪些？</li>
<li>innerHTML与outerHTML有什么区别？</li>
<li>构造一个自定义二维 N<em>N 矩阵，从左上角第一个单元格依次填入1 - N</em>N的数字，从矩阵中指定单元格出发，经过相邻的单元格(不可重复)，走 X 步，输出所有可能的路径和每条路径单元格对应的数字。</li>
<li>使用ajax轮询接口有什么优缺点？</li>
<li>说说你对JS中暂性死区的理解，它有什么运用场景？</li>
<li>微信的JSSDK都有哪些内容？如何接入？</li>
<li>举例说明Object.defineProperty会在什么情况下造成循环引用导致栈溢出？</li>
<li>document.domain的作用是什么？它有什么限制？</li>
<li>pjax和ajax的区别是什么？</li>
<li>你有使用过pjax吗？它的原理是什么？</li>
<li>使用ajax请求真的不安全吗？为什么？</li>
<li>Math.ceil()、Math.round()、Math.floor()三者的区别是什么？</li>
<li>ajax请求中为何会出现OPTIONS请求？</li>
<li>你是如何排查js内存泄漏的？</li>
<li>在chrome中js的数组占用了多少内存？</li>
<li>判断[].<strong>proto</strong>.<strong>proto</strong> === {}.__proto__结果并解释为什么[代码]</li>
<li>js的数组/对象在内存中分别是如何存储的？</li>
<li>js可以用中文作为变量命名吗？为什么？</li>
<li>解释下如下代码的意图：Array.prototype.slice.apply(arguments)</li>
<li>举例说明js鼠标事件有哪些？</li>
<li>请举例说明JSON.stringify()有哪些特性？</li>
<li>日常开发中写JS循环时应该注意哪些情况？</li>
<li>js循环的数据量很大（例如100W+）时会出现什么情况？如何进行性能优化？</li>
<li>举例说明什么是响应式编程？</li>
<li>你知道什么是纯函数吗？</li>
<li>什么是函数式编程？它有什么优缺点？</li>
<li>举例说明为什么说ES模块比commonJS模块还优秀？</li>
<li>请说说commonJS模块与ES模块的差异有哪些？</li>
<li>说下你对IoC的理解，它有什么运用场景？</li>
<li>说说你对js中的依赖注入的理解，它的实现方式有哪些呢？</li>
<li>js如何解决数字精度丢失的问题？</li>
<li>有用过Handlebars模板引擎吗？它的工作原理是怎样的？</li>
<li>切换标签窗口后js定时器自动停止了，如何在激活标签后又继续呢？</li>
<li>在axios中怎样添加授权验证？</li>
<li>在浏览器标签页之间切换触发的事件是哪个？</li>
<li>说说你对HTML5中video blob的理解</li>
<li>你觉得虚拟DOM快吗？还有没有比它还快的方式？</li>
<li>DOM0、DOM2、DOM3事件处理方式的区别是什么？</li>
<li>说下js的parseInt()和Number()有什么区别？</li>
<li>表达式和语句有什么区别？如何把语句转换为表达式？</li>
<li>如何让js的filter方法支持大小写？</li>
<li>axios为什么能在浏览器中环境运行又能在node中环境运行？</li>
<li>setTimeout和setInterval有什么区别呢？</li>
<li>js对象如何深比较？</li>
<li>如何判断一个对象是否为空？</li>
<li>说说你对postMessage的理解，它有什么运用场景呢？</li>
<li>用js封装一个前端分页的库，说说你的思路</li>
<li>页面上的DOM有多个相同的ID，用js获取时结果会是怎么样的？</li>
<li>如何在用户刷新、跳转、关闭浏览器时向服务端发送统计的数据？</li>
<li>说下你对alert的理解，它有哪些特性呢？及使用它时要注意些什么？</li>
<li>你知道js的可选链是什么吗？说说你对它的理解，它有什么应用场景？</li>
<li>js的sort方法运用场景有哪些？</li>
<li>举例说明什么是短路求值？</li>
<li>你知道什么是PAJAX吗？它和AJAX有什么区别？它的应用场景有哪些？</li>
<li>js的控制台输出，平时除了用console.log外，你还知道哪些？使用console.log应该注意什么？</li>
<li>平时调试用console.log的输出结果可信吗？为什么？</li>
<li>用原生js获取DOM元素的方法有哪些？</li>
<li>举例说明js创建数组有哪些方法？</li>
<li>举例说明什么是匿名函数？它有什么优缺点呢？</li>
<li>列举下获取指定日期的毫秒数的方法有哪些？</li>
<li>pageshow和pageshide有什么应用场景呢？</li>
<li>有了解过getSelection API吗？怎么使用，有哪些场景？</li>
<li>window.console.log()和console .log()有区别吗？体现在哪里？</li>
<li>getElementById和querySelector方法的区别是什么？</li>
<li>举例说明document.execCommand有哪些用途</li>
<li>你平时是怎么调试js的？会断点调试吗？断点调试有什么技巧呢？</li>
<li>W3C的事件处理和IE的事件处理有哪些区别？</li>
<li>axios相比原生ajax的优点有哪些呢？</li>
<li>举例说明常用的BOM属性和方法有哪些？</li>
<li>你对window的属性devicePixelRatio有了解吗？说说它有什么实际应用场景？</li>
<li>js垃圾回收的方式有哪些？</li>
<li>异步加载和延迟加载有什么区别？</li>
<li>举例说明你对事件代理的理解</li>
<li>请解释下NaN表示什么呢？typeof NaN结果是什么？</li>
<li>解释下offsetWidth、clientWidth、scrollWidth这三者的区别是什么？</li>
<li>各浏览器的事件机制有什么不同？ 如何阻止事件冒泡？</li>
<li>前端异步的使用场景有哪些？</li>
<li>说出至少十条你理解的js规范</li>
<li>请分析!+[]+!![]+!![]+!![]+!![]+!![]的结果</li>
<li>请分析020-088=?的过程及结果</li>
<li>如果让你把把html页面导出为pdf，不用插件的话，你该怎么做？</li>
<li>请说说你对try/catch的理解，平时有在哪些场景会用到呢？</li>
<li>你有用过哪些3D渲染的库？</li>
<li>说下你对函数的形参与实参的理解</li>
<li>举例说明js拖拽用到的事件有哪些？</li>
<li>你知道什么是三元表达式吗？“三元” 表示什么意思？使用三元表达式应该注意些什么问题？</li>
<li>说说你对js排序的理解，你有了解哪些算法呢？举例说明数组的排序方法有哪些？</li>
<li>ES5和ES6、ES7有什么区别？</li>
<li>说说你对ArrayBuffer的理解！它和Array有什么区别？</li>
<li>stopPropagation()和preventDefault()这两个方法有什么区别？</li>
<li>你有使用过FileReader吗？说说它有哪些应用场景？</li>
<li>当用户刷新网页时，js的请求有哪些地方会有缓存处理呢？</li>
<li>onload事件和domcontentloaded哪个先执行呢？</li>
<li>说下你对面向对象的理解</li>
<li>在js中函数返回多个值有哪些方法？</li>
<li>为什么说js是弱类型语言，它的优缺点分别是什么？</li>
<li>举例说明atob和btoa的用法</li>
<li>遍历数组和对象的方法都有哪些？</li>
<li>举例说明这三种方法map、reduce和filter的区别是什么？</li>
<li>举例说明constructor和instanceof的区别是什么？</li>
<li>页面的编码和被请求的资源编码不一致时如何处理？</li>
<li>ajax的请求状态有哪几种？</li>
<li>请介绍下js的数据类型</li>
<li>你了解什么是AOP吗？它的作用是什么？举个例子</li>
<li>在js中attribute和property的区别是什么？</li>
<li>有些js库习惯在代码开头处添加分号有什么作用呢？除了分号还可以换成别的吗？</li>
<li>说说你对执行上下文的理解</li>
<li>请说说你对promise的理解</li>
<li>如何实现锁定网页、密码解锁的效果？说说你的方法和步骤是什么？</li>
<li>你知道1和Number(1)的区别是什么吗？</li>
<li>说说CORS为何要区分预检请求和简单请求呢？</li>
<li>实现异步编程有哪些方式？推荐用哪种？</li>
<li>请为什么说js是单线程，而不是多线程呢？</li>
<li>getelementbyId和queryselect平时经常使用哪一个？说说你的看法</li>
<li>箭头函数的this值继承于哪里</li>
<li>举例说明object.freeze有哪些用途呢？</li>
<li>微任务和宏任务有什么区别？</li>
<li>请比较下for、forEach、for of的性能的性能</li>
<li>你有使用过BackboneJS吗？说说它和vue有什么区别？</li>
<li>你有使用过ExtJs吗？说说它的优缺点是什么？</li>
<li>写例子说明js中自定义事件的使用与触发</li>
<li>js事件中currentTarget和target的区别是什么？</li>
<li>说说js跳出循环return、break、continue的区别？</li>
<li>说说你对异常处理和错误处理的理解</li>
<li>js依赖注入的实现思路是什么？它有什么优缺点呢？</li>
<li>阻止事件的默认行为有哪些？说说它们之间的区别是什么？</li>
<li>请举例说明动态操作DOM的方法有哪些？</li>
<li>请描述下函数的执行过程</li>
<li>用js实现页面局部打印和预览原理是什么呢？同时在IE上有什么不同？</li>
<li>JSON.stringify有什么局限性和哪些技巧？</li>
<li>原生Math的方法有哪些？请列举并描述其功能</li>
<li>什么是词法分析？请描述下js词法分析的过程？</li>
<li>说说用原生js实现封装一个选项卡的功能</li>
<li>说下你对柯里化函数(currying)的理解，它有什么运用场景？</li>
<li>请描述下ajax的请求都有哪些步骤？</li>
<li>请解释下NaN === NaN的结果</li>
<li>原生的字符串操作方法有哪些？请列举并描述其功能</li>
<li>举例说明js关闭当前窗口有哪些方法？</li>
<li>说说你对js包装对象的理解</li>
<li>JavaScript有几种类型值？能否画出它们的内存图？</li>
<li>你有用过webRTC吗？它有什么运用场景？</li>
<li>分析<code>('b' + 'a' + +'a' + 'a').toLowerCase()</code>返回的结果</li>
<li>保护js代码的方式有哪些？分别说说他们的原理是什么？</li>
<li>能否正确获取本地上传的文件路径？如果可以怎么做？如果不可以解释下为什么？</li>
<li>请说说escape、encodeURI、decodeURI、encodeURIComponent和decodeURIComponent的区别？</li>
<li>如何终止WebWork？</li>
<li>函数声明与函数表达式有什么区别？</li>
<li>请详细描述AJAX的工作原理</li>
<li>请描述下什么是原型模式？它主要运用在哪些场景？</li>
<li>请描述下js的原型和原型链的理解以及它们之间的关系</li>
<li>说说你对作用域链的理解</li>
<li>请说说json和jsonp的区别？</li>
<li>你是如何更好地处理Async/Await的异常的？</li>
<li>准确说出<code>'1,2,3,4'.split()</code>的结果是什么（包括类型和值）？</li>
<li>不依赖第三方库，说下如何使用js读取pdf？</li>
<li>不用第三方库，说说纯js怎么实现读取和导出excel？</li>
<li>说说你理解的同步和异步的区别是什么？</li>
<li>写例子说明如何给li绑定事件（ul下有1000+个li）？</li>
<li>要实现一个js的持续动画，你有什么比较好的方法？</li>
<li>js的函数有哪几种调用形式？</li>
<li>解释下为什么<code>{} + [] === 0</code>为true？</li>
<li>请描述下null和undefined的区别是什么？这两者分别运用在什么场景？</li>
<li>js异步加载有哪些方案？</li>
<li>把Script标签放在页面最底部的<code></body></code>之前和之后有什么区别？浏览器会如何解析它们？</li>
<li>js延迟加载的方式有哪些？</li>
<li>请描述你对浏览器同源策略的理解</li>
<li>举例说明js如何实现继承？</li>
<li>在js中怎么捕获异常？写出来看看？应该在哪些场景下采用呢？</li>
<li>举例说明什么是decodeURI()和encodeURI()是什么？</li>
<li>举例说明什么是IIFEs？它有什么好处？</li>
<li>举例说明数组和对象的迭代方法分别有哪些？</li>
<li>请快速答出此题的答案并解释：var x, y = 1; x + y = ?</li>
<li>说说instanceof和typeof的实现原理并自己模拟实现一个instanceof</li>
<li>js中=、==、===三个的区别是什么？并说明它们各自的工作过程</li>
<li>移动端点击事件为什么会有延迟？有哪些方法可以解决？</li>
<li>说说你对深浅拷贝的理解？并实现一个对数组和对象深拷贝的方法</li>
<li>Ajax请求中get和post方式有什么区别呢？分别在哪些场景下使用？</li>
<li>说说你对base64的理解，它的使用场景有哪些？</li>
<li>formData主要是用来做什么的？它的操作方法有哪些？</li>
<li>举例子说说你对js隐式类型转换的理解</li>
<li>请解释下什么是cookie隔离？为什么要隔离？如何隔离？</li>
<li>说说你对数据类型转换的理解是什么？类型转换的方法有哪些？</li>
<li>如何让(a==1 &amp;&amp; a==2 &amp;&amp; a==3)的值为true，把&quot;==&quot;换成&quot;===&quot;后还能为true吗？</li>
<li>举例子说明javascript的变量声明提升和函数声明提升</li>
<li>有用过HTML5的WebWork吗？它主要解决了什么问题？</li>
<li>请说下你对__proto__和prototype的理解</li>
<li>JSONP的原理是什么？解决什么问题？</li>
<li>document的load 和ready有什么区别？</li>
<li>什么是事件委托？它有什么好处？能简单的写一个例子吗？</li>
<li>字符串相连有哪些方式？哪种最好？为什么？</li>
<li>fetch 和 ajax 区别</li>
<li>如何捕获 setTimeout 异常</li>
<li>csrf 攻击是怎样攻击的？ 如何防御？</li>
<li>proimise 如何取消</li>
<li>写个还剩下多少天过年的倒计时</li>
<li>你对事件循环有了解吗？说说看！</li>
<li>请说说你对事件冒泡机制的理解？</li>
<li>写出几种创建对象的方式，并说说他们的区别是什么？</li>
<li>深度克隆对象的方法有哪些，并把你认为最好的写出来</li>
<li>JQuery的源码看过吗？能不能简单概括一下它的实现原理？</li>
<li>window对象和document对象有什么区别？</li>
<li>说说你对IIFE的理解</li>
<li>为什么会有跨域问题？怎么解决跨域？</li>
<li>说说你对模块化的理解</li>
<li>说说你对eval的理解</li>
<li>请你解释一个为什么10.toFixed(10)会报错？</li>
<li>说说你对this的理解？写出4个使用this的典型例子</li>
<li>造成内存泄漏的操作有哪些？</li>
<li>解释下这段代码的意思！：[].forEach.call($$(&quot;<em>&quot;),function(a){ a.style.outline=&quot;1px solid #&quot;+(~~(Math.random()</em>(1<<24))).toString(16) })</li>
<li>说说你对arguments的理解，它是数组吗？</li>
<li>说说bind、call、apply的区别？并手写实现一个bind的方法</li>
<li>0.1 + 0.2、0.1 + 0.3和0.1 * 0.2分别等于多少？并解释下为什么？</li>
<li>你对new操作符的理解是什么？手动实现一个new方法</li>
<li>&quot;attribute&quot;和&quot;property&quot;有什么不同？</li>
<li>你理解的&quot;use strict&quot;;是什么?使用它有什么优缺点？</li>
<li>typeof('abc')和typeof 'abc'都是string, 那么typeof是操作符还是函数？</li>
<li>返回到顶部的方法有哪些？把其中一个方法出来</li>
<li>什么是闭包？优缺点分别是什么？</li>
<li>说说你对javascript的作用域的理解</li>
<li>简要描述下JS有哪些内置的对象</li>
</ul>
<h3>笔试题</h3>
<hr>
<ul>
<li>用原生JS封装插件的方式有哪些？</li>
</ul>
<pre><code class="language-js">;(function (global) { 
  &quot;use strict&quot;;
  function MyPlugin(el, options) {
    //some cod
  };
  MyPlugin.prototype = {
    //定义方法
    show: function () {
      //some code
    }
 };
  if (typeof module !== 'undefined' &amp;&amp; module.exports) {    //兼容CommonJs规范 
    module.exports = MyPlugin;
  } else if (typeof define === 'function') {   //兼容AMD/CMD规范
    define(function () {
      return MyPlugin
    })
  } else {    //注册全局变量，兼容直接使用script标签引入插件
    global.MyPlugin = MyPlugin;
  }
})(this);
</code></pre>
<ul>
<li>
<p>写一个密码生成器，并同时写一个密码强度校验的方法</p>
</li>
<li>
<p>有什么方案可以提高无限滚动列表的性</p>
</li>
<li>
<p>你知道断点续传的原理吗？用js怎么实</p>
</li>
<li>
<p>清空一个数组的方式有哪些？它们有什么区</p>
</li>
<li>
<p>用js实现一个复制粘贴</p>
</li>
<li>
<p>如何解决在手机上长时间点击会选中图</p>
</li>
<li>
<p>axios如何一次发送多个并发请求</p>
</li>
<li>
<p>写一个方法，实现使用canvas播放视频？</p>
</li>
<li>
<p>js如何检测当前页面是否以全屏模式显示？</p>
</li>
<li>
<p>写一个让一句话随着鼠标移动的小插件</p>
</li>
<li>
<p>用js实现一个导航吸顶效</p>
</li>
<li>
<p>请实现一个计算器的功能</p>
</li>
<li>
<p>写一个方法从数组中随机抽取N个不重复的元素</p>
</li>
<li>
<p>写一个方法找出指定一维数组所有不重复的元素和个数</p>
</li>
<li>
<p>请写出几种匿名自执行的写法（至少三种）</p>
</li>
<li>
<p>js如何把网页加入收藏夹</p>
</li>
<li>
<p>如何用js获取DOM元素在页面中的绝对位置？</p>
</li>
<li>
<p>写一个方法获取div的宽高</p>
</li>
<li>
<p>写一个方法来获取div到浏览器窗口的高度</p>
</li>
<li>
<p>如何禁止IOS移动端网页橡皮筋的效果？</p>
</li>
<li>
<p>写一个方法判断页面滚动方向</p>
</li>
<li>
<p>写一个网络不通时则提醒用户的方法</p>
</li>
<li>
<p>用js封装一个对cookie操作的方法</p>
</li>
<li>
<p>如何使用js获取当前的url和来源的url？</p>
</li>
<li>
<p>写一个方法实现js的函数重载</p>
</li>
<li>
<p>写一个方法找出一段话里面出现频率最多的词</p>
</li>
<li>
<p>请使用js实现一个省市县级联的效果</p>
</li>
<li>
<p>用js实现一个轮播图，并简述有哪些实现的方法</p>
</li>
<li>
<p>请使用纯js实现一个横向或纵向的无缝滚动效果</p>
</li>
<li>
<p>请写一个获取颜色的正则</p>
</li>
<li>
<p>用原生js实现类似getElementsByClassName的方法，不能使用querySelectorAll</p>
</li>
<li>
<p>写一个方法将html页面生成为图片</p>
</li>
<li>
<p>请用js实现一个简单的小区楼的电梯运行程序</p>
</li>
<li>
<p>举例说明如何使用WebSQL？</p>
</li>
<li>
<p>举例说明js如何拖拽排序？</p>
</li>
<li>
<p>写一个根据xpath获取元素的方法</p>
</li>
<li>
<p>怎样在JavaScript中创建一个worker线程？</p>
</li>
<li>
<p>写个给图片加水印的方法</p>
</li>
<li>
<p>怎么下载一个zip文件？</p>
</li>
<li>
<p>用js模拟实现微信抢红包的算法，并说明你的思路</p>
</li>
<li>
<p>使用js实现摩斯密码的加密和解密</p>
</li>
<li>
<p>请使用原生的js实现斐波那契数列</p>
</li>
<li>
<p>请用js实现一个promise的方法</p>
</li>
<li>
<p>写一个汉字与Unicode码的互转的方法</p>
</li>
<li>
<p>写一个方法监听某个div滚动</p>
</li>
<li>
<p>使用js写一个时钟的程序</p>
</li>
<li>
<p>写一个任意进制转换的程序</p>
</li>
<li>
<p>使用js写一个计算字符串的字节数的方法</p>
</li>
<li>
<p>用代码实现游戏应用中连续按键触发必杀技的监测方法</p>
</li>
<li>
<p>写一个方法判断一个数字是否为整数</p>
</li>
<li>
<p>用js实现最大化和最小化窗口</p>
</li>
<li>
<p>js如何实现打印指定的区域（局部打印）？</p>
</li>
<li>
<p>写一个方法检测页面中的所有标签是否正确闭合</p>
</li>
<li>
<p>写个方法判断当前脚本运行在浏览器还是node环境中</p>
</li>
<li>
<p>写一个方法，传入数字x，从一个一维数组里找到两个数字符合“n1 + n2 ＝ x”</p>
</li>
<li>
<p>用js写一个绑定事件检测窗口大小</p>
</li>
<li>
<p>什么是UUID？它有什么作用？用js写一个生成UUID的方法</p>
</li>
<li>
<p>用js实现一个加法的方法</p>
</li>
<li>
<p>用js实现动态改变根元素字体大小的方法</p>
</li>
<li>
<p>使用js获取鼠标坐标</p>
</li>
<li>
<p>写一个方法判断大括号{}是否闭合</p>
</li>
<li>
<p>从一个无序的整数数组中，找出最小和最大数之间缺失的数字，要求最小的时间复杂度</p>
</li>
<li>
<p>分别写一个方法实现基数排序、桶排序、归并排序、插入排序、交换排序、选择排序，并解释下时间复杂度和空间复杂度</p>
</li>
<li>
<p>手写数组的map、filter、find方法</p>
</li>
<li>
<p>写一个洗扑克牌的方法</p>
</li>
<li>
<p>用js实现小写金额转大写的方法</p>
</li>
<li>
<p>写一个方法，将字符串中的单词倒转后输出，如：<code>my love</code> -> <code>ym evol</code></p>
</li>
<li>
<p>如何实现一个全屏的功能？</p>
</li>
<li>
<p>如何实现文件拖动上传？</p>
</li>
<li>
<p>写一个方法把多维数组降维</p>
</li>
<li>
<p>使用正则去掉html中标签与标签之间的空格</p>
</li>
<li>
<p>document.write和innerHTML有什么区别？</p>
</li>
<li>
<p>如何使用js来截图？怎样截可见区域和整个页面？</p>
</li>
<li>
<p>分别写出防抖和节流的两个函数，并描述它们分别有什么运用场景？</p>
</li>
<li>
<p>写一个把数字转成中文的方法，例如：101转成一百零一</p>
</li>
<li>
<p>用js写一个事件侦听器的方法</p>
</li>
<li>
<p>请用js编写一个红绿灯程序</p>
</li>
<li>
<p>写一个方法判断给定的字符串是否同态(isomorphic)</p>
</li>
<li>
<p>用js实现一个HashMap，不可以使用Object</p>
</li>
<li>
<p>用js实现typeof的功能</p>
</li>
<li>
<p>如何判断一个元素文本是否换行？</p>
</li>
<li>
<p>写个方法近似计算指定数组或对象占用内存的大小</p>
</li>
<li>
<p>写个方法判断数组对象中是否存在某个对象</p>
</li>
<li>
<p>使用js生成1-10000的数组</p>
</li>
<li>
<p>写一个方法获取指定数组中间的值（一个或者两个）</p>
</li>
<li>
<p>写一个方法把分钟转化为时分，例如：150->02:30</p>
</li>
<li>
<p>用js怎么实现图片马赛克效果？</p>
</li>
<li>
<p>实现一个ajax的队列请求</p>
</li>
<li>
<p>根据元素ID遍历树形结构，查找到所有父元素ID [代码]</p>
</li>
<li>
<p>请写一个性能最好的深度克隆对象的方法</p>
</li>
<li>
<p>写一个方法，当给定数字位数不足8位时，则在左边补充0以补足8位数的方法</p>
</li>
<li>
<p>对<code>a == ('1'||'2'||'3') ? false : true</code>写法进行改进，写出你优化后的方法</p>
</li>
<li>
<p>用js写一个方法检测浏览器是否支持css3的属性</p>
</li>
<li>
<p>写一个方法获取图片的方向</p>
</li>
<li>
<p>写一个方法获取图片的exif信息</p>
</li>
<li>
<p>写一个方法实现自定义右键菜单的功能</p>
</li>
<li>
<p>写一个格式化时间的方法</p>
</li>
<li>
<p>写一个获取非行间样式的方法</p>
</li>
<li>
<p>写一个获取页面中所有checkbox的方法</p>
</li>
<li>
<p>使用js实现一个循环队列</p>
</li>
<li>
<p>手写一个trim()的方法</p>
</li>
<li>
<p>写一个方法粘贴复制的图片并显示出来</p>
</li>
<li>
<p>实现一个函数记忆的方法</p>
</li>
<li>
<p>写一个方法遍历指定对象的所有属性</p>
</li>
<li>
<p>写一个方法，实时验证input输入的值是否满足金额如：3.56(最多只有两位小数且只能数字和小数点)的格式，其它特殊字符禁止输入</p>
</li>
<li>
<p>写一个方法把科学计数法转换成数字或者字符串</p>
</li>
<li>
<p>写个方法获取屏幕的DPI</p>
</li>
<li>
<p>使用js实现一个图片剪裁的功能</p>
</li>
<li>
<p>不用 + eval Function 实现加法</p>
</li>
<li>
<p>实现多张图片合成一张的效果</p>
</li>
<li>
<p>请使用 js 实现一个双向链表</p>
</li>
<li>
<p>写一个方法判断数组内元素是否全部相同</p>
</li>
<li>
<p>写一个方法实现promise失败后自动重试</p>
</li>
<li>
<p>获取浏览器当前页面的滚动条高度的兼容写法</p>
</li>
<li>
<p>请使用js实现vue的diff算法</p>
</li>
<li>
<p>写一个单向链数据结构的 js 实现并标注复杂度</p>
</li>
<li>
<p>用函数实现扑克牌排序</p>
</li>
<li>
<p>模拟 localStorage 时如何实现过期时间功能</p>
</li>
<li>
<p>请使用js实现一个秒表计时器的程序</p>
</li>
<li>
<p>给你一个页面，找出该页面使用最多的前三个标签以及他们的数量</p>
</li>
<li>
<p>如何使用js实现撤消和重做并写出伪代码</p>
</li>
<li>
<p>使用js动态创建一个有不少于10万个节点的树</p>
</li>
<li>
<p>使用js写一个图片压缩的小工具</p>
</li>
<li>
<p>写一个方法监听DOM宽高的变化</p>
</li>
<li>
<p>使用canvas画一个小球自由落体的效果</p>
</li>
<li>
<p>使用js写一个方法生成0000-9999一万个数字（4位数）</p>
</li>
<li>
<p>随机生成一个指定长度的验证码</p>
</li>
<li>
<p>使用js实现变态跳台阶</p>
</li>
<li>
<p>写一个方法，当复制页面中的内容时，同时把版权信息也复制上</p>
</li>
<li>
<p>写一个方法对对象中的key进行排序</p>
</li>
<li>
<p>使用js写方法把0123456789生成每组4个数，共有多少个组合和多少个排列？</p>
</li>
<li>
<p>使用js写一个多文件上传的组件</p>
</li>
<li>
<p>使用js写一个批量上传文件的组件</p>
</li>
<li>
<p>写一个方法，计算有N个数（可重复），分别放到M个位置中，有多少种排列？</p>
</li>
<li>
<p>写一个方法，实现树的路径查询[代码]</p>
</li>
<li>
<p>给定特定的字符串，写个方法判断是否以元字母结尾</p>
</li>
<li>
<p>输入一个四则混合运算的表达式，请写个方法求它的值</p>
</li>
<li>
<p>写一个js方法，输入指定类型的选择器(id，class，tagName)可以返回匹配的DOM节，要求兼容和性能</p>
</li>
<li>
<p>写一个代理console.log的方法</p>
</li>
<li>
<p>写个方法，实现对某个节点的拖拽</p>
</li>
<li>
<p>实现一个寄生式组合继承</p>
</li>
<li>
<p>写一个方法获取指定窗口的尺寸大小</p>
</li>
<li>
<p>写一个方法获取滚动条距离窗口顶部的距离</p>
</li>
<li>
<p>写个方法获取给定开始和结束时间的所有日期和月份</p>
</li>
<li>
<p>数组元素全倒排列并去重</p>
</li>
<li>
<p>写一个方法获取指定两个日期之间相隔的所有日期</p>
</li>
<li>
<p>写一个ASCII与Unicode码的互转的方法</p>
</li>
<li>
<p>使用js写一个方法将数字转换为float,并取N位小数</p>
</li>
<li>
<p>写一个方法将UTC时间和北京时间换算</p>
</li>
<li>
<p>计算从一个大数组中(如1万条数据)取出第一数据和最后一条数据的时间分别是多少？</p>
</li>
<li>
<p>写一个方法判断一组数字是连值</p>
</li>
<li>
<p>写一个方法，判断给定的几个数字是否相等，如[1,1,1,1]相等</p>
</li>
<li>
<p>使用js实现一个数组flat()的方法</p>
</li>
<li>
<p>使用js写个方法，把下列数组对象按多字段排序，name升序，age降序</p>
</li>
<li>
<p>使用js写个方法，使得数组的两个元素互换，要求高性能</p>
</li>
<li>
<p>使用js写一个方法，使得数组的某个元素置顶</p>
</li>
<li>
<p>使用原生js实现给定节点的父节点下所有子节点的元素</p>
</li>
<li>
<p>写一个方法代替eval</p>
</li>
<li>
<p>写一个方法求给定1485个元素中取33个元素的组合有多少种（大数据处理，小心CPU爆炸）</p>
</li>
<li>
<p>写一个方法检测指定的数组是否有重复的元素</p>
</li>
<li>
<p>写一个方法将字符串中的制表符全部替换为逗号</p>
</li>
<li>
<p>写一个方法，批量删除指定索引的数组元素</p>
</li>
<li>
<p>写一个方法将汉字转换成拼音首字母</p>
</li>
<li>
<p>使用递归实现指定最小值和最大值之间的所有整数求和</p>
</li>
<li>
<p>使用js写一个羽毛球16个队抽签随机队伍编号的方法</p>
</li>
<li>
<p>使用js实现一个并发限制的promise，并保证最多同时运行三个任务</p>
</li>
<li>
<p>写一个方法将虚拟Dom转化为真实DOM</p>
</li>
<li>
<p>写一个方法将origin转化为tree，要求支持无限级和性能</p>
</li>
<li>
<p>写一个方法记录函数运行的时间</p>
</li>
<li>
<p>写个方法获取浏览器的唯一标识</p>
</li>
<li>
<p>写一个方法js将数组对象中某个属性值相同的对象合并成一个新对象</p>
</li>
<li>
<p>使用js写一个方法操作css变量</p>
</li>
<li>
<p>写一个方法动态同步加载script文件</p>
</li>
<li>
<p>写一个方法，实现修改当前的URL链接但页面不跳转的功能</p>
</li>
<li>
<p>写一个方法监听指定cookie的变化</p>
</li>
<li>
<p>写一个方法实现指定开始的数字增加到指定的结束数字，步长默认为1</p>
</li>
<li>
<p>写一个方法将一个数组中的元素，从前到后依次两两组合，最后一个与第一个组合</p>
</li>
<li>
<p>写一个算法找到数组中两个元素相加等于指定数的所有组合</p>
</li>
<li>
<p>写个方法将base64的数据流装换为二进制流</p>
</li>
<li>
<p>实现一个批量请求函数 multiRequest(urls, maxNum)</p>
</li>
<li>
<p>写一个方法将ArrayBuffer转为字符串</p>
</li>
<li>
<p>使用JavaScript拖拽盒子跟着鼠标动的效果</p>
</li>
<li>
<p>写一个方法将一个html字符串变成JSON树的形式</p>
</li>
<li>
<p>写一个方法判断js的方法是内置的还是自定义的</p>
</li>
<li>
<p>写一个JS方法，判断元素是否在可视区域</p>
</li>
<li>
<p>写一个方法生成不重复的用户ID</p>
</li>
<li>
<p>写一个方法判断在一个一维数组里，有且只有一个数等于给定的值</p>
</li>
<li>
<p>如何判断链表是否有环？</p>
</li>
<li>
<p>写一个方法实现选中复制的功能</p>
</li>
<li>
<p>请实现一个Promise.race</p>
</li>
<li>
<p>请使用js实现一个无限累加的函数</p>
</li>
<li>
<p>请通过reduce函数实现一维数组的求和</p>
</li>
<li>
<p>请使用js写个方法解析emoji表情</p>
</li>
<li>
<p>写一个方法找到一维数组里，有且只有两个连续相等的所有元素</p>
</li>
<li>
<p>写一个方法，让数组里的元素上移一格/下移一格</p>
</li>
<li>
<p>写个方法找出页面中除了数字和英文字母外的所有特殊特号</p>
</li>
<li>
<p>写一个方法获取手机电池的信息，如：电量、充电状态等</p>
</li>
<li>
<p>写一个方法探测CPU占比情况?</p>
</li>
<li>
<p>写个方法，找出指定字符串中重复最多的字符及其长度</p>
</li>
<li>
<p>分别写出数组的交集、并集、差集、补集这四个方法</p>
</li>
<li>
<p>写个方法随机打乱一个数组</p>
</li>
<li>
<p>分别封装精确运算的加减乘除四个方法</p>
</li>
<li>
<p>用js写出死循环的方法有哪些？</p>
</li>
<li>
<p>请写一个sleep（暂停）函数</p>
</li>
<li>
<p>用js实现一个九九乘法口诀表</p>
</li>
<li>
<p>请编写一个对象obj满足 obj=='a' &amp;&amp; obj=='b' &amp;&amp; obj=='c'</p>
</li>
<li>
<p>写一个方法随机生成指定位数的字符串</p>
</li>
<li>
<p>写一个字符串重复的repeat函数</p>
</li>
<li>
<p>如何让(a==1 &amp;&amp; a==2 &amp;&amp; a==3)的值为true</p>
</li>
<li>
<p>写一个方法获取图片的原始宽高</p>
</li>
<li>
<p>请实现一个flattenDeep函数，把多维数组扁平化</p>
</li>
<li>
<p>写一个函数找出给定数组中的最大差值</p>
</li>
<li>
<p>写一个方法，使得sum(x)(y)和sum(x,y)返回的结果相同</p>
</li>
<li>
<p>写一个格式化金额的方法</p>
</li>
<li>
<p>写个还剩下多少天过年的倒计时</p>
</li>
<li>
<p>写一个使两个整数进行交换的方法（不能使用临时变量）</p>
</li>
<li>
<p>写一个深度克隆对象的方法</p>
</li>
<li>
<p>写出几种创建对象的方式</p>
</li>
<li>
<p>找到字符串中最长的单词，并返回它的长度</p>
</li>
<li>
<p>请手写instanceof</p>
</li>
<li>
<p>请手写一个幻灯片的效果</p>
</li>
<li>
<p>请用canvas写一个关于520浪漫表白的代码</p>
</li>
<li>
<p>请写出一个函数求出N的阶乘（即N!）</p>
</li>
<li>
<p>写一个获取数组的最大值、最小值的方法</p>
</li>
<li>
<p>写一个方法判断字符串是否为回文字符串</p>
</li>
<li>
<p>写一个方法把0和1互转（0置1，1置0）</p>
</li>
<li>
<p>手写call、bind方法</p>
</li>
<li>
<p>写一个判断设备来源的方法</p>
</li>
<li>
<p>如何快速让一个数组乱序，写出来</p>
</li>
<li>
<p>手动实现一个new方法</p>
</li>
<li>
<p>写一个方法验证是否为中文</p>
</li>
<li>
<p>写一个验证身份证号的方法</p>
</li>
<li>
<p>写一个获取当前url查询字符串中的参数的方法</p>
</li>
<li>
<p>写一个数组去重的方法（支持多维数组）</p>
</li>
<li>
<p>写一个判断数据类型的方法</p>
</li>
<li>
<p>写一个加密字符串的方法</p>
</li>
<li>
<p>统计某一字符或字符串在另一个字符串中出现的次数</p>
</li>
<li>
<p>写一个去除制表符和换行符的方法</p>
</li>
<li>
<p>写一个把字符串大小写切换的方法</p>
</li>
<li>
<p>写一个方法把下划线命名转成大驼峰命名</p>
</li>
<li>
<p>去除字符串中最后一个指定的字符</p>
</li>
<li>
<p>写一个方法去掉字符串中的空格</p>
</li>
<li>
<p>用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值</p>
</li>
</ul>
<h3>代码场景</h3>
<hr>
<ul>
<li>说下你对map方法的理解，并解释下面代码返回的结果</li>
</ul>
<pre><code class="language-js">const result = new Array(3).map((item) => {
  return item = {
    name: 'test'
  }
});
console.log(result);
</code></pre>
<ul>
<li>请解释以下题目会输出的结果（类型转换）</li>
</ul>
<pre><code class="language-js">var temp = [0];
if ([0]) {
  console.log(temp == true);
} else {
  console.log(&quot;测试&quot;);
}

</code></pre>
<ul>
<li>请解释下面题目输出的结果</li>
</ul>
<pre><code class="language-js">var val = &quot;test&quot;;
console.log(&quot;output is &quot; + (val === &quot;Test&quot;) ? &quot;123&quot; : &quot;456&quot;);

</code></pre>
<ul>
<li>以下方法调用call输出的结果是什么？请解释下？</li>
</ul>
<pre><code class="language-js">[].copyWithin.call({ length: 5, 3: 1 }, 0, 3)
</code></pre>
<ul>
<li>请解释下为什么下面第一种方式会报错而第二种不会？</li>
</ul>
<pre><code class="language-js">// 第一种：构造函数创建
var object=new Object();
object.a=1;
object.8=8; //Unexpected number

// 第二种：字面量创建
var object = {
  a: 1,
  8: 2
};

</code></pre>
<ul>
<li>给定下面伪代码，请说出程序运行多少秒后会输出“Hello World!”（不考虑其它干扰因素）？并解释下为什么？</li>
</ul>
<pre><code class="language-js">sleep(1秒) //运行1s

setTimout(function(){
    输出 &quot;Hello World!&quot;
}, 7秒)

sleep(3秒) //运行3s

</code></pre>
<ul>
<li>解释如下代码的输出结果，并改造代码使得按顺序输出i</li>
</ul>
<pre><code class="language-js">function test(){
	for(let i = 0; i < 8; i++){
		(
			function(j){
				setTimeout(function(){
					console.log(&quot;i=&quot;, i);
				}, Math.random() * 1000);
			}(i)
		)
	}
}

test();

</code></pre>
<ul>
<li>写一个方法计算N年时农场里有几只羊（见下文描述）？</li>
</ul>
<pre><code>农场买了一只小羊，这种羊在第一年是小羊，第二年的年底会生一只小羊，第三年不生小羊，第四年的年底还会再生下一只小羊，第五年就死掉了。
</code></pre>
<ul>
<li>用js写个算法算出筐里最少有多少个鸡蛋？</li>
</ul>
<pre><code>一筐鸡蛋：
1个1个拿，正好拿完；
2个2个拿，还剩1个；
3个3个拿，正好拿完；
4个4个拿，还剩1个；
5个5个拿，还差1个；
6个6个拿，还剩3个；
7个7个拿，正好拿完；
8个8个拿，还剩1个；
9个9个拿，正好拿完。

问筐里最少有多少鸡蛋？
</code></pre>
<ul>
<li>实现一个函数sum, 满足以下需求:</li>
</ul>
<pre><code class="language-js">sum() == 0
sum(1)(2)(3)() == 6
sum(3)(4)() == 7
sum(v1)(v2)...(vn)() == v1+v2+...+vn
</code></pre>
<ul>
<li>请说说以下两种原型的区别</li>
</ul>
<pre><code class="language-js">var A = function() {};
var b = new A();
A.prototype = {
	n: 0,
	m: 1
}
和以下方式的声明有什么区别，为什么？

var A = function() {};
var b = new A();
A.prototype.n = 0;
A.prototype.m = 1;

</code></pre>
<ul>
<li>下文Promise的执行顺序是怎样的？</li>
</ul>
<pre><code class="language-js">new Promise((resolve,reject)=>{
    console.log(&quot;1&quot;)
    resolve()
}).then(()=>{
    console.log(&quot;2&quot;)
    new Promise((resolve,reject)=>{
        console.log(&quot;3&quot;)
        resolve()
    }).then(()=>{
        console.log(&quot;4&quot;)
    }).then(()=>{
        console.log(&quot;5&quot;)
    }).then(()=>{
        console.log(&quot;6&quot;)
    }).then(()=>{
        console.log(&quot;7&quot;)
    })
}).then(()=>{
    console.log(&quot;8&quot;)
    Promise.resolve().then(()=>{
        console.log(9)
    }).then(()=>{
        console.log(10)
    })
}).then(()=>{
    console.log(&quot;11&quot;)
}).then(()=>{
    console.log(&quot;12&quot;)
})
</code></pre>
<ul>
<li>判断instanceof的结果并解释原因 [代码]</li>
</ul>
<pre><code class="language-js">function test(){ 
    return test; 
} 
new test() instanceof test;
</code></pre>
<ul>
<li>看下面代码，判断a和b的类型是否为true？为什么？什么是基本包装类型?</li>
</ul>
<pre><code class="language-js">var a=1;
var b = new Number(1);
typeof(a)===typeof(b);
</code></pre>
<ul>
<li>请解释下如下js代码对数组排序后的输出结果</li>
</ul>
<pre><code class="language-js">var result = [55, 22, 168]; 
console.log(result.sort());

</code></pre>
<ul>
<li>用不同的方法改装下面的代码，使它的结果输出为0-4[代码]</li>
</ul>
<pre><code class="language-js">for (var i = 0; i < 5; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000)
}
</code></pre>
<ul>
<li>根据下面代码：说出执行结果，并解释为何是会是这样的结果？</li>
</ul>
<pre><code class="language-js">var str = 'abc';
console.log(str[1]);

var num = 123;
console.log(num[1]);
</code></pre>
<ul>
<li>这两种展开运算符的方式有什么区别呢？</li>
</ul>
<pre><code class="language-js">const o1 = { ...obj, o3 }

const o2 = { ...obj, o3: { ...o3 } }

</code></pre>
<ul>
<li>阅读下面关于setTimeout和Promise的代码，判断结果会输出什么？为什么？</li>
</ul>
<pre><code class="language-js">setTimeout(function () {
    console.log(1);
})
Promise.resolve(function () {
    console.log(2)
})
new Promise(function (resolve) {
    console.log(3);
    resolve();
}).then(function () {
    console.log(4)
})
console.log(5)
</code></pre>
<h3>冷门</h3>
<hr>
<ul>
<li>简要描述下什么是回调函数并写一个例子出来</li>
<li>举例说明你对TypedArray的理解，它的运用场景有哪些？</li>
<li>什么时候在JS中使用Float32Array而不是Array？</li>
<li>Float32Array有几种构造方式？</li>
</ul>
`}}></div>
  }
  