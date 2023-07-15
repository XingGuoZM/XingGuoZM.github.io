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
/* harmony import */ var _components_PromisifyModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/PromisifyModal */ "./src/components/PromisifyModal/index.tsx");
/* harmony import */ var _common_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/Header */ "./src/common/Header/index.tsx");
/* harmony import */ var _common_PageContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/PageContainer */ "./src/common/PageContainer/index.tsx");




function PageWithHeader(_ref) {
  var children = _ref.children,
      type = _ref.type;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_PromisifyModal__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_PageContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: type
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: type
  }), children));
}

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/CompDNS和CDN0006.tsx":
/*!**********************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/CompDNS和CDN0006.tsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h3>\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165URL\u5230\u8FD4\u56DE\u9875\u9762\u7684\u5168\u8FC7\u7A0B</h3>\n<pre><code>1. \u6839\u636E\u57DF\u540D\uFF0C\u8FDB\u884CDNS\u57DF\u540D\u89E3\u6790\n2. \u62FF\u5230\u89E3\u6790\u7684IP\u5730\u5740\uFF0C\u5EFA\u7ACBTCP\u8FDE\u63A5\n3. \u5411IP\u5730\u5740\u53D1\u9001HTTP\u8BF7\u6C42\n4. \u670D\u52A1\u5668\u5904\u7406\u8BF7\u6C42\n5. \u8FD4\u56DE\u54CD\u5E94\u7ED3\u679C\n6. \u5173\u95EDTCP\u8FDE\u63A5\n7. \u6D4F\u89C8\u5668\u89E3\u6790HTML\n8. \u6D4F\u89C8\u5668\u5E03\u5C40\u6E32\u67D3\n</code></pre>\n<h3>DNS\u8D77\u6E90</h3>\n<ol>\n<li>\n<p>\u7F51\u7EDC\u51FA\u73B0\u65E9\u671F\u662F\u4F7F\u7528IP\u5730\u5740\u901A\u4FE1\u7684\uFF0C\u90A3\u65F6\u5C31\u51E0\u53F0\u4E3B\u673A\u3002</p>\n</li>\n<li>\n<p>\u968F\u7740\u63A5\u5165\u7F51\u7EDC\u7684\u4E3B\u673A\u8D8A\u6765\u8D8A\u591A\uFF0C\u8FD9\u79CD\u6570\u5B57\u6807\u8BC6\u7684\u5730\u5740\u975E\u5E38\u4E0D\u4FBF\u4E8E\u8BB0\u5FC6\u3002UNIX\u4E0A\u5C31\u51FA\u73B0\u4E86hosts\u6587\u4EF6\uFF08Linux\u548CWindows\u7CFB\u7EDF\u4E0A\u7EE7\u627F\u4FDD\u7559\u4E86\u8FD9\u4E2A\u6587\u4EF6\uFF09\u3002\u8FD9\u4E2A\u6587\u4EF6\u8BB0\u5F55\u4E86\u8FD9\u4E3B\u673A\u540D\u79F0\u548CIP\u5730\u5740\u7684\u5BF9\u5E94\u8868\uFF0C\u53EA\u8981\u8F93\u5165\u4E3B\u673A\u540D\uFF0C\u7CFB\u7EDF\u5C31\u4F1A\u52A0\u8F7Dhosts\u6587\u4EF6\u5E76\u67E5\u627E\u5BF9\u5E94\u5173\u7CFB\uFF0C\u627E\u5230\u5BF9\u5E94\u7684IP\u5C31\u80FD\u8BBF\u95EE\u5BF9\u5E94\u7684\u4E3B\u673A\u4E86\u3002</p>\n</li>\n<li>\n<p>\u968F\u7740\u4E3B\u673A\u7684\u6570\u91CF\u8FDB\u4E00\u6B65\u589E\u591A\uFF0C\u65E0\u6CD5\u4FDD\u8BC1\u6240\u6709\u4EBA\u90FD\u80FD\u62FF\u5230\u7EDF\u4E00\u7684\u6700\u65B0\u7684hosts\u6587\u4EF6\uFF0C\u4E8E\u662F\u5C31\u51FA\u73B0\u4E86\u5728\u6587\u4EF6\u670D\u52A1\u5668\u4E0A\u96C6\u4E2D\u5B58\u653Ehosts\u6587\u4EF6\uFF0C\u4EE5\u4F9B\u4E0B\u8F7D\u4F7F\u7528\u3002</p>\n</li>\n<li>\n<p>\u4E92\u8054\u7F51\u89C4\u6A21\u8FDB\u7EE7\u7EED\u6269\u5927\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4E5F\u4E0D\u582A\u91CD\u8D1F\uFF0C\u800C\u4E14\u628A\u6240\u6709\u5730\u5740\u89E3\u6790\u8BB0\u5F55\u5F62\u6210\u7684\u6587\u4EF6\u90FD\u540C\u6B65\u5230\u6240\u6709\u5BA2\u6237\u7AEF\u4E5F\u4E0D\u662F\u4E00\u4E2A\u597D\u529E\u6CD5\u3002\u8FD9\u65F6\u5C31\u51FA\u73B0\u4E86DNS\uFF0C\u968F\u7740\u89E3\u6790\u89C4\u6A21\u7684\u7EE7\u7EED\u6269\u5927\uFF0CDNS\u4E5F\u5728\u4E0D\u65AD\u7684\u6F14\u5316\uFF0C\u76F4\u5230\u73B0\u5728\u7684\u591A\u5C42\u4F53\u7CFB</p>\n</li>\n</ol>\n<p>DNS\uFF08\u57DF\u540D\u7CFB\u7EDF\uFF09\u662F\u5E94\u7528\u5C42\u534F\u8BAE\uFF0C\u8FD0\u884C\u5728UDP\u534F\u8BAE\u4E4B\u4E0A\uFF0C\u4F7F\u7528\u7AEF\u53E353\u3002\u56E0\u7279\u7F51\u4E0A\u4F5C\u4E3A\u57DF\u540D\u548Cip\u5730\u5740\u76F8\u4E92\u6620\u5C04\u7684\u4E00\u4E2A\u5206\u5E03\u5F0F\u6570\u636E\u5E93\uFF0C\u80FD\u591F\u4F7F\u7528\u6237\u66F4\u65B9\u4FBF\u7684\u8BBF\u95EE\u4E92\u8054\u7F51\uFF0C\u800C\u4E0D\u7528\u53BB\u8BB0\u4F4F\u80FD\u591F\u88AB\u673A\u5668\u76F4\u63A5\u8BFB\u53D6\u7684IP\u6570\u4E32</p>\n<h3>DNS\u57DF\u540D\u5982\u4F55\u89E3\u6790\u7684\uFF1F</h3>\n<p>DNS\u7684\u5206\u5E03\u6570\u636E\u5E93\u662F\u4EE5\u57DF\u540D\u4E3A\u7D22\u5F15\u7684\uFF0C\u6BCF\u4E2A\u57DF\u540D\u5176\u5B9E\u662F\u4E00\u9897\u5F88\u5927\u7684\u9006\u5411\u6811\u8DEF\u5F84\u3002\u5927\u6982\u67E5\u627E\u8FC7\u7A0B\u4E3A\u6D4F\u89C8\u5668\u7F13\u5B58-> \u672C\u5730hosts\u6587\u4EF6->\u672C\u5730DNS\u89E3\u6790\u5668->\u672C\u5730DNS\u670D\u52A1\u5668->\u5176\u4ED6\u57DF\u540D\u670D\u52A1\u5668\u3002\u8BE6\u7EC6\u8FC7\u7A0B\u5982\u4E0B\uFF1A</p>\n<ol>\n<li>\n<p>\u5728\u6D4F\u89C8\u5668\u8F93\u5165image.baidu.com\u57DF\u540D\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u4F1A\u5148\u68C0\u67E5\u81EA\u5DF1\u672C\u5730\u7684hosts\u6587\u4EF6\u662F\u5426\u6709\u8FD9\u4E2A\u7F51\u5740\u6620\u5C04\u5173\u7CFB\uFF0C\u5982\u679C\u6709\uFF0C\u5C31\u5148\u8C03\u7528\u8FD9\u4E2AIP\u5730\u5740\u6620\u5C04\uFF0C\u5B8C\u6210\u57DF\u540D\u89E3\u6790</p>\n</li>\n<li>\n<p>\u5982\u679Chosts\u91CC\u6CA1\u6709\u8FD9\u4E2A\u57DF\u540D\u7684\u6620\u5C04\uFF0C\u5219\u67E5\u627E\u672C\u5730DNS\u89E3\u6790\u5668\u7F13\u5B58\uFF0C\u662F\u5426\u6709\u8FD9\u4E2A\u7F51\u5740\u6620\u5C04\u5173\u7CFB\uFF0C\u5982\u679C\u6709\uFF0C\u5219\u76F4\u63A5\u8FD4\u56DE\uFF0C\u5B8C\u6210\u57DF\u540D\u89E3\u6790</p>\n</li>\n<li>\n<p>\u5982\u679Chosts\u548C\u672C\u5730DNS\u89E3\u6790\u5668\u7F13\u5B58\u90FD\u6CA1\u6709\u76F8\u5E94\u7684\u7F51\u5740\u6620\u5C04\u5173\u7CFB\uFF0C\u9996\u5148\u4F1A\u627ETCP/IP\u53C2\u6570\u4E2D\u8BBE\u7F6E\u7684\u9996\u9009DNS\u670D\u52A1\u5668\uFF0C\u5728\u6B64\u6211\u4EEC\u53EB\u5B83\u672C\u5730DNS\u670D\u52A1\u5668\uFF0C\u6B64\u670D\u52A1\u5668\u6536\u5230\u67E5\u8BE2\u65F6\uFF0C\u5982\u679C\u8981\u67E5\u627E\u7684\u57DF\u540D\uFF0C\u5305\u542B\u5728\u672C\u5730\u914D\u7F6E\u533A\u57DF\u8D44\u6E90\u4E2D\uFF0C\u5219\u8FD4\u56DE\u89E3\u6790\u7ED3\u679C\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5B8C\u6210\u57DF\u540D\u89E3\u6790\uFF0C\u6B64\u89E3\u6790\u5177\u6709\u6743\u5A01\u6027</p>\n</li>\n<li>\n<p>\u5982\u679C\u8981\u67E5\u8BE2\u7684\u57DF\u540D\uFF0C\u4E0D\u5728\u672C\u5730DNS\u670D\u52A1\u5668\u533A\u57DF\u89E3\u6790\uFF0C\u4F46\u8BE5\u670D\u52A1\u5668\u7F13\u5B58\u4E86\u6B64\u7F51\u5740\u7684\u6620\u5C04\u5173\u7CFB\uFF0C\u5219\u8C03\u7528\u8FD9\u4E2AIP\u5730\u5740\u6620\u5C04\uFF0C\u5B8C\u6210\u57DF\u540D\u89E3\u6790\uFF0C\u6B64\u89E3\u6790\u4E0D\u5177\u6709\u6743\u5A01\u6027\u3002</p>\n</li>\n<li>\n<p>\u5982\u679C\u672C\u5730DNS\u670D\u52A1\u5668\u672C\u5730\u533A\u57DF\u6587\u4EF6\u548C\u7F13\u5B58\u89E3\u6790\u90FD\u5931\u6548\uFF0C\u5219\u6839\u636E\u672C\u5730DNS\u670D\u52A1\u5668\u7684\u8BBE\u7F6E\uFF08\u662F\u5426\u8BBE\u7F6E\u8F6C\u53D1\u5668\uFF09\u8FDB\u884C\u67E5\u8BE2\uFF0C\u5982\u679C\u672A\u7528\u8F6C\u53D1\u6A21\u5F0F\uFF0C\u672C\u5730DNS\u5C31\u628A\u8BF7\u6C42\u53D1\u81F313\u53F0\u6839DNS\uFF0C\u6839DNS\u670D\u52A1\u5668\u6536\u5230\u8BF7\u6C42\u4E4B\u540E\u4F1A\u5224\u65AD\u8FD9\u4E2A\u57DF\u540D\uFF08.com\uFF09\u662F\u8C01\u6765\u6388\u6743\u7BA1\u7406\uFF0C\u5E76\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u8D1F\u8D23\u8BE5\u9876\u7EA7\u57DF\u540D\u670D\u52A1\u5668\u7684IP\u3002\u672C\u5730DNS\u670D\u52A1\u5668\u63A5\u6536\u5230IP\u4FE1\u606F\u4E4B\u540E\uFF0C\u5C06\u4F1A\u8D1F\u8D23\u8054\u7CFB\u8D1F\u8D23.com\u57DF\u7684\u8FD9\u53F0\u670D\u52A1\u5668\uFF0C\u8FD9\u53F0\u8D1F\u8D23.com\u57DF\u7684\u670D\u52A1\u5668\u63A5\u6536\u5230\u8BF7\u6C42\u4E4B\u540E\uFF0C\u5982\u679C\u81EA\u5DF1\u65E0\u6CD5\u89E3\u6790\uFF0C\u5B83\u5C31\u4F1A\u627E\u4E00\u4E2A\u7BA1\u7406.com\u57DF\u7684\u4E0B\u4E00\u7EA7DNS\u670D\u52A1\u5668\u5730\u5740\uFF08baidu.com\uFF09\u7ED9\u672C\u5730DNS\u670D\u52A1\u5668\uFF0C\u5F53\u672C\u5730DNS\u670D\u52A1\u5668\u6536\u5230\u8FD9\u4E2A\u5730\u5740\u540E\uFF0C\u5C31\u4F1A\u627Eimage.baidu.com\u57DF\u670D\u52A1\u5668\uFF0C\u91CD\u590D\u4E0A\u9762\u7684\u52A8\u4F5C\uFF0C\u76F4\u81F3\u627E\u5230image.baidu.com\u4E3B\u673A</p>\n</li>\n<li>\n<p>\u5982\u679C\u7528\u7684\u662F\u8F6C\u53D1\u6A21\u5F0F\uFF0C\u6B64DNS\u670D\u52A1\u5668\u5C31\u4F1A\u628A\u8BF7\u6C42\u8F6C\u53D1\u81F3\u4E0A\u4E00\u7EA7DNS\u670D\u52A1\u5668\uFF0C\u7531\u4E0A\u4E00\u7EA7\u670D\u52A1\u5668\u8FDB\u884C\u89E3\u6790\uFF0C\u4E0A\u4E00\u7EA7\u670D\u52A1\u5668\u5982\u679C\u4E0D\u80FD\u89E3\u6790\uFF0C\u6216\u627E\u6839DNS\u6216\u8F6C\u53D1\u81F3\u4E0A\u4E0A\u7EA7\uFF0C\u4EE5\u6B64\u5FAA\u73AF\u3002</p>\n</li>\n</ol>\n<h3>DNS\u4E3A\u5565\u4F7F\u7528UDP\u534F\u8BAE\u4F5C\u4E3A\u4F20\u8F93\u5C42\u534F\u8BAE\uFF1F</h3>\n<p>\u4E3A\u4E86\u907F\u514D\u4F7F\u7528 TCP \u534F\u8BAE\u65F6\u9020\u6210\u7684\u8FDE\u63A5\u65F6\u5EF6</p>\n<ul>\n<li>\u4E3A\u4E86\u5F97\u5230\u4E00\u4E2A\u57DF\u540D\u7684IP\u5730\u5740\u5F80\u5F80\u4F1A\u5411\u591A\u4E2A\u57DF\u540D\u670D\u52A1\u5668\u67E5\u8BE2\uFF0C\u5982\u679C\u4F7F\u7528TCP\u534F\u8BAE\uFF0C\u6BCF\u6B21\u8BF7\u6C42\u90FD\u4F1A\u5B58\u5728\u8FDE\u63A5\u65F6\u5EF6\uFF0C\u8FD9\u4F7F\u5F97DNS\u670D\u52A1\u53D8\u6162</li>\n<li>\u5927\u591A\u6570\u7684\u5730\u5740\u67E5\u8BE2\u8BF7\u6C42\uFF0C\u90FD\u662F\u6D4F\u89C8\u5668\u8BF7\u6C42\u9875\u9762\u65F6\u53D1\u51FA\uFF0C\u8FD9\u6837\u4F1A\u9020\u6210\u9875\u9762\u7684\u7B49\u5F85\u65F6\u95F4\u8FC7\u957F</li>\n</ul>\n<h3>DNS\u670D\u52A1\u5668\u7C7B\u578B</h3>\n<p>DNS\u89C4\u8303\u5B9A\u4E49\u4E86\u4E24\u79CD\u7C7B\u578B\u7684DNS\u670D\u52A1\u5668\uFF0C\u4E00\u4E2A\u53EB\u4E3BDNS\u670D\u52A1\u5668\uFF0C\u4E00\u4E2A\u53EB\u8F85\u52A9DNS\u670D\u52A1\u5668\u3002\u5728\u4E00\u4E2A\u533A\u4E2D\u4E3BDNS\u670D\u52A1\u5668\u4ECE\u81EA\u5DF1\u672C\u673A\u7684\u6570\u636E\u6587\u4EF6\u4E2D\u8BFB\u53D6\u8BE5\u533A\u7684DNS\u6570\u636E\u4FE1\u606F\uFF0C\u800C\u8F85\u52A9DNS\u670D\u52A1\u5668\u5219\u4ECE\u533A\u7684\u4E3BDNS\u670D\u52A1\u5668\u4E2D\u8BFB\u53D6\u8BE5\u533A\u7684DNS\u6570\u636E\u4FE1\u606F\u3002\u5F53\u4E00\u4E2A\u8F85\u52A9DNS\u542F\u52A8\u65F6\uFF0C\u4ED6\u9700\u8981\u4E0E\u4E3BDNS\u670D\u52A1\u5668\u901A\u4FE1\uFF0C\u5E76\u52A0\u8F7D\u6570\u636E\u4FE1\u606F\uFF0C\u8FD9\u5C31\u53EB\u533A\u4F20\u9001\uFF0C\u4F7F\u7528TCP\u534F\u8BAE</p>\n<p>\u4E3A\u4EC0\u4E48\u57DF\u540D\u89E3\u6790\u7528UDP\uFF1F\u4E3A\u4EC0\u4E48\u533A\u57DF\u590D\u5236\u7528TCP\uFF1F</p>\n<h3>dig\u547D\u4EE4</h3>\n<p>\u67E5\u8BE2\u57DF\u540D\u4FE1\u606F</p>\n<p>\u67E5\u8BE2\u57DF\u540D\u89E3\u6790\u7F51\u7AD9\n<a href=\"https://tool.chinaz.com/dns\">chinaz</a>\u3001<a href=\"https://www.ipaddress.com/\">ipaddress</a></p>\n<h3>DNS\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861</h3>\n<p>\u5927\u578B\u7F51\u7AD9\u90FD\u4F1A\u4F7F\u7528\u591A\u53F0\u670D\u52A1\u5668\u63D0\u4F9B\u670D\u52A1\uFF0C\u56E0\u6B64\u4E00\u4E2A\u57DF\u540D\u53EF\u80FD\u4F1A\u5BF9\u5E94\u591A\u4E2A\u670D\u52A1\u5668\u5730\u5740\u3002\u6BCF\u5F53\u7528\u6237\u53D1\u8D77\u7F51\u7AD9\u57DF\u540D\u7684DNS\u8BF7\u6C42\u65F6\uFF0CDNS\u670D\u52A1\u5668\u8FD4\u56DE\u8FD9\u4E2A\u57DF\u540D\u6240\u5BF9\u5E94\u670D\u52A1\u5668\u6240\u5BF9\u5E94\u670D\u52A1\u5668IP\u5730\u5740\u96C6\u5408\uFF0C\u5728\u6BCF\u4E2A\u5E94\u7B54\u4E2D\u4F1A\u5FAA\u73AF\u8FD9\u4E9BIP\u5730\u5740\u7684\u987A\u5E8F\uFF0C\u7528\u6237\u4E00\u822C\u4F1A\u9009\u62E9\u6392\u5728\u524D\u9762\u7684\u5730\u5740\u53D1\u9001\u8BF7\u6C42\u3002\u4EE5\u6B64\u7528\u6237\u7684\u8BF7\u6C42\u5747\u8861\u7684\u5206\u914D\u5230\u4E0D\u540C\u7684\u670D\u52A1\u5668\u4E0A\uFF0C\u5373\u5B9E\u73B0\u4E86\u8D1F\u8F7D\u5747\u8861\u3002</p>\n<h3>DNS\u5B9E\u64CD</h3>\n<p>github\u6253\u5F00\u592A\u6162\uFF0C\u4F60\u6709\u4EC0\u4E48\u529E\u6CD5\u6253\u5F00\u5FEB\u4E00\u70B9</p>\n<p>CDN\uFF08\u5185\u5BB9\u5206\u53D1\u7F51\u7EDC\uFF09</p>\n<h3>\u53C2\u8003</h3>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/CompHTTP网络的发展0007.tsx":
/*!************************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/CompHTTP网络的发展0007.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h3>HTTP\u3001HTTPS</h3>\n<p>HTTP\u534F\u8BAE\u662F\u57FA\u4E8ETCP/IP\u7684\u53EF\u9760\u4F20\u8F93\u7684\u5E94\u7528\u5C42\u534F\u8BAE\uFF0C\u5176\u7279\u70B9\u662F\u65E0\u72B6\u6001\u3001\u660E\u6587\u4F20\u8F93\u3001\u961F\u5934\u963B\u585E\uFF0CHTTP\u5728\u7248\u672C\uFF081.0\u30011.1\u30012.0\uFF09\u8FED\u4EE3\u4E2D\u90FD\u8FDB\u884C\u4E86\u5904\u7406\u89E3\u51B3\uFF0C\u5404\u7248\u672C\u7279\u70B9\u5982\u4E0B\uFF1A<br>\nHTTP1.0</p>\n<pre><code>1. \u53EF\u4EE5\u53D1\u9001\u4EFB\u4F55\u683C\u5F0F\u7684\u5185\u5BB9\uFF0C\u6587\u672C\u3001\u89C6\u9891\u3001\u56FE\u50CF\u3001\u4E8C\u8FDB\u5236\u7B49\n2. \u4E0D\u652F\u6301\u65AD\u70B9\u7EED\u4F20\uFF0C\u6BCF\u6B21\u90FD\u4F1A\u4F20\u9001\u5168\u90E8\u7684\u9875\u9762\u548C\u6570\u636E\n3. \u53EA\u4F7F\u7528header\u4E2DIf-Modified-Since\u548CExpire\u4F5C\u4E3A\u7F13\u5B58\u5931\u6548\u6807\u51C6\n4. \u8BF7\u6C42header\u4E2D\u6CA1\u6709\u4F20\u9012\u4E3B\u673A\u540D\uFF08hostname\uFF09\n</code></pre>\n<p>HTTP1.1</p>\n<pre><code>1. \u5F15\u5165\u6301\u4E45\u8FDE\u63A5\uFF0C\u5373TCP\u8FDE\u63A5\u9ED8\u8BA4\u4E0D\u5173\u95ED\uFF0C\u53EF\u4EE5\u88AB\u591A\u4E2A\u8BF7\u6C42\u590D\u7528\uFF0C\u4E0D\u7528\u58F0\u660EConnection:keep-alive,\u957F\u8FDE\u63A5\u7684\u65F6\u957F\u53EF\u4EE5\u901A\u8FC7\u8BF7\u6C42\u5934\u4E2D\u7684keep-alive\u8BBE\u7F6E\n2. HTTP\u7BA1\u9053\n\u5BA2\u6237\u7AEF\u4E0D\u9700\u8981\u7B49\u5F85\u670D\u52A1\u5668\u54CD\u5E94\u8BF7\u6C42\u4E4B\u540E\uFF0C\u624D\u80FD\u53D1\u9001\u540E\u7EED\u7684\u8BF7\u6C42\u3002\u4F46\u662FHTTP\u7BA1\u9053\u4ECD\u7136\u8981\u6C42\u670D\u52A1\u5668\u6309\u7167\u63A5\u6536\u5230\u7684\u8BF7\u6C42\u7684\u987A\u5E8F\u8FDB\u884C\u54CD\u5E94\uFF0C\u56E0\u6B64\uFF0C\u5982\u679C\u7BA1\u9053\u4E2D\u7684\u5355\u4E2A\u8BF7\u6C42\u6267\u884C\u7F13\u6162\uFF0C\u5219\u5BF9\u5BA2\u6237\u7AEF\u7684\u6240\u6709\u540E\u7EED\u54CD\u5E94\u90FD\u5C06\u76F8\u5E94\u7684\u5EF6\u8FDF\uFF0C\u8FD9\u4E2A\u95EE\u9898\u5C31\u662F\u961F\u5934\u963B\u585E\u3002\u5F53\u65F6\u7684\u89E3\u51B3\u65B9\u6848\u662F\u5728\u5BA2\u6237\u7AEF\u7684\u6BCF\u53F0\u4E3B\u673A\u4E0A\u5EFA\u7ACB\u591A\u4E2ATCP\u8FDE\u63A5\uFF0C\u540C\u65F6\u8BBE\u7F6E\u4E86\u6700\u5927\u53EF\u4EE5\u540C\u65F6\u8FDE\u63A5\u7684\u9650\u5236\uFF0C\u4EE5\u8FBE\u5230\u5FAE\u5999\u7684\u5E73\u8861\u3002\n\n3. \u589E\u52A0E-tag\u3001If-Modified-Since\u3001If-Match\u3001If-None-Match\n4. \u652F\u6301\u65AD\u70B9\u7EED\u4F20\uFF0C\u901A\u8FC7\u8BF7\u6C42\u5934\u4E2D\u7684Range\u6765\u5B9E\u73B0\n5. \u4F7F\u7528\u865A\u62DF\u7F51\u7EDC\uFF0C\u5728\u4E00\u53F0\u7269\u7406\u670D\u52A1\u5668\u4E0A\u53EF\u4EE5\u5B58\u5728\u591A\u4E2A\u865A\u62DF\u4E3B\u673A\uFF0C\u5E76\u4E14\u4ED6\u4EEC\u5171\u4EAB\u4E00\u4E2AIP\u5730\u5740\n6. \u65B0\u589E\u65B9\u6CD5\uFF1APUT\u3001PATCH\u3001OPTIONS\u3001DELETE\n</code></pre>\n<p>HTTP2.0</p>\n<ol>\n<li>\n<p>\u4E8C\u8FDB\u5236\u5206\u5E27\n\u91C7\u7528\u4E8C\u8FDB\u5236\u683C\u5F0F\uFF0C\u5168\u90E8\u4F20\u8F9301\u4E32\uFF0C\u4FBF\u4E8E\u673A\u5668\u89E3\u7801\uFF0C\u8FD9\u6837\u7684\u62A5\u6587\u683C\u5F0F\u88AB\u62C6\u5206\u4E3A\u4E00\u4E2A\u4E2A\u4E8C\u8FDB\u5236\u5E27\uFF0C\u7528Header\u5E27\u5B58\u653E\u5934\u90E8\u5B57\u6BB5\uFF0CData\u5E27\u5B58\u653E\u8BF7\u6C42\u4F53\u6570\u636E</p>\n</li>\n<li>\n<p>\u5934\u90E8\u538B\u7F29\uFF1AHPACK\u7B97\u6CD5+\u54C8\u592B\u66FC\u7F16\u7801</p>\n</li>\n</ol>\n<p>\u4E3A\u4EC0\u4E48\u8981\u538B\u7F29\uFF1F\u5728HTTP/1.x\u4E2D\uFF0CHTTP\u8BF7\u6C42\u548C\u54CD\u5E94\u90FD\u662F\u7531\u72B6\u6001\u884C\u3001\u8BF7\u6C42/\u54CD\u5E94\u5934\u90E8\u3001\u6D88\u606F\u4E3B\u4F53\u4E09\u90E8\u5206\u7EC4\u6210\u7684\u3002\u4E00\u822C\u6765\u8BF4\uFF0C\u6D88\u606F\u4E3B\u4F53\u90FD\u4F1A\u7ECF\u8FC7gzip\u538B\u7F29\uFF0C\u6216\u8005\u672C\u8EAB\u5C31\u662F\u7ECF\u8FC7\u538B\u7F29\u540E\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF08\u5982\u56FE\u7247\u3001\u89C6\u9891\uFF09\uFF0C\u4F46\u662F\u72B6\u6001\u884C\u548C\u5934\u90E8\u5374\u6CA1\u6709\u7ECF\u8FC7\u4EFB\u4F55\u538B\u7F29\uFF0C\u76F4\u63A5\u4EE5\u7EAF\u6587\u672C\u4F20\u8F93\u3002\u968F\u7740web\u529F\u80FD\u7684\u8D8A\u6765\u8D8A\u590D\u6742\uFF0C\u8BF7\u6C42\u6570\u91CF\u4E5F\u4F1A\u8D8A\u6765\u8D8A\u591A\uFF0C\u5927\u91CF\u7684\u8BF7\u6C42\u5BFC\u81F4\u6D88\u8017\u5728\u8BF7\u6C42\u5934\u90E8\u7684\u6D41\u91CF\u53D8\u591A\uFF0C\u6BCF\u6B21\u90FD\u8981\u4F20\u8F93UserAgent\u3001Cookie\u8FD9\u7C7B\u4E0D\u9891\u7E41\u53D8\u52A8\u7684\u5B57\u6BB5\u5185\u5BB9\uFF0C\u5B8C\u5168\u662F\u4E00\u79CD\u6D6A\u8D39\uFF0C\u8FD9\u5BFC\u81F4\u4F20\u8F93\u5934\u90E8\u7684\u7F51\u7EDC\u5F00\u9500\u53EF\u80FD\u6BD4\u6D88\u606F\u4E3B\u4F53\u8FD8\u8981\u5927\uFF0C\u56E0\u6B64\u5C31\u6709\u4E86\u5934\u90E8\u538B\u7F29\u6280\u672F\uFF0CHTTP/2.0\u4F7F\u7528\u7684\u662FHPACK\u7B97\u6CD5\u8FDB\u884C\u538B\u7F29</p>\n<p>HPACK\uFF0C\u5728\u652F\u6301HTTP/2.0\u7684\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u7AEF\u4E4B\u95F4\uFF1A</p>\n<ol>\n<li>\n<p>\u7EF4\u62A4\u4E00\u4EFD\u76F8\u540C\u7684\u9759\u6001\u5B57\u5178\uFF0C\u5305\u542B\u5E38\u89C1\u7684\u5934\u90E8\u540D\u79F0\uFF0C\u4EE5\u53CA\u7279\u522B\u5E38\u89C1\u7684\u5934\u90E8\u540D\u79F0\u4E0E\u503C\u7684\u7EC4\u5408\n\u5BF9\u4E8E\u5B8C\u5168\u5339\u914D\u7684\u5934\u90E8\u952E\u503C\u5BF9\uFF0C\u4F8B\u5982:method:GET\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u4E00\u4E2A\u5B57\u7B26\u8868\u793A\n\u5BF9\u4E8E\u5934\u90E8\u540D\u79F0\u53EF\u4EE5\u5339\u914D\u7684\u952E\u503C\u5BF9\uFF0C\u4F8B\u5982cookie:xxx\uFF0C\u53EF\u4EE5\u5C06\u540D\u79F0\u4F7F\u7528\u4E00\u4E2A\u5B57\u7B26\u8868\u793A</p>\n</li>\n<li>\n<p>\u7EF4\u62A4\u4E00\u4EFD\u76F8\u540C\u7684\u52A8\u6001\u5B57\u5178\uFF0C\u53EF\u4EE5\u52A8\u6001\u6DFB\u52A0\u5185\u5BB9</p>\n</li>\n<li>\n<p>\u652F\u6301\u57FA\u4E8E\u9759\u6001\u54C8\u592B\u66FC\u8868\u7684\u54C8\u592B\u66FC\u7F16\u7801\uFF0C<a href=\"https://zhuanlan.zhihu.com/p/390459645\">\u54C8\u592B\u66FC\u7F16\u7801\u7684\u539F\u7406</a>\u5373\u7EDF\u8BA1\u6240\u6709\u51FA\u73B0\u5B57\u7B26\u7684\u6B21\u6570\uFF0C\u7136\u540E\u6839\u636E\u5B57\u7B26\u51FA\u73B0\u6B21\u6570\u6784\u5EFA\u4E00\u9897\u54C8\u592B\u66FC\u6811\uFF0C\u54C8\u592B\u66FC\u6811\u7684\u7279\u70B9\u5C31\u662F\u51FA\u73B0\u9891\u7387\u8D8A\u9AD8\u7684\u5B57\u7B26\u8D8A\u9760\u8FD1\u6839\u7ED3\u70B9\uFF0C\u6700\u540E\u4EE5\u54C8\u592B\u66FC\u6811\u8FDB\u884C\u7F16\u7801/\u89E3\u7801\uFF0C\u7F16\u7801\u7684\u8FC7\u7A0B\u5373\u6CBF\u7740\u6811\u5411\u8981\u7F16\u7801\u7684\u5B57\u7B26\u524D\u8FDB\uFF0C\u5982\u679C\u8D70\u4E86\u5DE6\u8282\u70B9\u5219\u6807\u8BB0\u4E3A0\uFF0C\u8D70\u4E86\u53F3\u8282\u70B9\u5219\u6807\u8BB0\u4E3A1\uFF0C\u4ECE\u6839\u7ED3\u70B9\u5230\u53F6\u5B50\u8282\u70B9\u7684\u8DEF\u5F84\u5C31\u662F\u8BE5\u5B57\u7B26\u7684\u7F16\u7801\u3002\u51FA\u73B0\u5B57\u7B26\u6B21\u6570\u8D8A\u591A\u7684\uFF0C\u7F16\u7801\u8D8A\u77ED\uFF0C\u6700\u7EC8\u538B\u7F29\u4E4B\u540E\u7684\u7F16\u7801\u8D8A\u77ED\uFF0C\u8D77\u5230\u538B\u7F29\u7684\u76EE\u7684\u3002gzip\u5C31\u4F7F\u7528\u4E86\u54C8\u592B\u66FC\u7F16\u7801\u8FDB\u884C\u538B\u7F29</p>\n</li>\n<li>\n<p>\u591A\u8DEF\u590D\u7528\nHTTP/1.x\u4E2D\uFF0C\u5982\u679C\u60F3\u5E76\u53D1\u591A\u4E2A\u8BF7\u6C42\uFF0C\u5FC5\u987B\u4F7F\u7528\u591A\u4E2ATCP\u8FDE\u63A5\uFF0C\u4E14\u6D4F\u89C8\u5668\u4E3A\u4E86\u63A7\u5236\u8D44\u6E90\u8FD8\u4F1A\u5BF9\u5355\u4E2A\u57DF\u540D\u67096-8\u4E2A\u7684TCP\u8FDE\u63A5\u8BF7\u6C42\u9650\u5236\nHTTP/2.0\u4E2D\uFF0C\u540C\u57DF\u540D\u4E0B\u7684\u6240\u6709\u901A\u4FE1\u90FD\u662F\u5728\u5355\u4E2A\u8FDE\u63A5\u4E0B\u5B8C\u6210\u7684\uFF0C\u5355\u4E2A\u8FDE\u63A5\u53EF\u4EE5\u627F\u63A5\u4EFB\u610F\u6570\u91CF\u7684\u53CC\u5411\u6570\u636E\u6D41\uFF0C\u6570\u636E\u6D41\u4EE5\u6D88\u606F\u7684\u5F62\u5F0F\u53D1\u9001\uFF0C\u800C\u6D88\u606F\u53C8\u7531\u4E00\u4E2A\u6216\u591A\u4E2A\u5E27\u7EC4\u6210\uFF0C\u591A\u4E2A\u5E27\u4E4B\u95F4\u53EF\u4EE5\u4E71\u5E8F\u53D1\u9001\uFF0C\u6839\u636E\u5E27\u9996\u90E8\u7684\u6D41\u6807\u8BC6\u53EF\u4EE5\u91CD\u65B0\u7EC4\u88C5\uFF0C\u5373\u6D41\u6807\u8BC6\u7B26\uFF08Stream ID\uFF09\uFF0C\u6709\u4E86\u5B83\uFF0C\u63A5\u6536\u53CC\u65B9\u5C31\u80FD\u4ECE\u4E71\u5E8F\u7684\u4E8C\u8FDB\u5236\u5E27\u4E2D\u9009\u62E9ID\u76F8\u540C\u7684\u5E27\uFF0C\u6309\u7167\u987A\u5E8F\u7EC4\u88C5\u6210\u8BF7\u6C42/\u54CD\u5E94\u62A5\u6587</p>\n</li>\n</ol>\n<p>\u5728TCP\u534F\u8BAE\u5C42\u4E0A\u4ECD\u7136\u5B58\u5728\u8FD9\u7C7B\u4F3C\u7684\u961F\u5934\u963B\u585E\u963B\u585E\u7684\u95EE\u9898\uFF0C\u5F53\u4E00\u4E2ATCP\u5305\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u4E22\u5931\u65F6\uFF0C\u5728\u670D\u52A1\u5668\u91CD\u65B0\u53D1\u9001\u4E22\u5931\u7684\u5305\u4E4B\u524D\uFF0C\u63A5\u6536\u65B9\u65E0\u6CD5\u786E\u8BA4\u4F20\u5165\u7684\u5305\uFF0C\u7531\u4E8ETCP\u5728\u8BBE\u8BA1\u4E0A\u4E0D\u53D7\u8BF8\u5982HTTP\u4E4B\u7C7B\u7684\u9AD8\u7EA7\u534F\u8BAE\u7684\u5F71\u54CD\uFF0C\u56E0\u6B64\u4E00\u4E2A\u4E22\u5931\u7684\u6570\u636E\u5305\u5C06\u963B\u585E\u6240\u6709\u6B63\u5728\u4F20\u8F93\u7684HTTP\u8BF7\u6C42\u7684\u6D41\uFF0C\u76F4\u5230\u4E22\u5931\u7684\u6570\u636E\u91CD\u65B0\u88AB\u53D1\u9001</p>\n<ol start=\"4\">\n<li>\n<p>\u670D\u52A1\u5668\u63A8\u9001</p>\n</li>\n<li>\n<p>\u8BF7\u6C42\u4F18\u5148\u7EA7</p>\n</li>\n</ol>\n<p>HTTP/3.0<br>\nHTTP/2.0\u4E0B\u4F7F\u7528\u591A\u8DEF\u590D\u7528\uFF0C\u540C\u4E00\u57DF\u540D\u4E0B\u53EA\u9700\u8981\u4F7F\u7528\u4E00\u4E2ATCP\u8FDE\u63A5\uFF0C\u4F46\u662F\u5F53\u8FD9\u4E2ATCP\u8FDE\u63A5\u51FA\u73B0\u4E22\u5305\u7684\u60C5\u51B5\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u6574\u4E2ATCP\u5F00\u59CB\u7B49\u5F85\u91CD\u4F20\uFF0C\u4E5F\u5BFC\u81F4\u540E\u9762\u7684\u6570\u636E\u90FD\u88AB\u963B\u585E\u4E86\u3002\u51FA\u73B0\u5305\u963B\u585E\u7684\u539F\u56E0\u662F\u56E0\u4E3A\u5E95\u5C42TCP\u534F\u8BAE\u5BFC\u81F4\u7684\u95EE\u9898\uFF0CGoogle\u57FA\u4E8EUDP\u534F\u8BAE\u63A8\u51FA\u4E00\u4E2AQUIC\u534F\u8BAE\uFF0C\u4F7F\u7528\u5728HTTP/3\u4E0A\u3002QUIC\u7684\u4F18\u70B9\u6709\uFF1A</p>\n<ul>\n<li>\u907F\u514D\u5305\u963B\u585E</li>\n<li>\u5FEB\u901F\u91CD\u542F\u4F1A\u8BDD</li>\n</ul>\n<h3>HTTPS</h3>\n<p>HTTPS = HTTP + SSL/TLS\u3002TLS/SSL\u7684\u529F\u80FD\u5B9E\u73B0\u4E3B\u8981\u4F9D\u8D56\u4E8E\u4E09\u7C7B\u57FA\u672C\u7B97\u6CD5\uFF1A\u6563\u5217\u51FD\u6570\u3001\u5BF9\u79F0\u52A0\u5BC6\u548C\u975E\u5BF9\u79F0\u52A0\u5BC6\u3002\u4F7F\u7528\u975E\u5BF9\u79F0\u52A0\u5BC6\u5B9E\u73B0\u8EAB\u4EFD\u8BA4\u8BC1\u548C\u5BC6\u94A5\u534F\u5546\uFF0C\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\u91C7\u7528\u534F\u5546\u7684\u5BC6\u94A5\u5BF9\u6570\u636E\u52A0\u5BC6\uFF0C\u57FA\u4E8E\u6563\u5217\u51FD\u6570\u9A8C\u8BC1\u6570\u636E\u7684\u5B8C\u6574\u6027\u3002</p>\n<p>SSL\uFF08Secure Socket Layer\uFF09\u5B89\u5168\u5957\u63A5\u5C42\uFF0C\u662F1994\u5E74\u7531Netscape\u516C\u53F8\u8BBE\u8BA1\u7684\u4E00\u5957\u534F\u8BAE\uFF0C\u5E76\u4E8E1995\u5E74\u53D1\u5E033.0\u7248\u672C\u3002TLS\uFF08Transport Layer Security\uFF09\u4F20\u8F93\u5B89\u5168\u662FIETF\u5728SSL3.0\u57FA\u7840\u4E0A\u8BBE\u8BA1\u7684\u534F\u8BAE\uFF0C\u5B9E\u9645\u76F8\u5F53\u4E8ESSL\u7684\u540E\u7EED\u7248\u672C\u3002</p>\n<p>SSL/TLS\u5DE5\u4F5C\u539F\u7406\uFF1A\u7528CA\u8BC1\u4E66\u8BA4\u8BC1\u8EAB\u4EFD\uFF08\u8BC1\u4E66\u7B7E\u540D\uFF09\u53CA\u4F20\u9012\u516C\u94A5\uFF08\u670D\u52A1\u7AEF\uFF09\uFF0C\u7528\u975E\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u4EA4\u6362\u7528\u4E8E\u5BF9\u79F0\u52A0\u5BC6\u7684\u5BC6\u94A5\uFF0C\u901A\u8FC7\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u52A0\u5BC6\u6B63\u5E38\u7684\u7F51\u7EDC\u901A\u4FE1\u3002</p>\n<p>\u5DE5\u4F5C\u8FC7\u7A0B\uFF1A\n\u5BA2\u6237\u7AEF\u53D1\u8D77HTTP\u8BF7\u6C42\uFF0C\u670D\u52A1\u7AEF\u53D1\u9001CA\u8BC1\u4E66\uFF08\u8BC1\u4E66\u4E2D\u542B\u6709\u8BC1\u4E66\u7B7E\u540D\u548C\u670D\u52A1\u7AEF\u516C\u94A5\uFF09\uFF0C\u5BA2\u6237\u7AEF\u8BA4\u8BC1\u771F\u4F2A\uFF0C\u7136\u540E\u89E3\u5BC6\u51FA\u670D\u52A1\u7AEF\u516C\u94A5\n\u7528\u516C\u94A5\u52A0\u5BC6\u81EA\u5DF1\u751F\u6210\u7684\u5BF9\u79F0\u52A0\u5BC6\u7684\u5BC6\u94A5\uFF0C\u53D1\u9001\u7ED9\u670D\u52A1\u7AEF</p>\n<h3>\u52A0\u5BC6\u7B97\u6CD5</h3>\n<p>\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\uFF0CDES\u3001AES\nDES\uFF08Data Encryption Standard\uFF09\u539F\u7406\uFF1A\u5229\u752856+8\u5947\u5076\u6821\u9A8C\u4F4D\uFF08\u7B2C8\u300116\u300124\u300132\u300140\u300148\u300156\u300164\uFF09=64\u4F4D\u7684\u5BC6\u94A5\u5BF9\u4EE564\u4E3A\u5355\u4F4D\u7684\u5757\u6570\u636E\u8FDB\u884C\u52A0\u89E3\u5BC6\u3002\nAES\uFF08Advanced Encryption Standard\uFF09\u539F\u7406\uFF1AAES\u7B97\u6CD5\u4E3B\u8981\u6709\u56DB\u79CD\u64CD\u4F5C\u5904\u7406\uFF0C\u5206\u522B\u662F\u5BC6\u94A5\u52A0\u6CD5\u5C42(\u4E5F\u53EB\u8F6E\u5BC6\u94A5\u52A0\uFF0C\u82F1\u6587Add Round Key)\u3001\u5B57\u8282\u4EE3\u6362\u5C42(SubByte)\u3001\u884C\u4F4D\u79FB\u5C42(Shift Rows)\u3001\u5217\u6DF7\u6DC6\u5C42(Mix Column)\u3002\u800C\u660E\u6587x\u548C\u5BC6\u94A5k\u90FD\u662F\u753116\u4E2A\u5B57\u8282\u7EC4\u6210\u7684\u6570\u636E(\u5F53\u7136\u5BC6\u94A5\u8FD8\u652F\u6301192\u4F4D\u548C256\u4F4D\u7684\u957F\u5EA6\uFF0C\u6682\u65F6\u4E0D\u8003\u8651)\uFF0C\u5B83\u662F\u6309\u7167\u5B57\u8282\u7684\u5148\u540E\u987A\u5E8F\u4ECE\u4E0A\u5230\u4E0B\u3001\u4ECE\u5DE6\u5230\u53F3\u8FDB\u884C\u6392\u5217\u7684\u3002</p>\n<p>RSA\u7ECF\u5178\u7684\u975E\u5BF9\u79F0\u52A0\u5BC6\u7B97\u6CD5\n\u539F\u7406\uFF1A\u7ED9\u5B9A\u8FDE\u4E2A\u7D20\u6570\uFF0C\u5F88\u5BB9\u6613\u5F97\u51FA\u4ED6\u4EEC\u7684\u4E58\u79EF\uFF0C\u4F46\u662F\u53CD\u8FC7\u6765\uFF0C\u7ED9\u5B9A\u51FA\u4ED6\u4EEC\u7684\u4E58\u79EF\uFF0C\u5374\u5F88\u96BE\u5F97\u5230\u8FD9\u4E24\u4E2A\u7D20\u6570\u3002\u5982\u679C\u80FD\u89E3\u51B3\u5927\u6574\u6570\uFF08\u5982\u51E0\u767E\u4F4D\u7684\u6574\u6570\uFF09\u5206\u89E3\u7684\u5FEB\u901F\u65B9\u6CD5\uFF0C\u90A3\u4E48RSA\u7B97\u6CD5\u5C06\u8F7B\u6613\u88AB\u7834\u89E3</p>\n<p>SSH\u5DE5\u4F5C\u539F\u7406\u5373\u4F7F\u7528\u975E\u5BF9\u79F0\u52A0\u5BC6\u6765\u4FDD\u8BC1\u5B89\u5168\u6027\uFF0C\u5728\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u6570\u636E\u662F\u52A0\u5BC6\u7684\uFF0C\u4F7F\u7528\u6700\u591A\u7684\u662F\u5B89\u5168\u767B\u5F55\u548C\u6587\u4EF6\u4F20\u8F93</p>\n<p>\u72B6\u6001\u7801</p>\n<p>1XX\uFF1A\u63A5\u53D7\u7684\u8BF7\u6C42\u6B63\u5728\u5904\u7406\uFF0C\u4FE1\u606F\u7C7B\u72B6\u6001\u7801\n2XX\uFF1A\u6210\u529F\n3XX\uFF1A\u91CD\u5B9A\u5411\n4XX\uFF1A\u5BA2\u6237\u7AEF\u9519\u8BEF\n5XX\uFF1A\u670D\u52A1\u5668\u9519\u8BEF</p>\n<p>\u7F13\u5B58</p>\n<pre><code>cache-control\nexpire\n</code></pre>\n<p>\u8DE8\u57DF\u548C\u6D4F\u89C8\u5668\u540C\u6E90\u7B56\u7565</p>\n<p>Cookie\uFF08Session\uFF09\u548CToken</p>\n<p>ASCII\u7F16\u7801</p>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Compthis0002.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Compthis0002.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>this</h1>\n<p>\u6267\u884C\u4E0A\u4E0B\u6587\u5BF9\u8C61</p>\n<p>this\u6307\u5411\u76844\u79CD\u60C5\u51B5</p>\n<ol>\n<li>\u666E\u901A\u51FD\u6570\u8C03\u7528</li>\n<li>\u5BF9\u8C61\u65B9\u6CD5\u8C03\u7528</li>\n<li>new \u6784\u9020\u51FD\u6570</li>\n<li>call\u3001apply\u548Cbind</li>\n</ol>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp事件循环0003.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp事件循环0003.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h2>\u4E8B\u4EF6\u5FAA\u73AF</h2>\n<p>\u5F02\u6B65\u4EFB\u52A1\u6267\u884C\u89C4\u5219\uFF0C\u5148\u5BF9\u5F02\u6B65\u4EFB\u52A1\u8FDB\u884C\u5206\u7C7B\uFF0C\u7136\u540E\u6309\u7167\u4F18\u5148\u7EA7\u6267\u884C\u3002\n\u5B8F\u4EFB\u52A1\u5728\u4E0B\u4E00\u6B21\u4E8B\u4EF6\u5FAA\u73AF\u5F00\u59CB\u6267\u884C\uFF0C\u5FAE\u4EFB\u52A1\u5728\u672C\u6B21\u4E8B\u4EF6\u5FAA\u73AF\u6267\u884C\u5B8C\u6210\uFF0C\n\u8BC6\u522B\u5B8F\u4EFB\u52A1->\u5B8F\u4EFB\u52A1\u89E6\u53D1\u5B58\u5165\u4E8B\u4EF6\u89E6\u53D1\u7EBF\u7A0B->\u5FAE\u4EFB\u52A1\u5165\u961F->js\u5F15\u64CE\u6267\u884C\u6240\u6709\u5FAE\u4EFB\u52A1->gui\u6E32\u67D3\u7EBF\u7A0B\u5F00\u59CB\u6E32\u67D3\u9875\u9762->js\u5F15\u64CE\u6267\u884C\u5B8F\u4EFB\u52A1</p>\n<h2>promise</h2>\n<p>\u56DE\u8C03\u51FD\u6570\u5B8C\u6210\u5F02\u6B65\u64CD\u4F5C\uFF0C\u6709\u8BF8\u591A\u7F3A\u70B9\n\u6DF7\u4E71\uFF1A\u56DE\u8C03\u51FD\u6570\u6CA1\u6709\u660E\u786E\u7684\u8C03\u7528\u65F6\u673A\uFF0C\u8FB9\u754C\u6A21\u7CCA\uFF0C\u4EFB\u4F55\u65F6\u5019\u4EFB\u4F55\u5730\u70B9\u90FD\u53EF\u4EE5\u8C03\u7528\n\u4E0D\u7EDF\u4E00\u7684\uFF1A\u81EA\u5B9A\u4E49\u6210\u529F/\u5931\u8D25\u56DE\u8C03\n\u5D4C\u5957\uFF1A\u56DE\u8C03\u51FD\u6570\u7684\u5D4C\u5957\u5730\u72F1\uFF0C\u52A0\u5267\u6DF7\u4E71</p>\n<p>promise\u7684\u91CD\u8981\u610F\u4E49\u662F\u5B8C\u6210\u4E86\u5F02\u6B65\u64CD\u4F5C\u8D8B\u4E8E\u7EDF\u4E00\u5316\u3001\u89C4\u8303\u5316\u3001\u6D41\u7A0B\u5316\u7684\u7BA1\u7406\n\u7EDF\u4E00\uFF1A\u4EFB\u52A1\u72B6\u6001\uFF0Cpending->fulfilled\u6216\u8005pending->reject\n\u89C4\u8303\uFF1Athen\u6210\u529F\uFF0Ccatch\u5931\u8D25\n\u6D41\u7A0B\uFF1A\u94FE\u5F0F\u8C03\u7528,\u5E76\u4E14\u94FE\u5F0F\u5B8C\u6574\u7684\uFF0C\u4E0D\u4F1A\u4E2D\u9014\u4E2D\u65AD\u3002</p>\n<p>promise\u7279\u70B9\uFF1A\n\u56DE\u8C03\u51FD\u6570\u4F5C\u7528\u57DF\u6307\u5411\u5168\u5C40\u7684\uFF0C\u5305\u62ECthen\u7684\u56DE\u8C03\n\u94FE\u5F0F\u8C03\u7528:then\u3001catch\u3001finally\u4E32\u8054\u64CD\u4F5C</p>\n<p>then\u53EF\u4EE5\u65E0\u9650\u8C03\u7528\uFF0C\u524D\u4E00\u4E2Athen\u7684return\u503C\u4F1A\u4F20\u9012\u5230\u4E0B\u4E00\u4E2Athen\u91CC\u3002</p>\n<p>catch\u548Cfinally\u53EA\u6709\u4E00\u6B21\u8C03\u7528\u751F\u6548\uFF0C\u4F46\u662F\u4E0D\u4F1A\u963B\u585E\u94FE\u5F0F\u4F20\u9012\uFF0C\u540E\u9762\u4ECD\u7136\u53EF\u4EE5catch\u3001then</p>\n<p>\u5173\u4E8Ethenable\u5BF9\u8C61\uFF0C\u5148\u6267\u884Cthen\u65B9\u6CD5\uFF0C\u5E76\u4E14resolve\u53EF\u4EE5\u900F\u4F20\u53C2\u6570</p>\n<pre><code class=\"language-js\">const thenable = {\n  then (resolve, reject) {\n    console.log('then');\n    resolve(1)\n  }\n}\nPromise.resolve(thenable)\nPromise.resolve(thenable).then(res => console.log(res))\n</code></pre>\n<h2>async...await</h2>\n<p>await\u7684\u610F\u4E49\u662F\u5C06promise\u94FE\u5F0F\u8C03\u7528\u6267\u884C\u5F02\u6B65\u4EFB\u52A1\u8F6C\u5316\u4E3A\u540C\u6B65\u4EE3\u7801\u5757\u6267\u884C\u5F02\u6B65\u4EFB\u52A1\uFF0C\u8D34\u5408\u4EE3\u7801\u987A\u5E8F\u6267\u884C\nawait\u6267\u884C\u89C4\u5219</p>\n<pre><code>await expression\nif(value is Promise){\n    expression.then()\n}else if(value is thenable){\n    Promise.resolve(expression.then())\n}else{\n    Promise.resolve(expression)\n}\n\n</code></pre>\n<p>\u5F53async...await\u9047\u4E0AforEach\u65F6\uFF0C\u7279\u522B\u6CE8\u610F\u3002forEach\u6267\u884C\u89C4\u5219\u5982\u4E0B</p>\n<pre><code>arr.forEach((item.i)=>{\n    fn(item,i)\n});\n//\u7B49\u4EF7\u4E8E\nconst fnWrap = (item,i) =>{\n    fn(item,i);\n}\nfor(let i = 0;i<array.length;i++){\n    fnWrap(arr[i],i);\n}\n\n</code></pre>\n<p>\u4F8B\u5B50</p>\n<pre><code class=\"language-js\">var arr=[{a:1},{}];\narr.forEach(function(item,idx){\n    item.b=idx;\n});\n</code></pre>\n<p>forEach\u3001map\u3001filter\u3001every\u3001some\u548Creduce\u4F1A\u8DF3\u8FC7\u7A7A\u4F4D</p>\n<pre><code class=\"language-js\">let array = [,1,,2,,3];\narray = array.map((i) => ++i) // array [,2,,3,,4]\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp作用域0004.tsx":
/*!******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp作用域0004.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>\u4F5C\u7528\u57DF</h1>\n<h3>\u5173\u952E\u8BCD</h3>\n<ul>\n<li>var\u3001let/const\u3001\u53D8\u91CF\u63D0\u5347\u3001\u6682\u65F6\u6027\u6B7B\u533A</li>\n<li>\u8BCD\u6CD5\u4F5C\u7528\u57DF\u3001\u6267\u884C\u4E0A\u4E0B\u6587</li>\n<li>\u95ED\u5305</li>\n<li>\u51FD\u6570\u3001\u65B9\u6CD5\u3001IIFE\u3001\u6A21\u5757</li>\n</ul>\n<p>\u4F5C\u7528\u57DF\u662F\u53D8\u91CF/\u5E38\u91CF\u7684\u8BBF\u95EE\u89C4\u5219\uFF0C\u6216\u8005\u8BF4\u662F\u53D8\u91CF/\u5E38\u91CF\u7684\u5F71\u54CD\u8303\u56F4\uFF0C\u901A\u8FC7\u6307\u5B9A\u4F5C\u7528\u57DF\u7684\u7C7B\u578B\u6765\u5206\u914D\u53D8\u91CF\u7684\u8BBF\u95EE\u6743\u9650\uFF0C\u4F8B\u5982\u51FD\u6570\u4F5C\u7528\u57DF\u53EA\u5728\u51FD\u6570\u4EE3\u7801\u5757\u5185\u751F\u6548\uFF0C\u5168\u5C40\u4F5C\u7528\u57DF\u5728\u5168\u5C40\u4EFB\u4F55\u5730\u65B9\u90FD\u80FD\u8BBF\u95EE\u3002\u4F5C\u7528\u57DF\u7C7B\u578B\u5373\u53D8\u91CF\u8BBF\u95EE\u6743\u9650\u5206\u914D\u89C4\u5219</p>\n<p>\u4F5C\u7528\u57DF\u94FE\uFF1A\u5728\u591A\u5C42\u5D4C\u5957\u7684\u7236\u5B50\u4F5C\u7528\u57DF\u4E2D\uFF0C\u63D0\u4F9B\u53D8\u91CF\u67E5\u627E\u7684\u6E20\u9053\u3002</p>\n<h3>var\u53D8\u91CF\u63D0\u5347</h3>\n<p>\u5173\u952E\u8BCD\uFF1A\u8BCD\u6CD5\u73AF\u5883\u3001\u5757\u4F5C\u7528\u57DF\u3001\u6682\u65F6\u6B7B\u533A</p>\n<p>\u53D8\u91CF\u7684\u58F0\u660E\u5468\u671F\uFF1A\u521B\u5EFA\u3001\u521D\u59CB\u5316\u3001\u8D4B\u503C\u3001\u5F15\u7528\u3001\u9500\u6BC1\u3002\u53D8\u91CF\u63D0\u5347\u76F8\u5173\u7684\u4E09\u4E2A\u9636\u6BB5\u662F\u521B\u5EFA\u3001\u521D\u59CB\u5316\u548C\u8D4B\u503C</p>\n<p>var\u53D8\u91CF\u63D0\u5347\uFF1A\u521B\u5EFA\u548C\u521D\u59CB\u5316\uFF08undefined\uFF09\u662F\u88AB\u63D0\u5347\u7684\uFF0C\u8D4B\u503C\u4E0D\u662F\nlet\u53D8\u91CF\u63D0\u5347\uFF1A\u521B\u5EFA\u662F\u88AB\u63D0\u5347\u7684\uFF08\u5B58\u5165\u6682\u65F6\u6027\u6B7B\u533A\uFF09\uFF0C\u521D\u59CB\u5316\u548C\u8D4B\u503C\u4E0D\u662F\nfunction\u53D8\u91CF\u63D0\u5347\uFF1A\u521B\u5EFA\u3001\u521D\u59CB\u5316\u548C\u8D4B\u503C\u540C\u65F6\u88AB\u63D0\u5347</p>\n<p>var\u5B9A\u4E49\u53D8\u91CF\u7279\u70B9</p>\n<ol>\n<li>\u53D8\u91CF\u63D0\u5347\uFF1A\u5728\u4EFB\u4F55\u65F6\u5019\u90FD\u4F1A\u5728\u6267\u884C\u4EE3\u7801\u4E4B\u524D\u5904\u7406\u53D8\u91CF\u58F0\u660E\uFF0Cvar\u53D8\u91CF\u58F0\u660E\u662F\u7F16\u8BD1\u65F6</li>\n<li>\u53D8\u91CF\u540C\u540D\u8986\u76D6\uFF1Avar\u53EF\u4EE5\u91CD\u590D\u58F0\u660E\u8D4B\u503C\uFF0C\u540E\u9762\u4F1A\u8986\u76D6\u524D\u9762</li>\n<li>\u5168\u5C40\u4F7F\u7528var\u5B9A\u4E49\u7684\u53D8\u91CF\u4F1A\u6210\u4E3Awindow\u7684\u5C5E\u6027</li>\n<li>\u53EA\u8BA4\u51FD\u6570\u4F5C\u7528\u57DF\u548C\u5168\u5C40\u4F5C\u7528\u57DF</li>\n</ol>\n<p>\u5757\u4F5C\u7528\u57DF\n\u8BCD\u6CD5\u73AF\u5883\uFF1A\u5F53\u6267\u884C\u4EE3\u7801\u5757\uFF08{}\u5305\u88F9\u7684\u4EE3\u7801\uFF09\u65F6\u4F1A\u521B\u5EFA\u4E00\u4E2A\u8BCD\u6CD5\u73AF\u5883\uFF0C\u4E0E\u5168\u5C40\u73AF\u5883\u5F62\u6210\u5D4C\u5957\uFF0C\u8BCD\u6CD5\u73AF\u5883\u91CC\u5305\u542B\u73AF\u5883\u8BB0\u5F55\u3002\u800C\u6211\u4EEC\u7684let\u5B9A\u4E49\u7684\u53D8\u91CF\u5C31\u5B58\u653E\u5728\u8FD9\u4E2A\u8BCD\u6CD5\u73AF\u5883\u4E2D\u3002let\u5728\u591A\u4E2A\u5757\u4F5C\u7528\u57DF\u4E2D\u58F0\u660E\u53D8\u91CF\u65F6\uFF0Cjs\u4F1A\u521B\u5EFA\u5355\u72EC\u7684\u533A\u57DF\u7531\u8BCD\u6CD5\u73AF\u5883\u4E3A\u8FD9\u4E9B\u53D8\u91CF\u7EF4\u62A4\u4E00\u4E2A\u7C7B\u4F3C\u6808\u7684\u7ED3\u6784\uFF0C\u6240\u4EE5\u540C\u540D\u7684let\u53D8\u91CF\u5728\u4E0D\u540C\u7684\u4EE3\u7801\u5757\u4E2D\u58F0\u660E\u662F\u4E0D\u4F1A\u51B2\u7A81\u7684\u3002\u5373\u8BCD\u6CD5\u73AF\u5883\u662F\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u53E6\u4E00\u4E2A\u7EC4\u4EF6</p>\n<p>es6\u7684let\u548Cconst\u58F0\u660E\u7684\u53D8\u91CF\u5728\u4EE3\u7801\u6267\u884C\u5F00\u59CB\u5230\u58F0\u660E\u4E4B\u524D\uFF0C\u53D8\u91CF\u90FD\u5904\u4E8E\u6682\u65F6\u6027\u6B7B\u533A\uFF08Temporal dead zone\uFF0CTDZ\uFF09\u4E4B\u4E2D\u3002\u6682\u65F6\u6027\u6B7B\u533A\u662F\u4EE3\u7801\u6267\u884C\u65F6\uFF0C\u4E00\u6BB5\u4ECE\u5F53\u524D\u4F5C\u7528\u57DF\u5F00\u59CB\u5230\u4F7F\u7528let/const\u58F0\u660E\u53D8\u91CF/\u5E38\u91CF\u884C\u4E4B\u524D\u7684\u533A\u57DF\uFF0C\u5728\u8FD9\u6BB5\u533A\u57DF\u4E2D\u53D8\u91CF\u5C1A\u672A\u88AB\u521D\u59CB\u5316\uFF0C\u5982\u679C\u5728\u8FD9\u671F\u95F4\u5C1D\u8BD5\u8BBF\u95EE\u53D8\u91CF\u5C06\u4F1A\u629B\u51FAReferenceError\u3002\u4F8B\u5982</p>\n<pre><code class=\"language-js\">// TDZ\uFF0C\u5F00\u59CB\nconsole.log(a);// undefined\nconsole.log(b);//RefernceError\nvar a = 1\nlet b = 2; // TDZ\uFF0C\u7ED3\u675F(b)\n</code></pre>\n<p>let\u58F0\u660E\u7684\u53D8\u91CF\u5C06\u4F5C\u7528\u57DF\u9650\u5236\u5728\u5757\u4F5C\u7528\u57DF\u5185\uFF0C\u5728\u4EE3\u7801\u6CA1\u6709\u6267\u884C\u5230\u5B83\u7684\u521D\u59CB\u5316\u8BED\u53E5\u4E4B\u524D\uFF0C\u5B83\u4ECD\u7136\u5B58\u5728\u4E8ETDZ\u4E2D</p>\n<pre><code class=\"language-js\">function foo(){\n  var a = 1;\n  if(a){\n    let a = a + 1; // ReferenceError\n  }\n}\nfoo();\n</code></pre>\n<pre><code class=\"language-js\">function bar(n){\n  console.log(n); // {a:[1,2,3]}\n  for(let n of n.a){// ReferenceError\n    console.log(n);\n  }\n}\nbar({a: [1,2,3]})\n</code></pre>\n<p>let\u5B9A\u4E49\u53D8\u91CF\u7684\u7279\u70B9</p>\n<ol>\n<li>\u5B58\u5728\u6682\u65F6\u6027\u6B7B\u533A\uFF0C\u6B7B\u533A\u5185\u8BBF\u95EE\u53D8\u91CF\u4F1A\u62A5\u9519</li>\n<li>\u4E0D\u80FD\u91CD\u590D\u547D\u540D\uFF0C\u5B58\u5728\u91CD\u590D\u547D\u540D\u4F1A\u62A5\u9519</li>\n<li>\u5728\u5757\u4F5C\u7528\u57DF\u4E2D\u751F\u6548</li>\n</ol>\n<h3>\u51FD\u6570\u4F5C\u7528\u57DF</h3>\n<p>\u521B\u5EFA\u51FD\u6570\u6709\u591A\u79CD\u65B9\u5F0F</p>\n<ol>\n<li>\u51FD\u6570\u8868\u8FBE\u5F0F</li>\n<li>function\u5173\u952E\u8BCD</li>\n<li>\u7BAD\u5934\u51FD\u6570\u8868\u8FBE\u5F0F\uFF08lamada\u51FD\u6570\uFF09\u548C\u81EA\u6267\u884C\u51FD\u6570\u8868\u8FBE\u5F0F\uFF08IIFE\uFF09</li>\n</ol>\n<p>\u51FD\u6570\u4F5C\u7528\u57DF</p>\n<h3>\u6A21\u5757</h3>\n<p>\u6A21\u5757\u5316\u7684\u91CD\u8981\u610F\u4E49\u5373\u62C6\u5206\uFF0C\u4F5C\u7528\u57DF\u62C6\u5206\uFF0C\u53D8\u91CF\u7684\u5F71\u54CD</p>\n<h3>var \u51FD\u6570\u4F5C\u7528\u57DF/\u5168\u5C40\u4F5C\u7528\u57DF</h3>\n<pre><code class=\"language-js\">if(! &quot;a&quot; in window){\n    var a = 1;\n}\nconsole.log(a);\n</code></pre>\n<pre><code class=\"language-js\">var a = 1;\nb = 2;\neval('var c = 3');\ndelete a;\ndelete b;\ndelete c;\n</code></pre>\n<h3>function</h3>\n<pre><code class=\"language-js\">(function f () {\n  function f () { return 1; }\n  return f();\n  function f () { return 2; }\n})();\n</code></pre>\n<pre><code class=\"language-js\">(function(x){\n  delete x;\n  return x;    \n}\n)(1);\n</code></pre>\n<h3>var\u4E0EIIFE</h3>\n<pre><code class=\"language-js\">(function() {\n  var a = b = 5;\n})();   \nconsole.log(b);\nconsole.log(a);\n</code></pre>\n<pre><code class=\"language-js\">var a = 10;\n(function () {\n  console.log(a)\n  a = 5\n  console.log(window.a);\n  var a = 20;\n  console.log(a)\n})()\n</code></pre>\n<pre><code class=\"language-js\">var b = 10;\n(function b() {\n  b = 20;\n  console.log(b)\n})()\n</code></pre>\n<pre><code class=\"language-js\">var foo = &quot;Hello&quot;;\n(function () {\n  var bar = &quot; World&quot;;\n  console.log(foo + bar);\n})();\nconsole.log(foo + bar);\n</code></pre>\n<pre><code class=\"language-js\">// \u8F93\u51FA\u7ED3\u679C\nvar name = 'Tom';\n(function () {\n  if (typeof name === 'undefined') {\n    var name = 'Jack';\n    console.log('Goodbye ' + name)\n  } else {\n    console.log('Hello ' + name);\n  }\n})();\n\n//\u8F93\u51FA\u7ED3\u679C\nvar name = 'Tom';\n(function () {\n  if (typeof name === 'undefined') {\n    name = 'Jack';\n    console.log('Goodbye ' + name)\n  } else {\n    console.log('Hello ' + name);\n  }\n})();\n\n</code></pre>\n<pre><code class=\"language-js\">var foo = {n:1};\n(function(foo){\n    console.log(foo.n);\n    foo.n = 3;\n    var foo = {n:2};\n    console.log(foo.n);\n})(foo);\nconsole.log(foo.n);\n</code></pre>\n<h3>\u53D8\u91CF\u8986\u76D6</h3>\n<pre><code class=\"language-js\">meili()\nfunction meili () {\n  console.log(&quot;meili&quot;)\n}\nmogu()\nvar mogu = function () {\n  console.log(&quot;mogu&quot;)\n}\n</code></pre>\n<pre><code class=\"language-js\">compute(10, 100);\nvar compute = function (A, B) {\n  console.info(A * B);\n};\nfunction compute (A, B) {\n  console.info(A + B);\n}\nfunction compute (A, B) {\n  console.info((A + B) * 2);\n}\ncompute(2, 10);\n</code></pre>\n<pre><code class=\"language-js\">\ncheck('first');\nfunction check (ars) {\n  console.log(1, ars);\n}\n\ncheck('second');\nvar check = function (ars) {\n  console.log(2, ars);\n}\n</code></pre>\n<h3>\u5F02\u6B65\u64CD\u4F5C\u4E2D\u4F5C\u7528\u57DF</h3>\n<pre><code class=\"language-js\">// html\n<ul>\n  <li>1</li>\n  <li>2</li>\n  <li>3</li>\n  <li>4</li>\n</ul>\n// js\nvar elements = document.getElementsByTagName(&quot;li&quot;);\nfor (var i = 0; i < elements.length; i++) {\n  elements[i].onclick = function () {\n    console.log(i);\n  };\n}\n</code></pre>\n<pre><code class=\"language-js\">for (var i = 0; i < 3; i++) {\n  setTimeout(_ => {\n    console.log(i)\n  })\n}\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(_ => {\n    console.log(i)\n  })\n}\n</code></pre>\n<pre><code class=\"language-js\">for (var i = 0; i< 10; i++){\n   setTimeout(() => {\n    console.log(i);\n   }, 1000)\n}\n\nfor (var i = 0; i< 10; i++){\n  (function(i){\n    setTimeout(() => {\n    console.log(i);\n   }, 1000)\n  })(i)\n}\n\nfor (var i = 0; i< 10; i++){\n  (function(i){\n    setTimeout(() => {\n    console.log(i);\n   }, 1000*i)\n  })(i)\n}\n\nfor (var i = 0; i< 10; i++){\n  setTimeout(() => {\n    (function(i){console.log(i);}(i)\n  }), 1000)\n}\n\nfor (var i = 0; i< 10; i++){\n  setTimeout(() => {\n    console.log(i);\n  }, 1000)\n}\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp原型链0005.tsx":
/*!******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp原型链0005.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h1>\u539F\u578B\u94FE</h1>\n<h3>\u5173\u952E\u8BCD</h3>\n<ul>\n<li>__proto__\u3001prototype\u3001constructor</li>\n<li>class\u3001extends\u3001super\u3001new\u3001new.target</li>\n<li>instanceof\u3001Object.create</li>\n<li>Object.getPrototypeOf\u3001Object.setPrototypeOf</li>\n</ul>\n<h3>\u539F\u578B\u94FE</h3>\n<p>\u539F\u578B\uFF1A\u6784\u9020\u51FD\u6570\u548C\u5B9E\u4F8B\u5BF9\u8C61\u7684\u8FDE\u63A5\u7684\u7EBD\u5E26\uFF0C\u51FD\u6570\u548C\u5BF9\u8C61\u7684\u5173\u7CFB\uFF08\u6A2A\u5411\uFF09\uFF0Cjs\u4E2D\u539F\u578B\u662F\u7EE7\u627F\u7684\u57FA\u7840\u3002\u6BCF\u4E2A\u5BF9\u8C61\uFF08object\uFF09\u90FD\u6709\u4E00\u4E2A\u539F\u578B\u94FE\u5BF9\u8C61\uFF08\u4E5F\u53EB\u9690\u5F0F\u539F\u578B\uFF09__proto__\uFF08\u73B0\u5728__proto__\u5DF2\u7ECF\u5E9F\u5F03\uFF0C\u6539\u4E3A\u4F7F\u7528Object.getPrototypeOf()\u548CObject.setPrototypeOf()\u6765\u5B9E\u73B0\uFF09\uFF0C\u6240\u6709\u6784\u9020\u51FD\u6570\u90FD\u6709\u4E00\u4E2A\u539F\u578B\u5BF9\u8C61prototype</p>\n<p>\u539F\u578B\u94FE\uFF1A\u5BF9\u8C61\u5C5E\u6027/\u65B9\u6CD5\u7684\u8BBF\u95EE\u89C4\u5219\uFF0C\u5B83\u662F\u987A\u7740\u5BF9\u8C61\u7684\u9690\u5F0F\u539F\u578B\uFF08__proto__\uFF09\u5411\u4E0A\uFF08\u6784\u9020\u51FD\u6570\uFF09\u67E5\u627E\uFF0C\u7236\u7C7B\u548C\u5B50\u7C7B\u4EE5\u53CA\u4ED6\u4EEC\u7684\u5B9E\u4F8B\u5BF9\u8C61\u4E4B\u95F4\u7684\u5173\u8054\u5173\u7CFB\uFF08\u5782\u76F4\uFF09\u3002\u5C31\u50CF\u6211\u4EEC\u62BD\u6C34\u7684\u65F6\u5019\uFF0C\u6C34\u662F\u987A\u7740\u5EFA\u597D\u7684\u6C34\u7BA1\u6765\u6D41\u52A8\u7684\uFF0C\u6C34\u7BA1\u5C31\u662F\u4E00\u4E2A\u6C34\u7684\u6D41\u52A8\u89C4\u5219\uFF0C\u53EF\u4EE5\u5411\u4E0A\u6D41\uFF0C\u4E5F\u53EF\u4EE5\u5411\u4E0B\u6D41\uFF0C\u53EF\u4EE5\u52A8\u6001\u7684\u6784\u9020\u6C34\u7BA1\u7684\u8D70\u5411\uFF0C\u81EA\u5B9A\u4E49\u89C4\u5219\u3002\u539F\u578B\u94FE\u3001\u4F5C\u7528\u57DF\u94FE\u7B49\u4E5F\u662F\u8FD9\u6837\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u52A8\u6001\u4FEE\u6539\u9690\u5F0F\u539F\u578B\uFF0C\u53EF\u4EE5\u4FEE\u6539__proto__\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\uFF0C\u4E5F\u53EF\u4EE5\u91CD\u5199__proto__\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5BF9\u8C61\u9690\u5F0F\u539F\u578B\u8BBF\u95EE\u6784\u9020\u51FD\u6570\u3002</p>\n<p>\u539F\u578B\u548C\u539F\u578B\u94FE\u7EC4\u6210\u4E86\u5BF9\u8C61\u5C5E\u6027\u8BBF\u95EE\u7684\u89C4\u5219\u7F51\u7EDC\uFF08\u6A2A\u5411\u548C\u7EB5\u5411\u4E8C\u7EF4\u5173\u7CFB\uFF09</p>\n<p>\u5982\u679C\u539F\u578B\u94FE\u4E2D\u65AD\uFF0C\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F</p>\n<p>\u6211\u4EEC\u77E5\u9053\u53EF\u4EE5\u4F7F\u7528instanceof\u6765\u68C0\u6D4B\u67D0\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E0A\u662F\u5426\u5B58\u5728\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\uFF08prototype\uFF09\u3002\u5176\u5B9E\u73B0\u4F2A\u4EE3\u7801\u5982\u4E0B</p>\n<pre><code class=\"language-js\">function myInstanceof(object,constructor){\n  left = object.__proto__\n  right = constructor.prototype\n  while(true){\n    if(left === null) return false\n    if(left === right) return true\n    left = left.__proto__\n  } \n}\n</code></pre>\n<h3>\u521B\u5EFA\u5BF9\u8C61\u7684\u51E0\u79CD\u65B9\u5F0F</h3>\n<p>new\u5173\u952E\u8BCD\u548CObject.create()\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u5E76\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0Cnew\u7684\u8FC7\u7A0B\u6982\u62EC\u8D77\u6765\u67094\u6B65,\u5B9E\u73B0\u4F2A\u4EE3\u7801\u5982\u4E0B</p>\n<pre><code class=\"language-js\">function myNew(constructor){\n  // \u7B2C1\u6B65\uFF0C\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\n  object = {}\n  // \u7B2C2\u6B65\uFF0C\u8865\u9F50\u539F\u578B\u94FE\n  object.__proto__ = constructor.prototype\n  // \u7B2C3\u6B65\uFF0C\u786E\u4FDD\u6267\u884C\u4E0A\u4E0B\u6587\u5BF9\u8C61\u6B63\u786E\uFF08this\uFF09\n  ret = constructor.call(object)\n  // \u7B2C4\u6B65\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\n  return ret || object\n}\n</code></pre>\n<p>Object.create(proto)\u5373\u4EE5\u73B0\u6709\u5BF9\u8C61\uFF08proto\uFF09\u4F5C\u4E3A\u539F\u578B\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u3002\u5B9E\u73B0\u4F2A\u4EE3\u7801\u5982\u4E0B</p>\n<pre><code class=\"language-js\">function objectCreate(object){\n  const newObj = {}\n  newObj.__proto__ = object\n  return newObj\n}\n</code></pre>\n<p>\u6211\u4EEC\u6700\u5E38\u7528\u7684\u662F\u901A\u8FC7\u5B57\u9762\u91CF\u6765\u521B\u5EFA\u5BF9\u8C61\uFF0C\u5373const obj = {}\u8FD9\u79CD\u65B9\u5F0F\u7B49\u4EF7\u4E8Econst obj = Object()</p>\n<p>\u600E\u4E48\u8BC6\u522B\u6211\u7684\u5BF9\u8C61\u662F\u901A\u8FC7\u54EA\u79CD\u65B9\u5F0F\u521B\u5EFA\u7684\u5462\uFF1F\u6BD4\u5982\u6211\u4EEC\u901A\u8FC7new\u6765\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5C31\u53EF\u4EE5\u5728\u6784\u9020\u51FD\u6570\u4E2D\u901A\u8FC7new.target\u6765\u68C0\u6D4B\u8FD9\u4E2A\u51FD\u6570\u662F\u5426\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u901A\u8FC7new\u6765\u8C03\u7528\u7684\uFF0C\u5B83\u6307\u5411\u76F4\u63A5\u88ABnew\u6267\u884C\u7684\u6784\u9020\u51FD\u6570\u3002\u4F8B\u5982</p>\n<pre><code class=\"language-js\">function Foo() {\n  if (!new.target) throw &quot;Foo() must be called with new&quot;;\n  console.log(&quot;Foo instantiated with new&quot;);\n  console.log(new.target)\n}\n\nFoo(); // throws &quot;Foo() must be called with new&quot;\nnew Foo(); // logs &quot;Foo instantiated with new&quot;\n</code></pre>\n<h3>\u539F\u578B\u3001\u9690\u5F0F\u539F\u578B\u548C\u6784\u9020\u51FD\u6570(prototype\u3001__proto__\u3001constructor)</h3>\n<p>\u5B9E\u4F8B\u5BF9\u8C61\u3001\u6784\u9020\u51FD\u6570\uFF0C\u7236\u7C7B\u5B50\u7C7B\u7684\u5173\u8054\u5173\u7CFB\u603B\u7ED3\u5982\u4E0B\u516C\u5F0F</p>\n<pre><code>// \u539F\u578B\uFF1A\u63CF\u8FF0\u4E86\u5B9E\u4F8B\u5BF9\u8C61\u548C\u6784\u9020\u51FD\u6570\u7684\u5173\u8054\u5173\u7CFB\n\u5B9E\u4F8B\u5BF9\u8C61.constructor === \u6784\u9020\u51FD\u6570\n\u5B9E\u4F8B\u5BF9\u8C61.__proto__ === \u6784\u9020\u51FD\u6570.prototype\n\n// \u539F\u578B\u94FE\uFF1A\u63CF\u8FF0\u4E86\u6784\u9020\u51FD\u6570\u548C\u5176\u7956\u5148\u6784\u9020\u51FD\u6570\u7684\u5173\u8054\u5173\u7CFB\n\u5B50\u7C7B.__proto__ === \u7236\u7C7B\n\u5B50\u7C7B.prototype.__proto__ === \u7236\u7C7B.prototype\n</code></pre>\n<p>\u4E0A\u9762\u7684\u516C\u5F0F\u7B49\u4EF7\u4E8E\u4E0B\u9762\u7684\u4F8B\u5B50</p>\n<pre><code class=\"language-js\">class A {}\nclass B extends A {}\n\nconst a = new A();\nconst b = new B();\n\n// a.constructor === A\n// a.__proto__ === A.prototype\n\n// B\u662F\u4E00\u4E2A\u5BF9\u8C61\n// B.__proto__ === A\n// B\u662F\u4E00\u4E2A\u51FD\u6570\n// B.prototype.__proto__ === A.prototype\n</code></pre>\n<h3>\u539F\u578B\u5BF9\u8C61\u5C5E\u6027\u7684\u64CD\u4F5C</h3>\n<pre><code class=\"language-js\">function Fn1 (name) {\n  if (name) {\n    this.name = name;\n  }\n}\nFn1.prototype.name = &quot;jack&quot;\nlet a = new Fn1();\nconsole.log('a:', a.name);\n\nfunction Fn2 (name) {\n  this.name = name;\n}\nFn2.prototype.name = &quot;jack&quot;\nlet b = new Fn2();\nconsole.log('b:', b.name);\n</code></pre>\n<pre><code class=\"language-js\">function Foo () { }\nFoo.prototype.z = 3;\nvar obj = new Foo();\nconsole.info(obj.z)\nobj.z = 10;\nconsole.info(obj.z);\ndelete obj.z;\nconsole.info(obj.z);\n</code></pre>\n<pre><code class=\"language-js\">var tmp = {};\nvar A = function () { };\nA.prototype = tmp;\n\nvar a = new A();\nA.prototype = {};\n\nvar b = Object.create(tmp);\nb.constructor = A.constructor;\n\nconsole.log(a instanceof A);\nconsole.log(b instanceof A);\n</code></pre>\n<pre><code class=\"language-js\">function Person(age){\n  this.age = age;\n}\n\nPerson.prototype = {\n  constructor:Person,\n  getAge:function(){\n    console.log(this.age);\n  },\n }\n\nvar p = new Person(24);\nPerson.prototype.age = 18;\nObject.prototype.age = 20;\np.getAge();\n</code></pre>\n<h3>es6 class get/set</h3>\n<pre><code class=\"language-js\">class Phone{\n  constructor(price){\n    this.price = price;\n  }\n  get price(){\n    return 999;\n  }\n}\nvar p = new Phone(888);\nconsole.log(p.price);\n</code></pre>\n<h3>prototype\u548C__proto__\u5173\u7CFB</h3>\n<pre><code class=\"language-js\">class A { }\nclass B extends A { }\nconst a = new A()\nconst b = new B()\n\nconsole.log(a.__proto__)\nconsole.log(b.__proto__)\nconsole.log(B.__proto__)\nconsole.log(B.prototype.__proto__)\nconsole.log(b.__proto__.__proto__)\n</code></pre>\n<h3>\u6784\u9020\u51FD\u6570\u548C\u666E\u901A\u51FD\u6570</h3>\n<pre><code class=\"language-js\">var name = 'Jay'\nfunction Person (name) {\n  this.name = name;\n  console.log(this.name)\n}\nvar a = Person('Tom')\nconsole.log(name)\nconsole.log(a)\nvar b = new Person('Michael')\nconsole.log(b)\n</code></pre>\n<h3>Object.create()\u5B9E\u73B0\u539F\u7406</h3>\n<pre><code class=\"language-js\">const Book = {\n  price: 32\n}\nconst book = Object.create(Book);\nbook.type = 'Math';\ndelete book.price;\ndelete book.type;\nconsole.log(book.price);\nconsole.log(book.type);\n</code></pre>\n<h3>\u539F\u578B\u94FE\u4E0E\u95ED\u5305</h3>\n<pre><code class=\"language-js\">var Foo = (function () {\n  var x = 0;\n  function Foo () { }\n  Foo.prototype.increment = function () {\n    ++x;\n    console.log(x);\n  };\n  return Foo;\n})();\n\nvar a = new Foo();\na.increment();\na.increment();\nvar b = new Foo();\na.increment();\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp如何写一个按钮组件0001.tsx":
/*!************************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp如何写一个按钮组件0001.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h2>\u6309\u94AE\u7EC4\u4EF6</h2>\n<p>\u6309\u94AE\u7684\u4E1A\u52A1\u5C5E\u6027\u662F\u53EF\u4EA4\u4E92\uFF0C\u70B9\u51FB\u53EF\u4EE5\u7ED9\u5230\u67D0\u79CD\u53CD\u9988\u3002\u9996\u5148\u662F\u8981\u5438\u5F15\u4F60\u53EF\u4EE5\u70B9\u51FB\u5B83\uFF0C\u7136\u540E\u70B9\u51FB\u5B83\u4E4B\u540E\u80FD\u6709\u4E00\u4E9B\u53CD\u5E94\uFF08\u53D8\u5316\uFF09\u3002\u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u5B9A\u4E49\u6309\u94AE\u7EC4\u4EF6\u7684\u529F\u80FD</p>\n<ol>\n<li>\u53EF\u4EE5\u5438\u5F15\u70B9\u51FB\uFF1A\u80FD\u591F\u81EA\u52A8\u6267\u884C\u52A8\u753B\uFF0C\u5305\u62EC\u4F46\u4E0D\u4EC5\u9650\u4E8E\u547C\u5438\u3001\u6296\u52A8\u3001\u80CC\u666F\u5149\u65CB\u8F6C\u7B49</li>\n<li>\u7ED9\u4E88\u67D0\u79CD\u53CD\u9988\uFF1A\u70B9\u51FB\u80FD\u6709\u4E00\u4E9B\u53D8\u5316\uFF0C\u5305\u62EC\u4F46\u4E0D\u4EC5\u9650\u4E8E\u5927\u5C0F\u3001\u80CC\u666F\u8272\u3001\u80CC\u666F\u56FE\u3001\u6587\u6848\u7B49</li>\n<li>\u5B8C\u6210\u81EA\u5B9A\u4E49\u4E1A\u52A1\uFF1A\u70B9\u51FB\u4E4B\u540E\u80FD\u6267\u884C\u6307\u5B9A\u4E1A\u52A1\uFF0C\u5305\u62EC\u4F46\u4E0D\u4EC5\u9650\u4E8EonClick\u56DE\u8C03\u51FD\u6570\u3001</li>\n<li>\u901A\u7528\u6309\u94AE\u7EC4\u4EF6\uFF1A\u80FD\u4ECE\u5916\u90E8\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u6309\u94AE\u53EA\u505A\u6838\u5FC3\u901A\u7528(\u70B9\u51FB\u4E4B\u540E\u5F62\u53D8+\u6309\u94AE\u7684\u9ED8\u8BA4\u6837\u5F0F)</li>\n</ol>\n<h2>\u6280\u672F\u65B9\u6848\u548C\u8F93\u5165\u8F93\u51FA</h2>\n<p>\u6267\u884C\u81EA\u5B9A\u4E49\u52A8\u753B\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0className\u6216\u8005style\u7684\u5F62\u5F0F\u5B9E\u73B0\u3002\u70B9\u51FB\u4E4B\u540E\u7684\u53D8\u5316\u53EF\u4EE5\u901A\u8FC7\u76D1\u542CaddEventListener touchstart\u548Ctouchend\u6765\u5B9E\u73B0\uFF0C\u5982\u679C\u8003\u8651pc\u7AEF\u517C\u5BB9\u6027\uFF0C\u53EF\u4EE5\u901A\u8FC7mousedown\u3001mouseup\u6765\u5B9E\u73B0\u3002\u5B8C\u6210\u6307\u5B9A\u4E1A\u52A1\u53EF\u4EE5\u901A\u8FC7\u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u5916\u90E8\u4F20\u5165\u56DE\u8C03\u51FD\u6570\u6765\u5B9E\u73B0\u3002\u901A\u7528\u6309\u94AE\u53EF\u4EE5\u901A\u8FC7props.chilren\u5916\u90E8\u52A8\u6001\u4F20\u5165\u7EC4\u4EF6\u3002\u73B0\u5728\u6211\u4EEC\u53EF\u4EE5\u5B9A\u4E49\u5165\u53C2\u548C\u51FA\u53C2\u4E86</p>\n<h3>\u5165\u53C2</h3>\n<pre><code class=\"language-ts\">interface IButton {\n  children: ReactElement | string;\n  onClick?: (event: TouchEvent) => {};\n  className?: string;\n  style?: CSSStyleDeclaration;\n}\n</code></pre>\n<h3>\u51FA\u53C2</h3>\n<pre><code class=\"language-jsx\">// \u4F8B\u5982\n<Button className={className} onClick={handleClk}><img/></Button>\n</code></pre>\n<h2>\u5B9E\u73B0\u53C2\u8003\u4EE3\u7801</h2>\n<pre><code class=\"language-tsx\">\nexport default function Button({ children, onClick, className, style }: IButton) {\n  const btnRef = useRef<HTMLDivElement | null>(null);\n  useEffect(() => {\n    const dom = btnRef.current as HTMLDivElement;\n\n    const handleStart = () => dom.style.transform = 'scale(0.9)';\n    const handleEnd = () => dom.style.transform = 'scale(1)';\n\n    dom.addEventListener('touchstart', handleStart)\n    document.addEventListener('touchend', handleEnd)\n    return () => {\n      dom.removeEventListener('touchstart', handleStart);\n      document.removeEventListener('touchend', handleEnd);\n    }\n  }, [])\n  return <div\n    style={style}\n    className={classnames('btn', className)}\n    onClick={onClick}\n    ref={btnRef}\n  >\n    {children}\n  </div>\n}\n</code></pre>\n"
    }
  });
});

/***/ }),

