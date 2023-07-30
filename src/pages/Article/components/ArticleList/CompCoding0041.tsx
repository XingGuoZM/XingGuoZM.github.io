
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h1>编程题目汇总</h1>
<pre><code>css实现一个扇形
css实现一个三角形
css实现一个水波纹效果
动手实现一个左右固定100px，中间自适应的三列布局？(至少三种)
屏幕占满和未占满的情况下，使 footer 固定在底部，尽量多种方法
Css 实现多列等高布局，要求元素实际占用的高度以多列中较高的为准

手动实现一个Promisify函数
手动实现一个防抖/节流函数
实现一个函数柯里化
手动实现Promise、Promise.then、Promise.all、
用 typescript 实现函数 caller，接收一个函数作为第一个参数，其返回参数类型由接收的函数参数决定
请给出识别 Email 的正则表达式
设计一个函数，奇数次执行的时候打印 1，偶数次执行的时候打印 2
给定起止日期，返回中间的所有月份
输入两个字符串，输出他们中间的月份
简单封装一个异步fecth，使用async await的方式来使用
请写一个函数，输出出多级嵌套结构的Object的所有key值
动手实现一个repeat方法
versions 是一个项目的版本号列表，因多人维护，不规则，动手实现一个版本号处理函数
实现一个函数将中文数字转成数字
简单封装一个异步 fecth，使用 async await 的方式来使用
实现一个函数将中文数字转成数字
如何把真实 dom 转变为虚拟 dom，代码实现一下
请实现一个 cacheRequest 方法，保证发出多次同一个 ajax 请求时都能拿到数据，而实际上只发出一次请求
实现 bind 方法，不能使用 call、apply、bind
手写实现 sleep 函数
用原生 js 实现自定义事件
如何识别出字符串中的回车并进行换行？
输入一个日期 返回几秒前、几小时前、几天前、几月前
将 153812.7 转化为 153,812.7
reduce 函数的功能，如何实现的，动手实现一下
new 的实现原理，动手实现一个 new
请手写实现一个拖拽
请手动实现一个浅拷贝
介绍 instanceof 原理，并手动实现
请实现一个 JSON.stringfy
请实现一个 JSON.parse
用 Promise 封装一个 ajax
请实现$on,$emit
分别对以下数组进行去重，1:[1,'1',2,'2',3]，2:[1,[1,2,3['1','2','3'],4],5,6]
编写一个 Person 类，并创建两个不同的 Person 对象
说一下 let、const 的实现，动手实现一下
写一个函数打乱一个数组，传入一个数组，返回一个打乱的新数组
手写 EventEmitter 实现
请实现鼠标点击页面中的任意标签，alert 该标签的名称(注意兼容性)
完成一个表达式，验证用户输入是否是电子邮箱
原生实现 ES5 的 Object.create()方法
实现格式化输出，比如输入 999999999，输出 999,999,999
使用 JavaScript 实现 cookie 的设置、读取、删除
请编写一个 JavaScript 函数 parseQueryString,它的用途是把 URL 参数解析为一个对象，url=&quot;http://iauto360.cn/index.php?key0=0&amp;key1=1&amp;key2=2&quot;
给 JavaScript 的 String 原生对象添加一个名为 trim 的原型方法，用于截取字符串前后的空白字符
用 html、css、js 模拟实现一个下拉框，使得下拉框在各个浏览器下的样式和行为完全一致，说出你的设计方案，并且重点说明功能设计时要考虑的因素。
请用 JavaScript 代码实现事件代理
在一个 ul 里有 10 个 li,实现点击对应的 li,输出对应的下标
</code></pre>
<h3>请实现如下的函数</h3>
<pre><code class="language-js">/*
	可以批量请求数据，所有的 URL 地址在 urls 参数中，同时可以通过 max 参数控制请求的并发度，当所有请求结束之后，需要执行 callback 回调函数。发请求的函数可以直接使用 fetch 即可
*/
</code></pre>
<h3>按要求实现一个 sum 函数</h3>
<pre><code class="language-js">const a = sum(); // => a === 0
const b = sum(); // => b === 2
const c = sum(4)(5); // c === 9
const k = sum(n1)...(nk) // k === n1 + n2 + ... + nk
</code></pre>
<h3>已知函数 A，要求构造⼀个函数 B 继承 A（<a href="https://github.com/lgwebdream/FE-Interview/issues/333">答案&amp;解析</a>）</h3>
<pre><code class="language-js">function A(name) {
  this.name = name;
}
A.prototype.getName = function () {
  console.log(this.name);
};
</code></pre>
<h3>要求⽤不同⽅式对 A 进⾏改造实现 A.name 发⽣变化时⽴即执⾏ A.getName（<a href="https://github.com/lgwebdream/FE-Interview/issues/329">答案&amp;解析</a>）</h3>
<pre><code class="language-js">/*
	已知对象A = {name: 'sfd', getName: function(){console.log(this.name)}},
	现要求⽤不同⽅式对A进⾏改造实现A.name发⽣变化时⽴即执⾏A.getName
*/
</code></pre>
<h3>修改以下代码，使得最后⼀⾏代码能够输出数字 0-9（最好能给多种答案）（<a href="https://github.com/lgwebdream/FE-Interview/issues/328">答案&amp;解析</a>）</h3>
<pre><code class="language-js">var arrys = [];
for (var i = 0; i < 10; i++) {
  arrys.push(function () {
    return i;
  });
}
arrys.forEach(function (fn) {
  console.log(fn());
}); //本⾏不能修改
</code></pre>
<h3>实现函数接受任意二叉树，求二叉树所有根到叶子路径组成的数字之和</h3>
<pre><code class="language-js">class TreeNode{
  value:number
  left?:TreeNode
  right?:TreeNode
}
function getPathSum(root){
  // your code
}
// 例子，一层二叉树如下定义，路径包括1 —> 2 ,1 -> 3
const node = new TreeNode();
node.value = 1;
node.left = new TreeNode();
node.left.value = 2;
node.right = new TreeNode();
node.right.value = 3;
getPathSum(node); // return 7 = (1+2) + (1+3)
</code></pre>
<h3>按要求实现代码</h3>
<pre><code class="language-js">// 给两个数组 [A1,A2,B1,B2,C1,C2,D1,D2] [A,B,C,D]
// 输出 [A1,A2,A,B1,B2,B,C1,C2,C,D1,D2,D]
</code></pre>
<h3>请写一个函数，输出出多级嵌套结构的 Object 的所有 key 值</h3>
<pre><code class="language-js">var obj = {
  a: &quot;12&quot;,
  b: &quot;23&quot;,
  first: {
    c: &quot;34&quot;,
    d: &quot;45&quot;,
    second: { 3: &quot;56&quot;, f: &quot;67&quot;, three: { g: &quot;78&quot;, h: &quot;89&quot;, i: &quot;90&quot; } },
  },
};
// => [a,b,c,d,e,f,g,h,i]
</code></pre>
<h3>动手实现一个 repeat 方法</h3>
<pre><code class="language-js">function repeat(func, times, wait) {
  // TODO
}
const repeatFunc = repeat(alert, 4, 3000);
// 调用这个 repeatFunc (&quot;hellworld&quot;)，会alert4次 helloworld, 每次间隔3秒
</code></pre>
<h3>versions 是一个项目的版本号列表，因多人维护，不规则，动手实现一个版本号处理函数</h3>
<pre><code class="language-js">var versions = [&quot;1.45.0&quot;, &quot;1.5&quot;, &quot;6&quot;, &quot;3.3.3.3.3.3.3&quot;];
// 要求从小到大排序，注意'1.45'比'1.5'大
function sortVersion(versions) {
  // TODO
}
// => ['1.5','1.45.0','3.3.3.3.3.3','6']
</code></pre>
<h3>实现以下代码</h3>
<pre><code class="language-js">function add() {
  // your code
}
function one() {
  // your code
}
function two() {
  // your code
}
console.log(add(one(two()))); //3
console.log(add(two(one()))); //3
</code></pre>
<h3>实现一个 setter 方法</h3>
<pre><code class="language-js">let setter = function (conten, key, value) {
  // your code
};
let n = {
  a: {
    b: {
      c: { d: 1 },
      bx: { y: 1 },
    },
    ax: { y: 1 },
  },
};
// 修改值
setter(n, &quot;a.b.c.d&quot;, 3);
console.log(n.a.b.c.d); //3
setter(n, &quot;a.b.bx&quot;, 1);
console.log(n.b.bx); //1
</code></pre>
<h3>实现一个功能，发送请求 5s 时间后，如果没有数据返回，中断请求,提示错误</h3>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/375">答案&amp;解析</a></p>
<p><br/></p>
<h3>按照调用实例，实现下面的 Person 方法</h3>
<pre><code class="language-js">Person(&quot;Li&quot;);
// 输出： Hi! This is Li!

