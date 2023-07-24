
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


动手实现一个左右固定100px，中间自适应的三列布局？(至少三种)
屏幕占满和未占满的情况下，使 footer 固定在底部，尽量多种方法
Css 实现多列等高布局，要求元素实际占用的高度以多列中较高的为准
</code></pre>
<ul>
<li>请实现如下的函数</li>
</ul>
<pre><code class="language-js">/*
	可以批量请求数据，所有的 URL 地址在 urls 参数中，同时可以通过 max 参数控制请求的并发度，当所有请求结束之后，需要执行 callback 回调函数。发请求的函数可以直接使用 fetch 即可
*/
</code></pre>
<ul>
<li>按要求实现一个 sum 函数</li>
</ul>
<pre><code class="language-js">const a = sum(); // => a === 0
const b = sum(); // => b === 2
const c = sum(4)(5); // c === 9
const k = sum(n1)...(nk) // k === n1 + n2 + ... + nk
</code></pre>
<ul>
<li>已知函数 A，要求构造⼀个函数 B 继承 A（<a href="https://github.com/lgwebdream/FE-Interview/issues/333">答案&amp;解析</a>）</li>
</ul>
<pre><code class="language-js">function A(name) {
  this.name = name;
}
A.prototype.getName = function () {
  console.log(this.name);
};
</code></pre>
<ul>
<li>要求⽤不同⽅式对 A 进⾏改造实现 A.name 发⽣变化时⽴即执⾏ A.getName（<a href="https://github.com/lgwebdream/FE-Interview/issues/329">答案&amp;解析</a>）</li>
</ul>
<pre><code class="language-js">/*
	已知对象A = {name: 'sfd', getName: function(){console.log(this.name)}},
	现要求⽤不同⽅式对A进⾏改造实现A.name发⽣变化时⽴即执⾏A.getName
*/
</code></pre>
<ul>
<li>修改以下代码，使得最后⼀⾏代码能够输出数字 0-9（最好能给多种答案）（<a href="https://github.com/lgwebdream/FE-Interview/issues/328">答案&amp;解析</a>）</li>
</ul>
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
<ul>
<li></li>
<li>实现函数接受任意二叉树，求二叉树所有根到叶子路径组成的数字之和</li>
</ul>
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
<ul>
<li>
<p><a href="#promise-%E9%93%BE%E5%BC%8F%E8%B0%83%E7%94%A8%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0">Promise 链式调用如何实现</a></p>
</li>
<li>
<p><a href="#%E5%A6%82%E4%BD%95%E6%8A%8A%E7%9C%9F%E5%AE%9E-dom-%E8%BD%AC%E5%8F%98%E4%B8%BA%E8%99%9A%E6%8B%9F-dom%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%8B">如何把真实 dom 转变为虚拟 dom，代码实现一下</a></p>
</li>
<li>
<p><a href="#%E5%AE%9E%E7%8E%B0%E4%BB%A5%E4%B8%8B%E4%BB%A3%E7%A0%81">实现以下代码</a></p>
</li>
<li>
<p><a href="#%E8%AF%B7%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA-cacherequest-%E6%96%B9%E6%B3%95%E4%BF%9D%E8%AF%81%E5%8F%91%E5%87%BA%E5%A4%9A%E6%AC%A1%E5%90%8C%E4%B8%80%E4%B8%AA-ajax-%E8%AF%B7%E6%B1%82%E6%97%B6%E9%83%BD%E8%83%BD%E6%8B%BF%E5%88%B0%E6%95%B0%E6%8D%AE%E8%80%8C%E5%AE%9E%E9%99%85%E4%B8%8A%E5%8F%AA%E5%8F%91%E5%87%BA%E4%B8%80%E6%AC%A1%E8%AF%B7%E6%B1%82">请实现一个 cacheRequest 方法，保证发出多次同一个 ajax 请求时都能拿到数据，而实际上只发出一次请求</a></p>
</li>
<li>
<p><a href="#%E7%94%A8-promise-%E5%B0%81%E8%A3%85%E4%B8%80%E4%B8%AA-ajax">用 Promise 封装一个 ajax</a></p>
</li>
<li>
<p><a href="#%E8%AF%B7%E5%AE%9E%E7%8E%B0onemit">请实现$on,$emit</a></p>
</li>
<li>
<p><a href="#%E5%AE%9E%E7%8E%B0-bind-%E6%96%B9%E6%B3%95%E4%B8%8D%E8%83%BD%E4%BD%BF%E7%94%A8-callapplybind">实现 bind 方法，不能使用 call、apply、bind</a></p>
</li>
<li>
<p><a href="#%E6%89%8B%E5%86%99%E5%AE%9E%E7%8E%B0-sleep-%E5%87%BD%E6%95%B0">手写实现 sleep 函数</a></p>
</li>
<li>
<p><a href="#%E7%94%A8%E5%8E%9F%E7%94%9F-js-%E5%AE%9E%E7%8E%B0%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6">用原生 js 实现自定义事件</a></p>
</li>
<li>
<p><a href="#%E5%A6%82%E4%BD%95%E8%AF%86%E5%88%AB%E5%87%BA%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84%E5%9B%9E%E8%BD%A6%E5%B9%B6%E8%BF%9B%E8%A1%8C%E6%8D%A2%E8%A1%8C%EF%BC%9F">如何识别出字符串中的回车并进行换行？</a></p>
</li>
<li>
<p><a href="#%E8%BE%93%E5%85%A5%E4%B8%80%E4%B8%AA%E6%97%A5%E6%9C%9F-%E8%BF%94%E5%9B%9E%E5%87%A0%E7%A7%92%E5%89%8D%E5%87%A0%E5%B0%8F%E6%97%B6%E5%89%8D%E5%87%A0%E5%A4%A9%E5%89%8D%E5%87%A0%E6%9C%88%E5%89%8D">输入一个日期 返回几秒前、几小时前、几天前、几月前</a></p>
</li>
<li>
<p><a href="#%E5%B0%86-1538127-%E8%BD%AC%E5%8C%96%E4%B8%BA-1538127">将 153812.7 转化为 153,812.7</a></p>
</li>
<li>
<p><a href="#%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA-setter-%E6%96%B9%E6%B3%95">实现一个 setter 方法</a></p>
</li>
<li>
<p><a href="#%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E5%8A%9F%E8%83%BD%E5%8F%91%E9%80%81%E8%AF%B7%E6%B1%82-5s-%E6%97%B6%E9%97%B4%E5%90%8E%E5%A6%82%E6%9E%9C%E6%B2%A1%E6%9C%89%E6%95%B0%E6%8D%AE%E8%BF%94%E5%9B%9E%E4%B8%AD%E6%96%AD%E8%AF%B7%E6%B1%82%E6%8F%90%E7%A4%BA%E9%94%99%E8%AF%AF">实现一个功能，发送请求 5s 时间后，如果没有数据返回，中断请求,提示错误</a></p>
</li>
<li>
<p><a href="#reduce-%E5%87%BD%E6%95%B0%E7%9A%84%E5%8A%9F%E8%83%BD%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E7%9A%84%E5%8A%A8%E6%89%8B%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%8B">reduce 函数的功能，如何实现的，动手实现一下</a></p>
</li>
<li>
<p><a href="#new-%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86%E5%8A%A8%E6%89%8B%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA-new">new 的实现原理，动手实现一个 new</a></p>
</li>
<li>
<p><a href="#promise-%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0-then-%E5%A4%84%E7%90%86%E5%8A%A8%E6%89%8B%E5%AE%9E%E7%8E%B0-then">promise 如何实现 then 处理，动手实现 then</a></p>
</li>
<li>
<p><a href="#%E6%8C%89%E7%85%A7%E8%B0%83%E7%94%A8%E5%AE%9E%E4%BE%8B%E5%AE%9E%E7%8E%B0%E4%B8%8B%E9%9D%A2%E7%9A%84-person-%E6%96%B9%E6%B3%95">按照调用实例，实现下面的 Person 方法</a></p>
</li>
<li>
<p><a href="#%E6%8C%89%E8%A6%81%E6%B1%82%E5%AE%8C%E6%88%90%E4%BB%A3%E7%A0%81">按要求完成代码</a></p>
</li>
<li>
<p><a href="#%E8%AF%B7%E4%BF%AE%E6%94%B9%E4%BB%A3%E7%A0%81%E8%83%BD%E8%B7%B3%E5%87%BA%E6%AD%BB%E5%BE%AA%E7%8E%AF">请修改代码能跳出死循环</a></p>
</li>
<li>
<p><a href="#%E8%AF%B7%E6%89%8B%E5%86%99%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E6%8B%96%E6%8B%BD">请手写实现一个拖拽</a></p>
</li>
<li>
<p><a href="#%E8%AF%B7%E6%89%8B%E5%8A%A8%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E6%B5%85%E6%8B%B7%E8%B4%9D">请手动实现一个浅拷贝</a></p>
</li>
<li>
<p><a href="#%E4%BB%8B%E7%BB%8D-instanceof-%E5%8E%9F%E7%90%86%E5%B9%B6%E6%89%8B%E5%8A%A8%E5%AE%9E%E7%8E%B0">介绍 instanceof 原理，并手动实现</a></p>
</li>
<li>
<p><a href="#%E8%AF%B7%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA-jsonstringfy">请实现一个 JSON.stringfy</a></p>
</li>
<li>
<p><a href="#%E8%AF%B7%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA-jsonparse">请实现一个 JSON.parse</a></p>
</li>
<li>
<p><a href="#%E7%94%A8-htmlcssjs-%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E4%B8%8B%E6%8B%89%E6%A1%86%E4%BD%BF%E5%BE%97%E4%B8%8B%E6%8B%89%E6%A1%86%E5%9C%A8%E5%90%84%E4%B8%AA%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%8B%E7%9A%84%E6%A0%B7%E5%BC%8F%E5%92%8C%E8%A1%8C%E4%B8%BA%E5%AE%8C%E5%85%A8%E4%B8%80%E8%87%B4%E8%AF%B4%E5%87%BA%E4%BD%A0%E7%9A%84%E8%AE%BE%E8%AE%A1%E6%96%B9%E6%A1%88%E5%B9%B6%E4%B8%94%E9%87%8D%E7%82%B9%E8%AF%B4%E6%98%8E%E5%8A%9F%E8%83%BD%E8%AE%BE%E8%AE%A1%E6%97%B6%E8%A6%81%E8%80%83%E8%99%91%E7%9A%84%E5%9B%A0%E7%B4%A0">用 html、css、js 模拟实现一个下拉框，使得下拉框在各个浏览器下的样式和行为完全一致，说出你的设计方案，并且重点说明功能设计时要考虑的因素。</a></p>
</li>
<li>
<p><a href="#%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E6%89%93%E7%82%B9%E8%AE%A1%E6%97%B6%E5%99%A8">实现一个打点计时器</a></p>
</li>
<li>
<p><a href="#%E5%9C%A8%E4%B8%80%E4%B8%AA-ul-%E9%87%8C%E6%9C%89-10-%E4%B8%AA-li%E5%AE%9E%E7%8E%B0%E7%82%B9%E5%87%BB%E5%AF%B9%E5%BA%94%E7%9A%84-li%E8%BE%93%E5%87%BA%E5%AF%B9%E5%BA%94%E7%9A%84%E4%B8%8B%E6%A0%87">在一个 ul 里有 10 个 li,实现点击对应的 li,输出对应的下标</a></p>
</li>
<li>
<p><a href="#%E5%88%86%E5%88%AB%E5%AF%B9%E4%BB%A5%E4%B8%8B%E6%95%B0%E7%BB%84%E8%BF%9B%E8%A1%8C%E5%8E%BB%E9%87%8D11122321123123456">分别对以下数组进行去重，1:[1,'1',2,'2',3]，2:[1,[1,2,3['1','2','3'],4],5,6]</a></p>
</li>
<li>
<p><a href="#%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA-person-%E7%B1%BB%E5%B9%B6%E5%88%9B%E5%BB%BA%E4%B8%A4%E4%B8%AA%E4%B8%8D%E5%90%8C%E7%9A%84-person-%E5%AF%B9%E8%B1%A1">编写一个 Person 类，并创建两个不同的 Person 对象</a></p>
</li>
<li>
<p><a href="#%E8%AF%B4%E4%B8%80%E4%B8%8B-letconst-%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8A%A8%E6%89%8B%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%8B">说一下 let、const 的实现，动手实现一下</a></p>
</li>
<li>
<p><a href="#%E5%86%99%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E6%89%93%E4%B9%B1%E4%B8%80%E4%B8%AA%E6%95%B0%E7%BB%84%E4%BC%A0%E5%85%A5%E4%B8%80%E4%B8%AA%E6%95%B0%E7%BB%84%E8%BF%94%E5%9B%9E%E4%B8%80%E4%B8%AA%E6%89%93%E4%B9%B1%E7%9A%84%E6%96%B0%E6%95%B0%E7%BB%84">写一个函数打乱一个数组，传入一个数组，返回一个打乱的新数组</a></p>
</li>
<li>
<p><a href="#%E6%89%8B%E5%86%99-eventemitter-%E5%AE%9E%E7%8E%B0">手写 EventEmitter 实现</a></p>
</li>
<li>
<p><a href="#%E8%AF%B7%E5%AE%9E%E7%8E%B0%E9%BC%A0%E6%A0%87%E7%82%B9%E5%87%BB%E9%A1%B5%E9%9D%A2%E4%B8%AD%E7%9A%84%E4%BB%BB%E6%84%8F%E6%A0%87%E7%AD%BEalert-%E8%AF%A5%E6%A0%87%E7%AD%BE%E7%9A%84%E5%90%8D%E7%A7%B0%E6%B3%A8%E6%84%8F%E5%85%BC%E5%AE%B9%E6%80%A7">请实现鼠标点击页面中的任意标签，alert 该标签的名称(注意兼容性)</a></p>
</li>
<li>
<p><a href="#%E5%AE%8C%E6%88%90%E4%B8%80%E4%B8%AA%E8%A1%A8%E8%BE%BE%E5%BC%8F%E9%AA%8C%E8%AF%81%E7%94%A8%E6%88%B7%E8%BE%93%E5%85%A5%E6%98%AF%E5%90%A6%E6%98%AF%E7%94%B5%E5%AD%90%E9%82%AE%E7%AE%B1">完成一个表达式，验证用户输入是否是电子邮箱</a></p>
</li>
<li>
<p><a href="#%E5%8E%9F%E7%94%9F%E5%AE%9E%E7%8E%B0-es5-%E7%9A%84-objectcreate%E6%96%B9%E6%B3%95">原生实现 ES5 的 Object.create()方法</a></p>
</li>
<li>
<p><a href="#%E6%8C%89%E8%A6%81%E6%B1%82%E5%AE%8C%E6%88%90%E9%A2%98%E7%9B%AE">按要求完成题目</a></p>
</li>
<li>
<p><a href="#%E5%A1%AB%E5%85%85%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0-template-%E6%96%B9%E6%B3%95">填充代码实现 template 方法</a></p>
</li>
<li>
<p><a href="#%E8%AF%B7%E7%94%A8-javascript-%E4%BB%A3%E7%A0%81%E5%AE%9E%E7%8E%B0%E4%BA%8B%E4%BB%B6%E4%BB%A3%E7%90%86">请用 JavaScript 代码实现事件代理</a></p>
</li>
<li>
<p><a href="#%E5%AE%9E%E7%8E%B0%E6%A0%BC%E5%BC%8F%E5%8C%96%E8%BE%93%E5%87%BA%E6%AF%94%E5%A6%82%E8%BE%93%E5%85%A5-999999999%E8%BE%93%E5%87%BA-999999999">实现格式化输出，比如输入 999999999，输出 999,999,999</a></p>
</li>
<li>
<p><a href="#%E4%BD%BF%E7%94%A8-javascript-%E5%AE%9E%E7%8E%B0-cookie-%E7%9A%84%E8%AE%BE%E7%BD%AE%E8%AF%BB%E5%8F%96%E5%88%A0%E9%99%A4">使用 JavaScript 实现 cookie 的设置、读取、删除</a></p>
</li>
<li>
<p><a href="#%E8%AF%B7%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA-javascript-%E5%87%BD%E6%95%B0-parsequerystring%E5%AE%83%E7%9A%84%E7%94%A8%E9%80%94%E6%98%AF%E6%8A%8A-url-%E5%8F%82%E6%95%B0%E8%A7%A3%E6%9E%90%E4%B8%BA%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1urlhttpiauto360cnindexphpkey00key11key22">请编写一个 JavaScript 函数 parseQueryString,它的用途是把 URL 参数解析为一个对象，url=&quot;<a href=&quot;http://iauto360.cn/index.php?key0=0&amp;key1=1&amp;key2=2&quot; rel=&quot;nofollow&quot;>http://iauto360.cn/index.php?key0=0&amp;key1=1&amp;key2=2</a>&quot;</a></p>
</li>
<li>
<p><a href="#%E7%BB%99-javascript-%E7%9A%84-string-%E5%8E%9F%E7%94%9F%E5%AF%B9%E8%B1%A1%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%E5%90%8D%E4%B8%BA-trim-%E7%9A%84%E5%8E%9F%E5%9E%8B%E6%96%B9%E6%B3%95%E7%94%A8%E4%BA%8E%E6%88%AA%E5%8F%96%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%89%8D%E5%90%8E%E7%9A%84%E7%A9%BA%E7%99%BD%E5%AD%97%E7%AC%A6">给 JavaScript 的 String 原生对象添加一个名为 trim 的原型方法，用于截取字符串前后的空白字符</a></p>
</li>
<li>
<p><a href="#%E6%9C%89%E8%BF%99%E6%A0%B7%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0-a%E8%A6%81%E6%B1%82%E5%9C%A8%E4%B8%8D%E6%94%B9%E5%8F%98%E5%8E%9F%E6%9C%89%E5%87%BD%E6%95%B0-a-%E5%8A%9F%E8%83%BD%E4%BB%A5%E5%8F%8A%E8%B0%83%E7%94%A8%E6%96%B9%E5%BC%8F%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%E4%BD%BF%E5%BE%97%E6%AF%8F%E6%AC%A1%E8%B0%83%E7%94%A8%E8%AF%A5%E5%87%BD%E6%95%B0%E9%83%BD%E8%83%BD%E5%9C%A8%E6%8E%A7%E5%88%B6%E5%8F%B0%E6%89%93%E5%8D%B0%E5%87%BAhelloworld">有这样一个函数 A,要求在不改变原有函数 A 功能以及调用方式的情况下，使得每次调用该函数都能在控制台打印出“HelloWorld”</a></p>
</li>
</ul>
<h3>手动实现一个 Promisify 函数</h3>
<p>公司：高德</p>
<p>分类：Node、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/306">答案&amp;解析</a></p>
<p><br/></p>
<h3>介绍防抖节流原理、区别以及应用，并用JavaScript进行实现</h3>
<p>公司：滴滴、虎扑、挖财、58、头条</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/15">答案&amp;解析</a></p>
<p><br/></p>
<h3>介绍下 promise 的特性、优缺点，内部是如何实现的，动手实现 Promise</h3>
<p>公司：滴滴、头条、喜马拉雅、兑吧、寺库、百分点、58、安居客</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/29">答案&amp;解析</a></p>
<p><br/></p>
<h3>实现 Promise.all</h3>
<pre><code class="language-js">Promise.all = function (arr) {
  // 实现代码
};
</code></pre>
<p>公司：滴滴、头条、有赞、微医</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/30">答案&amp;解析</a></p>
<p><br/></p>
<h3>请实现如下的函数</h3>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/185">答案&amp;解析</a></p>
<p><br/></p>
<h3>设计一个函数，奇数次执行的时候打印 1，偶数次执行的时候打印 2</h3>
<p>公司：老虎</p>
<p>分类：JavaScript</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/162">答案&amp;解析</a></p>
<p><br/></p>
<h3>实现 Promise.then</h3>
<p>公司：高德、百分点</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/161">答案&amp;解析</a></p>
<p><br/></p>
<h3>给定起止日期，返回中间的所有月份</h3>
<pre><code class="language-js">// 输入两个字符串 2018-08  2018-12
// 输出他们中间的月份 [2018-9,2018-10, 2018-11]
</code></pre>
<p>公司：顺丰</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/159">答案&amp;解析</a></p>
<p><br/></p>
<h3>按要求实现代码</h3>
<pre><code class="language-js">// 给两个数组 [A1,A2,B1,B2,C1,C2,D1,D2] [A,B,C,D]
// 输出 [A1,A2,A,B1,B2,B,C1,C2,C,D1,D2,D]
</code></pre>
<p>公司：顺丰</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/158">答案&amp;解析</a></p>
<p><br/></p>
<h3>简单封装一个异步 fecth，使用 async await 的方式来使用</h3>
<p>公司：顺丰</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/155">答案&amp;解析</a></p>
<p><br/></p>
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
<p>公司：顺丰</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/152">答案&amp;解析</a></p>
<p><br/></p>
<h3>动手实现一个 repeat 方法</h3>
<pre><code class="language-js">function repeat(func, times, wait) {
  // TODO
}
const repeatFunc = repeat(alert, 4, 3000);
// 调用这个 repeatFunc (&quot;hellworld&quot;)，会alert4次 helloworld, 每次间隔3秒
</code></pre>
<p>公司：头条</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/148">答案&amp;解析</a></p>
<p><br/></p>
<h3>versions 是一个项目的版本号列表，因多人维护，不规则，动手实现一个版本号处理函数</h3>
<pre><code class="language-js">var versions = [&quot;1.45.0&quot;, &quot;1.5&quot;, &quot;6&quot;, &quot;3.3.3.3.3.3.3&quot;];
// 要求从小到大排序，注意'1.45'比'1.5'大
function sortVersion(versions) {
  // TODO
}
// => ['1.5','1.45.0','3.3.3.3.3.3','6']
</code></pre>
<p>公司：头条</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/146">答案&amp;解析</a></p>
<p><br/></p>
<h3>实现一个函数将中文数字转成数字</h3>
<p>公司：微软</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/343">答案&amp;解析</a></p>
<p><br/></p>
<h3>实现函数接受任意二叉树，求二叉树所有根到叶子路径组成的数字之和</h3>
<p>公司：头条</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/323">答案&amp;解析</a></p>
<p><br/></p>
<h3>Promise 链式调用如何实现</h3>
<p>公司：滴滴</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/319">答案&amp;解析</a></p>
<p><br/></p>
<h3>如何把真实 dom 转变为虚拟 dom，代码实现一下</h3>
<p>公司：高德</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/310">答案&amp;解析</a></p>
<p><br/></p>
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
<p>公司：快手</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/294">答案&amp;解析</a></p>
<p><br/></p>
<h3>请实现一个 cacheRequest 方法，保证发出多次同一个 ajax 请求时都能拿到数据，而实际上只发出一次请求</h3>
<p>公司：快手</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/293">答案&amp;解析</a></p>
<p><br/></p>
<h3>用 Promise 封装一个 ajax</h3>
<p>公司：脉脉</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/276">答案&amp;解析</a></p>
<p><br/></p>
<h3>请实现<code>$on,$emit</code></h3>
<p>公司：自如</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/269">答案&amp;解析</a></p>
<p><br/></p>
<h3>实现 bind 方法，不能使用 call、apply、bind</h3>
<p>公司：自如、腾讯应用宝、快手</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/268">答案&amp;解析</a></p>
<p><br/></p>
<h3>手写实现 sleep 函数</h3>
<p>公司：自如</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/267">答案&amp;解析</a></p>
<p><br/></p>
<h3>用原生 js 实现自定义事件</h3>
<p>公司：自如</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/258">答案&amp;解析</a></p>
<p><br/></p>
<h3>如何识别出字符串中的回车并进行换行？</h3>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/257">答案&amp;解析</a></p>
<p><br/></p>
<h3>输入一个日期 返回几秒前、几小时前、几天前、几月前</h3>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/255">答案&amp;解析</a></p>
<p><br/></p>
<h3>将 153812.7 转化为 153,812.7</h3>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/244">答案&amp;解析</a></p>
<p><br/></p>
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
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/386">答案&amp;解析</a></p>
<p><br/></p>
<h3>实现一个功能，发送请求 5s 时间后，如果没有数据返回，中断请求,提示错误</h3>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/375">答案&amp;解析</a></p>
<p><br/></p>
<h3>reduce 函数的功能，如何实现的，动手实现一下</h3>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/587">答案&amp;解析</a></p>
<p><br/></p>
<h3>new 的实现原理，动手实现一个 new</h3>
<p>公司：兑吧</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/428">答案&amp;解析</a></p>
<p><br/></p>
<h3>promise 如何实现 then 处理，动手实现 then</h3>
<p>公司：宝宝树</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/775">答案&amp;解析</a></p>
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
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/738">答案&amp;解析</a></p>
<p><br/></p>
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
<p>公司：阿里</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/728">答案&amp;解析</a></p>
<p><br/></p>
<h3>请修改代码能跳出死循环</h3>
<pre><code class="language-js">while (1) {
  switch (&quot;yideng&quot;) {
    case &quot;yideng&quot;:
    //禁止直接写一句break
  }
}
</code></pre>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/725">答案&amp;解析</a></p>
<p><br/></p>
<h3>修改代码不造成死循环</h3>
<pre><code class="language-js">while(1){
  console.log(Math.random());
}
</code></pre>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/911">答案&amp;解析</a></p>
<p><br/></p>
<h3>请手写实现一个拖拽</h3>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/711">答案&amp;解析</a></p>
<p><br/></p>
<h3>请手动实现一个浅拷贝</h3>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/710">答案&amp;解析</a></p>
<p><br/></p>
<h3>介绍 instanceof 原理，并手动实现</h3>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/709">答案&amp;解析</a></p>
<p><br/></p>
<h3>请实现一个 JSON.stringfy</h3>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/708">答案&amp;解析</a></p>
<p><br/></p>
<h3>请实现一个 JSON.parse</h3>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/707">答案&amp;解析</a></p>
<p><br/></p>
<h3>用 html、css、js 模拟实现一个下拉框，使得下拉框在各个浏览器下的样式和行为完全一致，说出你的设计方案，并且重点说明功能设计时要考虑的因素。</h3>
<p>公司：会小二</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/687">答案&amp;解析</a></p>
<p><br/></p>
<h3>实现一个打点计时器</h3>
<pre><code class="language-js">/* 
  1.从start至end,每隔100毫秒console.log一个数字，每次数字增幅为1
  2.返回的对象中需要包含一个cancel方法，用于停止定时操作
  3.第一个数字需要立即输出
*/
</code></pre>
<p>公司：会小二</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/685">答案&amp;解析</a></p>
<p><br/></p>
<h3>在一个 ul 里有 10 个 li,实现点击对应的 li,输出对应的下标</h3>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/673">答案&amp;解析</a></p>
<p><br/></p>
<h3>分别对以下数组进行去重，1:[1,'1',2,'2',3]，2:[1,[1,2,3['1','2','3'],4],5,6]</h3>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/672">答案&amp;解析</a></p>
<p><br/></p>
<h3>编写一个 Person 类，并创建两个不同的 Person 对象</h3>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/670">答案&amp;解析</a></p>
<p><br/></p>
<h3>说一下 let、const 的实现，动手实现一下</h3>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/655">答案&amp;解析</a></p>
<p><br/></p>
<h3>写一个函数打乱一个数组，传入一个数组，返回一个打乱的新数组</h3>
<p>公司：快手</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/643">答案&amp;解析</a></p>
<p><br/></p>
<h3>手写 EventEmitter 实现</h3>
<p>公司：头条、亚美科技</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/624">答案&amp;解析</a></p>
<p><br/></p>
<h3>请实现鼠标点击页面中的任意标签，alert 该标签的名称(注意兼容性)</h3>
<p>公司：爱范儿、道一云</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/854">答案&amp;解析</a></p>
<p><br/></p>
<h3>完成一个表达式，验证用户输入是否是电子邮箱</h3>
<p>公司：爱范儿</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/853">答案&amp;解析</a></p>
<p><br/></p>
<h3>原生实现 ES5 的 Object.create()方法</h3>
<p>公司：爱范儿</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/852">答案&amp;解析</a></p>
<p><br/></p>
<h3>按要求完成题目</h3>
<pre><code class="language-js">/* 
  a)在不使用vue、react的前提下写代码解决一下问题
    一个List页面上，含有1000个条目的待办列表，现其中100项在同一时间达到了过期时间，需要在对应项的text-node里添加“已过期”文字。需要尽可能减少dom重绘次数以提升性能。
  b)尝试使用vue或react解决上述问题
*/
</code></pre>
<p>公司：爱范儿</p>
<p>分类：JavaScript、Vue、React、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/848">答案&amp;解析</a></p>
<p><br/></p>
<h3>填充代码实现 template 方法</h3>
<pre><code class="language-js">var str = &quot;您好，<%=name%>。欢迎来到<%=location%>&quot;;
function template(str) {
  // your code
}
var compiled = template(srt);
// compiled的输出值为：“您好，张三。欢迎来到网易游戏”
compiled({ name: &quot;张三&quot;, location: &quot;网易游戏&quot; });
</code></pre>
<p>公司：网易</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/844">答案&amp;解析</a></p>
<p><br/></p>
<h3>请用 JavaScript 代码实现事件代理</h3>
<p>公司：玄武科技</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/832">答案&amp;解析</a></p>
<p><br/></p>
<h3>实现格式化输出，比如输入 999999999，输出 999,999,999</h3>
<p>公司：亚美科技</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/831">答案&amp;解析</a></p>
<p><br/></p>
<h3>使用 JavaScript 实现 cookie 的设置、读取、删除</h3>
<p>公司：亚美科技</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/830">答案&amp;解析</a></p>
<p><br/></p>
<h3>请编写一个 JavaScript 函数 parseQueryString,它的用途是把 URL 参数解析为一个对象，url=&quot;http://iauto360.cn/index.php?key0=0&amp;key1=1&amp;key2=2&quot;</h3>
<p>公司：亚美科技</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/829">答案&amp;解析</a></p>
<p><br/></p>
<h3>给 JavaScript 的 String 原生对象添加一个名为 trim 的原型方法，用于截取字符串前后的空白字符</h3>
<p>公司：高思教育</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/822">答案&amp;解析</a></p>
<p><br/></p>
<h3>有这样一个函数 A,要求在不改变原有函数 A 功能以及调用方式的情况下，使得每次调用该函数都能在控制台打印出“HelloWorld”</h3>
<pre><code class="language-js">function A() {
  console.log(&quot;调用了函数A&quot;);
}
</code></pre>
<p>公司：新东方</p>
<p>分类：JavaScript、编程题</p>
<p><a href="https://github.com/lgwebdream/FE-Interview/issues/800">答案&amp;解析</a></p>
<p><br/></p>
<p><a href="https://github.com/lgwebdream/FE-Interview">来源</a></p>
`}}></div>
  }
  