/***/ "./src/pages/Article/components/ArticleList/Comp网络模型0008.tsx":
/*!*******************************************************************!*\
  !*** ./src/pages/Article/components/ArticleList/Comp网络模型0008.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var highlight_js_styles_xcode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/styles/xcode.css */ "./node_modules/highlight.js/styles/xcode.css");



var hljs = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.querySelectorAll('code').forEach(function (el) {
      el.style.backgroundColor = '#f8f8f8';
      hljs.highlightElement(el);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      fontSize: '0.26rem'
    },
    dangerouslySetInnerHTML: {
      __html: "<h3>\u7F51\u7EDC\u6A21\u578B\u3001ISO/OSI\u4E03\u5C42\u6A21\u578B\u3001TCP/IP\u6A21\u578B</h3>\n<pre><code>\u6700\u5F00\u59CB\u7684\u65F6\u5019\u7F51\u7EDC\u534F\u8BAE\u662F\u7531\u7F51\u7EDC\u516C\u53F8\u81EA\u5B9A\u4E49\u7684\uFF0C\u5FAE\u8F6F\u3001\u82F9\u679C\u3001\u601D\u79D1\u7B49\u90FD\u6709\u81EA\u5DF1\u7684\u7F51\u7EDC\u534F\u8BAE\uFF0C\u4F46\u8FD9\u5404\u5BB6\u7684\u534F\u8BAE\u662F\u4E0D\u80FD\u4E92\u8054\u4E92\u901A\u7684\u3002\u5BF9\u4E8E\u6D88\u8D39\u8005\u6765\u8BF4\u8FD9\u662F\u6280\u672F\u5784\u65AD\uFF0C\u4E70\u4E86\u82F9\u679C\u7684\u8BBE\u5907\u5C31\u4E0D\u80FD\u7528\u5FAE\u8F6F\u7684\u8BBE\u5907\uFF0C\u56E0\u4E3A\u4ED6\u4EEC\u7684\u534F\u8BAE\u90FD\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u6CA1\u6709\u7EDF\u4E00\u7684\u6807\u51C6\u6765\u89C4\u8303\u7F51\u7EDC\u534F\u8BAE\uFF0C\u8FD9\u6781\u5927\u963B\u788D\u4E86\u4E92\u8054\u7F51\u7684\u53D1\u5C55\uFF0C\u56E0\u6B64\u56FD\u9645\u6807\u51C6\u5316\u7EC4\u7EC7\uFF08ISO\uFF09\u5236\u5B9A\u4E86\u4E00\u4E2A\u7528\u4E8E\u8BA1\u7B97\u673A\u6216\u8005\u901A\u4FE1\u7CFB\u7EDF\u95F4\u4E92\u8054\u7684\u6807\u51C6\u4F53\u7CFB\uFF0C\u5373\u5F00\u653E\u5F0F\u7CFB\u7EDF\u4E92\u8054\u6A21\u578B\uFF08OSI\uFF09\u3002\n\n\u8FD9\u4E2A\u6807\u51C6\u89E3\u91CA\u4E86\u534F\u8BAE\u4E4B\u95F4\u5E94\u8BE5\u5982\u4F55\u76F8\u4E92\u4F5C\u7528\uFF0COSI\u5B9A\u4E49\u4E86\u7F51\u7EDC\u4E92\u8FDE\u7684\u4E03\u5C42\u6A21\u578B\uFF08\u7269\u7406\u5C42\u3001\u6570\u636E\u94FE\u8DEF\u5C42\u3001\u7F51\u7EDC\u5C42\u3001\u4F20\u8F93\u5C42\u3001\u4F1A\u8BDD\u5C42\u3001\u8868\u793A\u5C42\u3001\u5E94\u7528\u5C42\uFF09\uFF0CTCP/IP\u662F\u4E00\u7EC4\u534F\u8BAE\u7684\u4EE3\u540D\u8BCD\uFF0C\u5B83\u5305\u62EC\u8BB8\u591A\u534F\u8BAE\uFF0C\u7EC4\u6210\u4E86TCP/IP\u534F\u8BAE\u7C07\u3002\u5B83\u662F\u628AOSI\u4E03\u5C42\u6A21\u578B\u7B80\u5316\u6210\u4E86\u56DB\u5C42\u6A21\u578B\uFF08\u5E94\u7528\u5C42\u3001\u4F20\u8F93\u5C42\u3001\u7F51\u7EDC\u5C42\u3001\u7F51\u7EDC\u63A5\u53E3\u5C42\uFF09\uFF0CTCP/IP\u6A21\u578B\u5C06OSI\u6A21\u578B\u7B80\u5316\u62104\u5C42\uFF0C\u4F20\u8F93\u5C42\u548C\u7F51\u7EDC\u5C42\u88AB\u5B8C\u6574\u4FDD\u7559\uFF0C\u56E0\u6B64\u7F51\u7EDC\u4E2D\u6700\u6838\u5FC3\u7684\u6280\u672F\u5C31\u662F\u4F20\u8F93\u5C42\u548C\u7F51\u7EDC\u5C42\u6280\u672F\u3002\u7F51\u7EDC7\u5C42\u6A21\u578B\u662F\u4E00\u4E2A\u53C2\u8003\u6807\u51C6\uFF0C\u5E76\u975E\u5B9E\u73B0\u3002\u7F51\u7EDC4\u5C42\u6A21\u578B\u662F\u4E00\u4E2A\u5B9E\u73B0\u7684\u5E94\u7528\u6A21\u578B\n\nOSI\u6A21\u578B\u662F\u4ECE\u4E0A\u5F80\u4E0B\u7684\uFF0C\u8D8A\u5E95\u5C42\u8D8A\u63A5\u8FD1\u786C\u4EF6\uFF0C\u8D8A\u4E0A\u5C42\u8D8A\u63A5\u8FD1\u8F6F\u4EF6\uFF0C\u8FD9\u79CD\u5206\u5C42\u6A21\u578B\u662F\u6211\u4EEC\u8BA1\u7B97\u673A\u79D1\u5B66\u4E2D\u5E38\u7528\u7684\u65B9\u6CD5\uFF0C\u5206\u5C42\u76F4\u63A5\u901A\u8FC7\u89C4\u5B9A\u597D\u7684\u63A5\u53E3\u8FDB\u884C\u4EA4\u4E92\uFF0C\u6BCF\u4E00\u5C42\u5176\u5B9E\u5BF9\u5B83\u4E0A\u4E00\u5C42\u6216\u8005\u4E0B\u4E00\u5C42\u90FD\u662F\u4E00\u4E2A\u9ED1\u76D2\uFF0C\u5176\u5B9E\u4ED6\u7684\u4E0A\u5C42\u548C\u4E0B\u5C42\u4E5F\u4E0D\u5173\u5FC3\u5B83\u7684\u5185\u90E8\u5B9E\u73B0\uFF0C\u53EA\u5173\u5FC3\u5B83\u4EEC\u4E4B\u95F4\u8FDB\u884C\u4EA4\u4E92\u7684\u63A5\u53E3\uFF0C\u63A5\u53E3\u662F\u89C4\u5B9A\u7684\u4FE1\u606F\uFF0C\u8981\u7ED9\u5230\u4EC0\u4E48\u90FD\u662F\u89C4\u5B9A\u597D\u7684\u3002\u4F20\u8F93\u5C42\u7684\u6570\u636E\u79F0\u4E3A\u6BB5\uFF08segments\uFF09\uFF0C\u7F51\u7EDC\u5C42\u7684\u6570\u636E\u79F0\u4E3A\u5305\uFF08packages\uFF09\uFF0C\u6570\u636E\u94FE\u8DEF\u5C42\u7684\u6570\u636E\u79F0\u4E3A\u5E27\uFF08frames\uFF09\uFF0C\u7269\u7406\u5C42\u7684\u6570\u636E\u79F0\u4E3A\u6BD4\u7279\u6D41\uFF08bits\uFF09\n\n\u8FD9\u79CD\u5206\u5C42\u6A21\u578B\u7684\u597D\u5904\u5C31\u662F\u53EF\u4EE5\u5BF9\u4EFB\u4F55\u4E00\u5C42\u8FDB\u884C\u72EC\u7ACB\u5347\u7EA7\u548C\u4F18\u5316\uFF0C\u53EA\u8981\u4FDD\u6301\u63A5\u53E3\u4E0D\u53D8\u90A3\u4E48\u8FD9\u4E2A\u6A21\u578B\u6574\u4F53\u5C31\u4E0D\u4F1A\u6709\u95EE\u9898\u3002\n\n\n\u5E94\u7528\u5C42\uFF1A\u4E3A\u64CD\u4F5C\u7CFB\u7EDF\u6216\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u63D0\u4F9B\u7F51\u7EDC\u670D\u52A1\u7684\u63A5\u53E3\u3002\u8D77\u5230\u4E86\u8C03\u7528\u7684\u4F5C\u7528\uFF0C\u4E3A\u5E94\u7528\u8F6F\u4EF6\u800C\u8BBE\u7684\u63A5\u53E3\uFF0C\u8BBE\u7F6E\u4E0E\u53E6\u4E00\u5E94\u7528\u8F6F\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1\uFF0C\u63D0\u4F9B\u4E0D\u540C\u8BA1\u7B97\u673A\u95F4\u7684\u6587\u4EF6\u4F20\u8F93\u3001\u8BBF\u95EE\u7BA1\u7406\u3001\u7535\u5B50\u90AE\u4EF6\u5185\u5BB9\u5904\u7406\u3002\u4F8B\u5982: HTTP\uFF0CHTTPS\uFF0CFTP\uFF0CTELNET\uFF0CSSH\uFF0CSMTP\u3001DNS\u7B49\n\n\u8868\u793A\u5C42\uFF1A\u4E3B\u8981\u4EFB\u52A1\u662F\u628A\u6240\u4F20\u8F93\u7684\u6570\u636E\u7684\u62BD\u8C61\u8BED\u6CD5\u53D8\u6362\u4E3A\u4F20\u9001\u8BED\u6CD5\uFF0C\u628A\u4E0D\u540C\u8BA1\u7B97\u673A\u5185\u90E8\u7684\u4E0D\u540C\u5F62\u5F0F\u8F6C\u6362\u4E3A\u7F51\u7EDC\u901A\u4FE1\u4E2D\u7684\u6807\u51C6\u5F62\u5F0F\u3002\u6B64\u5916\u5BF9\u4F20\u9001\u6570\u636E\u7684\u52A0\u5BC6\u89E3\u5BC6\u3001\u6B63\u6587\u538B\u7F29\u8FD8\u539F\u4E5F\u5C5E\u4E8E\u8868\u793A\u5C42\u7684\u7684\u4EFB\u52A1\uFF0C\u5373\u6570\u636E\u7684\u5904\u7406\uFF0C\u8868\u793A\u3001\u5B89\u5168\u3001\u538B\u7F29\u7B49\uFF0C\u683C\u5F0F\u6709\uFF0Cjpeg\u3001ascii\u3001decoic\u3001\u52A0\u5BC6\u683C\u5F0F\u7B49\u3002\u5982URL\u52A0\u5BC6\u3001\u53E3\u4EE4\u52A0\u5BC6\u3001\u56FE\u7247\u7F16\u7801\u89E3\u7801\u7B49\n\n\u4F1A\u8BDD\u5C42\uFF1A\u8D1F\u8D23\u5728\u6570\u636E\u4F20\u8F93\u4E2D\u8BBE\u7F6E\u548C\u7EF4\u62A4\u8BA1\u7B97\u673A\u7F51\u7EDC\u4E2D\u4E24\u53F0\u8BA1\u7B97\u673A\u4E4B\u95F4\u7684\u901A\u4FE1\u8FDE\u63A5\u3002\u63A7\u5236\u5E94\u7528\u7A0B\u5E8F\u4E4B\u95F4\u7684\u4F1A\u8BDD\u80FD\u529B\uFF0C\u4FDD\u6301\u6570\u636E\u7684\u5355\u5411\u4F20\u8F93\uFF0C\u4E00\u5BF9\u4E00\uFF0C\u4E00\u5BF9\u591A\u7684\u63A7\u5236\u3002\u5982\u670D\u52A1\u5668\u9A8C\u8BC1\u7528\u6237\u767B\u5F55\u3001\u65AD\u70B9\u7EED\u4F20\u7B49\n\n\u8FD0\u8F93\u5C42\uFF1A\u7AEF\u5230\u7AEF\u4F20\u8F93\u6570\u636E\u7684\u57FA\u672C\u529F\u80FD\uFF0C\u9AD8\u4F4E\u5C42\u4E4B\u95F4\u8854\u63A5\u7684\u63A5\u53E3\u5C42\uFF0C\u5B9A\u4E49\u4F20\u8F93\u6570\u636E\u7684\u534F\u8BAE\u7AEF\u53E3\u53F7\u4EE5\u53CA\u6D41\u63A7\u548C\u5DEE\u9519\u6821\u9A8C\uFF0C\u5982TCP\u3001UDP\u3001\u8FDB\u7A0B\u3001\u7AEF\u53E3\n\n\u7F51\u7EDC\u5C42\uFF1A\u5B9A\u4E49ip\u7F16\u5740\uFF0C\u5B9A\u4E49\u8DEF\u7531\u529F\u80FD\uFF0C\u8FDB\u884C\u903B\u8F91\u5730\u5740\u7684\u5BFB\u5740\uFF0C\u5B9E\u73B0\u4E0D\u540C\u7F51\u7EDC\u4E4B\u95F4\u8DEF\u5F84\u9009\u62E9\uFF0C\u5982\u4E0D\u540C\u8BBE\u5907\u7684\u6570\u636E\u8F6C\u53D1\u3002\u5982IP\u5730\u5740\u3001\u8DEF\u7531\u5668\u3001\u591A\u5C42\u4EA4\u6362\u673A\u3001\u9632\u706B\u5899\u7B49\n\n\u6570\u636E\u94FE\u8DEF\u5C42(DataLink)\uFF1A\u5B9A\u4E49\u6570\u636E\u7684\u4F20\u8F93\u683C\u5F0F\uFF0C\u5982\u4F55\u4F20\u8F93\uFF0C\u5982\u4F55\u6807\u8BC6\u3002\u5EFA\u7ACB\u903B\u8F91\u8FDE\u63A5\u3001\u8FDB\u884C\u786C\u4EF6\u5730\u5740\u5BFB\u5740\u3001\u5DEE\u9519\u6821\u9A8C\u7B49\uFF0C\u5C06\u6BD4\u7279\u7EC4\u5408\u6210\u5B57\u8282\u8FDB\u800C\u7EC4\u5408\u6210\u5E27\uFF0C\u7528MAC\u5730\u5740\u8BBF\u95EE\u4ECB\u8D28\uFF0C\u9519\u8BEF\u53D1\u73B0\u4F46\u4E0D\u80FD\u7EA0\u6B63\u3002\u5982MAC\u5730\u5740\u3001\u7F51\u5361\u3001\u7F51\u6865\u3001\u4E8C\u5C42\u4EA4\u6362\u673A\u7B49\n\n\u7269\u7406\u5C42\uFF08Physical\uFF09\uFF1A\u5E95\u5C42\u6570\u636E\u4F20\u8F93\uFF0C\u5EFA\u7ACB\u3001\u7EF4\u62A4\u3001\u65AD\u5F00\u7269\u7406\u8FDE\u63A5\u3002\u5982\u4E2D\u7EE7\u5668\u3001\u96C6\u7EBF\u5668\u3001\u7F51\u7EBF\u7B49\n</code></pre>\n<h3>\u4F20\u8F93\u5C42</h3>\n<p>TCP\u662F\u9762\u5411\u8FDE\u63A5\u7684\u3001\u53EF\u9760\u7684\u3001\u57FA\u4E8E\u5B57\u8282\u6D41\u7684\u4F20\u8F93\u5C42\u534F\u8BAE\u3002</p>\n<p>TCP\u534F\u8BAE\u4E3B\u8981\u7279\u70B9</p>\n<pre><code>TCP\u662F\u9762\u5411\u8FDE\u63A5\u7684\u4F20\u8F93\u5C42\u534F\u8BAE\u3002\u5E94\u7528\u7A0B\u5E8F\u5728\u4F7F\u7528TCP\u534F\u8BAE\u4E4B\u524D\uFF0C\u5FC5\u987B\u5148\u5EFA\u7ACBTCP\u8FDE\u63A5\uFF0C\u5728\u4F20\u8F93\u6570\u636E\u5B8C\u6BD5\u4E4B\u540E\uFF0C\u5FC5\u987B\u91CA\u653E\u5DF2\u7ECF\u5EFA\u7ACB\u7684TCP\u8FDE\u63A5\n\n\u6BCF\u4E00\u6761TCP\u8FDE\u63A5\u53EA\u80FD\u6709\u4E24\u4E2A\u7AEF\u70B9\uFF0C\u6BCF\u4E00\u4E2ATCP\u8FDE\u63A5\u53EA\u80FD\u662F\u70B9\u5BF9\u70B9\u7684\uFF08\u4E00\u5BF9\u4E00\uFF09\u3002\n\nTCP\u63D0\u4F9B\u5168\u53CC\u5DE5\u901A\u4FE1\u3002TCP\u5141\u8BB8\u901A\u4FE1\u53CC\u65B9\u7684\u5E94\u7528\u8FDB\u7A0B\u5728\u4EFB\u4F55\u65F6\u5019\u90FD\u80FD\u53D1\u9001\u6570\u636E\uFF0CTCP\u8FDE\u63A5\u7684\u4E24\u7AEF\u90FD\u8BBE\u6709\u53D1\u9001\u7F13\u5B58\u548C\u63A5\u6536\u7F13\u5B58\uFF0C\u7528\u6765\u5B58\u653E\u53CC\u5411\u901A\u4FE1\u7684\u6570\u636E\u3002\n\n\u5B57\u8282\u6D41\u3002\u7528\u6237\u6D88\u606F\u901A\u8FC7TCP\u534F\u8BAE\u4F20\u8F93\u65F6\uFF0C\u6D88\u606F\u53EF\u80FD\u88AB\u64CD\u4F5C\u7CFB\u7EDF\u5206\u7EC4\u6210\u591A\u4E2ATCP\u62A5\u6587\uFF0C\u5982\u679C\u63A5\u6536\u65B9\u7684\u7A0B\u5E8F\u4E0D\u77E5\u9053\u6D88\u606F\u8FB9\u754C\uFF0C\u662F\u65E0\u6CD5\u8BFB\u51FA\u4E00\u4E2A\u6709\u6548\u7684\u7528\u6237\u6D88\u606F\u7684\u3002\u5E76\u4E14TCP\u62A5\u6587\u662F\u6709\u5E8F\u7684\uFF0C\u5F53\u524D\u4E00\u4E2ATCP\u62A5\u6587\u6CA1\u6709\u6536\u5230\u7684\u65F6\u5019\uFF0C\u5373\u4F7F\u5B83\u5148\u6536\u5230\u7684\u540E\u9762\u7684TCP\u62A5\u6587\uFF0C\u90A3\u4E48\u4E5F\u4E0D\u80FD\u6254\u7ED9\u5E94\u7528\u5C42\u53BB\u5904\u7406\uFF0C\u540C\u65F6\u5BF9\u91CD\u590D\u7684TCP\u62A5\u6587\u4F1A\u81EA\u52A8\u4E22\u5F03\u3002\n\n\u53EF\u9760\u6027\uFF1A\u65E0\u8BBA\u7F51\u7EDC\u94FE\u8DEF\u4E2D\u51FA\u73B0\u4E86\u600E\u6837\u7684\u53D8\u5316\uFF0CTCP\u90FD\u53EF\u4EE5\u4FDD\u8BC1\u4E00\u4E2A\u62A5\u6587\u4E00\u5B9A\u53EF\u4EE5\u5230\u8FBE\u63A5\u6536\u7AEF\u3002\u901A\u8FC7\u6D41\u91CF\u63A7\u5236\u3001\u8D85\u65F6\u91CD\u4F20\u3001\u62E5\u585E\u63A7\u5236\u7B49\u673A\u5236\u6765\u4FDD\u8BC1\u53EF\u9760\u6027\n</code></pre>\n<p>TCP\u8FDE\u63A5\u7684\u4E09\u6B21\u63E1\u624B\u548C\u56DB\u6B21\u6325\u624B</p>\n<ol>\n<li>\u6700\u5F00\u59CB\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u90FD\u5904\u4E8ECLOSE\u72B6\u6001\uFF0C\u9996\u5148\u670D\u52A1\u5668\u4E3B\u52A8\u76D1\u542C\u67D0\u4E2A\u7AEF\u53E3\uFF0C\u5904\u7406LISTEN\u72B6\u6001</li>\n<li>\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u7AEF\u53D1\u8D77\u8FDE\u63A5\uFF0C\u5E76\u4E14\u628A\u7B2C\u4E00\u4E2ASYN\u62A5\u6587\u53D1\u9001\u7ED9\u670D\u52A1\u7AEF\uFF0C\u4E4B\u540E\u5BA2\u6237\u7AEF\u5904\u4E8ESYN-SEND\u72B6\u6001</li>\n<li>\u670D\u52A1\u7AEF\u6536\u5230\u5BA2\u6237\u7AEF\u7684SYN\u62A5\u6587\uFF0C\u5411\u5BA2\u6237\u7AEF\u53D1\u9001SYN+ACK\u62A5\u6587\uFF0C\u4E4B\u540E\u670D\u52A1\u7AEF\u5904\u4E8ESYN-RCVD\u72B6\u6001</li>\n<li>\u5BA2\u6237\u7AEF\u6536\u5230\u670D\u52A1\u7AEF\u7684\u62A5\u6587\u540E\uFF0C\u8FD8\u8981\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u4E00\u4E2A\u5E94\u7B54\u62A5\u6587ACK\uFF0C\u4E4B\u540E\u5BA2\u6237\u7AEF\u5904\u4E8EESTABLISH\u72B6\u6001</li>\n<li>\u670D\u52A1\u7AEF\u6536\u5230\u5BA2\u6237\u7AEF\u7684\u5E94\u7B54\u62A5\u6587\u4E4B\u540E\uFF0C\u4E5F\u5904\u4E8EESTABLISH\u72B6\u6001</li>\n</ol>\n<p><strong>\u7B2C\u4E09\u6B21\u63E1\u624B\u662F\u53EF\u4EE5\u643A\u5E26\u6570\u636E\u7684\uFF0C\u524D\u4E24\u6B21\u662F\u4E0D\u53EF\u4EE5\u643A\u5E26\u6570\u636E\u7684</strong></p>\n<h4>\u4E3A\u4EC0\u4E48\u662F\u4E09\u6B21\u63E1\u624B\uFF0C\u800C\u4E0D\u662F\u4E24\u6B21\u3001\u56DB\u6B21</h4>\n<pre><code>\u963B\u6B62\u91CD\u590D\u5386\u53F2\u8FDE\u63A5\u7684\u521D\u59CB\u5316\uFF0C\u9632\u6B62\u65E7\u7684\u91CD\u590D\u8FDE\u63A5\u521D\u59CB\u5316\u9020\u6210\u6DF7\u4E71\uFF0C\u5373\u4E3A\u4E86\u9632\u6B62\u5DF2\u7ECF\u5931\u6548\u7684\u8FDE\u63A5\u8BF7\u6C42\u62A5\u6587\u6BB5\u7A81\u7136\u53C8\u4F20\u5230\u670D\u52A1\u7AEF\uFF0C\u4EA7\u751F\u9519\u8BEF\nTCP\u7684\u53EF\u9760\u8FDE\u63A5\u662F\u9760seq\uFF08sequence numbers\u5E8F\u5217\u53F7\uFF09\u6765\u8FBE\u6210\u7684\uFF0C\u901A\u8FC7TCP\u8FDE\u63A5\u53D1\u9001\u7684\u6BCF\u4E00\u4E2A\u5305\uFF0C\u90FD\u6709\u4E00\u4E2Asequence number\uFF0C\u56E0\u4E3A\u6BCF\u4E2A\u5305\u90FD\u8981\u5E8F\u5217\u53F7\u7684\uFF0C\u6240\u4EE5\u90FD\u80FD\u88AB\u786E\u8BA4\u6536\u5230\u8FD9\u4E9B\u5305\uFF0C\u5373\u901A\u4FE1\u53CC\u65B9\u90FD\u8981\u786E\u8BA4\u5BF9\u65B9\u6536\u5230\u4E86\u81EA\u5DF1\u7684\u5E8F\u5217\u53F7\n\n\u540C\u6B65\u53CC\u65B9\u7684\u521D\u59CB\u5E8F\u5217\u53F7\n\u907F\u514D\u6D6A\u8D39\u8D44\u6E90\n</code></pre>\n<h4>\u7B2C\u4E00\u6B21\u63E1\u624B\u4E22\u5931\u4E86\uFF0C\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F</h4>\n<p>\u4F1A\u89E6\u53D1\u300C\u8D85\u65F6\u91CD\u4F20\u300D\u673A\u5236\uFF0C\u91CD\u4F20 SYN \u62A5\u6587\uFF0C\u800C\u4E14\u91CD\u4F20\u7684 SYN \u62A5\u6587\u7684\u5E8F\u5217\u53F7\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u4E0D\u540C\u7248\u672C\u7684\u64CD\u4F5C\u7CFB\u7EDF\u53EF\u80FD\u8D85\u65F6\u65F6\u95F4\u4E0D\u540C\uFF0C\u6709\u76841s\u3001\u6709\u76843s\uFF0C\u8FD9\u4E2A\u65F6\u95F4\u662F\u5199\u6B7B\u5728\u5185\u6838\u91CC\u7684\u3002\u5728Linux\u91CC\uFF0C\u5BA2\u6237\u7AEF\u7684 SYN \u62A5\u6587\u6700\u5927\u91CD\u4F20\u6B21\u6570\u7531 tcp_syn_retries\u5185\u6838\u53C2\u6570\u63A7\u5236\uFF0C\u8FD9\u4E2A\u53C2\u6570\u662F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u7684\uFF0C\u9ED8\u8BA4\u503C\u4E00\u822C\u662F 5\u3002\u901A\u5E38\uFF0C\u7B2C\u4E00\u6B21\u8D85\u65F6\u91CD\u4F20\u662F\u5728 1 \u79D2\u540E\uFF0C\u7B2C\u4E8C\u6B21\u8D85\u65F6\u91CD\u4F20\u662F\u5728 2 \u79D2\uFF0C\u7B2C\u4E09\u6B21\u8D85\u65F6\u91CD\u4F20\u662F\u5728 4 \u79D2\u540E\uFF0C\u7B2C\u56DB\u6B21\u8D85\u65F6\u91CD\u4F20\u662F\u5728 8 \u79D2\u540E\uFF0C\u7B2C\u4E94\u6B21\u662F\u5728\u8D85\u65F6\u91CD\u4F20 16 \u79D2\u540E\u3002\u6CA1\u9519\uFF0C\u6BCF\u6B21\u8D85\u65F6\u7684\u65F6\u95F4\u662F\u4E0A\u4E00\u6B21\u7684 2 \u500D\u3002\u5F53\u7B2C\u4E94\u6B21\u8D85\u65F6\u91CD\u4F20\u540E\uFF0C\u4F1A\u7EE7\u7EED\u7B49\u5F85 32 \u79D2\uFF0C\u5982\u679C\u670D\u52A1\u7AEF\u4ECD\u7136\u6CA1\u6709\u56DE\u5E94 ACK\uFF0C\u5BA2\u6237\u7AEF\u5C31\u4E0D\u518D\u53D1\u9001 SYN \u5305\uFF0C\u7136\u540E\u65AD\u5F00 TCP \u8FDE\u63A5\u3002</p>\n<h4>\u7B2C\u4E8C\u6B21\u63E1\u624B\u4E22\u5931\u4E86\uFF0C\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F</h4>\n<p>\u670D\u52A1\u7AEF\u6536\u5230\u5BA2\u6237\u7AEF\u7B2C\u4E00\u6B21\u63E1\u624B\u540E\uFF0C\u5C31\u4F1A\u56DESYN-ACK\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u8FD9\u5C31\u662F\u7B2C\u4E8C\u6B21\u63E1\u624B\uFF0C\u6B64\u65F6\u670D\u52A1\u7AEF\u5C31\u4F1A\u8FDB\u5165\u5230SYN-RCVD\u72B6\u6001\n\u7B2C\u4E8C\u6B21\u63E1\u624B\u7684SYN-ACK\u6709\u4E24\u4E2A\u4F5C\u7528</p>\n<ul>\n<li>\u7B2C\u4E8C\u6B21\u63E1\u624B\u91CC\u7684ACK\uFF0C\u662F\u5BF9\u7B2C\u4E00\u6B21\u63E1\u624B\u7684\u786E\u8BA4\u62A5\u6587</li>\n<li>\u7B2C\u4E8C\u6B21\u63E1\u624B\u91CC\u7684SYN\uFF0C\u662F\u670D\u52A1\u7AEF\u53D1\u8D77\u5EFA\u7ACBTCP\u8FDE\u63A5\u7684\u62A5\u6587</li>\n</ul>\n<p>\u56E0\u4E3A\u7B2C\u4E8C\u6B21\u63E1\u624B\u62A5\u6587\u91CC\u5305\u542B\u5BF9\u5BA2\u6237\u7AEF\u7B2C\u4E00\u6B21\u63E1\u624B\u7684\u786E\u8BA4ACK\u62A5\u6587\uFF0C\u5982\u679C\u5BA2\u6237\u7AEF\u8FDF\u8FDF\u6536\u4E0D\u5230\u7B2C\u4E8C\u6B21\u63E1\u624B\uFF0C\u90A3\u4E48\u5BA2\u6237\u7AEF\u5C31\u4F1A\u89C9\u5F97\u81EA\u5DF1\u7684SYN\u62A5\u6587\uFF08\u7B2C\u4E00\u6B21\u63E1\u624B\uFF09\u4E22\u5931\u4E86\uFF0C\u4E8E\u662F\u5BA2\u6237\u7AEF\u5C31\u4F1A\u89E6\u53D1\u8D85\u65F6\u91CD\u4F20\u673A\u5236\uFF0C\u91CD\u65B0\u4F20\u8F93SYN\u62A5\u6587\u3002\u6700\u7EC8\u5BA2\u6237\u7AEF\u65AD\u5F00\u8FDE\u63A5</p>\n<p>\u53C8\u56E0\u4E3A\u7B2C\u4E8C\u6B21\u63E1\u624B\u4E2D\u5305\u542B\u670D\u52A1\u7AEFSYN\u62A5\u6587\uFF0C\u5F53\u5BA2\u6237\u7AEF\u6536\u5230\u540E\uFF0C\u9700\u8981\u7ED9\u670D\u52A1\u7AEF\u53D1\u9001ACK\u786E\u8BA4\u62A5\u6587\uFF08\u7B2C\u4E09\u6B21\u63E1\u624B\uFF09\uFF0C\u670D\u52A1\u7AEF\u624D\u4F1A\u8BA4\u4E3A\u8BE5SYN\u62A5\u6587\u88AB\u5BA2\u6237\u7AEF\u6536\u5230\u4E86\uFF0C\u5982\u679C\u7B2C\u4E8C\u6B21\u63E1\u624B\u4E22\u5931\u4E86\uFF0C\u90A3\u4E48\u670D\u52A1\u7AEF\u6536\u4E0D\u5230\u7B2C\u4E09\u6B21\u63E1\u624B\uFF0C\u4E8E\u662F\u670D\u52A1\u7AEF\u8FD9\u8FB9\u4F1A\u89E6\u53D1\u8D85\u65F6\u91CD\u4F20\u673A\u5236\uFF0C\u91CD\u65B0\u4F20\u8F93SYN-ACK\u62A5\u6587\u3002\u6700\u7EC8\u670D\u52A1\u7AEF\u65AD\u5F00\u8FDE\u63A5</p>\n<h4>\u7B2C\u4E09\u6B21\u63E1\u624B\u4E22\u5931\u4E86\uFF0C\u4F1A\u53D1\u751F\u4EC0\u4E48\uFF1F</h4>\n<p>\u7B2C\u4E09\u6B21\u63E1\u624B\u662F\u5BF9\u7B2C\u4E8C\u6B21\u63E1\u624B\u7684SYN\u7684\u786E\u8BA4\u62A5\u6587\uFF0C\u5F53\u7B2C\u4E09\u6B21\u63E1\u624B\u4E22\u5931\u4E86\uFF0C\u670D\u52A1\u7AEF\u8FDF\u8FDF\u6536\u4E0D\u5230\u786E\u8BA4\u62A5\u6587\uFF0C\u5C31\u4F1A\u89E6\u53D1\u8D85\u65F6\u91CD\u4F20\u673A\u5236\uFF0C\u91CD\u65B0\u4F20\u8F93SYN-ACK\u76F4\u5230\u6536\u5230\u7B2C\u4E09\u6B21\u63E1\u624B\u6216\u8005\u8FBE\u5230\u6700\u5927\u91CD\u4F20\u6B21\u6570\u3002ACK\u62A5\u6587\u662F\u4E0D\u4F1A\u6709\u91CD\u4F20\u7684\uFF0C\u5F53ACK\u4E22\u5931\u4E86\uFF0C\u5C31\u6709\u5BF9\u65B9\u91CD\u4F20\u5BF9\u5E94\u7684\u62A5\u6587\u3002</p>\n<h4>SYN\u653B\u51FB</h4>\n<p>\u6211\u4EEC\u90FD\u77E5\u9053 TCP \u8FDE\u63A5\u5EFA\u7ACB\u662F\u9700\u8981\u4E09\u6B21\u63E1\u624B\uFF0C\u5047\u8BBE\u653B\u51FB\u8005\u77ED\u65F6\u95F4\u4F2A\u9020\u4E0D\u540C IP \u5730\u5740\u7684 SYN \u62A5\u6587\uFF0C\u670D\u52A1\u7AEF\u6BCF\u63A5\u6536\u5230\u4E00\u4E2A SYN \u62A5\u6587\uFF0C\u5C31\u8FDB\u5165SYN_RCVD \u72B6\u6001\uFF0C\u4F46\u670D\u52A1\u7AEF\u53D1\u9001\u51FA\u53BB\u7684 ACK + SYN \u62A5\u6587\uFF0C\u65E0\u6CD5\u5F97\u5230\u672A\u77E5 IP \u4E3B\u673A\u7684 ACK \u5E94\u7B54\uFF0C\u4E45\u800C\u4E45\u4E4B\u5C31\u4F1A\u5360\u6EE1\u670D\u52A1\u7AEF\u7684\u534A\u8FDE\u63A5\u961F\u5217\uFF0C\u4F7F\u5F97\u670D\u52A1\u7AEF\u4E0D\u80FD\u4E3A\u6B63\u5E38\u7528\u6237\u670D\u52A1</p>\n<p>UDP\u4E0D\u63D0\u4F9B\u590D\u6742\u7684\u63A7\u5236\u673A\u5236\uFF0C\u5229\u7528IP\u63D0\u4F9B\u9762\u5411\u65E0\u8FDE\u63A5\u7684\u901A\u4FE1\u670D\u52A1</p>\n<h4>TCP\u548CUDP\u7684\u533A\u522B</h4>\n<pre><code>\u8FDE\u63A5\uFF1A TCP\u9762\u5411\u8FDE\u63A5\u7684\u4F20\u8F93\u5C42\u534F\u8BAE\uFF0C\u4F20\u8F93\u6570\u636E\u4E4B\u524D\u5148\u8981\u5EFA\u7ACB\u8FDE\u63A5\u3002UDP\u4E0D\u9700\u8981\u8FDE\u63A5\uFF0C\u5373\u523B\u4F20\u8F93\u6570\u636E\n\n\u670D\u52A1\u5BF9\u8C61\uFF1ATCP\u63D0\u4F9B\u4E00\u5BF9\u4E00\u7684\u4E24\u70B9\u670D\u52A1\u3002UDP\u652F\u6301\u4E00\u5BF9\u4E00\u3001\u4E00\u5BF9\u591A\u3001\u591A\u5BF9\u591A\u7684\u4EA4\u4E92\u901A\u4FE1\u3002\n\n\u53EF\u9760\u6027\uFF1ATCP\u662F\u53EF\u9760\u4EA4\u4ED8\u6570\u636E\u7684\uFF0C\u6570\u636E\u53EF\u4EE5\u65E0\u5DEE\u9519\u3001\u4E0D\u4E22\u5931\u3001\u4E0D\u91CD\u590D\u3001\u6309\u5E8F\u5230\u8FBE\u3002UDP\u5C3D\u6700\u5927\u52AA\u529B\u4EA4\u4ED8\uFF0C\u4E0D\u4FDD\u8BC1\u53EF\u9760\u4EA4\u4ED8\u6570\u636E\uFF0C\u4F46\u53EF\u4EE5\u57FA\u4E8EUDP\u4F20\u8F93\u534F\u8BAE\u5B9E\u73B0\u4E00\u4E2A\u53EF\u9760\u7684\u4F20\u8F93\u534F\u8BAE\uFF0C\u4F8B\u5982QUIC\u534F\u8BAE\n\n\u62E5\u585E\u673A\u5236\u3001\u6D41\u91CF\u63A7\u5236\uFF1ATCP\u6709\u62E5\u585E\u673A\u5236\u548C\u6D41\u91CF\u63A7\u5236\u673A\u5236\uFF0C\u4FDD\u8BC1\u6570\u636E\u4F20\u8F93\u7684\u5B89\u5168\u6027\u3002UDP\u5219\u6CA1\u6709\uFF0C\u5373\u4F7F\u7F51\u7EDC\u975E\u5E38\u62E5\u5835\uFF0C\u4E5F\u4E0D\u4F1A\u5F71\u54CDUDP\u7684\u53D1\u9001\u901F\u7387\n\n\u9996\u90E8\u5F00\u9500\uFF1ATCP\u9996\u90E8\u8F83\u957F\u4F1A\u6709\u4E00\u5B9A\u7684\u5F00\u9500\uFF0C\u6CA1\u6709\u5F00\u542F\u9009\u9879\u65F6\u4E3A20\u4E2A\u5B57\u8282\uFF0C\u5F00\u542F\u4E4B\u540E\u4F1A\u66F4\u957F\u3002UDP\u9996\u90E8\u56FA\u5B9A8\u5B57\u8282\uFF0C\u56FA\u5B9A\u4E0D\u53D8\uFF0C\u5F00\u9500\u8F83\u5C0F\n\n\u4F20\u8F93\u65B9\u5F0F\uFF1ATCP\u662F\u6D41\u5F0F\u4F20\u8F93\uFF0C\u6CA1\u6709\u8FB9\u754C\uFF0C\u4F46\u4FDD\u8BC1\u987A\u5E8F\u548C\u53EF\u9760\u3002UDP\u662F\u4E00\u4E2A\u5305\u4E00\u4E2A\u5305\u7684\u53D1\u9001\uFF0C\u662F\u6709\u8FB9\u754C\u7684\uFF0C\u4F46\u53EF\u80FD\u4E22\u5305\u6216\u4E71\u5E8F\u3002\n\n\u5206\u7247\u4E0D\u540C\uFF1ATCP\u6570\u636E\u5927\u5C0F\u5982\u679C\u5927\u4E8EMSS\u5927\u5C0F\uFF0C\u5219\u4F1A\u5728\u4F20\u8F93\u5C42\u8FDB\u884C\u5206\u7247\uFF0C\u76EE\u6807\u4E3B\u673A\u6536\u5230\u540E\uFF0C\u540C\u6837\u5728\u4F20\u8F93\u5C42\u7EC4\u88C5TCP\u6570\u636E\u5305\uFF0C\u5982\u679C\u4E2D\u9014\u4E22\u5931\u4E00\u4E2A\u5206\u7247\uFF0C\u53EA\u9700\u8981\u4F20\u8F93\u4E22\u5931\u7684\u8FD9\u4E2A\u5206\u7247\u3002UDP\u7684\u5927\u5C0F\u5982\u679C\u5927\u4E8EMTU\u7684\u5927\u5C0F\uFF0C\u5219\u4F1A\u5728IP\u5C42\u8FDB\u884C\u5206\u7247\uFF0C\u76EE\u6807\u4E3B\u673A\u6536\u5230\u540E\uFF0C\u5728IP\u5C42\u7EC4\u88C5\u5B8C\u6570\u636E\uFF0C\u518D\u63A5\u7740\u4F20\u8F93\u7ED9\u4F20\u8F93\u5C42\u3002\n</code></pre>\n<h4>TCP\u548CUDP\u7684\u5E94\u7528\u573A\u666F</h4>\n<pre><code>TCP\uFF1AFTP\u6587\u4EF6\u4F20\u8F93\u3001HTTP/HTTPS\nUDP\uFF1A\u5305\u603B\u91CF\u8F83\u5C11\u7684\u901A\u4FE1\uFF0C\u5982DNS\u3001SNMP\u7B49\u3001\u89C6\u9891\u97F3\u9891\u7B49\u591A\u5A92\u4F53\u901A\u4FE1\u3001\u5E7F\u64AD\u901A\u4FE1\u3002\n</code></pre>\n<h3>\u7F51\u7EDC\u5C42</h3>\n<p>\u7F51\u7EDC\u5C42\u7684\u4F5C\u7528\u5C31\u662F\u5B9E\u73B0\u4E3B\u673A\u548C\u4E3B\u673A\u4E4B\u95F4\u7684\u901A\u4FE1</p>\n<p>IP\u5730\u5740\u662F\u7528\u6765\u8BC6\u522B\u7F51\u7EDC\u4E0A\u7684\u8BBE\u5907\uFF0CIP\u5730\u5740\u662F\u7531\u7F51\u7EDC\u5730\u5740\u4E0E\u4E3B\u673A\u5730\u5740\u4E24\u90E8\u5206\u6240\u7EC4\u6210\u3002\u4F8B\u5982\uFF0C\u5728\u6211\u4EEC\u5BB6\u91CC\u5E38\u7528\u7684\u5730\u5740\uFF1A192.168.1.2\u4E2D\uFF0C192.168.1\u4E3A\u7F51\u7EDC\u5730\u5740\u3002\u4E3B\u673A\u5730\u5740\u4F4D\u4E8EIP\u5730\u5740\u7684\u540E\u6BB5\uFF0C\u7528\u6765\u6807\u8BC6\u5177\u4F53\u8BBE\u5907\u3002\u540C\u4E00\u7F51\u7EDC\u4E0A\u7684\u8BBE\u5907\u90FD\u5177\u6709\u552F\u4E00\u7684IP\u5730\u5740\uFF0C\u53EA\u6709IP\u5730\u5740\u552F\u4E00\u624D\u80FD\u6B63\u5E38\u901A\u4FE1\u3002\u5C31\u62FF\u521A\u624D\u7684\u7535\u8BDD\u53F7\u7801\u6765\u8BF4\uFF0C\u53EA\u6709\u53F7\u7801\u552F\u4E00\u624D\u80FD\u771F\u6B63\u627E\u5230\u4EBA\uFF0C\u5728IP\u5730\u5740192.168.1.2\u4E2D\uFF0C2\u5C31\u662F\u4E3B\u673A\u5730\u5740\u3002</p>\n<p>IP\u5730\u5740\u6309\u7167\u7F51\u7EDC\u7C7B\u578B\u5212\u5206\u4E3A5\u7C7B\uFF1A\u5206\u522B\u662FA\u3001B\u3001C\u3001D\u3001E</p>\n<p>\u5B50\u7F51\u63A9\u7801\u5373\u63A9\u76D6\u6389\u4E3B\u673A\u53F7\uFF0C\u5C06\u5B50\u7F51\u63A9\u7801\u548C IP \u5730\u5740\u6309\u4F4D\u8BA1\u7B97 AND\uFF0C\u5C31\u53EF\u5F97\u5230\u7F51\u7EDC\u53F7\u3002\n\u5B50\u7F51\u63A9\u7801\u9664\u4E86\u5212\u5206\u7F51\u7EDC\u53F7\u548C\u4E3B\u673A\u53F7\uFF0C\u8FD8\u4E00\u4E2A\u4F5C\u7528\u5373\u5212\u5206\u5B50\u7F51</p>\n<h3>\u7F51\u5173\u548C\u8DEF\u7531\u5668</h3>\n<p><a href=\"https://datatracker.ietf.org/doc/html/rfc2616\">rfc\u8349\u6848</a></p>\n<p><a href=\"https://juejin.cn/post/6844903492763533319\">\u7F51\u7EDC\u4E03\u5C42\u6A21\u578B\u4E0E\u56DB\u5C42\u6A21\u578B\u533A\u522B</a></p>\n<p><a href=\"https://xiaolincoding.com/network/\">\u5C0F\u6797coding</a></p>\n"
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
/* harmony import */ var _Comp_0001__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comp如何写一个按钮组件0001 */ "./src/pages/Article/components/ArticleList/Comp如何写一个按钮组件0001.tsx");
/* harmony import */ var _Compthis0002__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Compthis0002 */ "./src/pages/Article/components/ArticleList/Compthis0002.tsx");
/* harmony import */ var _Comp_0003__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Comp事件循环0003 */ "./src/pages/Article/components/ArticleList/Comp事件循环0003.tsx");
/* harmony import */ var _Comp_0004__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Comp作用域0004 */ "./src/pages/Article/components/ArticleList/Comp作用域0004.tsx");
/* harmony import */ var _Comp_0005__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Comp原型链0005 */ "./src/pages/Article/components/ArticleList/Comp原型链0005.tsx");
/* harmony import */ var _CompDNS_CDN0006__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CompDNS和CDN0006 */ "./src/pages/Article/components/ArticleList/CompDNS和CDN0006.tsx");
/* harmony import */ var _CompHTTP_0007__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CompHTTP网络的发展0007 */ "./src/pages/Article/components/ArticleList/CompHTTP网络的发展0007.tsx");
/* harmony import */ var _Comp_0008__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Comp网络模型0008 */ "./src/pages/Article/components/ArticleList/Comp网络模型0008.tsx");









