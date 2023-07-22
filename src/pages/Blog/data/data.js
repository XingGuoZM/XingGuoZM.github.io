export const data = [{"id":0,"tabTitle":"Js基础","tabData":[{"id":"0001","dir":"Js基础","name":"js发展历史","title":"js发展历史","desc":"","url":"/article?id=0001"},{"id":"0002","dir":"Js基础","name":"this","title":"this","desc":"this关键词TC39执行上下文对象指向函数执行时所在的上下文对象，箭头函数（表达式）除外，它直接指向函数定义时所在的上下文对象。普通对象（无论多少层级）、普通函数调用，this指向全局const o","url":"/article?id=0002"},{"id":"0003","dir":"Js基础","name":"事件循环","title":"事件循环","desc":"关键词Promise A+（https://promisesaplus.com/）事件循环异步任务执行规则，先对异步任务进行分类，然后按照优先级执行。宏任务在下一次事件循环开始执行，微任务在本次事件循","url":"/article?id=0003"},{"id":"0004","dir":"Js基础","name":"作用域","title":"作用域","desc":"作用域关键词var、let/const、变量提升、暂时性死区词法作用域、执行上下文闭包函数、方法、IIFE、模块作用域是变量/常量的访问规则，或者说是变量/常量的影响范围，通过指定作用域的类型来分配变","url":"/article?id=0004"},{"id":"0005","dir":"Js基础","name":"原型链","title":"原型链","desc":"原型链原型和原型链prototype：引用TC39上的原话object that provides shared properties for other objectsWhen a construc","url":"/article?id=0005"}]},{"id":1,"tabTitle":"Js算法","tabData":[{"id":"0006","dir":"Js算法","name":"promise","title":"promise","desc":"promise手写promise，包括then，catch和finally手写promise的all、race、allSettledconst all = (arr) => {  return new","url":"/article?id=0006"},{"id":"0007","dir":"Js算法","name":"函数","title":"函数","desc":"手写instanceof// 引用类型判断const myInstanceof = (object,constructor)=>{  let prototype = constructor.proto","url":"/article?id=0007"},{"id":"0008","dir":"Js算法","name":"字符串","title":"字符串","desc":"字符串写一个方法去掉字符串中的空格写一个函数，在给定一个url字符串获取参数的方法写一个函数，判断是否回文写一个函数，实现字符串的反转写一个函数，实现两个大数相加写一个函数，判断一个字符串是否为另一个","url":"/article?id=0008"},{"id":"0009","dir":"Js算法","name":"数组","title":"数组","desc":"数组手写数组去重(deduplicate)的方法（支持多维数组）// 去重const deduplicate = (arr)=>{  return [...new Set(arr)];}手写数组排序方","url":"/article?id=0009"},{"id":"0010","dir":"Js算法","name":"栈与队列","title":"栈与队列","desc":"栈和队列使用栈实现队列判断括号是否是匹配（“(){()[{}]} ()({}) {()}[]{()} [{{[()]}}]”）","url":"/article?id=0010"},{"id":"0011","dir":"Js算法","name":"树","title":"树","desc":"树使用js创建二叉树// 创建二叉树function TreeNode(val,left=null,right=null){  this.left=left || null;  this.right=","url":"/article?id=0011"},{"id":"0012","dir":"Js算法","name":"设计模式","title":"设计模式","desc":"设计模式手写单例模式（singleton）//单例模式function Singleton(name){  this.name=name;  this.instance = null;}Singlet","url":"/article?id=0012"},{"id":"0013","dir":"Js算法","name":"链表","title":"链表","desc":"链表用js实现一个链表，包括创建、增删改查操作写一个函数判断链表是否有环写一个函数实现链表反转","url":"/article?id=0013"}]},{"id":2,"tabTitle":"React","tabData":[{"id":"0014","dir":"React","name":"Hooks","title":"Hooks","desc":"Hooks历史mvc软件架构模式BackboneBackbone.js 的最佳应用场景有哪些？React作用（解决了什么问题/产生什么影响/核心的几个版本）react提出了全新的组织代码的方式，使其更","url":"/article?id=0014"},{"id":"0015","dir":"React","name":"React发展历史","title":"React发展历史","desc":"React发展历史如何定义React？React是什么？react是一个UI界面库，专注于视图层的实现。拥有三个维度的优点，第一对于用户使用来说，采用声明式编程，本质为组件化，分而治之第二对于底层DO","url":"/article?id=0015"},{"id":"0016","dir":"React","name":"React提问","title":"React提问","desc":"React概念和理解说说你对react的理解？有哪些特性？React的设计思想？研究过 React 的运行时吗？React的优缺点？你最喜欢React的哪一个特性（说一个就好）？你最不喜欢React的","url":"/article?id=0016"}]},{"id":3,"tabTitle":"React组件封装","tabData":[{"id":"0017","dir":"React组件封装","name":"如何写一个按钮组件","title":"如何写一个按钮组件","desc":"按钮组件按钮的业务属性是可交互，点击可以给到某种反馈。首先是要吸引你可以点击它，然后点击它之后能有一些反应（变化）。因此我们可以定义按钮组件的功能可以吸引点击：能够自动执行动画，包括但不仅限于呼吸、抖","url":"/article?id=0017"},{"id":"0018","dir":"React组件封装","name":"组件封装总结","title":"组件封装总结","desc":"组件封装","url":"/article?id=0018"}]},{"id":4,"tabTitle":"Typescript","tabData":[{"id":"0019","dir":"Typescript","name":"ts发展历史","title":"ts发展历史","desc":"","url":"/article?id=0019"},{"id":"0020","dir":"Typescript","name":"ts常用知识","title":"ts常用知识","desc":"","url":"/article?id=0020"}]},{"id":5,"tabTitle":"Webpack","tabData":[{"id":"0021","dir":"Webpack","name":"devserver工作原理","title":"devserver工作原理","desc":"webpack-dev-server","url":"/article?id=0021"},{"id":"0022","dir":"Webpack","name":"webpack工作原理","title":"webpack工作原理","desc":"webpack工作原理webpack是一个js模块打包工具，通过js模块之间导入导出的依赖关系，构建依赖网络、静态分析来打包合并。其基本原理：1. 获取参数，根据参数初始化编译器（compiler）2","url":"/article?id=0022"},{"id":"0023","dir":"Webpack","name":"前端工程化发展历史","title":"前端工程化发展历史","desc":"工程化历史构建历史fisbrowserify+Gulp（基本文件流操作）","url":"/article?id=0023"},{"id":"0024","dir":"Webpack","name":"常用的plugin和loader","title":"常用的plugin和loader","desc":"常用的loader和plugin常用的loaderstyle-loader、css-loader、less-loaderbabel-loader、ts-loaderurl-loader常用的plugi","url":"/article?id=0024"}]},{"id":6,"tabTitle":"性能优化","tabData":[{"id":"0025","dir":"性能优化","name":"1px问题","title":"1px问题","desc":"","url":"/article?id=0025"},{"id":"0026","dir":"性能优化","name":"hybridh5特点","title":"hybridh5特点","desc":"hybrid h5app内嵌h5的混合开发模式是通过客户端提供webview来装载渲染我们的html页面。相关问题可以分为以下几类第一类：适配相关1px问题响应式布局iPhoneX 顶部刘海、底部白底","url":"/article?id=0026"},{"id":"0027","dir":"性能优化","name":"包体积优化","title":"包体积优化","desc":"包体积优化tree-shaking/#_PURE_/标识无副作用的代码段压缩js压缩：terser-webpack-plugincss压缩：css-minimizer-webpack-plugin代码","url":"/article?id=0027"},{"id":"0028","dir":"性能优化","name":"图片优化","title":"图片优化","desc":"图片各种格式图片特点jpg：色彩丰富png:色彩较为简单，包含透明通道webp：体积小","url":"/article?id=0028"},{"id":"0029","dir":"性能优化","name":"渲染优化","title":"渲染优化","desc":"渲染优化html解析渲染过程1. 解析HTML得到DOM树，解析CSS得到CSSOM树2. 将DOM树和CSSOM树结合得到渲染树（Render Tree）3. 布局（Layout）：根据生成的渲染树","url":"/article?id=0029"},{"id":"0030","dir":"性能优化","name":"离线包优化","title":"离线包优化","desc":"离线包离线包就是将html/js/css预先打包好提前下发到app本地，app加载网页的时候实际上是从本地加载，减少了网络请求。离线包技术适用于app内嵌h5页面。离线包的出现主要是为了解决nativ","url":"/article?id=0030"},{"id":"0031","dir":"性能优化","name":"网络优化","title":"网络优化","desc":"网络优化缩短请求时间减少DNS查询CND加速开启HTTP缓存DNS预解析/资源预加载减少请求数量请求合并按需加载重复请求处理合理缓存接口数据减少请求体积请求资源压缩HTTP压缩图片格式转换（webP等","url":"/article?id=0031"}]},{"id":7,"tabTitle":"网络","tabData":[{"id":"0032","dir":"网络","name":"DNS和CDN","title":"DNS和CDN","desc":"浏览器中输入URL到返回页面的全过程1. 根据域名，进行DNS域名解析2. 拿到解析的IP地址，建立TCP连接3. 向IP地址发送HTTP请求4. 服务器处理请求5. 返回响应结果6. 关闭TCP连接","url":"/article?id=0032"},{"id":"0033","dir":"网络","name":"HTTP网络的发展","title":"HTTP网络的发展","desc":"HTTP关键词http rfc 规范HTTP起源Tim Berners-Lee博士在1989年发表一篇论文，提出了万维网项目，是一个通过网络传输超文本的系统。为了实现这个系统，需要确定传输的格式（HT","url":"/article?id=0033"},{"id":"0034","dir":"网络","name":"网络模型","title":"网络模型","desc":"网络模型关键词OSI七层模型网络层、传输层TCP、UDP网络模型、ISO/OSI七层模型、TCP/IP模型最开始的时候网络协议是由网络公司自定义的，微软、苹果、思科等都有自己的网络协议，但这各家的协议","url":"/article?id=0034"}]},{"id":8,"tabTitle":"面试题","tabData":[{"id":"0035","dir":"面试题","name":"Coding","title":"Coding","desc":"编程题目汇总Css 如何画出一个扇形，动手实现下使用 Css 实现一个水波纹效果动手实现一个左右固定100px，中间自适应的三列布局？(至少三种)屏幕占满和未占满的情况下，使 footer 固定在底部","url":"/article?id=0035"},{"id":"0036","dir":"面试题","name":"Javascript","title":"Javascript","desc":"js试题infinity代表什么数据？请解释下面题目输出的结果如何计算动画的帧率（FPS）？如何排查页面中CPU占用高的情况？如何把10.36四舍五入为最接近的整数？写一个方法探测CPU占比情况jav","url":"/article?id=0036"},{"id":"0037","dir":"面试题","name":"React","title":"React","desc":"React面试题React什么时候使用状态管理器？render函数中return如果没有使用()会有什么问题？componentWillUpdate可以直接修改state的值吗？说说你对React的渲","url":"/article?id=0037"},{"id":"0038","dir":"面试题","name":"Typescript","title":"Typescript","desc":"typescript[TOC]typescript优点？强类型【可选的】不要求100%覆盖更方便迁移老代码降低入门门槛【js的超集】支持js(包含es6,及es6+)所有语法方便快速入手【静态检查】编","url":"/article?id=0038"},{"id":"0039","dir":"面试题","name":"Vue","title":"Vue","desc":"vue面试题vue从0到1自己构架一个vue项目，说说有哪些步骤、哪些重要插件、目录结构你会怎么组织你知道vue的模板语法用的是哪个web模板引擎的吗？说说你对这模板引擎的理解你知道v-model的原","url":"/article?id=0039"},{"id":"0040","dir":"面试题","name":"Webpack","title":"Webpack","desc":"工程化题目汇总说下 webpack 的 loader 和 plugin 的区别，都使用过哪些 loader 和 plugin介绍下 webpack，并说下 Webpack 的构建流程说下 tree-s","url":"/article?id=0040"},{"id":"0041","dir":"面试题","name":"请求","title":"请求","desc":"多个请求，返回数据共用一个面板（返回数据展示在同一个地方），先发起的后响应，如何解决","url":"/article?id=0041"},{"id":"0042","dir":"面试题","name":"项目","title":"项目","desc":"大流量下前端页面优化服务器瘫痪，前端请求不到数据，对前端页面的容错容灾有更高的要求大流量意味着各种终端都可能存在，高中低端机适配，兼容性的要求服务器压力大，前端需要做一些措施,前端层面缓解服务器压力的","url":"/article?id=0042"}]}]