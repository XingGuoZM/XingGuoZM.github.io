/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/common/PageWithHeader/index.tsx":
/*!*********************************************!*\
  !*** ./src/common/PageWithHeader/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageWithHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PromisifyModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/PromisifyModal */ "./src/components/PromisifyModal/index.tsx");
/* harmony import */ var _common_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/Header */ "./src/common/Header/index.tsx");
/* harmony import */ var _common_PageContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/PageContainer */ "./src/common/PageContainer/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function PageWithHeader(_ref) {
  var children = _ref.children,
      type = _ref.type;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utils__WEBPACK_IMPORTED_MODULE_4__.getRootStyleProperty)('--theme-color')),
      _useState2 = _slicedToArray(_useState, 2),
      theme = _useState2[0],
      setTheme = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_PromisifyModal__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      theme: theme,
      setTheme: setTheme
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_PageContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: type
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: type
  }), children));
}

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/CompCSS0032.tsx":
/*!******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/CompCSS0032.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<ul>\n<li>css实现一个扇形</li>\n</ul>\n<pre><code class=\"language-html\"><!DOCTYPE html>\n<html lang=&quot;en&quot;>\n\n<head>\n  <meta charset=&quot;utf-8&quot; />\n  <title>画一个️️扇形</title>\n  <style>\n    * {\n      margin: 0;\n      padding: 0;\n    }\n\n    .sector-wrap {\n      width: 100vw;\n      height: 200px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n    }\n\n    .sector1 {\n      width: 50px;\n      height: 50px;\n      border-bottom-right-radius: 50px;\n      background-color: #110099;\n    }\n\n    .sector2 {\n      width: 200px;\n      height: 100px;\n    }\n\n    .sector3 {\n      width: 200px;\n      height: 100px;\n    }\n  </style>\n</head>\n\n<body>\n  <section class=&quot;sector-wrap&quot;>\n    <h1>方法一：border-radius</h1>\n    <div class=&quot;sector1&quot;></div>\n  </section>\n  <section class=&quot;sector-wrap&quot;>\n    <h1>方法二：canvas+arc</h1>\n    <canvas id=&quot;sector2&quot; width='200' height='100'></canvas>\n  </section>\n  <section class=&quot;sector-wrap&quot;>\n    <h1>方法三：svg+path</h1>\n    <svg width='200' height='100'>\n      <path xmlns=&quot;http://www.w3.org/2000/svg&quot; fill=&quot;#110099&quot; d=&quot;M 50 50 \n      A 50 50 90 0 0 50 -50 \n      L 50 50  \n      Z&quot; />\n    </svg>\n  </section>\n  <script>\n    const drawSector = function () {\n      const ctx = document.querySelector('#sector2').getContext('2d');\n      ctx.moveTo(50, 50);\n      ctx.arc(50, 50, 50, 0, 90 * Math.PI / 180);\n      ctx.lineTo(50, 50);\n      ctx.fillStyle = '#110099';\n      ctx.fill();\n    }\n    drawSector();\n\n  </script>\n</body>\n\n</html>\n</code></pre>\n<ul>\n<li>css实现一个三角形</li>\n</ul>\n<pre><code class=\"language-html\"><!DOCTYPE html>\n<html lang=&quot;en&quot;>\n\n<head>\n  <meta charset=&quot;utf-8&quot; />\n  <title>画一个️️三角形</title>\n  <style>\n    .triangle-sec {\n      width: 100%;\n      height: 80px;\n      display: flex;\n      justify-content: center;\n    }\n\n    .triangle1-wrap {\n      width: 50px;\n      height: 50px;\n      overflow: hidden;\n    }\n\n    .triangle1 {\n      width: 50px;\n      height: 50px;\n      background-color: red;\n      transform: rotateZ(45deg);\n      margin-top: 35px;\n    }\n\n    .triangle2 {\n      width: 0px;\n      height: 0px;\n      border-top: solid 50px blue;\n      border-bottom: solid 50px transparent;\n      border-left: solid 50px transparent;\n      border-right: solid 50px transparent;\n    }\n\n    .triangle3-wrap {\n      width: 100px;\n      height: 100px;\n      position: relative;\n      overflow: hidden;\n    }\n\n    .triangle3 {\n      width: 50px;\n      height: 50px;\n      position: absolute;\n      background-color: teal;\n    }\n\n    .triangle4 {\n      width: 50px;\n    }\n\n    .triangle5 {\n      width: 50px;\n      height: 50px;\n      background-image: linear-gradient(45deg, #fff 50%, #2980B9 0);\n    }\n\n    .triangle6 {\n      width: 50px;\n      height: 50px;\n      position: relative;\n      overflow: hidden;\n    }\n\n    .triangle6:after {\n      content: &quot;&quot;;\n      width: 50px;\n      height: 50px;\n      background-color: brown;\n      transform: rotate(45deg);\n      position: absolute;\n      left: 35px;\n      top: 0px;\n    }\n\n    .triangle7 {\n      width: 50px;\n      height: 50px;\n      background-image: url('https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1602140892677&amp;di=754062cafde7897f9550b7691882b17b&amp;imgtype=0&amp;src=http%3A%2F%2Ftrademark-pics-search.oss-cn-shanghai.aliyuncs.com%2Fsmall%2Ft4517751695000576.jpg');\n      background-size: 100% 100%;\n    }\n\n    .triangle8 {\n      font-size: 50px;\n      color: darkmagenta;\n    }\n  </style>\n</head>\n\n<body>\n  <section class=&quot;triangle-sec&quot;>\n    <h1>方法一: transform rotateZ</h1>\n    <div class='triangle1-wrap'>\n      <div class='triangle1'></div>\n    </div>\n  </section>\n  <section class=&quot;triangle-sec&quot;>\n    <h1>方法二:border</h1>\n    <div class='triangle2'></div>\n  </section>\n  <section class=&quot;triangle-sec&quot;>\n    <h1>方法三:canvas</h1>\n    <canvas id='triangle3' width='50' height='50'></canvas>\n  </section>\n  <section class=&quot;triangle-sec&quot;>\n    <h1>方法四:svg</h1>\n    <svg class=&quot;triangle4&quot;>\n      <path name=&quot;三角形&quot; fill=&quot;green&quot; d=&quot;M50 0 L0 50 L50 50  Z&quot; />\n    </svg>\n  </section>\n  <section class=&quot;triangle-sec&quot;>\n    <h1>方法五:渐变</h1>\n    <div class=&quot;triangle5&quot;></div>\n  </section>\n  <section class=&quot;triangle-sec&quot;>\n    <h1>方法六:伪类</h1>\n    <div class=&quot;triangle6&quot;></div>\n  </section>\n\n  <section class=&quot;triangle-sec&quot;>\n    <h1>方法七:background-image</h1>\n    <div class=&quot;triangle7&quot;></div>\n  </section>\n\n  <section class=&quot;triangle-sec&quot;>\n    <h1>方法八:字体icon</h1>\n    <div class=&quot;triangle8&quot;>▲</div>\n  </section>\n\n  <script>\n    const triangle = document.getElementById('triangle3');\n    const ctx = triangle.getContext('2d');\n    ctx.beginPath();\n    ctx.moveTo(50, 0);\n    ctx.lineTo(0, 50);\n    ctx.lineTo(50, 50);\n    ctx.fillStyle = 'aqua';\n    ctx.fill(); \n  </script>\n</body>\n\n</html>\n</code></pre>\n<ul>\n<li>css实现一个水波纹效果</li>\n</ul>\n<pre><code class=\"language-html\"><!DOCTYPE html>\n<html lang=&quot;en&quot;>\n\n<head>\n  <meta charset=&quot;utf-8&quot; />\n  <title>实现水波纹</title>\n  <style>\n    .wave-wrap {\n      width: 500px;\n      height: 500px;\n      border-radius: 50%;\n      position: relative;\n    }\n\n    .wave {\n      width: 500px;\n      height: 500px;\n      border-radius: 50%;\n      opacity: 0;\n      position: absolute;\n      animation: waveAnim 4s infinite;\n    }\n\n    .w1 {\n      background-color: gold;\n      animation-delay: 0s;\n    }\n\n    .w2 {\n      background-color: green;\n      animation-delay: 1s;\n    }\n\n    .w3 {\n      background-color: red;\n      animation-delay: 2s;\n    }\n\n    .w4 {\n      background-color: blue;\n      animation-delay: 3s;\n    }\n\n    @-webkit-keyframes waveAnim {\n      from {\n        opacity: 1;\n        width: 0;\n        height: 0;\n        top: 50%;\n        left: 50%;\n      }\n\n      to {\n        opacity: 0;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n      }\n    }\n  </style>\n</head>\n\n<body>\n  <div class='wave-wrap'>\n    <div class='wave w1'></div>\n    <div class='wave w2'></div>\n    <div class='wave w3'></div>\n    <div class='wave w4'></div>\n  </div>\n</body>\n\n</html>\n</code></pre>\n<ul>\n<li>动手实现一个左右固定100px，中间自适应的三列布局？(至少三种)</li>\n</ul>\n<pre><code class=\"language-html\"><html>\n\n<head>\n  <meta charset=&quot;utf-8&quot; />\n  <title>实现三列布局</title>\n  <style>\n    * {\n      margin: 0;\n      padding: 0;\n    }\n\n    .m {\n      width: 100vw;\n      height: 200px;\n    }\n\n    .m1 {\n      display: flex;\n    }\n\n    .m1>.left {\n      width: 100px;\n      height: 100%;\n      background-color: red;\n    }\n\n    .m1>.middle {\n      width: calc(100% - 200px);\n      background-color: green;\n    }\n\n    .m1>.right {\n      width: 100px;\n      height: 100%;\n      background-color: red;\n    }\n\n    .m2 {\n      position: relative;\n      margin-top: 20px;\n    }\n\n    .m2>.left {\n      width: 100px;\n      height: 100%;\n      background-color: red;\n      position: absolute;\n      left: 0;\n      top: 0;\n    }\n\n    .m2>.middle {\n      width: calc(100% - 200px);\n      height: 100%;\n      background-color: green;\n      position: absolute;\n      left: 100px;\n    }\n\n    .m2>.right {\n      width: 100px;\n      height: 100%;\n      background-color: red;\n      position: absolute;\n      right: 0;\n    }\n\n    .m3 {\n      margin-top: 20px;\n    }\n\n    .m3>.left {\n      width: 100px;\n      height: 100%;\n      background-color: red;\n      float: left;\n    }\n\n    .m3>.middle {\n      width: calc(100% - 200px);\n      height: 100%;\n      background-color: green;\n      float: left;\n    }\n\n    .m3>.right {\n      width: 100px;\n      height: 100%;\n      background-color: red;\n      float: left;\n    }\n  </style>\n</head>\n\n<body>\n  <section class='m m1'>\n    <div class='left'></div>\n    <div class='middle'></div>\n    <div class='right'></div>\n  </section>\n\n  <section class='m m2'>\n    <div class='left'></div>\n    <div class='middle'></div>\n    <div class='right'></div>\n  </section>\n  <section class='m m3'>\n    <div class='left'></div>\n    <div class='middle'></div>\n    <div class='right'></div>\n  </section>\n</body>\n\n</html>\n</code></pre>\n<ul>\n<li>屏幕占满和未占满的情况下，使 footer 固定在底部，尽量多种方法</li>\n</ul>\n<pre><code class=\"language-html\"><html>\n\n<head>\n  <style>\n    * {\n      margin: 0;\n      padding: 0;\n    }\n\n    .main {\n      min-height: 100%;\n      padding-bottom: 50px;\n      box-sizing: border-box;\n    }\n\n    .content {\n      width: 100%;\n      height: 500px;\n      background-color: lightblue;\n    }\n\n    footer {\n      width: 100vw;\n      height: 50px;\n      background-color: green;\n      margin-top: -50px;\n    }\n  </style>\n</head>\n\n<body>\n  <div class='main'>\n    <div class='content'></div>\n\n  </div>\n  <footer></footer>\n</body>\n\n</html>\n</code></pre>\n<ul>\n<li>css 实现多列等高布局，要求元素实际占用的高度以多列中较高的为准</li>\n<li>怎样用 css 实现一个弹幕的效果，动手实现一下</li>\n</ul>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/CompCss0055.tsx":
/*!******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/CompCss0055.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<ul>\n<li>盒子模型</li>\n<li>BFC</li>\n<li>position</li>\n<li>flex</li>\n<li>z-index</li>\n<li>transform</li>\n</ul>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/CompDNS和CDN0048.tsx":
/*!**********************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/CompDNS和CDN0048.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h3>浏览器中输入URL到返回页面的全过程</h3>\n<ol>\n<li>根据域名，进行DNS域名解析</li>\n<li>拿到解析的IP地址，建立TCP连接</li>\n<li>向IP地址发送HTTP请求</li>\n<li>服务器处理请求</li>\n<li>返回响应结果</li>\n<li>关闭TCP连接</li>\n<li>浏览器解析HTML</li>\n<li>浏览器布局渲染</li>\n</ol>\n<h3>DNS起源</h3>\n<ol>\n<li>\n<p>网络出现早期是使用IP地址通信的，那时就几台主机。</p>\n</li>\n<li>\n<p>随着接入网络的主机越来越多，这种数字标识的地址非常不便于记忆。UNIX上就出现了hosts文件（Linux和Windows系统上继承保留了这个文件）。这个文件记录了这主机名称和IP地址的对应表，只要输入主机名，系统就会加载hosts文件并查找对应关系，找到对应的IP就能访问对应的主机了。</p>\n</li>\n<li>\n<p>随着主机的数量进一步增多，无法保证所有人都能拿到统一的最新的hosts文件，于是就出现了在文件服务器上集中存放hosts文件，以供下载使用。</p>\n</li>\n<li>\n<p>互联网规模进继续扩大，这种方式也不堪重负，而且把所有地址解析记录形成的文件都同步到所有客户端也不是一个好办法。这时就出现了DNS，随着解析规模的继续扩大，DNS也在不断的演化，直到现在的多层体系</p>\n</li>\n</ol>\n<p>DNS（域名系统）是应用层协议，运行在UDP协议之上，使用端口53。因特网上作为域名和ip地址相互映射的一个分布式数据库，能够使用户更方便的访问互联网，而不用去记住能够被机器直接读取的IP数串</p>\n<p>DNS类似于电话本的作用，我想给一个朋友小明打电话，而且我的朋友很多记不住所有人的电话，那么我就用一个电话本把名字和电话记录下来，需要打电话的时候查看电话本就行。姓名就是域名，电话号码就是ip地址，DNS服务器就是我的电话本</p>\n<h3>DNS域名如何解析的？</h3>\n<p>DNS的分布数据库是以域名为索引的，每个域名其实是一颗很大的逆向树路径。大概查找过程为浏览器缓存-> 本地hosts文件->本地DNS解析器->本地DNS服务器->其他域名服务器。详细过程如下：</p>\n<ol>\n<li>\n<p>在浏览器输入image.baidu.com域名，操作系统会先检查自己本地的hosts文件是否有这个网址映射关系，如果有，就先调用这个IP地址映射，完成域名解析</p>\n</li>\n<li>\n<p>如果hosts里没有这个域名的映射，则查找本地DNS解析器缓存，是否有这个网址映射关系，如果有，则直接返回，完成域名解析</p>\n</li>\n<li>\n<p>如果hosts和本地DNS解析器缓存都没有相应的网址映射关系，首先会找TCP/IP参数中设置的首选DNS服务器，在此我们叫它本地DNS服务器，此服务器收到查询时，如果要查找的域名，包含在本地配置区域资源中，则返回解析结果给客户端，完成域名解析，此解析具有权威性</p>\n</li>\n<li>\n<p>如果要查询的域名，不在本地DNS服务器区域解析，但该服务器缓存了此网址的映射关系，则调用这个IP地址映射，完成域名解析，此解析不具有权威性。</p>\n</li>\n<li>\n<p>如果本地DNS服务器本地区域文件和缓存解析都失效，则根据本地DNS服务器的设置（是否设置转发器）进行查询，如果未用转发模式，本地DNS就把请求发至13台根DNS，根DNS服务器收到请求之后会判断这个域名（.com）是谁来授权管理，并会返回一个负责该顶级域名服务器的IP。本地DNS服务器接收到IP信息之后，将会负责联系负责.com域的这台服务器，这台负责.com域的服务器接收到请求之后，如果自己无法解析，它就会找一个管理.com域的下一级DNS服务器地址（baidu.com）给本地DNS服务器，当本地DNS服务器收到这个地址后，就会找image.baidu.com域服务器，重复上面的动作，直至找到image.baidu.com主机</p>\n</li>\n<li>\n<p>如果用的是转发模式，此DNS服务器就会把请求转发至上一级DNS服务器，由上一级服务器进行解析，上一级服务器如果不能解析，或找根DNS或转发至上上级，以此循环。</p>\n</li>\n</ol>\n<p>递归查询，直到查找完为止，根域名服务器 -> 顶级域名服务器 -> 二级域名服务器...</p>\n<h3>DNS为啥使用UDP协议作为传输层协议？</h3>\n<p>为了避免使用 TCP 协议时造成的连接时延</p>\n<ul>\n<li>为了得到一个域名的IP地址往往会向多个域名服务器查询，如果使用TCP协议，每次请求都会存在连接时延，这使得DNS服务变慢</li>\n<li>大多数的地址查询请求，都是浏览器请求页面时发出，这样会造成页面的等待时间过长</li>\n</ul>\n<p>容易产生DNS劫持，使用HTTPDNS自建域名解析</p>\n<h3>DNS服务器类型</h3>\n<p>DNS规范定义了两种类型的DNS服务器，一个叫主DNS服务器，一个叫辅助DNS服务器。在一个区中主DNS服务器从自己本机的数据文件中读取该区的DNS数据信息，而辅助DNS服务器则从区的主DNS服务器中读取该区的DNS数据信息。当一个辅助DNS启动时，他需要与主DNS服务器通信，并加载数据信息，这就叫区传送，使用TCP协议</p>\n<p>为什么域名解析用UDP？为什么区域复制用TCP？</p>\n<h3>dig命令</h3>\n<p>查询域名信息</p>\n<p>查询域名解析网站\n<a href=\"https://tool.chinaz.com/dns\">chinaz</a>、<a href=\"https://www.ipaddress.com/\">ipaddress</a></p>\n<h3>DNS实现负载均衡</h3>\n<p>大型网站都会使用多台服务器提供服务，因此一个域名可能会对应多个服务器地址。每当用户发起网站域名的DNS请求时，DNS服务器返回这个域名所对应服务器所对应服务器IP地址集合，在每个应答中会循环这些IP地址的顺序，用户一般会选择排在前面的地址发送请求。以此用户的请求均衡的分配到不同的服务器上，即实现了负载均衡。</p>\n<h3>DNS实操</h3>\n<p>github打开太慢，你有什么办法打开快一点</p>\n<p>CDN（内容分发网络）</p>\n<h3>参考</h3>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/CompHTTP缓存0049.tsx":
/*!*********************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/CompHTTP缓存0049.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>HTTP缓存</h1>\n<p>Expires</p>\n<p>SWR和Cache-Control</p>\n<p>from disk cache &amp; from memory cache</p>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/CompHTTP网络的发展0050.tsx":
/*!************************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/CompHTTP网络的发展0050.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>HTTP</h1>\n<h2>关键词</h2>\n<ul>\n<li><a href=\"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Resources_and_specifications\">http rfc 规范</a></li>\n</ul>\n<h2>HTTP起源</h2>\n<p>Tim Berners-Lee博士在1989年发表一篇论文，提出了万维网项目，是一个通过网络传输超文本的系统。为了实现这个系统，需要确定传输的格式（HTML）、传输的协议（HTTP）、web客户端（浏览器）和web服务器（httpd）。</p>\n<p>HTTP发展至今共经历了HTTP0.9、HTTP1.0、HTTP1.1和HTTP2.0共4个大版本</p>\n<pre><code>0.9版本完成了基本功能实现\n1.0版本主要扩展性\n1.1版本定义了规范，制定了标准\n2.0版本主要体现在传输效率优化上\n</code></pre>\n<h3>HTTP、HTTPS</h3>\n<p>HTTP协议是基于TCP/IP的可靠传输的应用层协议，其特点是简单、扩展性强、无状态、明文传输、队头阻塞，HTTP在版本（1.0、1.1、2.0）迭代中都进行了处理解决，各版本特点如下：<br>\nHTTP1.0</p>\n<pre><code>1. 可以发送任何格式的内容，文本、视频、图像、二进制等\n2. 不支持断点续传，每次都会传送全部的页面和数据\n3. 只使用header中If-Modified-Since和Expire作为缓存失效标准\n4. 请求header中没有传递主机名（hostname）\n</code></pre>\n<p>HTTP1.1</p>\n<pre><code>1. 引入持久连接，即TCP连接默认不关闭，可以被多个请求复用，不用声明Connection:keep-alive,长连接的时长可以通过请求头中的keep-alive设置\n2. HTTP管道\n客户端不需要等待服务器响应请求之后，才能发送后续的请求。但是HTTP管道仍然要求服务器按照接收到的请求的顺序进行响应，因此，如果管道中的单个请求执行缓慢，则对客户端的所有后续响应都将相应的延迟，这个问题就是队头阻塞。当时的解决方案是在客户端的每台主机上建立多个TCP连接，同时设置了最大可以同时连接的限制，以达到微妙的平衡。\n\n3. 增加E-tag、If-Modified-Since、If-Match、If-None-Match\n4. 支持断点续传，通过请求头中的Range来实现\n5. 使用虚拟网络，在一台物理服务器上可以存在多个虚拟主机，并且他们共享一个IP地址\n6. 新增方法：PUT、PATCH、OPTIONS、DELETE\n</code></pre>\n<p>HTTP2.0</p>\n<ol>\n<li>\n<p>二进制分帧\n采用二进制格式，全部传输01串，便于机器解码，这样的报文格式被拆分为一个个二进制帧，用Header帧存放头部字段，Data帧存放请求体数据</p>\n</li>\n<li>\n<p>头部压缩：HPACK算法+哈夫曼编码</p>\n</li>\n</ol>\n<p>为什么要压缩？在HTTP/1.x中，HTTP请求和响应都是由状态行、请求/响应头部、消息主体三部分组成的。一般来说，消息主体都会经过gzip压缩，或者本身就是经过压缩后的二进制文件（如图片、视频），但是状态行和头部却没有经过任何压缩，直接以纯文本传输。随着web功能的越来越复杂，请求数量也会越来越多，大量的请求导致消耗在请求头部的流量变多，每次都要传输UserAgent、Cookie这类不频繁变动的字段内容，完全是一种浪费，这导致传输头部的网络开销可能比消息主体还要大，因此就有了头部压缩技术，HTTP/2.0使用的是HPACK算法进行压缩</p>\n<p>HPACK，在支持HTTP/2.0的浏览器和服务端之间：</p>\n<ol>\n<li>\n<p>维护一份相同的静态字典，包含常见的头部名称，以及特别常见的头部名称与值的组合\n对于完全匹配的头部键值对，例如:method:GET，可以直接使用一个字符表示\n对于头部名称可以匹配的键值对，例如cookie:xxx，可以将名称使用一个字符表示</p>\n</li>\n<li>\n<p>维护一份相同的动态字典，可以动态添加内容</p>\n</li>\n<li>\n<p>支持基于静态哈夫曼表的哈夫曼编码，<a href=\"https://zhuanlan.zhihu.com/p/390459645\">哈夫曼编码的原理</a>即统计所有出现字符的次数，然后根据字符出现次数构建一颗哈夫曼树，哈夫曼树的特点就是出现频率越高的字符越靠近根结点，最后以哈夫曼树进行编码/解码，编码的过程即沿着树向要编码的字符前进，如果走了左节点则标记为0，走了右节点则标记为1，从根结点到叶子节点的路径就是该字符的编码。出现字符次数越多的，编码越短，最终压缩之后的编码越短，起到压缩的目的。gzip就使用了哈夫曼编码进行压缩</p>\n</li>\n<li>\n<p>多路复用\nHTTP/1.x中，如果想并发多个请求，必须使用多个TCP连接，且浏览器为了控制资源还会对单个域名有6-8个的TCP连接请求限制\nHTTP/2.0中，同域名下的所有通信都是在单个连接下完成的，单个连接可以承接任意数量的双向数据流，数据流以消息的形式发送，而消息又由一个或多个帧组成，多个帧之间可以乱序发送，根据帧首部的流标识可以重新组装，即流标识符（Stream ID），有了它，接收双方就能从乱序的二进制帧中选择ID相同的帧，按照顺序组装成请求/响应报文</p>\n</li>\n</ol>\n<p>在TCP协议层上仍然存在这类似的队头阻塞阻塞的问题，当一个TCP包在传输过程中丢失时，在服务器重新发送丢失的包之前，接收方无法确认传入的包，由于TCP在设计上不受诸如HTTP之类的高级协议的影响，因此一个丢失的数据包将阻塞所有正在传输的HTTP请求的流，直到丢失的数据重新被发送</p>\n<ol start=\"4\">\n<li>\n<p>服务器推送</p>\n</li>\n<li>\n<p>请求优先级</p>\n</li>\n</ol>\n<p>HTTP/3.0<br>\nHTTP/2.0下使用多路复用，同一域名下只需要使用一个TCP连接，但是当这个TCP连接出现丢包的情况，就会导致整个TCP开始等待重传，也导致后面的数据都被阻塞了。出现包阻塞的原因是因为底层TCP协议导致的问题，Google基于UDP协议推出一个QUIC协议，使用在HTTP/3上。QUIC的优点有：</p>\n<ul>\n<li>避免包阻塞</li>\n<li>快速重启会话</li>\n</ul>\n<h3>HTTPS</h3>\n<p>HTTPS = HTTP + SSL/TLS。TLS/SSL的功能实现主要依赖于三类基本算法：散列函数、对称加密和非对称加密。使用非对称加密实现身份认证和密钥协商，对称加密算法采用协商的密钥对数据加密，基于散列函数验证数据的完整性。</p>\n<p>SSL（Secure Socket Layer）安全套接层，是1994年由Netscape公司设计的一套协议，并于1995年发布3.0版本。TLS（Transport Layer Security）传输安全是IETF在SSL3.0基础上设计的协议，实际相当于SSL的后续版本。</p>\n<p>SSL/TLS工作原理：用CA证书认证身份（证书签名）及传递公钥（服务端），用非对称加密算法，交换用于对称加密的密钥，通过对称加密算法，加密正常的网络通信。</p>\n<p>工作过程：\n客户端发起HTTP请求，服务端发送CA证书（证书中含有证书签名和服务端公钥），客户端认证真伪，然后解密出服务端公钥\n用公钥加密自己生成的对称加密的密钥，发送给服务端</p>\n<h3>加密算法</h3>\n<p>对称加密算法，DES、AES\nDES（Data Encryption Standard）原理：利用56+8奇偶校验位（第8、16、24、32、40、48、56、64）=64位的密钥对以64为单位的块数据进行加解密。\nAES（Advanced Encryption Standard）原理：AES算法主要有四种操作处理，分别是密钥加法层(也叫轮密钥加，英文Add Round Key)、字节代换层(SubByte)、行位移层(Shift Rows)、列混淆层(Mix Column)。而明文x和密钥k都是由16个字节组成的数据(当然密钥还支持192位和256位的长度，暂时不考虑)，它是按照字节的先后顺序从上到下、从左到右进行排列的。</p>\n<p>RSA经典的非对称加密算法\n原理：给定连个素数，很容易得出他们的乘积，但是反过来，给定出他们的乘积，却很难得到这两个素数。如果能解决大整数（如几百位的整数）分解的快速方法，那么RSA算法将轻易被破解</p>\n<p>SSH工作原理即使用非对称加密来保证安全性，在传输过程中数据是加密的，使用最多的是安全登录和文件传输</p>\n<h3>中间人攻击</h3>\n<p>中间人攻击发生在HTTPS 建立连接请求时，中间人服务器拦截服务器的公钥证书，并把自己的公钥证书发送给客户端，客户端验证证书真伪，然后从证书拿到公钥，把数据发送给中间人，中间人再和服务器通信。后续每次通信过程多会经过中间人服务器掉包，</p>\n<p>抓包工具 Fiddler 之所以可以明文看到 HTTPS 数据，工作原理与中间人一致的</p>\n<h3>状态码</h3>\n<p>1XX：接受的请求正在处理，信息类状态码\n2XX：成功\n3XX：重定向\n4XX：客户端错误\n5XX：服务器错误</p>\n<p>缓存</p>\n<pre><code>cache-control\nexpire\n</code></pre>\n<p>跨域和浏览器同源策略</p>\n<p>Cookie（Session）和Token</p>\n<p>ASCII编码</p>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/CompHooks0012.tsx":
/*!********************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/CompHooks0012.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>Hooks</h1>\n<h3>来源</h3>\n<p>为细粒度的代码复用，不和组件复用捆绑在一起。HOC和Render Props都是基于组件的组合方案，先把要复用的逻辑封装成组件，再利用组件复用机制实现逻辑复用。将函数当成最小的代码复用单元同时内置一些模式简化状态逻辑复用</p>\n<h3>Hook不足</h3>\n<ol>\n<li>额外学习成本，函数组件和类组件的比较</li>\n<li>写法限制，增加重构成本</li>\n<li>破坏了PureComponent、React.memo浅比较的性能优化效果</li>\n<li>闭包场景可能引用到旧的state、props值</li>\n<li>内部实现上不直观，依赖一份可变的全局状态，不再那么pure</li>\n<li>React.memo并不能完全替代ShouldComponentUpdate（拿不到state change，只针对props change）</li>\n<li>useState API设计上不完美（初始化、可选链、闭包陷阱、引用类型、多个状态）</li>\n</ol>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/CompHybridH50056.tsx":
/*!***********************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/CompHybridH50056.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<ul>\n<li>h5离线包的原理</li>\n<li>客户端根据什么拦截静态资源请求</li>\n<li>jsbridge的原理，这套方案的优缺点？安全漏洞？</li>\n<li>怎么判断webview是否已经加载完成</li>\n<li>h5和客户端通信原理</li>\n</ul>\n<h2>hybrid h5</h2>\n<p>app内嵌h5的混合开发模式是通过客户端提供webview来装载渲染我们的html页面。</p>\n<p>相关问题可以分为以下几类</p>\n<h3>第一类：适配相关</h3>\n<ol>\n<li>\n<p>1px问题</p>\n</li>\n<li>\n<p>响应式布局</p>\n</li>\n<li>\n<p>iPhoneX 顶部刘海、底部白底空白栏适配\n表现：头部刘海两侧区域或者底部区域，出现刘海遮挡文字，或者呈现黑底或白底空白区域。\n原因：iPhone X 以及它以上的系列，都采用刘海屏设计和全面屏手势。头部、底部、侧边都需要做特殊处理。才能适配 iPhone X 的特殊情况\n方案：设置安全区域，填充危险区域，危险区域不做操作和内容展示。考虑转屏（横屏和竖屏），具体操作为：设置 viewport-fit 为 cover；增加适配层，使用 safe area inset 变量</p>\n</li>\n<li>\n<p>IOS上拉/下拉，顶部/底部出现白色空白\n表现：上/下拉，触发了webview的touchmove事件，导致webview被上下拖动，因此出现空白\n方案一：控制touchmove事件的触发，需要滑动的地方滑动，不需要滑动的地方禁止</p>\n</li>\n</ol>\n<pre><code>document.body.addEventListener('touchmove', \n  function(e) { \n    if(e._isScroller) return;\n     // 阻止默认事件 \n    e.preventDefault(); \n  }, \n{ passive: false });\n</code></pre>\n<p>方案二：填充空白，包装成其他功能，例如下拉可刷新页面</p>\n<h3>第二类：与native交互问题</h3>\n<ol>\n<li>保存页面为图片和二维码问题和解决方案\n表现：在工作中有需要将页面生成图片或者二维码的需求。可能我们第一想到的，交给后端来生成更简单。但是这样我们需要把页面代码全部传给后端，网络性能消耗太大。\n方案：使用 QRCode 生成二维码</li>\n</ol>\n<pre><code class=\"language-js\">import QRCode from 'qrcode';\n// 使用 async 生成图片\nconst options = {};\nconst url = window.location.href;\nasync url => {\n  try {\n    console.log(await QRCode.toDataURL(url, options))\n  } catch (err) {\n    console.error(err);\n  }\n}\n\n</code></pre>\n<p>使用htmlToCanvas 生成 canvas 画布,但是canvas在移动端生成出来的图片比较模糊，使用一个新的 canvas 方法多倍生成，放入一倍容器里面，达到更加清晰的效果，通过超链接下载图片 下载文件简单实现，更完整的实现方式之后更新</p>\n<pre><code class=\"language-js\">import html2canvas from 'html2canvas';\n\nhtml2canvas(document.body).then(function(canvas) {\n    document.body.appendChild(canvas);\n});\n\n</code></pre>\n<pre><code class=\"language-js\">const scaleSize = 2;\nconst newCanvas = document.createElement(&quot;canvas&quot;);\nconst target = document.querySelector('div');\nconst width = parseInt(window.getComputedStyle(target).width);\nconst height = parseInt(window.getComputedStyle(target).height);\nnewCanvas.width = width * scaleSize;\nnewCanvas.height = widthh * scaleSize;\nnewCanvas.style.width = width + &quot;px&quot;;\nnewCanvas.style.height =width + &quot;px&quot;;\nconst context = newCanvas.getContext(&quot;2d&quot;);\ncontext.scale(scaleSize, scaleSize);\nhtml2canvas(document.querySelector('.demo'), { canvas: newCanvas }).then(function(canvas) {\n  // 简单的通过超链接设置下载功能\n  document.querySelector(&quot;.btn&quot;).setAttribute('href', canvas.toDataURL());\n}\n\n</code></pre>\n<ol start=\"2\">\n<li>\n<p>微信公众号 H5 分享问题\n表现：在微信公众号 H5 开发中，页面内部点击分享按钮调用 SDK，方法不生效。\n方案：添加一层蒙层，做分享引导</p>\n</li>\n<li>\n<p>H5 调用 SDK 相关问题及解决方案\n表现：native和h5通信\n方案：使用 DSBridge 同时支持 iOS 与 Android</p>\n</li>\n</ol>\n<h3>第三类：体验问题</h3>\n<ol>\n<li>IOS中滑动不流畅：\n表现：滑动卡顿，没有滑动惯性，手指离开页面立即停止\n方案：</li>\n</ol>\n<pre><code> -webkit-overflow-scrolling: touch; /* 当手指从触摸屏上移开，会保持一段时间的滚动 */ \n -webkit-overflow-scrolling: auto; /* 当手指从触摸屏上移开，滚动会立即停止 */\n</code></pre>\n<ol start=\"2\">\n<li>页面件放大或缩小不确定性行为\n表现：双击/双指张开页面元素，页面会放大\n原因：HTML本身会产生放大/缩小的行为，pc端可自由控制页面的放大和缩小，但是在移动端应该禁止缩放行为\n方案：HTML中的meta元标签标准中可设置viewport属性，用来控制页面放大和缩小</li>\n</ol>\n<pre><code> <meta name=viewport \ncontent=&quot;width=device-width,\n initial-scale=1.0,\n minimum-scale=1.0 maximum-scale=1.0,\n user-scalable=no&quot;> \n</code></pre>\n<ol start=\"3\">\n<li>click 点击穿透与延迟\n点击延迟表现：监听元素click事件之后，触发时间会延迟300ms；点击蒙层，蒙层消失后，下层元素点击触发\n原因：iOS 中的 safari，为了实现双击缩放操作，在单击 300ms 之后，如果未进行第二次点击，则执行 click 单击操作。也就是说来判断用户行为是否为双击产生的。但是，在 App 中，无论是否需要双击缩放这种行为，click 单击都会产生 300ms 延迟。</li>\n</ol>\n<p>点击穿透表现：touch事件和click事件混用导致，双层元素叠加时，在上层元素上绑定 touch 事件，下层元素绑定 click 事件。由于 click 发生在 touch 之后，点击上层元素，元素消失，下层元素会触发 click 事件，由此产生了点击穿透的效果</p>\n<p>方案一：使用touchstart替代click\n方案二：使用fastclick库</p>\n<ol start=\"4\">\n<li>软键盘弹出将页面顶起来、收起未回落问题\n表现：Android 手机中，点击 input 框时，键盘弹出，将页面顶起来，导致页面样式错乱。移开焦点时，键盘收起，键盘区域空白，未回落。\n原因：我们在app 布局中会有个固定的底部。安卓一些版本中，输入弹窗出来，会将解压 absolute 和 fixed 定位的元素。导致可视区域变小，布局错乱</li>\n</ol>\n<p>方案：软键盘将页面顶起来的解决方案，主要是通过监听页面高度变化，强制恢复成弹出前的高度</p>\n<pre><code class=\"language-js\">// 记录原有的视口高度\nconst originalHeight = document.body.clientHeight || document.documentElement.clientHeight;\n\nwindow.onresize = function(){\n  var resizeHeight = document.documentElement.clientHeight || document.body.clientHeight;\n  if(resizeHeight < originalHeight ){\n    // 恢复内容区域高度\n    // const container = document.getElementById(&quot;container&quot;)\n    // 例如 container.style.height = originalHeight;\n  }\n}\n</code></pre>\n<p>键盘回落的问题主要集中在iOS 12+ 和 wechat 6.7.4+</p>\n<pre><code class=\"language-js\">const isWechat = window.navigator.userAgent.match(/MicroMessenger\\/([\\d\\.]+)/i);\nif (!isWechat) return;\nconst wechatVersion = wechatInfo[1];\nconst version = (navigator.appVersion).match(/OS (\\d+)_(\\d+)_?(\\d+)?/);\n \n // 如果设备类型为iOS 12+ 和wechat 6.7.4+，恢复成原来的视口\nif (+wechatVersion.replace(/\\./g, '') >= 674 &amp;&amp; +version[1] >= 12) {\n  //window.scrollTo(0, clientHeight)标识恢复成原来的视口\n  window.scrollTo(0, Math.max(document.body.clientHeight, document.documentElement.clientHeight));\n}\n\n</code></pre>\n<h3>第四类：调试问题</h3>\n<ol>\n<li>H5 调试相关方案与策略（vconsole）\n表现：调试代码一般就是为了查看数据和定位 bug。分为两种场景，一种是开发和测试时调试，一种是生产环境上调试。</li>\n</ol>\n<h3>h5+native模式有何优缺点</h3>\n<h3>h5和native如何通信交互</h3>\n<h3>离线包和静态构建</h3>\n<p>hybrid h5优化的两大利器，\n离线包\n客户端提供离线包容器，包含两个功能，资源缓存（包括缓存策略、更新策略等）和拦截请求判断是否有本地缓存。离线包平台\n静态构建\nreact原生的ssr和webpack插件html-webpack-plugin组合，在构建阶段将静态内容打包植入html</p>\n<h3>参考</h3>\n<ul>\n<li><a href=\"https://juejin.cn/post/6844904024790007815\">吃透移动端 H5 与 Hybrid｜实践踩坑12种问题汇总</a></li>\n</ul>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/CompJavascript0057.tsx":
/*!*************************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/CompJavascript0057.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>js 面试题</h1>\n<h3>类型</h3>\n<hr>\n<ul>\n<li>Infinity代表什么数据？</li>\n</ul>\n<pre><code>全局属性 Infinity 是一个数值，表示无穷大。与 Number.POSITIVE_INFINITY 的数值相同\n\nNumber.MAX_SAFE_INTEGER：表示在 JavaScript 中最大的安全整数（253 – 1）\nNumber.MAX_VALUE：表示在 JavaScript 里所能表示的最大数值\nNumber.POSITIVE_INFINITY：表示正无穷大\n</code></pre>\n<ul>\n<li>如何把10.36四舍五入为最接近的整数？</li>\n</ul>\n<pre><code>方法一：Math.floor()\n方法二：Number.toFixed()\n</code></pre>\n<ul>\n<li>把对象转换到字符串类型是如何转换的？</li>\n</ul>\n<pre><code>方法一：使用JSON.stringify()\n</code></pre>\n<ul>\n<li>把对象转换到数字类型是如何转换的？</li>\n</ul>\n<pre><code>1.先调用对象的valueOf方法\n2.判断该方法的返回值是否为基础数据类型（Number，String，Boolean，Undefined，Null）\n3.若返回值为基础数据类型，则转换规则按照相应数据类型的转换规则对其进行转换\n4.若返回值不为基础数据类型，则在该返回值的基础上继续调用toString方法\n5.判断toString的返回值是否为基础数据类型\n6.判断是否为基础数据类型，若是基础数据类型则进行操作3\n7.若仍旧不为基础数据类型则报错\n</code></pre>\n<ul>\n<li>请你解释一个为什么10.toFixed(10)会报错？</li>\n</ul>\n<pre><code>之所以会报错时因为这里的.发生了歧义，既可以理解成浮点数的小数点，又可以理解为对方法的调用。因为数字后面紧跟着一个.，解释器就默认为浮点数，所以会报错。\n</code></pre>\n<ul>\n<li>如何避免JS浮点运算的精度问题（例：0.1+0.7=0.7999999999999999）</li>\n<li>js如何解决数字精度丢失的问题？</li>\n</ul>\n<pre><code>首先考虑的是如何解决浮点数运算的精度问题，有 3 种思路：\n\n考虑到每次浮点数运算的偏差非常小(其实不然)，可以对结果进行指定精度的四舍五入，比如可以parseFloat(result.toFixed(12));\n将浮点数转为整数运算，再对结果做除法。比如0.1 + 0.2，可以转化为(1*2)/3。\n把浮点数转化为字符串，模拟实际运算的过程。\n先来看第一种方案，在大多数情况下，它可以得到正确结果，但是对一些极端情况，toFixed 到 12 是不够的，比如：\n\n210000 * 10000  * 1000 * 8.2    // 17219999999999.998\nparseFloat(17219999999999.998.toFixed(12));    // 17219999999999.998，而正确结果为 17220000000000\n上面的情况，如果想让结果正确，需要 toFixed(2)，这显然是不可接受的。\n\n再看第二种方案，比如 number-precision 这个库就是使用的这种方案，但是这也是有问题的，比如：\n\n// 这两个浮点数，转化为整数之后，相乘的结果已经超过了 MAX_SAFE_INTEGER\n123456.789 * 123456.789     // 转化为 (123456789 * 123456789)/1000000，结果是 15241578750.19052\n\n所以，最终考虑使用第三种方案，目前已经有了很多较为成熟的库，比如 bignumber.js，decimal.js，以及big.js等。我们可以根据自己的需求来选择对应的工具。并且，这些库不仅解决了浮点数的运算精度问题，还支持了大数运算，并且修复了原生toFixed结果不准确的问题。\n</code></pre>\n<ul>\n<li>举例子说说你对js隐式类型转换的理解</li>\n</ul>\n<pre><code>类型的隐式转换发生在==或者+等运算符中。\n隐式转换一般会先调用原型上的valueOf方法，如果返回结果仍然不能比较就会再调用toString方法，\n</code></pre>\n<ul>\n<li>请解释下NaN === NaN的结果</li>\n</ul>\n<pre><code>false\n全局属性 NaN 是一个表示非数字的值\n要判断一个值是否为 NaN，可以使用 Number.isNaN() 或 isNaN() 来最清楚地确定一个值是否为 NaN ，因为 NaN 是唯一与自身不相等的值，所以你可以执行类似 x !== x 这样的自我比较\n</code></pre>\n<ul>\n<li>请介绍下js的数据类型</li>\n</ul>\n<pre><code>JavaScript 是一种有着动态类型的动态语言。JavaScript 中的变量与任何特定值类型没有任何关联，并且任何变量都可以分配（重新分配）所有类型的值\n</code></pre>\n<ul>\n<li>举例说明什么是短路求值？</li>\n</ul>\n<pre><code>短路求值 （Short-circuit evaluation; minimal evaluation; McCarthy evaluation; 又称 最小化求值 ） ，是一种 逻辑运算符 的求值策略。 只有当第一个运算数的值无法确定逻辑运算的结果时，才对第二个运算数进行求值。 例如，当AND的第一个运算数的值为false时，其结果必定为false；当OR的第一个运算数为true时，最后结果必定为true，在这种情况下，就不需要知道第二个运算数的具体值\n</code></pre>\n<ul>\n<li>表达式和语句有什么区别？如何把语句转换为表达式？</li>\n</ul>\n<pre><code>表达式是可以被求值的代码，而语句是一段可执行代码。因为表达式可被求值，所以它可写在赋值语句等号的右侧。而语句不一定有值，所以像import、for和break等语句就不能被用于赋值。Python的语句分为两大类：简单和复合语句。简单语句是指一逻辑行的代码。例如表达式语句、赋值语句和return语句等。复合语句是指包含、影响或控制一组语句的代码。例如if、try和class语句等。表达式本身可以作为表达式语句，也能作为赋值语句的右值或if语句的条件等，所以表达式可以作为语句的组成部分，但不是必须成分（例如continue语句）\n</code></pre>\n<ul>\n<li>你知道什么是三元表达式吗？“三元” 表示什么意思？使用三元表达式应该注意些什么问题？</li>\n</ul>\n<pre><code>条件（三元）运算符是 JavaScript 唯一使用三个操作数的运算符：一个条件后跟一个问号（?），如果条件为真值，则执行冒号（:）前的表达式；若条件为假值，则执行最后的表达式\n</code></pre>\n<ul>\n<li>有些js库习惯在代码开头处添加分号有什么作用呢？除了分号还可以换成别的吗？</li>\n</ul>\n<pre><code>js 文件结束 处是 没有 分号的。若几个 js 连在一起时，2个 js 连接处 会发生语法上的混淆。\n开头加 ; 用于分隔， 可以避免多文件 压缩 在一起时 引起的 错误。\n分号和分号放在一起也没问题，相当于 “空语句”。\n</code></pre>\n<ul>\n<li>JavaScript有几种类型值？能否画出它们的内存图？</li>\n</ul>\n<pre><code>栈内存：原始数据类型（undefined、null、string、number、boolean）\n堆内存：引用数据类型（对象、数组、函数）\n\n区别：\n\n声明变量时不同的内存分配：\n原始值：存储在栈（stack）中的简单数据段，也就是说，它们的值直接存储在变量访问的位置。这是因为这些原始类型占据的空间是固定的，所以可将他们存储在较小的内存区域 – 栈中。这样存储便于迅速查寻变量的值。\n引用值：存储在堆（heap）中的对象，也就是说，存储在变量处的值是一个指针（point），指向存储对象的内存地址。这是因为：引用值的大小会改变，所以不能把它放在栈中，否则会降低变量查寻的速度。相反，放在变量的栈空间中的值是该对象存储在堆中的地址。地址的大小是固定的，所以把它存储在栈中对变量性能无任何负面影响。\n\n不同的内存分配机制也带来了不同的访问机制　　\n在javascript中是不允许直接访问保存在堆内存中的对象的，所以在访问一个对象时，首先得到的是这个对象在堆内存中的地址，然后再按照这个地址去获得这个对象中的值，即按引用访问。 \n而原始类型的值则是可以直接访问到的。　　\n\n复制变量时的不同　　 \n原始值：在将一个保存着原始值的变量复制给另一个变量时，会将原始值的副本赋值给新变量，此后这两个变量是完全独立的，他们只是拥有相同的value而已。 \n引用值：在将一个保存着对象内存地址的变量复制给另一个变量时，会把这个内存地址赋值给新变量，也就是说这两个变量都指向了堆内存中的同一个对象，他们中任何一个作出的改变都会反映在另一个身上。（这里要理解的一点就是，复制对象时并不会在堆内存中新生成一个一模一样的对象，只是多了一个保存指向这个对象指针的变量罢了）。多了一个指针　 \n\n参数传递的不同（把实参复制给形参的过程）。首先我们应该明确一点：ECMAScript中所有函数的参数都是按值来传递的。 \n原始值：只是把变量里的值传递给参数，之后参数和这个变量互不影响。\n引用值：对象变量它里面的值是这个对象在堆内存中的内存地址，这一点你要时刻铭记在心！因此它传递的值也就是这个内存地址，这也就是为什么函数内部对这个参数的修改会体现在外部的原因了，因为它们都指向同一个对象。 \n</code></pre>\n<ul>\n<li>说说你对数据类型转换的理解是什么？类型转换的方法有哪些？</li>\n</ul>\n<pre><code>不同类型无法比较或者运算，需要将他们转换成同类型的运算或者比较。先调用valueOf方法，如果还是无法比较调用toString方法\n\n显式转换：Boolean，Number，String， parseInt,parseFloat, toString, JSON.stringify\n隐式转换：==、+、~等\n</code></pre>\n<ul>\n<li>举例子说明javascript的变量声明提升和函数声明提升</li>\n</ul>\n<pre><code>var getName = function(){\n  console.log(4)\n}\n\nfunction getName() {\n  console.log(5)\n}\n\ngetName() // 4 函数声明优先级高于var声明,  故 4 覆盖了 5\n</code></pre>\n<ul>\n<li>写出js各类型转化为Boolean的值分别是什么？及转化的规则是什么？</li>\n</ul>\n<pre><code>Number数值型的数据，使用Boolean()函数进行转换时，除了数字0和特殊数字NaN转换后是false，其他的数字都是true，包括无穷表达值Infinity；\nString字符串，除了空串转换后是false，其余都是true；\nnull和undefined转换后都是false；\n对象转换后都是是true；\n\n总结\n如果省略该参数或参数值为 0、-0、null、false、NaN、undefined，或空字符串（&quot;&quot;），则该对象具有的初始值为 false。所有其他值，包括任何对象，空数组（[]）或字符串 &quot;false&quot;，都会创建一个初始值为 true 的对象\n</code></pre>\n<ul>\n<li>代码中如果遇到未定义的变量，会抛出异常吗？程序还会不会继续往下走？</li>\n</ul>\n<pre><code>js在遇到未定义的变量时，会出现uncaught referenceerror：is not defined，根本原因是，js是单线程的。这时js会停止解析后面的代码，跳出代码块，之前的代码不受影响，之后的代码块也不会受到影响。报错阻塞后面的代码执行，程序不会继续往下走。\n</code></pre>\n<ul>\n<li>js可以用中文作为变量命名吗？为什么？</li>\n</ul>\n<pre><code>可以使用中文名作为变量，可能导致的问题有\n1. 文档的编码格式不是utf-8可能导致乱码。一般默认编码模式为 utf-8，但有一些编辑器并不会设定默认值，这时候，你就会发现，页面里的中文变成非语义化的字符（俗称乱码）了。或者某些人的浏览器默认编码并不是 utf-8，而是例如 gb2312、gbk 之类的编码，那么也可能产生乱码\n\n2. 命名不当，懂中文的和不懂中文的都看不懂意思\n3. 如果默许可以使用中文，那么这个口子一旦打开，代码里到处是各种中文名字、奇怪的缩写、拼音英文混合，造成混乱局面。\n</code></pre>\n<ul>\n<li>说下js的parseInt()和Number()有什么区别？</li>\n</ul>\n<pre><code>parseInt:parseInt(string, radix) 解析一个字符串并返回指定基数的十进制整数，radix 是 2-36 之间的整数，表示被解析字符串的基数\n</code></pre>\n<ul>\n<li>请问typeof typeof 168的结果是什么？</li>\n</ul>\n<pre><code>'string'\ntypeof 168 // 'number'\ntypeof 'number' // 'string'\n</code></pre>\n<ul>\n<li>请说说new String(&quot;A&quot;)和String(&quot;A&quot;)分别返回的结果，请解释为什么？</li>\n</ul>\n<pre><code>new String('A')返回一个对象，\nString('A')返回一个字符串，原始类型\n</code></pre>\n<ul>\n<li>0.1 + 0.2、0.1 + 0.3和0.1 * 0.2分别等于多少？并解释下为什么？</li>\n</ul>\n<pre><code>0.1转化成二进制是一个无限循环小数，但是计算机只能用有限的位数来存一个数，所以最终，计算机存的数是一个近似于 0.1 的小数。转换的过程中会损失精度\n所以，0.1+0.2是近似值相加\n</code></pre>\n<ul>\n<li>说说instanceof和typeof的实现原理并自己模拟实现一个instanceof</li>\n</ul>\n<pre><code>typeof 运算符返回一个字符串（表示基本数据类型或者对象类型），表示操作数的类型\nUndefined -> &quot;undefined&quot;\nNull -> &quot;null&quot;\nBoolean -> &quot;boolean&quot;\nNumber -> &quot;number&quot;\nBigInt -> &quot;bigInt&quot;\nString -> &quot;string&quot;\nSymbol -> &quot;symbol&quot;\nFunction -> &quot;function&quot;\n其他任何对象 -> &quot;object&quot;\n\ninstanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上\n</code></pre>\n<ul>\n<li>js中=、==、===三个的区别是什么？并说明它们各自的工作过程</li>\n</ul>\n<pre><code>= 表示赋值\n== 表示相等，它会比较不同类型的操作数，并尝试强制类型转换\n1. 如果操作数具有相同的类型，则按如下方式进行比较：\n  对象（Object）：仅当两个操作数引用同一个对象时返回 true。\n  字符串（String）：只有当两个操作数具有相同的字符且顺序相同时才返回 true。\n  数值（Number）：如果两个操作数的值相同，则返回 true。+0 和 -0 被视为相同的值。如果任何一个操作数是 NaN，返回 false；所以，NaN 永远不等于 NaN。\n  布尔值（Boolean）：仅当操作数都为 true 或都为 false 时返回 true。\n  大整形（BigInt）：仅当两个操作数值相同时返回 true。\n  符号（Symbol）：仅当两个操作数引用相同的符号时返回 true。\n2. 如果其中一个操作数为 null 或 undefined，另一个操作数也必须为 null 或 undefined 以返回 true。否则返回 false。\n3. 如果其中一个操作数是对象，另一个是基本类型，按此顺序使用对象的 @@toPrimitive()（以 &quot;default&quot; 作为提示），valueOf() 和 toString() 方法将对象转换为基本类型。（这个基本类型转换与相加中使用的转换相同。）\n4. 在这一步，两个操作数都被转换为基本类型（String、Number、Boolean、Symbol 和 BigInt 中的一个）。其余的转换是逐个进行的。\n  如果是相同的类型，使用步骤 1 进行比较。\n  如果其中一个操作数是 Symbol 而另一个不是，返回 false。\n  如果其中一个操作数是布尔型而另一个不是，则将布尔型转换为数字：true 转换为 1，false 转换为 0。然后再次松散地比较两个操作数。\n  Number to String：使用与 Number() 构造函数相同的算法将字符串转换为数字。转换失败将导致 NaN，这将保证相等是 false。\n  Number to BigInt：按数值进行比较。如果数值为 ±∞ 或 NaN，返回 false。\n  String to BigInt：使用与 BigInt() 构造函数相同的算法将字符串转换为 BigInt。如果转换失败，返回 false。\n\n=== 表示严格相等，严格相等运算符总是认为不同类型的操作数是不同的\n如果操作数的类型不同，则返回 false。\n如果两个操作数都是对象，只有当它们指向同一个对象时才返回 true。\n如果两个操作数都为 null，或者两个操作数都为 undefined，返回 true。\n如果两个操作数有任意一个为 NaN，返回 false。\n否则，比较两个操作数的值：\n数字类型必须拥有相同的数值。+0 和 -0 会被认为是相同的值。\n字符串类型必须拥有相同顺序的相同字符。\n布尔运算符必须同时为 true 或同时为 false\n\n\n严格相等运算符总是认为不同类型的操作数是不同的，相等会尝试类型转换\n</code></pre>\n<ul>\n<li>解释下为什么{} + [] === 0为true？而[]+{}===0为false</li>\n</ul>\n<pre><code>先说 [] + {} 。\n一个数组加一个对象。 加法会进行隐式类型转换，规则是调用其 valueOf() 或 toString() 以取得一个非对象的值（primitive value）。如果两个值中的任何一个是字符串，则进行字符串串接，否则进行数字加法。\n [] 和 {} 的 valueOf() 都返回对象自身，所以都会调用 toString()，最后的结果是字符串串接。[].toString() 返回空字符串，({}).toString() 返回“[object Object]”。最后的结果就是“[object Object]”。\n\n 然后说 {} + [] 。看上去应该和上面一样。但是 {} 除了表示一个对象之外，也可以表示一个空的 block。在 [] + {} 中，[] 被解析为数组，因此后续的 + 被解析为加法运算符，而 {} 就解析为对象。但在 {} + [] 中，{} 被解析为空的 block，随后的 + 被解析为正号运算符。即实际上成了： \n { // empty block }\n +[]\n即对一个空数组执行正号运算，实际上就是把数组转型为数字。首先调用 [].valueOf() 。返回数组自身，不是primitive value，因此继续调用 [].toString() ，返回空字符串。空字符串转型为数字，返回0，即最后的结果。\n</code></pre>\n<ul>\n<li>举例说明+运算符的运行机制</li>\n</ul>\n<pre><code>一元加（+）运算符在其操作数之前并计算其操作数，但会尝试将其转换为数字\n</code></pre>\n<ul>\n<li>请描述下null和undefined的区别是什么？这两者分别运用在什么场景？</li>\n</ul>\n<pre><code>null表示空；undefined表示不存在\n\nnull运用场景\n1. 变量初始化\n2. 原型链的终点\n\nundefined运用场景\n1. 函数没有返回值，默认返回undefined\n2. 变量已声明未赋值\n3. 调用函数时，该提供的参数未提供\n</code></pre>\n<ul>\n<li>你知道1和Number(1)的区别是什么吗？</li>\n</ul>\n<pre><code>在不使用new关键字作建构对象实例时，使用像Number(123)这样的语法，这是一种从其他资料类型要转到数字类型的函数调用语法。调用后仍然是原始资料类型，并不会产生包装对象实例\n</code></pre>\n<ul>\n<li>请解释下NaN表示什么呢？typeof NaN结果是什么？</li>\n</ul>\n<pre><code>全局属性 NaN 是一个表示非数字的值\ntypeof NaN // 'number'\n</code></pre>\n<ul>\n<li>请分析020-088=?的过程及结果</li>\n</ul>\n<pre><code>020会被识别未8进制，即16，088会被识别为10进制即88，所以最后结果为-72\n</code></pre>\n<ul>\n<li>判断[].<strong>proto</strong>.<strong>proto</strong> === {}.__proto__结果并解释为什么?</li>\n</ul>\n<pre><code>true\n通过原型链，查找到的都是Object构造函数原型对象\n</code></pre>\n<ul>\n<li>js中的undefined和 ReferenceError: xxx is not defined 有什么区别？</li>\n</ul>\n<pre><code>undefined是javascript语言中定义的五个原始类中的一个，换句话说，undefined并不是程序报错，而是程序允许的一个值。\nnot defined是javascript在运行我们的javascript代码时，遇到没有定义就用来运算的变量时爆出来的错误。\n\n在许多的javascript教程中都介绍有javascript变量即使不定义也可以直接拿来使用，但是请注意，这个使用是指可以被赋值，但是不可以被运算。例如\nvar temp;\ntemp2 = 123;\nalert(temp2);\ntemp3 = temp4+1; //报错，temp4 not defined\nalert(temp3) \n</code></pre>\n<ul>\n<li>Math.min() < Math.max() 返回结果是什么？为什么？</li>\n</ul>\n<pre><code>Math.min() // Infinity\nMath.max() // -Infinity\n引用mdn：Math.min() 函数返回作为输入参数的数字中最小的一个，如果没有参数，则返回 Infinity；Math.max() 函数返回作为输入参数的最大数字，如果没有参数，则返回 -Infinity\n</code></pre>\n<ul>\n<li>js中的数字在电脑内存储为多少Byte？</li>\n</ul>\n<pre><code>js内部，所有数字都是以64位浮点数形式存储的，整数也是。64bit = 8byte\n</code></pre>\n<ul>\n<li>说一说symbol</li>\n</ul>\n<pre><code>symbol的功能类似于一种标识唯一性的 ID\n1. 通过调用 Symbol()函数来创建一个 Symbol 实例,每个 Symbol 实例都是唯一的。因此，当你比较两个 Symbol 实例的时候，将总会返回 false\n2. 使用 typeof 去检查它的类型的时候，它会返回一个属于自己的类型 symbol，而不是什么 string、object 之类的\n\n引用场景\n1. 使用 Symbol 来作为对象属性名(key)，Symbol 类型的 key 是不能通过Object.keys()或者for...in来枚举的，它未被包含在对象自身的属性名集合(property names)之中。所以，利用该特性，我们可以把一些不需要对外操作和访问的属性使用 Symbol 来定义\n2. 使用 Symbol 代替常量，我们经常定义一组常量来代表一种业务逻辑下的几个不同类型，我们通常希望这几个常量之间是唯一的关系，为了保证这一点，我们需要为常量赋一个唯一的值\n3. 使用 Symbol 定义类的私有属性/方法，我们知道在 JavaScript 中，是没有如 Java 等面向对象语言的访问控制关键字 private 的，类上所有定义的属性或方法都是可公开访问的。因此这对我们进行 API 的设计时造成了一些困扰\n\n特别注意\n1. Symbol 函数前不能使用 new 命令，否则会报错。\n2. Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。\n3. Symbol 作为属性名，该属性不会出现在 for...in、for...of 循环中，也不会被 Object.keys()、Object.getOwnPropertyNames()、JSON.stringify() 返回。\n4. Object.getOwnPropertySymbols 方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。\n5. Symbol.for 接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。\n6. Symbol.keyFor 方法返回一个已登记的 Symbol 类型值的 key。\n</code></pre>\n<h3>方案设计</h3>\n<ul>\n<li>实现一个系统，统计前端页面性能、页面 JS 报错、用户操作行为、PV/UV、用户设备等消息，并进行必要的监控报警。方案如何设计，用什么技术点，什么样的系统架构，难点会在哪里？</li>\n</ul>\n<pre><code>一、需求背景\n1.1 为什么要做\n更快的发现问题\n做产品决策依据\n提升前端开发的技术深度和广度\n为业务扩展提供更多可能性\n为了实现收集功能，我们需要一个前端监控平台，它能够收集数据、处理数据、存储数据、查询数据。其实就有很多现成的平台或者开源项目我们可以直接使用。\n\n1.2 行内通用方案\n前端技术发展至今，相信大家已经对前端监控的这件事情非常熟悉，或多或少都会在我们的项目中用上它。比如搭建使用开源项目 sentry、付费平台阿里的 ARMS、甚至小程序配套的前端监控服务。\n\nsentry，sentry 主要提供的功能是收集错误。支持大多流行语言的客户端和服务端，不支持小程序，但是目前有大公司根据 sentry 的上报数据结构，自己实现了小程序 SDK 并开源，目前关注度和流行度都偏低。除开错误，它的其它类型的前端监控能力相对来说很弱。\n阿里 ARMS，ARMS 提供的功能与支持的客户端比较齐全，小程序也支持。只是需要付费。总体来说提供的功能还是比较全面、符合国内的环境。\n小程序自带监控 微信小程序不断的在完善内部的监控，各方面的功能也慢慢丰富了起来，但是只能支持小程序本身。\n在使用这些开源或者平台前端监控服务的时候，始终有一些不足。比如：\n\n系统分散\n很难满足增加一些自定义数据和查询的需求\n特性一直不更新、Bug 解决周期长\n二次开发难度大\n1.3 定制化\n如果完全从 0 到 1 来打造一套前端监控系统，成本也是很高的。甚至在早期，都可能没人愿意用，系统是否能立项或者持续发展下去也是一个问题。于是从一些开源项目中去寻找，去找一个方便改造也有一定功能模块的项目。可以基于它的代码，进行长期的改造和迭代。慢慢的改造成为一个更适合公司内部环境的一个前端监控系统。\n\n二、系统架构\n2.1 基本构成\n客户端 SDK：web\n服务端 node + EggJs\n数据库 Redis Mongo+mongooseJs(orm)\n管理台 Vue + ElementUI\n为了实现前端监控，第一要素是要收集客户端数据，为了方便客户端集成监控系统、我们需要首先开发封装一个统一的 SDK、去帮助我们收集数据。\n\nSDK 收集了数据，我们还需要通过服务端接口来接收，在服务端，使用 node+EggJs，node 适合 i/o 密集型场景，符合前端技术栈。eggjs 简单易用、文档友好，大部分使用 node 的前端程序员都应该能很快上手。\n\n服务端收集到数据并进行一些处理之后，我们需要存储到我们的数据库之中。在数据库方面，使用 mongo 做持久化存储，mongo 文档模型数据库，数据扩展方便，类 json 结构方便和 node 配合使用，天生适合日志系统。使用 redis 做数据缓存，redis 简单易用的高性能 key-value 数据库，市场上占据主流，被大部分人都熟知。\n\n最后，还需要一个管理台，做数据查询与管理。管理台使用 Vue+ElementUI，简单快速。\n\n客户端 SDK 收集数据上报，node 服务端获取到数据后，先存在 redis 中，node 服务会根据消费能力去拉取 redis 数据处理分析后存储到 mongo 之中，最后我们通过管理后台展示处理好的应用数据。\n\n2.2 技术的可能的一些难点\n可能整个系统比较复杂的就是如何高效合理的进行监控数据上传。除了异常报错信息本身，还需要记录用户操作日志，如果任何日志都立即上报，这无异于自造的 DDOS 攻击。那就需要考虑前端日志的存储，日志如何上传，上传前如何整理日志等问题。\n\n对于日志的处理上报有这样的处理方案\n\n前端存储日志\n我们并不单单采集异常本身日志，而且还会采集与异常相关的用户行为日志。单纯一条异常日志并不能帮助我们快速定位问题根源，找到解决方案。但如果要收集用户的行为日志，又要采取一定的技巧，而不能用户每一个操作后，就立即将该行为日志传到服务器，对于具有大量用户同时在线的应用，如果用户一操作就立即上传日志，无异于对日志服务器进行 DDOS 攻击。因此，我们先将这些日志存储在用户客户端本地，达到一定条件之后，再同时打包上传一组日志。\n\n那么，如何进行前端日志存储呢？我们不可能直接将这些日志用一个变量保存起来，这样会挤爆内存，而且一旦用户进行刷新操作，这些日志就丢失了，因此，我们自然而然想到前端数据持久化方案。\n\n目前，可用的持久化方案可选项也比较多了，主要有：Cookie、localStorage、sessionStorage、IndexedDB、webSQL 、FileSystem 等等。那么该如何选择呢？我们通过一个表来进行对比：\n\ncookie：使用字符串存储，容量4kb，同步。\nlocalStorage：使用key-value的字符串形式存储，容量5M，同步，通过key进行检索，读快写慢\nsessionStorage:使用key-value的字符串形式存储，容量5M，同步，通过key进行检索\nindexedDB:使用NoSQL的object形式存储，容量500M，异步，通过key或者index进行检索，读慢写快\nwebSQL：使用SQL的形式存储，容量60M，异步，通过field进行检索。\n\t\n综合之后，IndexedDB 是最好的选择，它具有容量大、异步的优势，异步的特性保证它不会对界面的渲染产生阻塞。而且 IndexedDB 是分库的，每个库又分 store，还能按照索引进行查询，具有完整的数据库管理思维，比 localStorage 更适合做结构化数据管理。但是它有一个缺点，就是 api 非常复杂，不像 localStorage 那么简单直接。针对这一点，我们可以使用 hello-indexeddb 这个工具，它用 Promise 对复杂 api 进行来封装，简化操作，使 IndexedDB 的使用也能做到 localStorage 一样便捷。另外，IndexedDB 是被广泛支持的 HTML5 标准，兼容大部分浏览器，因此不用担心它的发展前景。\n\n日志上报\n按照上报的频率（重要紧急度）可将上报分为四类\n\n即时上报\n收集到日志后，立即触发上报函数。仅用于 A 类异常。而且由于受到网络不确定因素影响，A 类日志上报需要有一个确认机制，只有确认服务端已经成功接收到该上报信息之后，才算完成。否则需要有一个循环机制，确保上报成功。\n\n批量上报\n将收集到的日志存储在本地，当收集到一定数量之后再打包一次性上报，或者按照一定的频率（时间间隔）打包上传。这相当于把多次合并为一次上报，以降低对服务器的压力。\n\n区块上报\n将一次异常的场景打包为一个区块后进行上报。它和批量上报不同，批量上报保证了日志的完整性，全面性，但会有无用信息。而区块上报则是针对异常本身的，确保单个异常相关的日志被全部上报。\n\n用户主动提交\n在界面上提供一个按钮，用户主动反馈 bug。这有利于加强与用户的互动。\n\n或者当异常发生时，虽然对用户没有任何影响，但是应用监控到了，弹出一个提示框，让用户选择是否愿意上传日志。这种方案适合涉及用户隐私数据时。\n\n即时上报：紧急重要的容量小的情况下，立即一次性全部上报\n批量上报：不紧急的容量适中情况下，定时性的一次xxx条的上报\n区块上报：不紧急但是很重要情况下，稍延时的单次上报相关条目\n用户反馈：不紧急的情况下，延时一次一条的上报\n\n即时上报虽然叫即时，但是其实也是通过类似队列的循环任务去完成的，它主要是尽快把一些重要的异常提交给监控系统，好让运维人员发现问题，因此，它对应的紧急程度比较高。\n\n批量上报和区块上报的区别：批量上报是一次上报一定条数，比如每 2 分钟上报 1000 条，直到上报完成。而区块上报是在异常发生之后，马上收集和异常相关的所有日志，查询出哪些日志已经由批量上报上报过了，剔除掉，把其他相关日志上传，和异常相关的这些日志相对而言更重要一些，它们可以帮助尽快复原异常现场，找出发生异常的根源。\n\n用户提交的反馈信息，则可以慢悠悠上报上去。\n\n</code></pre>\n<ul>\n<li>如果让你来实现一个前端监控系统，应该考虑什么？如何去实现</li>\n</ul>\n<pre><code>一、为什么要做前端监控\n更快的发现问题\n做产品决策依据\n提升前端开发的技术深度和广度\n为业务扩展提供更多可能性\n二、前端数据分类\n前端的数据其实有很多，从大众普遍关注的 PV、UV、广告点击量，到客户端的网络环境、登陆状态，再到浏览器、操作系统信息，最后到页面性能、JS 异常，这些数据都可以在前端收集到。\n\n2.1 访问相关的数据\nPV/UV:最基础的 PV(页面访问量)、UV(独立访问用户数据量)\n页面来源：页面的 referer,可以定位页面的入口\n操作系统：了解用户的 OS 情况，帮助分析用户群体的特征，特别是移动端、iOS 和 Android 的分布就更有意义了\n浏览器：可以统计到各种浏览器的占比，对于是否继续兼容 IE6、新技术(HTML5、CSS3 等)的运用等调研提供参考价值\n分辨率：对页面设计提供参考，特别是响应式设计\n登录率：登陆用户具有更高的分析价值，引导用户登陆是非常重要的\n地域分布：访问用户在地理位置上的分布，可以针对不同地域做运营、活动等\n网络类型：wifi/3G/2G，为产品是否需要适配不同网络环境做决策\n访问时段：掌握用户访问时间的分布，引导消峰填谷、节省带宽\n停留时长：判断页面内容是否具有吸引力，对于需要长时间阅读的页面比较有意义\n到达深度：和停留时长类似，例如百度百科，用户浏览时的页面到达深度直接反映词条的质量\n2.2 性能相关的数据\n白屏时间：用户从打开页面开始到页面开始有东西呈现为止，这过程中占用的时间就是白屏时间\n首屏时间：用户浏览器首屏内所有内容都呈现出来所花费的时间\n用户可操作时间：用户可以进行正常的点击、输入等操作\n页面总下载时间：页面所有资源都加载完成并呈现出来所花的时间，即页面 onload 的时间\n自定义的时间点：对于开发人员来说，完全可以自定义一些时间点，例如：某个组件 init 完成的时间、某个重要模块加载的时间等等\n2.3 点击相关的数据\n页面总点击量\n人均点击量：对于导航类的网页，这项指标是非常重要的\n流出 url：同样，导航类的网页，直接了解网页导流的去向\n点击时间：用户的所有点击行为，在时间上的分布，反映了用户点击操作的习惯\n首次点击时间：同上，但是只统计用户的第一次点击，如果该时间偏大，是否就表明页面很卡导致用户长时间不能点击呢？\n点击热力图：根据用户点击的位置，我们可以画出整个页面的点击热力图，可以很直观的了解到页面的热点区域\n2.4 异常相关的数据\n这里的异常是指 JS 的异常，用户的浏览器上报 JS 的 bug，这会极大地降低用户体验\n\n异常的提示信息：这是识别一个异常的最重要依据，如：e.src 为空或不是对象\nJS 文件名\n异常所在行\n发生异常的浏览器\n堆栈信息：必要的时候需要函数调用的堆栈信息，但是注意堆栈信息可能会比较大，需要截取\n2.5 其它数据\n除了上面提到的 4 类基本的数据统计需求，我们当然还可以根据实际情况来定义一些其他的统计需求，如用户浏览器对 canvas 的支持程度， 再比如比较特殊的-用户进行轮播图翻页的次数，这些数据统计需求都是前端能够满足的，每一项统计的结果都体现了前端数据的价值\n\n三、性能指标\nFP(First Paint)：首次绘制时间，包括了任何用户自定义的背景绘制，它是首先将像素绘制到屏幕的时刻。\nFCP(First Content Paint)：首次内容绘制。是浏览器将第一个 DOM 渲染到屏幕的时间，可能是文本、图像、SVG 等。这其实就是白屏时间\nFMP(First Meaningful Paint)：首次有意义绘制。页面有意义的内容渲染的时间\nLCP(Largest Contentful Paint)。最大内容渲染。代表在 viewport 中最大的页面元素加载的时间。\nDCL(DomContentLoaded)：DOM 加载完成。当 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发。无需等待样式表，图像和子框架的完成加载。\nL(onload)：当依赖的资源全部加载完毕之后才会触发。\nTTI(Time to Interactive)：可交互时间。用于标记应用已进行视觉渲染并能可靠响应用户输入的时间点。\nFID(First Input Delay)：首次输入延迟。用户首次和页面交互(单击链接、点击按钮等)到页面响应交互的时间。\n四、前端监控目标(监控分类)\n4.1 稳定性(stability)\nJS 错误，JS 执行错误或者 Promise 异常\n资源异常，script、link 等资源加载异常\n接口错误,ajax 或 fetch 请求接口异常\n白屏，页面空白\n4.2 用户体验(experience)\n加载时间，各个阶段的加载时间\nTTFB(Time To First Byte 首字节时间)。是指浏览器发起第一个请求到数据返回第一个字节所消耗的时间，这个时间包含了网络请求时间、后端处理时间。\nFP(First Paint 首次绘制)。首次绘制包括了任何用户自定义的背景绘制，它是将第一个像素点绘制到屏幕的时间。\nFCP(First Content Paint 首次内容绘制)。首次内容绘制是浏览器将第一个 DOM 渲染到屏幕的时间，可以是任何文本、图像、SVG 等的时间。\nFMP(First Meaningful Paint 首次有意义绘制)。 首次有意义绘制是页面可用性的量度标准。\nFID(First Input Delay 首次输入延迟)。用户首次和页面交互到页面响应交互的时间。\n卡顿。 超过 50ms 的任务。\n4.3 业务\nPV：page view 即页面浏览量或点击量\nUV：指访问某个站点的不同 IP 地址的人数。\n页面停留时间：用户在每一个页面的停留时间。\n五、前端监控流程\n数据埋点\n数据上报\n分析和计算，将采集到的数据进行加工总结\n可视化展示，将数据按照各种维度进行展示\n监控报警，发现问题后按一定的条件触发报警\n六、常见的埋点方案\n6.1 代码埋点\n代码埋点，就是以嵌入代码的形式进行埋点，比如要监控用户的点击事件，会选择在用户点击时插入一段代码，保存这个监听行为或者直接将监听行为 以某一种数据格式直接传递给服务器端。\n优点是可以在任意时刻，精确的发送或保存所需要的数据信息。\n缺点就是工作量大\n6.2 可视化埋点\n通过可视化交互的手段，代替代码埋点。\n将业务代码和埋点代码分离，提供一个可视化交互的页面，输入为业务代码，通过这个可视化系统，可以在业务代码中自定义 的增加埋点事件等等。最后输出的代码耦合了业务代码和埋点代码\n可视化埋点其实是用系统来代替手工插入埋点代码。\n6.3 无痕埋点\n前端的任意一个事件都被绑定一个标识，所有的事件都被记录下来。\n通过定期上传记录文件，配合文件解析，解析出来我们想要的数据，并生成可视化报告供专业人员分析\n无痕埋点的优点是采集全量数据，不会出现漏埋和误埋等现象\n缺点是给数据传输和服务器增加压力，也无法灵活定制数据结构\n七、编写监控采集脚本\n7.1 监控错误\n错误分类\nJS 错误\nPromise 异常\n资源异常\n监听 error\n7.2 数据结构设计\njsError\nlet info = {\n  title: &quot;前端监控系统&quot;, // 页面标题\n  url: &quot;http://localhost:8080&quot;, // 页面url\n  timestamp: &quot;1212121212121212&quot;, // 访问时间戳\n  userAgent: &quot;chrome&quot;, // 用户浏览器类型\n  kind: &quot;stability&quot;, // 大类\n  type: &quot;error&quot;, // 小类\n  errorType: &quot;jsError&quot;, // 错误类型\n  message: &quot;uncaught TypeError:blablabla&quot;, // 错误详情\n  filename: &quot;http://localhost:8080/&quot;, // 访问的文件名\n  position: &quot;0:0&quot;, // 行列信息\n  stack: &quot;btn Click (http://localhost:8080)&quot;, // 堆栈信息\n  selector: &quot;HTML BODY #container .content INPUT&quot;, // 选择器\n};\n接口异常数据结构设置\nlet info = {\n  title: &quot;前端监控系统&quot;, // 页面标题\n  url: &quot;http://localhost:8080&quot;, // 页面url\n  timestamp: &quot;1212121212121212&quot;, // 访问时间戳\n  userAgent: &quot;chrome&quot;, // 用户浏览器类型\n  kind: &quot;stability&quot;, // 大类\n  type: &quot;xhr&quot;, // 小类\n  eventType: &quot;load&quot;, // 事件类型\n  pathname: &quot;/success&quot;,\n  status: &quot;200-0k&quot;,\n  duration: &quot;5&quot;, // 持续时间\n  response: &quot;hahah&quot;, // 响应内容\n  params: &quot;参数&quot;, // 参数\n};\n白屏 screen 返回当前 window 的 screen 对象，返回当前渲染窗口中和屏幕有关的属性\ninnerWidth 只读的 window 属性。innerWidth 返回以像素为单位的窗口的内部宽度\ninnerHeight 窗口的内部高度(布局视口)的高度\nlayout_viewport\nelementsFromPoint 方法可以获取到当前视口内指定坐标处，由里到外排列的所有元素。\nlet info = {\n  title: &quot;前端监控系统&quot;,\n  url: &quot;http://localhost:8080/&quot;,\n  timestamp: &quot;1239404040404044&quot;,\n  userAgent: &quot;chorme&quot;,\n  kind: &quot;stability&quot;,\n  type: &quot;blank&quot;,\n  emptyPoints: &quot;0&quot;, // 空白点\n  screen: &quot;2049 * 1152&quot;, // 分辨率\n  viewPoint: &quot;2048 * 994&quot;, // 视口\n  selector: &quot;HTML BODY #container&quot;, // 选择器\n};\n整体大致可以分四个阶段：信息采集、存储、分析、监控。\n\n采集阶段：收集异常日志，先在本地做一定的处理，采取一定的方案上报到服务器。\n\n存储阶段：后端接收前端上报的异常日志，经过一定处理，按照一定的存储方案存储。\n\n分析阶段：分为机器自动分析和人工分析。机器自动分析，通过预设的条件和算法，对存储的日志信息进行统计和筛选，发现问题，触发报警。人工分析，通过提供一个可视化的数据面板，让系统用户可以看到具体的日志数据，根据信息，发现异常问题根源。\n\n报警阶段：分为告警和预警。告警按照一定的级别自动报警，通过设定的渠道，按照一定的触发规则进行。预警则在异常发生前，提前预判，给出警告。\n\n性能监控： 使用 Resource Timing API 和 Performance Timing API，可以计算许多重要的指标，比如页面性能统计的起始点时间、首屏时间等。\n\n异常监控： 前端捕获异常分为全局捕获和局部捕获。局部捕获作为补充，对某些特殊情况进行捕获，但分散，不利于管理。所以，我会选择全局捕获的方式，即通过全局的接口，将捕获代码集中写在一个地方。具体在实现项目中，我应该会采用 badjs-report，它重写了 window.onerror 进行上报异常，无需编写任何捕获错误的代码。\n\n前端埋点： 埋点的方案有手动埋点，即在需要监控的地方插入监控逻辑，但是工作量可能会很大；还有无埋点，前端自动采集全部事件，上报埋点数据，但是缺点是服务器压力会很大。我可能倾向于采用声明式埋点，将埋点代码和具体的业务逻辑解耦，只用关心需要埋点的控件，并且为这些控件声明需要的埋点数据即可，主要是为了降低埋点的成本吧。在 dom 元素上增添埋点信息，比如\n\n// key表示埋点的唯一标识；act表示埋点方式\n<button data-stat=&quot;{key:'buttonKey', act: 'click'}&quot;>埋点</button>\n监控告警： 这里我认为最便捷、高效的方式，就是接入内部的告警组了吧，尤其是在阿里，似乎什么轮子都有，那可能需要考虑就是触发告警的阈值和时机了。\n\n性能：使用 Performance API，可以得到许多重要的指标，如页面性能统计的起始点时间、首屏时间等\n\n报错：使用 onerror 和 onunhandledrejection，甚至是 try catch\n\n操作行为：对事件触发函数做 patch，或者添加特定的事件监听\n\nPV/UV：利用浏览器存储方法或 Cookie、IP 等储存相应用户信息，随请求发送\n\n设备信息：获取 navigator.userAgent\n\nPV、UV 属于增长数字类型，可以用 Redis 等记录，如果有需要，定时入库。其他属于大量文字信息，可以用成熟的消息队列来消费。因为有大量写，所以可以考虑做读写分离。\n\n技术难点：\n\n可能整个系统比较复杂的就是如何高效合理的进行监控数据上传。除了异常报错信息本身，还需要记录用户操作日志，如果任何日志都立即上报，这无异于自造的 DDOS 攻击。那就需要考虑前端日志的存储，日志如何上传，上传前如何整理日志等问题。\n\n前端在收集的过程中可能会影响用户体验。\n\n后端对于收到的日志要使用合适的工具进行收集，数据量大时选择如何取舍。\n\n可能会采取的方案\n\nindexDB 存储日志，因为容量大、异步！不用考虑阻塞页面问题。\n在一个 webworker 中对日志进行整理，比如对每一条日志打上标签，进行分类等操作。\n上报日志也在 webworker 中进行，可以按照重要紧急度区分，判断是否延时或者立即上报。\n</code></pre>\n<ul>\n<li>客户端与服务端时间为什么会不对称？不对称将会出现哪些问题？</li>\n<li>前端如何保持与服务器时间同步（如何解决客户端与服务端时间不对称的问题）？</li>\n</ul>\n<pre><code>方案一：初次请求数据，将服务器的时间拿过来，通过计时器计时\n弊端：\n第一：存在网络延迟问题，前端真正拿到这个时间数据的时候并不能保证它是服务器的当前时间，因为还存在一个响应时间在里面\n第二：通过计时器计时，例如setTimeout、setInterval这种方法，同样存在误差。不同平台的误差不一样，会被机器的性能、内存占用等多方面因素影响，一分钟可能会误差几秒钟，这种误差值无法被接收的。另一种做法是通过轮询拿服务器时间，但不会这么做。\n\n方案二：在常规的做法基础上，解决它所带来的弊端。\n第一，怎么解决响应时间问题，performance记录发送请求和接收响应的时间再做差\n第二，怎么缩小计时过程中的误差，保持客户端时间和服务端时间的一致，我们可以通过本地时间计算出服务器时间，在第一次请求回来的时候，计算出服务器和客户端时间差，后面都通过这个差值计算出服务器时间\n弊端：\n在定时获取本地时间的过程中，本地时间很有可能被修改\n\n方案三：在以上的基础上，要检测出本地时间被修改的问题，我们要计算出计时的误差，可以把每次定时获取的本地时间通过变量记录下来，而我们已知定时获取的周期，这样就可以计算出本次的预期时间，有了预期值和实际值就能算出误差了。我们可以通过设置一个误差最大值，如果超出了就开始纠正，公式如下\nif(实际误差值>最大误差常量){\n  服务器时间 = 本地时间 + 网络延迟时间 + 实际误差值\n}else{\n  服务器时间 = 本地时间 + 网络延迟时间\n}\n\n</code></pre>\n<ul>\n<li>如何计算动画的帧率（FPS）？</li>\n</ul>\n<pre><code>requestAnimationFrame\n</code></pre>\n<ul>\n<li>你认为es5的设计缺陷有哪些？</li>\n<li>说一下你了解的 WebSocket 鉴权授权方案</li>\n<li>说一下实现骨架屏的方案？具体思路?</li>\n<li>如何设计状态树</li>\n<li>移动端适配方案具体实现以及对比</li>\n<li>说一下组件库设计遵循的一些原则？</li>\n</ul>\n<h3>优化</h3>\n<hr>\n<ul>\n<li>你理解的&quot;use strict&quot;;是什么?使用它有什么优缺点？常见的在严格模式下的现象</li>\n</ul>\n<pre><code>&quot;use strict&quot;指代码在严格条件下执行。严格模式的意义让项目中代码可以在严格条件下执行，可以限制一些不良的编码习惯，把问题在编码阶段就可以暴露出来\n优点：\n1. 严格模式通过抛出错误来消除一些原有的静默错误\n2. 有时候严格模式下的代码比非严格模式运行更快\n3. 消除js一些不合理、不严谨之处，减少一些怪异行为\n4. 消除一些不安全之处，保证代码运行安全\n5. 提高编译效率，增加运行速度\n6. 为未来的新版本做铺垫\n缺点：\n1. 缺失许多开发人员已经习惯的功能\n2. 无法访问function.caller和function.arguments。\n3. 以不同严格模式编写的脚本合并后可能导致问题。\n现象：\n1. 禁止this指向全局对象\n2. 全局变量必须显式声明\n3. 不能使用未声明的变量\n4. 去除了with语句\n5. 不能修改arguments，不能在函数内定义arguments变量，不能使用argument.caller和argument.callee\n</code></pre>\n<ul>\n<li>说说你对RAIL性能评估模型的了解</li>\n</ul>\n<pre><code>RAIL模型是Chrome团队于2020.6发布的一种以用户为中心的性能模型。 它提供了一种考虑性能的结构。该模型将用户体验分解为关键操作（例如，点击、滚动、加载），并帮助您为每个操作定义性能目标。RAIL 代表 Web 应用程序生命周期的四个不同方面：响应(R)、动画(A)、空闲时间(I)和加载(L)\n\nResponse : 在 50 毫秒内处理事件\n目标：在 100 毫秒内完成由用户输入发起的转换，让用户感觉交互是即时的。\n指导方针：\n事件处理函数尽量保证在50ms内完成，考虑到idle task的情况，事件会排队，等待时间大概在50ms。适用于click，toggle，starting animations等，不适用于drag和scroll；\n复杂的js计算尽可能放在后台，如web worker，避免对用户输入造成阻塞 ；\n超过50ms的响应，一定要提供反馈，比如倒计时，进度百分比等\n\nAnimation：在 10 毫秒内生成一帧\n目标：\n产生每一帧的时间不要超过10ms，为了保证浏览器60帧，每一帧的时间在16ms左右，但浏览器需要用6ms来渲染每一帧。\n旨在视觉上的平滑。用户对帧率变化感知很敏感\n指导方针：\n在一些高压点上，比如动画，不要去挑战cpu，尽可能地少做事，如：取offset，设置style等操作。尽可能地保证60帧的体验。\n\nIdle：空闲。指利用好空闲时间\n目标：最大化空闲时间，以增大50ms内响应用户输入的几率\n指导方针：\n用空闲时间来完成一些延后的工作（比如说埋点），如先加载页面可见的部分，然后利用空闲时间加载剩余部分，此处可以使用\n在空闲时间内执行的任务尽量控制在50ms以内，如果更长的话，会影响input handle的pending时间\n如果用户在空闲时间任务进行时进行交互，必须以此为最高优先级，并暂停空闲时间的任务\n\nload： 传输内容到页面可交互的时间不超过5秒\n如果页面加载比较慢，用户的交点可能会离开。加载很快的页面，用户平均停留时间会变长，跳出率会更低，也就有更高的广告查看率\n目标：\n优化加载速度，可以根据设备、网络等条件。目前，比较好的一个方式是，让你的页面在一个中配的3G网络手机上打开时间不超过5秒\n对于第二次打开，尽量不超过2秒\n指导方针：\n在手机设备上测试加载性能，选用中配的3G网络（400kb/s，400ms RTT），可以使用 WebPageTest 来测试\n要注意的是，即使用户的网络是4G，但因为丢包或者网络波动，可能会比预期的更慢\n禁用渲染阻塞的资源，延后加载defer、async等\n可以采用 lazy load、code-splitting等 其他优化手段，让第一次加载的资源更少\n影响页面加载性能的因素：\n网络速度和延迟\n硬件（例如较慢的CPU）\n缓存\n二级/三级缓存中的差异\n解析JavaScript\n</code></pre>\n<ul>\n<li>如何设计一个JS SDK？说说你的方法</li>\n</ul>\n<pre><code>SDK全称是“Software Development Kit”，直译就是软件开发工具集。比如 Java SDK（JDK），就是一个Java领域的软件包。基于它，开发人员就可以快速构建自己的Java应用。比较规范的SDK一般都会包含若干的API、开发工具集和说明文档。基于JS封装的SDK更多常见于UI组件库、统计分析、web服务接口封装、前端稳定性和性能监控等场景。\n\n遵从的设计原则：\n1. 最小可用性原则，即用最少的代码，如无必要勿增实体\n2. 最少依赖原则，即最低限度的外部依赖，如无必要勿增依赖\n\nSDK要求\n1. 满足功能需求：SDK一般都是偏于面向某个领域，所以，同时在设计和实现的时候明确职责和边界很重要，同时还应该足够精简，专注领域内的业务。\n2. 足够稳定：绝不能导致宿主应用崩溃，这是最基础也是最严格的要求；较好的性能，比如SDK体积应尽量小，运行速度尽量快；可测试，保障每一次变更；向后兼容，不轻易出现 Breakchange\n3. 少依赖，易扩展：最小程度的第三方依赖，尽可能自行实现，确实无法避免则最小化引入；插件化，最大限度支持扩展；Hook机制，满足个性化诉求\n\n怎么实现\n1.明确职责，限定边界：例如要做一个面向前端h5领域的稳定性监控和性能监控的SDK，稳定性上要关注的点JS异常、资源加载异常、API请求的异常和白屏异常；在性能方面需要关注的点可以参考Rail模型，响应时间、动画帧率、空闲时间、白屏时间、可交互时间、首屏时间等。\n\n2. 基础框架：确定SDK的引用形式，例如CDN和 NPM两种引入方式；确定SDK的版本管理机制，现有较成熟的版本管理机制当属 语义化版本号 ，表现形式为 {主版本}.{次版本}.{补丁版本}，简单易记好管理；确定SDK的基础接口，接口是SDK和用户沟通的桥梁，每一个接口对应着一个独立的SDK功能，并且有明确的输入和输出，遵从单一职责、简单清晰命名、参数校验和逻辑保护，例如jsSdk.reportJSError(error)、jsSdk.report(logData)等\n\n3. 模块细分\nSDK底层提供基础的能力，包括上面提到的内核、插件机制的实现、工具类库以及暴露给用户的基础API\n\n所有模块都以插件的形式存在，即各领域的功能都各自松散的做实现，这样使得底层能力更具通用性，同时扩展能力也更强，用户甚至也可以封装自己的插件。\n\n业务部分更多是对于不同宿主环境的多入口适配，当前支持浏览器、Weex以及NodeJS。\n</code></pre>\n<ul>\n<li>内存泄漏和内存溢出有什么区别</li>\n</ul>\n<pre><code>内存溢出 out of memory，是指程序在申请内存时，没有足够的内存空间供其使用，出现out of memory；比如申请了一个integer,但给它存了long才能存下的数，那就是内存溢出。内存溢出就是你要求分配的内存超出了系统能给你的，系统不能满足需求，于是产生溢出。\n\n内存泄漏是指你向系统申请分配内存进行使用(new)，可是使用完了以后却不归还(delete)，结果你申请到的那块内存你自己也不能再访问（也许你把它的地址给弄丢了），而系统也不能再次将它分配给需要的程序。内存泄露 memory leak，是指程序在申请内存后，无法释放已申请的内存空间，一次内存泄露危害可以忽略，但内存泄露堆积后果很严重，无论多少内存,迟早会被占光\n\n引起内存溢出的原因\n1.内存中加载的数据量过于庞大，如一次从数据库取出过多数据；\n2.集合类中有对对象的引用，使用完后未清空，使得JVM不能回收；\n3.代码中存在死循环或循环产生过多重复的对象实体；\n4.使用的第三方软件中的BUG；\n5.启动参数内存值设定的过小\n\n重点排查\n1.检查代码中是否有死循环或递归调用。\n2.检查是否有大循环重复产生新对象实体。\n3.检查List、MAP等集合对象是否有使用完后，未清除的问题。List、MAP等集合对象会始终存有对对象的引用，使得这些对象不能被GC回收。、\n</code></pre>\n<ul>\n<li>你是如何排查js内存泄漏的？造成内存泄漏的操作有哪些？</li>\n</ul>\n<pre><code>使用chrome面板的Performance和Memory\n\n当我们怀疑页面发生了内存泄漏的时候，可以先用Performance录制一段时间内页面的性能变化如果录制结束后，看到内存的下限在不断升高的话，你就要注意了 —— 这里有可能发生了内存泄漏。除了内存增长曲线，Nodes（Dom节点数曲线）、Document曲线以及Listener曲线也同样值得关注，有时候它们对内存问题的定位也很有帮助。当你怀疑发生了内存泄漏的时候，你就可以用Memory面板来进一步定位泄漏的源头了\n\n记录当前的堆内存快照（heap snapshot）,查看Shallow size 和 Retained size\n它们有什么不同？\nShallow size: 这是对象自身占用内存的大小。通常只有数组和字符串的shallow size比较大。\nRetain size: 这是将对象本身连同其无法从 GC 根到达的相关对象一起删除后释放的内存大小。 因此，如果Shallow Size = Retained Size，说明基本没怎么泄漏。而如果Retained Size > Shallow Size，就需要多加注意了。\n\n造成内存泄漏的操作有\n1. 意外创建的全局变量，即使用了未声明的变量而创建了一个全局变量，这个变量一直留在内存中无法被回收\n2. 设置了setInterval，忘记取消它。如果回调函数有对外部变量引用的话，那么这个变量会一直留在内存中无法被回收\n3. 我们获取一个DOM元素的引用，而后面这个元素被删除，由于我们一直保留了对这个元素的引用，所以它也无法被回收\n4. 不合理的使用闭包，从而导致某些变量一直被留在内存当中\n5. dom引用，当dom元素被删除时，内存中的引用未被正确清空\n6. 控制台console.log打印的东西\n</code></pre>\n<ul>\n<li>ReferenceError和TypeError有什么区别？</li>\n</ul>\n<pre><code>ReferenceError（引用错误）对象代表当一个不存在（或尚未初始化）的变量被引用时发生的错误。\nTypeError（类型错误）对象通常（但并不只是）用来表示值的类型非预期类型时发生的错误。\n\n以下情况会抛出 TypeError：\n1. 传递给运算符的操作数或传递给函数的参数与预期的类型不兼容\n2. 尝试修改无法更改的值\n3. 尝试以不适当的方法使用一个值。\n</code></pre>\n<ul>\n<li>说下你对面向对象的理解</li>\n</ul>\n<pre><code>面向对象是一种编程思想，是将现实问题构建关系，然后抽象成 类 ( class )，给类定义属性和方法后，再将类实例化成 实例 (instance) ，通过访问实例的属性和调用方法来进行使用\n</code></pre>\n<ul>\n<li>举例说明面向对象编程有什么优缺点？</li>\n</ul>\n<pre><code>优点：封装、继承、抽象、多态\n1. 设计和实现分离\n2. 扩展性高\n3. 易用性、复用性\n\n不足\n大量的创建对象会占用大量的内存空间，因此性能不如面向过程编程高，不太适用于开发一些计算机底层的应用，例如芯片开发，单片机开发等\n</code></pre>\n<ul>\n<li>\n<p>你是如何做前端性能分析的？从哪些方面入手？有哪些指标？</p>\n</li>\n<li>\n<p>举例说明什么是响应式编程？</p>\n</li>\n<li>\n<p>你知道什么是纯函数吗？</p>\n</li>\n<li>\n<p>什么是函数式编程？它有什么优缺点？</p>\n</li>\n<li>\n<p>举例说明为什么说ES模块比commonJS模块还优秀？</p>\n</li>\n<li>\n<p>请说说commonJS模块与ES模块的差异有哪些？</p>\n</li>\n<li>\n<p>说说你对js中的依赖注入的理解，它的实现方式有哪些呢？</p>\n</li>\n<li>\n<p>日常开发中写JS循环时应该注意哪些情况？</p>\n</li>\n<li>\n<p>js循环的数据量很大（例如100W+）时会出现什么情况？如何进行性能优化？</p>\n</li>\n<li>\n<p>你是如何比较js函数的执行速度的？</p>\n</li>\n<li>\n<p>如何排查页面中CPU占用高的情况？</p>\n</li>\n<li>\n<p>javascript什么时候会占CPU？</p>\n</li>\n<li>\n<p>在chrome中js的数组占用了多少内存？</p>\n</li>\n<li>\n<p>举例说明哪些场景会遇到超大计算量的问题？</p>\n</li>\n<li>\n<p>请说说DOM节点的操作如何优化？</p>\n</li>\n<li>\n<p>字符串拼接有哪些方式？哪种性能好？</p>\n</li>\n<li>\n<p>如何设计一个pageAPI？说说你的方法</p>\n</li>\n<li>\n<p>有什么方案可以提高无限滚动列表的性能</p>\n</li>\n<li>\n<p>在js中怎么捕获异常？写出来看看？应该在哪些场景下采用呢？</p>\n</li>\n<li>\n<p>一次JS的请求哪些地方会有缓存处理？</p>\n</li>\n<li>\n<p>js如何实现函数缓存？函数缓存有什么运用场景？</p>\n</li>\n<li>\n<p>说说你对堆栈跟踪的理解</p>\n</li>\n<li>\n<p>使用try catch哪些异常是捕获不到的？哪些能捕获到？捕获不到的要怎样才能捕获到？</p>\n</li>\n<li>\n<p>js的请求一般情况下在哪些地方会有缓存的处理？</p>\n</li>\n<li>\n<p>SeaJS和RequireJS有什么区别？</p>\n</li>\n<li>\n<p>如果要你自己实现一个requireJS库，你该怎么做？</p>\n</li>\n<li>\n<p>请使用js实现商品的sku，并说说你的思路</p>\n</li>\n<li>\n<p>举例说明Object.defineProperty会在什么情况下造成循环引用导致栈溢出？</p>\n</li>\n<li>\n<p>xss攻击原理？如何防御？</p>\n</li>\n<li>\n<p>csrf 攻击是怎样攻击的？ 如何防御？</p>\n</li>\n<li>\n<p>js延迟加载的方式有哪些？</p>\n</li>\n<li>\n<p>请为什么说js是单线程，而不是多线程呢？</p>\n</li>\n<li>\n<p>为什么说js是弱类型语言，它的优缺点分别是什么？</p>\n</li>\n<li>\n<p>ES5和ES6、ES7有什么区别？</p>\n</li>\n<li>\n<p>你平时是怎么调试js的？会断点调试吗？断点调试有什么技巧呢？</p>\n</li>\n<li>\n<p>js垃圾回收的方式有哪些？</p>\n</li>\n<li>\n<p>说出至少十条你理解的js规范</p>\n</li>\n<li>\n<p>请说说你对try/catch的理解，平时有在哪些场景会用到呢？</p>\n</li>\n<li>\n<p>说说你对异常处理和错误处理的理解</p>\n</li>\n<li>\n<p>js依赖注入的实现思路是什么？它有什么优缺点呢？</p>\n</li>\n<li>\n<p>说下你对IoC的理解，它有什么运用场景？</p>\n</li>\n<li>\n<p>你了解什么是AOP吗？它的作用是什么？举个例子</p>\n</li>\n<li>\n<p>ES6 代码转成 ES5 代码的实现思路是什么？大致说一下 babel 原理?</p>\n</li>\n<li>\n<p>鼠标滚动的时候，会触发很多次事件，你是如何解决的？</p>\n</li>\n</ul>\n<h3>异步</h3>\n<ul>\n<li>你是如何更好地处理Async/Await的异常的？</li>\n<li>假设要在UI渲染之前处理一些事情你该怎么办？</li>\n<li>实现异步编程有哪些方式？推荐用哪种？</li>\n<li>promise有哪几种状态？是如何变化的？</li>\n<li>Promise和setTimeout执行先后有什么区别？</li>\n<li>promise的构造函数是同步执行还是异步执行，它的then方法呢？</li>\n<li>如何取消promise？</li>\n<li>请说说你对promise的理解</li>\n<li>setTimeout(fn,0)，延迟执行吗？</li>\n<li>请解释下setTimeout的运行机制</li>\n<li>setTimeout和setInterval有什么区别呢？</li>\n<li>setTimeout的第三个参数有什么用？</li>\n<li>如何捕获 setTimeout 异常</li>\n<li>切换标签窗口后js定时器自动停止了，如何在激活标签后又继续呢？</li>\n<li>你对事件循环有了解吗？说说看！</li>\n<li>解释下JavaScript并发模型</li>\n<li>js循环中调用异步的方法，如何确保执行结果的顺序是正确的？</li>\n<li>现在有一个宏任务，又有一个微任务两者同一层级，在微任务里面又有一个宏任务和一个微任务，请问执行顺序是什么,为什么？</li>\n<li>微任务和宏任务有什么区别？</li>\n<li>异步请求重试策略有哪些呢？</li>\n<li>前端异步的使用场景有哪些？</li>\n<li>说说你理解的同步和异步的区别是什么？</li>\n<li>js异步加载有哪些方案？</li>\n<li>异步加载和延迟加载有什么区别？</li>\n<li>requestIdleCallback在EventLoop的什么阶段执行？如何执行？</li>\n<li>requestAnimationFrame在EventLoop的什么阶段执行？</li>\n<li>EventLoop有优点但也有缺点，请说说它的缺点是什么？</li>\n<li>你知道什么是空闲回调(requestIdleCallback)吗？</li>\n<li>接口请求时需要做哪些安全处理？怎么做？</li>\n<li>ajax请求地址只支持http/https吗？能做到让它支持rtmp://等其它自定义协议吗 ？</li>\n<li>说说防止重复发送ajax请求的方法有哪些？各自有什么优缺点？</li>\n<li>ajax如何接收后台传来的图片？</li>\n<li>一个api接口从请求数据到请求结束共与服务器进行了几次交互？</li>\n<li>axios拦截器原理是什么？</li>\n<li>axios为什么可以使用对象和函数两种方式调用？是如何实现的？</li>\n<li>fetch和axios请求的原理都是基于XMLHttpRerequst吗？</li>\n<li>使用ajax轮询接口有什么优缺点？</li>\n<li>在axios中怎样添加授权验证？</li>\n<li>Ajax请求中get和post方式有什么区别呢？分别在哪些场景下使用？</li>\n<li>formData主要是用来做什么的？它的操作方法有哪些？</li>\n<li>fetch 和 ajax 区别</li>\n<li>axios如何一次发送多个并发请求</li>\n<li>请详细描述AJAX的工作原理</li>\n<li>请描述下ajax的请求都有哪些步骤？</li>\n<li>说说CORS为何要区分预检请求和简单请求呢？</li>\n<li>你知道什么是PAJAX吗？它和AJAX有什么区别？它的应用场景有哪些？</li>\n<li>axios为什么能在浏览器中环境运行又能在node中环境运行？</li>\n<li>ajax请求中为何会出现OPTIONS请求？</li>\n<li>pjax和ajax的区别是什么？</li>\n<li>你有使用过pjax吗？它的原理是什么？</li>\n<li>使用ajax请求真的不安全吗？为什么？</li>\n<li>axios相比原生ajax的优点有哪些呢？</li>\n<li>ajax的请求状态有哪几种？</li>\n<li>请说说json和jsonp的区别？</li>\n<li>JSONP的原理是什么？解决什么问题？</li>\n<li>当用户刷新网页时，js的请求有哪些地方会有缓存处理呢？</li>\n<li>页面的编码和被请求的资源编码不一致时如何处理？</li>\n<li>手写一个 Ajax</li>\n</ul>\n<h3>数据结构与算法</h3>\n<ul>\n<li>说一下递归和迭代的区别是什么，各有什么优缺点？</li>\n<li>说说你对js排序的理解，你有了解哪些算法呢？举例说明数组的排序方法有哪些？</li>\n<li>分析下'sum = n * (n - 1) / 2'的时间复杂度是什么？</li>\n<li>一个好的算法都应包含哪些要素？</li>\n<li>请解释下算法有什么特征（基本要素）？</li>\n<li>请解释下数据结构与算法的关系</li>\n<li>说说你对数据结构和数据类型的理解</li>\n<li>哈希表的原理是什么？</li>\n<li>如果要让你去实现一个散列函数，你将从哪些方面考虑？</li>\n<li>什么是散列函数？它有什么特征？</li>\n<li>是否所有的循环都能用递归代替？为什么？如果不可以，请举例说明</li>\n<li>你觉得递归好写吗？</li>\n<li>解释下深度优先遍历和广度优先遍历的区别及如何实现</li>\n<li>为什么js里定义的数组可以不定长且数据类型可以不固定呢？</li>\n<li>js最大支持多少长度的数组？为什么？</li>\n<li>说说你对稀疏数组的理解</li>\n<li>举例说明你对尾递归的理解，它有什么应用场景？</li>\n<li>举例说明js中什么是尾调用优化？</li>\n<li>Number()的存储空间是多大？假如接口返回一个超过最大字节的数字怎么办？</li>\n<li>使用js按贝格尔编排算法生成单循环对阵表</li>\n<li>构造一个自定义二维 N<em>N 矩阵，从左上角第一个单元格依次填入1 - N</em>N的数字，从矩阵中指定单元格出发，经过相邻的单元格(不可重复)，走 X 步，输出所有可能的路径和每条路径单元格对应的数字。</li>\n<li>计算从一个大数组中(如1万条数据)取出第一数据和最后一条数据的时间分别是多少？</li>\n</ul>\n<pre><code>时间相同，数组一种线性表数据结构，用一组连续的内存空间，来存储一组具有相同类型的数据。数组是用连续内存空间存储相同类型的元素，就是因为有这个限制条件，使得数组按照下标随机访问(随机访问：可以用同等的时间访问到一组数据中的任意一个元素)数组中数据元素时间复杂度达到 O(1) 级别\n</code></pre>\n<ul>\n<li>什么是UUID？它有什么作用？用js写一个生成UUID的方法</li>\n</ul>\n<pre><code>UUID 是 通用唯一识别码（Universally Unique Identifier）的缩写，是一种软件建构的标准，亦为开放软件基金会组织在分布式计算环境领域的一部分。\n\nUUID 用于解决 ID 唯一的问题，主要确保唯一\n\n生成方式\n1. 使用Math.random()\n2. 使用crypto提供的randomUUID方法\n3. 使用crypto提供的getRandomValues方法\n</code></pre>\n<ul>\n<li>实现 10 进制转换为 36 进制</li>\n<li>常见手写算法，Array.sort()、Math.random()</li>\n</ul>\n<pre><code>sort原理\nv8提供了插入排序+快排序两种方式，当数据量小时使用更加稳定的插入排序，当数据量大于1000,会采用快排和插入排序混合的方式进行排序。插入排序时间复杂度O(n^2),比较稳定，快速排序时间复杂度O(nlogn-n^2),不稳定排序\n\n插入排序：双重循环，比较当前的值和已经排好序的值，如果小于拍好序的值，则插入到数组中\n\nrandom原理\n\n线性同余生成器(LCG)生成伪随机数，生成递推方程\na[n+1] = (A*a[n]+B) mod M\n\nLCG最大长度为M，要达到最大周期应符合以下条件\n1. B，M互质\n2. M的所有质因数都能整除A-1\n3. 若M是4的倍数，A-1也是\n4. A、B、a[0]都比M小\n5. A、B是正整数\n\n随机即任何数字都可能出现，是等概率的，线性同余是如何实现均匀分布的？\n\n一元一次方程,然后值取余，x是上一次的值，得到y会成为下一次的x，由此会得到周期性上下摆动的数列，他们的每一项都是等概率的。当数据量足够多时可以反推A、B、M值，并不是真正意义上的乱序\n</code></pre>\n<h3>BOM</h3>\n<ul>\n<li>如何解决在手机上长时间点击会选中图</li>\n<li>js操作节点的方法有哪些？</li>\n<li>为什么jsonp不支持post的方法？</li>\n<li>document.write和innerHTML有什么区别？</li>\n<li>如何使用js来截图？怎样截可见区域和整个页面？</li>\n<li>添加原生事件如果不移除为什么会内存泄露？</li>\n<li>使用原生js给一个按钮绑定两个onclick事件</li>\n<li>如何监听浏览器窗口大小变化？</li>\n<li>请说说html、body、document、window四者的区别是什么？</li>\n<li>window对象和document对象有什么区别？</li>\n<li>请说说你对事件冒泡机制的理解？</li>\n<li>移动端点击事件为什么会有延迟？有哪些方法可以解决？</li>\n<li>AudioContext有什么应用场景？</li>\n<li>如何按回车自动提交表单</li>\n<li>在设置keyup监听事件后按F5刷新和按浏览器中刷新键刷新有什么区别？</li>\n<li>innerHTML与outerHTML有什么区别？</li>\n<li>Geolocation.getCurrentPosition()用来做什么的？在什么浏览器不受兼容？</li>\n<li>document.domain的作用是什么？它有什么限制？</li>\n<li>说下你对alert的理解，它有哪些特性呢？及使用它时要注意些什么？</li>\n<li>如何创建视频文件的blob？</li>\n<li>举例说明createDocumentFragment和createElement有什么区别？</li>\n<li>解释下点击一个input输入框，依次会触发哪些事件？</li>\n<li>如何区分返回内容是文件流还是json数据？</li>\n<li>请问，javascript可以读取本地的文件吗？为什么？</li>\n<li>js的控制台输出，平时除了用console.log外，你还知道哪些？使用console.log应该注意什么？</li>\n<li>平时调试用console.log的输出结果可信吗？为什么？</li>\n<li>用原生js获取DOM元素的方法有哪些？</li>\n<li>W3C的事件处理和IE的事件处理有哪些区别？</li>\n<li>你对window的属性devicePixelRatio有了解吗？说说它有什么实际应用场景？</li>\n<li>举例说明你对事件代理的理解</li>\n<li>解释下offsetWidth、clientWidth、scrollWidth这三者的区别是什么？</li>\n<li>举例说明常用的BOM属性和方法有哪些？</li>\n<li>各浏览器的事件机制有什么不同？ 如何阻止事件冒泡？</li>\n<li>举例说明js拖拽用到的事件有哪些？</li>\n<li>onload事件和domcontentloaded哪个先执行呢？</li>\n<li>返回到顶部的方法有哪些？把其中一个方法出来</li>\n<li>&quot;attribute&quot;和&quot;property&quot;有什么不同？</li>\n<li>为什么会有跨域问题？怎么解决跨域？</li>\n<li>document的load 和ready有什么区别？</li>\n<li>什么是事件委托？它有什么好处？能简单的写一个例子吗？</li>\n<li>有用过HTML5的WebWork吗？它主要解决了什么问题？</li>\n<li>如何终止WebWork？</li>\n<li>请解释下什么是cookie隔离？为什么要隔离？如何隔离？</li>\n<li>举例说明什么是decodeURI()和encodeURI()是什么？</li>\n<li>请描述你对浏览器同源策略的理解</li>\n<li>把Script标签放在页面最底部的</body>之前和之后有什么区别？浏览器会如何解析它们？</li>\n<li>写例子说明如何给li绑定事件（ul下有1000+个li）？</li>\n<li>要实现一个js的持续动画，你有什么比较好的方法？</li>\n<li>不依赖第三方库，说下如何使用js读取pdf？</li>\n<li>不用第三方库，说说纯js怎么实现读取和导出excel？</li>\n<li>能否正确获取本地上传的文件路径？如果可以怎么做？如果不可以解释下为什么？</li>\n<li>请说说escape、encodeURI、decodeURI、encodeURIComponent和decodeURIComponent的区别？</li>\n<li>你有用过webRTC吗？它有什么运用场景？</li>\n<li>保护js代码的方式有哪些？分别说说他们的原理是什么？</li>\n<li>举例说明js关闭当前窗口有哪些方法？</li>\n<li>说说用原生js实现封装一个选项卡的功能</li>\n<li>用js实现页面局部打印和预览原理是什么呢？同时在IE上有什么不同？</li>\n<li>阻止事件的默认行为有哪些？说说它们之间的区别是什么？</li>\n<li>请举例说明动态操作DOM的方法有哪些？</li>\n<li>你有使用过ExtJs吗？说说它的优缺点是什么？</li>\n<li>你有使用过BackboneJS吗？说说它和vue有什么区别？</li>\n<li>js事件中currentTarget和target的区别是什么？</li>\n<li>写例子说明js中自定义事件的使用与触发</li>\n<li>getelementbyId和queryselect平时经常使用哪一个？说说你的看法</li>\n<li>如何实现锁定网页、密码解锁的效果？说说你的方法和步骤是什么？</li>\n<li>在js中attribute和property的区别是什么？</li>\n<li>你有使用过FileReader吗？说说它有哪些应用场景？</li>\n<li>stopPropagation()和preventDefault()这两个方法有什么区别？</li>\n<li>你有用过哪些3D渲染的库？</li>\n<li>如果让你把把html页面导出为pdf，不用插件的话，你该怎么做？</li>\n<li>pageshow和pageshide有什么应用场景呢？</li>\n<li>有了解过getSelection API吗？怎么使用，有哪些场景？</li>\n<li>window.console.log()和console.log()有区别吗？体现在哪里？</li>\n<li>举例说明document.execCommand有哪些用途</li>\n<li>说说你对postMessage的理解，它有什么运用场景呢？</li>\n</ul>\n<pre><code>window.postMessage() 方法可以安全地实现跨源通信。通常，对于两个不同页面的脚本，只有当执行它们的页面位于具有相同的协议（通常为 https），端口号（443 为 https 的默认值），以及主机 (两个页面的模数 Document.domain设置为相同的值) 时，这两个脚本才能相互通信。window.postMessage() 方法提供了一种受控机制来规避此限制，只要正确的使用，这种方法就很安全\n</code></pre>\n<ul>\n<li>用js封装一个前端分页的库，说说你的思路</li>\n<li>页面上的DOM有多个相同的ID，用js获取时结果会是怎么样的？</li>\n<li>如何在用户刷新、跳转、关闭浏览器时向服务端发送统计的数据？</li>\n<li>在浏览器标签页之间切换触发的事件是哪个？</li>\n<li>说说你对HTML5中video blob的理解</li>\n<li>你觉得虚拟DOM快吗？还有没有比它还快的方式？</li>\n<li>DOM0、DOM2、DOM3事件处理方式的区别是什么？</li>\n<li>有用过Handlebars模板引擎吗？它的工作原理是怎样的？</li>\n<li>举例说明js鼠标事件有哪些？</li>\n<li>微信的JSSDK都有哪些内容？如何接入？</li>\n<li>script所在的位置会影响首屏显示时间吗？</li>\n<li>在DOM上同时绑定两个点击事件（一个用捕获，一个用冒泡），事件总共会执行几次，先执行哪个事件？</li>\n<li>flash如何与js交互？</li>\n<li>在不支持js的浏览器中如何隐藏JavaScript代码？</li>\n<li>alert如何让文本换行？</li>\n<li>innerHTML有什么缺点？</li>\n<li>localStorage什么时候过期？</li>\n<li>说说你对JSBridge的理解</li>\n<li>写一个 document.querySelector 的逆方法</li>\n<li>说说你对js沙箱的理解，它有什么应用场景？</li>\n<li>js源代码压缩都有哪些方法？它们的压缩原理分别是什么？</li>\n<li>微信小程序实现轨迹回放，微信原生小程序，基于uniapp的小程序？</li>\n<li>你用过Navigator.sendBeacon()吗？说说它有什么应用场景？</li>\n<li>async属性诞生的初衷是什么？</li>\n<li>你能用js模拟出右键的复制和粘贴功能吗？如果可以说下是如何操作的？如果不可以请说明下理由</li>\n<li>js延迟加载的方式中，只有IE浏览器支持的是哪一种方式</li>\n<li>当用户打开一个网页时，想一直停留在当前打开的页面，如何禁止页面前进和后退</li>\n<li>前端下载文件的方式有哪些？</li>\n<li>使用window.open(url)下载文件时为什么会被浏览器拦截？如何解决？</li>\n<li>sessionStrorage也可以使用onstorage事件吗?</li>\n<li>动态加载的li如何绑定事件？</li>\n<li>getComputedStyle和element.style有什么不同？</li>\n<li>说说MutationObserver的应用场景有哪些？</li>\n<li>在多个页面之间需要传递参数，你是如何传递这些参数的？</li>\n<li>怎样做到js无阻塞加载？</li>\n<li>什么情况下会出现js阻塞？</li>\n<li>cookie的值可以设置为中文吗？为什么？如果可以怎么设置？</li>\n<li>你有用过哪些模板引擎？你觉得哪个好用？为什么？</li>\n<li>浏览器中window.length的结果是什么？为什么？</li>\n<li>浏览器中的剪切板是如何监听复制事件的？</li>\n<li>使用js如何改变url参数值，并且页面不刷新？</li>\n<li>举例说明判断浏览器是否支持某个事件的方法有哪些？</li>\n<li>请说说focus、blur与focusin、focusout的区别是什么？</li>\n<li>url链接中如果有两个问号会出现什么问题？如果通过js获取url的参数时能正常获取到吗？</li>\n<li>请问css/html/js/img的下载顺序是怎样的？都是并发执行的吗？</li>\n</ul>\n<h3>对象</h3>\n<ul>\n<li>callee和caller的区别和作用是什么？</li>\n<li>js的sort方法运用场景有哪些？</li>\n<li>如何让js的filter方法支持大小写？</li>\n<li>举例说明这三种方法map、reduce和filter的区别是什么？</li>\n<li>说说你对ArrayBuffer的理解！它和Array有什么区别？</li>\n<li>js能够保证object属性的输出顺序吗？如果可以怎么做？</li>\n<li>对象的键可以重复吗？为什么？如果可以重复将会又什么样的表现？</li>\n<li>举例说明js创建数组有哪些方法？</li>\n<li>如果使用JSON.stringify进行深拷贝有什么弊端？如何解决？</li>\n</ul>\n<pre><code>1. 函数\n2. undefined\n3. 循环引用\n</code></pre>\n<ul>\n<li>\n<p>请说说你对内置对象和宿主对象的理解</p>\n</li>\n<li>\n<p>深拷贝里的循环引用如何解决？</p>\n</li>\n<li>\n<p>js中Iterable对象和Array有什么区别？</p>\n</li>\n<li>\n<p>map和forEach有什么区别？</p>\n</li>\n<li>\n<p>使用delete删除数组，其长度会改变吗？</p>\n</li>\n<li>\n<p>js的循环结构有哪些？</p>\n</li>\n<li>\n<p>如何判断两个对象相等？</p>\n</li>\n<li>\n<p>说说你对js对象生命周期的理解</p>\n</li>\n<li>\n<p>Math.ceil()、Math.round()、Math.floor()三者的区别是什么？</p>\n</li>\n</ul>\n<pre><code>ceil:天花板，向上取整\nround：四舍五入\nfloor：地板，向下取整\n</code></pre>\n<ul>\n<li>js的数组/对象在内存中分别是如何存储的？</li>\n<li>如何判断一个对象是否为空？</li>\n<li>举例说明数组和对象的迭代方法分别有哪些？</li>\n<li>说说你对深浅拷贝的理解？并实现一个对数组和对象深拷贝的方法</li>\n<li>举例说明js如何实现继承？</li>\n<li>说说你对arguments的理解，它是数组吗？</li>\n<li>json和对象有什么区别？</li>\n<li>如何判断对象是否属于某个类？</li>\n<li>ArrayBuffer和Blob有什么区别？</li>\n<li>遍历数组和对象的方法都有哪些？</li>\n<li>举例说明object.freeze有哪些用途呢？</li>\n<li>原生Math的方法有哪些？请列举并描述其功能</li>\n<li>写出几种创建对象的方式，并说说他们的区别是什么？</li>\n<li>深度克隆对象的方法有哪些，并把你认为最好的写出来</li>\n<li>说说你对js包装对象的理解</li>\n<li>说说你对base64的理解，它的使用场景有哪些？</li>\n<li>举例说明atob和btoa的用法</li>\n<li>简要描述下JS有哪些内置的对象</li>\n<li>清空一个数组的方式有哪些？它们有什么区别</li>\n<li>解释下如下代码的意图：Array.prototype.slice.apply(arguments)</li>\n<li>for in 和 for of 的区别？</li>\n<li>使用for-in语句能保证遍历对象的顺序吗？如果不能那为什么？如果可以那又如何保证？</li>\n<li>你知道js的可选链是什么吗？说说你对它的理解，它有什么应用场景？</li>\n<li>请比较下for、forEach、for of的性能的性能</li>\n<li>说说js跳出循环return、break、continue的区别？</li>\n<li>JSON.stringify有什么局限性和哪些技巧？</li>\n<li>请举例说明JSON.stringify()有哪些特性？</li>\n<li>请说下你对__proto__和prototype的理解</li>\n<li>请描述下什么是原型模式？它主要运用在哪些场景？</li>\n<li>请描述下js的原型和原型链的理解以及它们之间的关系</li>\n<li>字符串从哪里来的split方法和length属性？</li>\n<li>new Function有什么应用场景？</li>\n<li>js怎样避免原型链上的对象共享？</li>\n<li>原生的字符串操作方法有哪些？请列举并描述其功能</li>\n<li>字符串相连有哪些方式？哪种最好？为什么？</li>\n<li>举例说明如何使用WebSQL？</li>\n</ul>\n<h3>作用域与上下文</h3>\n<ul>\n<li>说一下 JavaScript 的执行流程</li>\n<li>什么是词法分析？请描述下js词法分析的过程？</li>\n<li>js的函数有哪几种调用形式？</li>\n<li>说说你对执行上下文的理解</li>\n<li>js函数调用方式有哪些？</li>\n<li>js函数定义方式有哪些？</li>\n<li>在js中函数返回多个值有哪些方法？</li>\n<li>函数声明与函数表达式有什么区别？</li>\n<li>请描述下函数的执行过程</li>\n<li>纯函数和函数式编程有什么关系？</li>\n<li>为什么要用纯函数？</li>\n<li>为什么eval要添加括号呢？</li>\n<li>举例说明constructor和instanceof的区别是什么？</li>\n<li>说下你对柯里化函数(currying)的理解，它有什么运用场景？</li>\n<li>说下你对函数的形参与实参的理解</li>\n<li>js怎么实现一个类并实例化这个类？</li>\n<li>举例说明什么是匿名函数？它有什么优缺点呢？</li>\n<li>请解释下执行栈有哪些特点？</li>\n<li>一个函数调用会产生多少个上下文环境？</li>\n<li>请解释下为什么我们可以在声明函数前使用它？</li>\n<li>说说你对函数是一等公民的理解</li>\n<li>写一个函数时，如果有多个参数，如何传才比较好？</li>\n<li>说说你对javascript的作用域的理解</li>\n<li>闭包是如何形成的？</li>\n<li>请说说你对活动对象的理解</li>\n<li>请说说你对变量对象的理解</li>\n<li>如果给你一段代码，你能画出执行过程的上下文堆栈的变化吗？</li>\n<li>如何激活一个上下文？</li>\n<li>在严格模式下，全局作用域中函数中this的值是什么？</li>\n<li>请说说严格模式下的this指向</li>\n<li>分别解释下js中默认绑定、隐式绑定、显式绑定、new绑定的区别</li>\n<li>请解释下什么是softbind，并实现一个softbind</li>\n<li>js的作用域有哪些？</li>\n<li>解释下什么是暂时性死区？</li>\n<li>class和普通构造函数有什么区别？</li>\n<li>函数的调用栈是怎么工作的？</li>\n<li>请说说JS中的索引数组、关联数组和静态数组、动态数组的定义与区别</li>\n<li>使用js如何创建一个private方法？</li>\n<li>js的哪些操作可以改变作用域链？</li>\n<li>解释下隐式全局变量和外部函数作用域</li>\n<li>说说你对JS中暂性死区的理解，它有什么运用场景？</li>\n<li>说说你对作用域链的理解</li>\n<li>举例说明什么是IIFEs？它有什么好处？</li>\n<li>说说你对this的理解？写出4个使用this的典型例子</li>\n<li>说说你对IIFE的理解</li>\n<li>说说你对模块化的理解</li>\n<li>说说你对eval的理解</li>\n<li>什么是闭包？优缺点分别是什么？</li>\n<li>你对new操作符的理解是什么？手动实现一个new方法</li>\n<li>箭头函数的this值继承于哪里</li>\n<li>下面代码是否会导致堆栈溢出错误</li>\n</ul>\n<pre><code class=\"language-js\">function foo() {\n  setTimeout(foo, 0);\n}\nfoo();\n// 是否存在堆栈溢出错误\n</code></pre>\n<ul>\n<li>写出执行结果，并解释为什么？</li>\n</ul>\n<pre><code>  <script>\n    // 使用未定义的变量\n    a;\n    console.log(1);\n  </script>\n  <script>\n    console.log(2);\n  </script>\n</code></pre>\n<p>答案解析</p>\n<pre><code>答案\n报错 2\n\n分析\n对于 Javascript 而言，我们面对的仅仅只是异常，异常的出现不会直接导致 JS 引擎崩溃，最多只会使当前执行的任务终止。\n\n所以上述过程如下：\n\n当前代码块将作为一个任务压入任务队列中，JS 线程会不断地从任务队列中提取任务执行。\n当任务执行过程中出现异常，且异常没有捕获处理，则会一直沿着调用栈一层层向外抛出，最终终止当前任务的执行。\nJS 线程会继续从任务队列中提取下一个任务继续执行。\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/CompNode0058.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/CompNode0058.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<ul>\n<li>说下你对 Node.js 支持高并发的理解？</li>\n<li>说下 Node 文件查找的优先级以及 Require 方法的文件查找策略</li>\n<li>说一下进程和线程的区别？</li>\n<li>node 如何做错误监控？如何生成日志？日志等级如何划分？</li>\n<li>Node 如何和 MySQL 进行通信</li>\n<li>说一下 koa-body 的原理</li>\n<li>说一下 koa2 和 express 区别</li>\n<li>node 中间层怎样做的请求合并转发</li>\n<li>React SSR实现过程？原理是什么？有什么注意事项？</li>\n<li>Node性能如何进监控以及优化？</li>\n<li>node 如何进行跨域通信</li>\n<li>介绍 node 文件查找优先级</li>\n<li>npm2 和 npm3+有什么区别</li>\n<li>node 接口转发有无做什么优化？node 起服务如何保证稳定性，平缓降级，重启等</li>\n<li>使用过的 koa2 中间件，中间件的原理是什么？</li>\n<li>介绍 koa2，原理是什么？</li>\n<li>koa2 和 express 区别</li>\n<li>node 中间层怎样做的请求合并转发</li>\n<li>如何封装 node 中间件</li>\n</ul>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/CompNode提问0010.tsx":
/*!*********************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/CompNode提问0010.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<ol>\n<li>使用Node.js创建一个http server，监听端口3000，如果请求接口是/users且是post请求，则返回{&quot;status&quot;:200,&quot;message&quot;:&quot;Hello World!&quot;},否则返回{&quot;status&quot;:400,&quot;message&quot;:&quot;request error&quot;}；使用koa怎么实现？</li>\n</ol>\n<p>node实现</p>\n<pre><code class=\"language-js\">const http = require('http');\n\nconst server = http.createServer((req,res)=>{\n  if(req.method === 'POST' &amp;&amp; req.url === '/users'){\n    res.end(JSON.stringify({data:{&quot;status&quot;:200,&quot;message&quot;:&quot;Hello World!&quot;}}))\n  }else{\n    res.end(JSON.stringify({&quot;status&quot;:400,&quot;message&quot;:&quot;request error&quot;}))\n  }\n});\n\nserver.listen(3000);\n</code></pre>\n<p>koa实现</p>\n<pre><code></code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/CompReact0059.tsx":
/*!********************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/CompReact0059.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>React常见的面试题</h1>\n<p>问题形式构成包括是什么?为什么？优缺点？例如React单向数据流</p>\n<pre><code>什么是数据流？\n为什么是自顶向下的？\n单向数据流是什么意思？\n为什么是单向的？不能是双向的数据流嘛？\n单向数据流有什么作用呢\n</code></pre>\n<h3>React概念和理解</h3>\n<ul>\n<li>说说你对声明式编程的理解？声明式和命令式？</li>\n</ul>\n<pre><code>声明式面向对象编程，命令式面向过程编程\n例如要绘制一个按钮，命令式写法是html+css,直接写。声明式写法，先new一个按钮对象，调用对象的各种方法set边框，背景，边距等\n</code></pre>\n<ul>\n<li>说说你对运行时的理解？运行时和编译时?</li>\n</ul>\n<pre><code>运行时即代码的运行阶段，代码被机器识别解析过程\n编译时即源代码需要被编译成机器可以识别的程序，这个阶段就是编译时\n例如document.createElement,document.appendChild等就是运行时，它能直接被浏览器所识别，做过其他转化即编译时\n</code></pre>\n<ul>\n<li>你对immutable有了解吗？它有什么作用？</li>\n</ul>\n<pre><code>不可变（immutable）指的是 在变量赋值或对象创建结束之后就使用者就不能再改变它的值或状态。java中的final关键词/String，js中的const。不可变指的是对象的引用不可变\n\n不可变通常用于：常量、只读变量。常量指的时默认不会变的值，例如圆周率，摄氏度转华氏度的差值。我们在还没写代码前就知道这些值了，且它们永远不会变；只读变量的值是在 程序运行时才初始化的，初始化后就不会再变化\n\n不可变关键字的上述这两种用法主要出于两个目的\n\n1. 增强语义，提高代码可读性 —— 阅读代码时，一看就能把常量和只读变量和其他可变变量区别开。\n（拓展：不少学生/初级程序员轻视了代码的可读性，其实优秀的代码最重要的指标之一就是可读性 —— 高质量的代码结构分明，一目了然，方便扩展。可读性高的代码可维护性自然也高，即使有bug也能快速定位到。）\n2. 防止人为错误不小心修改 —— 试想一下一个数学计算程序里， PI 的值不小心被修改了，会有什么后果\n\n不可变还有其他好处\n\n1. 线程安全：不可变对象天然支持线程安全 —— 创建成功后就不变，可读不可写，大大降低了编写多线程代码的负担。\n2. 参数传递和避免副作用：有副作用的函数/方法经常会产生一些隐晦的bug。一个对象作为参数传入了一些函数/方法，却被故意/无意地修改了其中的值，然而代码的其他部分并不知情，就会产生意料之外的bug。一个有益的办法就是将作为参数的对象类设计成不可变的，在编码和编译时期就直接避免了这个问题。\n3. interning 和 object pooling（对象池）\n//Java\nString s1 = &quot;Hello&quot;;\nString s2 = &quot;Hello&quot;;\nSystem.out.println(s1 == s2); // 输出 true\n\n//Java\nString s1 = new String(&quot;Hello&quot;); // 非字面量\nString s2 = new String(&quot;Hello&quot;);\nSystem.out.println(s1 == s2); // 输出 false\n\n4. 不可变对象的变化和对比优势\n由于不可变对象创建后值就不再变化，想“更改”它的值只有一个办法就是创建一个新的对象。如果“修改的逻辑”处理之后不发生任何变化，那么就把原对象返回。这种设计的好处就是直接比较原对象和新对象的引用地址就可以知道是否发生变化，大大提高了比较的性能。react 和 redux 就采用了这种设计：redux store 内的 state 可以直接使用 === 来比较，确认是否发生了变化。React 的 state, props 也是如此。\n\n不可变也存在一些痛点\n1.  很多时候，不可变对象的设计都会导致更多的对象被创建，造成了一定的内存压力，但事实上，这点内存压力并不会对性能造成太大影响。相比不可变带来的好处而言，这不算什么。\n2. 创建不可变对象有时候需要会写更多的代码，例如redux 或 react 中，假设有一下 state 定义\n\n\n//JavaScript\nconst state = {\n  a: &quot;jobs&quot;,\n  b: {\n    e: {\n      f: {\n        g: &quot;hello&quot;,\n        y: &quot;omg&quot;\n      },\n      k: 3\n    },\n    i: 2\n  },\n  h: &quot;deep&quot;\n}\n要基于state生成一个新的state，且更改 g 的值，用原生ES6语法就得这么写\n\n//JavaScript\nconst newState = {\n  ...state,\n  b: {\n    ...state.b,\n    e: {\n      ...state.b.e,\n      f: {\n        ...state.b.e.f,\n        g: &quot;new hello&quot;      \n      }\n    }\n  }\n}\n对于存在深层嵌套的对象，有不少解决方案，比如immer.js\nimport produce from &quot;immer&quot;\n\nconst newState = produce(state, draftState => {\n  draftState.b.e.f.g=&quot;new hello&quot;\n})\n</code></pre>\n<ul>\n<li>immutable.js的原理是什么？</li>\n</ul>\n<pre><code>Immutable.js 采用了持久化数据结构和结构共享，保证每一个对象都是不可变的，任何添加、修改、删除等操作都会生成一个新的对象，且通过结构共享等方式大幅提高性能。\n\n对于一个持久化数据结构，每次修改我们都会得到一个新的版本，且旧版本可以完好保留。\n结构共享：新生成一个根节点，对于有修改的部分，把相应路径上的所有节点重新生成，对于本次操作没有修改的部分，我们可以直接把相应的旧的节点拷贝过去，这其实就是结构共享。\n\n</code></pre>\n<ul>\n<li>请描述你对纯函数的理解？</li>\n</ul>\n<pre><code>纯函数有两个特点\n\n1. 相同的输入，永远会得到相同的输出。\n2. 执行过程中不会产生副作用\n</code></pre>\n<ul>\n<li>说说你对React的理解？React是什么？主要特点？设计思想？工作原理？优缺点？对比其他框架</li>\n</ul>\n<pre><code>react是一个js库。它专注于视图层ui的渲染，能将页面拆分成小块独立开发，最后经过一定的逻辑进行组装得到我们需要的前端系统，并且可与其他库和框架结合使用。遵循组件化的开发模式、声明式编程范式和函数式编程概念，让前端应用的开发更加高效。。它有以下四个特点\n1. 页面组件化：React将UI分解为小的、可重用的组件，使得开发人员可以更轻松的组合和重用代码，React的组件化使得代码更容易维护和测试。\n\n2. 虚拟DOM：虚拟DOM是一个轻量级的js对象，用于表示真实dom的层次结构。第一个好处是可以保证性能下限，通过虚拟dom，React使用了diff算法来计算出两次dom变更的最小差异，并且只渲染最小差异变化，同时React会将多次dom操作进行合并并且批量更新，从而提升性能，即在不需要手动优化的情况下，依然可以提供还不错的性能；第二个好处是们不再需要手动去操作 DOM，开发者只需专注于代码逻辑，框架会帮助我们以可预期的方式更新视图，极大提高我们的开发效率；第三个好处是虚拟 DOM 本质上是 JavaScript 对象,与平台不相关，可以更方便的跨平台操作，例如服务端渲染、native等\n\n3. 状态驱动视图：即UI=F(data),状态是输入, 视图是输出: 状态 => 视图, 视图是基于状态的渲染结果。核心思想就是: 只要状态变化, 就重新渲染视图。状态不能直接修改，而是要通过setState方法进行修改\n\n4. 单向数据流：即数据从父组件通过props传给子组件的过程中，子组件只接收父组件传来的props，并且响应父组件传来的 props的变化，而不能直接修改props来影响父组件。单向数据流的好处在于所有的状态改变可追溯。\n\n它的设计思想\n  React的设计思想是用js构建快速响应的大型Web应用程序，其设计理念就是快速响应。为了实现这一理念，需要突破CPU的瓶颈和IO瓶颈。CPU瓶颈即当遇到大计算量的操作或者设备性能不足使页面掉帧，导致卡顿。IO瓶颈即发送网络请求后，由于需要等待数据返回才能进一步操作导致不能快速响应。\n\n  由于js引擎和gui渲染线程的互斥性，当js执行时间过长，超出了浏览器的刷新频率（每一次16.7ms），那么这次刷新就没有时间执行样式布局和样式绘制了。导致页面掉帧，造成卡顿。react为了解决这个问题，通过时间切片的方式将长任务分拆到每一帧中，这就就能让浏览器有时间渲染UI，避免阻塞ui渲染。\n\n  为了解决IO瓶颈，React实现了Suspense组件及配套的hook——useDeferredValue。来应对异步操作带来的ui不一致问题。\n\n工作原理\n  React是一个专注于视图渲染的ui库，它的更新原理即\n  1. 调用函数组件或者调用类组件的render方法，将返回的JSX转化为虚拟DOM;\n  2. 将虚拟DOM和上次更新时的虚拟DOM对比;\n  3. 通过对比找出本次更新中变化的DOM节点;\n  4. 通知渲染器将变化的DOM节点渲染到页面上;\n\n对比其他框架\n\n  jquery：事件驱动，优点开发迅速，缺点混乱易错，在大量dom需要更新的情况容易出错\n  react：状态驱动，基于单向数据流、组件化、虚拟dom的运行时框架\n  vue：mvvm，基于视图和状态双向绑定的编译时+运行时的框架，使用模版语法，可以使用 v-if v-for 这些指定的语法去编码，虽然这不够动态，但是由于语法是可枚举的，所以它可以在预编译层面做更多的预判，让Vue在运行时有更好的性能\n  svelte：纯编译时，性能好\n  backbone.js：mvc\n\n  React面世时提出的三个核心特点是Just UI、 虚拟dom和单向数据流，随着React团队对于React的不断优化，现在React的三个最大特点是声明式、组件化和多端(native、node)渲染\n\n  Just UI：React可以认为只是一个模板引擎，使用在任何mv*(mvc,mvvvm等)的框架中做view层，使用react的组件化思想。在MVC模式中，controller是十分重要的一环，它负责从数据库中取出数据并处理渲染到View上，同时当用户进行交互时它也负责获取用户交互内容并处理，进而存储到数据库中，controller承担了巨大的责任。然而，随着项目越来越复杂，尤其是数据解析能力的复杂化，承担巨大责任的controller会变得越来越复杂和臃肿，使其难以维护。聪明的开发者提出了ViewModel的概念，ViewModel的主要作用就是处理数据解析。ViewModel将用户行为和视图状态的处理抽象出来，成为可复用的模块，解决了复杂数据处理下Controller的臃肿，和频繁更新dom等问题\n</code></pre>\n<ul>\n<li>研究过 React 的运行时吗？</li>\n</ul>\n<pre><code>React 是一个重运行时的框架，在数据发生变化后，并没有直接去操作dom，而是生成一个新的虚拟dom，它可以帮助我们解决跨平台和兼容性问题，并且通过diff算法得出最小的操作行为，这些全部都是在运行时来做的，而Svelte ，就是一个典型的重编译的框架，作为开发者我们只需要去写模版和数据，经过Svelte的编译和预处理，代码基本全部会解析成原生的DOM操作，Svelte的性能也是最接近原生js的。\n\nReact本身的思路是纯JS写法，这种方式非常灵活，但是，这也使它在编译时很难做太多的事情，像上面这样的编译时优化是很难实现的。所以，我们可以看到React几个大版本的的优化主要都在运行时。运行时主要关注CPU和IO问题，\n\nreact 15版本架构：协调+渲染，比较两颗虚拟Dom进行Diff找出变化进行渲染，更新的批处理。由于本身架构的问题，diff是通过递归同步更新的，如果节点非常多，即使只有一次state变更，React也需要进行复杂的递归更新，递归更新时间超过了16ms，如果这时有用户操作或动画渲染等，就会表现为卡顿。\n\nreact 16版本架构：协调+调度+渲染，通过时间切片的方式将长任务拆分到每一帧中，每一帧执行一小段任务。底层重构完成了Fiber架构，实现异步可中断可恢复的更新操作,并且实现按照优先级执行任务。\n</code></pre>\n<ul>\n<li>你是如何学习React的？</li>\n</ul>\n<pre><code>1. 获取高质量的资料（官方、权威）\n2. 敢于尝试和勤于练习\n3. 善于思考总结、愿意交流分享\n4. 持续学习\n</code></pre>\n<ul>\n<li>你觉得React上手快不快？它有哪些限制？</li>\n</ul>\n<pre><code>1. React 只是一个库，而不是一个完整的框架\n2. 它的库非常庞大，需要时间来理解\n3. 新手程序员可能很难理解\n4. 编码变得复杂，因为它使用内联模板和JSX\n</code></pre>\n<ul>\n<li>在使用React过程中你都踩过哪些坑？你是怎么填坑的？</li>\n</ul>\n<pre><code>1. React最大的问题是重渲染问题，即父组件更新时，它下面的所有子组件也会默认更新（如果不做处理的话）。\n2. setState是同步还是异步的问题\n3. react合成事件的问题，合成事件是池化的，也就是说不同的事件，可能会共享一个合成事件对象。React对所有事件都进行了代理，将所有事件都绑定document上\n\nclass component \n1. extends React.Component或者React.pureComponent,导致依赖不透明\n2. 类组件，this 默认不指向组件实例\n在construtor中绑定this，或者使用箭头函数\n\nreact hooks\n必须在函数组件中才能使用且不能在循环、条件的代码段里调用。\n\n关于useState\n1. 一个state必须不能通过其它state/props直接计算出来，否则就不用定义state\n2. useState返回的更新状态方法是异步的，要在下次重绘才能获取新值。不要试图在更改状态之后立马获取状态\n3. 管理多个字段时适当合并\n\n关于useEffect\n1. 闭包问题\n组件中出现setTimeout等闭包时，尽量在闭包内部引用ref而不是state，否则容易出现读取到旧值的情况\n\n</code></pre>\n<ul>\n<li>说说你喜欢React的原因是什么？它有什么优缺点？</li>\n</ul>\n<pre><code>1. 能够实现服务器端的渲染，便于搜索引擎优化。\n2. 能够很好的和现有的代码结合。React专注View层，\n3. 组件化，React部分重构因为一切都是component，所以代码更加模块化，重用代码更容易\n4. 虚拟DOM，性能很好\n5. 灵活，\n\n</code></pre>\n<ul>\n<li>你最喜欢React的哪一个特性（说一个就好）？你最不喜欢React的哪一个特性（说一个就好）？</li>\n</ul>\n<pre><code>最喜欢函数式编程\n它与react设计是贴合的，在 React中，强调一个组件不能去修改传入的prop值，也是遵循Immutable的原则。React中的render函数应该是一个纯函数来保证组件渲染的结果只和props和state有关系，遵从UI = F(data)公式\n\n最不喜欢React的合成事件\n现代浏览器的DOM API已经趋于一致和稳定。只要放弃 IE，打薄事件层，立刻可以让react-dom大幅度瘦身。并且这个合成事件带来了和原生事件不一致的地方。例如onChange 和 onInput。\n</code></pre>\n<ul>\n<li>说出几点你认为的React最佳实践</li>\n</ul>\n<pre><code>在管理react项目时需要做到高内聚低耦合可扩展、分离关注点，降低心智负担，持续降低复杂度，因此以下几点非常重要\n1. 做好状态管理\n多个组件的状态同步\n子组件通过props去操作父组件的状态\n跨多级组件传递状态\n2. 类型很重要\n3. 不要自己封装公用函数\n处理时间的库：day.js。\n处理数据的库：lodash。\n处理表单的库：formik。\n处理数据请求的库：SWR、axios\n4. 管理好项目目录\n5. 选择适合自己的组件库\nmantine\nAntd\nMui\n如果是 C 端项目，建议使用 TailwindCSS。\n</code></pre>\n<ul>\n<li>你阅读了几遍React的源码？都有哪些收获？你是怎么阅读的？</li>\n</ul>\n<pre><code>阅读源码的收获\n阅读源码的过程中，能够了解底层是怎么运作的。如果在工作中遇到某些问题，如果读过源码，就会找到办法，问题也就会迎刃而解\n\n阅读源码绝对是提高编程能力，拓展知识点的捷径\n\n优秀的源码有着纵览大局，运筹帷幄的思维，和中流砥柱的架构能力，这对一个正在进阶或者正打算进阶的工程师来说，是最缺少的。\n\n如何进行阅读\n1. 有计划的去阅读源码。把整个源码分割成多个模块，一点点去消化，不要想着一口气把源码看完，一天抽出时间看一点，然后重点记笔记。\n2. 在阅读源码的时候先问几个为什么？带着问题去看源码会起到事半功倍的效果\n3. 我们要学会提炼源码的精髓，把真正的核心逻辑代码提取出来\n4. 实践是检验真理的唯一标准。如果想搞清楚源码，不要单独停留在看的层面，也要真正去跑一遍源码\n5. 并不是所有的框架源码都需要一个固定的模式去解析的，不同的框架用不同的方法\n\n</code></pre>\n<h3>JSX和虚拟DOM</h3>\n<ul>\n<li>React必须使用JSX吗？</li>\n</ul>\n<pre><code>React 并不强制要求使用JSX。当你不想在构建环境中配置有关JSX编译时，不在React中使用JSX会更加方便。每个JSX元素只是调用React.createElement(component, props, ...children)的语法糖。因此，使用JSX可以完成的任何事情都可以通过纯 JavaScript 完成。\n</code></pre>\n<ul>\n<li>JSX和HTML有什么区别？</li>\n</ul>\n<pre><code>1. HTML 和 JSX 之间的主要区别之一是，在 JSX 中，你必须返回单个父元素，否则将无法编译。\n\n2. 在JSX中，可以直接编写JS。你可以通过将JS放在花括号 {...} 中来实现。而在 HTML 中，你需要一个脚本标签或一个外部JS文件来实现JS\n\n3. 标签可以在 JSX 中自闭合。也就是说，可以将 <div></div> 写成 <div />，将 <span></span> 写成 <span />。HTML 中的自闭合标签可以在右尖括号没有斜线的情况下自闭合，即 <br /> 可以写成 <br>。但是在 JSX 中，需要加上斜杠。这应该让人想到——JSX 严重依赖于 HTML 4 语法。\n\n4. 要在 JSX 中定义 class 名和 for 属性，不要将其定义为 class 或 for，因为两者都是 JavaScript 中的保留关键字。你实际上使用 class 关键字创建 class 组件。因此，要在 JSX 中定义 class 名，你可以将其定义为 “className”，而对于标签的 for 属性，你可以写成 “HTMLFor”\n\n5. 在编写 JSX 时，你需要将所有 HTML 属性和事件引用以驼峰命名法编写。所以，onclick 变成 onClick，onmouseover 变成 onMouseOver，依此类推\n\n6. 在 JSX 中将内联样式编写为对象\n</code></pre>\n<ul>\n<li>JSX是什么，它和JS有什么区别？说说React jsx转换成真实DOM的过程？如何解析JSX？</li>\n</ul>\n<pre><code>JSX是react的语法糖，它允许在html中写JS，它不能被浏览器直接识别，需要通过webpack、babel之类的编译工具转换为JS执行\n\nJSX与JS的区别：\nJS可以被打包工具直接编译，不需要额外转换，jsx需要通过babel编译，它是React.createElement的语法糖，使用jsx等价于React.createElement\njsx是js的语法扩展，允许在html中写JS；JS是原生写法，需要通过script标签引入\n\nreact中的jsx语法会通过babel转化为 js代码，以React.createElement函数形式存在，createElement函数返回一个ReactElement函数，ReactElement函数返回一个的虚拟节点，虚拟节点中嵌套虚拟节点，就形成了虚拟DOM，最后通过ReactDOM.render方法转化为真实DOM。\n\nbabel在转化jsx过程中，会判断首字母大小写\n当首字母为小写的时候，会被认为是原生DOM标签，那么createElement中的第一个参数就是一个字符串，表示标签的名称\n当首字母为大写的时候，会被认为是组件，那么createElement中的第一个参数就是组件的名称\n\ncreateElement会根据传入的type进行判断\n如果是原生标签节点，type是字符串，如 span div\n如果是文本节点，type就没有\n如果是函数组件，type就是函数名\n如果是类组件，type就是类组件名\n\n</code></pre>\n<ul>\n<li>浏览器为什么无法直接JSX？怎么解决呢？</li>\n</ul>\n<pre><code>因为浏览器只能解决原生的JS代码，jsx不属于原生的js，它是类似于html的语法，然后转化成一个js对象。 这个转化的过程就是通过Babel的@babel/plugin-transform-react-jsx插件实现的。 \n</code></pre>\n<ul>\n<li>怎么防止HTML被转义？</li>\n</ul>\n<pre><code>直接使用 UTF-8 字符 ©\n使用对应字符的 Unicode 编码，查询编码\n使用数组组装 <div>{['cc ', <span>&amp;copy;</span>, ' 2015']}</div>\n直接插入原始的 HTML\n</code></pre>\n<ul>\n<li>写React你是用es6还是es5的语法？有什么区别？</li>\n</ul>\n<pre><code>使用createClass, 每一个函数属性都会被React自动绑定。指的是this.whateverFn这样的函数在任何你需要调用的时候都会自动为你绑定正确的this。\n\n在ES6的class中，就不同了: 函数不再被自动绑定。你需要手动去绑定它们。最好的地方就是和以上例子一样，在构造函数里。\n</code></pre>\n<ul>\n<li>ES6的语法'...'在React中有哪些应用？</li>\n</ul>\n<pre><code>1. 向子组件传递props\n2. redux中参数合并\n</code></pre>\n<ul>\n<li>给组件设置很多属性时不想一个个去设置有什么办法可以解决这问题呢？</li>\n</ul>\n<pre><code>通过es6展开符。例如<MyComp {...this.props}/>\n</code></pre>\n<ul>\n<li>为什么建议Fragment包裹元素？它的简写是什么？你有用过React.Fragment吗？说说它有什么用途？</li>\n</ul>\n<pre><code>在我们定义组件的时候return里最外层包裹的div往往不想渲染到页面，那么就要用到我们的Fragment组件了。它可以代替div作为外层，可做不可见的包裹元素。它的简写为<></>。\n</code></pre>\n<ul>\n<li>React中怎么操作虚拟DOM的Class属性？</li>\n</ul>\n<pre><code>通过组件的内置方法classList，包含contains,add等方法\n</code></pre>\n<ul>\n<li>为什么属性使用className而不是class呢？为什么标签里的for要写成htmlFor呢？</li>\n</ul>\n<pre><code>JS的DOM API中使用的是className，React的JSX为了保持和DOM API一致。\n同理还有for-> htmlFor\n</code></pre>\n<ul>\n<li>说说Real DOM和Virtual DOM的区别？优缺点？框架为什么要设计Virtual DOM？</li>\n</ul>\n<pre><code>Real DOM 意思为文档对象模型，是一个结构化文本的抽象，在页面渲染出的每一个结点都是一个真实DOM结构\nVirtual Dom，本质上是以 JavaScript 对象形式存在的对 DOM 的描述\n\n区别\n虚拟DOM不会进行排版与重绘操作，而真实DOM会频繁重排与重绘\n虚拟DOM的总损耗是“虚拟DOM增删改+真实DOM差异增删改+排版与重绘”，真实DOM的总损耗是“真实DOM完全增删改+排版与重绘”\n\n真实DOM优缺点\n优点：易用\n缺点：效率低，解析速度慢，内存占用量过高性能差：频繁操作真实DOM，易于导致重绘与回流\n\n虚拟DOM的优缺点\n优点\n简单方便：如果使用手动操作真实DOM来完成页面，繁琐又容易出错，在大规模应用下维护起来也很困难\n性能方面：使用Virtual DOM，能够有效避免真实DOM数频繁更新，减少多次引起重绘与回流，提高性能\n跨平台：React借助虚拟DOM， 带来了跨平台的能力，一套代码多端运行\n\n缺点\n在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化\n首次渲染大量DOM时，由于多了一层虚拟DOM的计算，速度比正常稍慢\n\n</code></pre>\n<ul>\n<li>React的虚拟DOM和Vue的虚拟DOM有什么区别？</li>\n</ul>\n<pre><code>结构并没有多大差别，主要体现在diff过程中的差别\n\nvue基于编译时+运行时的框架，做到动静结合的 DOM diff，之所以能够做到预编译优化，是因为 Vue core 可以静态分析 template，在解析模版时，整个 parse 的过程是利用正则表达式顺序解析模板，当解析到开始标签、闭合标签、文本的时候都会分别执行对应的回调函数，来达到构造 AST 树的目的。\n\nreact是重运行时框架，React JSX 过度的灵活性导致运行时可以用于优化的信息不足，但是，在 React 框架之外，我们作为开发者还是可以通过工程化手段达到类似的目的，因为我们能够接触到 JSX 编译成 React.createElement 的整个过程。开发者在项目中开发 babel 插件，实现 JSX 编译成 React.createElement，那么优化手段就是是从编写 babel 插件开始。\n</code></pre>\n<ul>\n<li>你知道Virtual DOM的工作原理吗？</li>\n</ul>\n<pre><code>创建和更新：即创建或者更新js对象的属性，更难且核心的部分是diff，diff的目的就是比较新旧Virtual DOM Tree找出差异并更新\ndiff：通常情况下的DOM变更是同级的,因此在现代的各种Virtual DOM库都是只比较同级差异，双端比较过程即\n1. 头头对比: 对比两个数组的头部，如果找到，把新节点patch到旧节点，头指针后移\n2. 尾尾对比: 对比两个数组的尾部，如果找到，把新节点patch到旧节点，尾指针前移\n3. 旧尾新头对比: 交叉对比，旧尾新头，如果找到，把新节点patch到旧节点，旧尾指针前移，新头指针后移\n4. 旧头新尾对比: 交叉对比，旧头新尾，如果找到，把新节点patch到旧节点，新尾指针前移，旧头指针后移\n5. 利用key对比: 用新指针对应节点的key去旧数组寻找对应的节点,这里分三种情况,当没有对应的key，那么创建新的节点,如果有key并且是相同的节点，把新节点patch到旧节点,如果有key但是不是相同的节点，则创建新节点\n\n优化：双端比较算法\n</code></pre>\n<ul>\n<li>说说React diff的原理是什么？</li>\n</ul>\n<pre><code>diff算法就是更高效地通过对比新旧Virtual DOM来找出真正的Dom变化之处,react中diff算法主要遵循三个层级的策略：\n\n1. tree层级:DOM节点跨层级的操作不做优化，只会对相同层级的节点进行比较,只有删除和创建操作\n2. conponent 层级:如果是同一个类的组件，则会继续往下diff运算，如果不是一个类的组件，那么直接删除这个组件下的所有子节点，创建新的\n3. element 层级:对于比较同一层级的节点们，为了节点复用，每个节点在对应的层级用唯一的key作为标识。提供了 3 种节点操作，分别为 INSERT_MARKUP(插入)、MOVE_EXISTING (移动)和 REMOVE_NODE (删除)\n</code></pre>\n<ul>\n<li>为何说虚拟DOM会提高性能？</li>\n</ul>\n<pre><code>虚拟DOM相当于在js和真实的dom中间加了缓存，利用了dom的diff算法减少了没有必要的dom操作，从而提高了性能。\n\n</code></pre>\n<h3>React组件化</h3>\n<ul>\n<li>说说你对“在React中，一切都是组件”的理解</li>\n</ul>\n<pre><code>组件是 React 应用 UI 的构建块的基本单位。这些组件将整个 UI 分成小的独立并可重用的部分。每个组件彼此独立，而不会影响 UI 的其余部分\n</code></pre>\n<ul>\n<li>有用过React的严格模式吗？有什么用？</li>\n</ul>\n<pre><code>严格模式使用<StrictMode>组件，它将为组件内的整个组件树启用额外的开发环境检查，这些检查有助于在开发过程中尽早地发现组件中的常见错误，启用严格模式如下：\n<StrictMode>\n  <App />\n</StrictMode>\n\n严格模式启用后，将会有以下行为：\n\n1. 组件将 重新渲染一次，以查找由于非纯渲染而引起的错误。\n2. 组件将 重新运行 Effect 一次，以查找由于缺少 Effect 清理而引起的错误。\n3. 组件将被 检查是否使用了已弃用的 API。\n所有这些检查仅在开发环境中进行，不会影响生产构建。\n</code></pre>\n<ul>\n<li>请说说React中Portal是什么？有用过React的插槽(Portals)吗？怎么用？举例说明React的插槽有哪些运用场景？</li>\n</ul>\n<pre><code>调用 createPortal 创建 portal，接收两个参数，分别为JSX组件节点和实际渲染的目标DOM节点\n\nportal 只改变 DOM 节点的所处位置。在其他方面，渲染至 portal 的 JSX 的行为表现与作为 React 组件的子节点一致。该子节点可以访问由父节点树提供的 context 对象、事件将从子节点依循 React 树冒泡到父节点\n\n特别注意的是事件传播\nportal 中的事件传播遵循 React 树而不是 DOM 树。例如点击 <div onClick> 内部的 portal，将触发 onClick 处理程序。如果这会导致意外的问题，请在 portal 内部停止事件传播，或将 portal 移动到 React 树中的上层\n\nportal应用\n1. 你可以使用 portal 创建一个浮动在页面其余部分之上的模态对话框\n2. portal 允许组件将它们的某些子元素渲染到 DOM 中的不同位置。这使得组件的一部分可以“逃脱”它所在的容器。\n</code></pre>\n<ul>\n<li>怎样在React中使用innerHTML？</li>\n</ul>\n<pre><code><div dangerouslySetInnerHTML={{__html:''}} />\n\ninnerHTML不适当的用法会带来跨站脚本攻击（XSS），dangerouslySetInnerHTML被设计用来警示开发者，赋值给__html属性的值必须得是经过处理的（react不会帮你处理，需要开发者自己保证数据是值得信赖的），你可以用第三方库dompurify来帮你处理数据\n\n</code></pre>\n<ul>\n<li>有用过React的Fragment吗？它的运用场景是什么？</li>\n</ul>\n<pre><code><Fragment> 通常使用 <>...</> 代替，它们都允许你在不添加额外节点的情况下将子元素组合\n\n运用场景\n1. 返回多个元素，你可以使用它将多个元素等效于单个元素\n2. 分配多个元素给一个变量\n3. 组合文本与组件 \n4. 渲染 Fragment 列表，当你在循环中渲染多个元素时，你需要为每一个元素分配一个 key。如果这个元素为 Fragment 时，则需要使用普通的 JSX 语法来提供 key 属性\n</code></pre>\n<ul>\n<li>React中什么是非控组件和受控组件？ 受控组件和非受控组件有什么区别？</li>\n</ul>\n<pre><code>React中的组件分为将状态变化交由React处理的组件和通过ref引用获取的组件两种，前者称为受控组件，后者称为非受控组件。\n非受控组件的状态在组件自身存储，需要的时候通过ref查询DOM并查找其值。\n</code></pre>\n<ul>\n<li>createElement与cloneElement两者有什么区别？</li>\n</ul>\n<pre><code>React.createElement():JSX 语法就是用 React.createElement()来构建 React 元素的。它接受三个参数，第一个参数type可以是一个标签名。如 div、span，或者 React 组件。第二个参数props为传入的属性。第三个以及之后的参数children，皆作为组件的子组件。\n\nReact.cloneElement()与 React.createElement()相似，不同的是它传入的第一个参数element是一个 React 元素，而不是标签名或组件。新添加的属性会并入原有的属性，传入到返回的新元素中，而旧的子元素将被替换。将保留原始元素的键和引用。\n</code></pre>\n<ul>\n<li>解释下React中Element（元素） 和Component（组件）两者的区别是什么？</li>\n</ul>\n<pre><code>ReactElement是描述屏幕上所见的内容的数据结构,是对于UI的对象的表述，它的数据结构本质是一个 JS 对象.典型的ReactElement就是利用JSX构建的声明式代码片段,然后被转化为createElement的调用组合.\n\nReactComponent则是可以接收参数输入并且返回某个ReactElement的函数或者类.\n</code></pre>\n<ul>\n<li>解释下React中component和pureComponent两者的区别是什么？</li>\n</ul>\n<pre><code>Component是React App的基本构建的单位，也是React中的基本代码复用单位。PureComponent与Component在除了shouldComponentUpdate方法的实现之外几乎完全相同，PureComponent已经替我们实现了shouldComponentUpdate方法\n\n对于PureComponent而言，当其props或者state改变之时，新旧props与state将进行浅对比（shallow comparison）。另一方面，Component默认的情况下其shouldComponentUpdate方法并不进行新旧props与state的对比\n\n比于Component，PureCompoent的性能表现将会更好。但使用PureCompoent要求满足如下条件：\n\nprops和state都必须是不可变对象（immutable object）。\nprops和state不能有层级嵌套的结构，（否则对子层级的改变无法反映在浅拷贝中）。\n如果数据改变无法反应在浅拷贝上，则应该调用forceUpdate来更新Component。\n一个PureComponent的子Component也应当是PureComponent。\n\n</code></pre>\n<ul>\n<li>React自定义组件你写过吗？说说看都写过哪些？</li>\n</ul>\n<pre><code>根据类型划分即函数组件和类组件，现在基本都使用函数组件了；根据业务划分两类组件 全局可复用组件和局部功能组件\ncard组件，基本实现：枚举几类尺寸不同的卡片，分别给这几种卡片写好样式，外面传入数据进行展示\n弹窗组件，基本实现：使用portal传送门来实现全局的弹窗管理\n\n</code></pre>\n<ul>\n<li>React组件的state和props两者有什么区别？</li>\n</ul>\n<pre><code>props是组件的属性，是从父组件传递子组件的数据，props是只读的，子组件无法修改它的值。可以将props看成是组件的配置项，用于传递数据和函数给组件\n\nstate是组件内部的状态，用于存储组件的数据和更新组件，state是可变的，一般通过setState来修改它的值，当state值发生变化时，react会自动重渲染组件。\n</code></pre>\n<ul>\n<li>在React中声明组件时组件名的第一个字母必须是大写吗？为什么？</li>\n</ul>\n<pre><code>react组件首字母必须大写；因为React根据首字母是否大写来区分是react组件还是dom元素。React中使用JSX语法，但浏览器无法识别JSX语法，需通过babel对JSX语法进行转义；而如果组件的首字母为小写时，其会被认定为原生DOM标签，创建一个不存在的标签是会报错的。\n</code></pre>\n<ul>\n<li>什么是React的组件实例？函数式组件有没有实例？</li>\n</ul>\n<pre><code>class组件通过new关键，实例化之后，再调用实例的render函数获得React元素。而函数组件是函数直接返回了React元素(没有实例化)。再将这些元素通过ReactDOM.render(React元素,  目标dom节点);函数渲染到指定节点。\n</code></pre>\n<ul>\n<li>说说你是怎么理解React的业务组件和技术组件的？</li>\n</ul>\n<pre><code>业务组件：耦合业务逻辑，与业务强相关的小范围内复用的组件\n技术组件：通用的与业务不相关的组件，可在全局范围内通用的组件\n</code></pre>\n<ul>\n<li>展示组件和容器组件有什么区别？</li>\n</ul>\n<pre><code>容器组件/展示组件的划分，采用了单一职责原则的设计模式，容器组件专门负责和 store 通信，展示组件只负责展示，解除了组件的耦合，可以带来更好的可复用性\n</code></pre>\n<ul>\n<li>React怎么拿到组件对应的DOM元素？</li>\n</ul>\n<pre><code>在函数组件中，父组件要拿到子组件的真实dom，需通过forwardRef包裹子组件，并且在子组件中使用useImperativeHandle对外透出钩子，这样就能从父组件中拿到子组件的DOM了。\n</code></pre>\n<ul>\n<li>React组件间共享数据方法有哪些？</li>\n</ul>\n<pre><code>父子组件间的通信：props+callback\n兄弟组件间的通信：通过共同的父组件\n不太相关组件间通信：Context、发布-订阅模式、redux等全局管理库\n</code></pre>\n<ul>\n<li>如果组件的属性没有传值，那么它的默认值是什么？</li>\n</ul>\n<pre><code>undefined\n\n</code></pre>\n<ul>\n<li>React中验证props的目的是什么？</li>\n</ul>\n<pre><code>由于js是一门动态类型的语言，只有当程序运行时才能发现变量类型错误。react的props是当作组件的输入，对props的类型验证可以避免运行时的类型错误，并且可以提高程序的可读性。\n</code></pre>\n<ul>\n<li>在React中我们怎么做静态类型检测？都有哪些方法可以做到？</li>\n</ul>\n<pre><code>flow、prop-types、typescript\n</code></pre>\n<ul>\n<li>React中你有使用过propType吗？它有什么作用？</li>\n</ul>\n<pre><code>随着应用程序不断增长，可以通过类型检查捕获大量错误。PropTypes就是一种类型验证工具，PropTypes 提供一系列验证器，可用于确保组件接收到的数据类型是有效的\n</code></pre>\n<ul>\n<li>React中怎么检验props？</li>\n</ul>\n<pre><code>PropTypes\n</code></pre>\n<ul>\n<li>React中除了在构造函数中绑定this,还有别的方式吗？</li>\n</ul>\n<pre><code>箭头函数\n</code></pre>\n<ul>\n<li>在React中页面重新加载时怎样保留数据？</li>\n</ul>\n<pre><code>这个问题就设计到了数据持久化， 主要的实现方式有以下几种：\n\nRedux： 将页面的数据存储在redux中，在重新加载页面时，获取Redux中的数据；\ndata.js： 使用webpack构建的项目，可以建一个文件，data.js，将数据保存data.js中，跳转页面后获取；\nsessionStorge： 在进入选择地址页面之前，componentWillUnMount的时候，将数据存储到sessionStorage中，每次进入页面判断sessionStorage中有没有存储的那个值，有，则读取渲染数据；没有，则说明数据是初始化的状态。返回或进入除了选择地址以外的页面，清掉存储的sessionStorage，保证下次进入是初始化的数据\nhistory API： History API 的 pushState 函数可以给历史记录关联一个任意的可序列化 state，所以可以在路由 push 的时候将当前页面的一些信息存到 state 中，下次返回到这个页面的时候就能从 state 里面取出离开前的数据重新渲染。react-router 直接可以支持。这个方法适合一些需要临时存储的场景。\n</code></pre>\n<ul>\n<li>React中可以在render访问refs吗？为什么？</li>\n</ul>\n<pre><code>不可以，render阶段DOM还没有生成，无法获取DOM，可以在pre-commit阶段(getSnapshotBeforeUpdate)或者commit阶段(componentDidMount,componentDidUpdate)\n</code></pre>\n<ul>\n<li>React中refs的作用是什么？有哪些应用场景？</li>\n</ul>\n<pre><code>Refs 是 React 提供的用来保存 object 引用的一个解决方案，在函数式组件使用 useRef 创建一个 ref 对象，ref 对象存在一个可直接修改的 current 属性，内容都是存在 current 上。Refs 使用场景主要分为两个方向，其一是实现 DOM 访问与操控、在两次render之间传递数据内容\n\n应用场景\n1. 访问或者操作DOM节点\n2. 保存数据，并且数据的变化不会引起渲染\n</code></pre>\n<ul>\n<li>为什么建议不要过渡使用Refs？</li>\n</ul>\n<pre><code>refs会占用内存，过度使用容易浪费内存\n</code></pre>\n<ul>\n<li>React 废弃了哪些生命周期？为什么？</li>\n</ul>\n<pre><code>componentWillMount\ncomponentWillReceiveProps\ncomponentWillUpdate\n废弃的原因，是在React16的Fiber架构中，调和过程会多次执行will周期，不再是一次执行，失去了原有的意义。此外，多次执行， 在周期中如果有setState或者dom操作，会触发多次重绘，影响性能，也会导致数据错乱\n</code></pre>\n<ul>\n<li>React16跟之前的版本生命周期有哪些变化？</li>\n</ul>\n<pre><code>新增\ngetDerivedStateFromProps\ngetSnapshotBeforeUpdate\n\ngetDerivedStateFromError\ncomponentDidCatch\n</code></pre>\n<ul>\n<li>说说React的生命周期有哪些？？说说React生命周期有哪些不同的阶段？每个阶段对应的方法是？</li>\n</ul>\n<pre><code>旧的生命周期\n挂载\nconstructor\ncomponentWillMount\nrender\ncomponentDidMount\n更新\ncomponentWillReceiveProps\nshouldComponentUpdate\ncomponentWillUpdate\nrender\ncomponentDidUpdate\n卸载\ncomponentWillUnmount\n\n新的生命周期\n挂载\nconstructor\ngetDerivedStateFromProps\nrender\ncomponentDidMount\n更新\ngetDerivedStateFromProps\nshouldComponentUpdate\nrender\ngetSnapshotBeforeUpdate\ncomponentDidUpdate\n卸载\ncomponentWillUnmount\n\n</code></pre>\n<ul>\n<li>componentWillUpdate可以直接修改state的值吗？</li>\n</ul>\n<pre><code>不能，会造成死循环。因为componentWillUpdate会在render之前触发，在这个函数中我们之所以不调用this.setState()是因为该方法会触发另一个componentWillUpdate(),如果我们componentWillUpdate()中触发状态更改,我们将以无限循环结束.\n\n</code></pre>\n<ul>\n<li>React组件的构造函数有什么作用？React组件的构造函数是必须的吗？</li>\n</ul>\n<pre><code>在react的新的写法中，每一个组件都是一个类，这个很符合es6的语法规范，在es6中要想创建一个对象，就要调用相应的构造函数, react的组件渲染有两种情况，第一种情况是第一次渲染，第二种情况是状态更新时候重新渲染,构造函数在组件的初次渲染中只会运行一次，构造函数里进行的操作一般有三种用途：\n1、指定this --> super(props)\n2、设置初始化的状态 --> this.setState({});\n3、为组件上的构造函数绑定this\n</code></pre>\n<ul>\n<li>在构造函数中调用super(props)的目的是什么？</li>\n</ul>\n<pre><code>代表调用父类的构造函数。ES6要求，子类的构造函数必须执行一次super函数。这是必须的，否则JavaScript引擎会报错。\n</code></pre>\n<ul>\n<li>super()和super(props)有什么区别？</li>\n</ul>\n<pre><code>在访问子组件中的任何方法或数据之前，super是构造函数中的第一条语句，使用这个语句，this.props返回未定义，为了使其成为this.props，你必须在子类构造函数的第一行调用super(props)。\n</code></pre>\n<ul>\n<li>constructor和getInitialState有不同？</li>\n</ul>\n<pre><code>constructor用在class组件中\ngetInitialState用在createReactClass实现的组件中\n\n如果使用createClass方法创建一个Component组件，可以自动调用它的getInitialState方法来获取初始化的State对象\n在constructor里我们可以直接指定 this.state = { }， 我们可以当前组件内任何地方使用 this.setState()来改变组件状态;\n</code></pre>\n<ul>\n<li>React中传入组件的props改变时更新组件的几种实现方法</li>\n</ul>\n<pre><code>我们使用react的时候常常需要在一个组件传入的props更新时重新渲染该组件，常用的方法是在componentWillReceiveProps中将新的props更新到组件的state中（这种state被成为派生状态（Derived State）），从而实现重新渲染。React 16.3中还引入了一个新的钩子函数getDerivedStateFromProps来专门实现这一需求。更好的实现方案\n1. 完全受控组件\n2. 完全不受控组件\n3. 在父组件中调用子组件的方法设置state\n</code></pre>\n<ul>\n<li>React的性能优化在哪个生命周期？它优化的原理是什么？</li>\n</ul>\n<pre><code>shouldComponentUpdate\n\n当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。返回值默认为 true。首次渲染或使用 forceUpdate() 时不会调用该方法。\n\nReact中props,state值的变化，会导致组件重新渲染。使用shouldComponentUpdate就是为了减少不必要的渲染。 返回布尔值，然后做 Virtual DOM 比较，并得出是否需要做真实 DOM 更新，尽管React的虚拟算法复杂度已经有了很多优化，但是在大规模组件更新时，依然会是个不必要的损耗。会带来很多无必要的渲染并成为性能瓶颈。接下来使用来这个生命周期来解决吧\n\n内置的 React.PureComponent 组件。PureComponent 会对 props 和 state 进行浅层比较，并减少了跳过必要更新的可能性。不建议shouldComponentUpdate() 中进行深层比较或使用 JSON.stringify()。这样非常影响效率，且会损害性能。\n注意：如果你的state或props永远都会变，那PureComponent并不会比较快，因为shallowEqual也需要花时间\n</code></pre>\n<ul>\n<li>React的函数式组件有没有生命周期？</li>\n</ul>\n<pre><code>没有，也不需要\n\n1. 贴合函数式编程，\n2. 函数没有实例，调用完了就销毁了，没有生命周期概念\n</code></pre>\n<ul>\n<li>React中修改prop引发的生命周期有哪几个？</li>\n</ul>\n<pre><code>componentWillReceiveProps(nextProps)：组件从父组件接收到新的 props 之前调用。\ncomponentWillUpdate()：组件开始重新渲染之前调用。 \ncomponentDidUpdate()：组件重新渲染并且把更改变更到真实的 DOM 以后调用\n</code></pre>\n<ul>\n<li>React中调用setState会更新的生命周期有哪几个？</li>\n</ul>\n<pre><code>componentWillReceiveProps\ncomponentShouldUpdate\ncomponentWillUpdate\nrender\ncomponentDidUpdate\n</code></pre>\n<ul>\n<li>React中发起网络请求应该在哪个生命周期中进行？为什么？</li>\n</ul>\n<pre><code>总的来说，对于异步请求，最好放在componentDidMount中去操作，对于同步的状态改变，可以放在componentWillMount中，一般用的比较少\n\n1.跟服务器端渲染（同构）有关系，如果在componentWillMount里面获取数据，fetch data会执行两次，一次在服务器端一次在客户端。在componentDidMount中可以解决这个问题，componentWillMount同样也会render两次。\n\n2.在componentWillMount中fetch data，数据一定在render后才能到达，如果你忘记了设置初始状态，用户体验不好。\n\n3.react16.0以后，componentWillMount可能会被执行多次。\n</code></pre>\n<ul>\n<li>说说react的事件机制？16和17有什么区别？</li>\n</ul>\n<pre><code>react自身实现了一套自己的事件机制，包括事件注册、事件的合成、事件冒泡、事件派发等，虽然和原生的是两码事，但也是基于浏览器的事件机制下完成的。react 的所有事件并没有绑定到具体的dom节点上而是绑定在了document 上，然后由统一的事件处理程序来处理，同时也是基于浏览器的事件机制（冒泡），所有节点的事件都会在 document 上触发。\n\n17版本改进\n 不在document对象上绑定事件，改为绑定于每个react应用的rootNode节点，因为各个应用的rootNode肯定不同，所以这样可以使多个版本的react应用同时安全的存在于页面中，不会因为事件绑定系统起冲突。react应用之间也可以安全的进行嵌套。\n\n</code></pre>\n<ul>\n<li>在React中什么是合成事件？有什么用？</li>\n</ul>\n<pre><code>合成事件是 React模拟原生 DOM事件所有能力的一个事件对象，即浏览器原生事件的跨浏览器包装器。根据 W3C规范来定义合成事件，兼容所有浏览器，拥有与浏览器原生事件相同的接口。如果想要获得原生DOM事件，可以通过e.nativeEvent属性获取，和原生事件有一定的却别\n1.事件名称命名方式不同\n2.事件处理函数书写不同\n\n原生事件和合成事件可以混合使用，执行顺序为\nReact 所有事件都挂载在 document 对象上\n当真实 DOM 元素触发事件，会冒泡到 document 对象后，再处理 React 事件\n所以会先执行原生事件，然后处理 React 事件\n最后真正执行 document 上挂载的事件\n\n</code></pre>\n<ul>\n<li>请描述下事件在React中的处理方式是什么？</li>\n</ul>\n<pre><code>React事件并没有原生的绑定在真实的DOM上，而是使用了行为委托方式实现事件机制。行为委托的实质就是将子元素事件的处理委托给父级元素处理。React会将所有的事件都绑定在最外层(document)，使用统一的事件监听，并在冒泡阶段处理事件，当挂载或者卸载组件时，只需要在通过的在统一的事件监听位置增加或者删除对象，因此可以提高效率。\n\n合成事件分为以下三个主要过程：\n\n一 事件注册\n\n所有事件都会注册到document上，拥有统一的回调函数dispatchEvent来执行事件分发\n\n二 事件合成\n\n从原生的nativeEvent对象生成合成事件对象，同一种事件类型只能生成一个合成事件Event，如onclick这个类型的事件，dom上所有带有通过jsx绑定的onClick的回调函数都会按顺序（冒泡或者捕获）会放到Event._dispatchListeners 这个数组里，后面依次执行它\n\n三 事件派发\n\n每次触发事件都会执行根节点上 addEventListener 注册的回调，也就是 ReactEventListener.dispatchEvent 方法，事件分发入口函数。该函数的主要业务逻辑如下：\n1. 找到事件触发的 DOM 和 React Component\n2. 从该 React Component，调用 findParent 方法，遍历得到所有父组件，存在数组中。\n3. 从该组件直到最后一个父组件，根据之前事件存储，用 React 事件名 + 组件 key，找到对应绑定回调方法，执行，详细过程为：\n4. 根据 DOM 事件构造 React 合成事件。\n5. 将合成事件放入队列。\n6. 批处理队列中的事件（包含之前未处理完的，先入先处理）\n\nReact合成事件的冒泡并不是真的冒泡，而是节点的遍历。\n\n</code></pre>\n<ul>\n<li>React的事件和普通的HTML事件有什么不同？</li>\n</ul>\n<pre><code>1.事件名称命名方式不同\n2.事件处理函数书写不同\n</code></pre>\n<ul>\n<li>在React中怎么阻止事件的默认行为？</li>\n</ul>\n<pre><code>阻止合成事件间的冒泡，用e.stopPropagation()\n\n阻止合成事件与最外层 document 上的事件间的冒泡，用e.nativeEvent.stopImmediatePropagation()\n\n阻止合成事件与除最外层document上的原生事件上的冒泡，通过判断e.target来避免\n</code></pre>\n<ul>\n<li>组件卸载前，加在DOM元素的监听事件和定时器要不要手动清除？为什么？</li>\n</ul>\n<pre><code>定时器要在 componentWillUnmount 手动清除，直接绑定在JSX里的事件监听器不用，使用ref绑定的要清除。 因为如果不清除定时器，组件卸载后依然执行，this指向，event等都会因为找不到而报错。 原生事件也要清除，声明变量时保存了某个DOM的引用，内存中依然会保留，事件也就不会被清除，导致不会进入垃圾回收机制。可能会造成内存溢出。\n</code></pre>\n<ul>\n<li>React的触摸事件有哪几种？</li>\n</ul>\n<pre><code>onTouchCancel \nonTouchEnd \nonTouchMove \nonTouchStart\n</code></pre>\n<h3>React更新(setState)和渲染(render)</h3>\n<ul>\n<li>React的状态提升是什么？使用场景有哪些？</li>\n</ul>\n<pre><code>React的状态提升就是用户对子组件操作，子组件不改变自己的状态，通过自己的props把这个操作改变的数据传递给父组件，改变父组件的状态，从而改变受父组件控制的所有子组件的状态，这也是React单项数据流的特性决定的。\n官方的原话是：共享 state(状态) 是通过将其移动到需要它的组件的最接近的共同祖先组件来实现的。 这被称为“状态提升(Lifting State Up)”。\n</code></pre>\n<ul>\n<li>请说说你对React的render方法的理解</li>\n</ul>\n<pre><code>是class组件中必须被重载的方法，组件执行render方法的条件如下：\n1. 初始渲染\n2. this.setState方法，参数不能为,及时this.setState({}),或者setState一个相同的值，也会导致render函数的执行\n3. props的改变(采用浅比较)\n4. this.forceUpdate,render函数中如果依赖了非state和props的其它变量，就需要用这个方式强制render函数执行\n5. 父组件更新，会导致所有子组件的render方法执行\n\nrender方法的执行不一定会导致DOM的重新渲染，DOM的重新渲染的条件是render前后的DOM diff比较的结构不一致。\n\n</code></pre>\n<ul>\n<li>render方法的原理你有了解吗？它返回的数据类型是什么？</li>\n</ul>\n<pre><code>render的第一个参数通过babel转为React.createElement，后者根据参数类型的不同调用不同的内部方法来转换为原生dom并生成真实dom插入到容器中.\n\n对原生html标签调用ReactDOMComponent的mountComponent方法，将element转化为真实的dom节点， 并插入到对应的container中，返回realDom；\n\n对于自定义组件，递归调用ReactCompositeComponentWrapper转化为原生dom标签，然后和上面一样通过ReactDOMComponentmountComponent方法，生成realDom; \n\nstring和number，调用的是ReactDOMTextComponent；\nnull和boolean，调用的是ReactEmptyComponment;\n</code></pre>\n<ul>\n<li>自定义组件时render是可选的吗？为什么？</li>\n</ul>\n<pre><code> 当一个自定义class组件，继承另一个组件的时候，render不是必须的，它会自动继承父类的render方法。 \n</code></pre>\n<ul>\n<li>render在什么时候会被触发？</li>\n</ul>\n<pre><code>在React 中，类组件只要执行了 setState 方法，就一定会触发 render 函数执行，函数组件使用useState更改状态不一定导致重新render\n组件的props 改变了，不一定触发 render 函数的执行，但是如果 props 的值来自于父组件或者祖先组件的 state,在这种情况下，父组件或者祖先组件的 state 发生了改变，就会导致子组件的重新渲染,所以，一旦执行了setState就会执行render法，useState 会判断当前值有无发生改变确定是否执行render方法，一旦父组件发生渲染，子组件也会渲染。\n\n</code></pre>\n<ul>\n<li>React中怎样有条件地渲染组件？怎样阻止组件渲染？</li>\n</ul>\n<pre><code>1.先写好不同组件的内容\n2.在state里面加一个type进行记录\n3.通过type映射渲染对应的组件\n\n类组件中\n使用shouldComponentUpdate生命周期，return false\n继承，React.PureComponent,只要prop没有改变(浅比较)，就不会执行render函数\n\n函数组件中\n使用React.memo包裹组件函数，props没有改变就不会执行函数\n使用React.memo包裹函数的同时传入比较函数作为第二个参数，return true，组件函数就不会执行\n\n通用\njsx中三元表达式或者 &amp;&amp; 运算符\n</code></pre>\n<ul>\n<li>能简单介绍一下React执行过程吗？</li>\n</ul>\n<pre><code>react 运行的主要3阶段\n1. jsx 转成 js 代码\n2. js 代码生成 vdom\n3. vdom 转化成 dom 挂载到 #root\n</code></pre>\n<ul>\n<li>请说下react组件更新的机制是什么？</li>\n</ul>\n<pre><code>setState或者forceUpdate触发更新\n1.将setState传入的partialState参数存储在当前组件实例的state暂存队列中。\n2.判断当前React是否处于批量更新状态，如果是，将当前组件加入待更新的组件队列中。\n3.如果未处于批量更新状态，将批量更新状态标识设置为true，用事务再次调用前一步方法，保证当前组件加入到了待更新组件队列中。\n4.调用事务的waper方法，遍历待更新组件队列依次执行更新。\n5.执行生命周期componentWillReceiveProps。\n6.将组件的state暂存队列中的state进行合并，获得最终要更新的state对象，并将队列置为空。\n7.执行生命周期componentShouldUpdate，根据返回值判断是否要继续更新。\n8.执行生命周期componentWillUpdate。\n9.执行真正的更新，render。\n10.执行生命周期componentDidUpdate。\n\n</code></pre>\n<ul>\n<li>React16的reconciliation和commit分别是什么？</li>\n</ul>\n<pre><code>React 16 三个核心：\n\nScheduler\n调度器：决定什么时候调度 Reconciler\nReconciler\n协调器：进行 Fiber diff 及新的 Fiber 树的生成以及副作用记录\nCommit\n将新的树应用到 DOM 中并且执行所有副作用\n</code></pre>\n<ul>\n<li>在React中怎样改变组件状态，以及状态改变的过程是什么？</li>\n</ul>\n<pre><code>this.setState()\n改变的过程中，React Fiber Reconciler遍历了整个Fiber Tree，得到了最新的DOM diff结果，并把这个结果应用到真实的DOM上。同时相应的生命周期(static getStateFromProps、shouldComponentupdate、render、getSnapshotBeforeUpdate、componentDidUpdate)也在相应的时机执行.\n</code></pre>\n<ul>\n<li>React为什么不要直接修改state？如果想修改怎么做？</li>\n</ul>\n<pre><code>直接修改state，react不会重新render,setState的更新是异步的，而且，react会将要修改的状态放到一个更新队列，并考虑到render次数，会将多个值一起改变并一次render。其实react官方还是推荐immutable的state，也就是说，我们在改变state的时候，需要重新生成一个对象去代替原来的state，而不是直接改原来的。\n\n作者：xhbisme\n链接：https://www.jianshu.com/p/da84ae0804a3\n来源：简书\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。\n</code></pre>\n<ul>\n<li>说说React中setState执行机制？setState是同步的还是异步的？</li>\n</ul>\n<pre><code>setState是同步执行的，但是state并不一定会同步更新，setState在React生命周期和合成事件中批量覆盖执行。在React的生命周期和合成事件执行前后都有相应的钩子，分别是pre钩子和post钩子，pre钩子会调用batchedUpdate方法将isBatchingUpdates变量置为true，开启批量更新，而post钩子会将isBatchingUpdates置为false。isBatchingUpdates变量置为true，则会走批量更新分支，setState的更新会被存入队列中，待同步代码执行完后，再执行队列中的state更新。而在原生事件和异步操作中，不会执行pre钩子，或者生命周期的中的异步操作之前执行了pre钩子，但是pos钩子也在异步操作之前执行完了，isBatchingUpdates必定为false，也就不会进行批量更新。\n\nreact18版本以前\n原生事件、异步函数中是同步的\n合成事件、生命周期函数中是异步的\nreact 18版本都是异步的\n</code></pre>\n<ul>\n<li>React中的setState批量更新的过程是什么？</li>\n</ul>\n<pre><code>1. 调用this.setState(newState)\n2. 将新状态newState存入pending队列\n3. 判断是否处于batch Update（isBatchingUpdates是否为true）\n  1. isBatchingUpdates=true，保存组件于dirtyComponents中，走异步更新流程，合并操作，延迟更新；\n  2. isBatchingUpdates=false，走同步过程。遍历所有的dirtyComponents，调用updateComponent，更新pending state or props\n</code></pre>\n<ul>\n<li>React多个setState调用的原理是什么？</li>\n</ul>\n<pre><code>当遇到多个setState调用时，它会提取单次传递给setState的对象，把它们合并在一起形成一个新的单一的对象，并用这个单一的对象去做setState的事情\n</code></pre>\n<ul>\n<li>React中如何监听state的变化？</li>\n</ul>\n<pre><code>1. 函数组件，useEffect+state依赖\n2. 类组件，ComponentWillReceiveProps或者getDerivedStateFromProps生命周期函数\n</code></pre>\n<ul>\n<li>React中的setState和replaceState的区别是什么？</li>\n</ul>\n<pre><code>setState和replaceState类似，setState会先合并之前的状态，replaceState会先清空之前的状态。setState可能会引起不必要的重渲染，setState任何值都会触发更新\n</code></pre>\n<ul>\n<li>React中的setState缺点是什么呢？</li>\n</ul>\n<pre><code>1. 调用时机不正确可能引起死循环，例如在componentWillUpdate、render、componentDidUpdate\n2. setState可能引起不必要的重渲染，setState任何值都会引起组件的render函数执行。\n</code></pre>\n<ul>\n<li>为什么建议setState的第一个参数是callback而不是一个对象呢？</li>\n</ul>\n<pre><code>React 为了优化性能，有可能会将多个 setState() 调用合并为一次更新。 因为this.props和this.state 可能是异步更新的，你不能依赖他们的值计算下一个state(状态)。为了弥补这个问题，使用另一种 setState() 的形式，接受一个函数。这个函数将接收前一个状态作为第一个参数，应用更新时的 props 作为第二个参数。\n</code></pre>\n<ul>\n<li>React中setState的第二个参数作用是什么呢？</li>\n</ul>\n<pre><code>该函数会在函数调用完成并且组件开始重渲染的时候被调用，我们可以用该函数来监听渲染是否完成\n</code></pre>\n<h3>React优化</h3>\n<ul>\n<li>你知道的React性能优化有哪些方法？</li>\n</ul>\n<pre><code>React重渲染问题来源，在diff过程中，react只会对前后做浅比较，即引用的比较，所以极容易造成重渲染。可以通过一系列的方式进行优化重渲染问题\n1. React.memo、pureComponent\n2. shouldComponentUpdate\n3. 列表加唯一key,确保元素是否移动，提高节点复用\n4. 避免使用内联对象和匿名函数\n5. 组件懒加载\n6. React.Fragment\n7. React.lay和Suspense，代码分割，组件懒加载\n8. 关于useEvent，函数的引用不变，状态能拿到最新的。\n</code></pre>\n<ul>\n<li>使用webpack打包React项目，怎么减小生成的js大小？</li>\n</ul>\n<pre><code>压缩：uglifyjsWebpackPlugin\n\n动态加载:lazy+import函数、suspence、react-loadable\n</code></pre>\n<ul>\n<li>如何提高组件的渲染效率呢？</li>\n</ul>\n<pre><code>1. 对比props和state，减少无效的重渲染\n  1. React.memo、pureComponent\n  2. shouldComponentUpdate\n  3. 列表加唯一key,确保元素是否移动，提高节点复用\n2. 减少重绘回流\n3. js包的体积\n</code></pre>\n<ul>\n<li>在React中如何避免不必要的render？React的优化方法？</li>\n</ul>\n<pre><code>1. 缩小render范围，无关组件尽量分离\n2. 合理使用 memo、useMemo 、useCallback 和 PureComponent\n3. 对 Context 中一个只使用在某个小组件内的字段的更改，都可能导致整个应用的重新渲染。第一种方式将数据拆得更细粒度、第二种方式使用useMemo进行缓存\n</code></pre>\n<ul>\n<li>React怎样跳过重新渲染？</li>\n</ul>\n<pre><code>React组件在默认情况下，父组件或兄弟组件触发更新后，会按照父组件、子组件的顺序重新渲染，并且即使子组件本身没有发生任何变化，也会重复触发更新。在React Hooks中，可以通过memo来避免组件的重复渲染。memo是一个高阶组件。它的功能我们可以这么理解：\n被调用时返回传入的组件\n每次传入的组件要执行更新时，组件的新props和之前的老props会进行一次浅比较：\n结果相等，不触发更新\n结果不相等，触发更新，重新渲染\n\n把内联回调函数及依赖项数组作为参数传入useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如shouldComponentUpdate）的子组件时，它将非常有用\n\nmemo与class组件中的pureComponent类似，通过props浅比较来判断组件需不需要重新渲染\nuseMemo、useCallBack通过浅比较依赖数组项中的变量，判断对应变量/function需不需要重新生成\n</code></pre>\n<ul>\n<li>React怎么判断什么时候重新渲染组件呢？</li>\n</ul>\n<pre><code>只有在组件的state变化时才会出发组件的重新渲染。状态的改变可以因为props的改变，或者直接通过setState方法改变。组件获得新的状态然后React决定是否应该重新渲染组件。不幸的是，React难以置信简单地将默认行为设计为每次都重新渲染\n\n当React将要渲染组件时他会执行shouldComponentUpdate方法来看它是否返回true（组件应该更新，也就是重新渲染）。所以你需要重写shouldComponentUpdate方法让它根据情况返回true或者false来告诉React什么时候重新渲染什么时候跳过重新渲染\n\n</code></pre>\n<ul>\n<li>怎样实现React组件的记忆？原理是什么？</li>\n</ul>\n<pre><code>React.memo 为高阶组件。它与 React.PureComponent 非常相似，但它适用于函数组件，但不适用于 class 组件。如果你的函数组件在给定相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。其原理是根据传入的compare函数比较prevProps和nextProps，最终决定生成对象，并影响渲染效果。\n</code></pre>\n<ul>\n<li>shouldComponentUpdate方法是做什么的？</li>\n</ul>\n<pre><code>在react开发中，经常需要对数据state状态进行改变，但是这种方式每当setState的时候都会将所有的组件重新渲染一遍，这样就会有重复渲染render的问题。shouldComponentUpdate就是用来解决这种重渲染的问题的。官方API解释道根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。默认行为是 state 每次发生变化组件都会重新渲染。\n</code></pre>\n<ul>\n<li>如何解决引用类型在pureComponent下修改值的时候，页面不渲染的问题？</li>\n</ul>\n<pre><code>不要在state或者props当中修改数组或者对象\n通过使用es6的assign方法或者数组的扩展运算符或者使用第三方库，强制返回一个新的对象\n(页面为什么不渲染)\n是因为组件内容是采用的浅拷贝，对象的值虽然发生改变，但是引用的地址没有发生改变\n</code></pre>\n<ul>\n<li>React怎么提高列表渲染的性能？</li>\n</ul>\n<pre><code>展示大型列表和表格数据(比如:城市列表、通讯录、微博等), 会导致页面卡顿、滚动不流畅等性能问题，产生原因是因为大量的DOM节点的重绘重排，尤其在老旧设备下异常突出。\n解决方案即可视区域懒渲染，通常使用react-virtualized库来帮助我们实现。\n\n</code></pre>\n<ul>\n<li>React中的key有什么作用？</li>\n</ul>\n<pre><code>用于判断列表元素节点是否移动操作，提高节点复用率\n</code></pre>\n<ul>\n<li>React中遍历时为什么不用索引作为唯一的key值？</li>\n</ul>\n<pre><code>key值的目的在Diff DOM的时候根据render前后的唯一key值快速的对树进行比较，保证key值得唯一性，如在进行中间插入或者最顶上插入时，算法会很明显得知道这是一个插入动作，然后让后续的node往后移位，如果是以索引index作为key值，那么在进入上述的操作后，插入后面的元素key值完全变了，算法不能准确的定位到树中node的位置，只能从插入的位置起，后续的全部重新生成，影响性能 \n</code></pre>\n<ul>\n<li>React中key的作用？key改了，会发生什么，会执行哪些周期函数？</li>\n</ul>\n<pre><code>Dom diff过程如下\n当元素类型变化时，会销毁重建\n当元素类型不变时，对比属性\n当组件元素类型不变时，通过props递归判断子节点\n递归对比子节点，当子节点是列表时，通过key和props来判断。若key一致，则进行更新，若key不一致，就销毁重建\n\n如果key改了则无法复用节点，需要销毁重建\n</code></pre>\n<ul>\n<li>需要把keys设置为全局唯一吗？</li>\n</ul>\n<pre><code>不需要,key是用来进行diff算法的时候进行同层比较,准备的说key只需要在兄弟节点之间唯一,一般情况key选取是后端定义的id.万不得已的时候可以选择index(选择index是万不得已的选择,因为选择了index后,一些操作会改变index的值,违背了唯一不变,在进行diff算法的时候出现问题)\n</code></pre>\n<ul>\n<li>什么是React.forwardRef？它有什么作用？</li>\n</ul>\n<pre><code>forwardRef API 允许我们从父组件向子组件传递一个 ref，从而让父组件能够访问子组件的 DOM 节点或实例\n应用\n1. 转发 ref 到组件内部的DOM 节点上，将一个组件内部的某个元素暴露出去\n2. 在高阶组件中转发ref，在高阶组件中不会传递ref, 这是因为 ref 不是 prop属性。就像 key 一样，其被 React 进行了特殊处理\n\n</code></pre>\n<ul>\n<li>在React中怎么使用async/await？</li>\n</ul>\n<pre><code>类组件的生命周期函数可以直接定义成async方法，直接使用await调用\nuseEffect中不能直接传入async函数，因为回调中必须返回一个函数，而async返回一个promise\n</code></pre>\n<ul>\n<li>在React中什么时候使用箭头函数更方便呢？</li>\n</ul>\n<pre><code>1. 解决 this 引起的问题\n</code></pre>\n<ul>\n<li>使用PropTypes和Flow有什么区别？</li>\n</ul>\n<pre><code>Flow是一个静态分析工具（静态检查器），它使用语言的超集，使您可以在所有代码中添加类型注释，并在编译时捕获整个错误类。PropTypes是一个基本的类型检查器（运行时检查器），已被修补到React上。除了传递给给定组件的道具类型外，它无法检查其他任何东西。如果您想对整个项目进行更灵活的类型检查，则Flow / TypeScript是适当的选择。\n</code></pre>\n<ul>\n<li>React中在哪捕获错误？</li>\n</ul>\n<pre><code>React 16引入了一个 “错误边界(Error Boundaries)” 的新概念。 错误边界是 React 组件，它可以在子组件树的任何位置捕获 JavaScript 错误，记录这些错误，并显示一个备用 UI ，而不是使整个组件树崩溃。 错误边界(Error Boundaries) 在渲染，生命周期方法以及整个组件树下的构造函数中捕获错误。注意错误边界仅可以捕获其子组件的错误，它无法捕获其自身的错误。如果一个错误边界无法渲染错误信息，则错误会冒泡至最近的上层错误边界，这也类似于 JavaScript 中 catch {} 的工作机制。\n</code></pre>\n<ul>\n<li>错误边界的子组件可以为函数组件吗</li>\n</ul>\n<pre><code>可以\n</code></pre>\n<ul>\n<li>React v15中怎么处理错误边界？</li>\n</ul>\n<pre><code>React 15 中有一个支持有限的错误边界方法 unstable_handleError。此方法不再起作用，同时自 React 16 beta 发布起你需要在代码中将其修改为 componentDidCatch。\n</code></pre>\n<ul>\n<li>说说你对Error Boundaries的理解</li>\n</ul>\n<pre><code>如果一个类组件定义了生命周期方法中的任何一个（或两个）static getDerivedStateFromError() 或 componentDidCatch()，那么它就成了一个错误边界。 使用在抛出错误后渲染回退UI。 使用 componentDidCatch() 来记录错误信息。它能捕获子组件渲染过程中、生命周期方法、子组件树各组件constructor构造函数中异常。不能捕获事件处理器中的异常，需要使用try/catch进行捕获；不能捕获异步任务中的异常，例如setTimeout，ajax请求等，需要使用window.addEventListener进行捕获；不能捕获服务端渲染异常；不能捕获异常边界组件自身的异常，需要将边界组件和业务组件分离，各司其职，不能在边界组件中处理逻辑代码，也不能在业务组件中使用didcatch\n\ncomponentDidCatch 和 getDerivedStateFromError 的区别\n1. render phase 里产生异常的时候， 会调用 getDerivedStateFromError\n2. 在 commit phase 里产生异常大的时候， 会调用 componentDidCatch\n\ncomponentDidCatch 是不会在服务器端渲染的时候被调用的 而 getDerivedStateFromError 会。\n\n无法被错误边界捕获的情况\n1. 组件外的报错\n2. 异步代码的报错\n3. 事件函数中的报错\n4. 错误边界自身抛出的错误\n5. 错误边界的父组件报错\n6. 函数组件被卸载，触发 useEffect 的销毁\n7. 服务端渲染\n\n目前还没有办法将错误边界编写为函数式组件。但是你不必自己编写错误边界类。例如，你可以使用 react-error-boundary 包来代替\n\n</code></pre>\n<ul>\n<li>在React中你有遇到过安全问题吗？怎么解决？</li>\n</ul>\n<pre><code>prerender / SSR 的 hydrate 过程会生成 html ，需要小心测试其中是否有 XSS 漏洞。\ndangerouslySetInnerHTML、onload=字符串、href=字符串 等，都有可能造成 XSS 漏洞。\n\n需要对特殊字符进行转译，例如<>等\n</code></pre>\n<ul>\n<li>使用React的memo和forwardRef包装的组件为什么提示children类型不对？</li>\n</ul>\n<pre><code>过去使用Component、FC等类型定义组件时一般不需要我们定义props里children的类型，因为在上述类型里已经帮你默认加上了 { children?: ReactNode } 的定义。但是@types/react的维护者认为这样导致children几乎没有类型约束，组件开发者应该显式地声明children类型。所以对新的API应该都不会自动加上children的定义了，需要开发者手动添加。\n</code></pre>\n<ul>\n<li>使用ES6的class定义的组件不支持mixins了，那用什么可以替代呢？</li>\n</ul>\n<pre><code>HOC\nrender props\n</code></pre>\n<ul>\n<li>React的mixins有什么作用？适用于什么场景？</li>\n</ul>\n<pre><code>虽然组件的原则就是模块化，彼此之间相互独立，但是有时候不同的组件之间可能会共用一些功能，共享一部分代码。所以 React 提供了 mixins 这种方式来处理这种问题Mixin 就是用来定义一些方法，使用这个 mixin 的组件能够自由的使用这些方法（就像在组件中定义的一样），所以 mixin 相当于组件的一个扩展，在 mixin 中也能定义“生命周期”方法\n\n</code></pre>\n<ul>\n<li>对高阶组件（HOC）的理解？什么渲染劫持？有什么问题？怎么解决？优缺点？使用场景？</li>\n</ul>\n<pre><code>接收一个组件作为参数，返回一个新的组件，是对装饰模式的一种实现。高阶作用用于强化组件，复用逻辑，提升渲染性能等作用。渲染劫持的概念是控制组件从另一个组件输出的能力，高阶组件可以在渲染函数中做非常多的操作从而控制原组件的渲染输出。\n\n优点：复用、逻辑和抽象，可以劫持render方法，控制props于state等\n缺点：\n1. 无法从外部访问子组件的state\n2. ref传递问题\n3. dom层级变深,调试困难\n4. props变得混乱\n\nHOC需要注意的地方\n1. 不能修改原始组件\n2. 过滤props\n3. 最大化可组合性\n4. 不要在render中使用HOC\n5. 务必复制静态方法\n6. refs不会被传递\n\n实现HOC的方式有\n1. 属性代理：对props进行代理\n2. 反向继承：返回的组件去继承之前的组件\n\nHOC的应用\n1. 非受控组件转化为受控组件\n2. 渲染劫持\n3. 抽象state\n4. 通过refs使用引用\n5. 控制props\n</code></pre>\n<ul>\n<li>举例说明什么是高阶组件(HOC)的属性代理和反向继承？</li>\n</ul>\n<pre><code>属性代理：并没有深入到组件内部，在外部去操作WrapperComponent，可以操作 props，抽象state\\event 或者条件渲染。\n\n反向继承：更多是从‘继承’的角度出发，可以在内部去操作WrapperComponent，可以在内部操作props,state,event甚至是生命周期，功能更强大。\n\n</code></pre>\n<ul>\n<li>类组件和函数式组件有什么区别？</li>\n</ul>\n<pre><code>1. 设计思想\n类组件的根基是 OOP(面向对象编程)，所以它会有继承，有内部状态管理等\n函数组件的根基是 FP(函数式编程)，与数学中的函数思想类似，所以假定输入和输出存在某种关联的话，那么相同输入必定会有相同的输出\n所以相对于类组件，函数组件会更加的纯粹，简单，更利于测试，这就是它们本质上的区别\n\n类组件是通过各种生命周期函数来包装业务逻辑的，这也是类组件所特有的，hooks提供了新的开发模式让组件渲染和业务逻辑进行分离\n函数组件useEffect和类组件生命周期\n\n2. 性能优化\n类组件是通过 shouldComponentUpdate 生命周期函数去阻断渲染\n函数组件是通过React.Memo 函数来优化，但它不并不是去阻断渲染，而是跳过渲染组件的操作并直接复用最近一次渲染的结果，这与 shouldComponentUpdate 是完全不同的\n\n</code></pre>\n<ul>\n<li>说说你对fiber架构的理解？解决了什么问题？可中断/恢复怎么实现的？fiber的更新机制</li>\n</ul>\n<pre><code>当有更新任务来的时候，不会马上去做 Diff 操作，而是先把当前的更新送入一个 Update Queue 中，然后交给 Scheduler 去处理，Scheduler 会根据当前主线程的使用情况去处理这次 Update。为了实现这种特性，使用了requestIdelCallbackAPI。对于不支持这个API 的浏览器，React 会加上 pollyfill。requestIdleCallback\n处理低优先级任务，并且在多个空闲期调用空闲期回调，执行任务，并且还提供deadline，即任务执行限制时间，以切分任务，避免长时间执行，阻塞UI渲染而导致掉帧；requestAnimationFrame处理高优先级任务，例如动画等。实现过程中存在以下问题\n\n如何拆分成子任务？多大合适？\n怎么判断是否还有剩余时间？\n有剩余时间怎么去调度应该执行哪一个任务？\n没有剩余时间之前的任务怎么办？\n\nfiber架构就是为了解决这个问题，它是一个链表结构，将递归遍历编程循环遍历，然后配合 requestIdleCallback API, 实现任务拆分、中断与恢复\n\n是否中断的判断依据，最重要的一点便是每个任务的剩余时间是否用完\n借助 requestIdleCallback 这个函数，可以将一个大任务分割成多个个小任务，在每一帧有空余时间情况下，逐步去执行小任务。\n</code></pre>\n<ul>\n<li>说说你对React的reconciliation（一致化算法）的理解？</li>\n</ul>\n<pre><code>就是启发式Diff算法 ，时间复杂度从N的三次方下降到N ，实现的策略是 tree diff , element diff , component diff 算法 。在diff算法中如果element 没有变只是位置移动，则移位就可以。 \n</code></pre>\n<ul>\n<li>React为什么要搞一个Hooks？React Hooks帮我们解决了哪些问题？</li>\n</ul>\n<pre><code>\nhooks是为了解决长时间使用和维护react过程中常遇到的问题\n难以重用和共享组件中的与状态相关的逻辑\n逻辑复杂的组件难以开发与维护，当我们的组件需要处理多个互不相关的 local state 时，每个生命周期函数中可能会包含着各种互不相关的逻辑在里面\n类组件中的this增加学习成本，类组件在基于现有工具的优化上存在些许问题\n由于业务变动，函数组件不得不改为类组件等等\n\n为细粒度的代码复用，不和组件复用捆绑在一起。HOC和Render Props都是基于组件的组合方案，先把要复用的逻辑封装成组件，再利用组件复用机制实现逻辑复用。将函数当成最小的代码复用单元同时内置一些模式简化状态逻辑复用\n\nHooks为了帮助函数组件补齐这些（相对于类组件来说）缺失的能力,例如使用状态、处理副作用等\n</code></pre>\n<ul>\n<li>请描述下你对React的新特性Hooks的理解？它有哪些应用场景？</li>\n</ul>\n<pre><code>在 React 中使用 class 继承 React.Component，就可以在类里面使用各种各样的钩子函数，比如 componentWillMount、componentDidMount、componentWillUnmount 等。\n\n你也可以直接写 function 来构建 reander 方法，但是就无法使用钩子函数，无法使用 setState 修改状态。\n在 React 16 版本之后新增了 hooks 特性，hooks 特性的主要表现形式为：在 React 中可以直接使用函数的形式来完成所有组件逻辑。\n\n应用场景\n1.修改数据状态: useState\n2.执行 DOM 挂载或者更新之后的事务 ：useEffect\n3.共享数据，跨组件传值：useContext\n4. 复杂的状态管理:useReducer\n\n应用场景\n在函数组件中通过useState实现函数内部维护state，useState 使用起来更为简洁，减少了this指向不明确的情况\n\nuseEffect可以让我们在函数组件中进行一些带有副作用的操作。useEffect相当于componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个生命周期函数的组合\n</code></pre>\n<ul>\n<li>使用Hooks要遵守哪些原则？为什么不能在条件语句中写Hook？</li>\n</ul>\n<pre><code>1. 只在 React 函数中调用 Hook\n2. 不要在循环、条件或嵌套函数中调用 Hook。\n\n函数本身不能保存状态，我们需要额外维护一个有序的表，在执行 setState 之类的 hook 时，将它们保存到这个表里。这要求每次函数组件的 hook 执行的位置相同，数量正确，否则会导致错位，不能拿到预期的状态值。\n</code></pre>\n<ul>\n<li>在React中组件的state和setState有什么区别？</li>\n</ul>\n<pre><code>this.state的方式会改变值，但不会重新渲染组件（这就是为什么你改变了值，但是页面没有响应你）\n在使用时。可以先使用this.state.的方式来赋值。在最后一次赋值使用setState的方式。这样组件之渲染一次达到赋值的效果。\n</code></pre>\n<ul>\n<li>请说说什么是useImperativeHandle？useReducer？useRef？useEffect？</li>\n</ul>\n<pre><code>useImperativeHandle\n可以让你在使用 ref 时自定义暴露给父组件的实例值。通常与forwardRef一起使用，暴露之后父组件就可以通过 selectFileModalRef.current?.handleCancel();来调用子组件的暴露方法。\n\nuseReducer\n第一个参数：reducer函数，没错就是我们上一篇文章介绍的。第二个参数：初始化的state。返回值为最新的state和dispatch函数（用来触发reducer函数，计算对应的state）。对于复杂的state操作逻辑，嵌套的state的对象，推荐使用useReducer\n\nuseRef\n当你需要在组件中一直缓存一些状态，但是并不想因为这些状态的改变而重新触发渲染,可以使用 useRef 钩子去保存对 DOM 对象的引用。\n\nuseEffect\n在函数组件主体内（这里指在 React 渲染阶段）改变 DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作都是不被允许的，因为这可能会产生莫名其妙的 bug 并破坏 UI 的一致性。使用 useEffect 完成副作用操作。赋值给 useEffect 的函数会在组件渲染到屏幕之后执行\n</code></pre>\n<ul>\n<li>为什么React useState要使用数组而不是对象?</li>\n</ul>\n<pre><code>通过解构赋值来降低复杂度\n如果 useState 返回的是数组，那么使用者可以对数组中的元素命名，代码看起来也比较干净\n如果 useState 返回的是对象，在解构对象的时候必须要和 useState 内部实现返回的对象同名，想要使用多次的话，必须得设置别名才能使用返回值\n</code></pre>\n<ul>\n<li>请说说什么是useState？为什么要使用useState？</li>\n</ul>\n<pre><code>useState是React原生的Hook，它接受一个参数，这个参数可以是对象或者普通的基本数据类型的值，也可以是一个有返回值的函数，useState函数返回一个数组，数组的第一个元素是useState接受的值或函数的返回值，第二个元素是设置这个值的方法； 在Hooks之前，函数式组件都是无状态的组件，引入了useState这个hook之后，让函数式组件也能够管理自己的状态\n</code></pre>\n<ul>\n<li>useState的原理？相对于有状态组件state区别是什么？</li>\n</ul>\n<pre><code>useState 的 mountState 阶段返回的 setXxx 是绑定了几个参数的 dispatch 函数。执行它会创建  hook.queue 记录更新，然后标记从当前到根节点的 fiber 的 lanes 和 childLanes 需要更新，然后调度下次渲染。下次渲染执行到 updateState 阶段会取出 hook.queue，根据优先级确定最终的 state，最后返回来渲染。\n这样就实现了 state 的更新和重新渲染\n\n\n区别\n1. 命名：useState可以自定义命名\n2. 是否浅合并：setState支持浅合并，useState覆盖\n3. 是否有第二个回调函数，setState有第二个回调函数，useState没有\n</code></pre>\n<ul>\n<li>useCallback和useMemo的区别？useEffect和useLayoutEffect的区别？useState和useRef的区别？</li>\n</ul>\n<pre><code>useCallback和useMemo\nuseMemo 计算结果是 return 回来的值, 主要用于 缓存计算结果的值 ，应用场景如： 需要 计算的状态\nuseCallback 计算结果是 函数, 主要用于 缓存函数，应用场景如: 需要缓存的函数，因为函数式组件每次任何一个 state 的变化 整个组件 都会被重新刷新，一些函数是没有必要被重新刷新的，此时就应该缓存起来，提高性能，和减少资源浪费。\n\nuseEffect和useLayoutEffect\nuseEffect 是在render之后执行的，而useLayoutEffect是在render之前执行的。\n\nuseState和useRef\nuseState 是 React Hooks 的基础，它允许您在函数式组件中管理状态和更新状态，useRef 也是 React Hooks 的一种，它的作用是提供一个可以在函数式组件中访问的全局变量，而不必渲染组件\n</code></pre>\n<ul>\n<li>useEffect 依赖为空数组与 componentDidMount 区别？</li>\n</ul>\n<pre><code>在 render 执行之后，componentDidMount 会执行，如果在这个生命周期中再一次 setState ，会导致再次 render ，返回了新的值，浏览器只会渲染第二次 render 返回的值，这样可以避免闪屏。\n但是 useEffect 是在真实的 DOM 渲染之后才会去执行，这会造成两次 render ，有可能会闪屏。\n实际上 useLayoutEffect 会更接近 componentDidMount 的表现，它们都同步执行且会阻碍真实的 DOM 渲染的。\n</code></pre>\n<ul>\n<li>怎样使用Hooks获取服务端数据？</li>\n</ul>\n<pre><code>useState，初始化数据\nuseEffect中发起请求，拿到数据之后设置state\n</code></pre>\n<h3>React工程化与三方库</h3>\n<ul>\n<li>React 16+和React15的区别？</li>\n</ul>\n<pre><code>react 15 \nReconciler 协调器 + Renderer 渲染器。\n\nreact16 异步可中断的更新\nReact16改写了架构，将React15的同步更新，变成异步可中断的更新。Reconciler 协调器 + Scheduler 调度器 + Renderer 渲染器。\n协调器会将需要更新的节点打上update标签，讲做了标记的虚拟dom交给渲染器，渲染器接收到通知，查看有哪些被打了标记的虚拟dom，执行更新dom操作。\n</code></pre>\n<ul>\n<li>React16新特性有哪些？</li>\n</ul>\n<pre><code>1. 使用Error Boundary处理错误组件\n2. render支持2种新的返回类型(数组、字符串)\n3. 使用createProtal 将组件渲染到当前组件树之外\n4. 自定义DOM属性 ：把不会识别的属性传递给DOM\n5. setState传入null时不会再触发更新 \n</code></pre>\n<ul>\n<li>React18有哪些更新？IE支持情况？</li>\n</ul>\n<pre><code>停止对ie11支持\n1. 增加Hooks：useId、useTransition、useDeferredValue、useSyncExternalStore、useInsertionEffect\n2. 在所有情况下，setState更新都会批处理\n3. 退出批量更新的flushSync\n4. 移除了卸载组件时执行状态更新警告\n5. React组件允许返回undefined\n6. 对Suspense组件fallback属性做了处理，可以不写fallback，React不会跳过它\n</code></pre>\n<ul>\n<li>有用过React Devtools吗？说说它的优缺点分别是什么？</li>\n</ul>\n<pre><code>优点\n可以查看组件、编辑props和state，并且可以识别性能问题。\n\n不足\nreact在iframe里面，无法被检查到的\n</code></pre>\n<ul>\n<li>create-react-app有什么好处？</li>\n</ul>\n<pre><code>1. 免去繁杂的工程化的配置,专注编码，不用操心页面构建\n</code></pre>\n<ul>\n<li>create-react-app创建新应用怎么解决卡的问题？</li>\n</ul>\n<pre><code>使用cnpm或者yarn来替代npm，使用新的指令\n</code></pre>\n<ul>\n<li>不用脚手架，你会手动搭建React项目吗？</li>\n</ul>\n<pre><code>会\nwebpack配置文件webpack.config.json，配置入口entry和output，css-loader和style-loader\n</code></pre>\n<ul>\n<li>说说你对React的项目结构的和组件命名规范的理解</li>\n</ul>\n<pre><code>项目结构：\n我们会把所有的组件都放在 components 目录下，除了页面。然后按照模块或者特性进行拆分和组合代码。每当一个组件会有不止一个文件的时候，我们会将这个组件和它对应的文件放在同一个文件夹下，并且使用同一个名字来命名。例如：现在我们有一个 Form.css 文件包含了 Form.jsx 的样式，我们的目录大概这样   Form->Form.jsx | Form.css，Form下面包含两个文件Form.jsx和Form.css，Form.jsx 的测试文件会放在同一个文件夹下并且命名为 Form.spec.jsx。除了通过模块拆分组件，我们还会在 src/components 放置一个 UI 目录，用于存放所有通用的组件\n\n组件命名：\n组件的命名在应用中应当清晰且唯一，这样可以让它们可以轻松被找到并且避免可能的困惑。当应用在运行时发生错误或者通过 React 开发者工具调试时，组件的名字是非常方便易用的，因为错误发生的地方往往都伴随着组件的名字。\n\n采用基于路径的组件命名方式，即根据相对于 components 文件目录的相对路径来命名，例如组件的路径如果是 components/User/List.jsx，那么它就被命名为 UserList；components/User/Form/Form.jsx 会命名为 UserForm 而不是 UserFormForm。\n\n这样命名的好处是便于在项目中搜索文件、可以避免在引入时重复名称\n\n页面命名：\n在应用中，通过使用组件相互组合的结果，就是一个页面。理想状态下，页面应该不包含任何逻辑。将不同页面分散在不同文件夹中，因为它们是根据路由定义而不是模块来划分成组的。当组件在组件目录外使用时，我们需要使用它们相对于 src 目录的路径来命名。位于 src/screens/User/List.jsx 的组件应该被命名为 ScreensUserList。\n\n</code></pre>\n<ul>\n<li>React如何进行组件拆分？拆分的原则是什么？</li>\n</ul>\n<pre><code>1.尽量使拆分后的组件更容易判断是否更新\n2.尽量使拆分组件的props和state数据扁平化\n</code></pre>\n<ul>\n<li>怎么在React中引入其它的UI库/插件等，例如Bootstrap、jQuery</li>\n</ul>\n<pre><code>在create-react-app建的项目目录中安装react-bootstrap。\nnpm install react-bootstrap --save\n \n安装bootstrap。 \nnpm install bootstrap@3.3.7 --save\n\n在index.js文件中增加css引用。\nimport 'bootstrap/dist/css/bootstrap.css';\nimport 'bootstrap/dist/css/bootstrap-theme.css';\n\n在需要用到bootstrap组件的代码中，引入所需组件。\nimport { Navbar, Jumbotron, Button } from 'react-bootstrap';\n</code></pre>\n<ul>\n<li>同时引用这三个库React.js、React-dom.js和babel.js它们都有什么作用？</li>\n</ul>\n<pre><code>React.js: React中的组件(Component)、Context、hooks等核心Api，还有虚拟DOM的比较、Fiber的算法实现等\nReact-dom.js 与web浏览器DOM相关的API，比如虚拟DOM的挂载，DOM的更新，Portal等\nbabel.js ES6+代码的转义\n</code></pre>\n<ul>\n<li>你有用过哪些React的UI库？它们的优缺点分别是什么？</li>\n</ul>\n<pre><code>Ant Design\n优点：\n开箱即用的高质量的react组件\n使用typescript开发，提供完整的类型定义文件\n全链路的开发和设计工具\n数十个国际化语言支持\n主题定制能力\n\n缺点：\n包体积太大，1M多\n\nMUI\n优点：\nMUI 不仅是一个组件库，而是一个完整的设计系统。它具有一套完整的指南、设计原则和 UI 设计最佳实践系统\nMUI 组件可以具有类似于 Google 的外观和感觉，这意味着 MUI 可以成为构建 Android 应用程序的绝佳选择。\n\n\nReact Bootstrap\n优点：\n组件高度可定制\n\n</code></pre>\n<ul>\n<li>有在项目中使用过Antd吗？说说它的好处？</li>\n</ul>\n<pre><code>\n好处：\n拥有完善的设计体系\n容易上手，拿来即用\n</code></pre>\n<ul>\n<li>有在项目中使用ahooks吗？</li>\n</ul>\n<pre><code>useRequest插件机制\nuseCountdown倒计时计算\nuseMount和useUnmount挂载卸载\n\n</code></pre>\n<ul>\n<li>你有做过React的单元测试吗？如果有，用的是哪些工具？怎么做的？</li>\n</ul>\n<pre><code>为我们测试运行和写断言将用到这三个库。它们定义了我们测试环境的不同方面。\n\nKarma是一个用来搜索测试文件、编译它们然后运行断言的测试器。\nJasmine是一个断言库，它仅仅问“我们得到我们期待的东西了么？”。它提供类似describe，expect和it的函数，也提供监听一个函数或方法有没有被触发的监听器。\nEnzyme是一个React测试工具库。Enzyme提供渲染和遍历React组件的方法，可以用来测试与React的render、mount和事件有关的断言。\n</code></pre>\n<ul>\n<li>什么是浅层渲染？</li>\n</ul>\n<pre><code>当为 React 写单元测试时，浅层渲染(Shallow Renderer) 会变得十分有用。浅层渲染使你可以渲染 “单层深度” 的组件，并且对组件的 render 方法的返回值进行断言，不用担心子组件的行为，组件并没有实例化或被渲染。浅渲染并不需要 DOM。 \n</code></pre>\n<ul>\n<li>你有使用过formik库吗？说说它的优缺点</li>\n</ul>\n<pre><code>Formik是一个小型库。由React组件和hooks组成，它内置了表单的state管理操作，同时使用了Context，能够让表单组件多层嵌套，不再需要一层层传递\n\n优点：\n增强表单处理能力，简化表单处理流程\n</code></pre>\n<ul>\n<li>React根据不同的环境打包不同的域名？</li>\n</ul>\n<pre><code>如果是CRA的项目的话，可以使用.env、.env.development、.env.production文件来区分不同的环境； 比如生产环境域名http://www.prod.com，开发环境域名http://www.deve.com 则可以分别设置REACT_APP_BASE_URL = 'http://www.prod.com'、REACT_APP_BASE_URL = 'http://www.deve.com' 然后在程序中使用process.env.REACT_APP_BASE_URL来获取基础路径，此时打包的时候会根据不同的环境打包不同的域名\n</code></pre>\n<ul>\n<li>怎样在React中开启生产模式？</li>\n</ul>\n<pre><code>.env.developemnt配置\nREACT_APP_BASE_URL = 'https://test.com'\nREACT_APP_ENV = 'development'\n\n.env.production配置\nREACT_APP_BASE_URL = 'https://production.com'\nREACT_APP_ENV = 'production'\n\n配置package.json的scripts选项中添加如下代码\n&quot;build:prod&quot;: &quot;cross-env REACT_APP_ENV=production react-app-rewired build&quot;,\n&quot;build:dev&quot;: &quot;cross-env REACT_APP_ENV=development react-app-rewired build&quot;,\n\n安装cross-env插件，进行识别环境地址\nnpm i -D cross-env\n\n在你统一配置接口请求地址的js文件中进行获取当前的接口地址\nconst baseUrl = process.env.REACT_APP_ENV === &quot;production&quot; ? process.env.REACT_APP_BASE_URL: &quot;http://test.com&quot;;\n\n生产环境：\nnpm build:prod\n</code></pre>\n<ul>\n<li>在React中如何去除生产环境上的sourcemap？</li>\n</ul>\n<pre><code>通过.env环境变量文件影响react-scripts start/build等命令\n</code></pre>\n<ul>\n<li>React的应用如何打包发布？它的步骤是什么？</li>\n</ul>\n<pre><code>1. 先将react项目打包，npm run build\n2. 将其放到服务器能够访问的root目录下，如果是root目录下的项目名称文件夹下需要修改访问资源的路径（默认位置为根目录，其修改后的路径为相对路径）否则控制台报错404，某些文件找不到，前台页面只能挂载index.html，其内部组件无法渲染。\n\n解决有三种方法：\n方法1、修改packpage.json文件，添加&quot;home&quot;:&quot;.&quot;\n方法2、修改webpack的默认配置，\n方法3、直接修改node_modules/react-scripts/config/paths.js这个文件中的 / 为 ./\n</code></pre>\n<ul>\n<li>说说你对受控组件和非受控组件的理解？应用场景？如何给非控组件设置默认的值？</li>\n</ul>\n<pre><code>受控组件的状态由开发者维护，非受控组件的状态由组件自身维护\n\n受控组件处理表单\n\n</code></pre>\n<ul>\n<li>React什么是有状态组件？</li>\n</ul>\n<pre><code>使用 class 关键字创建的组件，有自己的私有数据 this.state 和生命周期函数就是有状态组件\n</code></pre>\n<ul>\n<li>常用的React组件</li>\n</ul>\n<pre><code>异步组件react-loadable\nwithRouter只有点击路由时才会加载相应的js\n用react-transition-group实现多个DOM元素的动画\n</code></pre>\n<ul>\n<li>你有用过哪些React的表单库吗？说说它们的优缺点</li>\n</ul>\n<pre><code>Formik：通过组件来抽象化你的表单以减少模板代码\n读取或者写入表单的 state 的值\n验证以及错误信息\n处理表单提交\n\nReact-hook-form\n\nredux-form \n</code></pre>\n<ul>\n<li>你有使用过loadable组件吗？它帮我们解决了什么问题？</li>\n</ul>\n<pre><code>loadable 是一个高阶组件（创建组件的function）用来轻易地在组件层面拆分bundle\n\n组件动态引入异步加载\n</code></pre>\n<ul>\n<li>你有使用过suspense组件吗？它帮我们解决了什么问题？</li>\n</ul>\n<pre><code>React中的Suspense组件是用来处理异步渲染的。当我们需要异步加载某些组件或数据时，通常会出现一个“抖动”问题，即页面在等待异步加载完成时会出现一些不必要的视觉变化，比如页面出现空白或者加载指示器。\n\n异步加载组件\n异步加载数据\n</code></pre>\n<ul>\n<li>如何封装一个React的全局公共组件？Antd的Message.error的调用方式</li>\n</ul>\n<pre><code>使用creatRoot动态创建一个root容器\n</code></pre>\n<ul>\n<li>怎么定时更新一个组件？</li>\n</ul>\n<pre><code>componentDidMount中setInterval调用setState\n</code></pre>\n<ul>\n<li>使用高阶组件(HOC)实现一个loading组件</li>\n<li>使用React写一个todo应用，说说你的思路</li>\n</ul>\n<pre><code>1. UI布局，输入框+列表\n2. 定义状态，一个数组用于存放列表数据\n3. 视图中使用state\n4. 添加事件，增删等操作\n</code></pre>\n<ul>\n<li>React怎样引入svg的文件？</li>\n<li>在React中怎么使用字体图标？</li>\n<li>在React中如何引入图片？哪种方式更好？</li>\n</ul>\n<pre><code>import\nrequire\n</code></pre>\n<ul>\n<li>在React中怎么引用sass或less？</li>\n</ul>\n<pre><code>1. 安装依赖包\nnpm install less less-loader --save \n\n2. 配置webpack，loader中加入less-loader相关配置\n</code></pre>\n<ul>\n<li>怎样动态导入组件？</li>\n</ul>\n<pre><code>在 React 中动态加载异步组件通常使用 React.lazy 和 Suspense API 实现。React.lazy 允许你定义一个动态加载的组件，该组件会在组件第一次渲染时进行加载。在组件内部，你可以通过 import() 语法动态引入组件，React.lazy 会自动把这个返回 Promise 的函数包装成一个组件。需要注意的是，React.lazy 目前只支持默认导出（default exports）的组件，如果你需要导出非默认组件，需要使用额外的包装。另外，React.lazy 和 Suspense API 目前还不支持服务端渲染。\n</code></pre>\n<ul>\n<li>创建React动画有哪些方式？在React项目中你用过哪些动画的包？</li>\n</ul>\n<pre><code>1. css方法\n2. React-transition-group ——它是用于简单实现基本CSS动画和过渡的附加组件。\n3. react-animations —react-animations实现了animate.css中的所有动画。简单易用！\n4. React Reveal — 这是React的动画框架。\n5. TweenOne 用于ant.design的动画库（重点）。\n</code></pre>\n<ul>\n<li>如何用React实现滚动动画？</li>\n</ul>\n<pre><code>1. css3 + setState\n2. requestAnimation+setState\n</code></pre>\n<ul>\n<li>React有哪几种方法来处理表单输入？</li>\n</ul>\n<pre><code>1. 让输入框变为受控组件： onChange+value\n\n</code></pre>\n<ul>\n<li>有用过React的服务端渲染吗？怎么做的？</li>\n</ul>\n<pre><code>react服务端渲染本质是建立在虚拟DOM上的，将虚拟DOM转换为字符串而非真实DOM，从而渲染在页面上\n</code></pre>\n<ul>\n<li>从旧版本的React升级到新版本的React有做过吗？有遇到过什么坑？</li>\n</ul>\n<pre><code>\n</code></pre>\n<h3>React组件通信和状态管理</h3>\n<ul>\n<li>React组件间的通信有哪些？兄弟/非兄弟/父子/非父子</li>\n</ul>\n<pre><code>父子：props\n非父子非兄弟：context、第三方的全局状态管理库redux\n兄弟：状态提升，共同的父组件\n\n</code></pre>\n<ul>\n<li>为什么说React中的props是只读的？在React中你有经常使用常量吗？</li>\n</ul>\n<pre><code>React 组件都必须像纯函数一样保护它们的 props 不被更改。将react组件理解成纯函数,数据流驱动,参数传入不允许做更改。\n\n</code></pre>\n<ul>\n<li>在React中你是怎么进行状态管理的？</li>\n</ul>\n<pre><code>redux\nmobx\n</code></pre>\n<ul>\n<li>在React怎么使用Context？说说Context有哪些属性？ 有使用过Consumer吗？</li>\n</ul>\n<pre><code>使用 createContext 方法创建 context。\n获取创建的 context，然后把组件树包在 context provider 里。\n使用 value 属性把你想要的值放在 context provider 上。\n在任意组件中使用 context consumer 读取你设置的值。\n\nContext有Provider和Consumer属性\n</code></pre>\n<ul>\n<li>怎么使用Context开发组件？</li>\n</ul>\n<pre><code>const ThemeCtx = React.createContext('light')\n在父组件中\n<ThemeCtx.Provider value='dark'></ThemeCtx.Provider>\n\n在子组件中\n<ThemeCtx.Consumer value='dark'>{theme=>theme}</ThemeCtx.Consumer>\n</code></pre>\n<ul>\n<li>为什么React并不推荐我们优先考虑使用Context？</li>\n</ul>\n<pre><code>1、Context目前还处于实验阶段，可能会在后面的发行版本中有很大的变化，事实上这种情况已经发生了，所以为了避免给今后升级带来大的影响和麻烦，不建议在app中使用context。\n2、尽管不建议在app中使用context，但是独有组件而言，由于影响范围小于app，如果可以做到高内聚，不破坏组件树之间的依赖关系，可以考虑使用context\n3、对于组件之间的数据通信或者状态管理，有效使用props或者state解决，然后再考虑使用第三方的成熟库进行解决，以上的方法都不是最佳的方案的时候，在考context。\n4、context的更新需要通过setState()触发，但是这并不是很可靠的，Context支持跨组件的访问，但是如果中间的子组件通过一些方法不影响更新，比shouldComponentUpdate() 返回false 那么不能保证Context的更新一定可以使用Context的子组件，因此，Context的可靠性需要关注。\n</code></pre>\n<ul>\n<li>除了实例的属性可以获取Context外哪些地方还能直接获取Context呢？</li>\n</ul>\n<pre><code>方法一\nconst contextValue = useContext(Context)\n方法二\n<Context.Consumer>{contextValue=>contextValue}<Context.Consumer>\n</code></pre>\n<ul>\n<li>Consumer向上找不到Provider的时候怎么办？</li>\n</ul>\n<pre><code>当consumer向上层找不到provider时，此时就会取创建context时传给createContext的那个值，也就是当前context对象的默认值，在定义provider时的value中的值不是默认值，而是表示需要被传递的值\n</code></pre>\n<ul>\n<li>状态管理器解决了什么问题？什么时候用状态管理器？状态管理器它精髓是什么？</li>\n</ul>\n<pre><code>当我们开发的项目越来越大、需要保存的数据和状态越来越多的时候，就需要一个专门的模块（状态管理器）来维护这些数据。\n</code></pre>\n<ul>\n<li>redux工作原理？mobx工作原理？</li>\n</ul>\n<pre><code>Redux整个工作过程中，数据流是严格单向的，只能通过dispatch action 的方式触发数据状态的修改。Action会进入对应的Reducer进行处理最终得到新的状态State，然后进一步的触发View的数据更新\n\n</code></pre>\n<ul>\n<li>什么是Redux？说说你对Redux的理解？有哪些运用场景？</li>\n</ul>\n<pre><code>Redux 是 JavaScript 状态容器，提供可预测化的状态管理，可以让你构建一致化的应用，运行于不同的环境（客户端、服务器、原生应用），并且易于测试。当多个组件需要访问同一状态时，redux可以帮助你处理状态的共享\n</code></pre>\n<ul>\n<li>redux三个原则？</li>\n</ul>\n<pre><code>1. 单一数据源：整个应用的state被存储在一棵object tree中，并且这个object tree只存在于唯一一个store中；\n2. state是只读的：唯一改变state的方法就是触发action，action是一个用于描述发生事件的普通对象；\n3. 使用纯函数修改数据；\n</code></pre>\n<ul>\n<li>你有了解Rxjs是什么吗？它是做什么的？</li>\n</ul>\n<pre><code>Rxjs是一个基于可观测数据流 Stream 结合观察者模式和迭代器模式的一种异步编程的应用库\n</code></pre>\n<ul>\n<li>在Redux中怎么发起网络请求？</li>\n</ul>\n<pre><code>使用中间件发送网络请求，redux-saga、redux-thunk\n</code></pre>\n<ul>\n<li>Redux怎样重置状态？</li>\n</ul>\n<pre><code>先在store初始化时对store的初始化数据状态进行保存，然后reducer中多定义一个重置状态的type=&quot;RESET&quot;的action的逻辑，这个操作里面直接返回初始的状态值，在需要重置状态的时候，直接dispatch这个RESET的actionType即可 \n</code></pre>\n<ul>\n<li>Redux怎样设置初始状态？</li>\n</ul>\n<pre><code>主要有两种方法来初始化应用的 state 。\n\n可以使用 createStore 方法中的第二个可选参数 preloadedState。\n\n也可以在 reducer 中为 undefined 的 state 参数指定的默认的初始值。这个可以通过在 reducer 中添加一个明确的检查来完成，也可以使用 ES6 中默认参数的语法 function myReducer(state = someDefaultValue, action)\n</code></pre>\n<ul>\n<li>Context api可以取代Redux吗？为什么？</li>\n</ul>\n<pre><code>可以，但是并不完美。 利用Context API+useReducer的方案可以实现简化版的Redux。\n Redux除了能够存储数据之外，它的强大之处还在于数据修改的单一性，清晰的数据流向，依赖不可变性的数据实现时间旅行等等。而这些特点是原生的Context API所不具备的\n</code></pre>\n<ul>\n<li>推荐在reducer中触发Action吗？为什么？</li>\n</ul>\n<pre><code>不推荐。首先reducer应该是一个纯函数，reducer中的代码应该把代码逻辑限定在当前的reducer内，如果触发了action，会触发其它的reducer、甚至再次触发自身，可能引起死循环或者其它的不确定因素，增加调试成本。 \n</code></pre>\n<ul>\n<li>Redux的中间件是什么？你有用过哪些Redux的中间件？Redux怎么添加新的中间件？</li>\n</ul>\n<pre><code>中间件（Middleware）是介于应用系统和系统软件之间的一类软件，它使用系统软件所提供的基础服务（功能），衔接网络上应用系统的各个部分或不同的应用，能够达到资源共享、功能共享的目的\nRedux整个工作流程，当action发出之后，reducer立即算出state，整个过程是一个同步的操作。那么如果需要支持异步操作，或者支持错误处理、日志监控，这个过程就可以用上中间件,Redux中，中间件就是放在就是在dispatch过程，在分发action进行拦截处理。\nredux-thunk：用于异步操作\nredux-logger：用于日志记录\n\n添加中间件\nconst store = createStore(\n  reducer,\n  applyMiddleware(thunk, logger)\n);\n</code></pre>\n<ul>\n<li>redux-thunk作用是什么？</li>\n</ul>\n<pre><code>redux-thunk的核心代码其实只有两行，就是判断每个经过它的action：如果是function类型，就调用这个function（并传入 dispatch 和 getState 及 extraArgument 为参数），而不是任由让它到达 reducer，因为 reducer 是个纯函数，Redux 规定到达 reducer 的 action 必须是一个 plain object 类型。\n\nfunction createThunkMiddleware(extraArgument) {\n  return ({ dispatch, getState }) => next => action => {\n    if (typeof action === 'function') {\n      return action(dispatch, getState, extraArgument);\n    }\n\n    return next(action);\n  };\n}\n\nconst thunk = createThunkMiddleware();\nthunk.withExtraArgument = createThunkMiddleware;\n\nexport default thunk;\n\nredux-thunk帮助你统一了异步和同步 action 的调用方式，把异步过程放在 action 级别解决，对 component 没有影响\n</code></pre>\n<ul>\n<li>redux-saga和redux-thunk有什么本质的区别？</li>\n</ul>\n<pre><code>对于redux-thunk的整个流程来说，它是等异步任务执行完成之后，我们再去调用dispatch，然后去store去调用reduces。对于redux-saga的整个流程来说，它是等执行完action和reducer之后，判断reducer中有没有这个action\n\nredux-thunk和redux-saga处理异步任务的时机不一样。对于redux-saga，相对于在redux的action基础上，重新开辟了一个 async action的分支，单独处理异步任务\n</code></pre>\n<ul>\n<li>在React中你是怎么对异步方案进行选型的？</li>\n</ul>\n<pre><code>小项目使用简单的redux-thunk方案,增加的代码量极少，只有两个api，上手成本低\n大项目使用基于redux-saga的dva.js，它简化了redux-saga的操作，使用上更加直观，降低了使用成本\n</code></pre>\n<ul>\n<li>你有使用过redux-saga中间件吗？它是干什么的？它的原理？</li>\n</ul>\n<pre><code>redux-saga 把异步获取数据这类的操作都叫做副作用（Side  Effect），它的目标就是把这些副作用管理好，让他们执行更高效，测试更简单，在处理故障时更容易\n\n使用 createSagaMiddleware 方法创建 saga 的 Middleware ，然后在创建的 redux 的 store 时，使用 applyMiddleware 函数将创建的 saga Middleware 实例绑定到 store 上，最后可以调用 saga Middleware 的 run 函数来执行某个或者某些 Middleware 。\n在 saga 的 Middleware 中，可以使用 takeEvery 或者 takeLatest 等 API 来监听某个 action ，当某个 action 触发后， saga 可以使用 call 发起异步操作，操作完成后使用 put 函数触发 action ，同步更新 state ，从而完成整个 State 的更新\n</code></pre>\n<ul>\n<li>Redux中异步action和同步action最大的区别是什么？</li>\n</ul>\n<pre><code>同步action：执行了dispatch函数之后，对应的reducer纯函数立即得到执行，reducer执行完了之后，state立即就改变了，此时用store.getState函数，取到的是最新的state值；\n\n异步action：原则上redux并没有提供异步action的处理方案，异步的action需要依赖第三方的中间件解决（如redux-thunk），dispatch了一个异步action（本质上是dispatch的一个函数）之后，目标state并不会立即响应，而是要看异步函数内部的逻辑，来决定state什么时候响应.\n</code></pre>\n<ul>\n<li>Redux和vuex有什么区别？</li>\n</ul>\n<pre><code>相同点\nstate 共享数据\n流程一致：定义全局state，触发，修改state\n原理相似，通过全局注入store。\n\n不同点\n从实现原理上来说：\nRedux 使用的是不可变数据，而Vuex的数据是可变的。Redux每次都是用新的state替换旧的state，而Vuex是直接修改\nRedux 在检测数据变化的时候，是通过 diff 的方式比较差异的，而Vuex其实和Vue的原理一样，是通过 getter/setter来比较的\n\n从表现层来说：\nvuex定义了state、getter、mutation、action四个对象；redux定义了state、reducer、action。\nvuex中state统一存放，方便理解；reduxstate依赖所有reducer的初始值\nvuex有getter,目的是快捷得到state；redux没有这层，react-redux mapStateToProps参数做了这个工作。\nvuex中mutation只是单纯赋值(很浅的一层)；redux中reducer只是单纯设置新state(很浅的一层)。他俩作用类似，但书写方式不同\nvuex中action有较为复杂的异步ajax请求；redux中action中可简单可复杂,简单就直接发送数据对象（{type:xxx, your-data}）,复杂需要调用异步ajax（依赖redux-thunk插件）。\n\nvuex触发方式有两种commit同步和dispatch异步；redux同步和异步都使用dispatch\n</code></pre>\n<ul>\n<li>说说Redux的实现流程</li>\n</ul>\n<pre><code>redux 要求我们把数据都放在 store 公共存储空间\n\n通过dispatch action\nstore 接收到 action , 把action和 oldState 当做参数发送给 reducers\nreducers 接收 action和 oldState 通过计算返回新的 newState 给 store\n</code></pre>\n<ul>\n<li>Mobx的设计思想是什么？</li>\n</ul>\n<pre><code>依赖收集。在Mobx中，定义了observable的属性，mobx会自动跟踪这个属性值的变化；在用了mobx与react的桥接库mobx-react之后，这种跟踪关系会体现了视图上，JSX依赖的observable属性值变化，视图就会自动的进行更新\n</code></pre>\n<ul>\n<li>Redux由哪些组件构成？</li>\n</ul>\n<pre><code>State：Redux中的数据\nReducer：这是Redux的核心，内部处理接受到action后到返回新的state的逻辑；reducer可以进行嵌套，一个store只有一个根reducer\nAction：一般会写成actionCreator函数的形式，这个函数返回的就是action对象，这个对象至少会一个type属性，用于标识当前的动作\nStore: 以上三部分组成的就是一个Store，一般来说一个应用仅存在一个Store，它可以进行读取应用的state，监听state的变化，发起一个action等操作\n</code></pre>\n<ul>\n<li>Mobx和Redux有什么区别？</li>\n</ul>\n<pre><code>Redux的编程范式是函数式的而Mobx是面向对象的；\n从数据上来说Redux每次都返回一个新的数据，而Mobx从始至终都是一份引用。因此Redux是支持数据回溯的；\n和Redux相比，使用Mobx的组件可以做到精确更新，这一点得益于Mobx的observable；对应的，Redux是用dispath进行广播，通过Provider和connect来比对前后差别控制更新粒度；Mobx更加精细一点。\n</code></pre>\n<ul>\n<li>在React项目中你是如何选择Redux和Mobx的？说说你的理解</li>\n</ul>\n<pre><code>Redux\n优点\n1、流程规范，按照官方推荐的规范和结合团队风格打造一套属于自己的流程。\n2、函数式编程，在 Reducer 中，接受输入，然后输出，不会有副作用发生，幂等性。\n3、可追踪性，很容易追踪产生 BUG 的原因。\n\n缺点\n1、流畅太繁琐，需要写各种 Action，Reducer。\n2、要想完成异步数据，得配合其他库。\n\nMobx\n优点\n1、学习成本少，基础知识非常简单，跟 Vue 一样的核心原理，响应式编程。\n2、写更少的代码，完成更多的事。不会跟 Redux 一样写非常多的样板代码。\n3、使组件更加颗粒化拆分。\n\n缺点\n1、过于自由，MobX 提供的约定及模版代码很少，如果团队不做一些约定，容易导致团队代码风格不统一。\n2、可拓展，可维护性，也许你会担心 Mobx 能不能适应后期项目发展壮大呢？确实 Mobx 更适合用在中小型项目中，但这并不表示其不能支撑大型项目，关键在于大型项目通常需要特别注意可拓展性，可维护性，相比而言，规范的 Redux 更有优势，而 Mobx 更自由，需要我们自己制定一些规则来确保项目后期拓展，维护难易程度；\n</code></pre>\n<ul>\n<li>你有在React中使用过Mobx吗？它的运用场景有哪些？</li>\n</ul>\n<pre><code>store :redux是单个store，mobx 可以是多个\naction :redux通过action来驱动数据的变化，是必选项，而mobx则为可选项,\n数据结构 :redux使用正常的javascript对象，而mobx进行包裹，得到observable数据,\nimmutable :redux要求数据的不可变形，而mobx则没有要求,\n代码量 :mobx👍 代码量小，可以快速完成简单业务开发,\n耦合性 :redux 👍 耦合度低，可以便于复用，也方便进行单元测试,\n生态环境 :redux 👍的生态环境优于mobx,\n使用场景 :mobx 👍适用于简单的业务，快速完成开发；redux适用于复杂场景\n</code></pre>\n<ul>\n<li>Redux的数据存储和本地储存有什么区别？</li>\n</ul>\n<pre><code>Redux存储的数据本质上都是JS变量，都是在内存中的，页面刷新就会消失\n本质存储是像localStorage Cookie IndexDB WebSQL等缓存技术，它是存储在硬盘中的，不会随便页面刷新而消失\n</code></pre>\n<ul>\n<li>在Redux中，什么是reducer？它有什么作用？</li>\n</ul>\n<pre><code>redux当中的reducer之所以叫做reducer，是因为它和 Array.prototype.reduce 当中传入的回调函数非常相似,Reducer是用于根据业务逻辑更新state\n</code></pre>\n<ul>\n<li>举例说明怎么在Redux中定义action？</li>\n</ul>\n<pre><code>Action表示应用中的各类动作或操作，不同的操作会改变应用相应的state状态，说白了就是一个带type属性的对象，例如const increaseAction = {type:'increase'}\n</code></pre>\n<ul>\n<li>在Redux中，什么是action？store？</li>\n</ul>\n<pre><code>Action表示应用中的各类动作或操作，不同的操作会改变应用相应的state状态，说白了就是一个带type属性的对象。\n\nStore则是我们储存state的地方。我们通过redux当中的createStore方法来创建一个store，它提供3个主要的方法：getState、dispatch和subscribe\n</code></pre>\n<ul>\n<li>为什么Redux能做到局部渲染呢？</li>\n</ul>\n<pre><code>reducer从根往最子级的reducer中间各层总是返回一个新的state，这样的话，就会引起组件的大范围的re-render，但是这是可避免的\n\n合理的利用selector：在connect函数中的第一个函数mapStateToProps中从store state中返回当前组件需要使用的props，需要一个筛选，这个筛选函数就叫做selector，需要尽量细化传入的store state，即使根state发生了引用的变更，但是它下面的属性值可能是大部分都还是原来的引用，引用了这个老引用的情况下，是不会引起组件的re-render的;正因为如此，因为一般都不会将整个store state组为组件的props进行引用，所以利用这一点就可以实现局部渲染\n</code></pre>\n<ul>\n<li>说说Redux的优缺点分别是什么？</li>\n</ul>\n<pre><code>优点\n1. Redux轻量，生态丰富，可以结合流行的redux-thunk、redux-saga等进行使用\n2. Redux的写法比较固定，团队应用中风格比较稳定，提高协作中的可维护性\n3. 因为Redux中的reducer更新时，每次return的都是不可变对象，所以时间旅行操作相对容易\n\n缺点\n1. 每一次的dispatch都会从根reducer到子reducer嵌套递归的执行，所以效率相对较低；\n2. Redux核心是不可变对象，在Reducer中的操作都要比较小心，注意不能修改到state的属性\n3. Redux中写法固定，模板代码较多\n</code></pre>\n<ul>\n<li>Redux和Flux的区别是什么？</li>\n</ul>\n<pre><code>redux与flux很像，主要区别在于flux有多个可以改变应用状态的store，它通过事件来触发这些变化，组件可以订阅这些时间来和当前状态同步。redux中没有分发器dispatcher，但在flux中dispatcher被用来传递数据到注册的回调事件，另一个不同的是flux中有很多扩展是可用的，这也带来了一些混乱与矛盾。在redux中只能定义一个可以更新状态的store，flux中可以定义多个仓库。redux把store和dispatcher合并，结构更加简单清晰，新增state，对状态管理更加明确。\n</code></pre>\n<ul>\n<li>什么是单一数据源？</li>\n</ul>\n<pre><code>Redux的store.getState只能得到一个数据源，通常这是一个对象，通常这也是React App中的唯一Redux数据源，这个state对象中的属性值通过combineReducer整合了子Reducer返回的state的值 \n</code></pre>\n<ul>\n<li>你有写过Redux的中间件插件吗？</li>\n<li>Redux的中间件机制是怎么样的？这种机制有什么作用？</li>\n<li>Redux中你用过哪些第三方的中间件？</li>\n</ul>\n<pre><code>view在redux中会派发一个action，action通过store的dispatch方法派发给store，store接收到action连同之前老的state一起传给reducer，reducer返回新的数据给store，store去改变自己的state，这是redux的流程。\n\nredux中间件的中间指的是action和store之间，之前在redux中action只能返回一个对象，所以action返回的一个对象会直接派发给store，现在使用redux-thunk之后action可以返回一个函数了，action通过dispatch方法被传递给store，那么action和store之间就是dispatch这个方法。\n\n实际上中间件就是对dispatch方法的一个封装或者说对dispatch方法的一个升级，最原始的dispatch方法接收到一个对象之后会把这个对象传递给store。\n\n当把dispatch做了升级之后，比如说使用了redux-thunk 这个中间件，这个时候当调用dispatch方法给dispatch方法传递的参数是一个对象的话，那么dispatch就会把这个对象直接传递给store，跟之前我们写dispatch传递给它一个对象没什么区别，但是如果传递给dispatch方法是一个函数的话，这个时候dispatch已经升级了，它就不会把这个函数直接传递给store，它会先让这个函数执行，执行完了之后需要调用store的时候再去调用store。所以dispatch在这里会根据参数的不同执行不同的事情。\n\n所以redux的中间件就是对store的dispatch做了个升级，升级之后dispatch就可以对象和函数都可以接收了。\n\nredux-saga\nredux-thunk\n</code></pre>\n<h3>前端路由</h3>\n<ul>\n<li>React-Router工作原理？为什么需要前端路由？前端路由解决了什么问题？前端通用路由解决方案？</li>\n</ul>\n<pre><code>借助history库实现监听路由，内部支持hash和bowser两种路由变化,实现了URL和UI的同步。在单页面应用，大部分页面结构不变，只改变部分内容的使用\n\n前端路由好处\n1.用户体验好，不需要每次都从服务器全部获取，快速展现给用户\n\n不足\n1.使用浏览器的前进，后退键的时候会重新发送请求，没有合理地利用缓存\n2.单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置\n</code></pre>\n<ul>\n<li>React-Router怎么获取历史对象？</li>\n</ul>\n<pre><code>1.如果React >= 16.8 时可以使用 React Router中提供的Hooks\nimport { useHistory } from &quot;react-router-dom&quot;;\nlet history = useHistory(); \n\n2.使用this.props.history获取历史对象\nlet history = this.props.history;\n</code></pre>\n<ul>\n<li>React-Router怎么获取URL的参数？</li>\n</ul>\n<pre><code>1. 通过params \n类组件：在保证props能获取到路由信息的前提下（如果不是直接嵌套在<Route/>下，需要使用withRouter的HOC），通过this.props.match.params\n\n2. 通过search\n</code></pre>\n<ul>\n<li>在history模式中push和replace有什么区别？</li>\n</ul>\n<pre><code>history.push() 页面跳转，并且往页面栈中添加一条记录\nhistory.replace() 页面跳转，但是不会添加一条记录，而是替换当前的记录\n</code></pre>\n<ul>\n<li>React-Router怎么设置重定向？</li>\n</ul>\n<pre><code>标签式重定向：就是利用<Redirect>标签来进行重定向，业务逻辑不复杂时建议使用这种。\n编程式重定向：这种是利用编程的方式，一般用于业务逻辑当中，比如登录成功挑战到会员中心页面。例如直接在构造函数constructor中加入this.props.history.push(&quot;/home/&quot;);\n</code></pre>\n<ul>\n<li>React-Router 4中<Router>组件有几种类型？</li>\n</ul>\n<pre><code>HashRouter：老浏览器的history,主要通过hash来实现，对应createHashHistory()\nBrowserRouter：高版本浏览器,通过html5里面的history，对应createBrowserHistory()\nMemeoryRouter：**node环境下,主要存储在memeory里面，对应createMemoryHistory()\n</code></pre>\n<ul>\n<li>React-Router 3和React-Router 4有什么变化？添加了什么好的特性？</li>\n</ul>\n<pre><code>React-Router 4 从设计思想上进行改变，引入动态路由，将路由进行了拆分，将其放到了各自的模块中，不再有单独的 router 模块，充分体现了组件化的思想，更加贴合 React 的思想。\n\n1. 包含式路由与exact \n  在之前的版本中，在 Route 中写入的 path，在路由匹配时是独一无二的，路由的嵌套体现在 <Route> 组件的嵌套规则上\n  v4 版本则有了一个包含的关系：如匹配 path=&quot;/users&quot; 的路由会匹配 path=&quot;/&quot;的路由，在页面中这两个模块会同时进行渲染。\n  v4中多了 exact 关键词，表示只对当前的路由进行匹配。\n2. 独立路由：Switch（排他性路由） \n  采用 <Switch>，只有一个路由会被渲染，并且总是渲染第一个匹配到的组件\n  配合使用 exact\n3. &quot;Index Routes&quot; 和 &quot;Not Found&quot; \n  废弃了 <IndexRoute>，而该用 <Route exact> 的方式进行代替\n  如果没有匹配的路由，也可通过 <Redirect> 来进行重定向到默认页面或合理的路径。\n4. 嵌套布局\n5. 授权路由\n6. <Link> vs <NavLink>\n7. URL 查询字符串\n</code></pre>\n<ul>\n<li>React-Router的实现原理是什么？</li>\n</ul>\n<pre><code>在 React Router 内部主要依靠 history 库完成，这是由 React Router 自己封装的库，为了实现跨平台运行的特性，内部提供两套基础 history，一套是直接使用浏览器的 History API，用于支持 react-router-dom；另一套是基于内存实现的版本，这是自己做的一个数组，用于支持 react-router-native。\n\nReact Router 的工作方式可以分为设计模式与关键模块两个部分。从设计模式的角度出发，在架构上通过 Monorepo 进行库的管理。Monorepo 具有团队间透明、迭代便利的优点。其次在整体的数据通信上使用了 Context API 完成上下文传递。\n\n在关键模块上，主要分为三类组件：第一类是 Context 容器，比如 Router 与 MemoryRouter；第二类是消费者组件，用以匹配路由，主要有 Route、Redirect、Switch 等；第三类是与平台关联的功能组件，比如 Link、NavLink、DeepLinking 等。\n\n</code></pre>\n<ul>\n<li>React-Router 4的switch有什么用？</li>\n</ul>\n<pre><code>switch的子组件只能是Route或者switch，它的作用是匹配到下面的第一个路由组件，如果匹配到了第一个后面的将不在进行匹配展示了。\n</code></pre>\n<ul>\n<li>React-Router的路由有几种模式？</li>\n</ul>\n<pre><code>React-Router 支持使用 hash（对应 HashRouter）和 browser（对应 BrowserRouter） 两种路由规则， react-router-dom 提供了 BrowserRouter 和 HashRouter 两个组件来实现应用的 UI 和 URL 同步：\n\nBrowserRouter 创建的 URL 格式：xxx.com/path,它使用 HTML5 提供的 history API（pushState、replaceState 和 popstate 事件）来保持 UI 和 URL 的同步\n\nHashRouter 创建的 URL 格式：xxx.com/#/path,使用 URL 的 hash 部分（即 window.location.hash）来保持 UI 和 URL 的同步\n</code></pre>\n<ul>\n<li>React-Router 4怎样在路由变化时重新渲染同一个组件？</li>\n</ul>\n<pre><code>1. 在不同的组件添加不同的key，例如<组件 {...props} key={search参数}/>\n\n2. 可以在这个组件的componentWillReceiveProps和shouldComponentUpdate生命周期方法中添加url变化的判断，如果url判断变化，就执行相关的逻辑代码(变化了就会就会重新执行render()函数，组件变会进行重新渲染。)\n</code></pre>\n<ul>\n<li>React-Router的<Link>标签和<a>标签有什么区别？</li>\n</ul>\n<pre><code><Link>是react-router 里实现路由跳转的链接，一般配合 <Route> 使用，react-router 会接管Link 的默认链接跳转行为，区别于传统的页面跳转，<Link> 的“跳转”行为只会触发相匹配的 <Route> 对应的页面内容更新，而不会刷新整个页面。 而 <a> 标签就是普通的超链接了，用于从当前页面跳转到 href 指向的另一个页面（非锚点情况）。\n\n对比<a>,Link组件避免了不必要的重渲染，react-router只更新变化的部分从而减少DOM性能消耗，react的创新之处在于，它利用虚拟DOM的概念和\n</code></pre>\n<ul>\n<li>React的路由和普通路由有什么区别？</li>\n</ul>\n<pre><code>1. React路由是前端的路由，普通路由指的是后端的路由\n2. React路由不管是hash还是browser的模式，都是在响应了hash/browser的change之后，再变更页面的DOM结构，由于是单页应用，页面文件始终没有变化;通过请求的path，然后相应不同的页面\n</code></pre>\n<ul>\n<li>请你说说React的路由的优缺点？</li>\n</ul>\n<pre><code>优点：\n1. 配置灵活\n2. 支持丰富的传参\n3. 兼容性，利用hashRouter也可以实现低版本的兼容\n\n缺点\n1. v4之后使用url query的方式传参比较繁琐，解析时需要使用queryString和location.search\n2. 利用react-router的query或state进行传参打开新的路由，刷新页面后数据会丢失\n3. BrowserRouter的模式需要服务器配合，保证在前端路由的切换范围内，都只相应同一个html文件\n4. BrowserRouter需要现代浏览器才能兼容\n</code></pre>\n<ul>\n<li>请你说说React的路由是什么？</li>\n</ul>\n<pre><code>React的路由是纯前端的路由，就是根据hash或browser path的变化，框架内封装好了方法，可以自由的切换DOM展示，来模拟页面或局部页面被替换的目的；让浏览器不用刷新，也能获取想要的页面结构，保存内存数据，提升用户体验 \n</code></pre>\n<ul>\n<li>路由切换时同一组件无法重新渲染的有什么方法可以解决？</li>\n</ul>\n<pre><code>1.唯一的不同的key\n2.如果你对是否结束此次生命周期并没有特别的要求，也可以通过componentDidUpdate（preProps）钩子 函数，或者componentWillReceiveProps(nextProps)判断props.match.params.type是否发生改变。如果变化，手动调用获取数据的接口。\n\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/CompReact发展历史0013.tsx":
/*!************************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/CompReact发展历史0013.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>React发展历史</h1>\n<h3>如何定义React？React是什么？</h3>\n<p>react是一个UI界面库，专注于视图层的实现。拥有三个维度的优点，\n第一对于用户使用来说，采用声明式编程，本质为组件化，分而治之\n第二对于底层DOM更新来说，采用虚拟dom，diff找到变化部分，实现最小化更新\n第三对于其他类库和框架来说，React能够与它们配合使用</p>\n<p>如果把React比作一个中层管理者，对上能够让老板知道你带领的团队有什么样的能力，对下能够让下面的人工作更有效率，和同等级的其他中层合作融洽，不会产生冲突。</p>\n<p>因此我们可以称React是一个基于组件化的开发模式、采用虚拟DOM来最小化更新DOM、通过props数据通信和state更新数据、为抹平不同浏览器差异而统一封装DOM事件系统的UI界面库。如果把react比做一家公司，这家公司的流程是规范而且清晰的，你要更新组件必须通过setState来提交更新流程，通过流程能找到并实现最小化的更新；你要监听一个事件，规范的事件触发系统能够帮助你应对外部环境下不可预知的错误</p>\n<h3>React主要为解决什么问题而产生的</h3>\n<p>我们先来分析一下设计一个前端框架需要考虑到哪些问题？</p>\n<p>首先开发过程中问题，考虑学习门槛（快速上手）、使用门槛（预备知识）、灵活（对业务架构设计）、开发效率（代码的复用和移植）</p>\n<p>其次运行过程中的问题，考虑兼容性（各个平台/浏览器支持情况）、稳定性和容错容灾（各种极端环境的边界考虑，如网络、内存、）、安全性（）</p>\n<p>最后后期迭代中的问题，考虑扩展性(跨端)</p>\n<p>React解决了哪些问题？</p>\n<p>jsx->灵活、组件化->可复用和移植，事件系统/虚拟DOM->兼容性，react/react-dom分工明确->扩展性，跨端等</p>\n<p>React设计</p>\n<ol>\n<li>react怎么实现渲染的</li>\n</ol>\n<p>jsx->React Component,\nreconcile -></p>\n<p>ReactComponent</p>\n<h3>React主要版本</h3>\n<p>react 0.3</p>\n<pre><code>初步确定了react的运作机制，拥有核心组成部分，组件（拥有渲染方法的对象，支持原生HTML标签，div等）、jsx、事件、事务、虚拟DOM等\n</code></pre>\n<p>react 0.4</p>\n<pre><code>支持更多原生HTML标签如canvas、iframe\n支持服务端渲染\n添加prop验证和默认值\n支持列表key，在协调时进行更精细的控制\n对input、textarea、option和select标签进行包装成受控组件\n移除事件的autoBind\n实现标准的符合W3C规范的事件系统\nsetState,组件批量更新\n</code></pre>\n<p>react 0.5</p>\n<pre><code>优化相关：内存使用提升、性能提升加快速度、更好的服务端渲染\n标准化：标准化prop、支持合成事件、添加一系列html标签属性（完善HTML标签\n开始着手性能分析\n使用react开发chrome插件成为可能\n</code></pre>\n<p>react 0.8</p>\n<pre><code>发布了npm包，可以通过npm install安装\n完善了一些html标签的属性支持，如textarea标签的rows和cols属性，script标签的defer和async属性\n改进了错误消息\n支持onContextMenu事件，支持IE11的Selection事件\n</code></pre>\n<p>react 0.9</p>\n<pre><code>重大变更：整页渲染（渲染html标签）只支持服务端渲染，一些api的使用变更，例如this.context只能在react内部使用\n新特性：对html标签的属性/事件较为完善的支持、propTypes的完善、jsx支持空格\n修复bug：支持key值包含'.'\n</code></pre>\n<p>react 0.11</p>\n<pre><code>重大变更：自定义的propType应该返回error\n新特性：React.Children.count\n修复bug：重渲染的批处理支持更多情况，css支持属性的前缀（Webkit, ms, Moz, O），重复keys降级为warning,在没有DOM的环境下setState可以在componentWillMount中调用\n</code></pre>\n<p>react 0.12</p>\n<pre><code>重大变更：key和ref不挂在prop上，直接挂在元素上，\n新特性：jsx的prop解构传值，完善HTNL标签的属性\n</code></pre>\n<p>react 0.13</p>\n<pre><code>新特性：通过es6 class构建组件、React.findDOMNode(component)、React.cloneElement(el, props)、setState接收一个函数\n</code></pre>\n<p>react 0.14</p>\n<pre><code>新特性：分离react-dom包，修改react-dom bug\n</code></pre>\n<p>react 15</p>\n<pre><code>react-dom\nreact-perf\nreact-native\n新特性：初始渲染使用document.createElement而不是通过生成html字符串然后innerHTNML的方式、错误/警告栈、React.pureComponents、通过各种方式提高开发构建时性能\n</code></pre>\n<p>react 16</p>\n<pre><code>react-reconciler\nreact-art\nreact-is\nscheduler\n新特性：render函数可以返回字符串或者数组、Error boundaries 、传送门ReactDOM.createPortal()、流模式服务端渲染\n、React.createRef()、React.forwardRef()、React.lazy()Suspense、React.memo()\n\nReactDOM添加getDerivedStateFromProps()、getSnapshotBeforeUpdate()生命钩子、添加严格模式<React.StrictMode>、<Context.Consumer>\n</code></pre>\n<p>react 16.8</p>\n<pre><code>hook\nuseState、useReducer、useEffect、useMemo、useCallback、useImperativeHandle、useLayoutEffect\n\n</code></pre>\n<p>react 16.9</p>\n<pre><code><React.Profiler>：收集性能度量\n</code></pre>\n<p>react 16.13</p>\n<pre><code>Concurrent Mode\n\n</code></pre>\n<p>react 17</p>\n<pre><code>解决一些问题 fix bugs\n移除一些没有用到的依赖\n将事件委托放在了root上而不是以前的 document上\n</code></pre>\n<p>react 18</p>\n<pre><code>停止对ie11支持\nreact-dom/client\n1. 增加Hooks：useId、useTransition、useDeferredValue、useSyncExternalStore、useInsertionEffect\n2. 在所有情况下，setState更新都会批处理\n3. 退出批量更新的flushSync\n4. 移除了卸载组件时执行状态更新警告\n5. React组件允许返回undefined\n6. 对Suspense组件fallback属性做了处理，可以不写fallback，React不会跳过它\n\n\nreact-dom/server\n\nclient：reactDOM.createRoot()、reactDOM.hydrateRoot()\n</code></pre>\n<h2>历史</h2>\n<p>mvc软件架构模式</p>\n<p>Backbone</p>\n<ul>\n<li><a href=\"https://www.zhihu.com/question/19720745/answer/14315565\">Backbone.js 的最佳应用场景有哪些？</a></li>\n</ul>\n<h3>React作用（解决了什么问题/产生什么影响/核心的几个版本）</h3>\n<p>react提出了全新的组织代码的方式，使其更可预测，即页面组件化。并且加入了DOM diff，当DOM发生变化时，通过dom diff算法计算出变化点，以最小粒度更新。通过将用户界面拆分成更细粒度的包含逻辑代码段的组件描述来减少构建UI时发生的错误。</p>\n<p>react核心版本16.8，全新的Fiber架构、加入Hook</p>\n<h3>React特点（优缺点）</h3>\n<p>react是一个组件化、单向数据流、支持函数式编程、基于Virtual DOM、专注视图层的UI框架，其优点是代码逻辑简单、性能出众、能和其他库一起使用，渲染到特定的环境。由于其特定的更新方式，非常容易造成重渲染，导致不需要更新的组件更新了</p>\n<h3>应对后来的框架</h3>\n<p>preact：能实现react的核心功能，体积比react小很多</p>\n<p>vue：mvvm框架，能达到视图细粒度的更新</p>\n<p>solid：去除Virtual DOM\nsvelet：去除Virtual DOM</p>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/CompReact理解0014.tsx":
/*!**********************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/CompReact理解0014.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h3>声明式编程和命令式编程</h3>\n<pre><code>声明式编程表达逻辑而不显式地定义步骤，关注做什么而非怎么做。命令式关注过程步骤\n</code></pre>\n<h3>运行时和编译时</h3>\n<pre><code>运行时即代码运行阶段，直接可以被宿主环境执行的代码。\n例如浏览器可以直接解析document.createElment,不需要编译。编译时则需要经过再一层转化\n</code></pre>\n<h3>immutable和纯函数</h3>\n<pre><code>immutable即不可改变，数据不能被更改。如果要改变或更改数据，则必须复制数据副本来更改\n纯函数\n1. 幂等输入输出\n2. 不会产生副作用\n一个参数的immutable，内部代码不会产生副作用，不会对外界造成影响的函数。\n</code></pre>\n<h3>函数式编程</h3>\n<pre><code>1. 函数是一等公民\n2. 纯函数\n</code></pre>\n<h3>react-like库</h3>\n<ul>\n<li>Inferno</li>\n<li>snabbdom.js</li>\n<li>preact</li>\n</ul>\n<p>React是一个专注于构建UI界面的库。遵循组件化的开发模式、声明式编程范式和函数式编程概念，让前端应用的开发更加高效。\n它的特点有虚拟DOM、单向数据流、状态驱动视图，页面组件化。</p>\n<h3>React虚拟DOM</h3>\n<pre><code>利用虚拟DOM可以不用关心宿主环境的影响，通过diff算法找出DOM中变化的部分进行细粒度的更新来提高DOM更新的效率。\n虚拟DOM具有提升渲染性能、跨平台、规避XSS等优点\n\n当状态改变触发更新时，组件树自顶向下进行diff\n\ndiff算法遵循三个层级策略\n树层级：忽略跨层级比较，只有创建和删除操作，只会对相同层级节点进行比较\n组件层级：组件的type对比，判断是否同一类型的组件\n元素层级：列表key，每个节点对应层级用唯一的key标识\n</code></pre>\n<h3>React单向数据流</h3>\n<pre><code>在React中对数据的流向做了限制，即数据在组件树中通过props自顶向下由外层组件向内层组件的单向流动。\n数据变化之后只会影响单方向的其他节点，从而保证了状态变化的可追溯和可预测，这是一种更加规范的约定。\n</code></pre>\n<h3>React状态驱动视图</h3>\n<pre><code>唯有状态的变化才能引起渲染，通过setState/useState更新函数触发，批量更新\nUI=F(data)\n\n状态的immutable：React更新时只是浅比较引用是否发生变化，由于引用类型的可变和共享的特性，为了加速diff算法中reconcile的过程，需要保证数据的引用和值的一致性。保持一致性的方式有纯函数操作、深拷贝+修改数据同时改变其引用、immutable.js\n视图的批量更新\n\nReact执行过程\n1. jsx->js\n2. js->vdom\n3.vdom->dom\n\n由于React更新时浅比较（引用是否变化）状态来判断是否需要更新视图，所以不建议直接修改state，需要更新只能使用setState来触发。setState的调用执行是同步的，因为React为了提升性能而批量更新机制所以状态的更新是异步的。setState的执行过程\n\n1.将setState传入的partialState参数存储在当前组件实例的state暂存队列中。\n2.判断当前React是否处于批量更新状态，如果是，将当前组件加入待更新的组件队列中。\n3.如果未处于批量更新状态，将批量更新状态标识设置为true，用事务再次调用前一步方法，保证当前组件加入到了待更新组件队列中。\n4.调用事务的waper方法，遍历待更新组件队列依次执行更新。\n5.componentWillReceiveProps。\n6.将组件的state暂存队列中的state进行合并，获得最终要更新的state对象，并将队列置为空。\n7.componentShouldUpdate，根据返回值判断是否要继续更新。\n8.componentWillUpdate。\n9.render。\n10.componentDidUpdate。\n\nsetState和replaceState类似，setState会先合并之前的状态，replaceState会先清空之前的状态。setState可能会引起不必要的重渲染，setState任何值都会触发更新\n\nReact把所有的工作分成了两个阶段“render”和“commit”\nrender阶段利用双缓冲技术，在内存中构造另一颗 Fiber 树，在其上进行协调计算，找到需要更新的节点并记录，这个过程会被重复中断恢复执行；\ncommit 阶段，根据 render 阶段的计算结果，执行更新操作，这个过程是同步执行的\n\n\n\n</code></pre>\n<h3>React组件化</h3>\n<pre><code>React组件可以帮助我们将界面成了各个独立的小块，每一个块就是组件，这些组件之间可以组合、嵌套，构成整体页面。\nReact类组件使用一个名为render()的方法或者函数组件return，接收输入的数据并返回需要展示的内容\n\n关于jsx\nHTML也是xml协议，有由浏览器解析，而JSX是由js解析。浏览器引擎没有固有的实现来读取和理解它们， JSX并非旨在由引擎或浏览器实现，它旨在被各种转译器用来将这些JSX转换为有效的js代码。\njsx能有效防止xss攻击,ReactElement的$$typeof属性是一个symbol类型，通过JSON.stringify之后会被丢失\n\nReact class组件\nclass组件特点：耦合性高、逻辑复用困难\n适用\n1. 适合用于高内聚的公共模块，解决某一类特定问题\n2. errorboundary组件，必须用class组件\n\n缺点\n1. 状态的逻辑复用\n2. 很难tree-shaking\n3. componentdidupdate, 在复杂的情况下preState、nextstate、prevprop、nextprops的判断\n</code></pre>\n<h3>Mixin（混合）/Extend（继承）</h3>\n<pre><code>特点：强耦合，隐式依赖，不可预测\n场景：Mixin经常依赖组件的特定方法/状态，但是在定义组件的时候并不知道这种依赖关系\n\n由于依赖关系不透明，Mixin逻辑最后会合并到一起，又很难搞清楚一个Mixin的输入输出，导致难以快速理解组件的行为\n由于需要全盘了解所有依赖Mixin的扩展行为以及它们之间的相互影响，导致维护成本和理解成本增加,并且可能存在(命名)冲突\n由于Mixin倾向于增加更多状态，降低应用的可预测性，导致复杂度剧增\n</code></pre>\n<h3>HOC（高阶组件）接收一个组件作为参数，返回一个新的组件，是对装饰模式的一种实现</h3>\n<pre><code>特点：原组件不会感知HOC的存在，HOC会在原组件基础上增强功能\n优点：复用、逻辑和抽象，可以劫持render方法，控制props于state等\n缺点：\n1. 无法从外部访问子组件的state\n2. ref传递问题\n3. dom层级变深,调试困难\n4. props变得混乱\n\nHOC需要注意的地方\n1. 不能修改原始组件\n2. 过滤props\n3. 最大化可组合性\n4. 不要在render中使用HOC\n5. 务必复制静态方法\n6. refs不会被传递\n\n实现HOC的方式有\n1. 属性代理：对props进行代理\n2. 反向继承：返回的组件去继承之前的组件\n\nHOC的应用\n1. 非受控组件转化为受控组件\n2. 渲染劫持\n3. 抽象state\n4. 通过refs使用引用\n5. 控制props\n</code></pre>\n<h3>Render Props:一个值为函数的props，这个函数返回一个react元素</h3>\n<pre><code>优点：\n1. 动态构建\n缺点：\n1. 丢失组件上下问题，没有this.props属性\n2. render props基于闭包实现的\n\n</code></pre>\n<h3>Hook：逻辑复用</h3>\n<pre><code>来源\n为细粒度的代码复用，不和组件复用捆绑在一起。HOC和Render Props都是基于组件的组合方案，先把要复用的逻辑封装成组件，再利用组件复用机制实现逻辑复用。将函数当成最小的代码复用单元同时内置一些模式简化状态逻辑复用\n\n缺点\n1. 额外学习成本，函数组件和类组件的比较\n2. 写法限制，增加重构成本\n3. 破坏了PureComponent、React.memo浅比较的性能优化效果\n4. 闭包场景可能引用到旧的state、props值\n5. 内部实现上不直观，依赖一份可变的全局状态，不再那么pure\n6. React.memo并不能完全替代ShouldComponentUpdate（拿不到state change，只针对props change）\n7. useState API设计上不完美（初始化、可选链、闭包陷阱、引用类型、多个状态）\n\n</code></pre>\n<h3>Fiber</h3>\n<pre><code>第一层含义是react的一种程序架构，最重要的特点就是异步可以中断和恢复的并发架构\n\n第二层含义是react最新版本虚拟DOM节点的数据结构。它是一个链表的结构，通过child、sibling、return三个属性记录了树型结构中的子节点、兄弟节点、父节点的关系信息，从而可以实现从任一节点出发，都可以访问其他节点的特性\n</code></pre>\n<h3>React合成事件</h3>\n<pre><code>React为了更好的兼容IE等浏览器，自己实现了一套事件机制，通过对事件进行归类按照优先级进行处理，提高性能。它的处理方式是将事件统一绑定到根节点上（以前是document，现在是root），通过捕获或者冒泡的形式触发。\nReact的合成事件和HTML原生事件是可以同时共存的，由于React基于事件冒泡，所以会先执行原生事件然后再执行合成事件。原生事件可以通过return false来阻止默认事件，合成事件只能通过event.preventDefault来阻止。\n关于事件的清除问题，除了直接绑定在jsx里的事件不用手动清除以外，其他的方式包括定时器都要手动清除，如addEventListener、setTimeout，如果不清除的话很容易造成变量引用不会被垃圾回收机制清除，造成内存泄漏。\n</code></pre>\n<h3>React优化</h3>\n<pre><code>React重渲染问题来源，在diff过程中，react只会对前后做浅比较，即引用的比较，所以极容易造成重渲染。可以通过一系列的方式进行优化重渲染问题\n1. React.memo、pureComponent\n2. shouldComponentUpdate\n3. 列表加唯一key,确保元素是否移动，提高节点复用\n4. 避免使用内联对象和匿名函数\n5. 组件懒加载\n6. React.Fragment\n7. React.lay和Suspense，代码分割，组件懒加载\n8. 关于useEvent，函数的引用不变，状态能拿到最新的。\n</code></pre>\n<h3>第三方组件库</h3>\n<pre><code>罗列我认为有用的第三方类库及重要实现\nreact-table\n\nantd:\nMessage静态方法\n\nahooks:\nuseRequest通过plugin来实现轮询、防抖节流、缓存、错误重试等功能\nuseLatest实现\nuseMemoizedFn\nuseInfiniteScroll\nuseVirtualList\nuseCountDown\nuseUnmount\nuseDebounce\nuseThrottle\nusePrevious\nuseUpdateEffect\nuseLockFn\nuseEventListener\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/CompTypescript0060.tsx":
/*!*************************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/CompTypescript0060.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>Typescript面试题</h1>\n<ul>\n<li>在TypeScript中tsconfig.json有什么作用？</li>\n<li>在TypeScript中说说你对声明合并的理解</li>\n<li>在TypeScript中as语法是什么？</li>\n<li>在TypeScript中枚举和常量枚举有什么区别？</li>\n<li>在TypeScript中如何实现继承？</li>\n<li>如何将多个ts文件合并为一个js文件？</li>\n<li>在TypeScript支持静态类吗？为什么？</li>\n<li>在TypeScript中控制成员可见性有哪些方法？</li>\n<li>在TypeScript中如何创建对象？</li>\n<li>在TypeScript中如何定义和使用泛型？</li>\n<li>在TypeScript中如何创建和使用装饰器？</li>\n<li>什么是TypeScript接口？</li>\n<li>在TypeScript中如何与其他工具和库集成？</li>\n<li>在TypeScript中的lambda函数是什么？</li>\n<li>在Typescript中如何将字符串转换为数字？</li>\n<li>在TypeScript中如何访问模块外定义的类？</li>\n<li>在TypeScript中的getter/setter是什么？有什么作用？</li>\n<li>在TypeScript中支持哪些JSX模式？</li>\n<li>在TypeScript中如何让接口的所有属性都可选？</li>\n<li>在TypeScript中如何从子类调用基类构造函数？</li>\n<li>在TypeScript中有哪些三斜杠指令？</li>\n<li>在TypeScript中是如何检查null和undefined的？</li>\n<li>在TypeScript中如何创建变量？</li>\n<li>在TypeScript中解释下rest参数的作用及规则</li>\n<li>你是如何编译TypeScript的文件？</li>\n<li>请说说在TypeScript中什么是联合类型？</li>\n</ul>\n<pre><code>所谓“联合类型”其实就是多种类型的联合，也就是不仅仅一种类型。联合类型（Union Types）可以通过管道(|)给变量设置多种类型，赋值时可以根据设置的类型来赋值\n</code></pre>\n<ul>\n<li>请说说在TypeScript中什么是交叉类型？</li>\n</ul>\n<pre><code>所谓“交叉类型”通过&amp;符号将多个类型进行合并成一个类型\n原子类型进行合并是never，是没有意义的。例如number &amp; string，不可能有既满足字符串又满足数字类型。\n合并的接口类型中具有同名属性，如果同名的属性类型相同则合并之后还是原本的类型，如果不同合并之后为never。\n\n</code></pre>\n<ul>\n<li>在TypeScript中是如何实现函数重载的？</li>\n<li>在TypeScript中Omit类型有什么作用？</li>\n<li>在TypeScript中使用unknown的场景是什么？</li>\n<li>在TypeScript中什么是三斜线指令？</li>\n<li>在TypeScript中如何定义类？</li>\n<li>在TypeScript中的类与JavaScript类有什么不同？</li>\n<li>在TypeScript中怎样定义和使用命名空间？</li>\n<li>在TypeScript中是怎样进行类型检查的？</li>\n<li>在TypeScript中的void类型是什么？在什么场景下使用？</li>\n<li>在TypeScript中如何定义、导入和导出模块？</li>\n<li>在TypeScript中的null与undefined有什么区别？</li>\n<li>在TypeScript中如何支持类型推断？</li>\n<li>在TypeScript中any和unkown有什么区别？</li>\n<li>在TypeScript中装饰器有哪些应用场景？</li>\n<li>请说说你对TypeScript中装饰器的理解</li>\n<li>请说说你对TypeScript中mixin的理解</li>\n<li>请说说你对TypeScript中类的理解</li>\n<li>在TypeScript中never与void有什么区别？</li>\n<li>TypeScript有哪些内置数据类型？</li>\n<li>在TypeScript中interface与type有什么区别？</li>\n<li>请说说你对TypeScript中泛型的理解</li>\n<li>请说说你对TypeScript中模块的理解</li>\n<li>为什么要推荐使用TypeScript?</li>\n<li>请说说TypeScript有哪些特性？</li>\n<li>请说下TypeScript中的类型断言是什么？</li>\n<li>请说下在TypeScript中命名空间与模块的区别？</li>\n<li>TypeScript中支持的访问修饰符有哪些？</li>\n<li>请说说你对TypeScript中枚举的理解</li>\n<li>TypeScript中的Declare关键字有什么作用？</li>\n<li>你觉得TypeScript难吗？</li>\n<li>说说你对TypeScript的了解，它和JS有什么关系？</li>\n<li>你有在项目中使用过TypeScript吗？</li>\n<li>在TypeScript中泛型有什么作用？</li>\n<li>你是怎么优化你的 ts 代码的？</li>\n<li>你有用过哪些ts的高级类型？</li>\n<li>extends 和 implements 有什么区别？</li>\n<li>interface 和 type 到底有什么区别？</li>\n<li>Typescript 里有哪些 JavaScript 没有的类型？</li>\n</ul>\n<h3>TS笔试题</h3>\n<ol>\n<li>为什么会报错？如何解决</li>\n</ol>\n<pre><code>type User = {\n  id: number;\n  kind: string;\n};\n\nfunction makeCustomer<T extends User>(u: T): T {\n  // Error（TS 编译器版本：v4.4.2）\n  // Type '{ id: number; kind: string; }' is not assignable to type 'T'.\n  // '{ id: number; kind: string; }' is assignable to the constraint of type 'T', \n  // but 'T' could be instantiated with a different subtype of constraint 'User'.\n  return {\n    id: u.id,\n    kind: 'customer'\n  }\n}\n</code></pre>\n<p>参考</p>\n<pre><code>因为 T 只是约束与 User 类型，而不局限于User 类型，所以返回为T类型不仅仅只有 id和kind，So需要一个接收其他类型的变量\n解决方案：\n\ntype User = {\n  id: number;\n  kind: string;\n};\n\nfunction makeCustomer<T extends User>(u: T): T {\n  return {\n    ...u,\n    id: u.id,\n    kind: 'customer'\n  }\n}\n</code></pre>\n<ol start=\"2\">\n<li>我们希望参数 a 和 b 的类型都是一致的，即 a 和 b 同时为 number 或 string 类型。当它们的类型不一致的值，TS 类型检查器能自动提示对应的错误信息</li>\n</ol>\n<pre><code>function f(a: string | number, b: string | number) {\n  if (typeof a === 'string') {\n    return a + ':' + b; // no error but b can be number!\n  } else {\n    return a + b; // error as b can be number | string\n  }\n}\n\nf(2, 3); // Ok\nf(1, 'a'); // Error\nf('a', 2); // Error\nf('a', 'b') // Ok\n</code></pre>\n<p>参考</p>\n<pre><code>// 函数重载\nfunction f(a:number,b:number):number;\nfunction f(a:string,b:string):string;\n\nfunction f(a:number|string,b:number|string):number|string{\n    if(typeof a === 'string'){\n        return a+':'+b;\n    }else{\n        return (a as number) + (b as number);\n    }\n}\n</code></pre>\n<ol start=\"3\">\n<li>如何定义一个 SetOptional和SetRequired 工具类型，分别支持把给定的 keys 对应的属性变成可选的？和必填的。对应的使用示例如下所示：</li>\n</ol>\n<pre><code>type Foo = {\n\ta: number;\n\tb?: string;\n\tc: boolean;\n}\n\n// 测试用例\ntype SomeOptional = SetOptional<Foo, 'a' | 'b'>;\n\n// type SomeOptional = {\n// \ta?: number; // 该属性已变成可选的\n// \tb?: string; // 保持不变\n// \tc: boolean; \n// }\n\n// 测试用例\ntype SomeRequired = SetRequired<Foo, 'b' | 'c'>;\n// type SomeRequired = {\n// \ta: number;\n// \tb: string; // 该属性已变成必填\n// \tc: boolean; // 保持不变\n// }\n</code></pre>\n<h3>工具泛型的实现</h3>\n<pre><code class=\"language-ts\">// 实现Partial:将传入的属性变为可选项\ntype Partial<T>={ [P in keyof T]?:T[P] }\n// Required:将传入的属性变为必选项\ntype Required<T>={[P in keyof T]-?:T[P]}\n// Mutable:将 T 的所有属性的 readonly 移除\ntype Mutable<T>={-readonly [P in keyof T]:T[P]}\n//Readonly:将传入的属性变为只读选项\ntype Readonly<T>={readonly [P in keyof T]:T[P]}\n// Recorder:将 K 中所有的属性的值转化为 T 类型\ntype Recorder<K extends keyof any,T>={[P in K]:T}\n// Pick:从 T 中取出 一系列 K 的属性\ntype Pick<T,K extends keyof any>={[P in K]:T[P]}\n\n//Exclude: 条件语句\ntype Exclude<T,U>=T extends U ? never : T;\n// 例如， Exclude 的作用是从 T 中找出 U 中没有的元素, 换种更加贴近语义的说法其实就是从T 中排除 U\ntype T = Exclude<1|2,1|3> // 2\n\n// Extract的作用是提取出 T 包含在 U 中的元素, 换种更加贴近语义的说法就是从 T 中提取出 U\ntype Extract<T,U>=T extends U? T:never;\n\n// Omit: Pick 和 Exclude 进行组合, 实现忽略对象某些属性功能\ntype Omit<T,K>=Pick<T,Exclude<keyof T,K>>\n// 例如\ntype Foo = Omit<{name:string,age:number},'name'> // {age:number}\n\n// ReturnType:在条件类型语句中, 我们可以用 infer 声明一个类型变量并且对它进行使用,我们可以用它获取函数的返回类型\ntype ReturnType<T> = T extends(...args:any[])=>infer R?R:any;\n//infer R 就是声明一个变量来承载传入函数签名的返回值类型, 简单说就是用它取到函数返回值的类型方便之后使用.例如\nfunction foo(x:number):Array<number>{\n  return [x];\n}\ntype Foo = ReturnType<typeof foo>\n\n// AxiosReturnType:\n\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/CompVue0061.tsx":
/*!******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/CompVue0061.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>vue面试题</h1>\n<h3>vue</h3>\n<ul>\n<li>从0到1自己构架一个vue项目，说说有哪些步骤、哪些重要插件、目录结构你会怎么组织</li>\n<li>你知道vue的模板语法用的是哪个web模板引擎的吗？说说你对这模板引擎的理解</li>\n<li>你知道v-model的原理吗？说说看</li>\n<li>你有使用过vue开发多语言项目吗？说说你的做法？</li>\n<li>在使用计算属性的时，函数名和data数据源中的数据可以同名吗？</li>\n<li>vue中data的属性可以和methods中的方法同名吗？为什么？</li>\n<li>怎么给vue定义全局的方法？</li>\n<li>vue2.0不再支持v-html中使用过滤器了怎么办？</li>\n<li>怎么解决vue打包后静态资源图片失效的问题？</li>\n<li>怎么解决vue动态设置img的src不生效的问题？</li>\n<li>使用vue后怎么针对搜索引擎做SEO优化？</li>\n<li>跟keep-alive有关的生命周期是哪些？描述下这些生命周期</li>\n<li>如果现在让你从vue/react/angularjs三个中选择一个，你会选哪个？说说你的理由</li>\n<li>你知道vue2.0兼容IE哪个版本以上吗？</li>\n<li>使用vue开发一个todo小应用，谈下你的思路</li>\n<li>你有看过vue推荐的风格指南吗？列举出你知道的几条</li>\n<li>你是从vue哪个版本开始用的？你知道1.x和2.x有什么区别吗？</li>\n<li>你知道vue中key的原理吗？说说你对它的理解</li>\n<li>vue中怎么重置data？</li>\n<li>vue渲染模板时怎么保留模板中的HTML注释呢？</li>\n<li>Vue.observable你有了解过吗？说说看</li>\n<li>你知道style加scoped属性的用途和原理吗？</li>\n<li>你期待vue3.0有什么功能或者改进的地方？</li>\n<li>vue边界情况有哪些？</li>\n<li>如何在子组件中访问父组件的实例？</li>\n<li>watch的属性用箭头函数定义结果会怎么样？</li>\n<li>在vue项目中如果methods的方法用箭头函数定义结果会怎么样？</li>\n<li>在vue项目中如何配置favicon？</li>\n<li>你有使用过babel-polyfill模块吗？主要是用来做什么的？</li>\n<li>说说你对vue的错误处理的了解？</li>\n<li>在vue事件中传入$event，使用e.target和e.currentTarget有什么区别？</li>\n<li>在.vue文件中style是必须的吗？那script是必须的吗？为什么？</li>\n<li>vue怎么实现强制刷新组件？</li>\n<li>vue自定义事件中父组件怎么接收子组件的多个参数？</li>\n<li>实际工作中，你总结的vue最佳实践有哪些？</li>\n<li>vue给组件绑定自定义事件无效怎么解决？</li>\n<li>vue的属性名称与method的方法名称一样时会发生什么问题？</li>\n<li>vue变量名如果以_、$开头的属性会发生什么问题？怎么访问到它们的值？</li>\n<li>vue使用v-for遍历对象时，是按什么顺序遍历的？如何保证顺序？</li>\n<li>vue如果想扩展某个现有的组件时，怎么做呢？</li>\n<li>说下$attrs和$listeners的使用场景</li>\n<li>分析下vue项目本地开发完成后部署到服务器后报404是什么原因呢？</li>\n<li>v-once的使用场景有哪些？</li>\n<li>说说你对vue的表单修饰符.lazy的理解</li>\n<li>vue为什么要求组件模板只能有一个根元素？</li>\n<li>EventBus注册在全局上时，路由切换时会重复触发事件，如何解决呢？</li>\n<li>怎么修改vue打包后生成文件路径？</li>\n<li>你有使用做过vue与原生app交互吗？说说vue与ap交互的方法</li>\n<li>使用vue写一个tab切换</li>\n<li>vue中什么是递归组件？举个例子说明下？</li>\n<li>怎么访问到子组件的实例或者子元素？</li>\n<li>在子组件中怎么访问到父组件的实例？</li>\n<li>在组件中怎么访问到根实例？</li>\n<li>说说你对Object.defineProperty的理解</li>\n<li>vue组件里写的原生addEventListeners监听事件，要手动去销毁吗？为什么？</li>\n<li>vue组件里的定时器要怎么销毁？</li>\n<li>vue组件会在什么时候下被销毁？</li>\n<li>使用vue渲染大量数据时应该怎么优化？说下你的思路！</li>\n<li>在vue中使用this应该注意哪些问题？</li>\n<li>你有使用过JSX吗？说说你对JSX的理解</li>\n<li>说说组件的命名规范</li>\n<li>怎么配置使vue2.0+支持TypeScript写法？</li>\n<li><code><template></template></code>有什么用？</li>\n<li>vue的is这个特性你有用过吗？主要用在哪些方面？</li>\n<li>vue的:class和:style有几种表示方式？</li>\n<li>你了解什么是函数式组件吗？</li>\n<li>vue怎么改变插入模板的分隔符？</li>\n<li>组件中写name选项有什么作用？</li>\n<li>说说你对provide和inject的理解</li>\n<li>开发过程中有使用过devtools吗？</li>\n<li>说说你对slot的理解有多少？slot使用场景有哪些？</li>\n<li>你有使用过动态组件吗？说说你对它的理解</li>\n<li>prop验证的type类型有哪几种？</li>\n<li>prop是怎么做验证的？可以设置默认值吗？</li>\n<li>怎么缓存当前打开的路由组件，缓存后想更新当前组件怎么办呢？</li>\n<li>说说你对vue组件的设计原则的理解</li>\n<li>你了解vue的diff算法吗？</li>\n<li>vue如何优化首页的加载速度？</li>\n<li>vue打包成最终的文件有哪些？</li>\n<li>ajax、fetch、axios这三都有什么区别？</li>\n<li>vue能监听到数组变化的方法有哪些？为什么这些方法能监听到呢？</li>\n<li>vue中是如何使用event对象的？</li>\n<li>vue首页白屏是什么问题引起的？如何解决呢？</li>\n<li>说说你对单向数据流和双向数据流的理解</li>\n<li>移动端ui你用的是哪个ui库？有遇到过什么问题吗？</li>\n<li>你知道nextTick的原理吗？</li>\n<li>说说你对v-clock和v-pre指令的理解</li>\n<li>写出你知道的表单修饰符和事件修饰符</li>\n<li>说说你对proxy的理解</li>\n<li>你有自己用vue写过UI组件库吗？</li>\n<li>用vue怎么实现一个换肤的功能？</li>\n<li>有在vue中使用过echarts吗？踩过哪些坑？如何解决的？</li>\n<li>如果让你教一个2-3年经验前端经验的同事使用vue，你该怎么教？</li>\n<li>vue性能的优化的方法有哪些？</li>\n<li>SSR解决了什么问题？有做过SSR吗？你是怎么做的？</li>\n<li>说说你觉得认为的vue开发规范有哪些？</li>\n<li>vue部署上线前需要做哪些准备工作？</li>\n<li>vue过渡动画实现的方式有哪些？</li>\n<li>vue在created和mounted这两个生命周期中请求数据有什么区别呢？</li>\n<li>vue父子组件双向绑定的方法有哪些？</li>\n<li>vue怎么获取DOM节点？</li>\n<li>vue项目有做过单元测试吗？</li>\n<li>vue项目有使用过npm run build --report吗？</li>\n<li>如何解决vue打包vendor过大的问题？</li>\n<li>webpack打包vue速度太慢怎么办？</li>\n<li>vue在开发过程中要同时跟N个不同的后端人员联调接口（请求的url不一样）时你该怎么办？</li>\n<li>vue要做权限管理该怎么做？如果控制到按钮级别的权限怎么做？</li>\n<li>说下你的vue项目的目录结构，如果是大型项目你该怎么划分结构和划分组件呢？</li>\n<li>在移动端使用vue，你觉得最佳实践有哪些？</li>\n<li>你们项目为什么会选vue而不选择其它的框架呢？</li>\n<li>对于即将到来的vue3.0特性你有什么了解的吗？</li>\n<li>vue开发过程中你有使用什么辅助工具吗？</li>\n<li>vue和微信小程序写法上有什么区别？</li>\n<li>怎么缓存当前的组件？缓存后怎么更新？</li>\n<li>你了解什么是高阶组件吗？可否举个例子说明下？</li>\n<li>为什么我们写组件的时候可以写在.vue里呢？可以是别的文件名后缀吗？</li>\n<li>vue-loader是什么？它有什么作用？</li>\n<li>说说你对vue的extend（构造器）的理解，它主要是用来做什么的？</li>\n<li>如果将axios异步请求同步化处理？</li>\n<li>怎么捕获组件vue的错误信息？</li>\n<li>为什么vue使用异步更新组件？</li>\n<li>如何实现一个虚拟DOM？说说你的思路</li>\n<li>写出多种定义组件模板的方法</li>\n<li>SPA单页面的实现方式有哪些？</li>\n<li>说说你对SPA单页面的理解，它的优缺点分别是什么？</li>\n<li>说说你都用vue做过哪些类型的项目？</li>\n<li>在vue项目中如何引入第三方库（比如jQuery）？有哪些方法可以做到？</li>\n<li>使用vue手写一个过滤器</li>\n<li>你有使用过render函数吗？有什么好处？</li>\n<li>写出你常用的指令有哪些？</li>\n<li>手写一个自定义指令及写出如何调用</li>\n<li>组件进来请求接口时你是放在哪个生命周期？为什么？</li>\n<li>你有用过事件总线(EventBus)吗？说说你的理解</li>\n<li>说说vue的优缺点分别是什么？</li>\n<li>DOM渲染在哪个周期中就已经完成了？</li>\n<li>第一次加载页面时会触发哪几个钩子？</li>\n<li>vue生命周期总共有几个阶段？</li>\n<li>vue生命周期的作用是什么？</li>\n<li>vue和angular有什么区别呢？</li>\n<li>如何引入scss？引入后如何使用？</li>\n<li>使用vue开发过程你是怎么做接口管理的？</li>\n<li>为何官方推荐使用axios而不用vue-resource？</li>\n<li>你了解axios的原理吗？有看过它的源码吗？</li>\n<li>你有封装过axios吗？主要是封装哪方面的？</li>\n<li>如何中断axios的请求？</li>\n<li>axios是什么？怎样使用它？怎么解决跨域的问题？</li>\n<li>说说你对vue的template编译的理解？</li>\n<li>v-on可以绑定多个方法吗？</li>\n<li>vue常用的修饰符有哪些？列举并说明</li>\n<li>你认为vue的核心是什么？</li>\n<li>v-model是什么？有什么用呢？</li>\n<li>说说你对vue的mixin的理解，有什么应用场景？</li>\n<li>SPA首屏加载速度慢的怎么解决？</li>\n<li>删除数组用delete和Vue.delete有什么区别？</li>\n<li>动态给vue的data添加一个新的属性时会发生什么？怎样解决？</li>\n<li>组件和插件有什么区别？</li>\n<li>说说你使用vue过程中遇到的问题（坑）有哪些，你是怎么解决的？</li>\n<li>说说你对选项el,template,render的理解</li>\n<li>vue实例挂载的过程是什么？</li>\n<li>vue在组件中引入插件的方法有哪些？</li>\n<li>v-if和v-for的优先级是什么？如果这两个同时出现时，那应该怎么优化才能得到更好的性能？</li>\n<li>分别说说vue能监听到数组或对象变化的场景，还有哪些场景是监听不到的？无法监听时有什么解决方案？</li>\n<li>$nextTick有什么作用？</li>\n<li>为什么data属性必须声明为返回一个初始数据对应的函数呢？</li>\n<li>怎么在watch监听开始之后立即被调用？</li>\n<li>watch怎么深度监听对象变化？</li>\n<li>watch和计算属性有什么区别？</li>\n<li>vue如何监听键盘事件？</li>\n<li>v-for循环中key有什么作用？</li>\n<li>怎么在vue中使用插件？</li>\n<li>你有写过自定义组件吗？</li>\n<li>说说你对keep-alive的理解是什么？</li>\n<li>怎么使css样式只在当前组件中生效？</li>\n<li>你有看过vue的源码吗？如果有那就说说看</li>\n<li>你有写过自定义指令吗？自定义指令的生命周期（钩子函数）有哪些？</li>\n<li>v-show和v-if有什么区别？使用场景分别是什么？</li>\n<li>说说你对MVC、MVP、MVVM模式的理解</li>\n<li>说下你对指令的理解？</li>\n<li>请描述下vue的生命周期是什么？</li>\n<li>vue组件之间的通信都有哪些？</li>\n<li>什么是虚拟DOM？</li>\n<li>什么是双向绑定？原理是什么？</li>\n<li>vue和react有什么不同？使用场景是什么？</li>\n<li>说说vue的优缺点</li>\n<li>有使用过vue吗？说说你对vue的理解</li>\n</ul>\n<h3>vue-cli</h3>\n<ul>\n<li>vue-cli提供了的哪几种脚手架模板？</li>\n<li>vue-cli工程中常用的npm命令有哪些？</li>\n<li>在使用vue-cli开发vue项目时，自动刷新页面的原理你了解吗？</li>\n<li>vue-cli3插件有写过吗？怎么写一个代码生成插件？</li>\n<li>vue-cli生成的项目可以使用es6、es7的语法吗？为什么？</li>\n<li>vue-cli怎么解决跨域的问题？</li>\n<li>vue-cli中你经常的加载器有哪些？</li>\n<li>你知道什么是脚手架吗？</li>\n<li>说下你了解的vue-cli原理？你可以自己实现个类vue-cli吗？</li>\n<li>怎么使用vue-cli3创建一个项目？</li>\n<li>vue-cli3你有使用过吗？它和2.x版本有什么区别？</li>\n<li>vue-cli默认是单页面的，那要弄成多页面该怎么办呢？</li>\n<li>不用vue-cli，你自己有搭建过vue的开发环境吗？流程是什么？</li>\n</ul>\n<h3>vue-router</h3>\n<ul>\n<li>vue-router怎么重定向页面？</li>\n<li>vue-router怎么配置404页面？</li>\n<li>切换路由时，需要保存草稿的功能，怎么实现呢？</li>\n<li>vue-router路由有几种模式？说说它们的区别？</li>\n<li>vue-router有哪几种导航钩子（ 导航守卫 ）？</li>\n<li>说说你对router-link的了解</li>\n<li>vue-router如何响应路由参数的变化？</li>\n<li>你有看过vue-router的源码吗？说说看</li>\n<li>切换到新路由时，页面要滚动到顶部或保持原先的滚动位置怎么做呢？</li>\n<li>在什么场景下会用到嵌套路由？</li>\n<li>如何获取路由传过来的参数？</li>\n<li>说说active-class是哪个组件的属性？</li>\n<li>在vue组件中怎么获取到当前的路由信息？</li>\n<li>vur-router怎么重定向？</li>\n<li>怎样动态加载路由？</li>\n<li>怎么实现路由懒加载呢？</li>\n<li>如果让你从零开始写一个vue路由，说说你的思路</li>\n<li>说说vue-router完整的导航解析流程是什么？</li>\n<li>路由之间是怎么跳转的？有哪些方式？</li>\n<li>如果vue-router使用history模式，部署时要注意什么？</li>\n<li>route和router有什么区别？</li>\n<li>vue-router钩子函数有哪些？都有哪些参数？</li>\n<li>vue-router是用来做什么的？它有哪些组件？</li>\n</ul>\n<h3>vuex</h3>\n<ul>\n<li>你有写过vuex中store的插件吗？</li>\n<li>你有使用过vuex的module吗？主要是在什么场景下使用？</li>\n<li>vuex中actions和mutations有什么区别？</li>\n<li>vuex使用actions时不支持多参数传递怎么办？</li>\n<li>你觉得vuex有什么缺点？</li>\n<li>你觉得要是不用vuex的话会带来哪些问题？</li>\n<li>vuex怎么知道state是通过mutation修改还是外部直接修改的？</li>\n<li>请求数据是写在组件的methods中还是在vuex的action中？</li>\n<li>怎么监听vuex数据的变化？</li>\n<li>vuex的action和mutation的特性是什么？有什么区别？</li>\n<li>页面刷新后vuex的state数据丢失怎么解决？</li>\n<li>vuex的state、getter、mutation、action、module特性分别是什么？</li>\n<li>vuex的store有几个属性值？分别讲讲它们的作用是什么？</li>\n<li>你理解的vuex是什么呢？哪些场景会用到？不用会有问题吗？有哪些特性？</li>\n<li>使用vuex的优势是什么？</li>\n<li>有用过vuex吗？它主要解决的是什么问题？推荐在哪些场景用？</li>\n</ul>\n<h3>ElementUI</h3>\n<ul>\n<li>ElementUI是怎么做表单验证的？在循环里对每个input验证怎么做呢？</li>\n<li>你有二次封装过ElementUI组件吗？</li>\n<li>ElementUI怎么修改组件的默认样式？</li>\n<li>ElementUI的穿梭组件如果数据量大会变卡怎么解决不卡的问题呢？</li>\n<li>ElementUI表格组件如何实现动态表头？</li>\n<li>ElementUI使用表格组件时有遇到过问题吗？</li>\n<li>有阅读过ElementUI的源码吗？</li>\n<li>项目中有使用过ElementUI吗？有遇到过哪些问题？它的使用场景主要是哪些？</li>\n<li>有用过哪些vue的ui？说说它们的优缺点？</li>\n</ul>\n<h3>mint-ui</h3>\n<ul>\n<li>mint-ui使用过程中有没有遇到什么坑？怎么解决的？</li>\n<li>说出几个mint-ui常用的组件</li>\n<li>mint-ui是什么？你有使用过吗？</li>\n</ul>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/CompWebpack0062.tsx":
/*!**********************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/CompWebpack0062.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>工程化题目汇总</h1>\n<ul>\n<li>说下webpack的loader和plugin的区别，都使用过哪些 loader 和 plugin</li>\n<li>介绍下 webpack，并说下Webpack的构建流程</li>\n<li>说下tree-shaking的原理</li>\n<li>讲一下webpack原理，loader和plugin，你知道哪些模块化标准，说下cjs和esmodule的区别</li>\n<li>Import 和 CommonJS 在 webpack 打包过程中有什么不同</li>\n<li>说一下webpack中css-loader和 style-loader 的区别，file-loader 和 url-loader 的区别</li>\n<li>脚手架具体都做了哪些事，webpack 具体做了什么配置，怎样优化的打包大小</li>\n<li>介绍下 Webpack 的整个生命周期</li>\n<li>webpack 离线缓存静态资源如何做用localStore</li>\n<li>说一下 webpack 与 gulp 的区别（源码角度）</li>\n<li>A、B 两个条件组件，如何做到 webpack 只打包条件为true的组件，false的组件不打包</li>\n<li>webpack怎么处理内联css的</li>\n<li>webpack如何做异步加载</li>\n<li>Webpack里面的插件是怎么实现的</li>\n<li>dev-server是怎么跑起来的</li>\n<li>Webpack抽取公共文件是怎么配置的</li>\n<li>import { Button } from 'antd'，打包的时候只打包 button，分模块加载，是怎么做到的</li>\n<li>使用import时，webpack对node_modules里的依赖会做什么</li>\n<li>前端怎么做单元测试</li>\n<li>Webpack一般怎么组织CSS</li>\n<li>webpack如何配sass，需要配哪些loader，配css需要哪些loader</li>\n<li>如何配置把js、css、html单独打包成一个文件</li>\n<li>webpack和gulp的优缺点</li>\n<li>如何实现分模块打包（多入口）</li>\n<li>Webpack打包时Hash码是怎么生成的？随机值存在一样的情况，如何避免？</li>\n<li>Webpack做了什么？使用webpack构建时有无做一些自定义操作？</li>\n<li>为什么用gulp打包node</li>\n<li>Webpack为什么慢，如何进行优化</li>\n<li>git pull -rebase 和 git pull 的区别是什么？</li>\n<li>Webpack打包出来的体积太大，如何优化体积？</li>\n<li>Webpack热更新的原理</li>\n<li>一个活动项目里包含多个活动，Webpack 如何实现单独打包某个活动？</li>\n<li>请说明JavaScript进行压缩、合并、打包实现的原理是什么？为什么需要压缩、合并、打包？分别列出一种常用工具或插件</li>\n<li>请说出前端框架设计模式(MVVM 或 MVP 又或 MVC)的含义以及原理</li>\n<li>开发环境热更新的优化方式</li>\n<li>AMD和CMD有哪些区别？</li>\n<li>你是怎么配置开发环境的？</li>\n<li>如何实现webpack持久化缓存</li>\n<li>webpack做过哪些优化，开发效率方面、打包策略方面等等</li>\n<li>在webpack的构建过程中，compiler和compilation的作用是什么？</li>\n<li>请问如何优化webpack的打包速度？</li>\n<li>请讲讲在webpack中有哪些常见的loader和Plugin？</li>\n<li>webpack和Turbopack有什么区别？</li>\n<li>谈谈你对组件库的打包的理解</li>\n<li>如何减少Webpack的打包体积？</li>\n<li>如何提高webpack的构建速度？</li>\n<li>webpack的构建流程是怎样的？</li>\n<li>如何选择是使用webpack还是rollup？</li>\n<li>webpack的loader和plugin的区别是什么？</li>\n<li>你有自己写过loader（加载器）或插件吗？</li>\n<li>说说你认为webpack的核心功能是什么？</li>\n<li>webpack中的resolve.modules和resolve.alias有什么区别？</li>\n<li>webpack如何解析代码路径的？</li>\n<li>在什么情况下选择webpack？在什么情况下选择rollup？</li>\n<li>webpack是如何处理模块化的？</li>\n<li>webpack的核心思想是什么？</li>\n<li>webpack和rollup有什么区别？</li>\n<li>webpack有gulp有什么区别？</li>\n<li>webpack有什么优劣势？</li>\n<li>你有用过webpack吗？</li>\n<li>Webpack 如果使用了 hash 命名，是否每次都会重新生成 hash?简单说下 Webpack 的几种 hash 策略？</li>\n<li>import { Button } from 'antd'，打包的时候只打包 button，分模块加载，是怎么做到的</li>\n</ul>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Compdevserver工作原理0020.tsx":
/*!****************************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Compdevserver工作原理0020.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>webpack-dev-server</h1>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comphr面试题0063.tsx":
/*!********************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comphr面试题0063.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<ul>\n<li>你最大的优点是什么？</li>\n</ul>\n<pre><code>面试官关注的点：第一，申请人没有撒谎，而是真实地阐述了自己的优点。第二，他所阐述的优点，恰好是这个职位所需要的素质\n\n关键词：如实阐述，合乎逻辑，与职位相匹配\n\n例如动手能力强、擅长合理地安排时间、比较有条理、做事很有计划性、持之以恒等\n</code></pre>\n<ul>\n<li>你最大的缺点是什么？</li>\n</ul>\n<pre><code>面试官关注的点：第一，自我认知，理想的候选人不会否认自己有弱点，但是他们选择的缺点也不会影响到相关工作职责；第二，诚实，理想的候选人不应该因为自己的缺点而说谎，你应该选择一个真正的缺点，并讨论这个缺点具体是什么；第三，自我提升，回答中应该包括有关学习技能或改善弱点的步骤的详细信息\n\n例如对不擅长的评估项目所需的时间，经常低估项目所需要的时间，急着把事情做好，有时错过最后期限。\n</code></pre>\n<ul>\n<li>你对加班的看法？</li>\n</ul>\n<pre><code>面试官关注的点：第一：求职者的心态是否积极，价值观是否与公司契合；第二，员工的诚实度，以及情商，表达真实想法\n</code></pre>\n<ul>\n<li>说一说你的职业规划是怎样的？</li>\n</ul>\n<pre><code>个人性格：性格、兴趣、职业价值观。即我想做什么\n\n商业价值：具备知识、技能、经历、人脉。即我能做什么\n\n外在环境：宏观产业、组织、家庭。即环境支持我做什么\n</code></pre>\n<ul>\n<li>\n<p>你朋友对你的评价</p>\n</li>\n<li>\n<p>如果通过这次面试我们单位录用了你，但工作一段时间却发现你根本不适合这个职位，你怎么办？</p>\n</li>\n<li>\n<p>在完成某项工作时，你认为领导要求的方式不是最好的，自己还有更好的方法，你应该怎么做</p>\n</li>\n<li>\n<p>如果你工作失误给本公司造成经济损失，你认为该怎么办</p>\n</li>\n<li>\n<p>如果你做的一项工作受到上级领导的表扬，但你主管领导却说是他做的，你该怎样</p>\n</li>\n<li>\n<p>谈谈你对跳槽的看法</p>\n</li>\n<li>\n<p>工作中难以和同事、领导相处，你该怎么办？</p>\n</li>\n<li>\n<p>假设你在某单位，得到领导的肯定，但你发现同事们越来越孤立你，你怎么看这个问题？你准备怎么办？</p>\n</li>\n<li>\n<p>你是否参加了培训课程？谈谈培训课程的内容？是公司资助还是自费参加？</p>\n</li>\n<li>\n<p>你对于我们公司了解多少？</p>\n</li>\n<li>\n<p>你最擅长的技术方向</p>\n</li>\n<li>\n<p>你能为我们公司带来什么？</p>\n</li>\n</ul>\n<pre><code>1. 告诉面试官你有系统化的知识体系和擅长点\n2. 能快速上手，减少公司人才培训成本\n3. 根据我目前所掌握XX领域的系统化和体系化的知识，我在工作之余可以为公司人才培训做一些事情，可以降低企业在人才培训上的开支\n</code></pre>\n<ul>\n<li>\n<p>最能概括你自己的三个词？</p>\n</li>\n<li>\n<p>你的业余爱好是什么？</p>\n</li>\n<li>\n<p>作为被面试者给我打一下分？</p>\n</li>\n<li>\n<p>你怎么理解你应聘的职位？</p>\n</li>\n<li>\n<p>喜欢这份工作的哪一点？</p>\n</li>\n<li>\n<p>为什么要离职？</p>\n</li>\n<li>\n<p>说说你对行业、技术发展趋势的看法</p>\n</li>\n<li>\n<p>对工作的期望和目标何在？</p>\n</li>\n<li>\n<p>说你的家庭？</p>\n</li>\n<li>\n<p>就你申请的这个职位，你认为你还欠缺什么？</p>\n</li>\n<li>\n<p>你欣赏哪种性格的人？</p>\n</li>\n<li>\n<p>你通常如何处理别人的批评？</p>\n</li>\n<li>\n<p>怎么面对自己的失败？</p>\n</li>\n<li>\n<p>眼下生活中最重要的是什么？</p>\n</li>\n<li>\n<p>你为什么愿意到我们公司来工作？</p>\n</li>\n<li>\n<p>你和别人发生过争执吗？你是怎么样解决的？</p>\n</li>\n<li>\n<p>你做过哪件事让自己感到骄傲？</p>\n</li>\n<li>\n<p>对这项工作，你有哪些可预见的困难</p>\n</li>\n<li>\n<p>如果我录用你，你将怎样开展工作</p>\n</li>\n</ul>\n<pre><code>1. 熟悉公司的组织架构、工作中的上下游和团队分工，梳理清楚自己的工作职责，\n2. 熟悉工作项目的流程，明确阶段性工作目标\n3. 积极主动去和上级建立信用关系\n</code></pre>\n<ul>\n<li>\n<p>你希望与什么样的上级共事</p>\n</li>\n<li>\n<p>与上级意见不一致该怎么办</p>\n</li>\n<li>\n<p>你工作经验欠缺，如何能胜任这份工作</p>\n</li>\n<li>\n<p>你在前一家公司的离职原因？</p>\n</li>\n<li>\n<p>如果你在这次面试中没有被录用，你怎么打算？</p>\n</li>\n<li>\n<p>谈谈过去你做过的成功案例</p>\n</li>\n<li>\n<p>谈谈你过去的工作经验中，最令你挫折的事情？</p>\n</li>\n<li>\n<p>如何安排自己的时间，会不会排斥加班？</p>\n</li>\n<li>\n<p>为什么我们要在众多的面试者中选择你？</p>\n</li>\n<li>\n<p>这个职务的期许</p>\n</li>\n<li>\n<p>谈谈如何适应办公室工作的环境？</p>\n</li>\n<li>\n<p>工作中学到了些什么</p>\n</li>\n</ul>\n<pre><code>1.技能提升，比如排查错误的能力、协调沟通的能力、代码管理能力、模块组件设计能力\n2.\n\n</code></pre>\n<ul>\n<li>\n<p>想过创业吗？</p>\n</li>\n<li>\n<p>除本公司外还应聘了哪些公司</p>\n</li>\n<li>\n<p>何时可以到职</p>\n</li>\n<li>\n<p>你并非毕业于名牌院校</p>\n</li>\n<li>\n<p>怎样看待学历和能力</p>\n</li>\n<li>\n<p>你对前端职级如何理解和区分的？高级、中级和初级</p>\n</li>\n<li>\n<p>你觉得你能技术能力怎么样</p>\n</li>\n<li>\n<p>在公司待了这么久，你有哪些成长和收获？</p>\n</li>\n</ul>\n<pre><code>关键词：\n专业知识：基础扎实，做事专业\n解决问题的能力：经验可以被复制，能力可以被迁移，如何使用工具解决问题\n工作习惯：及时总结提炼梳理，系统构建自己的知识体系\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Compjs发展历史0002.tsx":
/*!*********************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Compjs发展历史0002.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>JS发展历史</h1>\n<p>es5</p>\n<p>es6</p>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Compkoa0011.tsx":
/*!******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Compkoa0011.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<p>使用koa写一个http服务器</p>\n<pre><code class=\"language-js\">const Koa = require('koa');\nconst route = require('koa-route');\nconst serve = require('koa-static');\nconst path = require('path');\n\nconst app = new Koa();\nconst home = serve(path.join(__dirname), '/public/');\n\nconst res = ctx => {\n  ctx.response.body = '<h1>hello Koa</h1>';\n}\n\napp.use(home);\napp.use(route.get('/', res));\n\napp.listen(3000);\n</code></pre>\n<h3>koa与洋葱模型</h3>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comppromise0033.tsx":
/*!**********************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comppromise0033.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h2>promise</h2>\n<ul>\n<li>手写promise，包括then，catch和finally</li>\n</ul>\n<pre><code class=\"language-js\">const PENDING = &quot;pending&quot;; \nconst FULFILLED = &quot;fulfilled&quot;; \nconst REJECTED = &quot;rejected&quot;;\nconst resolvePromise = (promise, x, resolve, reject) => {\n  if (x === promise) {\n    // If promise and x refer to the same object, reject promise with a TypeError as the reason.\n    reject(new TypeError('循环引用'))\n  }\n  // if x is an object or function,\n  if (x !== null &amp;&amp; typeof x === 'object' || typeof x === 'function') {\n    // If both resolvePromise and rejectPromise are called, or multiple calls to the same argument are made, the first call takes precedence, and any further calls are ignored.\n    let called\n    try { // If retrieving the property x.then results in a thrown exception e, reject promise with e as the reason.\n      let then = x.then // Let then be x.then\n      // If then is a function, call it with x as this\n      if (typeof then === 'function') {\n        // If/when resolvePromise is called with a value y, run [[Resolve]](promise, y)\n        // If/when rejectPromise is called with a reason r, reject promise with r.\n        then.call(x, y => {\n          if (called) return\n          called = true\n          resolvePromise(promise, y, resolve, reject)\n        }, r => {\n          if (called) return\n          called = true\n          reject(r)\n        })\n      } else {\n        // If then is not a function, fulfill promise with x.\n        resolve(x)\n      }\n    } catch (e) {\n      if (called) return\n      called = true\n      reject(e)\n    }\n  } else {\n    // If x is not an object or function, fulfill promise with x\n    resolve(x)\n  }\n}\nfunction Promise(excutor) {\n  let that = this; // 缓存当前promise实例例对象\n  that.status = PENDING; // 初始状态\n  that.value = undefined; // fulfilled状态时 返回的信息\n  that.reason = undefined; // rejected状态时 拒绝的原因 \n  that.onFulfilledCallbacks = []; // 存储fulfilled状态对应的onFulfilled函数\n  that.onRejectedCallbacks = []; // 存储rejected状态对应的onRejected函数\n  function resolve(value) { // value成功态时接收的终值\n    if(value instanceof Promise) {\n      return value.then(resolve, reject);\n    }\n    // 实践中要确保 onFulfilled 和 onRejected ⽅方法异步执⾏行行，且应该在 then ⽅方法被调⽤用的那⼀一轮事件循环之后的新执⾏行行栈中执⾏行行。\n    setTimeout(() => {\n      // 调⽤用resolve 回调对应onFulfilled函数\n      if (that.status === PENDING) {\n        // 只能由pending状态 => fulfilled状态 (避免调⽤用多次resolve reject)\n        that.status = FULFILLED;\n        that.value = value;\n        that.onFulfilledCallbacks.forEach(cb => cb(that.value));\n      }\n    });\n  }\n  function reject(reason) { // reason失败态时接收的拒因\n    setTimeout(() => {\n      // 调⽤用reject 回调对应onRejected函数\n      if (that.status === PENDING) {\n        // 只能由pending状态 => rejected状态 (避免调⽤用多次resolve reject)\n        that.status = REJECTED;\n        that.reason = reason;\n        that.onRejectedCallbacks.forEach(cb => cb(that.reason));\n      }\n    });\n  }\n\n  // 捕获在excutor执⾏行行器器中抛出的异常\n  // new Promise((resolve, reject) => {\n  //     throw new Error('error in excutor')\n  // })\n  try {\n    excutor(resolve, reject);\n  } catch (e) {\n    reject(e);\n  }\n}\nPromise.prototype.then = function(onFulfilled, onRejected) {\n  const that = this;\n  let newPromise;\n  // 处理理参数默认值 保证参数后续能够继续执⾏行行\n  onFulfilled = typeof onFulfilled === &quot;function&quot; ? onFulfilled : value => value;\n  onRejected = typeof onRejected === &quot;function&quot; ? onRejected : reason => {\n    throw reason;\n  };\n  if (that.status === FULFILLED) { // 成功态\n    return newPromise = new Promise((resolve, reject) => {\n      setTimeout(() => {\n        try{\n          let x = onFulfilled(that.value);\n          resolvePromise(newPromise, x, resolve, reject); //新的promise resolve 上⼀一个onFulfilled的返回值\n        } catch(e) {\n          reject(e); // 捕获前⾯面onFulfilled中抛出的异常then(onFulfilled, onRejected);\n        }\n      });\n    })\n  }\n  if (that.status === REJECTED) { // 失败态\n    return newPromise = new Promise((resolve, reject) => {\n      setTimeout(() => {\n        try {\n          let x = onRejected(that.reason);\n          resolvePromise(newPromise, x, resolve, reject);\n        } catch(e) {\n          reject(e);\n        }\n      });\n    });\n  }\n  if (that.status === PENDING) { // 等待态\n// 当异步调⽤用resolve/rejected时 将onFulfilled/onRejected收集暂存到集合中\n    return newPromise = new Promise((resolve, reject) => {\n      that.onFulfilledCallbacks.push((value) => {\n        try {\n          let x = onFulfilled(value);\n          resolvePromise(newPromise, x, resolve, reject);\n        } catch(e) {\n          reject(e);\n        }\n      });\n      that.onRejectedCallbacks.push((reason) => {\n        try {\n          let x = onRejected(reason);\n          resolvePromise(newPromise, x, resolve, reject);\n        } catch(e) {\n          reject(e);\n        }\n      });\n    });\n  }\n};\n</code></pre>\n<ul>\n<li>手写promise的all、race、allSettled</li>\n</ul>\n<pre><code class=\"language-js\">const all = (arr) => {\n  return new Promise((resolve,reject)=>{\n    const ret = [];\n    let count = 0;\n    for(let i=0;i<arr.length;i++){\n      arr[i].then(res=>{\n        ret[i] = res;\n        count++;\n        if(count === arr.length) {\n          resolve(ret);\n        }\n      }).catch(reject)\n    }\n  })\n}\nconst race = (arr) => {\n  return new Promise((resolve,reject)=>{\n    for(let i = 0;i<arr.length;i++){\n      arr[i].then(resolve).catch(reject);\n    }\n  })\n}\nconst allSettled = (arr)=>{\n  return new Promise((resolve,reject)=>{\n    const ret = [];\n    let count = 0;\n    for(let i=0;i<arr.length;i++){\n      arr[i].then(res=>{\n        ret[i] = res;\n      }).catch(err=>{\n        ret[i]=err;\n      }).finally(()=>{\n        count++;\n        if(count === arr.length) {\n          resolve(ret);\n        }\n      })\n    }\n  })\n}\n</code></pre>\n<ul>\n<li>手写promise的并发（limit）</li>\n</ul>\n<pre><code class=\"language-js\">\nconst request = (msg,delay)=>new Promise(resolve=>setTimeout(()=>resolve(msg),delay));\n\nconst arr = [\n  ()=>request(1,2000),\n  ()=>request(2,1000),\n  ()=>request(3,6000),\n  ()=>request(4,5000),\n  ()=>request(5,4000),\n]\n\nconst limitPromise = (arr,max)=>{\n  const pool = [];\n  const wait = [];\n\n  const run = (task)=>{\n    task().then(res=>{\n      const next = wait.shift();\n      console.log(res);\n      if(next) run(next);\n    })\n  }\n  for(let i =0;i<arr.length;i++){\n    const item = arr[i]\n    if(i<max){\n      run(item)\n    }else{\n      wait.push(arr[i]);\n    }\n  }\n}\n\nlimitPromise(arr,2);\n</code></pre>\n<ul>\n<li>手写promise重试（retry）</li>\n</ul>\n<pre><code class=\"language-js\">\n// 重试\nconst myPromiseRetry = (promise,times)=>{\n  return new Promise((resolve,reject)=>{\n    const fn = promise().then(res=>{\n      resolve(res);\n    }).catch(err=>{\n      if(times>0){\n        times--;\n        fn();\n      }else{\n        console.error('重试次数使用完毕');\n        reject(err);\n      }\n    })\n    fn();\n  })\n}\n</code></pre>\n<ul>\n<li>手写promise超时（timeout）</li>\n</ul>\n<pre><code class=\"language-js\">// 超时\nconst promiseTimeout = (promise,delay)=>{\n  return Promise.race([promise,new Promise(resolve=>{\n    setTimeout(()=>resolve(),delay)\n  })])\n}\n</code></pre>\n<ul>\n<li>用 Promise 封装一个 ajax</li>\n<li>按要求完成 mergePromise 代码</li>\n</ul>\n<pre><code class=\"language-js\">const timeout = (ms) =>\n  new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve();\n    }, ms);\n  });\nconst ajax1 = () =>\n  timeout(2000).then(() => {\n    console.log(&quot;1&quot;);\n    return 1;\n  });\nconst ajax2 = () =>\n  timeout(1000).then(() => {\n    console.log(&quot;2&quot;);\n    return 2;\n  });\nconst ajax3 = () =>\n  timeout(2000).then(() => {\n    console.log(&quot;3&quot;);\n    return 3;\n  });\nconst mergePromise = (ajaxArray) => {\n  // 1,2,3 done [1,2,3] 此处写代码 请写出ES6、ES3 2中解法\n};\nmergePromise([ajax1, ajax2, ajax3]).then((data) => {\n  console.log(&quot;done&quot;);\n  console.log(data); // data 为[1,2,3]\n});\n// 执行结果为：1 2 3 done [1,2,3]\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Compthis0003.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Compthis0003.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>this</h1>\n<h3>关键词</h3>\n<ul>\n<li>TC39</li>\n</ul>\n<h3>执行上下文对象</h3>\n<p>指向函数执行时所在的上下文对象，箭头函数（表达式）除外，它直接指向函数定义时所在的上下文对象。</p>\n<p>普通对象（无论多少层级）、普通函数调用，this指向全局</p>\n<pre><code class=\"language-js\">const obj = {a:this}\nobj.a // window\n\nconst fn = function (){ return this }\nfn() // window\n</code></pre>\n<h3>this指向的4种情况</h3>\n<ol>\n<li>普通函数调用</li>\n<li>对象方法调用</li>\n<li>new 构造函数</li>\n<li>call、apply和bind</li>\n</ol>\n<h3>对象方法调用</h3>\n<pre><code class=\"language-js\">var x = 1;\n\nvar obj = {\n  x: 3,\n  fun: function () {\n    var x = 5;\n    return this.x;\n  }\n};\n\nvar fun = obj.fun;\nconsole.log(obj.fun(), fun());\n</code></pre>\n<pre><code class=\"language-js\">var obj = {\n  name: &quot;zhangsan&quot;,\n  sayName: function () {\n    console.info(this.name);\n  }\n}\n\nvar wfunc = obj.sayName;\nobj.sayName();\nwfunc();\nvar name = &quot;lisi&quot;;\nobj.sayName();\nwfunc();\n</code></pre>\n<pre><code class=\"language-js\">var name = 'test'\nvar a = {\n  name: 'ass',\n  getName: function () {\n    return this.name;\n  }\n}\nvar b = a.getName;\nb();\n</code></pre>\n<h3>构造函数调用（new）</h3>\n<pre><code class=\"language-js\">var a = 5;\nfunction test () {\n  a = 0;\n  console.log(a);\n  console.log(this.a);\n  var a;\n  console.log(a);\n}\nnew test();\n</code></pre>\n<pre><code class=\"language-js\">const Person = (name = &quot;wang&quot;, age = 10) => {\n  this.name = name;\n  this.age = age;\n  return this.name + ' is ' + this.age + 'years old'\n}\nlet result = new Person('zhang', 11)\nconsole.log(result)\n</code></pre>\n<pre><code class=\"language-js\">var person = {\n  age: 18,\n  getAge: function () {\n    return this.age;\n  }\n};\nvar getAge = person.getAge\ngetAge()\n</code></pre>\n<h3>call调用</h3>\n<pre><code class=\"language-js\">function fun () {\n  return () => {\n    return () => {\n      return () => {\n        console.log(this.name)\n      }\n    }\n  }\n}\nvar f = fun.call({ name: 'foo' })\nvar t1 = f.call({ name: 'bar' })()()\nvar t2 = f().call({ name: 'baz' })()\nvar t3 = f()().call({ name: 'qux' })\n</code></pre>\n<h3>箭头函数调用</h3>\n<pre><code class=\"language-js\">let obj1 = {\n  a: 1,\n  foo: () => {\n    console.log(this.a)\n  }\n}\nobj1.foo()\nconst obj2 = obj1.foo\nobj2()\n</code></pre>\n<h3>异步回调</h3>\n<pre><code class=\"language-js\">var name = 'global';\n\nvar obj = {\n  name: 'local',\n  foo: function () {\n    this.name = 'foo';\n  }.bind(window)\n};\n\nvar bar = new obj.foo();\nsetTimeout(function () {\n  console.log(window.name);\n}, 0);\nconsole.log(bar.name);\n\nvar bar3 = bar2 = bar;\nbar2.name = 'foo2';\nconsole.log(bar3.name);\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Compts常用知识0017.tsx":
/*!*********************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Compts常用知识0017.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: ""
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Compts理解0018.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Compts理解0018.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<p>动态语言在程序运行的时候才知道变量的类型，在代码运行期间可能会发生与类型相关的错误，为了尽可能的避免这样的问题发生，于是有了Typescript。</p>\n<p>ts优点</p>\n<ol>\n<li>代码的规范约束：主要在于约束，能更准确的表达出写代码人的意图</li>\n<li>代码可阅读性：一般来说命名+输入输出的类型定义可以大致猜测出某段代码的用途，我们都知道js类型隐式转换非常恶心，如果加上类型约束，那么阅读门槛将会降低一个档次。</li>\n</ol>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comptypescript0035.tsx":
/*!*************************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comptypescript0035.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<ul>\n<li>用 typescript 实现函数 caller，接收一个函数作为第一个参数，其返回参数类型由接收的函数参数决定</li>\n</ul>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Compwebpack工作原理0021.tsx":
/*!**************************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Compwebpack工作原理0021.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>webpack工作原理</h1>\n<p>webpack是一个js模块打包工具，通过js模块之间导入导出的依赖关系，构建依赖网络、静态分析来打包合并。其基本原理：</p>\n<pre><code>1. 获取参数，根据参数初始化编译器（compiler）\n2. 根据entry配置找到入口文件\n3. 编译，调用所有配置的loader对文件进行转化，递归，最终得到处理后的内容和他们的依赖关系\n4. 根据配置输出路径和文件名，将内容写入文件\n</code></pre>\n<h3>工程化历史</h3>\n<p>fis\nbrowserify+Gulp（基本文件流操作）</p>\n<h3>webpack作用（解决了什么问题/产生了什么影响/核心的几个版本迭代）</h3>\n<p>webpack专注于js模块打包，</p>\n<h3>webpack特点（独特之处和不足之处）</h3>\n<p>webpack最核心的部分就是通过js模块之间依赖来打包目标文件，并且通过loader体系支持不同的模块，插件体系扩展额外功能。</p>\n<p>webpack是基于前端模块化的并且js模块之间具有充分的依赖关系</p>\n<h3>webpack如何应对新起的工具</h3>\n<p>rollup\nvite</p>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp事件循环0004.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp事件循环0004.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h3>关键词</h3>\n<ul>\n<li>Promise A+（https://promisesaplus.com/）</li>\n</ul>\n<h2>事件循环</h2>\n<p>异步任务执行规则，先对异步任务进行分类，然后按照优先级执行。\n宏任务在下一次事件循环开始执行，微任务在本次事件循环执行完成，\n识别宏任务->宏任务触发存入事件触发线程->微任务入队->js引擎执行所有微任务->gui渲染线程开始渲染页面->js引擎执行宏任务</p>\n<h2>promise</h2>\n<p>回调函数完成异步操作，有诸多缺点</p>\n<ul>\n<li>混乱：回调函数没有明确的调用时机，边界模糊，任何时候任何地点都可以调用</li>\n<li>不统一的：自定义成功/失败回调</li>\n<li>嵌套：回调函数的嵌套地狱，加剧混乱</li>\n</ul>\n<p>promise的重要意义是完成了异步操作趋于统一化、规范化、流程化的管理</p>\n<ul>\n<li>统一：任务状态，pending->fulfilled或者pending->reject</li>\n<li>规范：then成功，catch失败</li>\n<li>流程：链式调用,并且链式完整的，不会中途中断。</li>\n</ul>\n<p>promise特点：</p>\n<ul>\n<li>\n<p>回调函数作用域指向全局的，包括then的回调</p>\n</li>\n<li>\n<p>链式调用:then、catch、finally串联操作</p>\n</li>\n<li>\n<p>then可以无限调用，前一个then的return值会传递到下一个then里。</p>\n</li>\n<li>\n<p>catch和finally只有一次调用生效，但是不会阻塞链式传递，后面仍然可以catch、then</p>\n</li>\n</ul>\n<h3>关于thenable对象，先执行then方法，并且resolve可以透传参数</h3>\n<pre><code class=\"language-js\">const thenable = {\n  then (resolve, reject) {\n    console.log('then');\n    resolve(1)\n  }\n}\nPromise.resolve(thenable)\nPromise.resolve(thenable).then(res => console.log(res))\n</code></pre>\n<h2>async...await</h2>\n<p>await的意义是将promise链式调用执行异步任务转化为同步代码块执行异步任务，贴合代码顺序执行\nawait执行规则</p>\n<pre><code>await expression\nif(value is Promise){\n    expression.then()\n}else if(value is thenable){\n    Promise.resolve(expression.then())\n}else{\n    Promise.resolve(expression)\n}\n\n</code></pre>\n<p>当async...await遇上forEach时，特别注意。forEach执行规则如下</p>\n<pre><code>arr.forEach((item.i)=>{\n    fn(item,i)\n});\n//等价于\nconst fnWrap = (item,i) =>{\n    fn(item,i);\n}\nfor(let i = 0;i<array.length;i++){\n    fnWrap(arr[i],i);\n}\n\n</code></pre>\n<p>例子</p>\n<pre><code class=\"language-js\">var arr=[{a:1},{}];\narr.forEach(function(item,idx){\n    item.b=idx;\n});\n</code></pre>\n<p>forEach、map、filter、every、some和reduce会跳过空位</p>\n<pre><code class=\"language-js\">let array = [,1,,2,,3];\narray = array.map((i) => ++i) // array [,2,,3,,4]\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp代码优化0024.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp代码优化0024.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>代码优化（js、css、react等）</h1>\n<p>代码优化直接影响打包、网络和渲染，所以代码优化更多是这4个部分，代码执行的效率（复杂度/空间复杂度）、代码总量、内存管理、代码规范。核心就是代码规范的问题，制定合适的代码规范能有效提升产出代码质量。</p>\n<p>熟悉业务开发流程</p>\n<ol>\n<li>\n<p>确定需求，需求来源于产品运营和设计交互，可能是前端组内。一般产品运营关注整条链路的各个节点，他们清楚的知道这个需求背后的价值以及投入和产出，有了这些就会产生需求优先级，这会影响排期的时间分配。设计交互关注设计稿的还原度和动画等效果的实现，页面的精细度和效果的还原是他们所关注的，我们需要关注页面的兼容和一些边界情况。前端组内比较关注页面性能和代码健壮性，页面性能有首屏加载时间等衡量指标，代码健壮性有开发时的规范（eslint、prettier）、提交之前的code review（git mr）、打包时的代码扫描（单元测试、安全检查、代码压缩等）、上线之后的错误报警（jsTracker）</p>\n</li>\n<li>\n<p>开发测试，和前端相关联的合作方有后端（客户端）和测试。后端关注的是数据之间的关联关系，并确保数据能正常接收和返回。测试关注的是需求链路是否能走通以及一些极端的情况下页面的展示</p>\n</li>\n<li>\n<p>产品验收，前端的验收有三个部分，第一个是产品运营对页面交互流程的验收，验证链路完整性和合理性。第二部分是设计师的验收，验收页面还原度，页面排版布局、图片清晰度、动画的流畅度、交互的爽感等等。第三部分是前端这边负责人的验收，主要验收代码层面的code review，代码规范（eslint、prettier）、代码性能（首屏时间、执行效率、内存管理）、代码健壮（边界容错处理）、代码可读性（变量命名、拆分封装、ts等）。</p>\n</li>\n<li>\n<p>发布上线，上线之前需进行代码扫描、压缩、监控等</p>\n</li>\n</ol>\n<p>对于前端而言，我觉得代码质量有四个衡量维度：执行效率、扩展性、健壮性、可读性。代码执行效率即代码运行多长时间，占用多少内存空间等。扩展性即在版本迭代过程中，新增功能的难易程度，扩展性越好，新增功能越容易；健壮性即页面稳定程度，在不同的环境下能够正常运行不出错，包含兼容、容错容灾，需要考虑更多的边界情况来采取应对措施；可读性即代码让人易于理解和更改，对于团队协作、系统重构有着重大的意义。</p>\n<h3>代码总量</h3>\n<p>封装复用，减少重复代码，提取代码的公共部分写入模块，在需要使用的地方进行引入，能有效减少代码量。</p>\n<p>微重构，随着版本迭代一起逐步升级代码，例如删除冗余代码、</p>\n<p>使用最新版本的js，最新版本的js，例如es6。新特性一般都是用最优的解决方案实现的，能用最少的代码实现同等的功能，能有效减少代码的总量，对于代码质量也有保障，而且可读性也非常高。若不是要考虑兼容性，最新版本的新特性非常值得考虑。</p>\n<p>三方包的引入和使用，</p>\n<h3>提升代码执行速度(时间复杂度，空间复杂度)</h3>\n<p>优化循环\n缓存、节流/防抖\n使用合适的数据结构\ndom操作/网络请求\n异步编程</p>\n<h3>内存管理，减小内存消耗（内存泄漏和内存溢出）</h3>\n<p>全局变量\n闭包\n事件监听与移除、事件委托\n垃圾回收机制</p>\n<h3>代码规范，</h3>\n<p>es6\n严格模式\n工具框架思维</p>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp作用域0005.tsx":
/*!******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp作用域0005.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>作用域</h1>\n<h3>关键词</h3>\n<ul>\n<li>var、let/const、变量提升、暂时性死区</li>\n<li>词法作用域、执行上下文</li>\n<li>闭包</li>\n<li>函数、方法、IIFE、模块</li>\n</ul>\n<p>作用域是变量/常量的访问规则，或者说是变量/常量的影响范围，通过指定作用域的类型来分配变量的访问权限，例如函数作用域只在函数代码块内生效，全局作用域在全局任何地方都能访问。作用域类型即变量访问权限分配规则</p>\n<p>作用域链：在多层嵌套的父子作用域中，提供变量查找的渠道。</p>\n<h3>var变量提升</h3>\n<p>关键词：词法环境、块作用域、暂时死区</p>\n<p>变量的声明周期：创建、初始化、赋值、引用、销毁。变量提升相关的三个阶段是创建、初始化和赋值</p>\n<p>var变量提升：创建和初始化（undefined）是被提升的，赋值不是\nlet变量提升：创建是被提升的（存入暂时性死区），初始化和赋值不是\nfunction变量提升：创建、初始化和赋值同时被提升</p>\n<p>var定义变量特点</p>\n<ol>\n<li>变量提升：在任何时候都会在执行代码之前处理变量声明，var变量声明是编译时</li>\n<li>变量同名覆盖：var可以重复声明赋值，后面会覆盖前面</li>\n<li>全局使用var定义的变量会成为window的属性</li>\n<li>只认函数作用域和全局作用域</li>\n</ol>\n<p>块作用域\n词法环境：当执行代码块（{}包裹的代码）时会创建一个词法环境，与全局环境形成嵌套，词法环境里包含环境记录。而我们的let定义的变量就存放在这个词法环境中。let在多个块作用域中声明变量时，js会创建单独的区域由词法环境为这些变量维护一个类似栈的结构，所以同名的let变量在不同的代码块中声明是不会冲突的。即词法环境是执行上下文的另一个组件</p>\n<p>es6的let和const声明的变量在代码执行开始到声明之前，变量都处于暂时性死区（Temporal dead zone，TDZ）之中。暂时性死区是代码执行时，一段从当前作用域开始到使用let/const声明变量/常量行之前的区域，在这段区域中变量尚未被初始化，如果在这期间尝试访问变量将会抛出ReferenceError。例如</p>\n<pre><code class=\"language-js\">// TDZ，开始\nconsole.log(a);// undefined\nconsole.log(b);//RefernceError\nvar a = 1\nlet b = 2; // TDZ，结束(b)\n</code></pre>\n<p>let声明的变量将作用域限制在块作用域内，在代码没有执行到它的初始化语句之前，它仍然存在于TDZ中</p>\n<pre><code class=\"language-js\">function foo(){\n  var a = 1;\n  if(a){\n    let a = a + 1; // ReferenceError\n  }\n}\nfoo();\n</code></pre>\n<pre><code class=\"language-js\">function bar(n){\n  console.log(n); // {a:[1,2,3]}\n  for(let n of n.a){// ReferenceError\n    console.log(n);\n  }\n}\nbar({a: [1,2,3]})\n</code></pre>\n<p>let定义变量的特点</p>\n<ol>\n<li>存在暂时性死区，死区内访问变量会报错</li>\n<li>不能重复命名，存在重复命名会报错</li>\n<li>在块作用域中生效</li>\n</ol>\n<h3>函数作用域</h3>\n<p>创建函数有多种方式</p>\n<ol>\n<li>函数表达式</li>\n<li>function关键词</li>\n<li>箭头函数表达式（lamada函数）和自执行函数表达式（IIFE）</li>\n</ol>\n<p>函数作用域</p>\n<h3>模块</h3>\n<p>模块化的重要意义即拆分，作用域拆分，变量的影响</p>\n<h3>var 函数作用域/全局作用域</h3>\n<pre><code class=\"language-js\">if(! &quot;a&quot; in window){\n    var a = 1;\n}\nconsole.log(a);\n</code></pre>\n<pre><code class=\"language-js\">var a = 1;\nb = 2;\neval('var c = 3');\ndelete a;\ndelete b;\ndelete c;\n</code></pre>\n<h3>function</h3>\n<pre><code class=\"language-js\">(function f () {\n  function f () { return 1; }\n  return f();\n  function f () { return 2; }\n})();\n</code></pre>\n<pre><code class=\"language-js\">(function(x){\n  delete x;\n  return x;    \n}\n)(1);\n</code></pre>\n<h3>var与IIFE</h3>\n<pre><code class=\"language-js\">(function() {\n  var a = b = 5;\n})();   \nconsole.log(b);\nconsole.log(a);\n</code></pre>\n<pre><code class=\"language-js\">var a = 10;\n(function () {\n  console.log(a)\n  a = 5\n  console.log(window.a);\n  var a = 20;\n  console.log(a)\n})()\n</code></pre>\n<pre><code class=\"language-js\">var b = 10;\n(function b() {\n  b = 20;\n  console.log(b)\n})()\n</code></pre>\n<pre><code class=\"language-js\">var foo = &quot;Hello&quot;;\n(function () {\n  var bar = &quot; World&quot;;\n  console.log(foo + bar);\n})();\nconsole.log(foo + bar);\n</code></pre>\n<pre><code class=\"language-js\">// 输出结果\nvar name = 'Tom';\n(function () {\n  if (typeof name === 'undefined') {\n    var name = 'Jack';\n    console.log('Goodbye ' + name)\n  } else {\n    console.log('Hello ' + name);\n  }\n})();\n\n//输出结果\nvar name = 'Tom';\n(function () {\n  if (typeof name === 'undefined') {\n    name = 'Jack';\n    console.log('Goodbye ' + name)\n  } else {\n    console.log('Hello ' + name);\n  }\n})();\n\n</code></pre>\n<pre><code class=\"language-js\">var foo = {n:1};\n(function(foo){\n    console.log(foo.n);\n    foo.n = 3;\n    var foo = {n:2};\n    console.log(foo.n);\n})(foo);\nconsole.log(foo.n);\n</code></pre>\n<h3>变量覆盖</h3>\n<pre><code class=\"language-js\">meili()\nfunction meili () {\n  console.log(&quot;meili&quot;)\n}\nmogu()\nvar mogu = function () {\n  console.log(&quot;mogu&quot;)\n}\n</code></pre>\n<pre><code class=\"language-js\">compute(10, 100);\nvar compute = function (A, B) {\n  console.info(A * B);\n};\nfunction compute (A, B) {\n  console.info(A + B);\n}\nfunction compute (A, B) {\n  console.info((A + B) * 2);\n}\ncompute(2, 10);\n</code></pre>\n<pre><code class=\"language-js\">\ncheck('first');\nfunction check (ars) {\n  console.log(1, ars);\n}\n\ncheck('second');\nvar check = function (ars) {\n  console.log(2, ars);\n}\n</code></pre>\n<h3>异步操作中作用域</h3>\n<pre><code class=\"language-js\">// html\n<ul>\n  <li>1</li>\n  <li>2</li>\n  <li>3</li>\n  <li>4</li>\n</ul>\n// js\nvar elements = document.getElementsByTagName(&quot;li&quot;);\nfor (var i = 0; i < elements.length; i++) {\n  elements[i].onclick = function () {\n    console.log(i);\n  };\n}\n</code></pre>\n<pre><code class=\"language-js\">for (var i = 0; i < 3; i++) {\n  setTimeout(_ => {\n    console.log(i)\n  })\n}\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(_ => {\n    console.log(i)\n  })\n}\n</code></pre>\n<pre><code class=\"language-js\">for (var i = 0; i< 10; i++){\n   setTimeout(() => {\n    console.log(i);\n   }, 1000)\n}\n\nfor (var i = 0; i< 10; i++){\n  (function(i){\n    setTimeout(() => {\n    console.log(i);\n   }, 1000)\n  })(i)\n}\n\nfor (var i = 0; i< 10; i++){\n  (function(i){\n    setTimeout(() => {\n    console.log(i);\n   }, 1000*i)\n  })(i)\n}\n\nfor (var i = 0; i< 10; i++){\n  setTimeout(() => {\n    (function(i){console.log(i);}(i)\n  }), 1000)\n}\n\nfor (var i = 0; i< 10; i++){\n  setTimeout(() => {\n    console.log(i);\n  }, 1000)\n}\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp函数0036.tsx":
/*!*****************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp函数0036.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>函数</h1>\n<ul>\n<li>写一个判断数据类型的方法</li>\n</ul>\n<pre><code class=\"language-js\">const getType = (data) => {\n  const originType = Object.prototype.toString.call(data);\n  const index = originType.indexOf(' ');\n  const type = originType.slice(index + 1, -1);\n  return type.toLowerCase();\n}\n\n// 测试\nconst arr = [true, 'hello', 123, Symbol(), []];\n\narr.forEach((item) => console.log(getType(item)));\n</code></pre>\n<ul>\n<li>写一个方法判断一个数字是否为整数</li>\n</ul>\n<pre><code class=\"language-js\">\nconst isInteger = (number) => typeof number === 'number' &amp;&amp; number % 1 === 0;\n</code></pre>\n<ul>\n<li>手写防抖和节流</li>\n<li>分别写出防抖和节流的两个函数，并描述它们分别有什么运用场景？</li>\n</ul>\n<pre><code class=\"language-js\">const myThrottle = (fn,delay)=>{\n  let timer = -1;\n  return ()=>{\n    if(timer === -1){\n      timer = setTimeout(()=>{\n        fn();\n        clearTimeout(timer);\n        timer =-1;\n      },delay)\n    }\n  }\n}\nconst myDebounce = (fn,delay)=>{\n  let timer = -1;\n  return ()=>{\n    if(timer>-1){\n      clearTimeout(timer);\n      timer =-1;\n    }\n    timer=setTimeout(fn,delay)\n  }\n}\n</code></pre>\n<ul>\n<li>手写函数柯里化（curry）和函数组合（compose）</li>\n</ul>\n<pre><code class=\"language-js\">const curry = (fn,len,...args) => {\n  return (...newArgs)=>{\n    let _args = [...args,...newArgs];\n    if(_args.length>=len){\n      return fn.apply(this,_args);\n    }\n    return curry.call(this,fn,len,..._args)\n  }\n}\nconst myCurry = (fn,len = fn.length)=>{\n  return curry.call(this,fn,len)\n}\n\nconst myCompose = (...fns) => fns.reduce((f1, f2) => (...args) => f1(f2(...args)));\n</code></pre>\n<ul>\n<li>手写sleep函数（考虑兼容性）</li>\n<li>请写一个sleep（暂停）函数</li>\n</ul>\n<pre><code class=\"language-js\">var sleep =(fn,ms)=> setTimeout(fn)\n</code></pre>\n<ul>\n<li>判断设备来源的方法（isIos、isAndroid、isIphoneX）</li>\n</ul>\n<pre><code class=\"language-js\">const DeviceInfo = (() => {\n  const ua = window.navigator?.userAgent;\n  const isMobile = /Mobile|Android|iPhone/i.test(ua);\n  const isAndroid = /android/i.test(ua);\n  const isIos = /iPhone|iPad|iPod|iOS/i.test(ua);\n  const isIphoneX = isIos &amp;&amp; (\n    (window.screen.height === 812 &amp;&amp; window.screen.width === 375) || \n    (window.screen.height === 896 &amp;&amp; window.screen.width === 414)\n  );\n  return {\n    isMobile,\n    isAndroid,\n    isIos,\n    isIphoneX,\n  };\n})();\n</code></pre>\n<ul>\n<li>手写深克隆方法,考虑性能</li>\n</ul>\n<pre><code class=\"language-js\">const deepClone = (target)=>{\n  if(typeof target === 'object'){\n    const obj = Array.isArray(target)?[]:{};\n    for(let item in target){\n      if(obj.hasOwnProperty(item)){\n        obj[item] = deepClone(target(item));\n      }\n    }\n  }else{\n    return target;\n  }\n}\n</code></pre>\n<ul>\n<li>写一个深比较对象的方法？</li>\n</ul>\n<pre><code class=\"language-js\">const isPrimitive = (val) => {\n  return val === null || typeof val !== 'object';\n}\nconst isTypeEq = (obj1, obj2) => {\n  return Object.prototype.toString.call(obj1) === Object.prototype.toString.call(obj2)\n}\nconst isDeepEq = (obj, newObj) => {\n  if (isPrimitive(obj) || isPrimitive(newObj) || !isTypeEq(obj, newObj)) {\n    return obj === newObj;\n  }\n  if (obj === newObj) return true;\n  if (Object.keys(obj).length !== Object.keys(newObj).length) {\n    return false;\n  }\n  for (let key in obj) {\n    if (!isDeepEq(obj[key], newObj[key])) return false;\n  }\n  return true;\n}\n// 测试\nconst ans = isDeepEq([0, 1, 2, 3], { 0: 0, 1: 1, 2: 2, 3: 3 })\nconsole.log(ans)\n</code></pre>\n<ul>\n<li>html字符串转虚拟dom</li>\n</ul>\n<pre><code class=\"language-js\">/**\n * 例如\n * 输入：<div id=&quot;main&quot; data-x=&quot;hello&quot;>Hello<span id=&quot;sub&quot; /></div>\n * 输出：\n * {\n    tag: &quot;div&quot;,\n    selfClose: false,\n    attributes: {&quot;id&quot;: &quot;main&quot;,&quot;data-x&quot;: &quot;hello&quot;},\n    text: &quot;Hello&quot;,\n    children: [\n      {\n        tag: &quot;span&quot;,\n        selfClose: true,\n        attributes: {&quot;id&quot;: &quot;sub&quot;}\n      }\n    ]\n  }\n * /\n \n</code></pre>\n<ul>\n<li>实现jsonp、ajax</li>\n</ul>\n<pre><code class=\"language-js\">/**\n * \n * @param {*} options \n * https://github.com/webmodules/jsonp/blob/master/index.js\n */\nfunction myJsonp(options) {\n\treturn new Promise((resolve, reject) => {\n\t\t//判断是否是第一次jsonp请求\n\t\tif (!window.jsonpNum) {\n\t\t\twindow.jsonpNum = 1\n\t\t} else {\n\t\t\twindow.jsonpNum++\n\t\t}\n\n\t\tlet {\t\t\t\t\t\n\t\t\turl,\n\t\t\tdata,\n\t\t\ttimeout = 5000,\n\t\t\tcbkey = 'callback',\n\t\t} = options\n        \n\t\t//保证每次请求接收的方法都不会重复\n\t\tlet funName = 'jsonpReceive' + window.jsonpNum\n        \n\t\t//清除本次jsonp请求产生的一些无用东西\n\t\tfunction clear() { \t\t\t\t\t\t\t\n\t\t\twindow[funName] = null\n\t\t\tscript.parentNode.removeChild(script);\n\t\t\tclearTimeout(timer)\n\t\t}\n\t\t\n\t\t//定义jsonp接收函数\n\t\twindow[funName] = function(res) {\n\t\t//一旦函数执行了，就等于说请求成功了\n\t\t\tresolve(res) \t\t\t\t\t\t\t\n\t\t\tclear()\n\t\t}\n\t\t\n\t\t//请求超时计时器\n\t\tlet timer = setTimeout(() => {\t\t\t\t\n\t\t\treject('超时了')\n\t\t\tclear()\n\t\t}, timeout)\n\t\t\n\t\t//定义请求的参数\n\t\tlet params = '' \t\t\t\t\t\t\t\t\n\t\t\n\t\t//如果有参数\n\t\tif (Object.keys(data).length) { \t\t\t\n\t\t\tfor (let key in data) {\n\t\t\t\tparams += '&amp;'+key+'='+encodeURIComponent(data[key]);\n\t\t\t}\n\t\t\t\n\t\t\tparams = params.substr(1)\n\t\t}\n\t\t\n\t\t//拼接最终的请求路径，结尾拼接回调的方法名\n\t\turl = url + '?' + params + '&amp;'+cbkey+'='+funName;  \t\n\n\t\tlet script = document.createElement('script');\n\t\tscript.src = url;\n\t\tdocument.body.appendChild(script);\n\t})\n}\n\n</code></pre>\n<ul>\n<li>用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值</li>\n</ul>\n<pre><code class=\"language-js\">const getRandomNumber = (fromNumber, toNumber) => {\n  return Math.floor((toNumber - 1) * Math.random()) + fromNumber;\n}\nconst getFiveNumberDuplicate = (len, set) => {\n  if (set.size === len) return;\n  set.add(getRandomNumber(2, 32));\n  getFiveNumberDuplicate(len, set);\n}\n\n// 测试\nconst set = new Set([])\ngetFiveNumberDuplicate(5, set);\nconsole.log(set)\n</code></pre>\n<ul>\n<li>实现一个极简的模版引擎(参考handlebars)</li>\n</ul>\n<pre><code class=\"language-js\">function getHtmlFromTemp (data, temp) {\n  return temp.replace(/{{([a-zA-Z0-9]+)}}/g, (_, $1) => data[$1])\n}\n// 测试\nconst data = { name2: 'jack', age: 11 };\nconst temp = '<div>my name is {{name2}}</div><span>age is {{age}}</span>'\nconst ans = getHtmlFromTemp(data, temp);\nconsole.log(ans);\n</code></pre>\n<ul>\n<li>实现一个极简的数据响应式\n方法一</li>\n</ul>\n<pre><code class=\"language-js\">function defineReactive (object, key, value, effect) {\n  Object.defineProperty(object, key, {\n    get () {\n      return value;\n    },\n    set (newValue) {\n      value = newValue\n      effect();\n    }\n  })\n}\nfunction observer (object, effect) {\n  for (let key in object) {\n    if (object.hasOwnProperty(key)) {\n      defineReactive(obj, key, object[key], effect)\n    }\n  }\n}\n\n// 测试\nconst obj = {\n  name: 'jack',\n  other: { age: 11 }\n}\nfunction effect () {\n  console.log(`<div>${obj.other.age}</div>`)\n}\n\nobserver(obj, effect);\nobj.other = 11;\n</code></pre>\n<p>方法二</p>\n<pre><code class=\"language-js\">function reactive (object, effect) {\n  return new Proxy(object, {\n    get (target, prop) {\n      return reactive(Reflect.get(target, prop), effect);\n    },\n    set (target, prop, value) {\n      const result = Reflect.set(target, prop, value);\n      effect();\n      return result;\n    }\n  })\n}\n\nconst obj = {\n  name: 'jack',\n  other: { age: 11 }\n}\n\nconst reactiveObj = reactive(obj, () => console.log(`<div>${obj.other.age}</div>`));\nreactiveObj.other.age = 0;\n\n</code></pre>\n<ul>\n<li>手写一个函数getValue，获取对象的指定属性</li>\n</ul>\n<pre><code class=\"language-js\">const getValue = (o,path) => {\n  try {\n    return path.split('.').reduce((o,k) => o[k],o)\n  } catch (error) {\n    return undefined\n  }\n}\n// 测试\nvar data = { a: { b: { c: '1' } } }\ngetValue(data, 'a.b.c') // => 1\ngetValue(data, 'a.b.c.d') // => undefined\ngetValue(data, 'a.b.c.d.e.f.g') // => undefined\n</code></pre>\n<ul>\n<li>实现一个函数记忆的方法</li>\n</ul>\n<pre><code class=\"language-js\">function memo(fn){\n  const cache = {};\n  return (arg)=>cache[arg] || (cache[arg]=fn(arg));\n}\n</code></pre>\n<ul>\n<li>\n<p>实现一个极简的webpack</p>\n</li>\n<li>\n<p>写一个方法判断js的方法是内置的还是自定义的</p>\n</li>\n<li>\n<p>使用js实现变态跳台阶</p>\n</li>\n<li>\n<p>如何使用js实现撤消和重做并写出伪代码</p>\n</li>\n<li>\n<p>写一个方法对对象中的key进行排序</p>\n</li>\n<li>\n<p>写一个方法遍历指定对象的所有属性</p>\n</li>\n<li>\n<p>手动实现一个Promisify函数</p>\n</li>\n<li>\n<p>设计一个函数，奇数次执行的时候打印 1，偶数次执行的时候打印 2</p>\n</li>\n<li>\n<p>简单封装一个异步fecth，使用async await的方式来使用</p>\n</li>\n<li>\n<p>请写一个函数，输出出多级嵌套结构的Object的所有key值</p>\n</li>\n<li>\n<p>versions 是一个项目的版本号列表，因多人维护，不规则，动手实现一个版本号处理函数</p>\n</li>\n<li>\n<p>简单封装一个异步 fecth，使用 async await 的方式来使用</p>\n</li>\n<li>\n<p>给 JavaScript 的 String 原生对象添加一个名为 trim 的原型方法，用于截取字符串前后的空白字符</p>\n</li>\n<li>\n<p>请编写一个 JavaScript 函数 parseQueryString,它的用途是把 URL 参数解析为一个对象，url=&quot;http://iauto360.cn/index.php?key0=0&amp;key1=1&amp;key2=2&quot;</p>\n</li>\n<li>\n<p>请使用js实现一个无限累加的函数，function add(x) {________}; alert(add(2)(3)(4)); //填空，使结果为9</p>\n</li>\n</ul>\n<pre><code class=\"language-js\">function add (a) {\n  if (!isFinite(add.i)) {\n    add.i = a\n  } else {\n    add.i += a;\n  }\n  add.valueOf = add.toString = function () {\n    return add.i\n  }\n  return add;\n}\nalert(add(2)(3)(4))\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp前端工程化发展历史0022.tsx":
/*!************************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp前端工程化发展历史0022.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>工程化历史</h1>\n<h3>构建历史</h3>\n<p>fis\nbrowserify+Gulp（基本文件流操作）</p>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp前端跨域0051.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp前端跨域0051.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h3>提问？</h3>\n<ol>\n<li>前端发送请求的方式\najax（xmlhttprequest）、fetch、websocket</li>\n</ol>\n<p>fetch会发生跨域吗？</p>\n<h3>是什么？为什么？</h3>\n<p>跨域是指浏览器允许向服务器发送跨域请求，从而克服Ajax只能同源使用的限制。同源策略是一种约定，是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到XSS、CSRF等攻击。所谓同源是指&quot;协议+域名+端口&quot;三者相同。</p>\n<p>同源策略限制以下几种行为：</p>\n<p>Cookie、LocalStorage 和 IndexDB 无法读取\nDOM和JS对象无法获得\nAJAX 请求不能发送</p>\n<h3>怎么办？</h3>\n<ol>\n<li>jsonp</li>\n</ol>\n<p>动态构建script标签，通过src向服务器发送请求，</p>\n<ol start=\"2\">\n<li>\n<p>跨域资源共享\nAccess-Control-Allow-Origin: *</p>\n</li>\n<li>\n<p>nginx反向代理</p>\n</li>\n</ol>\n<pre><code>#proxy服务器\nserver {\n    listen       81;\n    server_name  www.domain1.com;\n\n    location / {\n        proxy_pass   http://www.domain2.com:8080;  #反向代理\n        proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名\n        index  index.html index.htm;\n\n        # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用\n        add_header Access-Control-Allow-Origin http://www.domain1.com;  #当前端只跨域不带cookie时，可为*\n        add_header Access-Control-Allow-Credentials true;\n    }\n}\n</code></pre>\n<ol start=\"4\">\n<li></li>\n</ol>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp动态规划0037.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp动态规划0037.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<ul>\n<li>写一个函数，计算两个字符串的公共子串</li>\n</ul>\n<pre><code></code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp动画优化0025.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp动画优化0025.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<p>动画为什么需要优化</p>\n<h3>css动画</h3>\n<p>过渡动画（transition）表示的不同状态之间切换的时候定义的过渡动画，特点是一次性的、简单方便无需关注过程</p>\n<p>帧动画（animation+keyframe）表示使用keyframe自定义动画帧，然后通过animation来调用，animation可以添加一些属性。其特点是可以控制播放的速度、次数，动画细腻流畅</p>\n<p>css动画特点：缺乏控制能力，灵活性不够</p>\n<h3>js动画</h3>\n<p>requestAnimationFrame接收一个回调函数，在浏览器下次重绘之前调用回调，通常用于制作动画，回调函数的执行次数和浏览器屏幕刷新次数相匹配，页面处于后台时，它会被暂停调用。</p>\n<p>dom.animate</p>\n<p>雪碧图动画</p>\n<p>canvas/svg动画和lottie</p>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp单元测试0064.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp单元测试0064.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<p>说一下单元测试、E2E测试？它们有什么区别？</p>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp原型链0006.tsx":
/*!******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp原型链0006.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>原型链</h1>\n<h3>原型和原型链</h3>\n<ul>\n<li>prototype：引用TC39上的原话</li>\n</ul>\n<pre><code>object that provides shared properties for other objects\n\nWhen a constructor creates an object, that object implicitly references the constructor's &quot;prototype&quot; property for the purpose of resolving property references. The constructor's &quot;prototype&quot; property can be referenced by the program expression constructor.prototype, and properties added to an object's prototype are shared, through inheritance, by all objects sharing the prototype. Alternatively, a new object may be created with an explicitly specified prototype by using the Object.create built-in function.\n</code></pre>\n<p>上面大致意思就是prototype是一个给其他对象提供共享属性的对象，核心是<strong>属性共享</strong>。后面一大段的重点有以下几点</p>\n<ol>\n<li>prototype是挂在构造函数下的</li>\n<li>实例对象隐式引用构造函数的prototype（即object.__proto__===constructor.prototype）</li>\n<li>可以动态给实例对象的原型添加属性，并且会通过继承，传递给其他实例对象</li>\n<li>通过Object.create方法可以创建一个指定原型对象的对象</li>\n</ol>\n<p>prototype的作用是能让构造函数的属性在其创建的实例对象之间共享，而prototype也是个对象，原型链提供一条对象访问属性的路径</p>\n<ul>\n<li>__proto__\nmdn上说</li>\n</ul>\n<pre><code>Object 实例的__proto__访问器属性暴露了此对象的 [[Prototype]]（一个对象或 null）。\n</code></pre>\n<p>即__proto__可以访问或者设置对象的内部属性[[Prototype]]，对象的[[Prototype]]指向其构造函数的prototype，即我们可以简写成object._<em>proto</em>_ === constructor.prototype 或者 Object.getPrototypeOf(object) === constructor.prototype。这也是原型链的基础。</p>\n<p>因此我们可以说</p>\n<p>原型是构造函数和实例对象的连接的纽带，函数和对象的关系（横向），js中原型是继承的基础。每个对象（object）都有一个原型链对象（也叫隐式原型）__proto__（现在__proto__已经废弃，改为使用Object.getPrototypeOf()和Object.setPrototypeOf()来实现），所有构造函数都有一个原型对象prototype</p>\n<p>原型链：对象属性/方法的访问规则，它是顺着对象的隐式原型（__proto__）向上（构造函数）查找，父类和子类以及他们的实例对象之间的关联关系（垂直）。就像我们抽水的时候，水是顺着建好的水管来流动的，水管就是一个水的流动规则，可以向上流，也可以向下流，可以动态的构造水管的走向，自定义规则。原型链、作用域链等也是这样的，我们可以动态修改隐式原型，可以修改__proto__对象的某个属性，也可以重写__proto__对象，也可以通过对象隐式原型访问构造函数。</p>\n<p>原型和原型链组成了对象属性访问的规则网络（横向和纵向二维关系）</p>\n<h3>原型、隐式原型和构造函数(prototype、__proto__、constructor)</h3>\n<p>实例对象、构造函数，父类子类的关联关系总结如下公式</p>\n<pre><code>// 原型：描述了实例对象和构造函数的关联关系\n实例对象.constructor === 构造函数\n实例对象.__proto__ === 构造函数.prototype\n\n// 原型链：描述了构造函数和其祖先构造函数的关联关系\n子类.__proto__ === 父类\n子类.prototype.__proto__ === 父类.prototype\n</code></pre>\n<p>上面的公式等价于下面的例子</p>\n<pre><code class=\"language-js\">class A {}\nclass B extends A {}\n\nconst a = new A();\nconst b = new B();\n\n// a.constructor === A\n// a.__proto__ === A.prototype\n\n// B是一个对象\n// B.__proto__ === A\n// B是一个函数\n// B.prototype.__proto__ === A.prototype\n</code></pre>\n<h3>原型相关操作</h3>\n<ol>\n<li>创建一个指定原型对象的对象</li>\n</ol>\n<pre><code class=\"language-js\">/**\n *  Object.create(proto)即以现有对象（proto）作为原型创建一个新的对象。\n *  实现伪代码如下\n * \n * */\nfunction objectCreate(object){\n  const newObj = {}\n  newObj.__proto__ = object\n  return newObj\n}\n</code></pre>\n<pre><code class=\"language-js\">const p ={name:'jack'}\nconst p1 = Object.create(p)\nconsole.log(p1.name) // 'jack'\n</code></pre>\n<ol start=\"2\">\n<li>访问/设置对象的原型</li>\n</ol>\n<pre><code class=\"language-js\">// Object.getPrototypeOf()\nconst a = {}\nconst b = Object.create(a)\nconsole.log(Object.getPrototypeOf(b) === a) // true\n</code></pre>\n<pre><code class=\"language-js\">//Object.setPrototypeOf()\nconst a = {};\nconst b = {name:'jack'}\nObject.setPrototypeOf(a,b);\nconsole.log(a.name) // jack\n</code></pre>\n<pre><code class=\"language-js\">// __proto__(已废弃)\nconst a = {};\nconst b = {name:'jack'};\na.__proto__ = b;\nconsole.log(a.name) // jack\n</code></pre>\n<ol start=\"3\">\n<li>检测某个实例对象的原型链上是否存在构造函数的原型对象（prototype）。其实现伪代码如下</li>\n</ol>\n<pre><code class=\"language-js\">function myInstanceof(object,constructor){\n  left = object.__proto__\n  right = constructor.prototype\n  while(true){\n    if(left === null) return false\n    if(left === right) return true\n    left = left.__proto__\n  } \n}\n</code></pre>\n<pre><code class=\"language-js\">//判断一个对象是否存在于另一个对象的原型链中\n\n// Object.prototype.isPrototypeOf()\n</code></pre>\n<ol start=\"4\">\n<li>new的实现</li>\n</ol>\n<pre><code class=\"language-js\">/** \n * new关键词和Object.create()都会创建一个对象并返回一个对象，\n * new的过程概括起来有4步,实现伪代码如下\n */\nfunction myNew(constructor){\n  // 第1步，创建一个对象\n  object = {}\n  // 第2步，补齐原型链\n  object.__proto__ = constructor.prototype\n  // 第3步，确保执行上下文对象正确（this）\n  ret = constructor.call(object)\n  // 第4步，返回一个对象\n  return ret || object\n}\n</code></pre>\n<p>我们最常用的是通过字面量来创建对象，即const obj = {}这种方式等价于const obj = Object()</p>\n<ol start=\"5\">\n<li>怎么识别我的对象是通过哪种方式创建的呢？比如我们通过new来创建一个对象，就可以在构造函数中通过new.target来检测这个函数是否作为构造函数通过new来调用的，它指向直接被new执行的构造函数。例如</li>\n</ol>\n<pre><code class=\"language-js\">function Foo() {\n  if (!new.target) throw &quot;Foo() must be called with new&quot;;\n  console.log(&quot;Foo instantiated with new&quot;);\n  console.log(new.target)\n}\n\nFoo(); // throws &quot;Foo() must be called with new&quot;\nnew Foo(); // logs &quot;Foo instantiated with new&quot;\n</code></pre>\n<ol start=\"6\">\n<li>判断属性是是自有属性还是原型对象上的属性</li>\n</ol>\n<pre><code class=\"language-js\">// Object.prototype.hasOwnProperty()\n</code></pre>\n<ol start=\"7\">\n<li>实现继承</li>\n</ol>\n<pre><code class=\"language-js\">// 寄生组合式继承\nfunction extend(subClass, superClass) {\n  const F = function() {};\n  F.prototype = superClass.prototype;\n  subClass.prototype = new F(); \n  subClass.prototype.constructor = subClass;\n\n  subClass.superclass = superClass.prototype;\n  if(superClass.prototype.constructor == Object.prototype.constructor) {\n    superClass.prototype.constructor = superClass;\n  }\n}\n</code></pre>\n<h3>原型对象属性的操作</h3>\n<pre><code class=\"language-js\">function Fn1 (name) {\n  if (name) {\n    this.name = name;\n  }\n}\nFn1.prototype.name = &quot;jack&quot;\nlet a = new Fn1();\nconsole.log('a:', a.name);\n\nfunction Fn2 (name) {\n  this.name = name;\n}\nFn2.prototype.name = &quot;jack&quot;\nlet b = new Fn2();\nconsole.log('b:', b.name);\n</code></pre>\n<pre><code class=\"language-js\">function Foo () { }\nFoo.prototype.z = 3;\nvar obj = new Foo();\nconsole.info(obj.z)\nobj.z = 10;\nconsole.info(obj.z);\ndelete obj.z;\nconsole.info(obj.z);\n</code></pre>\n<pre><code class=\"language-js\">var tmp = {};\nvar A = function () { };\nA.prototype = tmp;\n\nvar a = new A();\nA.prototype = {};\n\nvar b = Object.create(tmp);\nb.constructor = A.constructor;\n\nconsole.log(a instanceof A);\nconsole.log(b instanceof A);\n</code></pre>\n<pre><code class=\"language-js\">function Person(age){\n  this.age = age;\n}\n\nPerson.prototype = {\n  constructor:Person,\n  getAge:function(){\n    console.log(this.age);\n  },\n }\n\nvar p = new Person(24);\nPerson.prototype.age = 18;\nObject.prototype.age = 20;\np.getAge();\n</code></pre>\n<h3>es6 class get/set</h3>\n<pre><code class=\"language-js\">class Phone{\n  constructor(price){\n    this.price = price;\n  }\n  get price(){\n    return 999;\n  }\n}\nvar p = new Phone(888);\nconsole.log(p.price);\n</code></pre>\n<h3>prototype和__proto__关系</h3>\n<pre><code class=\"language-js\">class A { }\nclass B extends A { }\nconst a = new A()\nconst b = new B()\n\nconsole.log(a.__proto__)\nconsole.log(b.__proto__)\nconsole.log(B.__proto__)\nconsole.log(B.prototype.__proto__)\nconsole.log(b.__proto__.__proto__)\n</code></pre>\n<h3>构造函数和普通函数</h3>\n<pre><code class=\"language-js\">var name = 'Jay'\nfunction Person (name) {\n  this.name = name;\n  console.log(this.name)\n}\nvar a = Person('Tom')\nconsole.log(name)\nconsole.log(a)\nvar b = new Person('Michael')\nconsole.log(b)\n</code></pre>\n<h3>Object.create()实现原理</h3>\n<pre><code class=\"language-js\">const Book = {\n  price: 32\n}\nconst book = Object.create(Book);\nbook.type = 'Math';\ndelete book.price;\ndelete book.type;\nconsole.log(book.price);\nconsole.log(book.type);\n</code></pre>\n<h3>原型链与闭包</h3>\n<pre><code class=\"language-js\">var Foo = (function () {\n  var x = 0;\n  function Foo () { }\n  Foo.prototype.increment = function () {\n    ++x;\n    console.log(x);\n  };\n  return Foo;\n})();\n\nvar a = new Foo();\na.increment();\na.increment();\nvar b = new Foo();\na.increment();\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp图片优化0026.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp图片优化0026.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>图片</h1>\n<h3>图片基础知识</h3>\n<p>rgb、rgba</p>\n<p>常见图片的格式：jpeg、png、apng、webp</p>\n<p>base64和blob</p>\n<h3>各种格式图片特点</h3>\n<p>jpg：色彩丰富\npng:色彩较为简单，包含透明通道\nwebp：体积小</p>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp场景题0038.tsx":
/*!******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp场景题0038.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<ul>\n<li>实现一个函数arrange函数，使得支持以下功能</li>\n</ul>\n<pre><code class=\"language-js\">// 实现该函数\nfunction arrange(name){}\n\narrange('william').execute();\n// > william is notified\n\narrage('william').do('commit').execute();\n// > william is notified\n// > Start to commit\n\narrage('william').wait(5).do('commit').execute();\n// > william is notified\n// 等待5s\n// > Start to commit\n\narrage('william').waitFirst(5).do('push').execute();\n// 等待5s\n// > william is notified\n// > Start to push\n</code></pre>\n<p>题解</p>\n<pre><code class=\"language-js\">\nfunction arrange (name) {\n  const task = [];\n  task.push(() => {\n    console.log(name + ' is notified');\n  });\n  function doSomething (name) {\n    task.push(() => {\n      console.log('Start to ' + name);\n    })\n    return this;\n  }\n  function wait (s) {\n    task.push(async () => new Promise(resolve => {\n      setTimeout(resolve, s * 1000)\n    }))\n    return this;\n  }\n  function waitFirst (s) {\n    task.unshift(async () => new Promise(resolve => {\n      setTimeout(resolve, s * 1000)\n    }))\n    return this;\n  }\n  async function execute () {\n    for (const t of task) {\n      await t();\n    }\n  }\n\n  return {\n    do: doSomething,\n    wait,\n    waitFirst,\n    execute,\n  }\n}\n</code></pre>\n<ul>\n<li>给fetch添加超时功能</li>\n</ul>\n<pre><code class=\"language-js\">function timeoutFetch (timeout = 10000) {\n  return function (url, options) {\n    return new Promise((resolve, reject) => {\n      const signalController = new AbortController()\n      fetch(url, {\n        ...options,\n        signal: signalController.signal\n      }).then(resolve, reject);\n      setTimeout(() => {\n        reject(new Error('Fetch timeout'))\n        // 取消请求\n        signalController.abort();\n      }, timeout);\n    })\n  }\n}\n// 测试\nconst request = timeoutFetch(3000)\n</code></pre>\n<ul>\n<li>实现任务队列的中断和恢复,支持以下功能</li>\n</ul>\n<pre><code>1. 依次顺序执行一系列任务\n2. 所有任务完成后可以得到每个任务的执行结果\n3. 需要返回两个方法，start用于启动任务，pause用于暂停任务\n4. 每个任务具有原子性，即不可中断，只能在两个任务之间中断\n</code></pre>\n<ul>\n<li>请编写一个对象obj满足 obj=='a' &amp;&amp; obj=='b' &amp;&amp; obj=='c'</li>\n<li>如何让(a==1 &amp;&amp; a==2 &amp;&amp; a==3)的值为true？把&quot;==&quot;换成&quot;===&quot;后还能为true吗？</li>\n</ul>\n<pre><code class=\"language-js\">// 方法一\nvar i = 0;\nNumber.prototype.valueOf = function () {\n  return ++i;\n}\nvar a = new Number(i);\n\n// 方法二\nconst a = {\n  valueOf: (function () {\n    var i = 0;\n    return () => ++i;\n  }())\n}\n// 方法三\nlet i = 0;\nObject.defineProperty(globalThis, 'a', {\n  get () {\n    return ++i;\n  }\n})\n// 测试\nconsole.log(a == 1 &amp;&amp; a == 2 &amp;&amp; a == 3);\n</code></pre>\n<ul>\n<li>值和引用，输出结果</li>\n</ul>\n<pre><code class=\"language-js\">var foo = { bar:1};\nvar arr1 = {1,2,foo};\nvar arr2 = arr1.slice(1);\narr2[0]++;\narr2[1].bar++;\nfoo.bar++;\narr1[2].bar++;\nconsole.log(arr1[1] === arr2[0]);\nconsole.log(arr1[2] === arr2[1]);\nconsole.log(foo.bar);\n</code></pre>\n<ul>\n<li>请用js编写一个红绿灯程序</li>\n<li>请用js实现一个简单的小区楼的电梯运行程序</li>\n<li>用js模拟实现微信抢红包的算法，并说明你的思路</li>\n<li>实现一个ajax的队列请求</li>\n<li>请使用js实现vue的diff算法</li>\n<li>说下你对map方法的理解，并解释下面代码返回的结果</li>\n</ul>\n<pre><code class=\"language-js\">const result = new Array(3).map((item) => {\n  return item = {\n    name: 'test'\n  }\n});\nconsole.log(result);\n</code></pre>\n<ul>\n<li>请解释以下题目会输出的结果（类型转换）</li>\n</ul>\n<pre><code class=\"language-js\">var temp = [0];\nif ([0]) {\n  console.log(temp == true);\n} else {\n  console.log(&quot;测试&quot;);\n}\n\n</code></pre>\n<ul>\n<li>请解释下面题目输出的结果</li>\n</ul>\n<pre><code class=\"language-js\">var val = &quot;test&quot;;\nconsole.log(&quot;output is &quot; + (val === &quot;Test&quot;) ? &quot;123&quot; : &quot;456&quot;);\n\n</code></pre>\n<ul>\n<li>以下方法调用call输出的结果是什么？请解释下？</li>\n</ul>\n<pre><code class=\"language-js\">[].copyWithin.call({ length: 5, 3: 1 }, 0, 3)\n</code></pre>\n<ul>\n<li>请解释下为什么下面第一种方式会报错而第二种不会？</li>\n</ul>\n<pre><code class=\"language-js\">// 第一种：构造函数创建\nvar object=new Object();\nobject.a=1;\nobject.8=8; //Unexpected number\n\n// 第二种：字面量创建\nvar object = {\n  a: 1,\n  8: 2\n};\n\n</code></pre>\n<ul>\n<li>给定下面伪代码，请说出程序运行多少秒后会输出“Hello World!”（不考虑其它干扰因素）？并解释下为什么？</li>\n</ul>\n<pre><code class=\"language-js\">sleep(1秒) //运行1s\n\nsetTimout(function(){\n    输出 &quot;Hello World!&quot;\n}, 7秒)\n\nsleep(3秒) //运行3s\n\n</code></pre>\n<ul>\n<li>解释如下代码的输出结果，并改造代码使得按顺序输出i</li>\n</ul>\n<pre><code class=\"language-js\">function test(){\n\tfor(let i = 0; i < 8; i++){\n\t\t(\n\t\t\tfunction(j){\n\t\t\t\tsetTimeout(function(){\n\t\t\t\t\tconsole.log(&quot;i=&quot;, i);\n\t\t\t\t}, Math.random() * 1000);\n\t\t\t}(i)\n\t\t)\n\t}\n}\n\ntest();\n\n</code></pre>\n<ul>\n<li>写一个方法计算N年时农场里有几只羊（见下文描述）？</li>\n</ul>\n<pre><code>农场买了一只小羊，这种羊在第一年是小羊，第二年的年底会生一只小羊，第三年不生小羊，第四年的年底还会再生下一只小羊，第五年就死掉了。\n</code></pre>\n<ul>\n<li>用js写个算法算出筐里最少有多少个鸡蛋？</li>\n</ul>\n<pre><code>一筐鸡蛋：\n1个1个拿，正好拿完；\n2个2个拿，还剩1个；\n3个3个拿，正好拿完；\n4个4个拿，还剩1个；\n5个5个拿，还差1个；\n6个6个拿，还剩3个；\n7个7个拿，正好拿完；\n8个8个拿，还剩1个；\n9个9个拿，正好拿完。\n\n问筐里最少有多少鸡蛋？\n</code></pre>\n<ul>\n<li>实现一个函数sum, 满足以下需求:</li>\n</ul>\n<pre><code class=\"language-js\">sum() == 0\nsum(1)(2)(3)() == 6\nsum(3)(4)() == 7\nsum(v1)(v2)...(vn)() == v1+v2+...+vn\n</code></pre>\n<ul>\n<li>请说说以下两种原型的区别</li>\n</ul>\n<pre><code class=\"language-js\">var A = function() {};\nvar b = new A();\nA.prototype = {\n\tn: 0,\n\tm: 1\n}\n//和以下方式的声明有什么区别，为什么？\n\nvar A = function() {};\nvar b = new A();\nA.prototype.n = 0;\nA.prototype.m = 1;\n\n</code></pre>\n<ul>\n<li>下文Promise的执行顺序是怎样的？</li>\n</ul>\n<pre><code class=\"language-js\">new Promise((resolve,reject)=>{\n    console.log(&quot;1&quot;)\n    resolve()\n}).then(()=>{\n    console.log(&quot;2&quot;)\n    new Promise((resolve,reject)=>{\n        console.log(&quot;3&quot;)\n        resolve()\n    }).then(()=>{\n        console.log(&quot;4&quot;)\n    }).then(()=>{\n        console.log(&quot;5&quot;)\n    }).then(()=>{\n        console.log(&quot;6&quot;)\n    }).then(()=>{\n        console.log(&quot;7&quot;)\n    })\n}).then(()=>{\n    console.log(&quot;8&quot;)\n    Promise.resolve().then(()=>{\n        console.log(9)\n    }).then(()=>{\n        console.log(10)\n    })\n}).then(()=>{\n    console.log(&quot;11&quot;)\n}).then(()=>{\n    console.log(&quot;12&quot;)\n})\n</code></pre>\n<ul>\n<li>判断instanceof的结果并解释原因 [代码]</li>\n</ul>\n<pre><code class=\"language-js\">function test(){ \n    return test; \n} \nnew test() instanceof test;\n</code></pre>\n<ul>\n<li>看下面代码，判断a和b的类型是否为true？为什么？什么是基本包装类型?</li>\n</ul>\n<pre><code class=\"language-js\">var a=1;\nvar b = new Number(1);\ntypeof(a)===typeof(b);\n</code></pre>\n<ul>\n<li>请解释下如下js代码对数组排序后的输出结果</li>\n</ul>\n<pre><code class=\"language-js\">var result = [55, 22, 168]; \nconsole.log(result.sort());\n\n</code></pre>\n<ul>\n<li>用不同的方法改装下面的代码，使它的结果输出为0-4[代码]</li>\n</ul>\n<pre><code class=\"language-js\">for (var i = 0; i < 5; i++){\n    setTimeout(() => {\n        console.log(i);\n    }, 1000)\n}\n</code></pre>\n<ul>\n<li>根据下面代码：说出执行结果，并解释为何是会是这样的结果？</li>\n</ul>\n<pre><code class=\"language-js\">var str = 'abc';\nconsole.log(str[1]);\n\nvar num = 123;\nconsole.log(num[1]);\n</code></pre>\n<ul>\n<li>这两种展开运算符的方式有什么区别呢？</li>\n</ul>\n<pre><code class=\"language-js\">const o1 = { ...obj, o3 }\n\nconst o2 = { ...obj, o3: { ...o3 } }\n\n</code></pre>\n<ul>\n<li>阅读下面关于setTimeout和Promise的代码，判断结果会输出什么？为什么？</li>\n</ul>\n<pre><code class=\"language-js\">setTimeout(function () {\n    console.log(1);\n})\nPromise.resolve(function () {\n    console.log(2)\n})\nnew Promise(function (resolve) {\n    console.log(3);\n    resolve();\n}).then(function () {\n    console.log(4)\n})\nconsole.log(5)\n</code></pre>\n<ul>\n<li>\n<p>用js写一个事件侦听器的方法</p>\n</li>\n<li>\n<p>写一个根据xpath获取元素的方法</p>\n</li>\n<li>\n<p>写一个方法探测CPU占比情况?</p>\n</li>\n<li>\n<p>获取浏览器当前页面的滚动条高度的兼容写法</p>\n</li>\n<li>\n<p>写一个方法实现选中复制的功能</p>\n</li>\n<li>\n<p>写一个方法，实现修改当前的URL链接但页面不跳转的功能</p>\n</li>\n<li>\n<p>写一个代理console.log的方法</p>\n</li>\n<li>\n<p>写个方法，实现对某个节点的拖拽</p>\n</li>\n<li>\n<p>用js实现动态改变根元素字体大小的方法</p>\n</li>\n<li>\n<p>你知道断点续传的原理吗？用js怎么实现</p>\n</li>\n<li>\n<p>用js实现一个复制粘贴</p>\n</li>\n<li>\n<p>写一个方法，实现使用canvas播放视频？</p>\n</li>\n<li>\n<p>js如何检测当前页面是否以全屏模式显示？</p>\n</li>\n<li>\n<p>写一个让一句话随着鼠标移动的小插件</p>\n</li>\n<li>\n<p>用js实现一个导航吸顶效</p>\n</li>\n<li>\n<p>js如何把网页加入收藏夹</p>\n</li>\n<li>\n<p>如何用js获取DOM元素在页面中的绝对位置？</p>\n</li>\n<li>\n<p>写一个方法获取div的宽高</p>\n</li>\n<li>\n<p>写一个方法来获取div到浏览器窗口的高度</p>\n</li>\n<li>\n<p>如何禁止IOS移动端网页橡皮筋的效果？</p>\n</li>\n<li>\n<p>如何实现一个全屏的功能？</p>\n</li>\n<li>\n<p>如何实现文件拖动上传？</p>\n</li>\n<li>\n<p>写个方法判断当前脚本运行在浏览器还是node环境中</p>\n</li>\n<li>\n<p>用js写一个绑定事件检测窗口大小</p>\n</li>\n<li>\n<p>用js怎么实现图片马赛克效果？</p>\n</li>\n<li>\n<p>写个给图片加水印的方法</p>\n</li>\n<li>\n<p>怎么下载一个zip文件？</p>\n</li>\n<li>\n<p>写一个方法监听某个div滚动</p>\n</li>\n<li>\n<p>用代码实现游戏应用中连续按键触发必杀技的监测方法</p>\n</li>\n<li>\n<p>用js实现最大化和最小化窗口</p>\n</li>\n<li>\n<p>怎样在JavaScript中创建一个worker线程？</p>\n</li>\n<li>\n<p>请使用js实现一个省市县级联的效果</p>\n</li>\n<li>\n<p>用js实现一个轮播图，并简述有哪些实现的方法</p>\n</li>\n<li>\n<p>请使用纯js实现一个横向或纵向的无缝滚动效果</p>\n</li>\n<li>\n<p>用原生js实现类似getElementsByClassName的方法，不能使用querySelectorAll</p>\n</li>\n<li>\n<p>写一个网络不通时则提醒用户的方法</p>\n</li>\n<li>\n<p>用js封装一个对cookie操作的方法</p>\n</li>\n<li>\n<p>如何使用js获取当前的url和来源的url？</p>\n</li>\n<li>\n<p>写一个方法将html页面生成为图片</p>\n</li>\n<li>\n<p>写个方法获取浏览器的唯一标识</p>\n</li>\n<li>\n<p>使用js写一个方法操作css变量</p>\n</li>\n<li>\n<p>写一个方法动态同步加载script文件</p>\n</li>\n<li>\n<p>写一个方法监听指定cookie的变化</p>\n</li>\n<li>\n<p>使用JavaScript拖拽盒子跟着鼠标动的效果</p>\n</li>\n<li>\n<p>写一个方法判断页面滚动方向</p>\n</li>\n<li>\n<p>使用js写一个图片压缩的小工具</p>\n</li>\n<li>\n<p>写一个方法监听DOM宽高的变化</p>\n</li>\n<li>\n<p>使用canvas画一个小球自由落体的效果</p>\n</li>\n<li>\n<p>写一个方法获取手机电池的信息，如：电量、充电状态等</p>\n</li>\n<li>\n<p>使用js动态创建一个有不少于10万个节点的树</p>\n</li>\n<li>\n<p>给你一个页面，找出该页面使用最多的前三个标签以及他们的数量</p>\n</li>\n<li>\n<p>写一个判断设备来源的方法</p>\n</li>\n<li>\n<p>写一个方法获取图片的原始宽高</p>\n</li>\n<li>\n<p>请手写一个幻灯片的效果</p>\n</li>\n<li>\n<p>请用canvas写一个关于520浪漫表白的代码</p>\n</li>\n<li>\n<p>写一个获取当前url查询字符串中的参数的方法</p>\n</li>\n<li>\n<p>写一个JS方法，判断元素是否在可视区域</p>\n</li>\n<li>\n<p>写一个方法将虚拟DOM转化为真实DOM？</p>\n</li>\n<li>\n<p>写一个方法将真实DOM转化为虚拟DOM？</p>\n</li>\n<li>\n<p>写一个方法获取指定窗口的尺寸大小</p>\n</li>\n<li>\n<p>写一个方法获取滚动条距离窗口顶部的距离</p>\n</li>\n<li>\n<p>写一个js方法，输入指定类型的选择器(id，class，tagName)可以返回匹配的DOM节，要求兼容和性能</p>\n</li>\n<li>\n<p>使用js写一个多文件上传的组件</p>\n</li>\n<li>\n<p>使用js写一个批量上传文件的组件</p>\n</li>\n<li>\n<p>写一个方法，当复制页面中的内容时，同时把版权信息也复制上</p>\n</li>\n<li>\n<p>实现多张图片合成一张的效果</p>\n</li>\n<li>\n<p>写个方法获取屏幕的DPI</p>\n</li>\n<li>\n<p>使用js实现一个图片剪裁的功能</p>\n</li>\n<li>\n<p>写一个获取页面中所有checkbox的方法</p>\n</li>\n<li>\n<p>用js写一个方法检测浏览器是否支持css3的属性</p>\n</li>\n<li>\n<p>写一个方法获取图片的方向</p>\n</li>\n<li>\n<p>写一个方法获取图片的exif信息</p>\n</li>\n<li>\n<p>写一个方法实现自定义右键菜单的功能</p>\n</li>\n<li>\n<p>写一个获取非行间样式的方法</p>\n</li>\n<li>\n<p>写一个方法粘贴复制的图片并显示出来</p>\n</li>\n<li>\n<p>使用js获取鼠标坐标</p>\n</li>\n<li>\n<p>js如何实现打印指定的区域（局部打印）？</p>\n</li>\n<li>\n<p>举例说明js如何拖拽排序？</p>\n</li>\n<li>\n<p>用原生JS封装插件的方式有哪些？</p>\n</li>\n</ul>\n<pre><code class=\"language-js\">;(function (global) { \n  &quot;use strict&quot;;\n  function MyPlugin(el, options) {\n    //some cod\n  };\n  MyPlugin.prototype = {\n    //定义方法\n    show: function () {\n      //some code\n    }\n };\n  if (typeof module !== 'undefined' &amp;&amp; module.exports) {    //兼容CommonJs规范 \n    module.exports = MyPlugin;\n  } else if (typeof define === 'function') {   //兼容AMD/CMD规范\n    define(function () {\n      return MyPlugin\n    })\n  } else {    //注册全局变量，兼容直接使用script标签引入插件\n    global.MyPlugin = MyPlugin;\n  }\n})(this);\n</code></pre>\n<h3>请实现如下的函数</h3>\n<pre><code class=\"language-js\">/*\n\t可以批量请求数据，所有的 URL 地址在 urls 参数中，同时可以通过 max 参数控制请求的并发度，当所有请求结束之后，需要执行 callback 回调函数。发请求的函数可以直接使用 fetch 即可\n*/\n</code></pre>\n<h3>按要求实现一个 sum 函数</h3>\n<pre><code class=\"language-js\">const a = sum(); // => a === 0\nconst b = sum(); // => b === 2\nconst c = sum(4)(5); // c === 9\nconst k = sum(n1)...(nk) // k === n1 + n2 + ... + nk\n</code></pre>\n<h3>已知函数 A，要求构造⼀个函数 B 继承 A（<a href=\"https://github.com/lgwebdream/FE-Interview/issues/333\">答案&amp;解析</a>）</h3>\n<pre><code class=\"language-js\">function A(name) {\n  this.name = name;\n}\nA.prototype.getName = function () {\n  console.log(this.name);\n};\n</code></pre>\n<h3>要求⽤不同⽅式对 A 进⾏改造实现 A.name 发⽣变化时⽴即执⾏ A.getName（<a href=\"https://github.com/lgwebdream/FE-Interview/issues/329\">答案&amp;解析</a>）</h3>\n<pre><code class=\"language-js\">/*\n\t已知对象A = {name: 'sfd', getName: function(){console.log(this.name)}},\n\t现要求⽤不同⽅式对A进⾏改造实现A.name发⽣变化时⽴即执⾏A.getName\n*/\n</code></pre>\n<h3>修改以下代码，使得最后⼀⾏代码能够输出数字 0-9（最好能给多种答案）（<a href=\"https://github.com/lgwebdream/FE-Interview/issues/328\">答案&amp;解析</a>）</h3>\n<pre><code class=\"language-js\">var arrys = [];\nfor (var i = 0; i < 10; i++) {\n  arrys.push(function () {\n    return i;\n  });\n}\narrys.forEach(function (fn) {\n  console.log(fn());\n}); //本⾏不能修改\n</code></pre>\n<h3>实现函数接受任意二叉树，求二叉树所有根到叶子路径组成的数字之和</h3>\n<pre><code class=\"language-js\">class TreeNode{\n  value:number\n  left?:TreeNode\n  right?:TreeNode\n}\nfunction getPathSum(root){\n  // your code\n}\n// 例子，一层二叉树如下定义，路径包括1 —> 2 ,1 -> 3\nconst node = new TreeNode();\nnode.value = 1;\nnode.left = new TreeNode();\nnode.left.value = 2;\nnode.right = new TreeNode();\nnode.right.value = 3;\ngetPathSum(node); // return 7 = (1+2) + (1+3)\n</code></pre>\n<h3>按要求实现代码</h3>\n<pre><code class=\"language-js\">// 给两个数组 [A1,A2,B1,B2,C1,C2,D1,D2] [A,B,C,D]\n// 输出 [A1,A2,A,B1,B2,B,C1,C2,C,D1,D2,D]\n</code></pre>\n<h3>请写一个函数，输出出多级嵌套结构的 Object 的所有 key 值</h3>\n<pre><code class=\"language-js\">var obj = {\n  a: &quot;12&quot;,\n  b: &quot;23&quot;,\n  first: {\n    c: &quot;34&quot;,\n    d: &quot;45&quot;,\n    second: { 3: &quot;56&quot;, f: &quot;67&quot;, three: { g: &quot;78&quot;, h: &quot;89&quot;, i: &quot;90&quot; } },\n  },\n};\n// => [a,b,c,d,e,f,g,h,i]\n</code></pre>\n<h3>动手实现一个 repeat 方法</h3>\n<pre><code class=\"language-js\">function repeat(func, times, wait) {\n  // TODO\n}\nconst repeatFunc = repeat(alert, 4, 3000);\n// 调用这个 repeatFunc (&quot;hellworld&quot;)，会alert4次 helloworld, 每次间隔3秒\n</code></pre>\n<h3>versions 是一个项目的版本号列表，因多人维护，不规则，动手实现一个版本号处理函数</h3>\n<pre><code class=\"language-js\">var versions = [&quot;1.45.0&quot;, &quot;1.5&quot;, &quot;6&quot;, &quot;3.3.3.3.3.3.3&quot;];\n// 要求从小到大排序，注意'1.45'比'1.5'大\nfunction sortVersion(versions) {\n  // TODO\n}\n// => ['1.5','1.45.0','3.3.3.3.3.3','6']\n</code></pre>\n<h3>实现以下代码</h3>\n<pre><code class=\"language-js\">function add() {\n  // your code\n}\nfunction one() {\n  // your code\n}\nfunction two() {\n  // your code\n}\nconsole.log(add(one(two()))); //3\nconsole.log(add(two(one()))); //3\n</code></pre>\n<h3>实现一个 setter 方法</h3>\n<pre><code class=\"language-js\">let setter = function (conten, key, value) {\n  // your code\n};\nlet n = {\n  a: {\n    b: {\n      c: { d: 1 },\n      bx: { y: 1 },\n    },\n    ax: { y: 1 },\n  },\n};\n// 修改值\nsetter(n, &quot;a.b.c.d&quot;, 3);\nconsole.log(n.a.b.c.d); //3\nsetter(n, &quot;a.b.bx&quot;, 1);\nconsole.log(n.b.bx); //1\n</code></pre>\n<h3>实现一个功能，发送请求 5s 时间后，如果没有数据返回，中断请求,提示错误</h3>\n<p>分类：JavaScript、编程题</p>\n<p><a href=\"https://github.com/lgwebdream/FE-Interview/issues/375\">答案&amp;解析</a></p>\n<p><br/></p>\n<h3>按照调用实例，实现下面的 Person 方法</h3>\n<pre><code class=\"language-js\">Person(&quot;Li&quot;);\n// 输出： Hi! This is Li!\n\nPerson(&quot;Dan&quot;).sleep(10).eat(&quot;dinner&quot;);\n// 输出：\n// Hi! This is Dan!\n// 等待10秒..\n// Wake up after 10\n// Eat dinner~\n\nPerson(&quot;Jerry&quot;).eat(&quot;dinner&quot;).eat(&quot;supper&quot;);\n// 输出：\n// Hi This is Jerry!\n// Eat dinner~\n// Eat supper~\n\nPerson(&quot;Smith&quot;).sleepFirst(5).eat(&quot;supper&quot;);\n// 输出：\n// 等待5秒\n// Wake up after 5\n// Hi This is Smith!\n// Eat supper\n</code></pre>\n<h3>按要求完成代码</h3>\n<pre><code class=\"language-js\">const timeout = (ms) =>\n  new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve();\n    }, ms);\n  });\nconst ajax1 = () =>\n  timeout(2000).then(() => {\n    console.log(&quot;1&quot;);\n    return 1;\n  });\nconst ajax2 = () =>\n  timeout(1000).then(() => {\n    console.log(&quot;2&quot;);\n    return 2;\n  });\nconst ajax3 = () =>\n  timeout(2000).then(() => {\n    console.log(&quot;3&quot;);\n    return 3;\n  });\nconst mergePromise = (ajaxArray) => {\n  // 1,2,3 done [1,2,3] 此处写代码 请写出ES6、ES3 2中解法\n};\nmergePromise([ajax1, ajax2, ajax3]).then((data) => {\n  console.log(&quot;done&quot;);\n  console.log(data); // data 为[1,2,3]\n});\n// 执行结果为：1 2 3 done [1,2,3]\n</code></pre>\n<h3>请修改代码能跳出死循环</h3>\n<pre><code class=\"language-js\">while (1) {\n  switch (&quot;yideng&quot;) {\n    case &quot;yideng&quot;:\n    //禁止直接写一句break\n  }\n}\n</code></pre>\n<h3>修改代码不造成死循环</h3>\n<pre><code class=\"language-js\">while(1){\n  console.log(Math.random());\n}\n</code></pre>\n<h3>实现一个打点计时器</h3>\n<pre><code class=\"language-js\">/* \n  1.从start至end,每隔100毫秒console.log一个数字，每次数字增幅为1\n  2.返回的对象中需要包含一个cancel方法，用于停止定时操作\n  3.第一个数字需要立即输出\n*/\n</code></pre>\n<h3>按要求完成题目</h3>\n<pre><code class=\"language-js\">/* \n  a)在不使用vue、react的前提下写代码解决一下问题\n    一个List页面上，含有1000个条目的待办列表，现其中100项在同一时间达到了过期时间，需要在对应项的text-node里添加“已过期”文字。需要尽可能减少dom重绘次数以提升性能。\n  b)尝试使用vue或react解决上述问题\n*/\n</code></pre>\n<h3>填充代码实现 template 方法</h3>\n<pre><code class=\"language-js\">var str = &quot;您好，<%=name%>。欢迎来到<%=location%>&quot;;\nfunction template(str) {\n  // your code\n  return obj => str.replace(/<%=([a-zA-Z]+)%>/g, (_, $1) => obj[$1] || '')\n}\nvar compiled = template(srt);\n// compiled的输出值为：“您好，张三。欢迎来到网易游戏”\ncompiled({ name: &quot;张三&quot;, location: &quot;网易游戏&quot; });\n</code></pre>\n<h3>有这样一个函数 A,要求在不改变原有函数 A 功能以及调用方式的情况下，使得每次调用该函数都能在控制台打印出“HelloWorld”</h3>\n<pre><code class=\"language-js\">function A() {\n  console.log(&quot;调用了函数A&quot;);\n}\n\n\nvar pA = new Proxy(A, {\n  apply () {\n    console.log('HelloWorld')\n  }\n})\n\npA();\n</code></pre>\n<ul>\n<li>\n<p>请手写实现一个拖拽</p>\n</li>\n<li>\n<p>请实现一个 cacheRequest 方法，保证发出多次同一个 ajax 请求时都能拿到数据，而实际上只发出一次请求</p>\n</li>\n<li>\n<p>请实现鼠标点击页面中的任意标签，alert 该标签的名称(注意兼容性)</p>\n</li>\n<li>\n<p>使用 JavaScript 实现 cookie 的设置、读取、删除</p>\n</li>\n<li>\n<p>用 html、css、js 模拟实现一个下拉框，使得下拉框在各个浏览器下的样式和行为完全一致，说出你的设计方案，并且重点说明功能设计时要考虑的因素。</p>\n</li>\n<li>\n<p>在一个 ul 里有 10 个 li,实现点击对应的 li,输出对应的下标</p>\n</li>\n<li>\n<p>用原生 js 实现自定义事件</p>\n</li>\n<li>\n<p>手写 EventEmitter 实现</p>\n</li>\n<li>\n<p>请用 JavaScript 代码实现事件代理</p>\n</li>\n<li>\n<p>请实现$on,$emit</p>\n</li>\n<li>\n<p>编写一个 Person 类，并创建两个不同的 Person 对象</p>\n</li>\n<li>\n<p>设计一个方法，专门用于网络请求的管理</p>\n</li>\n</ul>\n<pre><code class=\"language-js\">/**\n * 参考useRequest\n * Fetch类：请求的生命周期管理（init、before、loading、error、success、finally）\n\n * 错误重试\n * 轮询\n * 防抖节流\n * 缓存 &amp; SWR\n * 延迟请求\n */\n\nconst getData = ({ params, ms }) => {\n  return new Promise(resolve => {\n    setTimeout(() => resolve(params), ms)\n  })\n}\n\nconst logPlugin = (instance, options) => {\n  return {\n    exec: () => {\n      console.log('finally');\n    }\n  }\n}\n\nfunction FetchService (service, options, plugins) {\n  this.service = service;\n  this.options = options;\n  this.plugins = plugins;\n\n  this.run = async () => {\n    plugins.map(p => p(this, this.options).exec());\n    const res = await this.service(this.options);\n    this.options.result = res;\n  }\n}\n\nconst useRequestImplement = (service, options, plugins) => {\n\n  const fetchInstance = new FetchService(service, options, plugins);\n\n  fetchInstance.run(options);\n}\n\nconst useRequest = async (service, options, plugins) => {\n\n  useRequestImplement(service, options, [\n    ...(plugins || []),\n    logPlugin,\n  ]);\n}\n\nconst request = async () => {\n  const ans = useRequest(getData, { params: 1, ms: 3000 }, []);\n}\n\nrequest();\n</code></pre>\n<ul>\n<li>完成一个转换函数，将数字转换成对应的大写字母，满足下面的对应关系</li>\n</ul>\n<pre><code class=\"language-js\">// 1 => A\n// 2 => B\n// 3 => C\n// ...\n// 26 => Z\n// 27 => AA\n// 28 => AB\n// ...\n// 52 => AZ\n// 53 => BA\n// 54 => BB\n\n// 实现下方函数\nfunction convert(){\n    // todo\n}\n// 测试代码\nconst output1 = convert(1);\nconsole.log(output1); //A\nconst output2 = convert(26);\nconsole.log(output2);// Z\n</code></pre>\n<ul>\n<li>按要求实现代码</li>\n</ul>\n<pre><code class=\"language-js\">var items = [{ name: &quot;item1&quot; }, { name: &quot;item2&quot; }];\nvar str = '<div ali-for=&quot;item in items&quot;>{{item.name}}<div>';\n\nParseDom(str);\n// <div>item1</div><div>item2</div>\n\nfunction ParseDom(str) {\n  // your code\n}\n</code></pre>\n<ul>\n<li>\n<p>请实现一个 cacheRequest 方法，保证发出多次同一个 ajax 请求时都能拿到数据，而实际上只发出一次请求</p>\n</li>\n<li>\n<p>实现SuperTask</p>\n</li>\n</ul>\n<pre><code class=\"language-js\">function timeout(time){\n  return new Promise(resolve=>{\n    setTimeout(()=>{\n      resolve()\n    },time);\n  })\n}\nconst superTask = new SuperTask();\nfunction addTask(time,name){\n  superTask\n  .add(()=>timeout(time))\n  .then(()=>{\n    console.log(`任务${name}完成`);\n  })\n}\n\naddTask(10000,1) // 10s后输出：任务1完成\naddTask(5000,2) // 5s后输出：任务2完成\naddTask(3000,3)//8s后输出：任务3完成\naddTask(4000,4)//12s后输出：任务4完成\naddTask(5000,5)// 15s后输出：任务5完成\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp如何写一个按钮组件0015.tsx":
/*!************************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp如何写一个按钮组件0015.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h2>按钮组件</h2>\n<p>按钮的业务属性是可交互，点击可以给到某种反馈。首先是要吸引你可以点击它，然后点击它之后能有一些反应（变化）。因此我们可以定义按钮组件的功能</p>\n<ol>\n<li>可以吸引点击：能够自动执行动画，包括但不仅限于呼吸、抖动、背景光旋转等</li>\n<li>给予某种反馈：点击能有一些变化，包括但不仅限于大小、背景色、背景图、文案等</li>\n<li>完成自定义业务：点击之后能执行指定业务，包括但不仅限于onClick回调函数、</li>\n<li>通用按钮组件：能从外部自定义样式，按钮只做核心通用(点击之后形变+按钮的默认样式)</li>\n</ol>\n<h2>技术方案和输入输出</h2>\n<p>执行自定义动画可以通过添加className或者style的形式实现。点击之后的变化可以通过监听addEventListener touchstart和touchend来实现，如果考虑pc端兼容性，可以通过mousedown、mouseup来实现。完成指定业务可以通过绑定点击事件，外部传入回调函数来实现。通用按钮可以通过props.chilren外部动态传入组件。现在我们可以定义入参和出参了</p>\n<h3>入参</h3>\n<pre><code class=\"language-ts\">interface IButton {\n  children: ReactElement | string;\n  onClick?: (event: TouchEvent) => {};\n  className?: string;\n  style?: CSSStyleDeclaration;\n}\n</code></pre>\n<h3>出参</h3>\n<pre><code class=\"language-jsx\">// 例如\n<Button className={className} onClick={handleClk}><img/></Button>\n</code></pre>\n<h2>实现参考代码</h2>\n<pre><code class=\"language-tsx\">\nexport default function Button({ children, onClick, className, style }: IButton) {\n  const btnRef = useRef<HTMLDivElement | null>(null);\n  useEffect(() => {\n    const dom = btnRef.current as HTMLDivElement;\n\n    const handleStart = () => dom.style.transform = 'scale(0.9)';\n    const handleEnd = () => dom.style.transform = 'scale(1)';\n\n    dom.addEventListener('touchstart', handleStart)\n    document.addEventListener('touchend', handleEnd)\n    return () => {\n      dom.removeEventListener('touchstart', handleStart);\n      document.removeEventListener('touchend', handleEnd);\n    }\n  }, [])\n  return <div\n    style={style}\n    className={classnames('btn', className)}\n    onClick={onClick}\n    ref={btnRef}\n  >\n    {children}\n  </div>\n}\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp如何封装一个插槽0016.tsx":
/*!***********************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp如何封装一个插槽0016.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: ""
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp字符串0039.tsx":
/*!******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp字符串0039.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h2>\u5B57\u7B26\u4E32</h2>\n<ul>\n<li>\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u53BB\u9664\u5B57\u7B26\u4E32\u4E2D\u7684\u7A7A\u683C</li>\n</ul>\n<pre><code class=\"language-js\">const replaceEmpty = (str) => {\n  return str.replace(/\\s/g, '');\n}\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u5728\u7ED9\u5B9A\u4E00\u4E2Aurl\u5B57\u7B26\u4E32\u83B7\u53D6\u53C2\u6570\u7684\u65B9\u6CD5</li>\n</ul>\n<pre><code class=\"language-js\">const getUrlParams = (str) => {\n\n  const paramArr = str.split('?')[1].split('&amp;');\n  const obj = {};\n  for (const item of paramArr) {\n    const arr = item.split('=');\n    if (!arr[1]) {\n      obj[arr[0]] = true;\n    } else {\n      obj[arr[0]] = arr[1];\n    }\n  }\n  return obj;\n}\n\nconsole.log(getUrlParams('https://baidu.com?a=1&amp;b=undefined&amp;c'))\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u5224\u65AD\u662F\u5426\u56DE\u6587</li>\n</ul>\n<pre><code class=\"language-js\">const isPalindrome = (str) => {\n  let left = 0, right = str.length - 1;\n  while (left < right) {\n    if (str[left++] === str[right--]) {\n      return false;\n    }\n  }\n  return true;\n}\n\nconsole.log(isPalindrome('abd ba'))\n</code></pre>\n<ul>\n<li>\u7ED9\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32 s\uFF0C\u6700\u591A\u5220\u9664\u4E00\u4E2A\u5B57\u7B26\u3002\u5224\u65AD\u662F\u5426\u80FD\u6210\u4E3A\u56DE\u6587\u5B57\u7B26\u4E32\u3002 \u4F8B\u5982\u8F93\u5165\u201Caba\u201D\uFF0C\u8F93\u51FA\u201CTrue\u201D\uFF1B\u8F93\u5165\u201Cabca\u201D,\u8F93\u51FA\u201CTrue\u201D</li>\n</ul>\n<pre><code class=\"language-js\">const check = (str, left, right) => {\n  while (left < right) {\n    if (str[left++] !== str[right--]) return false;\n  }\n  return true;\n}\n\nconst isPalindromeBydel1 = (s) => {\n  let left = 0;\n  let right = s.length - 1;\n  while (left < right) {\n    if (s[left] != s[right]) {\n      return check(s, left, right - 1) || check(s, left + 1, right);\n    } else {\n      ++left;\n      --right;\n    }\n  }\n  return true;\n}\n\nconsole.log(isPalindromeBydel1('abca'))\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B9E\u73B0\u5B57\u7B26\u4E32\u7684\u53CD\u8F6C</li>\n</ul>\n<pre><code class=\"language-js\">// \u65B9\u6CD5\u4E00\nconst strReverse1 = (str) => {\n  return str.split('').reverse().join('');\n}\n// \u65B9\u6CD5\u4E8C\nconst strReverse2 = (str) => {\n  let result = '';\n\n  for (let i = str.length - 1; i >= 0; i--) {\n    result += str[i];\n  }\n  return result;\n}\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B9E\u73B0\u4E24\u4E2A\u5927\u6570\u76F8\u52A0</li>\n</ul>\n<pre><code class=\"language-js\">const sum = (a, b) => {\n  const len = Math.max(a.length, b.length);\n  a = a.padStart(len, '0')\n  b = b.padStart(len, '0')\n  let curry = 0;\n  let result = ''\n  for (let i = len - 1; i >= 0; i--) {\n    const sum = +a[i] + +b[i] + curry;\n\n    result = sum % 9 + result;\n    curry = Math.floor(sum / 9);\n  }\n  return curry ? curry + result : result;\n}\n//\u6D4B\u8BD5\nconsole.log(sum('123456789099888','111111111111111111111111111111111111'));\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u5224\u65AD\u4E00\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u4E3A\u53E6\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u5B50\u4E32</li>\n</ul>\n<pre><code class=\"language-js\">// \u65B9\u5F0F\u4E00\nconst isSubStr1 = (str1, str2) => {\n  const longStr = str1.length > str2.length ? str1 : str2;\n  const shortStr = str1.length < str2.length ? str1 : str2;\n\n  return longStr.indexOf(shortStr) > -1 ? true : false;\n}\n// \u65B9\u5F0F\u4E8C\nconst isSubStr2 = (str1, str2) => {\n  const longStr = str1.length > str2.length ? str1 : str2;\n  const shortStr = str1.length < str2.length ? str1 : str2;\n\n  for (let i = 0; i < longStr.length - shortStr.length; i++) {\n    const s = longStr.slice(i, shortStr.length);\n    if (s === shortStr) {\n      return true;\n    }\n  }\n  return false;\n}\n// \u65B9\u5F0F\u4E09\nconst isSubStr3 = (str1, str2) => {\n  return str1.includes(str2) || str2.includes(str1);\n}\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u683C\u5F0F\u5316\u91D1\u989D\u7684\u65B9\u6CD5</li>\n<li>\u5C06 153812.7 \u8F6C\u5316\u4E3A 153,812.7</li>\n<li>\u5B9E\u73B0\u683C\u5F0F\u5316\u8F93\u51FA\uFF0C\u6BD4\u5982\u8F93\u5165 999999999\uFF0C\u8F93\u51FA 999,999,999</li>\n<li>\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B9E\u73B0\u5B57\u7B26\u4E32\u6570\u5B57\u7684\u683C\u5F0F\u5316\uFF0C\u4F8B\u5982100000->100,000</li>\n</ul>\n<pre><code class=\"language-js\">// \u65B9\u5F0F\u4E00\uFF1A\u6B63\u5219\nconst formatNumStr = (numStr) => {\n  return numStr.replace(/(?=\\B(\\d{3})+$)/g, ',')\n}\n\nconsole.log(formatNumStr('100000000'))\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B9E\u73B0\u989C\u8272\u8F6C\u6362 'rgb(255, 255, 255)' -> '#FFFFFF' \u7684\u591A\u79CD\u601D\u8DEF</li>\n</ul>\n<pre><code class=\"language-js\">const rgb2hex=(rgb)=>{\n  const rgbList = rgb.match(/\\d+/g);\n  const hex = (n) => {\n    return (&quot;0&quot; + Number(n).toString(16)).slice(-2);\n  }\n  return rgbList.reduce((pre,cur)=>pre+hex(cur),'#').toUpperCase()\n}\n\n//\u6D4B\u8BD5\nconsole.log(rgb2hex('rgb(255,255,255)'));\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B9E\u73B0\u989C\u8272\u8F6C\u6362 '#FFFFFF' -> 'rgb(255, 255, 255)' \u7684\u591A\u79CD\u601D\u8DEF</li>\n</ul>\n<pre><code class=\"language-js\">const hex2rgb=(hex)=>{\n  const ret = [];\n  for(let i = 1; i < hex.length; i+=2) {\n    const str = `0x${String(hex[i])}${String(hex[i+1])}`;\n    ret.push(parseInt(str));\n  }\n  return `rgb(${ret.join(',')})`;\n}\n//\u6D4B\u8BD5\nconsole.log(hex2rgb('#000000'));\n</code></pre>\n<ul>\n<li>\u5B9E\u73B0normalize\u51FD\u6570\uFF0C\u80FD\u5C06\u8F93\u5165\u7684\u7279\u5B9A\u7684\u5B57\u7B26\u4E32\u8F6C\u5316\u4E3A\u7279\u5B9A\u7684\u7ED3\u6784\u5316\u6570\u636E\uFF0C\u5B57\u7B26\u4E32\u4EC5\u7531\u5C0F\u5199\u5B57\u6BCD\u548C [] \u7EC4\u6210\uFF0C\u4E14\u5B57\u7B26\u4E32\u4E0D\u4F1A\u5305\u542B\u591A\u4F59\u7684\u7A7A\u683C\u3002\u793A\u4F8B\u4E00: 'abc' --> {value: 'abc'}\u3002\u793A\u4F8B\u4E8C\uFF1A'[abc[bcd[def]]]' --> {value: 'abc',children: {value: 'bcd', children: {value: 'def'}}}</li>\n</ul>\n<pre><code class=\"language-js\">function normalize (str) {\n  let treeObj = {};\n  str.split(/[\\[\\]]/g).filter(Boolean).reduce((object, curr, index, a) => {\n    object.value = curr;\n    if (index !== a.length - 1) {\n      return object.children = {}\n    }\n  }, treeObj);\n  return treeObj;\n}\n// \u6D4B\u8BD5\nconsole.log(normalize('[abc[bcd[def]]]'));\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5C06\u5B57\u7B26\u4E32\u4E2D\u7684\u5355\u8BCD\u5012\u8F6C\u540E\u8F93\u51FA\uFF0C\u5982\uFF1A<code>my love</code> -> <code>ym evol</code></li>\n</ul>\n<pre><code class=\"language-js\">const reverseWords = (str) => {\n  return str.split(' ').map(item => {\n    return item.split('').reverse().join('')\n  }).join(' ');;\n}\n// \u6D4B\u8BD5\nconst str = 'my love';\nconsole.log(reverseWords(str));\n</code></pre>\n<ul>\n<li>\u5199\u4E2A\u65B9\u6CD5\uFF0C\u627E\u51FA\u6307\u5B9A\u5B57\u7B26\u4E32\u4E2D\u91CD\u590D\u6700\u591A\u7684\u5B57\u7B26\u53CA\u5176\u957F\u5EA6</li>\n</ul>\n<pre><code class=\"language-js\">function getMaxChar (str) {\n  const obj = {}\n  for (let i = 0; i < str.length; i++) {\n    if (obj[str[i]]) {\n      obj[str[i]] += 1\n    } else {\n      obj[str[i]] = 1;\n    }\n  }\n  let maxChar = [], maxCount = -1\n  for (let char in obj) {\n    if (!obj.hasOwnProperty(char)) {\n      continue;\n    }\n    if (obj[char] === maxCount) {\n      maxChar.push(char);\n    } else if (obj[char] > maxCount) {\n      maxChar = [char];\n      maxCount = obj[char];\n    }\n  }\n  return { maxChar, maxCount };\n}\n// \u6D4B\u8BD5\nconst str = 'abbc';\nconst { maxChar, maxCount } = getMaxChar(str);\nconsole.log(maxChar, maxCount);\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u5B57\u7B26\u4E32\u91CD\u590D\u7684repeat\u51FD\u6570\uFF0C\u4F8B\u5982repeat('abc',4) // abcabcabcabc</li>\n</ul>\n<pre><code class=\"language-js\">// \u65B9\u6CD5\u4E00\uFF1Anew Array + join\nconst repeat = (str, count) => {\n  return (new Array(count + 1)).join(str)\n}\n//\u65B9\u6CD5\u4E8C:\u9012\u5F52\nconst repeat = (str, count) => {\n  return count > 0 ? str.concat(repeat(str, --count)) : ''\n}\n// \u65B9\u6CD5\u4E09\uFF1A\u5FAA\u73AF\n\n//\u6D4B\u8BD5\nconst str = 'abc';\nconst count = 5;\nconsole.log(repeat(str, count))\n</code></pre>\n<ul>\n<li>\u8BF7\u5199\u51FA\u4E00\u4E2A\u51FD\u6570\u6C42\u51FAN\u7684\u9636\u4E58\uFF08\u5373N!\uFF09</li>\n</ul>\n<pre><code class=\"language-js\">// \u9012\u5F52\nfunction factorialByRecursion (n) {\n  if (n === 1) return n;\n  return n * factorial(n - 1)\n}\n//\u5FAA\u73AF\nfunction factorialByLoop (n) {\n  let sum = 1;\n  for (let i = 1; i <= n; i++) {\n    sum *= i;\n  }\n  return sum;\n}\n// \u6D4B\u8BD5\nconsole.log(factorialByLoop(10))\n</code></pre>\n<ul>\n<li>\u627E\u5230\u5B57\u7B26\u4E32\u4E2D\u6700\u957F\u7684\u5355\u8BCD\uFF0C\u5E76\u8FD4\u56DE\u5B83\u7684\u957F\u5EA6</li>\n</ul>\n<pre><code class=\"language-js\">function getMaxStr (str) {\n  const arr = str.split(' ');\n  return arr.map(item => item.length).reduce((val, cur) => val > cur ? val : cur);\n}\n\nconst str = 'my name is jason'\nconsole.log(getMaxStr(str));\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u65B9\u6CD5\u628A\u4E0B\u5212\u7EBF\u547D\u540D\u8F6C\u6210\u5927\u9A7C\u5CF0\u547D\u540D</li>\n<li>\u5199\u4E00\u4E2A\u65B9\u6CD5\u628A\u4E2D\u5212\u7EBF\u547D\u540D\u8F6C\u6362\u6210\u5C0F\u9A7C\u5CF0\u547D\u540D</li>\n<li>\u5199\u4E00\u4E2A\u65B9\u6CD5\u628A\u5C0F\u9A7C\u5CF0\u547D\u540D\u8F6C\u6362\u6210\u4E2D\u5212\u7EBF\u547D\u540D</li>\n</ul>\n<pre><code class=\"language-js\">// \u547D\u540D\u65B9\u5F0F\u4E2D\u5212\u7EBF\u6539\u5C0F\u9A7C\u5CF0\nconst format2Camel = function (str) {\n  return str.replace(/-[a-zA-Z]/g, match => match.replace('-', '').toUpperCase())\n}\n// \u547D\u540D\u65B9\u5F0F\u5C0F\u9A7C\u5CF0\u6539\u4E2D\u5212\u7EBF\nconst format2Line = function (str) {\n  return str.replace(/[A-Z]/g, match => '-' + match.toLowerCase());\n}\n\nconst str = 'elButtonList';\nconst ans = format2Line(str);\nconsole.log(ans);\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u65B9\u6CD5\u628A0\u548C1\u4E92\u8F6C\uFF080\u7F6E1\uFF0C1\u7F6E0\uFF09</li>\n</ul>\n<pre><code class=\"language-js\">const convert = num=>num^1;\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u65B9\u6CD5\u9A8C\u8BC1\u662F\u5426\u4E3A\u4E2D\u6587</li>\n</ul>\n<pre><code class=\"language-js\">const isContainChinese = (str) => /[\\u4e00-\\u9FFF]/g.test(str)\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u9A8C\u8BC1\u8EAB\u4EFD\u8BC1\u53F7\u7684\u65B9\u6CD5</li>\n</ul>\n<pre><code class=\"language-js\">const isValidIdCard = str =>/^[1-9]\\d{5}(18|19|20)\\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$/g.test(str)\n</code></pre>\n<ul>\n<li>\u8F93\u5165\u4E00\u4E2A\u56DB\u5219\u6DF7\u5408\u8FD0\u7B97\u7684\u8868\u8FBE\u5F0F\uFF0C\u8BF7\u5199\u4E2A\u65B9\u6CD5\u6C42\u5B83\u7684\u503C</li>\n<li>\u5206\u522B\u5C01\u88C5\u7CBE\u786E\u8FD0\u7B97\u7684\u52A0\u51CF\u4E58\u9664\u56DB\u4E2A\u65B9\u6CD5</li>\n</ul>\n<pre><code class=\"language-js\">// \u5206\u522B\u5C01\u88C5\u7CBE\u786E\u8FD0\u7B97\u7684\u52A0\u51CF\u4E58\u9664\u56DB\u4E2A\u65B9\u6CD5\n\nString.prototype.numberAdd = function (number) {\n\n  const Max = Math.max(this.length, number.length);\n  let curry = 0;\n  let n1 = this.padStart(Max, '0');\n  let n2 = number.padStart(Max, '0');\n  let sum = '';\n  for (let i = Max - 1; i >= 0; i--) {\n    const temp = Number(n1[i]) + Number(n2[i]) + curry;\n    sum = temp % 10 + sum;\n    curry = temp > 9 ? 1 : 0;\n  }\n  return curry === 1 ? '1' + sum : sum;\n}\nString.prototype.numberMinus = function (number) {\n  const Max = Math.max(this.length, number.length);\n  let curry = 0;\n\n  let flag = true;\n  let n1 = this.padStart(Max, '0');\n  let n2 = number.padStart(Max, '0');\n  if (Number(this) <= (number)) {\n    n1 = number.padStart(Max, '0');\n    n2 = this.padStart(Max, '0');\n    flag = false;\n  }\n  let ans = ''\n  for (let i = Max - 1; i >= 0; i--) {\n    let num1 = Number(n1[i]), num2 = Number(n2[i])\n    curry === 1 &amp;&amp; num1--;\n    curry = num1 < num2 ? 1 : 0;\n    const temp = num1 + 10 * curry - num2;\n\n    ans = temp + ans;\n  }\n  return flag ? ans : `-${Number(ans)}`;\n}\nString.prototype.numberMultiply = function (number) {\n  const n1 = Number(this);\n  const n2 = Number(number);\n  const min = n1 < n2 ? n1 : n2;\n  const max = n1 < n2 ? number : this;\n  let sum = '';\n  for (let i = 0; i < min; i++) {\n    sum = sum.numberAdd(max)\n  }\n  return sum;\n}\nString.prototype.numberDivide = function (number) {\n  let t1 = 0\n  let t2 = 0\n  let r1\n  let r2\n  try {\n    t1 = this.split('.')[1].length\n    t2 = number.split('.')[1].length\n  } catch (e) { }\n  r1 = Number(this.replace('.', ''))\n  r2 = Number(number.replace('.', ''))\n  return (r1 / r2) * Math.pow(10, t2 - t1)\n}\n\nconsole.log('2'.numberDivide('3'));\n</code></pre>\n<ul>\n<li>\u968F\u673A\u751F\u6210\u4E00\u4E2A\u6307\u5B9A\u957F\u5EA6\u7684\u9A8C\u8BC1\u7801</li>\n<li>\u5199\u4E00\u4E2A\u65B9\u6CD5\u751F\u6210\u4E0D\u91CD\u590D\u7684\u7528\u6237ID</li>\n<li>\u5199\u4E00\u4E2A\u65B9\u6CD5\u968F\u673A\u751F\u6210\u6307\u5B9A\u4F4D\u6570\u7684\u5B57\u7B26\u4E32</li>\n</ul>\n<pre><code class=\"language-js\">const generateStr = (n) => {\n  let str = Math.random().toString(36).substr(2);\n  return str.length >= n ? str.substr(0, n) : str + generateStr(n - str.length);\n}\n\nconsole.log(generateStr(15));\n</code></pre>\n<ul>\n<li>\u53BB\u9664\u5B57\u7B26\u4E32\u4E2D\u6700\u540E\u4E00\u4E2A\u6307\u5B9A\u7684\u5B57\u7B26</li>\n</ul>\n<pre><code class=\"language-js\">\nfunction delLast(str,target) {\n  let reg =new RegExp(`${target}(?=([^${target}]*)$)`)\n  return str.replace(reg,'')\n}\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u65B9\u6CD5\u68C0\u6D4B\u9875\u9762\u4E2D\u7684\u6240\u6709\u6807\u7B7E\u662F\u5426\u6B63\u786E\u95ED\u5408</li>\n</ul>\n<pre><code class=\"language-js\">const areAllTagsClosed = html => {\n\tconst template = document.createElement('template');\n\ttemplate.innerHTML = html;\n\treturn template.innerHTML === html;\n}\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u52A0\u5BC6\uFF08\u89E3\u5BC6\uFF09\u5B57\u7B26\u4E32\u7684\u65B9\u6CD5</li>\n</ul>\n<pre><code class=\"language-js\">//\u52A0\u5BC6\nfunction encryptStr (str, key) {\n  let ans = '', b, b1, b2, b3;\n  const len = key.length;\n  for (let i = 0; i < str.length; i++) {\n    b = str.charCodeAt(i);\n    b1 = b % len;\n    b = (b - b1) / len;\n    b2 = b % len;\n    b = (b - b2) / len;\n    b3 = b % len;\n    ans += key[b1] + key[b2] + key[b3];\n  }\n  return ans;\n}\n// \u89E3\u5BC6\nfunction decryptStr (str, key) {\n  const keyLen = key.length;\n  const ansLen = Math.floor(str.length / 3);\n  let ans = new Array(ansLen), b1, b2, b3, d = 0;\n  for (let i = 0; i < ansLen; i++) {\n    b1 = key.indexOf(str.charAt(d++));\n    b2 = key.indexOf(str.charAt(d++));\n    b3 = key.indexOf(str.charAt(d++));\n    ans[i] = b1 + b2 * keyLen + b3 * keyLen * keyLen;\n  }\n  return String.fromCharCode(...ans);\n}\nconst key = &quot;0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ&quot;;\nconst str = '\xA5'\nconst s1 = encryptStr(str, key)\nconst s2 = decryptStr(s1, key)\n\nconsole.log(s1, s2)\n</code></pre>\n<ul>\n<li>\u7EDF\u8BA1\u67D0\u4E00\u5B57\u7B26\u6216\u5B57\u7B26\u4E32\u5728\u53E6\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u7684\u6B21\u6570</li>\n</ul>\n<pre><code class=\"language-js\">const getStrCount = (str, target) => str.match(new RegExp(target, 'g')).length;\n\nconsole.log(getStrCount('abcabc', 'ab'))\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u53BB\u9664\u5236\u8868\u7B26\u548C\u6362\u884C\u7B26\u7684\u65B9\u6CD5</li>\n</ul>\n<pre><code class=\"language-js\">const deTab = (str) => str.replace(/[\\t\\r\\f\\n]*/g, '')\nconsole.log(deTab(\n  `abc\n\n`))\n\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u628A\u5B57\u7B26\u4E32\u5927\u5C0F\u5199\u5207\u6362\u7684\u65B9\u6CD5</li>\n</ul>\n<pre><code class=\"language-js\">\nfunction isUpperCase (char) {\n  return str.charCodeAt(i) >= 65 &amp;&amp; str.charCodeAt(i) <= 90\n}\nfunction changeCharCode (str) {\n  let ans = ''\n  for (let i = 0; i < str.length; i++) {\n    ans += isUpperCase(str[i]) ? str[i].toLowerCase() : str[i].toUpperCase();\n  }\n  return ans;\n}\n\nconsole.log(changeCharCode('abcARF'));\n</code></pre>\n<ul>\n<li>\u5982\u4F55\u8BC6\u522B\u51FA\u5B57\u7B26\u4E32\u4E2D\u7684\u56DE\u8F66\\n\u5E76\u8FDB\u884C\u6362\u884C\uFF1F</li>\n</ul>\n<pre><code class=\"language-js\">const replaceReturn = (str) =>str.replace(/\\n/g, '<br/>');\n</code></pre>\n<ul>\n<li>\u8BA1\u7B97\u7ED9\u5B9A\u7684\u5B57\u7B26\u4E32\u6240\u5360\u7684\u5B57\u8282\u6570</li>\n</ul>\n<pre><code class=\"language-js\">const isSingleByte = (char) => /^[\\u0000-\\u00ff]$/.test(char)\nfunction getStrBytes (str) {\n  let count = 0;\n  for (let i = 0; i < str.length; i++) {\n    isSingleByte(str[i]) ? count++ : count += 2;\n  }\n  return count;\n}\n\nconsole.log(getStrBytes('hello \u4E2D\u56FD'))\n</code></pre>\n<ul>\n<li>\u5199\u4E2A\u65B9\u6CD5\u627E\u51FA\u9875\u9762\u4E2D\u9664\u4E86\u6570\u5B57\u548C\u82F1\u6587\u5B57\u6BCD\u5916\u7684\u6240\u6709\u7279\u6B8A\u7279\u53F7</li>\n</ul>\n<pre><code class=\"language-js\">function getSpecialChar (str) {\n  return str.replace(/[A-Za-z0-9]/g, '')\n}\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5F53\u7ED9\u5B9A\u6570\u5B57\u4F4D\u6570\u4E0D\u8DB38\u4F4D\u65F6\uFF0C\u5219\u5728\u5DE6\u8FB9\u8865\u51450\u4EE5\u8865\u8DB38\u4F4D\u6570\u7684\u65B9\u6CD5</li>\n</ul>\n<pre><code class=\"language-js\">function padStartby0 (num, str) {\n  if (num < str.length) return str;\n  return new Array(num - str.length).fill(0).join('') + str;\n}\n\nconsole.log(padStartby0(2, '123'))\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u65B9\u6CD5\u5C06\u5B57\u7B26\u4E32\u4E2D\u7684\u5236\u8868\u7B26\u5168\u90E8\u66FF\u6362\u4E3A\u9017\u53F7</li>\n</ul>\n<pre><code class=\"language-js\">function replaceTab2Comma (str) {\n  return str.replace(/\\u0020/g, ',')\n}\n\nconsole.log(replaceTab2Comma('abcd  dfed'))\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u4F7F\u4E24\u4E2A\u6574\u6570\u8FDB\u884C\u4EA4\u6362\u7684\u65B9\u6CD5\uFF08\u4E0D\u80FD\u4F7F\u7528\u4E34\u65F6\u53D8\u91CF\uFF09</li>\n</ul>\n<pre><code class=\"language-js\">let a =1,b=13\na ^= b;\nb ^= a;\na ^= b;\n</code></pre>\n<ul>\n<li>\u7ED9\u5B9A\u7279\u5B9A\u7684\u5B57\u7B26\u4E32\uFF0C\u5199\u4E2A\u65B9\u6CD5\u5224\u65AD\u662F\u5426\u4EE5\u5143\u97F3\u5B57\u6BCD\u7ED3\u5C3E</li>\n</ul>\n<pre><code class=\"language-js\">function isEndWithVowel (str) {\n  return /[a,e,i,o,u]$/i.test(str)\n}\n\nconsole.log(isEndWithVowel('hellU'))\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u65B9\u6CD5\u627E\u51FA\u4E00\u6BB5\u8BDD\u91CC\u9762\u51FA\u73B0\u9891\u7387\u6700\u591A\u7684\u8BCD</li>\n</ul>\n<pre><code class=\"language-js\">\nfunction getHighestRateWord (texts) {\n  const arr = (',' + texts).split(/\\W+/)\n  let words = '';\n  let count = -1;\n  const map = {};\n  for (let item of arr) {\n    item = item.toLowerCase();\n    map[item] = (map[item] || 0) + 1;\n    if (count < map[item]) {\n      words = item;\n      count = map[item]\n    }\n  }\n  return { words, count }\n}\nconst str = 'I have a pen, I have an apple, Uh! apple pen. Pen pineapple apple pen.'\n\nconsole.log(getHighestRateWord(str))\n</code></pre>\n<ul>\n<li>\u963F\u62C9\u4F2F\u6570\u5B57\u548C\u4E2D\u6587\u6570\u5B57\u7684\u4E92\u8F6C\u7684\u65B9\u6CD5,\u4F8B\u5982\uFF1A101\u8F6C\u6210\u4E00\u767E\u96F6\u4E00\u3001\u4E00\u767E\u96F6\u4E00\u8F6C\u6210101</li>\n</ul>\n<pre><code class=\"language-js\">// \u6765\u6E90\uFF1Ahttps://juejin.cn/post/6892372242143903758\nfunction NumberConvert () {\n  this.NumberMap = '\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D';\n  this.UnitMap = {\n    '\u5341': 10,\n    '\u767E': 100,\n    '\u5343': 1000,\n    '\u4E07': 10000,\n    '\u4EBF': 100000000\n  }\n  this.ChinaUnit = [''\n    , '\u5341', '\u767E', '\u5343', '\u4E07'\n    , '\u5341', '\u767E', '\u5343', '\u4EBF'\n    , '\u5341', '\u767E', '\u5343', '\u4E07'\n    , '\u5341', '\u767E', '\u5343', '\u4EBF'\n  ];\n  // \n  this.arabic2China = function (num) {\n    if (!num || isNaN(num)) {\n      return &quot;\u96F6&quot;;\n    }\n    const str = String(num);\n    const len = str.length;\n    let result = &quot;&quot;;\n    for (let i = 0; i < len; i++) {\n      // \u53CD\u5411\u6620\u5C04\u6570\u5B57\n      const number = this.NumberMap[str[len - 1 - i]];\n      // \u6B63\u5411\u6620\u5C04\u5355\u4F4D\n      const unit = this.ChinaUnit[i];\n      result = number + unit + result;\n    }\n    return result\n      .replace(/\u96F6(\u5343|\u767E|\u5341)/g, '\u96F6')\n      .replace(/\u5341\u96F6/g, '\u5341')\n      .replace(/\u96F6+/g, '\u96F6')\n      .replace(/\u96F6\u4EBF/g, '\u4EBF')\n      .replace(/\u96F6\u4E07/g, '\u4E07')\n      .replace(/\u4EBF\u4E07/g, '\u4EBF')\n      .replace(/\u96F6+$/, '')\n      .replace(/^\u4E00\u5341/g, '\u5341');\n  }\n  this._transform = function (str) {\n    if (!str) return 0;\n    const stack = [];\n    for (let i = 0; i < str.length; i++) {\n      const n = this.NumberMap.indexOf(str[i]);\n      const u = this.UnitMap[str[i]];\n      if (n >= 0) stack.push(n)\n      if (u >= 0) stack.push((stack.pop()) * u)\n    }\n    return stack.reduce((acc, item) => acc + item, 0);\n  }\n  this._format = function (str) {\n    return str[0] === '\u5341' ? `\u4E00${str}` : str\n  };\n  this.china2Arabic = function (str) {\n    const splitChar = ['\u4EBF', '\u4E07'];\n    let s = str;\n    for (const char of splitChar) {\n      const arr = s.split(char);\n      if (arr.length === 2) {\n        return this._transform(this._format(arr[0])) * this.UnitMap[char] + this.china2Arabic(arr[1]);\n      }\n      s = arr[0];\n    }\n    return this._transform(this._format(s));\n  }\n}\n\n\nconst convert = new NumberConvert();\nconst s = convert.arabic2China(8)\nconst n = convert.china2Arabic(s);\nconsole.log(s, n)\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u6C49\u5B57\u4E0EUnicode\u7801\u7684\u4E92\u8F6C\u7684\u65B9\u6CD5</li>\n</ul>\n<pre><code class=\"language-js\">// \u6C49\u5B57 -> unicode\u7F16\u7801\nfunction str2Unicode (str) {\n  let result = ''\n  for (let i = 0; i < str.length; i++) {\n\n    result += `&amp;#${str.charCodeAt(i)};`;\n  }\n  return result;\n}\n// unicode\u7F16\u7801\u4E32 -> \u6C49\u5B57\nfunction unicode2Str (unicode) {\n  const code = unicode.match(/&amp;#(\\d+);/g);\n  let result = '';\n  for (let i = 0; i < code.length; i++) {\n    result += String.fromCharCode(code[i].replace(/[&amp;#;]/g, ''))\n  }\n  return result;\n}\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u5BC6\u7801\u751F\u6210\u5668\uFF0C\u5E76\u540C\u65F6\u5199\u4E00\u4E2A\u5BC6\u7801\u5F3A\u5EA6\u6821\u9A8C\u7684\u65B9\u6CD5</li>\n</ul>\n<pre><code class=\"language-js\">function checkStrength (password) {\n  const regArr = [\n    /[a-z]/g,// \u5C0F\u5199\n    /[A-Z]/g, // \u5927\u5199\n    /[0-9]/g,// \u6570\u5B57\n    /[!@#$%^&amp;*()_+=<>?:{}]/g // \u7279\u6B8A\u5B57\u7B26\n  ]\n  let level = 0;\n  for (const reg of regArr) {\n    if (reg.test(password)) {\n      level++\n    }\n  }\n  return level;\n}\n\n// \u5728[start,end]\u533A\u95F4\u5185\u751F\u6210\u4E00\u4E2A\u968F\u673A\u6574\u6570\nconst getRandom = (start, end) => start + Math.floor(Math.random() * (end - start));\n// \u5728[start,end]\u533A\u95F4\u91CC\u751F\u6210n\u4E2A\u4E0D\u91CD\u590D\u7684\u968F\u673A\u6574\u6570\nconst getRandomN = (n, start, end) => {\n  const set = new Set();\n  while (set.size < n) set.add(getRandom(start, end));\n  return [...set];\n}\n// \u751F\u6210\u5F3A\u5EA6\u4E3Alevel\uFF0C\u957F\u5EA6\u4E3An\u7684\u5BC6\u7801\u4E32\nfunction getPassword (n, level) {\n\n  const Seeds = [\n    'abcdefghijklmnopqrstuvwxyz',\n    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',\n    '0123456789',\n    '!@#$%^&amp;*_+=?:',\n  ];\n  let res = '';\n  const indexArr = getRandomN(level, 0, Seeds.length);\n  let targetChars = ''\n  for (const item of indexArr) {\n    res += Seeds[item][getRandom(0, Seeds[item].length)]\n    targetChars += Seeds[item];\n  }\n\n  const remainArr = getRandomN(n - level, 0, targetChars.length)\n  for (const item of remainArr) {\n    res += targetChars[item];\n  }\n  return res;\n}\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u65B9\u6CD5\u5224\u65AD\u7ED9\u5B9A\u7684\u5B57\u7B26\u4E32\u662F\u5426\u540C\u6001(isomorphic),\u540C\u6001\uFF1A\u4E24\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5982\u679CA\u5B57\u7B26\u4E32\u4E2D\u7684\u6BCF\u4E00\u4E2A\u5B57\u7B26\u90FD\u53EF\u4EE5\u5728B\u5B57\u7B26\u4E32\u4E2D\u627E\u5230\u552F\u4E00\u5BF9\u5E94\uFF0C\u5E76\u4E14\u987A\u5E8F\u4E00\u4E00\u5BF9\u5E94\uFF1B\u5982\u679C\u5B58\u5728\u8FD9\u6837\u7684\u51FD\u6570\uFF0C\u90A3\u4E48A\u548CB\u540C\u6001</li>\n</ul>\n<pre><code class=\"language-js\">function isomorphic (str1, str2) {\n  if (str1.length != str2.length) {\n    return false;\n  }\n  let result = true;\n  let map = {}\n  for (let i = 0; i < str1.length; i++) {\n    let code1 = str1.charCodeAt(i);\n    let code2 = str2.charCodeAt(i);\n    const dif = code1 - code2;\n    if (map.hasOwnProperty(str1[i])) {\n      return dif === map[str1[i]]\n    } else {\n      map[str1[i]] = dif\n    }\n  }\n  return result;\n}\n</code></pre>\n<ul>\n<li>\u5199\u4E00\u4E2A\u65B9\u6CD5\u5C06\u4E00\u4E2Ahtml\u5B57\u7B26\u4E32\u53D8\u6210JSON\u6811\u7684\u5F62\u5F0F</li>\n<li>\u8BF7\u5B9E\u73B0\u4E00\u4E2A\u8BA1\u7B97\u5668\u7684\u529F\u80FD</li>\n<li>\u4F7F\u7528js\u5B9E\u73B0\u6469\u65AF\u5BC6\u7801\u7684\u52A0\u5BC6\u548C\u89E3\u5BC6</li>\n<li>\u5199\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5B9E\u65F6\u9A8C\u8BC1input\u8F93\u5165\u7684\u503C\u662F\u5426\u6EE1\u8DB3\u91D1\u989D\u5982\uFF1A3.56(\u6700\u591A\u53EA\u6709\u4E24\u4F4D\u5C0F\u6570\u4E14\u53EA\u80FD\u6570\u5B57\u548C\u5C0F\u6570\u70B9)\u7684\u683C\u5F0F\uFF0C\u5176\u5B83\u7279\u6B8A\u5B57\u7B26\u7981\u6B62\u8F93\u5165</li>\n<li>\u5199\u4E00\u4E2A\u4EFB\u610F\u8FDB\u5236\u8F6C\u6362\u7684\u7A0B\u5E8F</li>\n<li>\u5982\u4F55\u5224\u65AD\u4E00\u4E2A\u5143\u7D20\u6587\u672C\u662F\u5426\u6362\u884C\uFF1F</li>\n<li>\u4F7F\u7528js\u5199\u4E00\u4E2A\u65B9\u6CD5\u5C06\u6570\u5B57\u8F6C\u6362\u4E3Afloat,\u5E76\u53D6N\u4F4D\u5C0F\u6570</li>\n<li>\u4F7F\u7528\u9012\u5F52\u5B9E\u73B0\u6307\u5B9A\u6700\u5C0F\u503C\u548C\u6700\u5927\u503C\u4E4B\u95F4\u7684\u6240\u6709\u6574\u6570\u6C42\u548C</li>\n<li>\u5199\u4E00\u4E2A\u65B9\u6CD5\u5B9E\u73B0\u6307\u5B9A\u5F00\u59CB\u7684\u6570\u5B57\u589E\u52A0\u5230\u6307\u5B9A\u7684\u7ED3\u675F\u6570\u5B57\uFF0C\u6B65\u957F\u9ED8\u8BA4\u4E3A1</li>\n<li>\u5199\u4E2A\u65B9\u6CD5\u5C06base64\u7684\u6570\u636E\u6D41\u88C5\u6362\u4E3A\u4E8C\u8FDB\u5236\u6D41</li>\n<li>\u8BF7\u4F7F\u7528js\u5199\u4E2A\u65B9\u6CD5\u89E3\u6790emoji\u8868\u60C5</li>\n<li>\u5199\u4E00\u4E2A\u65B9\u6CD5\u5C06ArrayBuffer\u8F6C\u4E3A\u5B57\u7B26\u4E32</li>\n<li>\u4F7F\u7528\u6B63\u5219\u53BB\u6389html\u4E2D\u6807\u7B7E\u4E0E\u6807\u7B7E\u4E4B\u95F4\u7684\u7A7A\u683C</li>\n<li>\u5199\u4E00\u4E2A\u65B9\u6CD5\u628A\u79D1\u5B66\u8BA1\u6570\u6CD5\u8F6C\u6362\u6210\u6570\u5B57\u6216\u8005\u5B57\u7B26\u4E32</li>\n<li>\u5199\u4E00\u4E2A\u65B9\u6CD5\u5C06\u6C49\u5B57\u8F6C\u6362\u6210\u62FC\u97F3\u9996\u5B57\u6BCD</li>\n</ul>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp常用正则表达式0007.tsx":
/*!**********************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp常用正则表达式0007.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>\u5E38\u89C1\u6B63\u5219\u6C47\u603B</h1>\n<pre><code class=\"language-js\">// \u5339\u914D\u624B\u673A\u53F7:\u73B0\u5728\u865A\u62DF\u53F7\u7801\u7684\u4F7F\u7528\uFF0C\u6240\u4EE5\u7B2C\u4E8C\u4F4D\u4E5F\u4E0D\u4F3C\u4EE5\u524D\u76843|4|5|8\u7684\u56FA\u5B9A\uFF0C\u6240\u4EE5\u6B64\u5904\u662F\u9009\u62E9\u76843-9\nlet telReg = /^1[3-9][0-9]{9}$/\n// \u5339\u914D\u8EAB\u4EFD\u8BC1\nlet IdCardReg = /^[1-9]\\d{5}(18|19|20)\\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$/\n// \u5339\u914D\u90AE\u7BB1\nlet mailReg =  /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/\n\n// \u5339\u914D\u989C\u8272\nlet colorReg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g\n\n// \u5339\u914Dip\u5730\u5740\n// \u5339\u914Dhtml\u6807\u7B7E\n// \u5339\u914D\u4E2D\u6587\nlet chineseReg = /[\\u4e00-\\u9FFF]/g\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp常用的plugin和loader0023.tsx":
/*!*******************************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp常用的plugin和loader0023.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>常用的loader和plugin</h1>\n<h3>常用的loader</h3>\n<ol>\n<li>style-loader、css-loader、less-loader</li>\n<li>babel-loader、ts-loader</li>\n<li>url-loader</li>\n</ol>\n<h3>常用的plugin</h3>\n<ol>\n<li>CleanWebpackPlugin、htmlWebpackPlugin</li>\n</ol>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp手写系列0040.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp手写系列0040.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h3>手写原生方法</h3>\n<ol>\n<li>考虑兼容性</li>\n<li>考虑方法本身特点</li>\n</ol>\n<ul>\n<li>手写instanceof</li>\n</ul>\n<pre><code class=\"language-js\">// 引用类型判断\nconst myInstanceof = (object,constructor)=>{\n  let prototype = constructor.prototype;\n  object = object.__proto__;\n  while(true){\n    if(!object) return false;\n    if(prototype == object) return true;\n    object = object.__proto__;\n  }\n}\n</code></pre>\n<ul>\n<li>手写let、const</li>\n</ul>\n<pre><code class=\"language-js\">/**\n * 块级作用域下有效\n * 不能重复声明\n * 不能预处理，不存在变量提升，即未声明之前的代码不能调用\n */\n  (function(){\n    var i = 0;\n    console.log(i)\n  })()\n\n  //const\n/**\n * @param {*} key \n * @param {*} value \n * 用于声明一个常量\n * 块级作用域有效\n * 不能重复声明\n * 不能预处理，不存在变量提升，未声明之前不能调用\n * 不能修改\n * 声明时必须初始化\n */\nfunction myConst(key,value){\n  window[key]=value;\n  Object.defineProperty(window,key,{\n    enumerable:false,\n    configurable:false,\n    get:function(){\n      return value;\n    },\n    set:function(newValue){\n      if(newValue!==value){\n        throw TypeError('这是只读变量，不可修改')\n      }else{\n        return value;\n      }\n    }\n  })\n}\n</code></pre>\n<ul>\n<li>手写一个new方法</li>\n</ul>\n<pre><code class=\"language-js\">// 实现一：\nconst myNew = (fn,...args)=>{\n  const obj = {};\n  // 补齐原型链\n  obj.__proto__ = fn.prototype;\n  // 补齐this指向\n  const ret = fn.call(obj,...args);\n  return typeof ret === 'object' ? ret:obj;\n}\n\n// 实现二：\nfunction myNew2(){\n\n  const Constructor = [].shift.call(arguments);\n  const obj = Object.create(Constructor.prototype);\n  const ret = Constructor.apply(obj,arguments);\n  return typeof ret === 'object' ? ret:obj;\n}\n</code></pre>\n<ul>\n<li>实现setTimeout、setInterval</li>\n</ul>\n<pre><code class=\"language-js\">const mySetInterval=(cb,delay)=>{\n  const context =this;\n  const timer = setTimeout(()=>{\n    cb.call(context);\n    clearTimeout(timer);\n    mySetInterval(cb,delay)\n  },delay);\n}\n</code></pre>\n<ul>\n<li>实现一个寄生式组合继承</li>\n<li>手写一个继承函数</li>\n<li>用reduce实现map方法</li>\n</ul>\n<pre><code class=\"language-js\">const mapFromReduce = (array, callback) => {\n  return array.reduce((value, currValue, currIndex, array) => {\n    value.push(callback(currValue, currIndex, array));\n    return value;\n  }, []);\n}\n</code></pre>\n<ul>\n<li>手写数组排序方法(sort)</li>\n<li>实现一个isNaN的方法</li>\n</ul>\n<pre><code class=\"language-js\">Number.prototype.myIsNaN = function (num) {\n  return num !== Number(num)\n}\n</code></pre>\n<ul>\n<li>用js实现typeof的功能</li>\n<li>请实现一个 JSON.stringfy</li>\n<li>请实现一个 JSON.parse</li>\n</ul>\n<pre><code class=\"language-js\">//方法一：eval\nfunction jsonParse (opt) {\n  return eval(`(${opt})`);\n}\njsonParse(JSON.stringify({ x: 5 }))\n// Object { x: 5}\njsonParse(JSON.stringify([1, &quot;false&quot;, false]))\n// [1, &quot;false&quot;, false]\njsonParse(JSON.stringify({ b: undefined }))\n// {}\n\n// 方法二：Function\nvar func= new Function(arg1,arg2,...,functionBody);\nvar jsonStr = '{ &quot;age&quot;: 20, &quot;name&quot;: &quot;jack&quot; }'\nvar json = (new Function('return ' + jsonStr))()\n\n</code></pre>\n<ul>\n<li>\n<p>原生实现 ES5 的 Object.create()方法</p>\n</li>\n<li>\n<p>写一个方法实现js的函数重载</p>\n</li>\n<li>\n<p>用js实现一个HashMap，不可以使用Object</p>\n</li>\n<li>\n<p>写一个方法代替eval</p>\n</li>\n<li>\n<p>手写函数常见方法</p>\n</li>\n</ul>\n<pre><code class=\"language-js\">/*\n* 思路：在指定的上下文对象里添加一个属性（目标函数）并执行\n* 1. 确保ctx一定是一个对象\n  2. 确保添加key的唯一性\n*/\nFunction.prototype.myCall = function(ctx,...args){\n  ctx = (ctx === undefined || ctx === null) ? globalThis : Object(ctx);\n  var key = Symbol();\n  var fn = this;\n  Object.defineProperty(ctx,key,{\n    enumerable:false,\n    value:fn,\n  })\n  var ret = ctx[key](...args);\n  delete ctx[key];\n  return ret;\n}\n/*\n*思路：将this与指定上下文对象绑定，返回一个函数\n1. 参数合并\n2. 判断bind之后的函数是不是构造函数\n*/\nFunction.prototype.myBind = function (ctx) {\n  ctx = (ctx === null || ctx === undefined) ? globalThis : Object(ctx);\n  var args = Array.prototype.slice.call(arguments, 1);\n  var fn = this;\n  return function func () {\n    var nextArgs = Array.prototype.slice.call(arguments);\n    var allArgs = args.concat(nextArgs);\n    if (Object.getPrototypeOf(this) === func.prototype) {\n      var obj = { };\n      Object.setPrototypeOf(obj, fn.prototype);\n      fn.apply(obj, allArgs);\n      return obj;\n    }\n    return fn.apply(ctx, allArgs);\n  }\n}\n</code></pre>\n<ul>\n<li>手写数组常见方法</li>\n</ul>\n<pre><code class=\"language-js\">// reduce\nconst myReduce = (array, callback, initialValue) => {\n  const fakeArray = [...array]\n  if (initialValue) {\n    fakeArray.unshift(initialValue);\n  }\n  let preValue = fakeArray[0];\n  for (let i = 0; i < fakeArray.length - 1; i++) {\n    preValue = callback(preValue, fakeArray[i + 1]);\n  }\n  console.log(preValue);\n  return preValue;\n}\n// indexOf\nArray.prototype.myIndexOf = (item) => {\n  for (let i = 0; i < this.length; i++) {\n    if (arr[i] === item) return i;\n  }\n  return -1;\n}\n// map\nArray.prototype.myMap = function (callback) {\n  const arr = []\n  for (let i = 0; i < this.length; i++) {\n    arr[i] = callback(this[i], i);\n  }\n  return arr;\n}\n// filter\nArray.prototype.myFilter = function (callback) {\n  const arr = [];\n  for (let i = 0; i < this.length; i++) {\n    if (callback(this[i], i)) {\n      arr.push(this[i]);\n    }\n  }\n  return arr;\n}\n// find\nArray.prototype.myFind = function (callback) {\n  for (let i = 0; i < this.length; i++) {\n    if (callback(this[i], i)) {\n      return this[i];\n    }\n  }\n}\n// flat即根据指定深度递归将所有子元素拼接到新数组中\n/**\n * 存在空项的数组\n * 类数组 arguments等\n */\nArray.prototype.myFlat = function (depth = 1) {\n  return this.reduce((pre, cur) => {\n    return pre.concat(Array.isArray(cur) &amp;&amp; depth > 1 ? cur.myFlat(depth - 1) : cur)\n  }, [])\n}\n// flatDeep\nArray.prototype.myFlatDeep = function (depth = 1) {\n  return this.flat().reduce((pre, cur) => {\n    return pre.concat(Array.isArray(cur) &amp;&amp; depth > 1 ? cur.myFlat(depth - 1) : cur)\n  }, [])\n}\n// swap：元素交换\nArray.prototype.swap = function (i, j) {\n  this[i] = this.splice(j, 1, this[i])[0];\n  return this;\n}\n// movePrev：元素前移一格\nArray.prototype.movePrev = function (index) {\n  this.swap(index, index - 1);\n  return this;\n}\n// moveNext：元素后移一格\nArray.prototype.moveNext = function (index) {\n  this.swap(index, index + 1);\n  return this;\n}\n// moveTop：元素置顶\nArray.prototype.moveTop = function (index) {\n  while (index > 0) {\n    this.movePrev(index--);\n  }\n  return this;\n}\n// moveBottom：元素置底\nArray.prototype.moveBottom = function (index) {\n  while (index < this.length - 1) {\n    this.moveNext(index++);\n  }\n  return this;\n}\n// 交集\nArray.prototype.intersect = function (arr) {\n  return this.filter(item => arr.includes(item));\n}\n// 差集\nArray.prototype.minus = function (arr) {\n  return this.filter(item => !arr.includes(item));\n}\n// 补集\nArray.prototype.complement = function (arr) {\n  return [...this.filter(item => !arr.includes(item)), ...arr.filter(item => !this.includes(item))]\n}\n// 并集\nArray.prototype.unionset = function (arr) {\n  return this.concat(arr.filter(v => !this.includes(v)))\n}\n// 快排，时间复杂度（nlogn ～ n^2）\nArray.prototype.myQuickSort = function () {\n  if (this.length === 0 || this.length === 1) return this;\n  const tmp = this.shift();\n  const left = [];\n  const right = [];\n\n  for (const item of this) {\n\n    if (item < tmp) {\n      right.push(item);\n    } else {\n      left.push(item);\n    }\n  }\n  return left.myQuickSort().concat(tmp, right.myQuickSort());\n}\n//插入排序\nArray.prototype.myInsertSort = function () {\n  let temp;\n\n  for (let i = 1; i < this.length; i++) {\n    temp = this[i];\n    let j = i - 1;\n    while (j >= 0 &amp;&amp; temp < this[j]) {\n      this[j + 1] = this[j];\n      j--;\n    }\n    this[j + 1] = temp;\n  }\n  return this;\n}\n</code></pre>\n<ul>\n<li>手写字符串常见方法</li>\n</ul>\n<h3>startsWith: 用来判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回 true 或 false</h3>\n<pre><code class=\"language-js\">String.prototype.myStartsWith = function (searchString, position = 0) {\n  return this.slice(position, searchString.length) === searchString;\n}\n</code></pre>\n<h3>endsWith: 判断一个字符串是否以指定字符串结尾，如果是则返回 true，否则返回 false</h3>\n<pre><code class=\"language-js\">String.prototype.myEndsWith = function (searchString, endPosition = this.length) {\n  return this.slice(endPosition - searchString.length, endPosition) === searchString;\n}\n</code></pre>\n<h3>indexOf: 在字符串中搜索指定子字符串，并返回其第一次出现的位置索引</h3>\n<pre><code class=\"language-js\">String.prototype.myIndexOf = function (searchValue, position = 0) {\n  searchValue = String(searchValue);\n  var searchLen = searchValue.length;\n  var strLen = this.length;\n  for (var i = position; i <= strLen - searchLen; i++) {\n    if (this.slice(i, i + searchLen) === searchValue) {\n      return i;\n    }\n  }\n  return -1;\n}\n</code></pre>\n<h3>lastIndexOf: 搜索该字符串并返回指定子字符串最后一次出现的索引</h3>\n<pre><code class=\"language-js\">String.prototype.myLastIndexOf = function (searchValue, position = this.length) {\n  searchValue = String(searchValue);\n  var searchLen = searchValue.length;\n  var strLen = this.length;\n  for (var i = position; i >= strLen - searchLen; i--) {\n    if (this.slice(i - searchLen, i) === searchValue) {\n      return i;\n    }\n  }\n  return -1;\n}\n</code></pre>\n<h3>includes区分大小写的搜索，以确定是否可以在一个字符串中找到另一个字符串，并根据情况返回 true 或 false</h3>\n<pre><code class=\"language-js\">String.prototype.myIncludes = function (searchString, position = 0) {\n  return this.myIndexOf(String(searchString), position) > -1;\n}\n</code></pre>\n<h3>repeat: 构造并返回一个新字符串，其中包含指定数量的所调用的字符串副本，这些副本连接在一起。</h3>\n<pre><code class=\"language-js\">String.prototype.myRepeat = function (count) {\n  return count > 0 ? this.concat(this.myRepeat(--count)) : '';\n}\n</code></pre>\n<h3>获取指定长度的重复字符串</h3>\n<pre><code class=\"language-js\">String.prototype.myRepeatByLength = function (length) {\n  var padLen = this.length;\n  var temp = ''\n  for (var i = 0; i < length % padLen; i++) {\n    temp += this[i]\n  }\n  return this.myRepeat(Math.floor(length / padLen)) + temp;\n}\n</code></pre>\n<h3>padStart: 用另一个字符串填充当前字符串（如果需要会重复填充），直到达到给定的长度。填充是从当前字符串的开头开始的。</h3>\n<pre><code class=\"language-js\">String.prototype.myPadStart = function (targetLength, padString = ' ') {\n  if (this.length > targetLength) return this;\n  return padString.myRepeatByLength(targetLength - this.length) + this;\n}\n</code></pre>\n<h3>padEnd: 会将当前字符串从末尾开始填充给定的字符串（如果需要会重复填充），直到达到给定的长度。填充是从当前字符串的末尾开始的</h3>\n<pre><code class=\"language-js\">String.prototype.myPadEnd = function (targetLength, padString = ' ') {\n  if (this.length > targetLength) return this;\n  return this + padString.myRepeatByLength(targetLength - this.length);\n}\n</code></pre>\n<h3>trimStart: 从字符串的首端移除空白字符，返回一个新字符串</h3>\n<pre><code class=\"language-js\">String.prototype.myTrimStart = function () {\n  for (var i = 0; i < this.length; i++) {\n    if (this[i] !== ' ') return this.slice(i)\n  }\n  return this;\n}\n</code></pre>\n<h3>trimEnd: 从字符串尾端移除空白字符，返回一个新字符串</h3>\n<pre><code class=\"language-js\">String.prototype.myTrimEnd = function () {\n  for (var i = this.length - 1; i >= 0; i--) {\n    if (this[i] !== ' ') return this.slice(0, i + 1)\n  }\n  return this;\n}\n</code></pre>\n<h3>trim: 从字符串的两端移除空白字符，并返回一个新的字符串，而不会修改原始字符串</h3>\n<pre><code class=\"language-js\">String.prototype.myTrim = function () {\n  return this.myTrimStart().myTrimEnd();\n}\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp打包优化0027.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp打包优化0027.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>包体积优化</h1>\n<h3>tree-shaking</h3>\n<ol>\n<li>/<em>#_<em>PURE</em>_</em>/标识无副作用的代码段</li>\n</ol>\n<h3>压缩</h3>\n<ol>\n<li>js压缩：terser-webpack-plugin</li>\n<li>css压缩：css-minimizer-webpack-plugin</li>\n</ol>\n<h3>代码分割</h3>\n<ol>\n<li>入口配置</li>\n<li>import函数或者require.ensure函数\n<!-- 1. 公共包分离</li>\n<li>模块懒加载 --></li>\n</ol>\n<h3>减小第三方包的引入</h3>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp排列组合0041.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp排列组合0041.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<ul>\n<li>给定一个没有重复数字的序列，返回其所有可能的全排列。</li>\n<li>给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合</li>\n</ul>\n<pre><code class=\"language-js\">/* \n输入：n = 4,k = 2;\n输出：\n[\n  [2,4],\n  [3,4],\n  [2,3],\n  [1,2],\n  [1,3],\n  [1,4],\n]\n */\n</code></pre>\n<ul>\n<li>给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。说明：解集不能包含重复的子集</li>\n</ul>\n<pre><code class=\"language-js\">// 输入： nums = [1,2,3]\n/* \n输出\n[\n  [3],\n  [1],\n  [2],\n  [1,2,3],\n  [1,3],\n  [2,3],\n  [1,2],\n  []\n]\n*/\n</code></pre>\n<ul>\n<li>给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。</li>\n</ul>\n<pre><code class=\"language-js\">// 示例\n// 输入:\nnums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;\n// 输出:\n[3, 3, 5, 5, 6, 7];\n</code></pre>\n<ul>\n<li>使用js写方法把0123456789生成每组4个数，共有多少个组合和多少个排列？</li>\n<li>写一个方法，计算有N个数（可重复），分别放到M个位置中，有多少种排列？</li>\n<li>写一个方法求给定1485个元素中取33个元素的组合有多少种（大数据处理，小心CPU爆炸）</li>\n</ul>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp数据类型的隐式转换0008.tsx":
/*!************************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp数据类型的隐式转换0008.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>数据类型的隐式转换</h1>\n<p>关键词：parseInt、Number、Boolean、String、new String()、动态语言和静态语言</p>\n<p>静态语言：编译时变量的数据类型即可确定，使用之前必须声明数据类型，如c++、java\n动态语言：运行时确定数据类型的语言，变量使用之前不需要类型声明，变量的类型是被赋值的那个值的类型，如php、js、shell、python</p>\n<p>parseInt(string,radix)等价于解析一个字符串（非字符串隐式转换为字符串）返回一个整数，radix（2-36的整数）表示进制数，超出范围会返回NaN,如果是0则直接将字符串隐式转化为数字。</p>\n<p><a href=\"https://262.ecma-international.org/6.0/#sec-toprimitive\">隐式转换规则</a>\nToPrimitive(input, PreferredType?)\nPreferredType为Number时</p>\n<pre><code>input\nif(input is primitive){\n    return a\n} else if (a.valueOf() is primitive){\n    return a.valueOf()\n} else if (a.toString() is primitive){\n    return a.toString()\n} else {\n    TypeError\n}\n</code></pre>\n<p>PreferredType为String时</p>\n<pre><code>input\nif(input is primitive){\n    return a\n} else if (a.toString() is primitive){\n    return a.toString()\n} else if (a.valueOf() is primitive){\n    return a.valueOf()\n} else {\n    TypeError\n}\n</code></pre>\n<p>PreferredType的值设置规则，即preferredType默认为number类型，Date类型的对象时，默认为string。</p>\n<pre><code>input\nif ( input is Date) {\n    return String\n} else {\n    return Number\n}\n</code></pre>\n<p>一些常见对象的valueOf()和toString()的返回值</p>\n<pre><code class=\"language-js\">// Date\nconst c = new Date();\nc.valueOf() //1688024292030\n\n// Array、Math、RegExp、Function 都返回对象本身\nconst a = new Array();\na.valueOf() === a // true\nconst f = new Function()\nf.valueOf() === f // true\n</code></pre>\n<pre><code class=\"language-js\">Number() // 0\nNumber(undefined) //NaN\nNumber(null) // 0\n// 布尔值\nNumber(true) // 1\nNumber(false) // 0\n//字符串\nNumber('') // 0\nNumber('11') // 11\nNumber('11ff') // NaN\nNumber('fff') // NaN\nNumber('ff11') // NaN\n// symbol\nNumber(Symbol(123)) // TypeError\n// BigInt\nNumber(BigInt(123)) // 123\n\n//对象\nNumber({}) // NaN\nNumber([]) // 0\nNumber([null]) // 0\nNumber([undefined]) // 0\nNumber([9]) // 9\nNumber([1,2]) //NaN\n</code></pre>\n<pre><code class=\"language-js\">String() // ''\nString(undefined) // 'undefined'\nString(null) // 'null'\nString(true) // 'true'\nString(1.22) // '1.22'\n// Symbol\nString(Symbol('111')) // 'Symbol(111)'\n// BigInt\nString(BigInt(111)) // '111'\n// 对象\nString({}) // '[object,Object]'\nString({a:11}) // '[object,Object]'\nString([])  // ''\nString([1,2,3]) // '1,2,3'\nString([{a:1}]) // String([{a:1}])\nString([[1],[2]]) // '1,2'\n</code></pre>\n<p>运算符+ 等例子</p>\n<pre><code class=\"language-js\">[] + {} \n{} + []\n{}+{}\n2*{}\n1 + true\n1 + false \n4<5<6\n6>5>4\n// 定义一个变量a,使得a==1&amp;&amp;a==2&amp;&amp;a==3\n</code></pre>\n<pre><code>[]==![]\n{} == {}\n</code></pre>\n<p>==涉及到的类型隐式转换规则(<strong>顺序无关</strong>)</p>\n<ol>\n<li>只要存在 bool, bool->number</li>\n<li>number vs string, string -> number</li>\n<li>object vs primitive, object -> primitive</li>\n<li>null/undefined vs other -> null/undefined和other比较都返回false，只有他们自己两个宽松比较返回true</li>\n</ol>\n<p>==比较例子</p>\n<pre><code class=\"language-js\">[] == ![] //true\n[] == 0 // true\n[2] == 2 // true\n['0'] == false // true\n'0' == false // true\n[] == false  // true\n[null] == 0 // true\nnull == 0  // false\n[null] == false // true\nnull == false //false\n[undefined] == false//true\nundefined == false // false\n\na == 1 &amp;&amp; a == 2 &amp; a == 3\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp数据结构与算法0053.tsx":
/*!**********************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp数据结构与算法0053.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<blockquote>\n<p>算法 + 数据结构 = 程序</p>\n</blockquote>\n<h3>理解数据结构</h3>\n<p>数据结构是计算机组织、存储数据元素的方式，它是具有一定逻辑关系和存储关系的结构的集合，这个集合中通常还包含这响应的操作方法。数据结构是相对固定的并且通常有特定应用的场景</p>\n<p>数据结构主要包含逻辑结构和存储结构，逻辑结构表示相邻两个数据元素之间的关联关系，包含线性结构和非线性结构，线性结构描述的是数据元素之间存在一对一的线性关系，所有的节点只有一个前驱节点和一个后继节点，例如数组、队列、栈、链表等。非线性结构描述的是数据元素之间具有多个对应关系，一个节点可能有多个直接前驱节点和多个后继节点，例如树、图、多维数组等。存储结构表示逻辑结构在计算机存储空间中的存放形式，常见的四种存储结构：顺序存储、链式存储、索引存储和哈希存储。顺序存储即在内存中用一组连续的存储单元存储各个数据单元；链式存储即内存中存储单元不一定连续，使用任意地址的存储单元存放元素，它们是通过指针指向相邻节点的地址信息来建立联系的；索引存储即除了建立存储节点以外还另外建立索引表来标识节点的地址；哈希存储即节点的关键码值决定节点的存储地址</p>\n<p>决定程序优劣的关键就是算法，因此这时候需要一种方法来度量算法好坏，即时间复杂度和空间复杂度</p>\n<h3>算法时间复杂度</h3>\n<p>时间复杂度是用来方便开发者估算出程序的运行时间。我们通常会估计算法的操作单元数量，来代表程序消耗的时间， 这里我们默认CPU的每个单元运行消耗的时间都是相同的，一般用n来表示规模大小。时间复杂度不是一成不变的，和输入数据有必然联系，所以时间复杂度指的是一般情况。我们在决定使用那些算法的时候 ，不是时间复杂越低的越好，要考虑数据规模，如果数据规模很小 甚至可以用O(n^2)的算法比 O(n)的更合适。我们在计算时间复杂度的时候，通常要忽略常数项系数，因为大O其实就是数据量级突破一个点且数据量级非常大的情况下所表现出的时间复杂度，这个点也就是 常数项系数已经不起决定性作用的点。一般来说我们都默认数据规模足够大，基于此，算法时间复杂度的排行如下</p>\n<p>O(1)常数阶 < O(logn)对数阶 < O(n)线性阶 < O(n^2)平方阶 < O(n^3)(立方阶) < O(2^n) (指数阶)</p>\n<h3>常用的算法思想</h3>\n<p>算法思想</p>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp数组0042.tsx":
/*!*****************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp数组0042.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h3>数组</h3>\n<ul>\n<li>手写数组去重(deduplicate)的方法（支持多维数组）</li>\n</ul>\n<pre><code class=\"language-js\">// 去重\nconst deduplicate = (arr)=>{\n  return [...new Set(arr)];\n}\n</code></pre>\n<ul>\n<li>请通过reduce函数实现一维数组的求和</li>\n</ul>\n<pre><code class=\"language-js\">const sum = arr=>arr.reduce((acc,val)=>acc+val);\n</code></pre>\n<ul>\n<li>写个方法随机打乱一个数组</li>\n<li>如何快速让一个数组乱序，写出来</li>\n</ul>\n<pre><code class=\"language-js\">function getOutOrderArr (arr) {\n  const len = arr.length;\n  const map = {};\n  const ans = [];\n  while (ans.length < len) {\n    const key = Math.floor(Math.random() * len);\n    if (!map[key]) {\n      map[key] = true;\n      ans.push(arr[key]);\n    }\n  }\n  return ans;\n}\n// 测试\nconst arr = [1, 2, 2, 4, 5]\nconsole.log(getOutOrderArr(arr));\n</code></pre>\n<ul>\n<li>写一个获取数组的最大值、最小值的方法</li>\n</ul>\n<pre><code class=\"language-js\">function getMaximum (intArr) {\n  const min = Math.min.apply(null, intArr);\n  const max = Math.max.apply(null, intArr);\n  return { min, max }\n}\n</code></pre>\n<ul>\n<li>手写一个函数，数组转对象（二维数组，每一项都是一个仅有2项的字符串数组）</li>\n</ul>\n<pre><code class=\"language-js\">const array2Object = (arr) => {\n  return arr.reduce((pre, item) => {\n    pre[item[0]] = item[1];\n    return pre;\n  }, {});\n}\n// 测试\nconst arr = [\n  ['name', 'jack'],\n  ['age', '11'],\n  ['sex', '男']\n]\nconsole.log(array2Object(arr));\n</code></pre>\n<ul>\n<li>手写一个函数，数组转树（每一项带父级id：pid）</li>\n</ul>\n<pre><code class=\"language-js\">const arrayToTree = (arr,treeArr,pid)=>{\n  for(let node of arr){\n    if(node.pid === pid){\n      const newNode = {...node,children:[]};\n      treeArr.push(newNode);\n      arrayToTree(arr,newNode.children,node.id)\n    }\n  }\n}\n\nconst result = [];\narrayToTree(arr,result,null);\nconsole.log(result);\n</code></pre>\n<ul>\n<li>用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值</li>\n</ul>\n<pre><code class=\"language-js\">const getRandom = (start, end) => start + Math.floor(Math.random() * (end - start + 1));\n\nfunction getRandomN (n, start, end) {\n\n  function getN (set) {\n    if (set.size === n) return set;\n    return getN(set.add(getRandom(start, end)))\n  }\n  return [...getN(new Set())];\n}\n</code></pre>\n<ul>\n<li>写一个方法判断数组内元素是否全部相同</li>\n</ul>\n<pre><code class=\"language-js\">const isEqualAll = arr => arr.every(item=>item === arr[0]);\n</code></pre>\n<ul>\n<li>写一个方法，判断给定的几个数字是否相等，如[1,1,1,1]相等</li>\n</ul>\n<pre><code class=\"language-js\">const isEqualAll = arr => new Set(arr).size === 1;\n</code></pre>\n<ul>\n<li>写一个方法判断一组数字是连值，比如[1,2,3]，[9,0,1],这样的连值组合？连值是指12345678901234567890这样的数字相连的组合，像[1,2,3,4,5]是连值，但[1,3,4,5,6]不是，因为没有相连。</li>\n</ul>\n<pre><code class=\"language-js\">const isContinuousArr = arr => arr.every((item, index) => index === 0 || item === (arr[index - 1] + 1) % 10)\n\n</code></pre>\n<ul>\n<li>分别写一个方法实现基数排序、桶排序、归并排序、插入排序、交换排序、选择排序，并解释下时间复杂度和空间复杂度</li>\n</ul>\n<pre><code class=\"language-js\">// 快排，时间复杂度（nlogn ～ n^2）\nArray.prototype.myQuickSort = function () {\n  if (this.length === 0 || this.length === 1) return this;\n  const tmp = this.shift();\n  const left = [];\n  const right = [];\n\n  for (const item of this) {\n\n    if (item < tmp) {\n      right.push(item);\n    } else {\n      left.push(item);\n    }\n  }\n  return left.myQuickSort().concat(tmp, right.myQuickSort());\n}\n//插入排序\nArray.prototype.myInsertSort = function () {\n  let temp;\n\n  for (let i = 1; i < this.length; i++) {\n    temp = this[i];\n    let j = i - 1;\n    while (j >= 0 &amp;&amp; temp < this[j]) {\n      this[j + 1] = this[j];\n      j--;\n    }\n    this[j + 1] = temp;\n  }\n  return this;\n}\n</code></pre>\n<ul>\n<li>实现扑克牌排序、洗牌</li>\n</ul>\n<pre><code class=\"language-js\">function Poker () {\n  this.Cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']\n  this.Types = ['♥️', '♠️', '♣️', '♦️']\n  this.Kings = ['小王', '大王']\n  this.Size = 54;\n  this.getPokerList = function () {\n    const ans = [];\n    this.Cards.forEach(item => ans.push(...this.Types.map(ele => item + ele)))\n    return ans.concat(this.Kings);\n  }\n\n  this.getRandomList = function () {\n    const set = new Set();\n    while (set.size < this.Size) {\n      set.add(Math.floor(Math.random() * this.Size));\n    }\n    return [...set];\n  }\n  this.refresh = function () {\n    const randomList = this.getRandomList();\n    const pokerList = this.getPokerList();\n    return randomList.map(item => pokerList[item]);\n  }\n  this.sort = function () {\n    return this.getPokerList()\n  }\n}\n</code></pre>\n<ul>\n<li>写一个方法，批量删除指定索引的数组元素</li>\n</ul>\n<pre><code class=\"language-js\">// filter\nconst batchRemove = (arr, indexList) => arr.filter((_, index) => indexList.indexOf(index) === -1);\n</code></pre>\n<ul>\n<li>写一个数组去重的方法（支持多维数组）</li>\n</ul>\n<pre><code class=\"language-js\">Array.prototype.myUnique = function () {\n  return [...new Set(this.reduce(\n    (pre, cur) => {\n      return Array.isArray(cur) ? pre.concat(...cur.myUnique()) : pre.concat(cur);\n    }, [])\n  )]\n}\n\nconst arr = [\n  [1, 2], 1, [1, 2, [1, [2]]]\n]\nconsole.log(arr.myUnique());\n</code></pre>\n<ul>\n<li>给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。</li>\n</ul>\n<pre><code class=\"language-js\">function sum3 (arr) {\n  arr = arr.sort((a, b) => a - b);\n  let target = 0;\n  const ans = [];\n  for (let i = 0; i < arr.length; i++) {\n    let left = i + 1, right = arr.length - 1;\n    if (i > 0 &amp;&amp; arr[i] === arr[i - 1]) continue;\n    while (left < right) {\n      let sum = arr[i] + arr[left] + arr[right]\n      if (target === sum) {\n        ans.push([arr[i], arr[left], arr[right]]);\n        while (arr[left] === arr[left + 1]) left++;\n        while (arr[right] === arr[right - 1]) right--;\n        left++;\n        right--;\n      } else if (target > sum) {\n        left++;\n      } else {\n        right--;\n      }\n    }\n  }\n  return ans;\n}\n\nconsole.log(sum3([-1, 2, -1, 3, -2, -1]))\n</code></pre>\n<ul>\n<li>给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。初始化nums1和nums2的数量分别为m和n，你可以假设nums1有足够的空间（空间大小大于等于m+n）来保存nums2中的元素，例如输入：nums1=[1,2,3,0,0,0],m=3,nums2=[2,5,6],n=3。输出：[1,2,2,3,5,6]</li>\n</ul>\n<pre><code class=\"language-js\">function merge2Nums (nums1, m, nums2, n) {\n  let index1 = 0, index2 = 0, index = 0;\n  const nums = [];\n  while (index1 < m &amp;&amp; index2 < n) {\n    if (nums1[index1] < nums2[index2]) {\n      nums[index++] = nums1[index1++];\n    } else {\n      nums[index++] = nums2[index2++];\n    }\n  }\n  while (index1 < m) {\n    nums[index++] = nums1[index1++];\n  }\n  while (index2 < n) {\n    nums[index++] = nums2[index2++];\n  }\n  return nums;\n}\n\nconsole.log(merge2Nums([1, 2, 3, 0, 0], 3, [2, 5, 6], 3));\n</code></pre>\n<ul>\n<li>写一个方法从数组中随机抽取N个不重复的元素</li>\n</ul>\n<pre><code class=\"language-js\">const getRandomN = function (arr, N) {\n  const set = new Set()\n  while (set.size < N) {\n    const index = Math.floor(Math.random() * arr.length)\n    set.add(arr[index]);\n  }\n  return [...set];\n}\nconst arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]\nconst N = 3;\nconsole.log(getRandomN(arr, N));\n</code></pre>\n<ul>\n<li>写一个方法找出指定一维数组所有不重复的元素和个数</li>\n</ul>\n<pre><code class=\"language-js\">const findOnly = function (arr) {\n  return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));\n}\nconst arr = [1, 2, 3, 2, 1, 1]\nconsole.log(findOnly(arr))\n</code></pre>\n<ul>\n<li>写一个方法，传入数字x，从一个一维数组里找到两个数字符合“n1 + n2 ＝ x”</li>\n</ul>\n<pre><code class=\"language-js\">const get2Num = (arr, x) => {\n\n  for (let i = 0; i < arr.length; i++) {\n    const index = arr.indexOf(x - arr[i])\n    if (index !== i &amp;&amp; index > -1) {\n      return [arr[i], arr[index]];\n    }\n  }\n  return false;\n}\nconst arr = [2, 1]\nconst x = 4;\nconsole.log(get2Num(arr, x))\n</code></pre>\n<ul>\n<li>写一个方法将一个数组中的元素，从前到后依次两两组合，最后一个与第一个组合</li>\n</ul>\n<pre><code class=\"language-js\">const buildPairs = function (arr) {\n  if (arr.length % 2 !== 0) return false;\n  const mid = arr.length / 2;\n  const pairs = [];\n  for (let i = 0; i < mid; i++) {\n    pairs.push([arr[i], arr[arr.length - i - 1]])\n  }\n  return pairs;\n}\n\nconst arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\nconsole.log(buildPairs(arr))\n</code></pre>\n<ul>\n<li>使用js生成1-10000的数组</li>\n</ul>\n<pre><code class=\"language-js\">const array = Array.from({length: 10000}, (_, i) => i + 1);\n</code></pre>\n<ul>\n<li>从一个无序的整数数组中，找出最小和最大数之间缺失的数字，要求最小的时间复杂度</li>\n</ul>\n<pre><code class=\"language-js\">const findMissNumber = function (arr) {\n  const min = Math.min(...arr);\n  const max = Math.max(...arr);\n  const ans = new Array(max - min + 1).fill(0).map((_, index) => index + min);\n  arr.forEach(item => ans[item] = true);\n  return ans.filter(item => item !== true);\n}\nconst arr = [1, 5, 3, 8, 0];\nconsole.log(findMissNumber(arr))\n</code></pre>\n<ul>\n<li>写一个函数找出给定数组中的最大差值</li>\n</ul>\n<pre><code class=\"language-js\">const findMaxDecrease = arr => Math.max(...arr) - Math.min(...arr);\n</code></pre>\n<ul>\n<li>写一个方法判断在一个一维数组里，有且只有一个数等于给定的值</li>\n</ul>\n<pre><code class=\"language-js\">const findOnlyNum = (arr, v) => arr.filter(item => item === v).length === 1;\n</code></pre>\n<ul>\n<li>写一个方法检测指定的数组是否有重复的元素</li>\n</ul>\n<pre><code class=\"language-js\">const isRepeat = arr => new Set(arr).size !== arr.length;\n</code></pre>\n<ul>\n<li>数组元素全倒排列并去重</li>\n</ul>\n<pre><code class=\"language-js\">const removeRepeatAndSort = function (arr) {\n  return arr.sort((a, b) => b - a).reduce((pre, cur) => {\n    const len = pre.length;\n    if (len === 0) return [cur];\n    if (pre[len - 1] === cur) return pre\n    return pre.concat(cur);\n  }, [])\n}\n\nconst arr = [0, 9, 9, 8, 15, 88, 0]\nconsole.log(removeRepeatAndSort(arr))\n</code></pre>\n<ul>\n<li>写一个方法获取指定数组中间的值（一个或者两个）</li>\n</ul>\n<pre><code class=\"language-js\">const findArrayMiddle = function (arr) {\n\n  if (!Array.isArray(arr) || arr.length < 3) return arr;\n  const len = arr.length;\n  const isOdd = len % 2 === 0;\n  const index = Math.floor(len / 2);\n  return isOdd ? [arr[index - 1], arr[index]] : [arr[index]]\n}\nconst arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\nconsole.log(findArrayMiddle(arr));\n</code></pre>\n<ul>\n<li>写一个方法把多维数组降维</li>\n</ul>\n<pre><code class=\"language-js\">const arr = [1, 2, [3, 4, [5, 6]]]\narr.flat(Infinity)\n</code></pre>\n<ul>\n<li>写一个方法js将数组对象中某个属性值相同的对象合并成一个新对象,例如</li>\n</ul>\n<pre><code>//输入\n\nlet data = [\n  { name: '住院医疗最高报销', tagName: '医疗', amount: '6000' },\n  { name: '身故赔付', tagName: '寿险', amount: '36.00' },\n  { name: '其他', tagName: '寿险', amount: '888.00' },\n  { name: '伤残赔付', tagName: '寿险', amount: '66.00' },\n  { name: '重疾赔付', tagName: '重疾', amount: '99.00' },\n]\n//输出\nlet resData = [\n  {\n    tagName: '医疗',\n    dataInfo: [\n      { name: '住院医疗最高报销', tagName: '医疗', amount: '6000' }\n    ]\n  }, {\n    tagName: '寿险',\n    dataInfo: [\n      { name: '身故赔付', tagName: '寿险', amount: '36.00' },\n      { name: '其他', tagName: '寿险', amount: '888.00' },\n      { name: '伤残赔付', tagName: '寿险', amount: '66.00' },\n    ]\n  }, {\n    tagName: '重疾',\n    dataInfo: [\n      { name: '重疾赔付', tagName: '重疾', amount: '99.00' },\n    ]\n  }\n]\n</code></pre>\n<pre><code class=\"language-js\">const mergeByTagName = function (arr) {\n  const result = {}\n\n  for (const item of arr) {\n    if (!result[item.tagName]) {\n      result[item.tagName] = { tagName: item.tagName, dataInfo: [] }\n    }\n    result[item.tagName].dataInfo.push(item);\n  }\n  return Object.values(result);\n}\n\nlet data = [\n  { name: '住院医疗最高报销', tagName: '医疗', amount: '6000' },\n  { name: '身故赔付', tagName: '寿险', amount: '36.00' },\n  { name: '其他', tagName: '寿险', amount: '888.00' },\n  { name: '伤残赔付', tagName: '寿险', amount: '66.00' },\n  { name: '重疾赔付', tagName: '重疾', amount: '99.00' },\n]\nconsole.log(mergeByTagName(data));\n</code></pre>\n<ul>\n<li>使用js写个方法，把下列数组对象按多字段排序，name升序，age降序</li>\n</ul>\n<pre><code>let listData = [\n  { name: &quot;张三&quot;, age: 38, num: 123 },\n  { name: &quot;李四&quot;, age: 15, num: 678 },\n  { name: &quot;王王&quot;, age: 16, num: 256 },\n  { name: &quot;老六&quot;, age: 28, num: 256 },\n  { name: &quot;老王&quot;, age: 16, num: 789 },\n  { name: &quot;大一&quot;, age: 23, num: 678 },\n  { name: &quot;大二&quot;, age: 20, num: 123 },\n  { name: &quot;大三&quot;, age: 40, num: 989 }\n];\n</code></pre>\n<pre><code class=\"language-js\">const sortName = listData.sort((a, b) =>\n  a.name[0].localeCompare(b.name[0], 'zh-CN')\n);\n\nconst listData2 = sortName.sort((a, b) => {\n  if (a.name == b.name) {\n    return b.age - a.age;\n  }\n  return;\n});\nconsole.log(listData2);\n</code></pre>\n<ul>\n<li>写一个算法找到数组中两个元素相加等于指定数的所有组合</li>\n</ul>\n<pre><code class=\"language-js\">const getTwoSum = function (arr, target) {\n  const res = [];\n\n  for (const item of arr) {\n    const a = item;\n    const b = target - a;\n    if (arr.indexOf(a) !== arr.indexOf(b) &amp;&amp; arr.indexOf(b) > -1) {\n      res.push([a, b])\n    }\n  }\n  return res;\n}\nconst arr = [1, 1, 2];\nconsole.log(getTwoSum(arr, 4))\n</code></pre>\n<ul>\n<li>请使用原生的js实现斐波那契数列</li>\n</ul>\n<pre><code class=\"language-js\">function fibonacci (n) {\n  let sum = 0;\n  let last = 1;\n  for (let i = 1; i < n; i++) {\n    [sum, last] = [last, sum + last];\n  }\n  return sum;\n}\n</code></pre>\n<ul>\n<li>写一个方法找到一维数组里，有且只有两个连续相等的所有元素</li>\n</ul>\n<pre><code class=\"language-js\">\n</code></pre>\n<ul>\n<li>写个方法近似计算指定数组或对象占用内存的大小</li>\n</ul>\n<pre><code class=\"language-js\">// 思路：遍历对象属性，对字符占用空间进行叠加，求出近似值\n</code></pre>\n<ul>\n<li>写个方法判断数组对象中是否存在某个对象</li>\n</ul>\n<pre><code class=\"language-js\">// 思路：给每一个对象分配一个id，相同的对象用同一个id，比较数组中对象 -> 比较数组对象的id属性\n</code></pre>\n<ul>\n<li>使用js写一个方法生成0000-9999一万个数字（4位数）</li>\n</ul>\n<pre><code class=\"language-js\">\nfunction getTargetLenNumber () {\n  return Array.from({ length: 10000 }, (_, i) => `${i}`.padStart(4, 0));\n}\n\nconsole.log(getTargetLenNumber())\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp时间相关0043.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp时间相关0043.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<ul>\n<li>列举下获取指定日期的毫秒数的方法有哪些？</li>\n</ul>\n<pre><code class=\"language-js\">new Date().getTime();\nDate.now();\n\n</code></pre>\n<ul>\n<li>写个还剩下多少天过年的倒计时</li>\n</ul>\n<pre><code class=\"language-js\">function getCountDown2SpringFestival (festivalTime) {\n  const end = new Date(festivalTime).getTime();\n  const start = new Date().getTime();\n  let remainMs = end - start;\n  const day = Math.floor(remainMs / 1000 / 60 / 60 / 24);\n  const remainHours = remainMs % (1000 * 60 * 60 * 24)\n  const hour = Math.floor(remainHours / (1000 * 60 * 60));\n  const remainMinutes = remainHours % (1000 * 60 * 60);\n  const minute = Math.floor(remainMinutes / (1000 * 60));\n  const remainSecond = remainMinutes % (1000 * 60);\n  const second = Math.floor(remainSecond / 1000)\n  return { day, hour, minute, second }\n}\n// 测试,给定2024年春节时间\nconsole.log(getCountDown2SpringFestival('2024/2/10'))\n</code></pre>\n<ul>\n<li>写一个方法把分钟转化为时分，例如：150->02:30</li>\n</ul>\n<pre><code class=\"language-js\">function fill (number) {\n  if (number < 10) return `0${number}`\n  return `${number}`\n}\nfunction convertM2HM (minute) {\n  const hours = Math.floor(minute / 60);\n  const remainM = minute % 60\n  return `${fill(hours)}:${fill(remainM)}`;\n}\n// 测试\nconsole.log(convertM2HM(165));\n</code></pre>\n<ul>\n<li>写一个格式化时间的方法</li>\n</ul>\n<pre><code class=\"language-js\">// 方法一\nfunction formatDate (date) {\n  return date.toLocaleString();\n}\n//测试\nconsole.log(formatDate(new Date()));\n//方法二\n\nfunction formatDate (d) {\n  if (Object.prototype.toString.call(d) !== '[object Date]') {\n    return () => console.log(`${d} is not valid`);\n  }\n\n  const year = d.getFullYear();\n  const month = d.getMonth();\n  const date = d.getDate();\n  const hours = d.getHours();\n  const minutes = d.getMinutes();\n  const seconds = d.getSeconds();\n  const dateObj = { year, month, date, hours, minutes, seconds }\n\n  return (format) => format ? format(dateObj) : dateObj;\n}\n\n// 测试\nconst fn = formatDate(new Date());\nconst ans = fn(({ year, month, date, hours, minutes, seconds }) => {\n  return `${year}-${month + 1}-${date} ${hours}:${minutes}:${seconds}`;\n})\nconsole.log(ans);\n\n\n</code></pre>\n<ul>\n<li>模拟 localStorage 时如何实现过期时间功能</li>\n</ul>\n<pre><code class=\"language-js\">\nfunction LocalStorage (maxExpire) {\n  this.data = new Map();\n  this.time = new Map();\n  this.maxExpire = maxExpire\n  this.setItem = function (key, val) {\n    this.data.set(key, val)\n    this.time.set(key, Date.now())\n  }\n  this.getItem = function (key) {\n    const val = this.data.get(key);\n    if (Date.now() - this.time.get(key) > this.maxExpire) {\n      this.data.delete(key);\n      this.time.delete(key);\n      return '已过期';\n    }\n    return val;\n  }\n  this.removeItem = function (key) {\n    this.data.delete(key);\n  }\n}\n// 测试\nconst store = new LocalStorage(1000);\nstore.setItem('key', 'value');\nsetTimeout(() => {\n  console.log(store.getItem('key'));\n}, 500);\nsetTimeout(() => {\n  console.log(store.getItem('key'));\n}, 1500);\n\n</code></pre>\n<ul>\n<li>写个方法获取给定开始和结束时间的所有日期和月份</li>\n</ul>\n<pre><code class=\"language-js\">// 方式一\nfunction getYearBetween ({ start, end }) {\n  const yearList = [];\n  const startYear = new Date(start).getFullYear();\n  const endYear = new Date(end).getFullYear();\n  new Array(endYear - startYear + 1).fill(0).forEach((_, index) => {\n    yearList.push(index + startYear);\n  });\n  return yearList;\n}\n// 方法二\nfunction getYearBetween2 ({ start, end }) {\n  let startTime = new Date(start);\n  const endTime = new Date(end);\n  const yearList = [];\n  while (endTime - startTime >= 0) {\n    const year = startTime.getFullYear();\n    yearList.push(year);\n    startTime.setFullYear(year + 1);\n    startTime.setMonth(0)\n    startTime.setDate(1)\n  }\n  return yearList;\n}\n\nfunction getMonthBetween ({ start, end }) {\n  let startTime = new Date(start);\n  const endTime = new Date(end);\n  const monthList = [];\n  while (endTime - startTime >= 0) {\n    const month = startTime.getMonth();\n    const year = startTime.getFullYear();\n    monthList.push(`${year}/${month + 1}`);\n    startTime.setMonth(month + 1);\n    startTime.setDate(1)\n  }\n  return monthList;\n}\nfunction getDateBetween ({ start, end }) {\n  let startTime = new Date(start).getTime();\n  const endTime = new Date(end).getTime();\n  const dateList = [];\n  const OneDay = 24 * 60 * 60 * 1000\n  while (endTime - startTime >= 0) {\n    dateList.push(new Date(startTime).toLocaleDateString());\n    // 一天\n    startTime += OneDay;\n  }\n  return dateList;\n}\nconst start = '2008-6-20';\nconst end = '2023-4-1';\nconst ans = getYearBetween2({ start, end });\nconsole.log(ans);\n</code></pre>\n<ul>\n<li>输入一个日期 返回几秒前、几小时前、几天前、几月前</li>\n</ul>\n<pre><code class=\"language-js\">function getTimeAgo (time) {\n\n  const date = new Date(time);\n  const now = new Date();\n\n  const year = date.getFullYear();\n  const month = date.getMonth() + 1;\n  const currYear = now.getFullYear();\n  const currMonth = now.getMonth() + 1\n  const sub = currYear * 12 + currMonth - year * 12 - month;\n  if (sub > 12) return Math.floor(sub / 12) + 'years ago'\n  if (sub > 0) return sub + 'months ago'\n  const remainTs = now.getTime() - date.getTime();\n  const remainDay = Math.floor(remainTs / (1000 * 60 * 60 * 24));\n  const remainHour = Math.floor(remainTs / (1000 * 60 * 60));\n  const remainMinute = Math.floor(remainTs / (1000 * 60));\n  const remainSecond = Math.floor(remainTs / 1000);\n  if (remainDay > 0) return remainDay + 'days ago';\n  if (remainHour > 0) return remainHour + 'hours ago';\n  if (remainMinute > 0) return remainMinute + 'minutes ago';\n  if (remainSecond > 0) return remainSecond + 'seconds ago';\n  return '';\n}\n\n// 测试\nconst time = '2023/8/15 14:27:00'\nconsole.log(getTimeAgo(time));\n</code></pre>\n<ul>\n<li>写一个方法记录函数运行的时间</li>\n<li>请使用js实现一个秒表计时器的程序</li>\n<li>使用js写一个时钟的程序</li>\n<li>写一个方法将UTC时间和北京时间换算(多8个小时)</li>\n</ul>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp时间问题Date0009.tsx":
/*!***********************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp时间问题Date0009.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h3>Date对象</h3>\n<ol>\n<li>Date构造函数参数问题\n当没有提供参数时，新创建的 Date 对象代表当前的日期和时间\n当提供一个参数时，时间戳（数字）、符合规范的日期的字符串、日期对象</li>\n</ol>\n<pre><code class=\"language-js\">new Date()\nnew Date(value) // 数值\nnew Date(dateString)// 字符串\nnew Date(dateObject) // 日期对象\n</code></pre>\n<ol start=\"2\">\n<li>Date产生的时间戳\n只能精确到秒，通过Date对象来获取时间戳的方式有</li>\n</ol>\n<pre><code class=\"language-js\">const date = new Date()\n// 第一种\ndate.getTime()\n// 第二种\nDate.now();\n</code></pre>\n<ol start=\"3\">\n<li>\n<p>UTC世界时间和本地时间问题，时区问题\n全球分为24个时区，每间隔一个小时分为一个时区。我们所处的时区是东八区，东增西减的原则，东边时间更快，西边时间更慢，所以东8区比0时区快8个小时，即0时区凌晨的时候，我们已经上午8点了。</p>\n</li>\n<li>\n<p>Date() 构造函数可以创建一个 Date 实例或返回代表当前时间的字符串。即new创建的时间对象都是当前时间（当前时区）</p>\n</li>\n</ol>\n<h3>在浏览器和node环境怎么获取更加精准的时间</h3>\n<p>浏览器window.performance,例如通过performance.now()可以返回一个精确到毫秒的 DOMHighResTimeStamp</p>\n<p>Node.js process 模块中有一个名为 hrtime.bigint() 的方法以毫微秒为单位返回当前高分辨率实时值作为 bigint。\n与 process.hrtime() 方法不同，它不支持额外的时间参数，因为差可以通过两个 bigint 的减法直接计算。</p>\n<p>Date.now() ≈ performance.timing.navigationStart + performance.now()</p>\n<h3>day.js</h3>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp栈与队列0044.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp栈与队列0044.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h3>栈和队列</h3>\n<hr>\n<ul>\n<li>使用栈实现队列</li>\n</ul>\n<pre><code class=\"language-js\">function Stack () {\n  this.data = [];\n  this.push = function (val) {\n    this.data.push(val);\n    return true;\n  }\n  this.pop = function () {\n    if (this.data.length === 0) return false;\n    return this.data.pop();\n  }\n}\n\n// 使用栈实现队列\nfunction FakeQueue () {\n  this.stack1 = new Stack();\n  this.stack2 = new Stack();\n  this.in = function (val) {\n    this.stack1.push(val);\n    return true;\n  }\n  this.out = function () {\n    while (true) {\n      const val = this.stack1.pop();\n      if (!val) break;\n      this.stack2.push(val);\n    }\n    return this.stack2.pop();\n  }\n}\n//测试\nconst fakeQ = new FakeQueue()\nfakeQ.in(1);\nfakeQ.in(2);\nfakeQ.in(3);\nfakeQ.in(4);\nconsole.log(fakeQ.out());\nconsole.log(fakeQ.out());\nconsole.log(fakeQ.out());\n\n</code></pre>\n<ul>\n<li>使用队列实现栈</li>\n</ul>\n<pre><code class=\"language-js\">\nfunction Queue () {\n  this.data = [];\n  this.in = function (val) {\n    this.data.push(val);\n    return true;\n  }\n  this.out = function () {\n    if (this.length() === 0) return false;\n    return this.data.shift();\n  }\n  this.length = function () {\n    return this.data.length;\n  }\n}\n// 使用队列实现栈\nfunction FakeStack () {\n  this.queue = new Queue();\n\n  this.push = function (val) {\n    this.queue.in(val)\n  }\n  this.pop = function () {\n    let n = this.queue.length();\n    if (n < 1) return false;\n    for (let i = 0; i < n - 1; i++) {\n      const val = this.queue.out();\n      this.queue.in(val);\n    }\n    return this.queue.out();\n  }\n}\n\nconst fakeS = new FakeStack()\nfakeS.push(1)\nfakeS.push(2)\nfakeS.push(3)\nfakeS.push(4)\nfakeS.push(5)\nconsole.log(fakeS.pop())\nconsole.log(fakeS.pop())\nconsole.log(fakeS.pop())\n</code></pre>\n<ul>\n<li>删除字符串中的所有相邻重复项，例如&quot;abbaca&quot;->&quot;ca&quot;</li>\n</ul>\n<pre><code class=\"language-js\">function removeDuplicates (str) {\n  const stack = [];\n  for (let i = 0; i < str.length; i++) {\n    if (stack.length > 0 &amp;&amp; stack[stack.length - 1] === str[i]) {\n      stack.pop();\n    } else {\n      stack.push(str[i]);\n    }\n  }\n  return stack.join('');\n}\n// 测试\nconst str = 'abbacd';\nconsole.log(removeDuplicates(str));\n</code></pre>\n<ul>\n<li>判断括号是否是匹配（“(){()[{}]} ()({}) {()}[]{()} [{{[()]}}]”）</li>\n</ul>\n<pre><code class=\"language-js\">const map = {\n  '(': ')',\n  '[': ']',\n  '{': '}'\n}\n\nconst isValid = (str) => {\n  const stack = [];\n\n  for (let i = 0; i < str.length; i++) {\n    const top = stack.length > 0 ? stack[stack.length - 1] : null\n    if (str[i] === ')' || str[i] === ']' || str[i] === '}') {\n      if (map[top] !== str[i]) {\n        return false;\n      } else {\n        stack.pop();\n      }\n    } else if (map[str[i]]) {\n      stack.push(str[i]);\n    }\n  }\n  return stack.length === 0;\n}\n\nconst str = '(){()[{}]} ()({}) {()}[]{()} [{{[()]}}]';\nconsole.log(isValid(str))\n</code></pre>\n<ul>\n<li>写一个方法判断大括号{}是否闭合</li>\n</ul>\n<pre><code class=\"language-js\">//方法一\nconst isValid = (str) => {\n  const stack = [];\n  for (let i = 0; i < str.length; i++) {\n    if (str[i] === '{') {\n      stack.push(str[i]);\n    } else if (str[i] === '}') {\n      stack.pop();\n    }\n  }\n  return stack.length === 0\n}\n//测试\nconst str = '{{addad{{aeesd}}}';\nconsole.log(isValid(str));\n</code></pre>\n<ul>\n<li>使用js实现一个循环队列</li>\n<li>设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈</li>\n</ul>\n<pre><code class=\"language-js\">push(x);//将元素 x 推入栈中。\npop(); // 删除栈顶元素\ntop(); // 获取栈顶元素\ngetMin();// 检索栈中最小的元素\n\n// 示例\nMinStack minStack = new MinStack();\nminStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.getMin();   // --> 返回 -3\nminStack.pop();\nminStack.top();      // --> 返回 0\nminStack.getMin();   // --> 返回 -2\n</code></pre>\n<ul>\n<li>使用队列来实现击鼓传花</li>\n</ul>\n<pre><code>击鼓传花的规则:\n\n几个朋友一起玩一个游戏, 围成一圈, 开始数数（数数时数字都是挨着的，第一个人数1，之后的人数2）, 数到某个数字的人自动淘汰。淘汰的人后面再从1开始数，重复上面的游戏，直到就剩下一个人，请问剩下了谁？\n\n// 测试例子\nvar names = [&quot;John&quot;, &quot;Jack&quot;, &quot;Camila&quot;, &quot;Ingrid&quot;, &quot;Carl&quot;];\nvar endName = passGame(names, 8); // 数到 8 的人淘汰\nconsole.log(&quot;最终留下:&quot; + endName); // 'john'\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp树0045.tsx":
/*!****************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp树0045.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h2>树</h2>\n<ul>\n<li>使用js创建二叉树</li>\n</ul>\n<pre><code class=\"language-js\">// 创建二叉树\nfunction TreeNode(val,left=null,right=null){\n  this.left=left || null;\n  this.right=right || null;\n  this.val = val;\n}\n//     1\n//  2    3\n//4  5  6  7\nfunction buildTree(){\n  const root = new TreeNode(1);\n  root.left = new TreeNode(2);\n  root.right = new TreeNode(3);\n  root.left.left = new TreeNode(4);\n  root.left.right = new TreeNode(5);\n  root.right.left = new TreeNode(6);\n  root.right.right = new TreeNode(7);\n  return root;\n}\n</code></pre>\n<ul>\n<li>手写树先序、中序、后序、层序遍历（递归+迭代）</li>\n</ul>\n<pre><code class=\"language-js\">// 先序遍历\nfunction traverse(root,ret){\n    if(!root) return ;\n    ret.push(root.val);\n    traverse(root.left,ret);\n    traverse(root.right,ret);\n}\n// 测试\nconst root = buildTree();\nconst ret = [];\ntraverse(root,ret);\nconsole.log(ret) // [1, 2, 4, 5, 3, 6, 7]\n</code></pre>\n<pre><code class=\"language-js\">//层序遍历\nfunction traverse(root,ret,index){\n    if(!root) return ;\n    ret[index] = ret[index] || [];\n    ret[index].push(root.val);\n    index++;\n    traverse(root.left,ret,index);\n    traverse(root.right,ret,index);\n}\n// 测试\nconst root = buildTree();\nconst ret = [];\ntraverse(root,ret,0);\nconsole.log(ret) //[ [1],[2, 3] , [4, 5, 6, 7]]\n</code></pre>\n<pre><code class=\"language-js\">// 先序\nfunction traverse(root,ret){\n    let stack=[];\n\n    while(root){\n        ret.push(root.val);\n        stack.push(root);\n        root=root.left;\n    }\n    \n    while(stack.length>0){\n        const node = stack.pop();\n        let t = node.right\n        while(t){\n            ret.push(t.val)\n            stack.push(t)\n            t=t.left;\n        }\n    }\n}\n</code></pre>\n<pre><code class=\"language-js\">// 层序\nfunction traverse(root,ret,index){\n    let stack=[];\n    let preNode;\n    while(root){\n        stack.push(root);\n        root=root.left;\n        index++;\n    }\n    \n    while(stack.length>0){\n        const node = stack[stack.length-1];\n        if(!node.left &amp;&amp; !node.right ||\n           preNode === node.right ||\n           preNode === node.left &amp;&amp; !node.right\n          ){\n                index--;\n                ret[index] = ret[index] || [];\n                ret[index].push(node.val);\n                preNode=node;\n                stack.pop();\n          }else{\n           let t = node.right;\n            while(t){\n                stack.push(t);\n                t=t.left;\n                index++;\n            } \n          }\n    }\n}\n</code></pre>\n<ul>\n<li>\n<p>判断平衡二叉树、搜索二叉树、完全二叉树</p>\n</li>\n<li>\n<p>写一个方法，实现树的路径查询</p>\n</li>\n<li>\n<p>根据元素ID遍历树形结构，查找到所有父元素ID</p>\n</li>\n<li>\n<p>写一个方法将origin转化为tree，要求支持无限级和性能</p>\n</li>\n<li>\n<p>使用原生js实现给定节点的父节点下所有子节点的元素</p>\n</li>\n<li>\n<p>遍历一个树结构，除了可以用递归外还能用哪些方法？</p>\n</li>\n</ul>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp渲染优化0028.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp渲染优化0028.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>渲染优化</h1>\n<h3>关键渲染路径</h3>\n<ol>\n<li>解析HTML得到DOM树，解析CSS得到CSSOM树</li>\n<li>将DOM树和CSSOM树结合得到渲染树（Render Tree）</li>\n<li>布局（Layout）：根据生成的渲染树，确定页面上所有内容的大小和位置</li>\n<li>绘制（Painting）：根据渲染树及布局得到的几何信息，得到节点的绝对像素</li>\n<li>展示（Display）：将像素发给GPU，GPU会将多个合成层合并为一个层，展示在页面上</li>\n</ol>\n<h3>构建DOM和构建CSSOM</h3>\n<p>关键词：编码、css属性继承、媒体查询、js加载和执行</p>\n<p>解析DOM具体过程读取HTML原始字节->根据文件指定编码（utf-8）将他们转化成字符串->将字符串转换成token，Token会标识出当前的token是开始标签或是结束标签亦或者是文本等信息->生成节点对象并且构建DOM，一边生成Token一边消耗Token来生成节点对象，例如生成出html的token并消耗token创建出html节点对象，然后生成head的token创建出head的节点对象并将它关联到html节点对象的子节点中，以此类推，直到所有token都消耗完，我们就得到一颗完整的DOM树</p>\n<blockquote>\n<p>Bytes -> Characters -> Tokens -> Nodes -> DOM</p>\n</blockquote>\n<p>构建CSSOM过程和DOM类似，有几点需要注意的，\n第一css规则是级联的，子节点会自动继承祖先节点的样式，即层叠规则；\n第二HTML可以逐步解析，CSSOM和DOM的构建是同时进行的。\n第三CSSOM必须构建完成才能进入下一阶段。</p>\n<p>因为CSSOM的构建阻塞渲染，所以需要css性能优化，构建 CSSOM 非常非常快</p>\n<ol>\n<li>删除不必要的样式，对其进行最小化、压缩和缓存，</li>\n<li>基于媒体查询将css分成多个文件，通过link标签引入，并添加媒体查询</li>\n<li>css动画，处理触发重排的动画属性，将动画节点从主线程移至GPU上，这些属性包括3D 变换（transform: translateZ()、rotate3d() 等）、动画变换、opacity、position: fixed、will-change 和 filter。一些元素，例如video标签、canvas标签 和iframe标签，也位于各自的图层上。将元素提升为图层（也称为合成）时，动画转换属性将在 GPU 中完成</li>\n<li>will-change属性，告诉浏览器元素的哪些属性需要修改，使浏览器能够在元素实际更改之前设置优化，通过在实际更改前执行耗时的工作以提升性能。</li>\n<li>font-display、contain属性，font-display 属性定义了浏览器如何加载和显示字体文件，允许文本在字体加载或加载失败时显示回退字体。可以通过依靠折中无样式文本闪现使文本可见替代白屏来提高性能</li>\n<li>css选择器，更少的特定选择器是比更多的要快，更具体的规则，浏览器需要更多的工作，这带来的消耗通常很小</li>\n</ol>\n<p>js是一门轻量级的解释型语言，浏览器接受到 JavaScript 代码，并以代码自身的文本格式运行它，当 JavaScript 源代码被执行时，它会被编译成二进制的格式，代码自上而下运行，且实时返回运行结果。</p>\n<p>JavaScript的加载、解析与执行会阻塞DOM的构建，也就是说，在构建DOM时，HTML解析器若遇到了JavaScript，那么它会暂停构建DOM，将控制权移交给JavaScript引擎，等JavaScript引擎运行完毕，浏览器再从中断的地方恢复DOM构建。js不仅可以改DOM，也可以更改样式，如果在CSSOM尚未构建完成，此时通过js操作css，那么js将延迟执行，DOM构建也将阻塞，等到CSSOM构建完成之后才恢复</p>\n<p>DOMContentLoaded和defer：浏览器的 DOMContentLoaded 事件，其标志了 HTML 文档体完全加载和解析，defer属性的作用是用它告知浏览器在遇到script标签 元素时继续下载 HTML 内容,不会阻塞构建DOM树</p>\n<p>script标签async和defer：浏览器遇到 async 脚本时不会阻塞页面渲染，而是直接下载然后运行。但是，一旦下载完成，脚本就会执行，从而阻止页面渲染，当页面的脚本之间彼此独立，且不依赖于本页面的其他任何脚本时，async 是最理想的选择。defer 属性加载的脚本将按照它们在页面上出现的顺序加载。在页面内容全部加载完毕之前，脚本不会运行，如果脚本依赖于 DOM 的存在（例如，脚本修改了页面上的一个或多个元素），可以使用defer。</p>\n<p>async：脚本将在下载完成后立即执行。这将阻塞页面，并不保证任何特定的执行顺序\ndefer：脚本将按照在页面中出现的顺序加载和运行，并且在html解析完成之后才顺序执行</p>\n<h3>渲染树（Render Tree）</h3>\n<p>渲染树只包含了可见内容，如果有元素上有 display: none;，它本身和其后代都不会出现在渲染树中。</p>\n<h3>布局（Layout）和绘制（Painting）</h3>\n<p>关键词：viewport、盒子模型</p>\n<p>Layout输出每个页面元素的盒模型，它能准确布局、处理元素排列，确保所有元素在视口内的尺寸、位置等（如图片等不知尺寸的元素提供占位空间），并且所有相对测量值都会转化为屏幕上的绝对像素值。确定视口大小，布局通常从body开始。</p>\n<p>Painting：绘制是一个非常快的过程，将元素的每个可视部分绘制到屏幕上，包括文本、颜色、边框、阴影和替换的元素（如按钮和图像）。绘制可以将布局树中的元素分解为多个层。将内容提升到 GPU 上的层（而不是 CPU 上的主线程）可以提高绘制和重新绘制性能。有一些特定的属性和元素可以实例化一个层，包括 video标签 和 canvas标签，任何 CSS 属性为 opacity 、3D transform、will-change 的元素，还有一些其他元素</p>\n<p>Compositing：当文档的各个部分以不同的层绘制，相互重叠时，必须进行合成，以确保它们以正确的顺序绘制到屏幕上，并正确显示内容。回流会触发重绘和合成，我们定义了图片大小，那么就不需要全部重绘，只需要重绘修改点；如果没有定义图片大小，那么就会全部重绘。</p>\n<h3>首屏直出渲染</h3>\n<ol>\n<li>首屏尽量是静态页面</li>\n<li>首屏服务端渲染</li>\n</ol>\n<h3>防止阻塞渲染</h3>\n<ol>\n<li>css优先加载和解析，js延迟加载</li>\n<li>script标签 defer和async</li>\n</ol>\n<h3>减少重绘和回流</h3>\n<ol>\n<li>使用transform来完成动画</li>\n<li>批量修改dom（fragment）</li>\n</ol>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp离线包0029.tsx":
/*!******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp离线包0029.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>离线包</h1>\n<h3>混合开发与离线包</h3>\n<p>离线包就是将html/js/css预先打包好提前下发到app本地，app加载网页的时候实际上是从本地加载，减少了网络请求。离线包技术适用于app内嵌h5页面，它主要是为了解决native+h5混合开发模式中加载h5页面的白屏问题。</p>\n<p>移动端混合开发通常涉及到两大类技术：原生native和web h5，原生技术指的是IOS（Objective C）和Android（java），其特点是开发效率低，每次开发完新功能需要重新打包并且依赖用户的更新，但是它的性能较高；web h5指的是html/css/js组成，它的特点是发布更新灵活、良好的跨平台，但是其性能较低，有些特性会受到限制。混合开发的意义就是为了吸取两者的优点，随着手机硬件的更新迭代，系统对于web特性的支持越来越好，h5的劣势在逐渐缩减。</p>\n<p>混合开发按照分类可以分为\nweb渲染的混合app，例如Codova,前身是PhoneGap,它提供了一系列设备相关的 API，通过这组 API，移动应用能够以 JavaScript 访问原生的设备功能（摄像头、麦克风等）。\n原生渲染的混合App，例如react-native，它供的组件是对原生 API 的暴露，虽然我们使用的是 JavaScript 语言编写的代码，但是实际上是调用了原生的 API 和原生的 UI 组件。\n小程序对于UI渲染和js执行环境做了隔离，基于前面两种方式之间。关于native和web之间通信有好几中方式，第一种是通过拦截url请求，第二种是通过注入MessageHandler。相关的库例如jsbridge、DSBridge</p>\n<h3>离线包技术原理</h3>\n<p>离线包技术主要分为2个部分，一部分是客户端的离线包容器，另一部分是线上的离线包平台。其中离线包容器的作用有两个，第一个是拦截资源请求，判断是否存在本地缓存，有则直接从本地返回；第二是资源的缓存，包括资源下载、资源缓存策略和增量更新策略。离线包平台的作用也有两个，第一是配置h5页面对应的离线资源、公共离线资源、CDN存放离线资源包，第二个是发布管理，包括实时发布、灰度能力和版本控制等。</p>\n<h3>离线包优缺点</h3>\n<p>离线包只是优化页面第一次加载速度，资源本身可以设置http的缓存策略可以避免重复下载。</p>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp类型的发展历史0019.tsx":
/*!**********************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp类型的发展历史0019.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: ""
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp编码常识0054.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp编码常识0054.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>编码常识</h1>\n<p>关键词：utf-8、GBK</p>\n<h3>ASCII编码</h3>\n<p>ASCII编码一共规定了128个字符的编码规则，这128个字符形成的集合就叫做ASCII字符集。在ASCII编码中，每个字符占用一个字节的后面7位，最前面的1位统一规定为0。在ASCII编码中，0~31 是控制字符如换行回车删除等，32~126 是可打印字符，可以通过键盘输入并且能够显示出来。</p>\n<h3>Unicode字符集</h3>\n<p>ASCII码字符集，总共才能容纳256个字符，对于全世界各国语言来说，很难全部包含在内，所有后来就出现了Unicode字符集。Unicode字符集是一个很大的字符集合，现在的规模可以容纳100多万个符号。每个符号的编码都不一样。Unicode只是一个字符集，它只规定了符号的二进制代码，却没有规定这个二进制代码应该如何编码如何存储</p>\n<p>这就造成了两个问题：</p>\n<p>第一个问题是，如何才能区别Unicode和ASCII？计算机怎么知道三个字节表示一个符号，而不是分别表示三个符号呢？\n第二个问题是，我们已经知道，英文字母只用一个字节表示就够了，如果unicode统一规定，每个符号用三个或四个字节表示，那么每个英文字母前都必然有二到三个字节是0，这对于存储来说是极大的浪费，文本文件的大小会因此大出二三倍，这是无法接受的。</p>\n<p>为了解决Unicode字符集存在的问题，就出现了UTF(Unicode Transformation Formats)系列的编码规则。UTF编码规则具体规定了Unicode字符集中的字符是如何编码的。</p>\n<h3>base64</h3>\n<p>btoa()、atob()</p>\n<h3>UTF-8</h3>\n<p>UTF-8编码是Unicode的实现方式之一,其他实现方式还包括UTF-16和UTF-32。UTF-8（8-bit Unicode Transformation Format）是一种针对Unicode的可变长度字符编码规则。UTF-8用1到4个字节编码Unicode字符。用在网页上可以统一页面显示中文简体繁体及其它语言（如英文，日文，韩文）。UTF-8最大的一个特点，就是它是一种变长的编码方式。它可以使用1~4个字节表示一个符号，根据不同的符号而变化字节长度（UTF-8编码可以容纳2^21个字符，总共200多万个字符</p>\n<h3>GBK</h3>\n<p>GB2312编码是第一个汉字编码国家标准，GB2312编码适用于汉字处理、汉字通信等系统之间的信息交换，通行于中国大陆；新加坡等地也采用此编码。中国大陆几乎所有的中文系统和国际化的软件都支持GB2312。GBK是对GB1212的扩展，也是占用2个字节，GBK不再要求低字节一定是127号之后的内码，只要第一个字节是大于127就固定表示这是一个汉字的开始，不管后面跟的是不是扩展字符集里的内容。GBK 包括了 GB2312 的所有内容，同时又增加了近20000个新的汉字（包括繁体字）和符号。GB18030采用变长编码，可以是1个字节、2个字节和4个字节。是对GB2312和GBK的扩展，完全兼容两者。</p>\n<h3>位、字节、字符</h3>\n<p>位：数据存储的最小单位。每个二进制数字0或者1就是1个位</p>\n<p>字节：8位构成一个字节即 1Byte(B) = 8bit(位)\n1KB = 1024B\n1MB = 1024KB(2^10 B)\n1GB = 1024MB(2^20 B)\n1TB = 1024GB(2^30 B)</p>\n<p>字符\na、A、中、+、*、の......均表示一个字符；\n一般 utf-8 编码下，一个汉字 字符 占用 3 个 字节；\n一般 gbk 编码下，一个汉字  字符  占用 2 个 字节；</p>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp网络0065.tsx":
/*!*****************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp网络0065.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<ul>\n<li>get和post区别</li>\n</ul>\n<pre><code>get表示读取一个资源，反复读取不应该对访问的数据有副作用（幂等）。幂等代表着非常有利于做缓存，可以对GET请求的数据做缓存，浏览器也是默认会对get请求做缓存的\n\npost表示创建一个资源，有副作用的、不幂等的，因此也不能缓存。\n</code></pre>\n<ul>\n<li>多个请求，返回数据共用一个面板（返回数据展示在同一个地方），先发起的后响应，如何解决</li>\n<li>说一下你对 Get 请求传参长度限制的理解？</li>\n</ul>\n<pre><code>http协议未规定Get和Post的长度限制，Get最大长度显示是因为浏览器和web服务器限制了URI的长度，不同的浏览器和web服务器，限制的最大长度不一样，例如IE最大长度为2083byte，chrome为8182byte\n</code></pre>\n<ul>\n<li>Get 请求传参长度存在限制，是 HTTP 协议限制的吗？</li>\n</ul>\n<pre><code>HTTP 协议从未规定 GET/POST 的请求长度限制是多少。所谓的请求长度限制是由浏览器和 web 服务器决定和设置的，各种浏览器和 web 服务器的设定，均不一样，这依赖于各个浏览器厂家的规定或者可以根据 web 服务器的处理能力来设定\n\n</code></pre>\n<ul>\n<li>说下 URL 和 URI 的区别？</li>\n</ul>\n<pre><code>URI（统一资源标识符）是一个指向资源的字符串。最通常用在 URL 上来指定 Web 上资源文件的具体位置\nURL（统一资源定位器）是指定在 Internet 上可以找到资源的位置的文本字符串，在 HTTP 的上下文中，URL 被叫做”网络地址“或“链接”。你的浏览器在其地址栏显示 URL\n</code></pre>\n<ul>\n<li>什么是 CSP?</li>\n</ul>\n<pre><code>CSP是Content Security Policy首单词组成，CSP旨在减少跨站脚本攻击。CSP是一种由开发者定义的安全性政策性申明，通过CSP所约束的规则指定可信的内容来源（脚本、图片、iframe、font、style等可能的远程资源），通过CSP协议让WEB处于一个安全的运行环境中。\nCSP（Content Security Policy）是一种安全标准，它帮助防止一些网页安全问题，如跨站脚本（XSS）攻击和数据注入攻击。CSP通过指定有效的源来控制浏览器加载和执行页面上的哪些内容。\n\nCSP 通过 HTTP 头部字段 Content-Security-Policy 来实现。当浏览器收到带有这个头部的 HTTP 响应时，它会解析并执行这个策略。\n\n实现 CSP 通过 HTTP headers 的步骤如下：\n\n1. 配置服务器：在服务器配置中添加某些响应头。这个过程取决于你使用的服务器类型。例如，在 Apache 中，你可以在 .htaccess 文件中添加 Header set Content-Security-Policy。\n2. 创建策略：CSP 策略是一系列的指令和源。每一个指令表示一种特定类型的资源，如脚本、图像、样式表等。源则表示这些资源可以从哪里加载。例如，一个简单的 CSP 策略可能看起来像这样：Content-Security-Policy: default-src 'self'。\n3. 设置策略：将创建的策略设置为 Content-Security-Policy HTTP header 的值。例如：Header set Content-Security-Policy &quot;default-src 'self'; img-src https://*; child-src 'none';&quot;\n4. 测试策略：在将策略应用到生产环境之前，应该先进行测试。你可以使用 Content-Security-Policy-Report-Only header 来测试策略，这将不会阻止任何内容，但会在策略被违反时生成报告。\n\n总的来说，通过使用 HTTP headers 来实现 CSP，你可以有效地控制一个页面可以加载和执行哪些内容，从而增加站点的安全性。\n</code></pre>\n<ul>\n<li>说一下什么是 Http 协议无状态?怎么解决 Http 协议无状态?</li>\n</ul>\n<pre><code>HTTP 协议是无状态的，指的是协议对于事务处理没有记忆能力，服务器不知道客户端是什么状态。也就是说，打开一个服务器上的网页和上一次打开这个服务器上的网页之间没有任何联系。HTTP 是一个无状态的面向连接的协议，无状态不代表 HTTP 不能保持 TCP 连接，更不能代表 HTTP 使用的是 UDP 协议，每次的请求都是独立的，它的执行情况和结果与前面的请求和之后的请求是无直接关系的，它不受前面的请求应答情况直接影响。\n\ncookie来记录状态,Cookie 是一个 HTTP 请求标头，其中含有先前由服务器通过 Set-Cookie 标头投放或通过 JavaScript 的 Document.cookie 方法设置，然后存储到客户端的 HTTP cookie \n</code></pre>\n<ul>\n<li>说一下开发中常用的几种 Content-Type ？</li>\n</ul>\n<pre><code>1. application/x-www-form-urlencoded：\n把数据使用url编码之后传送给后端，不适合用于传输大型二进制数据或者包含非ASCII字符的数据，\n\n2. multipart/form-data：\n专门有效的传输文件，multipart/form-data 既可以上传文件，也可以上传键值对，它采用了键值对的方式，所以可以上传多个文件。使用multipart/form-data时，请求体参数可来自于new FormData()生成的实例，或enctype为multipart/form-data的表单数据。\n\n3. application/json\n方便传递复杂多层次对象，消息主体是序列化的JSON字符串。\n</code></pre>\n<ul>\n<li>说一下你对 Get 和 Post 请求在缓存方面理解？</li>\n</ul>\n<pre><code>HTTP GET是幂等的，这意味着无论你发送多少次相同的GET请求，服务器上资源的状态都不会发生变化。这是与HTTP POST等非幂等方法的主要区别。\nHTTP POST 方法不是幂等的，这意味着发送相同的 POST 请求两次可能会得到不同的结果。例如，如果你两次发送一个用于创建新用户的 POST 请求，那么可能会创建两个具有相同信息的新用户\n\nGET请求的响应是可以被缓存的，这意味着如果一个资源没有发生变化，那么在下一次请求这个资源时，浏览器可以直接从缓存中读取，而不需要再向服务器发送请求\n</code></pre>\n<ul>\n<li>说一下对称加密和非对称加密的区别和用处？</li>\n</ul>\n<pre><code>对称加密：加密解密用同一个密钥，其优缺点如下：\n优点：算法公开、计算量小、加密速度快、加密效率高，适合加密比较大的数据\n缺点：\n1.交易双方需要使用相同的密钥，也就无法避免密钥的传输，而密钥在传输过程中无法保证不被截获，因此对称加密的安全性得不到保证。\n2.每对用户每次使用对称加密算法时，都需要使用其他人不知道的惟一密钥，这会使得发收信双方所拥有的钥匙数量急剧增长，密钥管理成为双方的负担。对称加密算法在分布式网络系统上使用较为困难，主要是因为密钥管理困难，使用成本较高。\n\n非对称加密：公钥加密，私钥解密。公钥与私钥是一对，如果用公钥对数据进行加密，只有用对应的私钥才能解密；如果用私钥对数据进行加密，那么只有用对应的公钥才能解密。\n\n非对称加密算法实现机密信息交换的基本过程是：甲方生成一对密钥并将其中的一把作为公钥对外公开；得到该公钥的乙方使用公钥对机密信息进行加密后再发送给甲方；甲方再用自己保存的私钥对加密后的信息进行解密。\n\nhttps中使用非对称加密传输密钥，使用刚才传输的密钥进行对称加密用于传输数据。\n</code></pre>\n<ul>\n<li>请求在客户端报 413 是什么错误，怎么解决？</li>\n</ul>\n<pre><code>上传文件过大 可以通过修改nginx配置文件中的client_max_body_size解决\n</code></pre>\n<ul>\n<li>说一下网络通信中引入滑动窗口的作用，它的机制原理是怎样的？</li>\n</ul>\n<pre><code>滑动窗口的作用主要是为了控制流量。 我们知道TCP 是每发送一个数据，都要进行一次确认应答。当上一个数据包收到了应答了， 再发送下一个。这种传输方式造成通信效率低下，为了解决这个问题TCP引入了窗口的概念并且可以指定它的大小，窗口的实现实际上是操作系统开辟的一个缓存空间，发送方主机在等到确认应答返回之前，必须在缓冲区中保留已发送的数据。如果按期收到确认应答，此时数据就可以从缓存区清除。窗口大小就是指无需等待确认应答，而可以继续发送数据的最大值。滑动窗口即接收方通过告诉发送方自己的窗口大小，从而控制发送方的发送速度\n\n流量控制：发送方不能无脑的发数据给接收方，要考虑接收方处理能力\n拥塞机制：在网络出现拥堵时，如果继续发送大量数据包，可能会导致数据包时延、丢失等，这时 TCP 就会重传数据，但是一重传就会导致网络的负担更重，于是会导致更大的延迟以及更多的丢包，这个情况就会进入恶性循环被不断地放大....。于是，就有了拥塞控制，控制的目的就是避免「发送方」的数据填满整个网络\n</code></pre>\n<ul>\n<li>为什么说利用多个域名来存储网站资源会更有效？</li>\n</ul>\n<pre><code>1. CDN缓存更方便\n2. 突破浏览器的并发限制\n3. 节约cookie带宽\n4. 节约主域名的连接数，优化页面响应速度\n5. 防止不必要的安全问题\n</code></pre>\n<ul>\n<li>WebSocket 如何断开重连</li>\n</ul>\n<pre><code>onClose事件中检测连接关闭，然后重新创建连接\n</code></pre>\n<ul>\n<li>了解 WebSocket 吗？WebSocket 是如何进行握手的?</li>\n</ul>\n<pre><code>WebSocket 握手采用 HTTP Upgrade 机制,WebSocket 握手只允许使用 HTTP GET 方法\n1. 首先客户端会发送一个握手包，请求头中包含\nUpgrade: websocket\nConnection: Upgrade\n2. 服务端若支持 WebSocket 协议, 服务端验证客户端的握手包符合规范之后，也会发送一个握手包给客户端,请求头中包含\nUpgrade: websocket\nConnection: Upgrade\n3. 客户端收到服务端的握手包之后，验证报文格式是否符合规范。\n</code></pre>\n<ul>\n<li>什么情况下会触发 options 请求</li>\n</ul>\n<pre><code>HTTP 的 OPTIONS 方法 用于获取目的资源所支持的通信选项\n当一个请求跨域且不是简单请求时就会发起一个options请求\n这是因为在跨域的情况下，在浏览器发起&quot;复杂请求&quot;时主动发起的。跨域共享标准规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。服务器确认允许之后，才发起实际的 HTTP 请求\n</code></pre>\n<ul>\n<li>什么时候用 TCP，什么时候适合 UDP？</li>\n</ul>\n<pre><code>TCP：文件传输、电子邮件、远程终端等\n对于文件传输、远程终端这些应用来说，是不允许数据丢失的，因为TCP提供了超时与重传等可靠机制，因此采用TCP\n\nUDP：广播通信、音视频通话、包量较少的通信如DNS等\n因为UDP是不可靠传输，所以当包量比较少的时候使用UDP是比较适合的，因为这样可以避免丢失大量的重要数据\n对于音视频通话来说，因为UDP是非连接的，所以占用资源比较少，并且对于音视频来说，丢掉一些数据包也是可以接受的\n</code></pre>\n<ul>\n<li>如果一个页面突然出现了一段广告，可能是什么原因，怎么解决?</li>\n</ul>\n<pre><code>1. XSS(Cross Site Scripting)跨站脚本攻击\nXSS 攻击一般指攻击者通过在网页注入恶意脚本，当用户浏览网页时，恶意脚本执行，控制用户浏览器行为的一种攻击方式，主要分为三类：\n反射型 XSS 攻击（服务器端没有对用户恶意输入做安全处理，直接反射输入内容）\n存储型 XSS 攻击（一般涉及后端数据存储，常见场景意见反馈模块，前端通过接口把用户信息传给后端，当后台管理系统展示反馈意见时，就会读取数据库中这些数据，当这些数据含有攻击的脚本，那就造成了存储型 XSS 攻击。这种攻击是持久性的）\nDOM 型 XSS 攻击（客户端脚本程序可以动态地检查和修改页面内容，而不依赖于服务端的数据。例如使用了innerHTML、document.write等）\n\nXSS攻击防御\n  1. HTML 标签转义，将标签符号&quot;<&quot;，&quot;>&quot;等全局转义\n  2. 白名单过滤，将 HTML 字符串解析成实体对象，若白名单里属性存在在该实体对象中则做相应的处理\n  3. csp(Content Security Policy)：实质就是白名单制度，开发者明确告诉客户端哪些外部资源可以加载和执行\n  4. 浏览器自带的防御 X-XSS-Protection\n\n2. HTTP挟持\n在运营商的路由器节点上，设置协议检测，一旦发现是 HTTP 请求且是 HTML 类型请求，则拦截处理。常见有两种：\n\n返回 302 让用户浏览器跳转到另外的地址\n在服务器返回的 HTML 中插入 JS 或 DOM 节点\n\nHTTP挟持防御\n1. 向运营商投诉\n2. 在 html 上加上 <meta http-equiv=&quot;Cache-Control&quot; content=&quot;no-siteapp&quot;> <meta http-equiv=&quot;Cache-Control&quot; content=&quot;no-transform &quot; />禁止转码\n3. 使用 HTTPS，HTTPS 增加了 SSL 协议，会对数据进行加密。\n4. 白名单过滤。大体思路是检查所有外链是否属于白名单。\n5. 监听 DOM 节点插入及 DOM 节点移除事件\n</code></pre>\n<ul>\n<li>详细描述一个 http 请求从发起请求到收到响应的全部过程(越细越好)</li>\n</ul>\n<pre><code>1. 域名解析\n2. TCP连接的建立\n3. 发起HTTP请求\n4. 服务器响应HTTP请求，浏览器得到html代码\n5. 浏览器解析html代码，并请求html代码中的资源\n6. 浏览器对页面进行渲染呈现给用户\n</code></pre>\n<h3>cookie</h3>\n<ul>\n<li>详细说一下你对 cookie、session、token 的理解</li>\n</ul>\n<pre><code>cookie由服务器生成，发送给浏览器，浏览器把cookie以kv形式保存到某个目录下的文本文件内，下一次请求同一网站时会把该cookie发送给服务器。由于cookie是存在客户端上的，所以浏览器加入了一些限制确保cookie不会被恶意使用，同时不会占据太多磁盘空间，所以每个域的cookie数量是有限的。\n\n服务器使用session把用户的信息临时保存在了服务器上，用户离开网站后session会被销毁。这种用户信息存储方式相对cookie来说更安全，可是session有一个缺陷：如果web服务器做了负载均衡，那么下一个操作请求到了另一台服务器的时候session会丢失。\n\n基于Token的身份验证是无状态的，我们不将用户信息存在服务器或Session中。基于Token的身份验证的过程如下:\n1. 用户通过用户名和密码发送请求。\n2. 程序验证。\n3. 程序返回一个签名的token 给客户端。\n4. 客户端储存token,并且每次用于每次发送请求。\n5. 服务端验证token并返回数据。\n\n</code></pre>\n<ul>\n<li>Token 一般是存放在哪里?Token 放在 cookie 和放在 localStorage、sessionStorage 中有什么不同？</li>\n</ul>\n<pre><code>cookie：\n空间限制，4KB\n过期时间设置，\n</code></pre>\n<ul>\n<li>请描述 CSRF、XSS 的基本概念、攻击原理和防御措施？</li>\n</ul>\n<pre><code>想要深入理解CSRF的攻击特性我们有必要了解一下网站session的工作原理,每次http请求都是独立的无关之前的操作的，但是每次http请求都会将本域下的所有cookie作为http请求头的一部分发送给服务端，所以服务端就根据请求中的cookie存放的sessionid去session对象中查找对应的值\n\n</code></pre>\n<ul>\n<li>\n<p>cookie 放哪里，cookie 能做的事情和存在的价值</p>\n</li>\n<li>\n<p>cookie 和 token 都存放在 header 里面，为什么只劫持前者</p>\n</li>\n<li>\n<p>cookie 的引用为了解决什么问题</p>\n</li>\n<li>\n<p>localstorage、sessionStorage、indexDB 和 cookie 的区别</p>\n</li>\n<li>\n<p>说一下请求是异步的为什么会造成 HTTP 队首阻塞?</p>\n</li>\n<li>\n<p>说一下什么是运营商劫持？有什么预防措施？</p>\n</li>\n<li>\n<p>了解 HTTP3.0 吗？简要说一下 HTTP 的一个发展历程？</p>\n</li>\n<li>\n<p>说一下 OAuth2.0 的登录详细流程</p>\n</li>\n<li>\n<p>说一下从获得 HTML 到页面渲染的全部流程？为什么栅格线程使用 GPU 计算而不是 CPU 计算？</p>\n</li>\n<li>\n<p>浏览器为什么要阻止跨域请求？如何解决跨域？每次跨域请求都需要到达服务端吗？</p>\n</li>\n<li>\n<p>从输入 URL 到页面加载全过程</p>\n</li>\n<li>\n<p>说一下 HTTP2.0 多路复⽤有哪些优势？</p>\n</li>\n<li>\n<p>说一下 Https 加密握手的过程</p>\n</li>\n<li>\n<p>说一下 CORS 的简单请求和复杂请求的区别</p>\n</li>\n</ul>\n<h3>HTTP缓存</h3>\n<ul>\n<li>请写下你对协商缓存和强缓存的理解？</li>\n<li>说下你对浏览器缓存理解</li>\n<li>缓存有哪些？前端缓存有哪些？怎么用？如何和后台配合</li>\n<li>说一下缓存有哪几种，具体都是怎么实现和比较的，缓存优先级，相互之间的对比</li>\n<li>客户端缓存有几种方式？浏览器出现 from disk、from memory 的策略是啥</li>\n<li>强缓存都有哪些方法来控制</li>\n<li>协商缓存都有哪些参数</li>\n<li>说一下 etag 和 lastmodify 的区别</li>\n<li>304 页面的原理</li>\n<li>说一下 Nginx 的缓存策略，强缓存与弱缓存的区别，二者的使用场景</li>\n<li>说一下 Http 缓存策略，有什么区别，分别解决了什么问题</li>\n<li>catch-control 有哪些设定值</li>\n</ul>\n<h3>http历史</h3>\n<ul>\n<li>什么是 http？什么是 http2？说下 http 与 http2 的工作流程</li>\n<li>Http1 和 Http2 有什么区别，和 http1.1 相比，http2 都有什么特性</li>\n<li>介绍 Http2 特性，Http2 怎么确保文件同时传输不会报错</li>\n<li>列举并解释一下 http 的所有请求方法，</li>\n<li>列举出在浏览器中，页面加载过程中发出了哪些事件？并画出这些事件的执行顺序？</li>\n<li>请列出 HTTP/1.1 协议 Response 状态码：20x、30x、40x、50x 等各区间的含义，并说明 Action 在 Restful API 中分别使用哪些 Http 副词(action)表现出 CRUD?</li>\n<li>介绍下 Https，和 http 的区别是什么？https 为什么比 http 安全？如何进行配置？</li>\n<li>说一下加密握手的过程</li>\n<li>对称加密和非对称加密的区别和用处</li>\n<li>介绍 SSL 与 TLS</li>\n<li>HTTP2.0的多路复⽤和HTTP1.X中的⻓连接复⽤有什么区别？</li>\n<li>HTTP2.0多路复⽤有多好？</li>\n<li>http1.1 时如何复用 tcp 连接</li>\n<li>HTTPS 怎么建立安全通道，Https 的加密过程</li>\n<li>介绍下数字签名的原理</li>\n</ul>\n<h3>http状态码</h3>\n<ul>\n<li>\n<p>301、302 的 https 被挟持怎么办？</p>\n</li>\n<li>\n<p>403、301、302 是什么</p>\n</li>\n<li>\n<p>301，302，304 的区别</p>\n</li>\n<li>\n<p>说一下常见的状态码</p>\n</li>\n<li>\n<p>介绍一下网络的五层模型</p>\n</li>\n<li>\n<p>服务端怎么做统一的状态处理</p>\n</li>\n<li>\n<p>前端安全、中间人攻击</p>\n</li>\n<li>\n<p>http请求由什么组成？</p>\n</li>\n<li>\n<p>Http 连接是如何复用的</p>\n</li>\n<li>\n<p>客户端如何发送 http 请求</p>\n</li>\n<li>\n<p>前后端通信使用什么方案</p>\n</li>\n<li>\n<p>RESTful 常用的 Method</p>\n</li>\n<li>\n<p>Access-Control-Allow-Origin 在服务端哪里配置</p>\n</li>\n<li>\n<p>说一下 https 获取加密秘钥的过程</p>\n</li>\n<li>\n<p>TCP 三次握手</p>\n</li>\n<li>\n<p>请求是异步的为什么会造成阻塞</p>\n</li>\n<li>\n<p>请描述 CSRF、XSS 的基本概念、攻击原理和防御措施？</p>\n</li>\n<li>\n<p>Http报文的请求会有几个部分？请写出 HTTP 报文的组成部分</p>\n</li>\n<li>\n<p>CDN 是什么？描述下 CDN 原理？为什么要用 CDN?</p>\n</li>\n<li>\n<p>PWA 是什么？对 PWA 有什么了解</p>\n</li>\n<li>\n<p>DNS 解析的具体过程</p>\n</li>\n<li>\n<p>常见的 http 请求头都有哪些，以及它们的作用</p>\n</li>\n<li>\n<p>encoding 头都有哪些编码方式</p>\n</li>\n<li>\n<p>utf-8 和 asc 码有什么区别</p>\n</li>\n<li>\n<p>tcp 和 udp 有什么区别？tcp 怎样确保数据正确性？tcp 头包含什么？tcp 属于哪一层？</p>\n</li>\n<li>\n<p>传输层和网络层分别负责什么，端口在什么层标记</p>\n</li>\n<li>\n<p>是否用过 restful 接口，和其他风格的有什么区别</p>\n</li>\n<li>\n<p>说一下 get、post、put 的区别</p>\n</li>\n<li>\n<p>什么是同源策略？什么是跨域？都有哪些方式会造成跨域？解决跨域都有什么手段？</p>\n</li>\n<li>\n<p>什么是 CORS，CORS 需要前端配置还是后端配置？</p>\n</li>\n<li>\n<p>接口怎么防刷</p>\n</li>\n<li>\n<p>说一下 jQuery ajax、axios、fetch 的区别？</p>\n</li>\n</ul>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp网络优化0030.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp网络优化0030.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>网络优化</h1>\n<h3>网络请求过程</h3>\n<p>理解OSI七层网络模型，尤其是应用层、传输层和网络层</p>\n<p>HTTP</p>\n<p>DNS查询\n浏览器向域名服务器发起DNS查询请求，得到一个ip地址，第一次请求之后，这个ip地址会缓存一段时间，这对加速后面的DNS查询。通过主机名加载一个页面通常只需要一次DNS查询</p>\n<p>DNS劫持</p>\n<p>TCP握手\n浏览器与服务器之间通过三次握手建立连接，通过这个机制让两端尝试进行通信，可以在上层协议（如https）在发送数据之前，可以协商网络套接字连接的一些参数。</p>\n<p>3次握手和4次挥手</p>\n<p>TLS协商\n为了建立安全连接，TLS协商是另一种握手，它的作用是协商在通信过程中数据的加密方式，牺牲等待时间来换取安全的连接，保证数据不被第三方解密。</p>\n<p>对称加密和非对称加密</p>\n<p>发出请求，服务器处理数据，响应返回\n对于网站来说，第一个响应通常是一个html文件，发出请求到收到第一个html数据包的时间称为TTFB</p>\n<p>状态码\n响应头：缓存</p>\n<p>TCP慢启动和拥塞控制\n慢启动即第一个响应数据包的大小约为14kb，后面逐渐增加发送数据的数量（后面的数据包大小依次是前一个的2倍）直到达到网络的最大带宽。服务器通过TCP数据包发送数据时，客户端通过返回确认帧来确认传输，由于连接容量有限，服务器如果短时间发送大量包，那么有些包就会被丢弃，这些被丢弃的包就不会返回确认帧。服务器通过发送包和确认帧来确定发送速率。</p>\n<h3>缩短请求时间</h3>\n<p>DNS和CND，</p>\n<ol>\n<li>不走传统的DNS解析（运营商本地的DNS服务器），自己搭建基于 HTTP 协议的 DNS 服务器集群</li>\n<li>静态资源上CDN，加速下载</li>\n<li>DNS预解析/资源预加载\nHTTP缓存</li>\n<li>强缓存：通过HTTP请求头 cache-control字段的max-age和expires来控制失效时间</li>\n<li>协商缓存：Last-Modified/If-Modify-Since、Etag/If-None-Match\n当浏览器第一次向服务器请求资源时，服务器会在该资源的请求头中加上Last-Modified，表示该资源最新的修改时间。当浏览器再次请求该资源时，会在请求头带上If-Modify-Since，Last-Modify和If-Modify-Since是同一个时间。服务器收到If-Modify-Since和该资源的当前最新的修改时间对比，相等则返回304</li>\n</ol>\n<p>Etag/If-None-Match和Last-Modified/If-Modify-Since类似，浏览器第一次请求，服务器返回一个标识存到Etag中，后面浏览器再请求时，把它通过If-None-Match字段回传回去，改变了就重新返回，没有则返回304。Etag标识着资源在服务器的唯一性</p>\n<p>两者比较</p>\n<ul>\n<li>Last-Modified标注只能精确到秒级</li>\n<li></li>\n</ul>\n<h3>减少请求数量</h3>\n<ol>\n<li>请求合并</li>\n<li>按需加载</li>\n<li>重复请求处理</li>\n<li>合理缓存接口数据</li>\n</ol>\n<h3>减少请求体积</h3>\n<ol>\n<li>请求资源压缩</li>\n<li>HTTP压缩</li>\n<li>图片格式转换（webP等）</li>\n<li>合理的请求头的Cookie处理</li>\n</ol>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp网络模型0052.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp网络模型0052.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>网络模型</h1>\n<h2>关键词</h2>\n<ul>\n<li>OSI七层模型</li>\n<li>网络层、传输层</li>\n<li>TCP、UDP</li>\n</ul>\n<h3>网络模型、ISO/OSI七层模型、TCP/IP模型</h3>\n<pre><code>最开始的时候网络协议是由网络公司自定义的，微软、苹果、思科等都有自己的网络协议，但这各家的协议是不能互联互通的。对于消费者来说这是技术垄断，买了苹果的设备就不能用微软的设备，因为他们的协议都是不一样的，没有统一的标准来规范网络协议，这极大阻碍了互联网的发展，因此国际标准化组织（ISO）制定了一个用于计算机或者通信系统间互联的标准体系，即开放式系统互联模型（OSI）。\n\n这个标准解释了协议之间应该如何相互作用，OSI定义了网络互连的七层模型（物理层、数据链路层、网络层、传输层、会话层、表示层、应用层），TCP/IP是一组协议的代名词，它包括许多协议，组成了TCP/IP协议簇。它是把OSI七层模型简化成了四层模型（应用层、传输层、网络层、网络接口层），TCP/IP模型将OSI模型简化成4层，传输层和网络层被完整保留，因此网络中最核心的技术就是传输层和网络层技术。网络7层模型是一个参考标准，并非实现。网络4层模型是一个实现的应用模型\n\nOSI模型是从上往下的，越底层越接近硬件，越上层越接近软件，这种分层模型是我们计算机科学中常用的方法，分层直接通过规定好的接口进行交互，每一层其实对它上一层或者下一层都是一个黑盒，其实他的上层和下层也不关心它的内部实现，只关心它们之间进行交互的接口，接口是规定的信息，要给到什么都是规定好的。传输层的数据称为段（segments），网络层的数据称为包（packages），数据链路层的数据称为帧（frames），物理层的数据称为比特流（bits）\n\n这种分层模型的好处就是可以对任何一层进行独立升级和优化，只要保持接口不变那么这个模型整体就不会有问题。\n\n应用层：为操作系统或网络应用程序提供网络服务的接口。起到了调用的作用，为应用软件而设的接口，设置与另一应用软件之间的通信，提供不同计算机间的文件传输、访问管理、电子邮件内容处理。例如: HTTP，HTTPS，FTP，TELNET，SSH，SMTP、DNS等\n\n表示层：主要任务是把所传输的数据的抽象语法变换为传送语法，把不同计算机内部的不同形式转换为网络通信中的标准形式。此外对传送数据的加密解密、正文压缩还原也属于表示层的的任务，即数据的处理，表示、安全、压缩等，格式有，jpeg、ascii、decoic、加密格式等。如URL加密、口令加密、图片编码解码等\n\n会话层：负责在数据传输中设置和维护计算机网络中两台计算机之间的通信连接。控制应用程序之间的会话能力，保持数据的单向传输，一对一，一对多的控制。如服务器验证用户登录、断点续传等\n\n运输层：端到端传输数据的基本功能，高低层之间衔接的接口层，定义传输数据的协议端口号以及流控和差错校验，如TCP、UDP、进程、端口\n\n网络层：定义ip编址，定义路由功能，进行逻辑地址的寻址，实现不同网络之间路径选择，如不同设备的数据转发。如IP地址、路由器、多层交换机、防火墙等\n\n数据链路层(DataLink)：定义数据的传输格式，如何传输，如何标识。建立逻辑连接、进行硬件地址寻址、差错校验等，将比特组合成字节进而组合成帧，用MAC地址访问介质，错误发现但不能纠正。如MAC地址、网卡、网桥、二层交换机等\n\n物理层（Physical）：底层数据传输，建立、维护、断开物理连接。如中继器、集线器、网线等\n</code></pre>\n<h3>传输层</h3>\n<p>TCP是面向连接的、可靠的、基于字节流的传输层协议。</p>\n<p>TCP协议主要特点</p>\n<pre><code>TCP是面向连接的传输层协议。应用程序在使用TCP协议之前，必须先建立TCP连接，在传输数据完毕之后，必须释放已经建立的TCP连接\n\n每一条TCP连接只能有两个端点，每一个TCP连接只能是点对点的（一对一）。\n\nTCP提供全双工通信。TCP允许通信双方的应用进程在任何时候都能发送数据，TCP连接的两端都设有发送缓存和接收缓存，用来存放双向通信的数据。\n\n字节流。用户消息通过TCP协议传输时，消息可能被操作系统分组成多个TCP报文，如果接收方的程序不知道消息边界，是无法读出一个有效的用户消息的。并且TCP报文是有序的，当前一个TCP报文没有收到的时候，即使它先收到的后面的TCP报文，那么也不能扔给应用层去处理，同时对重复的TCP报文会自动丢弃。\n\n可靠性：无论网络链路中出现了怎样的变化，TCP都可以保证一个报文一定可以到达接收端。通过流量控制、超时重传、拥塞控制等机制来保证可靠性\n</code></pre>\n<p>TCP连接的三次握手和四次挥手</p>\n<ol>\n<li>最开始，客户端和服务端都处于CLOSE状态，首先服务器主动监听某个端口，处理LISTEN状态</li>\n<li>客户端向服务端发起连接，并且把第一个SYN报文发送给服务端，之后客户端处于SYN-SEND状态</li>\n<li>服务端收到客户端的SYN报文，向客户端发送SYN+ACK报文，之后服务端处于SYN-RCVD状态</li>\n<li>客户端收到服务端的报文后，还要向服务端发送一个应答报文ACK，之后客户端处于ESTABLISH状态</li>\n<li>服务端收到客户端的应答报文之后，也处于ESTABLISH状态</li>\n</ol>\n<p><strong>第三次握手是可以携带数据的，前两次是不可以携带数据的</strong></p>\n<h4>为什么是三次握手，而不是两次、四次</h4>\n<pre><code>阻止重复历史连接的初始化，防止旧的重复连接初始化造成混乱，即为了防止已经失效的连接请求报文段突然又传到服务端，产生错误\nTCP的可靠连接是靠seq（sequence numbers序列号）来达成的，通过TCP连接发送的每一个包，都有一个sequence number，因为每个包都要序列号的，所以都能被确认收到这些包，即通信双方都要确认对方收到了自己的序列号\n\n同步双方的初始序列号\n避免浪费资源\n</code></pre>\n<h4>第一次握手丢失了，会发生什么？</h4>\n<p>会触发「超时重传」机制，重传 SYN 报文，而且重传的 SYN 报文的序列号都是一样的，不同版本的操作系统可能超时时间不同，有的1s、有的3s，这个时间是写死在内核里的。在Linux里，客户端的 SYN 报文最大重传次数由 tcp_syn_retries内核参数控制，这个参数是可以自定义的，默认值一般是 5。通常，第一次超时重传是在 1 秒后，第二次超时重传是在 2 秒，第三次超时重传是在 4 秒后，第四次超时重传是在 8 秒后，第五次是在超时重传 16 秒后。没错，每次超时的时间是上一次的 2 倍。当第五次超时重传后，会继续等待 32 秒，如果服务端仍然没有回应 ACK，客户端就不再发送 SYN 包，然后断开 TCP 连接。</p>\n<h4>第二次握手丢失了，会发生什么？</h4>\n<p>服务端收到客户端第一次握手后，就会回SYN-ACK给客户端，这就是第二次握手，此时服务端就会进入到SYN-RCVD状态\n第二次握手的SYN-ACK有两个作用</p>\n<ul>\n<li>第二次握手里的ACK，是对第一次握手的确认报文</li>\n<li>第二次握手里的SYN，是服务端发起建立TCP连接的报文</li>\n</ul>\n<p>因为第二次握手报文里包含对客户端第一次握手的确认ACK报文，如果客户端迟迟收不到第二次握手，那么客户端就会觉得自己的SYN报文（第一次握手）丢失了，于是客户端就会触发超时重传机制，重新传输SYN报文。最终客户端断开连接</p>\n<p>又因为第二次握手中包含服务端SYN报文，当客户端收到后，需要给服务端发送ACK确认报文（第三次握手），服务端才会认为该SYN报文被客户端收到了，如果第二次握手丢失了，那么服务端收不到第三次握手，于是服务端这边会触发超时重传机制，重新传输SYN-ACK报文。最终服务端断开连接</p>\n<h4>第三次握手丢失了，会发生什么？</h4>\n<p>第三次握手是对第二次握手的SYN的确认报文，当第三次握手丢失了，服务端迟迟收不到确认报文，就会触发超时重传机制，重新传输SYN-ACK直到收到第三次握手或者达到最大重传次数。ACK报文是不会有重传的，当ACK丢失了，就有对方重传对应的报文。</p>\n<h4>SYN攻击</h4>\n<p>我们都知道 TCP 连接建立是需要三次握手，假设攻击者短时间伪造不同 IP 地址的 SYN 报文，服务端每接收到一个 SYN 报文，就进入SYN_RCVD 状态，但服务端发送出去的 ACK + SYN 报文，无法得到未知 IP 主机的 ACK 应答，久而久之就会占满服务端的半连接队列，使得服务端不能为正常用户服务</p>\n<p>UDP不提供复杂的控制机制，利用IP提供面向无连接的通信服务</p>\n<h4>TCP和UDP的区别</h4>\n<pre><code>连接： TCP面向连接的传输层协议，传输数据之前先要建立连接。UDP不需要连接，即刻传输数据\n\n服务对象：TCP提供一对一的两点服务。UDP支持一对一、一对多、多对多的交互通信。\n\n可靠性：TCP是可靠交付数据的，数据可以无差错、不丢失、不重复、按序到达。UDP尽最大努力交付，不保证可靠交付数据，但可以基于UDP传输协议实现一个可靠的传输协议，例如QUIC协议\n\n拥塞机制、流量控制：TCP有拥塞机制和流量控制机制，保证数据传输的安全性。UDP则没有，即使网络非常拥堵，也不会影响UDP的发送速率\n\n首部开销：TCP首部较长会有一定的开销，没有开启选项时为20个字节，开启之后会更长。UDP首部固定8字节，固定不变，开销较小\n\n传输方式：TCP是流式传输，没有边界，但保证顺序和可靠。UDP是一个包一个包的发送，是有边界的，但可能丢包或乱序。\n\n分片不同：TCP数据大小如果大于MSS大小，则会在传输层进行分片，目标主机收到后，同样在传输层组装TCP数据包，如果中途丢失一个分片，只需要传输丢失的这个分片。UDP的大小如果大于MTU的大小，则会在IP层进行分片，目标主机收到后，在IP层组装完数据，再接着传输给传输层。\n</code></pre>\n<h4>TCP和UDP的应用场景</h4>\n<pre><code>TCP：FTP文件传输、HTTP/HTTPS\nUDP：包总量较少的通信，如DNS、SNMP等、视频音频等多媒体通信、广播通信。\n</code></pre>\n<h3>网络层</h3>\n<p>网络层的作用就是实现主机和主机之间的通信</p>\n<p>IP地址是用来识别网络上的设备，IP地址是由网络地址与主机地址两部分所组成。例如，在我们家里常用的地址：192.168.1.2中，192.168.1为网络地址。主机地址位于IP地址的后段，用来标识具体设备。同一网络上的设备都具有唯一的IP地址，只有IP地址唯一才能正常通信。就拿刚才的电话号码来说，只有号码唯一才能真正找到人，在IP地址192.168.1.2中，2就是主机地址。</p>\n<p>IP地址按照网络类型划分为5类：分别是A、B、C、D、E</p>\n<p>子网掩码即掩盖掉主机号，将子网掩码和 IP 地址按位计算 AND，就可得到网络号。\n子网掩码除了划分网络号和主机号，还一个作用即划分子网</p>\n<h3>网关和路由器</h3>\n<p><a href=\"https://datatracker.ietf.org/doc/html/rfc2616\">rfc草案</a></p>\n<p><a href=\"https://juejin.cn/post/6844903492763533319\">网络七层模型与四层模型区别</a></p>\n<p><a href=\"https://xiaolincoding.com/network/\">小林coding</a></p>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp设计模式0046.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp设计模式0046.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h3>设计模式</h3>\n<ul>\n<li>手写单例模式（singleton）</li>\n</ul>\n<pre><code class=\"language-js\">//单例模式\nfunction Singleton(name){\n  this.name=name;\n  this.instance = null;\n}\nSingleton.prototype.getName=function(){\n  console.log(this.name);\n}\n\nSingleton.getInstance = function(name){\n  if(this.instance){\n    return this.instance;\n  }\n  return this.instance = new Singleton(name);\n}\n\nlet A = Singleton.getInstance('A');\nlet B = Singleton.getInstance('B');\n\nconsole.log(A===B);\nconsole.log(A.getName());\nconsole.log(B.getName());\n</code></pre>\n<ul>\n<li>手写观察者模式（observer）、发布订阅模式</li>\n</ul>\n<pre><code class=\"language-js\">// 观察者模式\nclass Observer{\n  static event = new Map();\n  static on = (name,fn)=>{\n    this.event.set(name,{isOnce:false,fn})\n  }\n  static once = (name,fn)=>{\n    this.event.set(name,{isOnce:true,fn});\n  }\n  static off = (name)=>{\n    this.event.delete(name);\n  }\n  static emit = (name,data)=>{\n    let cashe = this.event.get(name);\n    if(cashe){\n      if(cashe.isOnce){\n        this.event.delete(name);\n      }\n      cashe.fn(data);\n    }\n  }\n}\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp链表0047.tsx":
/*!*****************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp链表0047.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h3>链表</h3>\n<ul>\n<li>用js实现一个链表，包括创建、增删改查操作</li>\n</ul>\n<pre><code class=\"language-js\">function LinkNode (val) {\n  this.next = null;\n  this.val = val;\n}\n\nfunction createLinkList (arr) {\n  let head = new LinkNode(null);\n  let curr = new LinkNode(null);\n\n  head.next = curr;\n  for (const item of arr) {\n    const node = new LinkNode(item);\n    curr.next = node;\n    curr = curr.next;\n  }\n  return head.next;\n}\n\nfunction traverseLinkList (linkList) {\n  let currNode = linkList.next;\n  while (currNode) {\n    currNode = currNode.next;\n  }\n}\n\nconst LinkList = createLinkList([1, 2, 3])\ntraverseLinkList(LinkList)\n\n\n</code></pre>\n<ul>\n<li>写一个函数判断链表是否有环</li>\n<li>如何判断链表是否有环？</li>\n<li>写一个函数实现链表反转</li>\n<li>请使用 js 实现一个双向链表</li>\n<li>写一个单向链数据结构的 js 实现并标注复杂度</li>\n<li>给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null。</li>\n<li>反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。</li>\n<li>定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。</li>\n</ul>\n<pre><code class=\"language-js\">//输入: 1->2->3->4->5->NULL\n//输出: 5->4->3->2->1->NULL\n</code></pre>\n<ul>\n<li>给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。</li>\n</ul>\n<pre><code class=\"language-js\">// 给定一个链表: 1->2->3->4->5, 和 n = 2.\n// 当删除了倒数第二个结点后，链表变为 1->2->3->5.\n// 说明：给定的n保证是有效的\n</code></pre>\n<ul>\n<li>给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中没有重复出现的数字</li>\n<li>输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。</li>\n</ul>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp静态构建0031.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp静态构建0031.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: ""
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp面试记录0066.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp面试记录0066.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<p>7.28</p>\n<ol>\n<li>你的性能优化怎么做的</li>\n<li>http缓存</li>\n<li>写过哪些react自定义hook？怎么做的？</li>\n<li>说一说useState？</li>\n<li>react-router了解吗？操作权限和页面权限怎么做？</li>\n<li>前端跨域问题？怎么解决？</li>\n<li>类组件和函数组件区别？优化</li>\n<li>说一说函数式编程？函数柯里化是什么？</li>\n<li></li>\n</ol>\n<p>8.3</p>\n<ol>\n<li>性能优化怎么做的，webpack tree-shaking，优化之后包体积、webpack热更新</li>\n<li>说一说es6 map和set、weakmap和weakset</li>\n<li>怎么解决跨域问题</li>\n<li>react渲染优化</li>\n<li>怎么渲染一颗树</li>\n<li>vue的好用的地方</li>\n<li>vue更新引用类型</li>\n</ol>\n<p>8.21</p>\n<ol>\n<li>hybrid怎么理解</li>\n<li>手机fps和浏览器的fps</li>\n<li>字符串去空格，时间复杂度O(1)</li>\n<li>取数组（没有重复项）的第二大的数，</li>\n<li>position：absolute相对于谁</li>\n</ol>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp项目0067.tsx":
/*!*****************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp项目0067.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h3>经验</h3>\n<ol>\n<li>熟练掌握Javascript，能脱离框架进行原生开发，熟悉Typescript</li>\n<li>熟练使用React框架以及相关生态技术，能独立完成项目的搭建和项目部署</li>\n<li>熟悉浏览器原理以及计算机网络相关技术，在性能优化方面有较多实践经验</li>\n<li>对前端工程化/模块化有一定了解，熟悉webpack、rollup等打包工具及其日常开发配置，有过从0到1的独立搭建项目经验，并优化构建流程</li>\n<li>了解vue框架技术，有相关实践经验</li>\n<li>了解node.js和常用模块，能开发web服务器</li>\n</ol>\n<p>前端单元测试，\n前端集群项目</p>\n<p>请求相关：axios、跨域、jsonp和跨域资源共享,nginx基本配置</p>\n<h3>大流量下前端页面优化</h3>\n<ol>\n<li>服务器瘫痪，前端请求不到数据，对前端页面的容错容灾有更高的要求</li>\n<li>大流量意味着各种终端都可能存在，高中低端机适配，兼容性的要求</li>\n<li>服务器压力大，前端需要做一些措施,前端层面缓解服务器压力的方式有</li>\n</ol>\n<p>请求数量精简（合并）：同类型文件/请求合并，例如请求合并，js、css模块合并，图片雪碧图等方式，合并影响下载速率</p>\n<p>请求大小精简（压缩）：各种资源的压缩，例如js、css、html等文件进行去空格、精简变量名、哈夫曼编码操作，图片可以转换格式和图片压缩算法。压缩影响代码可读性，影响线上问题定位，压缩算法局限性会造成某些平台无法使用，兼容</p>\n<p>缓存，分流请求：http cache、localstorage、离线包等，缓存影响资源时效性</p>\n<p>针对以上优化手段，有利有弊，需要对其进行更细粒度的差异化分解，然后对每个部分使用最优的方式进行处理</p>\n<h3>兼容性</h3>\n<ol>\n<li>js代码的兼容性，例如Object.values的polyfill</li>\n<li>页面在不同设备的适配，例如1px问题、</li>\n<li>客户端时间和服务器时间一致性</li>\n</ol>\n<h3>项目难点（复杂度）</h3>\n<ol>\n<li>问题一 :页面中有一个弹窗，弹窗关闭之后会有一段星星飞入的动画（requestAnimationFrame），当动画结束的时候，更新星星值。有些时候在这个弹窗中点击按钮会跳转到一个新页面（新开一个webview），然而再返回这个页面的时候会发现星星的总数没有变化</li>\n</ol>\n<pre><code>requestAnimationFrame在页面推入后台时会停止\n</code></pre>\n<ol start=\"2\">\n<li>问题二：页面中很多卡片，分布在不同的模块中，每一个卡片有可能有视频或者社交信息（好友情况）也可能两个都有或者都没有。现在我们滚动页面，等我们停止滚动的时候，查找可视区域中的卡片，按照从上往下从左往右的顺序依次进行触发，如果是视频就自动播放，如果是社交信息就进行前后翻转，视频可以循环播放，翻转只翻转一次。</li>\n</ol>\n<pre><code>\n卡片组件 游戏图片+标题+按钮\n\n视频容器+背面社交组件\n\nhoc+forwardRef和useImperativeHandle来做业务管理\n视频自动播放及结束回调（onEnded回调）\n卡片翻转效果及结束回调（transitionend事件监听）\n\n写一个全局行为管理类，滚动监听，动态更新当前可视区域的dom\n</code></pre>\n<ol start=\"3\">\n<li>问题三：时长统计脚本，兼容性、包体积控制、扩展性、安全与作弊。</li>\n</ol>\n<pre><code>玩游戏的时间收集，要求兼容低端机、数据精确、安全、主页面无感知\n每隔3s存一次localStorage累加、每隔15s心跳上报一次，设置一天上限时长\n</code></pre>\n<ol start=\"4\">\n<li>问题四：倒计时准确性与统一性，倒计时误差</li>\n</ol>\n<pre><code>本地时间戳进行计算，倒计时不准\n多个地方使用同一个倒计时组件，接收同一份数据。例如一个红包中有倒计时，等它滚动到不可见时，需要在页面顶部或者右下方展示一个倒计时的组件，这时候特别注意倒计时的统一问题\n\n1. 网络延迟\n2. 本地时间修改\n3. setTimeout不够精准\n</code></pre>\n<ol start=\"5\">\n<li>问题五：前端数字累加，数字动画,countup.js</li>\n</ol>\n<pre><code>1. toFixed精度问题\n2. 动画未结束将页面压入后台，再回来时动画被其他动画打断。\n场景：选择一个商品，可以跳转其他页面做任务，返回之后价格下降。页面刚加载完成时，先给商品将一次价格，通过countup.js完成一个价格下降的动画。在降价动画未完成时跳转页面去做任务了，完成之后返回这个页面，它需要有个价格的下调，但是这时候却发现价格没有变化。\n3. 前端小数加减精度问题\n\n如何解决\n通过监听visibilitychange事件，在页面压入后台时，将价格reset，当docuemnt.visibilityState变为true时播放新数值动画\n</code></pre>\n<ol start=\"6\">\n<li>问题六：react和rax在渲染过程中又触发了渲染，不会触发useEffect</li>\n</ol>\n<pre><code>react中的useEffect：messageChannel\nrax中的useEffect：setTimeout\n</code></pre>\n<ol start=\"7\">\n<li>问题七：rax useEffect不按照顺序执行</li>\n<li>swiper,3d效果在iphone上闪</li>\n<li>模版引擎问题，图片、文案、样式等夹杂展示</li>\n</ol>\n<pre><code>场景：前端需要展示一条文案，但是文案中的有些数值、icon是变化的（需要后端返回），位置、数量和样式不确定。例如\n&quot;可获得✨x200&quot;，200需要红色+加粗，可能还需要特殊字体\n&quot;200x✨可兑换1x🧧&quot;，\n&quot;1x🧧最高可得2元&quot;等等\n\n难点：\n1. 多个图片占位匹配\n2. 样式自定义\n</code></pre>\n<ol start=\"10\">\n<li>弹窗队列问题</li>\n</ol>\n<pre><code>场景：达到拆红包的门槛之后，我们会赠送一堆红包给用户，在页面上就看见一堆红包叠在一起，拆一个红包播放一个炫酷动画，增加余额。\n难点：\n1. 弹窗队列管理问题，\n2. 前端数字相加精度问题\n3. 拆红包的动画流畅度问题\n</code></pre>\n<ol start=\"11\">\n<li>性能优化</li>\n</ol>\n<pre><code>性能优化涉及到的细节非常多，包含了系统打包、网络传输、页面渲染、代码优化等各个方面。我们的系统以电商为主，它的特点是流量比较大、图片字体视频各类静态资源比较多、用户人群主要是三四线的中老年人、手机主要以低端安卓手机为主。产品的关注点是留存率、停留时长，最重要的是下单率，技术上关注的是页面的性能优化和稳定性，性能优化根据业务诉求和产品特点来有针对性的开展工作，前端的性能优化关注的指标是页面的首屏时间和可交互时间，稳定性关注的指标是线上页面报错的情况以及用户投诉情况。\n首先我们做的是app内嵌h5页面，我们的页面是依托客户端的webview的，最具h5页面特色优化是离线包和静态构建（页面预静态化），我们知道首屏时间主要是两部分组成，网络耗时和渲染耗时，因此离线包和静态构建就是为了专门应对这两个问题的解决方案。\n\n离线包：主要作用就是减少网络耗时，预先将资源打离线包传到离线包平台中，当客户端启动之后和离线包平台进行版本对比，动态更新离线包。此时离线包就下载到客户端本地了。当webview真正去加载某个h5页面的时候，拦截请求并且查看该资源是否存在于本地，存在的话就可以从本地加载页面了。大致原理是第一个版本会预置到客户端的安装包里，同时会上传到离线包平台上，该平台除了可以保存离线包之外还会生成一个包含关于该离线包信息的json文件（packageIndex），包含版本、url地址等信息。当我们的项目发布新版本时候，会通过一个webpack插件（offline-package-webpack-plugin）打包出一个新的离线包。这个时候我们把离线包上传到离线包平台，那么保存离线包的json文件就会发生变化（版本更新），等到客户端启动并请求最新的packageIndex文件时,发现离线包 main 的版本比本地对应离线包的版本大时，会从离线包平台下载最新的版本，并以此作为查询本地静态资源文件的资源池。当然可以对新旧两个离线包进行diff算出差异得出差分包，客户端只需要下载差分包了。\n\n静态构建：静态构建类似于服务端渲染，它是在构建的时候借助webpack插件和react原生的服务端渲染能力生成相对完善html的dom结构。我们可以通过 webpack插件将一些特定页面在编译时就注入DOM结构，这样做有几个好处：第一缩短页面白屏时间，第二相对于服务器端渲染节省云基础设施资源成本，第三输出给搜索引擎爬取页面通用内容。通过webpack插件系统获取每次构建的compilation上下文，通过html-webpack-plugin的before AssetTagGeneration hook获取当前页面bundle，afterTemplateExecution hook获取当前页面编译后的模板HTML，通过eval执行bundle导出的整个页面APP模块，通过ReactDomServer对单页应用的每个路由产出APP HTML与模板HTML合并后落盘为预静态化的HTML。\n\n其他都是一些基本常规的优化操作，需要有相对完善的前端知识做支撑。例如\n团队协作，网络相关优化涉及后端相关人员，静态资源如图片、视频、动画、字体等涉及视觉相关人员\n\n代码优化\n1. React\n2. 静态资源，如图片、视频\n3. \n打包优化\n1. tree-shaking\n2. 静态构建\n3. \n网络优化\n1. DNS优化：DNS预获取（掩盖DNS解析延迟）、DNS缓存（减少DNS查询次数）\n2. 静态资源CDN缓存\n3. 开启HTTP缓存\n4. 首屏请求：预请求（head-prefetch）、错误重试（3次），\n渲染优化\n\n</code></pre>\n<ol start=\"12\">\n<li>国际化、本地化、全球化</li>\n</ol>\n<pre><code>国际化：又称i18n，指的是在产品研发设计过程中进行预先准备，使产品能够在最低的调整成本下最快速地适应全球需求，可以使用同一套代码在不同国家和地区发布和应用，因此国际化相对本地化来说关注的是产品或者服务更底层的内核是否能国际通用。重要的几个方面：\n1. 编码格式：很多传统的编码标准仅能适配一些特定的拉丁字母语言，但如果要同时兼容很多不同类型且差异巨大的东西方语言时，Unicode会是国际化过程中更好的选择。如utf-8\n2. 语言适配：语言和文化差异的适配性，比如\n语言长度：相同语境下东亚语言呈现的长度相对较短，所占空间较小，而拉丁字母和西里尔字母语言所占用的空间会明显增加\n\n3. 数据适配：在产品国际化的过程中，需要提前考虑不同国家的各类数据格式和属性，并做好充分的预留和准备。比如：\n时区问题：时间的显示涉及到时区配置，国际化的过程中一般会首先内部采用统一的UTC时间，然后再转换成特定的用户时区；\n电话问题：电话号码前面加入可选的国际区号，\n邮编问题：邮编允许字母和数字混合输入\n等等，都是产品国际化过程中必须要做的准备\n\n国际化的产品基本上图片居多，采用全图式的说明书类型，这样不但大大节省了多语言翻译的成本开支，同时还将原本繁琐的文字阅读体验简化成了老少皆宜的“依样画葫芦”\n\n本地化：又称l10n，是指将一种产品或服务改造适配使之能够适应特定地域的过程。在很多全球业务比较成熟的大型企业中，本地化和国际化是相辅相成的两个关联过程，一个产品在具备国际化的内核与架构之后，本地化相关的工作才能得以展开\n1. 语言的本地化，翻译是本地化最基础的一个环节，除了多语言翻译之外还有其他的语言习惯。例如有些国家的阅读习惯是从右到左，所以前端要做RTL的适配\n2. 文化的本地化，根据各国的文化传统，适配当地的文化观念也是重要的一环。比如我国的投资观念中，红色表示上涨和发展，绿色表示下跌和衰退。而在欧美国家恰恰相反的。此外在数据层面的单位、日期格式、货币单位等等，也都是需要重点关注的本地化项目\n3. 功能本地化，即功能的本地化调整，例如欧美用户在社交平台分享内容不能只有微博微信选项，如果国外一个拥有支付功能的app想进入中国就一定得支持支付宝或者微信。\n4. 合规，产品都需要做大量的合规性准备工作以适应不同地域的各种标准和规范。\n\n全球化：技术层面包含了国际化和本地化。全球化代表的是一整套从产品研发到全球营销落地的完整产品与服务流程，从更高的视野关注从产品研发管理、市场营销、售后支持，乃至国际贸易等等各个环节的相互关联和整体布局。而从操作层面上来看全球化有可能涉及的具体内容包括不限于供应链条、渠道合作、售后服务、仓储物流、特许经营、合规通关等等。因此换句话说，优秀的全球化实践是为了向不同地区的用户提供更好的“客户旅程（customer journey）”体验。\n\n\n相关的技术问题\n1. 文案问题（i18n）、编码问题\n2. 货币问题\n3. 样式问题，布局问题\n4. 时区问题、电话、邮编问题\n5. 功能适配问题\n\n</code></pre>\n<ol start=\"13\">\n<li>埋点方案</li>\n</ol>\n<pre><code>确定表示某个模块的方式，spma.b.c.d\n上报方式，批量上报，本地存储，\n</code></pre>\n<ol start=\"14\">\n<li>点赞功能，一个人可以点击多次，页面展示所有人点赞的总和</li>\n<li>如何设计一个秒杀前端系统</li>\n</ol>\n<pre><code>秒杀系统的特点：高峰时间短、大量用户抢少量商品\n\n前端可以做一些措施来分担服务器的压力，第一个过滤无效请求，第二个是CDN\n可以从以下几个方面入手\n1. 页面静态化：秒杀活动页面绝大多数内容是固定的，比如：商品名称、商品描述、图片等。为了减少不必要的服务端请求，通常情况下，会对活动页面做静态化处理。用户浏览商品等常规操作，并不会请求到服务端。只有到了秒杀时间点，并且用户主动点了秒杀按钮才允许访问服务端。\n2. 使用CDN，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率\n3. 秒杀按钮置灰，活动前不可点击的，活动开始时可以听过替换cdn上的js包来开启按钮点击，点击之后10s之内不能再点击\n</code></pre>\n<ol start=\"16\">\n<li>从0到1搭建内部组件库,如何设计</li>\n</ol>\n<pre><code></code></pre>\n<ol start=\"17\">\n<li>随机数</li>\n</ol>\n<pre><code>react useId\n\nMath.random\n\n</code></pre>\n<ol start=\"18\">\n<li>1px问题</li>\n<li>精度问题</li>\n</ol>\n<pre><code>1. 小数加减问题\n2. Math.PI是一个具体的值，我们计算Math.PI/2时也是一个具体的循环小数，在圆/弧的计算时会有偏差，我们希望Math.PI是一个常量，计算Math.PI/3、Math.PI/2直接返回Math.PI/3、Math.PI/2\n</code></pre>\n<h3>项目收获和技术迁移</h3>\n<p>性能优化：首屏优化、公共组件\n全面考虑：错误情况、边界情况\n页面兼容：</p>\n<p>hybrid h5</p>\n<h3>组件封装</h3>\n<ul>\n<li>实现一个自由拖动组件</li>\n<li>实现一个多弹窗管理组件</li>\n<li>实现一个虚拟列表</li>\n</ul>\n<h3>常见面试题</h3>\n<ol>\n<li>重复提交</li>\n<li>请求先后顺序？先请求后响应问题？</li>\n<li>数据解析和页面缓存</li>\n<li>路由懒加载</li>\n<li>前端的存储方案</li>\n<li>断网/弱网处理</li>\n<li>白屏</li>\n<li>组件封装</li>\n<li>数据持久化</li>\n<li>性能优化-图片处理</li>\n<li>命令式弹窗组件</li>\n</ol>\n<pre><code>1. 任意页面函数式调用，全局管理，createRoot创建一个新的root，并用context的provider套一层\n2. 数据传递和弹窗间通信问题，每个弹窗组件使用promise管理，\n3. 弹窗并存和覆盖问题\n4. 弹窗并存：最大数量控制、队列管理和优先级管理\n5. 每一个弹窗生命周期管理\n6. 弹窗管理优化，弹窗节点的复用、\n7. 判断是否遮挡\n</code></pre>\n<ol start=\"12\">\n<li>关于精度问题，数值精度问题和时间精度问题，客户端时间和服务器时间的一致性</li>\n<li>react如何catch错误的（window.addEventListener('error')）</li>\n<li>react重渲染次数的最大值（25次）</li>\n</ol>\n<h3>第三方库</h3>\n<ol>\n<li>轮播，swiper.js</li>\n<li>动画，anime.js、countup.js、lottie-web</li>\n<li>promise，bluebird.js</li>\n<li>组件库，antd</li>\n<li>表格，react-table、rc-table、formik</li>\n<li>状态管理，redux、mobx、rx.js</li>\n<li>类react，preact、inferno、Nerv</li>\n<li>命令弹窗，@ebay/nice-modal-react、</li>\n</ol>\n<h3>前端方向</h3>\n<ol>\n<li>图形、视频编辑器，相关框架PixiJs、ThreeJs、FabricJs</li>\n<li>低代码，相关框架LowercodeEngine</li>\n<li>微前端，相关框架qiankun</li>\n</ol>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp高频面试题0068.tsx":
/*!********************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp高频面试题0068.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      el.style.marginBottom = '0.1rem';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h3>js相关</h3>\n<ul>\n<li>事件循环，promise</li>\n<li>作用域，闭包</li>\n<li>引用类型，对象</li>\n</ul>\n<h3>css相关</h3>\n<ul>\n<li>position</li>\n<li>flex</li>\n<li>z-index</li>\n</ul>\n<h3>react相关</h3>\n<ul>\n<li>setState</li>\n<li>hook</li>\n<li>fiber</li>\n<li>合成事件</li>\n<li>diff</li>\n</ul>\n<h3>hybrid h5</h3>\n<ul>\n<li>native和web通信</li>\n<li>jsbridge</li>\n<li>浏览器渲染过程</li>\n</ul>\n<h3>typescript</h3>\n<ul>\n<li>type和interface对比</li>\n<li>泛型</li>\n</ul>\n<h3>网络</h3>\n<ul>\n<li>http各个版本对比</li>\n<li>http缓存</li>\n<li>http握手过程</li>\n<li>https</li>\n<li>网络安全</li>\n</ul>\n<h3>webpack</h3>\n<ul>\n<li>loader和plugin区别</li>\n<li>webpack打包过程</li>\n<li></li>\n</ul>\n<h3>数据结构与算法</h3>\n<ul>\n<li>查找数组中第二大的项</li>\n<li>排序的时间复杂度</li>\n</ul>\n<h3>项目</h3>\n<ul>\n<li>如何做性能优化</li>\n</ul>\n<ol>\n<li>代码优化</li>\n<li>打包优化</li>\n<li>网络优化</li>\n<li>渲染优化</li>\n</ol>\n<ul>\n<li>怎么排查问题，查错的过程</li>\n</ul>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/index.tsx":
/*!************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/index.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Compjs_0002__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Compjs发展历史0002 */ "./src/pages/Article/components/ArticleList/Compjs发展历史0002.tsx");
/* harmony import */ var _Compthis0003__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Compthis0003 */ "./src/pages/Article/components/ArticleList/Compthis0003.tsx");
/* harmony import */ var _Comp_0004__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Comp事件循环0004 */ "./src/pages/Article/components/ArticleList/Comp事件循环0004.tsx");
/* harmony import */ var _Comp_0005__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Comp作用域0005 */ "./src/pages/Article/components/ArticleList/Comp作用域0005.tsx");
/* harmony import */ var _Comp_0006__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Comp原型链0006 */ "./src/pages/Article/components/ArticleList/Comp原型链0006.tsx");
/* harmony import */ var _Comp_0007__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Comp常用正则表达式0007 */ "./src/pages/Article/components/ArticleList/Comp常用正则表达式0007.tsx");
/* harmony import */ var _Comp_0008__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Comp数据类型的隐式转换0008 */ "./src/pages/Article/components/ArticleList/Comp数据类型的隐式转换0008.tsx");
/* harmony import */ var _Comp_Date0009__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Comp时间问题Date0009 */ "./src/pages/Article/components/ArticleList/Comp时间问题Date0009.tsx");
/* harmony import */ var _CompNode_0010__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CompNode提问0010 */ "./src/pages/Article/components/ArticleList/CompNode提问0010.tsx");
/* harmony import */ var _Compkoa0011__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Compkoa0011 */ "./src/pages/Article/components/ArticleList/Compkoa0011.tsx");
/* harmony import */ var _CompHooks0012__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CompHooks0012 */ "./src/pages/Article/components/ArticleList/CompHooks0012.tsx");
/* harmony import */ var _CompReact_0013__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CompReact发展历史0013 */ "./src/pages/Article/components/ArticleList/CompReact发展历史0013.tsx");
/* harmony import */ var _CompReact_0014__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CompReact理解0014 */ "./src/pages/Article/components/ArticleList/CompReact理解0014.tsx");
/* harmony import */ var _Comp_0015__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Comp如何写一个按钮组件0015 */ "./src/pages/Article/components/ArticleList/Comp如何写一个按钮组件0015.tsx");
/* harmony import */ var _Comp_0016__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Comp如何封装一个插槽0016 */ "./src/pages/Article/components/ArticleList/Comp如何封装一个插槽0016.tsx");
/* harmony import */ var _Compts_0017__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Compts常用知识0017 */ "./src/pages/Article/components/ArticleList/Compts常用知识0017.tsx");
/* harmony import */ var _Compts_0018__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Compts理解0018 */ "./src/pages/Article/components/ArticleList/Compts理解0018.tsx");
/* harmony import */ var _Comp_0019__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Comp类型的发展历史0019 */ "./src/pages/Article/components/ArticleList/Comp类型的发展历史0019.tsx");
/* harmony import */ var _Compdevserver_0020__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Compdevserver工作原理0020 */ "./src/pages/Article/components/ArticleList/Compdevserver工作原理0020.tsx");
/* harmony import */ var _Compwebpack_0021__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Compwebpack工作原理0021 */ "./src/pages/Article/components/ArticleList/Compwebpack工作原理0021.tsx");
/* harmony import */ var _Comp_0022__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Comp前端工程化发展历史0022 */ "./src/pages/Article/components/ArticleList/Comp前端工程化发展历史0022.tsx");
/* harmony import */ var _Comp_plugin_loader0023__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Comp常用的plugin和loader0023 */ "./src/pages/Article/components/ArticleList/Comp常用的plugin和loader0023.tsx");
/* harmony import */ var _Comp_0024__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Comp代码优化0024 */ "./src/pages/Article/components/ArticleList/Comp代码优化0024.tsx");
/* harmony import */ var _Comp_0025__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Comp动画优化0025 */ "./src/pages/Article/components/ArticleList/Comp动画优化0025.tsx");
/* harmony import */ var _Comp_0026__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Comp图片优化0026 */ "./src/pages/Article/components/ArticleList/Comp图片优化0026.tsx");
/* harmony import */ var _Comp_0027__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Comp打包优化0027 */ "./src/pages/Article/components/ArticleList/Comp打包优化0027.tsx");
/* harmony import */ var _Comp_0028__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Comp渲染优化0028 */ "./src/pages/Article/components/ArticleList/Comp渲染优化0028.tsx");
/* harmony import */ var _Comp_0029__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Comp离线包0029 */ "./src/pages/Article/components/ArticleList/Comp离线包0029.tsx");
/* harmony import */ var _Comp_0030__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Comp网络优化0030 */ "./src/pages/Article/components/ArticleList/Comp网络优化0030.tsx");
/* harmony import */ var _Comp_0031__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Comp静态构建0031 */ "./src/pages/Article/components/ArticleList/Comp静态构建0031.tsx");
/* harmony import */ var _CompCSS0032__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./CompCSS0032 */ "./src/pages/Article/components/ArticleList/CompCSS0032.tsx");
/* harmony import */ var _Comppromise0033__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Comppromise0033 */ "./src/pages/Article/components/ArticleList/Comppromise0033.tsx");
/* harmony import */ var _Comptypescript0035__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Comptypescript0035 */ "./src/pages/Article/components/ArticleList/Comptypescript0035.tsx");
/* harmony import */ var _Comp_0036__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Comp函数0036 */ "./src/pages/Article/components/ArticleList/Comp函数0036.tsx");
/* harmony import */ var _Comp_0037__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Comp动态规划0037 */ "./src/pages/Article/components/ArticleList/Comp动态规划0037.tsx");
/* harmony import */ var _Comp_0038__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Comp场景题0038 */ "./src/pages/Article/components/ArticleList/Comp场景题0038.tsx");
/* harmony import */ var _Comp_0039__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Comp字符串0039 */ "./src/pages/Article/components/ArticleList/Comp字符串0039.tsx");
/* harmony import */ var _Comp_0040__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Comp手写系列0040 */ "./src/pages/Article/components/ArticleList/Comp手写系列0040.tsx");
/* harmony import */ var _Comp_0041__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./Comp排列组合0041 */ "./src/pages/Article/components/ArticleList/Comp排列组合0041.tsx");
/* harmony import */ var _Comp_0042__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Comp数组0042 */ "./src/pages/Article/components/ArticleList/Comp数组0042.tsx");
/* harmony import */ var _Comp_0043__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./Comp时间相关0043 */ "./src/pages/Article/components/ArticleList/Comp时间相关0043.tsx");
/* harmony import */ var _Comp_0044__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./Comp栈与队列0044 */ "./src/pages/Article/components/ArticleList/Comp栈与队列0044.tsx");
/* harmony import */ var _Comp_0045__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./Comp树0045 */ "./src/pages/Article/components/ArticleList/Comp树0045.tsx");
/* harmony import */ var _Comp_0046__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./Comp设计模式0046 */ "./src/pages/Article/components/ArticleList/Comp设计模式0046.tsx");
/* harmony import */ var _Comp_0047__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./Comp链表0047 */ "./src/pages/Article/components/ArticleList/Comp链表0047.tsx");
/* harmony import */ var _CompDNS_CDN0048__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./CompDNS和CDN0048 */ "./src/pages/Article/components/ArticleList/CompDNS和CDN0048.tsx");
/* harmony import */ var _CompHTTP_0049__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./CompHTTP缓存0049 */ "./src/pages/Article/components/ArticleList/CompHTTP缓存0049.tsx");
/* harmony import */ var _CompHTTP_0050__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./CompHTTP网络的发展0050 */ "./src/pages/Article/components/ArticleList/CompHTTP网络的发展0050.tsx");
/* harmony import */ var _Comp_0051__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./Comp前端跨域0051 */ "./src/pages/Article/components/ArticleList/Comp前端跨域0051.tsx");
/* harmony import */ var _Comp_0052__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./Comp网络模型0052 */ "./src/pages/Article/components/ArticleList/Comp网络模型0052.tsx");
/* harmony import */ var _Comp_0053__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./Comp数据结构与算法0053 */ "./src/pages/Article/components/ArticleList/Comp数据结构与算法0053.tsx");
/* harmony import */ var _Comp_0054__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./Comp编码常识0054 */ "./src/pages/Article/components/ArticleList/Comp编码常识0054.tsx");
/* harmony import */ var _CompCss0055__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./CompCss0055 */ "./src/pages/Article/components/ArticleList/CompCss0055.tsx");
/* harmony import */ var _CompHybridH50056__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./CompHybridH50056 */ "./src/pages/Article/components/ArticleList/CompHybridH50056.tsx");
/* harmony import */ var _CompJavascript0057__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./CompJavascript0057 */ "./src/pages/Article/components/ArticleList/CompJavascript0057.tsx");
/* harmony import */ var _CompNode0058__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./CompNode0058 */ "./src/pages/Article/components/ArticleList/CompNode0058.tsx");
/* harmony import */ var _CompReact0059__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./CompReact0059 */ "./src/pages/Article/components/ArticleList/CompReact0059.tsx");
/* harmony import */ var _CompTypescript0060__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./CompTypescript0060 */ "./src/pages/Article/components/ArticleList/CompTypescript0060.tsx");
/* harmony import */ var _CompVue0061__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./CompVue0061 */ "./src/pages/Article/components/ArticleList/CompVue0061.tsx");
/* harmony import */ var _CompWebpack0062__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./CompWebpack0062 */ "./src/pages/Article/components/ArticleList/CompWebpack0062.tsx");
/* harmony import */ var _Comphr_0063__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./Comphr面试题0063 */ "./src/pages/Article/components/ArticleList/Comphr面试题0063.tsx");
/* harmony import */ var _Comp_0064__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./Comp单元测试0064 */ "./src/pages/Article/components/ArticleList/Comp单元测试0064.tsx");
/* harmony import */ var _Comp_0065__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./Comp网络0065 */ "./src/pages/Article/components/ArticleList/Comp网络0065.tsx");
/* harmony import */ var _Comp_0066__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./Comp面试记录0066 */ "./src/pages/Article/components/ArticleList/Comp面试记录0066.tsx");
/* harmony import */ var _Comp_0067__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./Comp项目0067 */ "./src/pages/Article/components/ArticleList/Comp项目0067.tsx");
/* harmony import */ var _Comp_0068__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./Comp高频面试题0068 */ "./src/pages/Article/components/ArticleList/Comp高频面试题0068.tsx");



































































var CompMap = {
  '0002': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Compjs_0002__WEBPACK_IMPORTED_MODULE_1__["default"], null),
  '0003': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Compthis0003__WEBPACK_IMPORTED_MODULE_2__["default"], null),
  '0004': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0004__WEBPACK_IMPORTED_MODULE_3__["default"], null),
  '0005': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0005__WEBPACK_IMPORTED_MODULE_4__["default"], null),
  '0006': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0006__WEBPACK_IMPORTED_MODULE_5__["default"], null),
  '0007': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0007__WEBPACK_IMPORTED_MODULE_6__["default"], null),
  '0008': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0008__WEBPACK_IMPORTED_MODULE_7__["default"], null),
  '0009': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_Date0009__WEBPACK_IMPORTED_MODULE_8__["default"], null),
  '0010': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CompNode_0010__WEBPACK_IMPORTED_MODULE_9__["default"], null),
  '0011': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Compkoa0011__WEBPACK_IMPORTED_MODULE_10__["default"], null),
  '0012': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CompHooks0012__WEBPACK_IMPORTED_MODULE_11__["default"], null),
  '0013': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CompReact_0013__WEBPACK_IMPORTED_MODULE_12__["default"], null),
  '0014': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CompReact_0014__WEBPACK_IMPORTED_MODULE_13__["default"], null),
  '0015': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0015__WEBPACK_IMPORTED_MODULE_14__["default"], null),
  '0016': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0016__WEBPACK_IMPORTED_MODULE_15__["default"], null),
  '0017': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Compts_0017__WEBPACK_IMPORTED_MODULE_16__["default"], null),
  '0018': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Compts_0018__WEBPACK_IMPORTED_MODULE_17__["default"], null),
  '0019': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0019__WEBPACK_IMPORTED_MODULE_18__["default"], null),
  '0020': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Compdevserver_0020__WEBPACK_IMPORTED_MODULE_19__["default"], null),
  '0021': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Compwebpack_0021__WEBPACK_IMPORTED_MODULE_20__["default"], null),
  '0022': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0022__WEBPACK_IMPORTED_MODULE_21__["default"], null),
  '0023': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_plugin_loader0023__WEBPACK_IMPORTED_MODULE_22__["default"], null),
  '0024': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0024__WEBPACK_IMPORTED_MODULE_23__["default"], null),
  '0025': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0025__WEBPACK_IMPORTED_MODULE_24__["default"], null),
  '0026': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0026__WEBPACK_IMPORTED_MODULE_25__["default"], null),
  '0027': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0027__WEBPACK_IMPORTED_MODULE_26__["default"], null),
  '0028': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0028__WEBPACK_IMPORTED_MODULE_27__["default"], null),
  '0029': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0029__WEBPACK_IMPORTED_MODULE_28__["default"], null),
  '0030': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0030__WEBPACK_IMPORTED_MODULE_29__["default"], null),
  '0031': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0031__WEBPACK_IMPORTED_MODULE_30__["default"], null),
  '0032': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CompCSS0032__WEBPACK_IMPORTED_MODULE_31__["default"], null),
  '0033': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comppromise0033__WEBPACK_IMPORTED_MODULE_32__["default"], null),
  '0035': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comptypescript0035__WEBPACK_IMPORTED_MODULE_33__["default"], null),
  '0036': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0036__WEBPACK_IMPORTED_MODULE_34__["default"], null),
  '0037': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0037__WEBPACK_IMPORTED_MODULE_35__["default"], null),
  '0038': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0038__WEBPACK_IMPORTED_MODULE_36__["default"], null),
  '0039': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0039__WEBPACK_IMPORTED_MODULE_37__["default"], null),
  '0040': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0040__WEBPACK_IMPORTED_MODULE_38__["default"], null),
  '0041': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0041__WEBPACK_IMPORTED_MODULE_39__["default"], null),
  '0042': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0042__WEBPACK_IMPORTED_MODULE_40__["default"], null),
  '0043': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0043__WEBPACK_IMPORTED_MODULE_41__["default"], null),
  '0044': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0044__WEBPACK_IMPORTED_MODULE_42__["default"], null),
  '0045': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0045__WEBPACK_IMPORTED_MODULE_43__["default"], null),
  '0046': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0046__WEBPACK_IMPORTED_MODULE_44__["default"], null),
  '0047': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0047__WEBPACK_IMPORTED_MODULE_45__["default"], null),
  '0048': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CompDNS_CDN0048__WEBPACK_IMPORTED_MODULE_46__["default"], null),
  '0049': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CompHTTP_0049__WEBPACK_IMPORTED_MODULE_47__["default"], null),
  '0050': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CompHTTP_0050__WEBPACK_IMPORTED_MODULE_48__["default"], null),
  '0051': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0051__WEBPACK_IMPORTED_MODULE_49__["default"], null),
  '0052': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0052__WEBPACK_IMPORTED_MODULE_50__["default"], null),
  '0053': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0053__WEBPACK_IMPORTED_MODULE_51__["default"], null),
  '0054': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0054__WEBPACK_IMPORTED_MODULE_52__["default"], null),
  '0055': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CompCss0055__WEBPACK_IMPORTED_MODULE_53__["default"], null),
  '0056': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CompHybridH50056__WEBPACK_IMPORTED_MODULE_54__["default"], null),
  '0057': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CompJavascript0057__WEBPACK_IMPORTED_MODULE_55__["default"], null),
  '0058': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CompNode0058__WEBPACK_IMPORTED_MODULE_56__["default"], null),
  '0059': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CompReact0059__WEBPACK_IMPORTED_MODULE_57__["default"], null),
  '0060': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CompTypescript0060__WEBPACK_IMPORTED_MODULE_58__["default"], null),
  '0061': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CompVue0061__WEBPACK_IMPORTED_MODULE_59__["default"], null),
  '0062': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CompWebpack0062__WEBPACK_IMPORTED_MODULE_60__["default"], null),
  '0063': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comphr_0063__WEBPACK_IMPORTED_MODULE_61__["default"], null),
  '0064': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0064__WEBPACK_IMPORTED_MODULE_62__["default"], null),
  '0065': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0065__WEBPACK_IMPORTED_MODULE_63__["default"], null),
  '0066': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0066__WEBPACK_IMPORTED_MODULE_64__["default"], null),
  '0067': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0067__WEBPACK_IMPORTED_MODULE_65__["default"], null),
  '0068': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comp_0068__WEBPACK_IMPORTED_MODULE_66__["default"], null)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var id = location.search.split('=')[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, CompMap[id]);
});

/***/ }),

/***/ "./src/pages/Article/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/Article/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_ArticleList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ArticleList */ "./src/pages/Article/components/ArticleList/index.tsx");
/* harmony import */ var _common_PageWithHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/PageWithHeader */ "./src/common/PageWithHeader/index.tsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constant */ "./src/constant/index.ts");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.less */ "./src/pages/Article/index.module.less");







function Article() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_PageWithHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: _constant__WEBPACK_IMPORTED_MODULE_4__.PageType.Article
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_5__["default"].article
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ArticleList__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}

var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.querySelector('#root'));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Article, null));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/pages/Article/index.module.less":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/pages/Article/index.module.less ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".src-pages-Article-index-module__wrap--nXYc2 {\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  display: flex;\n  justify-content: center;\n}\n.src-pages-Article-index-module__article--XXs1X {\n  width: 7rem;\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n", "",{"version":3,"sources":["webpack://./src/pages/Article/index.module.less"],"names":[],"mappings":"AACA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;AAAF;AAEA;EACE,WAAA;EACA,oBAAA;EACA,qBAAA;AAAF","sourcesContent":["\n.wrap{\n  width:100%;\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:scroll;\n  display:flex;\n  justify-content: center;\n}\n.article{\n  width:7rem;\n  margin-left:0.25rem;\n  margin-right:0.25rem;\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"wrap": "src-pages-Article-index-module__wrap--nXYc2",
	"article": "src-pages-Article-index-module__article--XXs1X"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/Article/index.module.less":
/*!*********************************************!*\
  !*** ./src/pages/Article/index.module.less ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_index_module_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./index.module.less */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/pages/Article/index.module.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_index_module_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_index_module_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"article": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkxingguozm_github_io"] = self["webpackChunkxingguozm_github_io"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_classnames_index_js-node_modules_css-loader_dist_runtime_api_js-node_mod-f7016a","vendors-node_modules_highlight_js_styles_xcode_css-node_modules_highlight_js_lib_index_js","src_common_Header_index_tsx-src_common_PageContainer_index_tsx"], () => (__webpack_require__("./src/pages/Article/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map