var CompMap = {
  '0001': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Comp_0001__WEBPACK_IMPORTED_MODULE_1__["default"], null),
  '0002': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Compthis0002__WEBPACK_IMPORTED_MODULE_2__["default"], null),
  '0003': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Comp_0003__WEBPACK_IMPORTED_MODULE_3__["default"], null),
  '0004': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Comp_0004__WEBPACK_IMPORTED_MODULE_4__["default"], null),
  '0005': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Comp_0005__WEBPACK_IMPORTED_MODULE_5__["default"], null),
  '0006': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CompDNS_CDN0006__WEBPACK_IMPORTED_MODULE_6__["default"], null),
  '0007': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CompHTTP_0007__WEBPACK_IMPORTED_MODULE_7__["default"], null),
  '0008': /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Comp_0008__WEBPACK_IMPORTED_MODULE_8__["default"], null)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var id = location.search.split('=')[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, CompMap[id]);
});

/***/ }),

/***/ "./src/pages/Article/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/Article/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_ArticleList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ArticleList */ "./src/pages/Article/components/ArticleList/index.tsx");
/* harmony import */ var _common_PageWithHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/PageWithHeader */ "./src/common/PageWithHeader/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils */ "./src/utils/index.ts");
/* harmony import */ var _index_module_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.less */ "./src/pages/Article/index.module.less");







function Article() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_common_PageWithHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: _utils__WEBPACK_IMPORTED_MODULE_4__.PageType.Article
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: _index_module_less__WEBPACK_IMPORTED_MODULE_5__["default"].article
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ArticleList__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}

react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Article, null), document.querySelector('#root'));

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_classnames_index_js-node_modules_css-loader_dist_runtime_api_js-node_mod-02448e","vendors-node_modules_highlight_js_styles_xcode_css-node_modules_highlight_js_lib_index_js","src_common_Header_index_tsx-src_common_PageContainer_index_tsx"], () => (__webpack_require__("./src/pages/Article/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map