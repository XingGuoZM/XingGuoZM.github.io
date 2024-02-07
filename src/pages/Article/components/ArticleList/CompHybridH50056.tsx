
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
    return <div style={{fontSize:'0.26rem'}} dangerouslySetInnerHTML={{__html:"<ul>\n<li>h5离线包的原理</li>\n<li>客户端根据什么拦截静态资源请求</li>\n<li>jsbridge的原理，这套方案的优缺点？安全漏洞？</li>\n<li>怎么判断webview是否已经加载完成</li>\n<li>h5和客户端通信原理</li>\n</ul>\n<h2>hybrid h5</h2>\n<p>app内嵌h5的混合开发模式是通过客户端提供webview来装载渲染我们的html页面。</p>\n<p>相关问题可以分为以下几类</p>\n<h3>第一类：适配相关</h3>\n<ol>\n<li>\n<p>1px问题</p>\n</li>\n<li>\n<p>响应式布局</p>\n</li>\n<li>\n<p>iPhoneX 顶部刘海、底部白底空白栏适配\n表现：头部刘海两侧区域或者底部区域，出现刘海遮挡文字，或者呈现黑底或白底空白区域。\n原因：iPhone X 以及它以上的系列，都采用刘海屏设计和全面屏手势。头部、底部、侧边都需要做特殊处理。才能适配 iPhone X 的特殊情况\n方案：设置安全区域，填充危险区域，危险区域不做操作和内容展示。考虑转屏（横屏和竖屏），具体操作为：设置 viewport-fit 为 cover；增加适配层，使用 safe area inset 变量</p>\n</li>\n<li>\n<p>IOS上拉/下拉，顶部/底部出现白色空白\n表现：上/下拉，触发了webview的touchmove事件，导致webview被上下拖动，因此出现空白\n方案一：控制touchmove事件的触发，需要滑动的地方滑动，不需要滑动的地方禁止</p>\n</li>\n</ol>\n<pre><code>document.body.addEventListener('touchmove', \n  function(e) { \n    if(e._isScroller) return;\n     // 阻止默认事件 \n    e.preventDefault(); \n  }, \n{ passive: false });\n</code></pre>\n<p>方案二：填充空白，包装成其他功能，例如下拉可刷新页面</p>\n<h3>第二类：与native交互问题</h3>\n<ol>\n<li>保存页面为图片和二维码问题和解决方案\n表现：在工作中有需要将页面生成图片或者二维码的需求。可能我们第一想到的，交给后端来生成更简单。但是这样我们需要把页面代码全部传给后端，网络性能消耗太大。\n方案：使用 QRCode 生成二维码</li>\n</ol>\n<pre><code class=\"language-js\">import QRCode from 'qrcode';\n// 使用 async 生成图片\nconst options = {};\nconst url = window.location.href;\nasync url => {\n  try {\n    console.log(await QRCode.toDataURL(url, options))\n  } catch (err) {\n    console.error(err);\n  }\n}\n\n</code></pre>\n<p>使用htmlToCanvas 生成 canvas 画布,但是canvas在移动端生成出来的图片比较模糊，使用一个新的 canvas 方法多倍生成，放入一倍容器里面，达到更加清晰的效果，通过超链接下载图片 下载文件简单实现，更完整的实现方式之后更新</p>\n<pre><code class=\"language-js\">import html2canvas from 'html2canvas';\n\nhtml2canvas(document.body).then(function(canvas) {\n    document.body.appendChild(canvas);\n});\n\n</code></pre>\n<pre><code class=\"language-js\">const scaleSize = 2;\nconst newCanvas = document.createElement(&quot;canvas&quot;);\nconst target = document.querySelector('div');\nconst width = parseInt(window.getComputedStyle(target).width);\nconst height = parseInt(window.getComputedStyle(target).height);\nnewCanvas.width = width * scaleSize;\nnewCanvas.height = widthh * scaleSize;\nnewCanvas.style.width = width + &quot;px&quot;;\nnewCanvas.style.height =width + &quot;px&quot;;\nconst context = newCanvas.getContext(&quot;2d&quot;);\ncontext.scale(scaleSize, scaleSize);\nhtml2canvas(document.querySelector('.demo'), { canvas: newCanvas }).then(function(canvas) {\n  // 简单的通过超链接设置下载功能\n  document.querySelector(&quot;.btn&quot;).setAttribute('href', canvas.toDataURL());\n}\n\n</code></pre>\n<ol start=\"2\">\n<li>\n<p>微信公众号 H5 分享问题\n表现：在微信公众号 H5 开发中，页面内部点击分享按钮调用 SDK，方法不生效。\n方案：添加一层蒙层，做分享引导</p>\n</li>\n<li>\n<p>H5 调用 SDK 相关问题及解决方案\n表现：native和h5通信\n方案：使用 DSBridge 同时支持 iOS 与 Android</p>\n</li>\n</ol>\n<h3>第三类：体验问题</h3>\n<ol>\n<li>IOS中滑动不流畅：\n表现：滑动卡顿，没有滑动惯性，手指离开页面立即停止\n方案：</li>\n</ol>\n<pre><code> -webkit-overflow-scrolling: touch; /* 当手指从触摸屏上移开，会保持一段时间的滚动 */ \n -webkit-overflow-scrolling: auto; /* 当手指从触摸屏上移开，滚动会立即停止 */\n</code></pre>\n<ol start=\"2\">\n<li>页面件放大或缩小不确定性行为\n表现：双击/双指张开页面元素，页面会放大\n原因：HTML本身会产生放大/缩小的行为，pc端可自由控制页面的放大和缩小，但是在移动端应该禁止缩放行为\n方案：HTML中的meta元标签标准中可设置viewport属性，用来控制页面放大和缩小</li>\n</ol>\n<pre><code> <meta name=viewport \ncontent=&quot;width=device-width,\n initial-scale=1.0,\n minimum-scale=1.0 maximum-scale=1.0,\n user-scalable=no&quot;> \n</code></pre>\n<ol start=\"3\">\n<li>click 点击穿透与延迟\n点击延迟表现：监听元素click事件之后，触发时间会延迟300ms；点击蒙层，蒙层消失后，下层元素点击触发\n原因：iOS 中的 safari，为了实现双击缩放操作，在单击 300ms 之后，如果未进行第二次点击，则执行 click 单击操作。也就是说来判断用户行为是否为双击产生的。但是，在 App 中，无论是否需要双击缩放这种行为，click 单击都会产生 300ms 延迟。</li>\n</ol>\n<p>点击穿透表现：touch事件和click事件混用导致，双层元素叠加时，在上层元素上绑定 touch 事件，下层元素绑定 click 事件。由于 click 发生在 touch 之后，点击上层元素，元素消失，下层元素会触发 click 事件，由此产生了点击穿透的效果</p>\n<p>方案一：使用touchstart替代click\n方案二：使用fastclick库</p>\n<ol start=\"4\">\n<li>软键盘弹出将页面顶起来、收起未回落问题\n表现：Android 手机中，点击 input 框时，键盘弹出，将页面顶起来，导致页面样式错乱。移开焦点时，键盘收起，键盘区域空白，未回落。\n原因：我们在app 布局中会有个固定的底部。安卓一些版本中，输入弹窗出来，会将解压 absolute 和 fixed 定位的元素。导致可视区域变小，布局错乱</li>\n</ol>\n<p>方案：软键盘将页面顶起来的解决方案，主要是通过监听页面高度变化，强制恢复成弹出前的高度</p>\n<pre><code class=\"language-js\">// 记录原有的视口高度\nconst originalHeight = document.body.clientHeight || document.documentElement.clientHeight;\n\nwindow.onresize = function(){\n  var resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;\n  if(resizeHeight < originalHeight ){\n    // 恢复内容区域高度\n    // const container = document.getElementById(&quot;container&quot;)\n    // 例如 container.style.height = originalHeight;\n  }\n}\n</code></pre>\n<p>键盘回落的问题主要集中在iOS 12+ 和 wechat 6.7.4+</p>\n<pre><code class=\"language-js\">const isWechat = window.navigator.userAgent.match(/MicroMessenger\\/([\\d\\.]+)/i);\nif (!isWechat) return;\nconst wechatVersion = wechatInfo[1];\nconst version = (navigator.appVersion).match(/OS (\\d+)_(\\d+)_?(\\d+)?/);\n \n // 如果设备类型为iOS 12+ 和wechat 6.7.4+，恢复成原来的视口\nif (+wechatVersion.replace(/\\./g, '') >= 674 &amp;&amp; +version[1] >= 12) {\n  //window.scrollTo(0, clientHeight)标识恢复成原来的视口\n  window.scrollTo(0, Math.max(document.body.clientHeight, document.documentElement.clientHeight));\n}\n\n</code></pre>\n<h3>第四类：调试问题</h3>\n<ol>\n<li>H5 调试相关方案与策略（vconsole）\n表现：调试代码一般就是为了查看数据和定位 bug。分为两种场景，一种是开发和测试时调试，一种是生产环境上调试。</li>\n</ol>\n<h3>h5+native模式有何优缺点</h3>\n<h3>h5和native如何通信交互</h3>\n<h3>离线包和静态构建</h3>\n<p>hybrid h5优化的两大利器，\n离线包\n客户端提供离线包容器，包含两个功能，资源缓存（包括缓存策略、更新策略等）和拦截请求判断是否有本地缓存。离线包平台\n静态构建\nreact原生的ssr和webpack插件html-webpack-plugin组合，在构建阶段将静态内容打包植入html</p>\n<h3>参考</h3>\n<ul>\n<li><a href=\"https://juejin.cn/post/6844904024790007815\">吃透移动端 H5 与 Hybrid｜实践踩坑12种问题汇总</a></li>\n</ul>\n"}}></div>
  }
  