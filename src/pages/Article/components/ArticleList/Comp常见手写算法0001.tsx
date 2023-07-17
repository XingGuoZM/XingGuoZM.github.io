
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h1>常见手写算法</h1>
<h2>关键词</h2>
<ul>
<li>promise</li>
<li>数组</li>
</ul>
<h2>实现汇总</h2>
<ul>
<li>判断设备来源的方法（isIos、isAndroid、isIphoneX）</li>
</ul>
<pre><code class="language-js">const DeviceInfo = (() => {
  const ua = window.navigator?.userAgent;

  const isAndroid = /android/i.test(ua);
  const isIos = /iPhone|iPad|iPod|iOS/i.test(ua);
  const isMobile = /Mobi|Android|iPhone/i.test(ua);

  return {
    isMobile,
    isAndroid,
    isIos,
  };
})();
</code></pre>
<ul>
<li>
<p>用js实现一个链表，包括创建、增删改查操作</p>
</li>
<li>
<p>写一个函数判断链表是否有环</p>
</li>
<li>
<p>写一个函数实现链表反转</p>
</li>
<li>
<p>使用栈实现队列</p>
</li>
<li>
<p>判断括号是否是匹配（“(){()[{}]} ()({}) {()}[]{()} [{{[()]}}]”）</p>
</li>
<li>
<p>使用js创建二叉树</p>
</li>
<li>
<p>手写树先序、中序、后序、层序遍历（递归+迭代）</p>
</li>
<li>
<p>判断平衡二叉树、搜索二叉树、完全二叉树</p>
</li>
<li>
<p>用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值</p>
</li>
<li>
<p>写一个判断数据类型的方法</p>
</li>
<li>
<p>手写深/浅克隆方法</p>
</li>
<li>
<p>手写let、const</p>
</li>
<li>
<p>手写一个函数，获取对象的指定属性</p>
</li>
<li>
<p>手写一个new方法</p>
</li>
<li>
<p>手写一个继承函数</p>
</li>
<li>
<p>手写一个call、bind的方法</p>
</li>
<li>
<p>手写防抖和节流</p>
</li>
<li>
<p>手写函数柯里化</p>
</li>
<li>
<p>手写函数组合（compose）</p>
</li>
<li>
<p>手写sleep函数（考虑兼容性）</p>
</li>
<li>
<p>写一个方法去掉字符串中的空格</p>
</li>
<li>
<p>写一个函数，在给定一个url字符串获取参数的方法</p>
</li>
<li>
<p>写一个函数，判断是否回文</p>
</li>
<li>
<p>写一个函数，实现字符串的反转</p>
</li>
<li>
<p>写一个函数，实现两个大数相加</p>
</li>
<li>
<p>写一个函数，判断一个字符串是否为另一个字符串的子串</p>
</li>
<li>
<p>写一个函数，计算两个字符串的公共子串</p>
</li>
<li>
<p>写一个函数，实现颜色转换 'rgb(255, 255, 255)' -> '#FFFFFF' 的多种思路</p>
</li>
<li>
<p>写一个函数，实现颜色转换 '#FFFFFF' -> 'rgb(255, 255, 255)' 的多种思路</p>
</li>
<li>
<p>实现normalize函数，能将输入的特定的字符串转化为特定的结构化数据，字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。示例一: 'abc' --> {value: 'abc'}。示例二：'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}</p>
</li>
<li></li>
<li>
<p>手写数组去重(deduplicate)的方法（支持多维数组）</p>
</li>
<li>
<p>手写数组排序方法(sort)</p>
</li>
<li>
<p>手写数组拉平方法(flat)</p>
</li>
<li>
<p>手写数组indexOf</p>
</li>
<li>
<p>手写数组reduce</p>
</li>
<li>
<p>手写数组map、forEach、</p>
</li>
<li>
<p>用reduce实现map方法</p>
</li>
<li>
<p>手写一个函数，数组转对象（二维数组，每一项都是一个仅有2项的字符串数组）</p>
</li>
<li>
<p>手写一个函数，数组转树（每一项带父级id：pid）</p>
</li>
<li>
<p>手写promise</p>
</li>
<li>
<p>手写promise的all、race、allSettled、finally方法</p>
</li>
<li>
<p>手写promise的并发（limit）、重试（retry）、超时（timeout）函数</p>
</li>
<li>
<p>实现setTimeout、setInterval</p>
</li>
<li>
<p>实现jsonp、ajax</p>
</li>
<li>
<p>手写单例模式（singleton）</p>
</li>
<li>
<p>手写观察者模式（observer）、发布订阅模式</p>
</li>
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
<p>实现一个自由拖动组件</p>
</li>
<li>
<p>实现一个多弹窗管理组件</p>
</li>
<li>
<p>实现一个虚拟列表</p>
</li>
</ul>
`}}></div>
  }
  