
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h1>typescript</h1>
<p>[TOC]</p>
<h3>typescript优点？</h3>
<ul>
<li>强类型
<ul>
<li>【可选的】不要求100%覆盖
<ul>
<li>更方便迁移老代码</li>
<li>降低入门门槛</li>
</ul>
</li>
<li>【js的超集】支持js(包含es6,及es6+)所有语法
<ul>
<li>方便快速入手</li>
</ul>
</li>
<li>【静态检查】编译时就报错，而不像js在运行时报错
<ul>
<li>静态检查就知道错误，效率更高</li>
<li>避免低级错误</li>
</ul>
</li>
<li>【支持模块】方便类型的导入导出，复用组合</li>
<li>【更好维护】类型就是最好的注释，减少查文档的时间</li>
</ul>
</li>
<li>支持面向对象编程，类型重用率更高，代码可读性更强，相比react的propTypes功能更强大
<ul>
<li>接口 interface</li>
<li>继承： extend</li>
<li>类： class</li>
<li>泛型 <T></li>
</ul>
</li>
</ul>
<p><img src="https://upload-images.jianshu.io/upload_images/16021827-9f2935d0f3da0cf7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1200/format/webp" alt="img"></p>
<p>参考资料：https://www.zhihu.com/question/273619114/answer/369126175</p>
<h3>typescript缺点？</h3>
<ul>
<li>【编译耗时】需要长时间的来编译代码：deno内部将删除ts代码</li>
<li>【第三方定义文件】在使用第三方库时，需要有三方库的定义文件，并不是所有三方库都提供了定义文件，提供的定义文件是否准确也值得商榷</li>
</ul>
<h3>typescirpt有哪些基础类型?</h3>
<p><strong>js的类型</strong></p>
<ul>
<li>number</li>
<li>string</li>
<li>boolean</li>
<li>object</li>
<li>array</li>
<li>function</li>
<li>null</li>
<li>undefined</li>
<li>symbol</li>
</ul>
<p><strong>ts新增类型</strong></p>
<ul>
<li>
<p>any: 任意值类型</p>
</li>
<li>
<p>void：函数没有返回值时用void</p>
</li>
<li>
<p>Tuple(元组)：规定数组成员的数量，各位置的类型</p>
</li>
<li>
<p>enum(枚举)：定义数值集合</p>
</li>
<li>
<p>never：（实际上不常用) never是其他类型的子类型，代表不会把出现的值</p>
</li>
</ul>
<h3>介绍下ts中的泛型？</h3>
<p>泛型代表的是泛指某一类型，更像是一个类型变量。由尖括号包裹<T>。</p>
<p>主要作用是创建逻辑可复用的组件。</p>
<p>泛型可以作用在函数、类、接口上。</p>
<pre><code class="language-js">函数：

function greet<T>(name: T) {}

类：

class createObj<T> {

​    name: T

}

接口：

interface IF<T> {

​    name: T

}

泛型还可以被约束，这样就是任意类型了。

interface TIF {

​    length: number

}

function test<T extends TIF>(params: T) {

​    console.log(&quot;=========>>>&quot;, params.length);

}

泛型约束之类型参数

function getPropoty<T, K extends keyof T>(obj: T, key: K) {

​    return obj[key];

}

</code></pre>
<h2>强烈推荐</h2>
<p>像更系统的学习typescript，可查看  <a href="https://github.com/tuihou123321/typeScript-demo">typeScript-demo</a></p>
<p>参考资料：</p>
<p>https://www.runoob.com/typescript/ts-type.html</p>
<p><a href="https://www.jianshu.com/p/c8aaba6e8ce0">Typescript面试题</a></p>
`}}></div>
  }
  