Person(&quot;Dan&quot;).sleep(10).eat(&quot;dinner&quot;);
// 输出：
// Hi! This is Dan!
// 等待10秒..
// Wake up after 10
// Eat dinner~

Person(&quot;Jerry&quot;).eat(&quot;dinner&quot;).eat(&quot;supper&quot;);
// 输出：
// Hi This is Jerry!
// Eat dinner~
// Eat supper~

Person(&quot;Smith&quot;).sleepFirst(5).eat(&quot;supper&quot;);
// 输出：
// 等待5秒
// Wake up after 5
// Hi This is Smith!
// Eat supper
</code></pre>
<h3>按要求完成代码</h3>
<pre><code class="language-js">const timeout = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
const ajax1 = () =>
  timeout(2000).then(() => {
    console.log(&quot;1&quot;);
    return 1;
  });
const ajax2 = () =>
  timeout(1000).then(() => {
    console.log(&quot;2&quot;);
    return 2;
  });
const ajax3 = () =>
  timeout(2000).then(() => {
    console.log(&quot;3&quot;);
    return 3;
  });
const mergePromise = (ajaxArray) => {
  // 1,2,3 done [1,2,3] 此处写代码 请写出ES6、ES3 2中解法
};
mergePromise([ajax1, ajax2, ajax3]).then((data) => {
  console.log(&quot;done&quot;);
  console.log(data); // data 为[1,2,3]
});
// 执行结果为：1 2 3 done [1,2,3]
</code></pre>
<h3>请修改代码能跳出死循环</h3>
<pre><code class="language-js">while (1) {
  switch (&quot;yideng&quot;) {
    case &quot;yideng&quot;:
    //禁止直接写一句break
  }
}
</code></pre>
<h3>修改代码不造成死循环</h3>
<pre><code class="language-js">while(1){
  console.log(Math.random());
}
</code></pre>
<h3>实现一个打点计时器</h3>
<pre><code class="language-js">/* 
  1.从start至end,每隔100毫秒console.log一个数字，每次数字增幅为1
  2.返回的对象中需要包含一个cancel方法，用于停止定时操作
  3.第一个数字需要立即输出
*/
</code></pre>
<h3>按要求完成题目</h3>
<pre><code class="language-js">/* 
  a)在不使用vue、react的前提下写代码解决一下问题
    一个List页面上，含有1000个条目的待办列表，现其中100项在同一时间达到了过期时间，需要在对应项的text-node里添加“已过期”文字。需要尽可能减少dom重绘次数以提升性能。
  b)尝试使用vue或react解决上述问题
*/
</code></pre>
<h3>填充代码实现 template 方法</h3>
<pre><code class="language-js">var str = &quot;您好，<%=name%>。欢迎来到<%=location%>&quot;;
function template(str) {
  // your code
}
var compiled = template(srt);
// compiled的输出值为：“您好，张三。欢迎来到网易游戏”
compiled({ name: &quot;张三&quot;, location: &quot;网易游戏&quot; });
</code></pre>
<h3>有这样一个函数 A,要求在不改变原有函数 A 功能以及调用方式的情况下，使得每次调用该函数都能在控制台打印出“HelloWorld”</h3>
<pre><code class="language-js">function A() {
  console.log(&quot;调用了函数A&quot;);
}
</code></pre>
`}}></div>
  }
  