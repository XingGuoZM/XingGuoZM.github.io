
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:`<h1>vue面试题</h1>
<blockquote>
<p>鼓励PR，持续更新（Vue v2.6.10）</p>
</blockquote>
<h2>历史题目(最新：2019.07.27)</h2>
<p><a href="#vue">vue</a> | <a href="#vue-cli">vue-cli</a> | <a href="#vue-router">vue-router</a> | <a href="#vuex">vuex</a>  | <a href="#ElementUI">ElementUI</a> | <a href="#ElementUI">ElementUI</a> | <a href="#mint-ui">mint-ui</a></p>
<h3>vue</h3>
<ul>
<li><a href="https://github.com/haizlin/fe-interview/issues/983">从0到1自己构架一个vue项目，说说有哪些步骤、哪些重要插件、目录结构你会怎么组织</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/561">你知道vue的模板语法用的是哪个web模板引擎的吗？说说你对这模板引擎的理解</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/560">你知道v-model的原理吗？说说看</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/559">你有使用过vue开发多语言项目吗？说说你的做法？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/558">在使用计算属性的时，函数名和data数据源中的数据可以同名吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/557">vue中data的属性可以和methods中的方法同名吗？为什么？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/556">怎么给vue定义全局的方法？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/555">vue2.0不再支持v-html中使用过滤器了怎么办？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/554">怎么解决vue打包后静态资源图片失效的问题？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/553">怎么解决vue动态设置img的src不生效的问题？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/552">使用vue后怎么针对搜索引擎做SEO优化？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/551">跟keep-alive有关的生命周期是哪些？描述下这些生命周期</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/550">如果现在让你从vue/react/angularjs三个中选择一个，你会选哪个？说说你的理由</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/549">你知道vue2.0兼容IE哪个版本以上吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/548">使用vue开发一个todo小应用，谈下你的思路</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/547">你有看过vue推荐的风格指南吗？列举出你知道的几条</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/546">你是从vue哪个版本开始用的？你知道1.x和2.x有什么区别吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/545">你知道vue中key的原理吗？说说你对它的理解</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/544">vue中怎么重置data？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/508">vue渲染模板时怎么保留模板中的HTML注释呢？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/507">Vue.observable你有了解过吗？说说看</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/506">你知道style加scoped属性的用途和原理吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/489">你期待vue3.0有什么功能或者改进的地方？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/478">vue边界情况有哪些？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/477">如何在子组件中访问父组件的实例？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/476">watch的属性用箭头函数定义结果会怎么样？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/475">在vue项目中如果methods的方法用箭头函数定义结果会怎么样？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/474">在vue项目中如何配置favicon？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/473">你有使用过babel-polyfill模块吗？主要是用来做什么的？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/472">说说你对vue的错误处理的了解？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/471">在vue事件中传入$event，使用e.target和e.currentTarget有什么区别？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/470">在.vue文件中style是必须的吗？那script是必须的吗？为什么？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/469">vue怎么实现强制刷新组件？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/468">vue自定义事件中父组件怎么接收子组件的多个参数？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/467">实际工作中，你总结的vue最佳实践有哪些？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/466">vue给组件绑定自定义事件无效怎么解决？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/465">vue的属性名称与method的方法名称一样时会发生什么问题？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/464">vue变量名如果以_、$开头的属性会发生什么问题？怎么访问到它们的值？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/463">vue使用v-for遍历对象时，是按什么顺序遍历的？如何保证顺序？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/462">vue如果想扩展某个现有的组件时，怎么做呢？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/461">说下$attrs和$listeners的使用场景</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/460">分析下vue项目本地开发完成后部署到服务器后报404是什么原因呢？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/459">v-once的使用场景有哪些？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/458">说说你对vue的表单修饰符.lazy的理解</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/457">vue为什么要求组件模板只能有一个根元素？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/456">EventBus注册在全局上时，路由切换时会重复触发事件，如何解决呢？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/455">怎么修改vue打包后生成文件路径？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/454">你有使用做过vue与原生app交互吗？说说vue与ap交互的方法</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/453">使用vue写一个tab切换</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/452">vue中什么是递归组件？举个例子说明下？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/451">怎么访问到子组件的实例或者子元素？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/450">在子组件中怎么访问到父组件的实例？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/449">在组件中怎么访问到根实例？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/448">说说你对Object.defineProperty的理解</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/447">vue组件里写的原生addEventListeners监听事件，要手动去销毁吗？为什么？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/446">vue组件里的定时器要怎么销毁？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/445">vue组件会在什么时候下被销毁？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/444">使用vue渲染大量数据时应该怎么优化？说下你的思路！</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/443">在vue中使用this应该注意哪些问题？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/442">你有使用过JSX吗？说说你对JSX的理解</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/441">说说组件的命名规范</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/440">怎么配置使vue2.0+支持TypeScript写法？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/439"><code><template></template></code>有什么用？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/438">vue的is这个特性你有用过吗？主要用在哪些方面？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/437">vue的:class和:style有几种表示方式？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/436">你了解什么是函数式组件吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/435">vue怎么改变插入模板的分隔符？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/434">组件中写name选项有什么作用？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/433">说说你对provide和inject的理解</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/432">开发过程中有使用过devtools吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/431">说说你对slot的理解有多少？slot使用场景有哪些？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/430">你有使用过动态组件吗？说说你对它的理解</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/429">prop验证的type类型有哪几种？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/428">prop是怎么做验证的？可以设置默认值吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/427">怎么缓存当前打开的路由组件，缓存后想更新当前组件怎么办呢？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/426">说说你对vue组件的设计原则的理解</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/425">你了解vue的diff算法吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/424">vue如何优化首页的加载速度？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/423">vue打包成最终的文件有哪些？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/422">ajax、fetch、axios这三都有什么区别？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/421">vue能监听到数组变化的方法有哪些？为什么这些方法能监听到呢？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/420">vue中是如何使用event对象的？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/366">vue首页白屏是什么问题引起的？如何解决呢？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/365">说说你对单向数据流和双向数据流的理解</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/364">移动端ui你用的是哪个ui库？有遇到过什么问题吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/363">你知道nextTick的原理吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/362">说说你对v-clock和v-pre指令的理解</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/361">写出你知道的表单修饰符和事件修饰符</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/359">说说你对proxy的理解</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/358">你有自己用vue写过UI组件库吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/357">用vue怎么实现一个换肤的功能？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/356">有在vue中使用过echarts吗？踩过哪些坑？如何解决的？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/355">如果让你教一个2-3年经验前端经验的同事使用vue，你该怎么教？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/354">vue性能的优化的方法有哪些？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/353">SSR解决了什么问题？有做过SSR吗？你是怎么做的？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/352">说说你觉得认为的vue开发规范有哪些？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/350">vue部署上线前需要做哪些准备工作？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/349">vue过渡动画实现的方式有哪些？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/348">vue在created和mounted这两个生命周期中请求数据有什么区别呢？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/347">vue父子组件双向绑定的方法有哪些？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/346">vue怎么获取DOM节点？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/345">vue项目有做过单元测试吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/344">vue项目有使用过npm run build --report吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/343">如何解决vue打包vendor过大的问题？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/342">webpack打包vue速度太慢怎么办？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/341">vue在开发过程中要同时跟N个不同的后端人员联调接口（请求的url不一样）时你该怎么办？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/340">vue要做权限管理该怎么做？如果控制到按钮级别的权限怎么做？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/339">说下你的vue项目的目录结构，如果是大型项目你该怎么划分结构和划分组件呢？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/338">在移动端使用vue，你觉得最佳实践有哪些？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/337">你们项目为什么会选vue而不选择其它的框架呢？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/336">对于即将到来的vue3.0特性你有什么了解的吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/335">vue开发过程中你有使用什么辅助工具吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/334">vue和微信小程序写法上有什么区别？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/333">怎么缓存当前的组件？缓存后怎么更新？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/332">你了解什么是高阶组件吗？可否举个例子说明下？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/331">为什么我们写组件的时候可以写在.vue里呢？可以是别的文件名后缀吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/330">vue-loader是什么？它有什么作用？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/329">说说你对vue的extend（构造器）的理解，它主要是用来做什么的？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/328">如果将axios异步请求同步化处理？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/327">怎么捕获组件vue的错误信息？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/326">为什么vue使用异步更新组件？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/325">如何实现一个虚拟DOM？说说你的思路</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/324">写出多种定义组件模板的方法</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/323">SPA单页面的实现方式有哪些？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/322">说说你对SPA单页面的理解，它的优缺点分别是什么？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/321">说说你都用vue做过哪些类型的项目？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/320">在vue项目中如何引入第三方库（比如jQuery）？有哪些方法可以做到？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/319">使用vue手写一个过滤器</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/318">你有使用过render函数吗？有什么好处？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/317">写出你常用的指令有哪些？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/316">手写一个自定义指令及写出如何调用</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/315">组件进来请求接口时你是放在哪个生命周期？为什么？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/314">你有用过事件总线(EventBus)吗？说说你的理解</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/313">说说vue的优缺点分别是什么？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/312">DOM渲染在哪个周期中就已经完成了？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/311">第一次加载页面时会触发哪几个钩子？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/310">vue生命周期总共有几个阶段？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/309">vue生命周期的作用是什么？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/308">vue和angular有什么区别呢？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/307">如何引入scss？引入后如何使用？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/306">使用vue开发过程你是怎么做接口管理的？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/305">为何官方推荐使用axios而不用vue-resource？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/304">你了解axios的原理吗？有看过它的源码吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/303">你有封装过axios吗？主要是封装哪方面的？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/302">如何中断axios的请求？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/301">axios是什么？怎样使用它？怎么解决跨域的问题？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/292">说说你对vue的template编译的理解？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/291">v-on可以绑定多个方法吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/290">vue常用的修饰符有哪些？列举并说明</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/289">你认为vue的核心是什么？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/288">v-model是什么？有什么用呢？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/287">说说你对vue的mixin的理解，有什么应用场景？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/286">SPA首屏加载速度慢的怎么解决？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/285">删除数组用delete和Vue.delete有什么区别？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/284">动态给vue的data添加一个新的属性时会发生什么？怎样解决？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/283">组件和插件有什么区别？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/274">说说你使用vue过程中遇到的问题（坑）有哪些，你是怎么解决的？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/273">说说你对选项el,template,render的理解</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/272">vue实例挂载的过程是什么？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/271">vue在组件中引入插件的方法有哪些？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/270">v-if和v-for的优先级是什么？如果这两个同时出现时，那应该怎么优化才能得到更好的性能？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/269">分别说说vue能监听到数组或对象变化的场景，还有哪些场景是监听不到的？无法监听时有什么解决方案？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/268">$nextTick有什么作用？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/267">为什么data属性必须声明为返回一个初始数据对应的函数呢？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/266">怎么在watch监听开始之后立即被调用？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/265">watch怎么深度监听对象变化？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/264">watch和计算属性有什么区别？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/263">vue如何监听键盘事件？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/262">v-for循环中key有什么作用？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/261">怎么在vue中使用插件？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/260">你有写过自定义组件吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/259">说说你对keep-alive的理解是什么？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/258">怎么使css样式只在当前组件中生效？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/235">你有看过vue的源码吗？如果有那就说说看</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/234">你有写过自定义指令吗？自定义指令的生命周期（钩子函数）有哪些？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/232">v-show和v-if有什么区别？使用场景分别是什么？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/231">说说你对MVC、MVP、MVVM模式的理解</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/230">说下你对指令的理解？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/229">请描述下vue的生命周期是什么？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/228">vue组件之间的通信都有哪些？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/227">什么是虚拟DOM？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/226">什么是双向绑定？原理是什么？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/225">vue和react有什么不同？使用场景是什么？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/224">说说vue的优缺点</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/223">有使用过vue吗？说说你对vue的理解</a></li>
</ul>
<h3>vue-cli</h3>
<ul>
<li><a href="https://github.com/haizlin/fe-interview/issues/543">vue-cli提供了的哪几种脚手架模板？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/542">vue-cli工程中常用的npm命令有哪些？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/541">在使用vue-cli开发vue项目时，自动刷新页面的原理你了解吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/540">vue-cli3插件有写过吗？怎么写一个代码生成插件？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/488">vue-cli生成的项目可以使用es6、es7的语法吗？为什么？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/487">vue-cli怎么解决跨域的问题？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/486">vue-cli中你经常的加载器有哪些？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/485">你知道什么是脚手架吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/484">说下你了解的vue-cli原理？你可以自己实现个类vue-cli吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/483">怎么使用vue-cli3创建一个项目？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/482">vue-cli3你有使用过吗？它和2.x版本有什么区别？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/360">vue-cli默认是单页面的，那要弄成多页面该怎么办呢？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/351">不用vue-cli，你自己有搭建过vue的开发环境吗？流程是什么？</a></li>
</ul>
<h3>vue-router</h3>
<ul>
<li><a href="https://github.com/haizlin/fe-interview/issues/419">vue-router怎么重定向页面？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/418">vue-router怎么配置404页面？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/417">切换路由时，需要保存草稿的功能，怎么实现呢？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/416">vue-router路由有几种模式？说说它们的区别？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/415">vue-router有哪几种导航钩子（ 导航守卫 ）？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/414">说说你对router-link的了解</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/383">vue-router如何响应路由参数的变化？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/382">你有看过vue-router的源码吗？说说看</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/381">切换到新路由时，页面要滚动到顶部或保持原先的滚动位置怎么做呢？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/380">在什么场景下会用到嵌套路由？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/379">如何获取路由传过来的参数？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/378">说说active-class是哪个组件的属性？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/377">在vue组件中怎么获取到当前的路由信息？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/376">vur-router怎么重定向？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/375">怎样动态加载路由？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/374">怎么实现路由懒加载呢？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/373">如果让你从零开始写一个vue路由，说说你的思路</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/372">说说vue-router完整的导航解析流程是什么？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/371">路由之间是怎么跳转的？有哪些方式？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/370">如果vue-router使用history模式，部署时要注意什么？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/369">route和router有什么区别？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/368">vue-router钩子函数有哪些？都有哪些参数？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/367">vue-router是用来做什么的？它有哪些组件？</a></li>
</ul>
<h3>vuex</h3>
<ul>
<li><a href="https://github.com/haizlin/fe-interview/issues/539">你有写过vuex中store的插件吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/538">你有使用过vuex的module吗？主要是在什么场景下使用？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/537">vuex中actions和mutations有什么区别？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/413">vuex使用actions时不支持多参数传递怎么办？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/412">你觉得vuex有什么缺点？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/411">你觉得要是不用vuex的话会带来哪些问题？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/393">vuex怎么知道state是通过mutation修改还是外部直接修改的？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/392">请求数据是写在组件的methods中还是在vuex的action中？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/391">怎么监听vuex数据的变化？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/390">vuex的action和mutation的特性是什么？有什么区别？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/389">页面刷新后vuex的state数据丢失怎么解决？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/388">vuex的state、getter、mutation、action、module特性分别是什么？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/387">vuex的store有几个属性值？分别讲讲它们的作用是什么？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/386">你理解的vuex是什么呢？哪些场景会用到？不用会有问题吗？有哪些特性？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/385">使用vuex的优势是什么？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/384">有用过vuex吗？它主要解决的是什么问题？推荐在哪些场景用？</a></li>
</ul>
<h3>ElementUI</h3>
<ul>
<li><a href="https://github.com/haizlin/fe-interview/issues/402">ElementUI是怎么做表单验证的？在循环里对每个input验证怎么做呢？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/401">你有二次封装过ElementUI组件吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/400">ElementUI怎么修改组件的默认样式？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/399">ElementUI的穿梭组件如果数据量大会变卡怎么解决不卡的问题呢？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/398">ElementUI表格组件如何实现动态表头？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/397">ElementUI使用表格组件时有遇到过问题吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/396">有阅读过ElementUI的源码吗？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/395">项目中有使用过ElementUI吗？有遇到过哪些问题？它的使用场景主要是哪些？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/394">有用过哪些vue的ui？说说它们的优缺点？</a></li>
</ul>
<h3>mint-ui</h3>
<ul>
<li><a href="https://github.com/haizlin/fe-interview/issues/481">mint-ui使用过程中有没有遇到什么坑？怎么解决的？</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/480">说出几个mint-ui常用的组件</a></li>
<li><a href="https://github.com/haizlin/fe-interview/issues/479">mint-ui是什么？你有使用过吗？</a></li>
</ul>
`}}></div>
  }
  