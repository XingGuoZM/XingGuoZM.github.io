/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.tsx");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");




(0,_utils__WEBPACK_IMPORTED_MODULE_3__.viewport)();
function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "app"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/***/ }),

/***/ "./src/components/Card/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Card/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/components/Card/index.css");


function Card(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-wrap"
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, children));
}

/***/ }),

/***/ "./src/components/CompanyInfo/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/CompanyInfo/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CompanyInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/components/CompanyInfo/index.css");




function CompanyInfo(props) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var swp = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.swiper', {
      loop: true,
      speed: 500,
      autoPlay: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
    return function () {
      swp.destroy();
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "swiper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "swiper-wrapper"
  }, props.company.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "swiper-slide",
      key: item.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "companyCell"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, item.value)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "swiper-pagination"
  }));
}

/***/ }),

/***/ "./src/components/Experience/ExperienceNode/index.tsx":
/*!************************************************************!*\
  !*** ./src/components/Experience/ExperienceNode/index.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pending)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/components/Experience/ExperienceNode/index.css");


function Pending(props) {
  var time = props.time,
      name = props.name,
      job = props.job;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pendingStep"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pendingStepDot"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pendingStepImage"
  }, time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pendingStepDesc"
  }, name), job && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pendingStepJob"
  }, job));
}

/***/ }),

/***/ "./src/components/Experience/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/Experience/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Experience)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _hooks_useProgressStage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useProgressStage */ "./src/hooks/useProgressStage.ts");
/* harmony import */ var _components_Progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Progress */ "./src/components/Progress/index.tsx");
/* harmony import */ var _hooks_useElementScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useElementScroll */ "./src/hooks/useElementScroll.ts");
/* harmony import */ var _ExperienceNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExperienceNode */ "./src/components/Experience/ExperienceNode/index.tsx");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./src/components/Experience/index.css");






var data = {
  amount: "300",
  stageList: [{
    id: "1",
    time: "2014.9",
    name: '江西财经大学 | 软件工程',
    status: "-1",
    threshold: "100"
  }, {
    id: "2",
    time: "2018.6",
    name: '上海中电电子系统科技股份有限公司',
    job: 'web前端开发工程师',
    status: "-1",
    threshold: "200"
  }, {
    id: "3",
    time: "2019.5",
    name: '武汉佰钧成信息技术有限公司',
    job: '前端开发工程师',
    status: "-1",
    threshold: "300"
  }, {
    id: '4',
    time: '2023.4',
    threshold: '400'
  }]
};
var stageList = data.stageList; // 节点间距

var range = new Array(stageList.length).fill(5); // 节点间进度条粗细

var stroke = new Array(stageList.length).fill(0.1); // 计算滚动距离

var targetId = "4";
var targetIndex = stageList.findIndex(function (item) {
  return item.id === targetId;
});
var left = range.slice(0, targetIndex + 1).reduce(function (pre, cur) {
  return pre + cur;
});
function Experience() {
  var scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useStageProgress = (0,_hooks_useProgressStage__WEBPACK_IMPORTED_MODULE_1__["default"])(data),
      percentList = _useStageProgress.percentList;

  var onComplete = function onComplete() {
    console.log("step progress scroll completed");
  };

  (0,_hooks_useElementScroll__WEBPACK_IMPORTED_MODULE_3__["default"])({
    scrollRef: scrollRef,
    left: left,
    onComplete: onComplete
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "experienceListWrap",
    ref: scrollRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "experienceList"
  }, stageList.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "experienceWrap",
      key: item.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Progress__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "experienceBar",
      barClassName: "experienceBarInner",
      total: "".concat(range[index], "rem"),
      percent: percentList[index],
      strokeWidth: "".concat(stroke[index], "rem")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ExperienceNode__WEBPACK_IMPORTED_MODULE_4__["default"], item));
  })));
}

/***/ }),

/***/ "./src/components/Footer/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/components/Footer/index.css");


function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "footer"
  }, "\u611F\u8C22\u4F60\u82B1\u65F6\u95F4\u9605\u8BFB\u6211\u7684\u7B80\u5386\uFF0C\u671F\u5F85\u80FD\u6709\u673A\u4F1A\u4E0E\u4F60\u5171\u4E8B\u3002");
}

/***/ }),

/***/ "./src/components/PageHeader/Content.jsx":
/*!***********************************************!*\
  !*** ./src/components/PageHeader/Content.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/components/PageHeader/index.css");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function HeaderContent(_ref) {
  var _classnames;

  var children = _ref.children;
  var statusBarHeight = _utils__WEBPACK_IMPORTED_MODULE_2__.navbarHeight.statusBarHeight,
      navBarHeight = _utils__WEBPACK_IMPORTED_MODULE_2__.navbarHeight.navBarHeight;
  var headerNormalHeight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return statusBarHeight + navBarHeight;
  }, [navBarHeight, statusBarHeight]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_classnames = {}, _defineProperty(_classnames, "page-header-content-wrap", true), _defineProperty(_classnames, "page-header-fixed", true), _classnames)),
    style: {
      height: "".concat((0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRpx2px)(headerNormalHeight), "px")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: ["page-header-content"]
  }, children));
}

/***/ }),

/***/ "./src/components/PageHeader/HeaderBg.jsx":
/*!************************************************!*\
  !*** ./src/components/PageHeader/HeaderBg.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderBg)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/components/PageHeader/index.css");
/* harmony import */ var _hooks_useEventListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useEventListener */ "./src/hooks/useEventListener.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var backgroundColor = "#fff";
function HeaderBg(_ref) {
  var scroller = _ref.scroller;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      fullFixed = _useState2[0],
      setFullFixed = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      opacity = _useState4[0],
      setOpacity = _useState4[1];

  var statusBarHeight = _utils__WEBPACK_IMPORTED_MODULE_2__.navbarHeight.statusBarHeight,
      navBarHeight = _utils__WEBPACK_IMPORTED_MODULE_2__.navbarHeight.navBarHeight;
  var headerNormalHeight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return statusBarHeight + navBarHeight;
  }, [navBarHeight, statusBarHeight]);
  (0,_hooks_useEventListener__WEBPACK_IMPORTED_MODULE_4__["default"])("scroll", function () {
    var scrollTop = scroller.current.scrollTop || document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop / 50 >= 1) {
      setOpacity(1);
      setFullFixed(true);
    } else {
      setOpacity(scrollTop / 50);
      setFullFixed(false);
    }
  }, scroller);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("page-header-bg", "page-header-fixed"),
    style: {
      height: "".concat((0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRpx2px)(headerNormalHeight), "px"),
      backgroundColor: backgroundColor,
      opacity: opacity
    }
  });
}

/***/ }),

/***/ "./src/components/PageHeader/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/PageHeader/index.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _HeaderBg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderBg */ "./src/components/PageHeader/HeaderBg.jsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content */ "./src/components/PageHeader/Content.jsx");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/components/PageHeader/index.css");




function PageHeader(_ref) {
  var children = _ref.children,
      scroller = _ref.scroller;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "page-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_HeaderBg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    scroller: scroller
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Content__WEBPACK_IMPORTED_MODULE_2__["default"], null, children));
}

/***/ }),

/***/ "./src/components/Progress/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Progress/index.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useProgressBehavior__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useProgressBehavior */ "./src/hooks/useProgressBehavior.ts");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./src/components/Progress/index.css");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function Progress(props) {
  var children = props.children,
      className = props.className,
      barClassName = props.barClassName;
  var bar = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var _useProgressBehavior = (0,_hooks_useProgressBehavior__WEBPACK_IMPORTED_MODULE_2__["default"])(_objectSpread(_objectSpread({}, props), {}, {
    target: bar.current
  })),
      barStyle = _useProgressBehavior.barStyle,
      style = _useProgressBehavior.style;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("progress", className),
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("progress-bar", barClassName),
    ref: bar,
    style: barStyle
  }), children);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Progress);

/***/ }),

/***/ "./src/components/ProjectInfo/ProjectNode/index.tsx":
/*!**********************************************************!*\
  !*** ./src/components/ProjectInfo/ProjectNode/index.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectNode)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./src/components/ProjectInfo/ProjectNode/index.css");


function ProjectNode(_ref) {
  var projectName = _ref.projectName,
      projectTime = _ref.projectTime,
      projectRole = _ref.projectRole,
      desc = _ref.desc,
      resultList = _ref.resultList;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "done"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "doneIcon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "doneContent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "doneTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "projectName"
  }, projectName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "projectTime"
  }, projectTime, "\uFF5C", projectRole)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "doneDesc"
  }, desc), resultList === null || resultList === void 0 ? void 0 : resultList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "doneResult",
      key: item
    }, item);
  })));
}

/***/ }),

/***/ "./src/components/ProjectInfo/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/ProjectInfo/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Progress */ "./src/components/Progress/index.tsx");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant */ "./src/constant/index.ts");
/* harmony import */ var _ProjectNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectNode */ "./src/components/ProjectInfo/ProjectNode/index.tsx");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/components/ProjectInfo/index.css");





function ProjectInfo(_ref) {
  var project = _ref.project;
  var scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var strokeList = new Array(project.length).fill("10px");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "projectInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: scrollRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "projectList"
  }, project.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "projectItemWrap",
      key: item.projectName
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Progress__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "projectItemBar",
      barClassName: "projectItemBarInner",
      direction: _constant__WEBPACK_IMPORTED_MODULE_2__.DirectionEnum.Column,
      percent: 100,
      strokeWidth: strokeList[index]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "projectItem"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProjectNode__WEBPACK_IMPORTED_MODULE_3__["default"], item)));
  }))));
}

/***/ }),

/***/ "./src/components/UserInfo/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/UserInfo/index.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Card */ "./src/components/Card/index.tsx");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/components/UserInfo/index.css");



function UserInfo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "user-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "user-item-wrap"
  }, props.user.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-item",
      key: item.label
    }, item.label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-label"
    }, item.label, "\uFF1A"), item.href ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: item.href
    }, item.value) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "user-value"
    }, item.value));
  }))));
}

/***/ }),

/***/ "./src/constant/index.ts":
/*!*******************************!*\
  !*** ./src/constant/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusEnum": () => (/* binding */ StatusEnum),
/* harmony export */   "DirectionEnum": () => (/* binding */ DirectionEnum)
/* harmony export */ });
var StatusEnum;

(function (StatusEnum) {
  StatusEnum["Pending"] = "1";
  StatusEnum["Active"] = "0";
  StatusEnum["Done"] = "-1";
  StatusEnum["Error"] = "";
})(StatusEnum || (StatusEnum = {}));

var DirectionEnum;

(function (DirectionEnum) {
  DirectionEnum["Row"] = "row";
  DirectionEnum["Column"] = "column";
})(DirectionEnum || (DirectionEnum = {}));

/***/ }),

/***/ "./src/data/index.ts":
/*!***************************!*\
  !*** ./src/data/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data)
/* harmony export */ });
var data = {
  headTitle: '个人简历',
  user: [{
    label: '基本信息',
    value: '李志铭 | 1995 | 男'
  }, // { label: '学校专业', value: '江⻄财经⼤学/软件工程/本科/2014-2018' },
  {
    label: '联系方式',
    value: '18969176324'
  }, // { label: '擅长技能', value: '性能优化、react、移动端h5、webpack' },
  {
    label: '工作意向',
    value: '高级前端开发工程师/深圳'
  } // { label: '', value: 'github', href: 'https://github.com' },
  ],
  expert: [{
    value: '性能优化'
  }, {
    value: 'React'
  }, {
    value: 'hybrid h5'
  }, {
    value: 'webpack'
  }],
  company: [{
    name: '武汉佰钧成技术有限责任公司',
    addr: '杭州',
    time: '2019.6~2023.3.31',
    job: '前端开发',
    work: 'use React develop hybrid h5 page'
  }, {
    name: '上海中电电⼦科技股份有限公司',
    addr: '杭州',
    time: '2018.6~2019.6',
    job: 'web前端开发',
    work: '使用vue2开发pc后台管理系统'
  }],
  project: [{
    projectName: '淘特三⽅流量商品承接⻚',
    projectTime: '2023.2～2023.3',
    projectRole: '前端负责⼈',
    desc: "该项⽬是⼀个为了承接抖⾳等端外第三⽅流量⽽存在的落地⻚。原⻚⾯由于⽩屏时间过⻓、交互卡 顿、代码逻辑混乱且实现不规范，经常出现不知名错误且定位困难，直接导致三⽅过来的流量难以承 接住，转化率低造成不必要的损失。 为此我和另外⼀名前端负责针对该⼤流量（上线之后五百多万uv）且低端安卓机⽤户数量庞⼤（约占 70%）的场景进⾏⻚⾯优化重构，开发历时2周。该⻚⾯由三个模块组成（红包权益模块+推荐商品模 块+tab商品⻓列表），我主要负责红包权益和tab商品瀑布流模块的开发并且全程跟进项⽬，进度管 理，参与从需求评审到新⻚⾯上线之后平稳运⾏的全过程。前端技术栈：react+typescript 主要解决了完成红包的状态管理，瀑布流⽆限滚动列表优化，优化⻚⾯性能保证⻚⾯帧率⼤于30fps、 安卓⾸屏加载速度⼩于1s、图⽚/动画/请求接⼝/包体积的优化，⻚⾯模块的容灾容错处理。 数据指标: ",
    resultList: ["• 数据获取时间从450ms减少⾄230ms,提升50%左右 ", "• ⾸屏数据渲染时间由原来186ms减少⾄现在29ms，提升80%左右 ", "• 包体积由原来391kb减少⾄现在184kb,缩减52%左右 ", "• 前端投⼊20⼈/⽇，bug总量5条，Bug Reopen率0，平均关闭时⻓0.29天"]
  }, {
    projectName: '淘特游戏⼤厅',
    projectTime: '2021.6～2022.12',
    projectRole: '前端核⼼开发',
    desc: '该项⽬主要做各个游戏场的收⼝和分发，旨在提⾼⽤户停留时⻓和下单率。通过迭代⼀系列活动玩法 提⾼留存。游戏⼤厅主要通过玩游戏获取时⻓来赚取星星，可以在星星兑换⻚⾯⽤星星兑换游戏道具 或者购物红包来提⾼游戏时⻓或者下单等。 全程参与项⽬的需求评审、设计交互评审、设计前端技术⽅案、技术⽅案实现评审（包括公司现有⽅ 案的调研）、测试⽤例评审、编写符合规范的前端代码、bug⽇清、项⽬上线后系统稳定性的保障（性 能及报错等）。项⽬第⼀期有4个⻚⾯开发，包含游戏⾸⻚、星星兑换⻚、抽奖⻚⾯、排⾏榜⻚，我负 责⾸⻚（其中⼀个⻚⾯）全部需求的实现及维护，后续迭代⽀持其他⻚⾯的开发。采⽤技术栈为： react、typescript、lottie、swiper 根据设计稿还原出前端⻚⾯，完成了活动主题氛围的换肤、加载和交互的性能优化、图⽚优化、渲染 优化等，游戏⻓列表下滚动跟随的视频单实例播放管理，命令式的弹窗队列组件，游戏时⻓的统计上 报脚本，模块楼层管理、渲染及配置。 数据指标',
    resultList: ['• 前端可交互时间(tti)从1.5s降到1.1s ', '• 主js体积压缩之后409kb,主css70kb ', '• 项⽬第⼀期前端投⼊113⼈/⽇（前端开发4⼈，后续迭代前端2⼈）']
  }, {
    projectName: '淘特游戏时⻓统计脚本',
    projectTime: '2022.7～2022.8',
    projectRole: '前端核心开发',
    desc: '该项⽬专为游戏⼤厅及各个游戏⻓提供⽤户游戏时⻓的统计服务以及游戏⼤厅流量去向的追踪。 参与 了需求评审、现有⽅案调研、技术⽅案设计、代码的编写实现、测试bug修复等⼯作，开发过程中主要 解决了统计数据准确性（采集和处理）、防作弊和安全性、与宿主⻚ ⾯（⾃研游戏和三⽅接⼊游戏） 相隔离、异常处理、配置能⼒、后续复⽤扩展与维护（如⽀持ui渲染）等问题。 上线后保持平稳的运 ⾏，为游戏⼤厅提供稳定的时⻓统计服务。技术栈：preact、js',
    status: "-1",
    threshold: "300"
  }, {
    projectName: '智慧园区后台管理系统',
    projectTime: '2018.5～2019.5',
    projectRole: '前端负责⼈',
    desc: '该项⽬为⽅便⾼效的对园区消防、空调、电梯及⻔禁、硬件设备等管理维护和控制以及相关数据采集 并且可⼤屏可视化进⾏展示。 参与系统的需求评审，根据设计稿给出可⾏的技术⽅案进⾏编码实现， 完成了⽤户⻆⾊权限管理、报警管理、数据报表、楼层电梯管理、设备远程控制，⼤屏实时数据展 示，⻚⾯⽂案的国际化处理等功能。前端采取技术栈：vue+vuex+element-ui 沉淀出⼀套基于 element-ui进⾏⼆次封装的适⽤于公司内部适⽤的公⽤业务组件，树表、树形选择器、树形菜单导航、 基础表格、表单、表单表格等。封装过可拖拽的⾃定义指令，并在团队内部使⽤。'
  }]
};

/***/ }),

/***/ "./src/hooks/useElementScroll.ts":
/*!***************************************!*\
  !*** ./src/hooks/useElementScroll.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useElementScroll)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


// 滚动函数
function scrollTo(_ref) {
  var element = _ref.element,
      top = _ref.top,
      left = _ref.left,
      behavior = _ref.behavior,
      onComplete = _ref.onComplete;
  var xFixedOffset = left ? left.toFixed(2) : 0;
  var yFixedOffset = top ? top.toFixed(2) : 0;

  var onScroll = function onScroll() {
    if (Number(element.scrollLeft.toFixed(2)) === Number(xFixedOffset) || Number(element.scrollTop.toFixed(2)) === Number(yFixedOffset)) {
      element.removeEventListener("scroll", onScroll);
      onComplete && onComplete();
    }
  };

  element.addEventListener("scroll", onScroll);
  onScroll();
  element.scrollTo({
    left: left,
    top: top,
    behavior: behavior
  });
}

function useElementScroll(_ref2) {
  var scrollRef = _ref2.scrollRef,
      left = _ref2.left,
      top = _ref2.top,
      onComplete = _ref2.onComplete;
  // 滚动至目标距离
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var element = scrollRef.current;

    if (element) {
      var scrollTotal = left ? element.offsetWidth : element.offsetHeight;
      scrollTo({
        element: element,
        left: left && left - scrollTotal / 2,
        // 滚动至可视区域中间,水平滚
        // left,
        top: top && top - scrollTotal / 2,
        // 滚动至可视区域中间，垂直滚
        // top,
        behavior: "smooth",
        onComplete: onComplete
      });
    }
  }, [scrollRef.current, left, top]);
}

/***/ }),

/***/ "./src/hooks/useEventListener.ts":
/*!***************************************!*\
  !*** ./src/hooks/useEventListener.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils_getTargetElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getTargetElement */ "./src/utils/getTargetElement.js");



var useEventListener = function useEventListener(eventName, handler) {
  var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var savedHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var capture = options.capture,
      passive = options.passive,
      once = options.once;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    savedHandler.current = handler;
  }, [handler]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // 需要使用的时候获取ref里的dom值
    var targetElement = (0,_utils_getTargetElement__WEBPACK_IMPORTED_MODULE_1__.getTargetElement)(element.current, window);
    if (!(targetElement !== null && targetElement !== void 0 && targetElement.addEventListener)) return;
    var opts = {
      capture: capture,
      passive: passive,
      once: once
    };

    var eventListener = function eventListener(event) {
      return savedHandler === null || savedHandler === void 0 ? void 0 : savedHandler.current(event);
    };

    targetElement.addEventListener(eventName, eventListener, opts);
    return function () {
      return targetElement.removeEventListener(eventName, eventListener, opts);
    };
  }, [eventName, capture, once, passive], element);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEventListener);

/***/ }),

/***/ "./src/hooks/useProgressBehavior.ts":
/*!******************************************!*\
  !*** ./src/hooks/useProgressBehavior.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useProgressBehavior)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./src/constant/index.ts");


function useProgressBehavior(props) {
  var target = props.target,
      total = props.total,
      _props$strokeWidth = props.strokeWidth,
      strokeWidth = _props$strokeWidth === void 0 ? "100%" : _props$strokeWidth,
      percent = props.percent,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? _constant__WEBPACK_IMPORTED_MODULE_1__.DirectionEnum.Row : _props$direction,
      onChange = props.onChange;
  var barPercent = percent >= 100 ? "0" : "".concat(percent - 100, "%");
  var transition = "transform 0.2s ease";
  var isHorizontal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return direction === _constant__WEBPACK_IMPORTED_MODULE_1__.DirectionEnum.Row;
  }, [direction]);
  var barStyle = {
    transform: isHorizontal ? "translateX(".concat(barPercent, ")") : "translateY(".concat(barPercent, ")"),
    transition: transition
  };
  var style = {
    width: isHorizontal ? total : strokeWidth,
    height: isHorizontal ? strokeWidth : total
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var handleChange = function handleChange() {
      return onChange && onChange(percent);
    };

    target && target.addEventListener("webkitTransitionEnd", handleChange, false);
    return function () {
      target && target.removeEventListener("webkitTransitionEnd", handleChange, false);
    };
  }, [percent]);
  return {
    barStyle: barStyle,
    style: style
  };
}

/***/ }),

/***/ "./src/hooks/useProgressStage.ts":
/*!***************************************!*\
  !*** ./src/hooks/useProgressStage.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useProgressStage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "./src/constant/index.ts");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function useProgressStage(props) {
  var stageList = props.stageList,
      amount = props.amount; // 数据转换：对象数组 -> 区间二维数组

  var format2Matrix = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (list) {
    var prev = {
      id: "",
      text: "",
      status: "",
      threshold: "",
      index: -1
    };
    return list.map(function (item, index) {
      var matrixItem = [prev, item];
      prev = _objectSpread(_objectSpread({}, item), {}, {
        index: index
      });
      return matrixItem;
    });
  }, []); // 获取当前进度所在区间

  var current = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var target = new Array();
    var curr = Number(amount);
    var matrix = format2Matrix(stageList);

    var _iterator = _createForOfIteratorHelper(matrix),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        var low = Number(item[0].threshold || 0);
        var up = Number(item[1].threshold);

        if (curr >= low && curr < up) {
          target = [item[0], item[1]];
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return target;
  }, [stageList, format2Matrix, amount]); // 获取激活的节点列表

  var activeList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return stageList.filter(function (item) {
      return item.status === _constant__WEBPACK_IMPORTED_MODULE_1__.StatusEnum.Active;
    });
  }, [stageList]); // 各个区间进度百分比

  var percentList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    var matrix = format2Matrix(stageList);
    var curr = Number(amount);
    var percent = new Array();

    var _iterator2 = _createForOfIteratorHelper(matrix),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var item = _step2.value;
        var low = Number(item[0].threshold || 0);
        var up = Number(item[1].threshold);
        var per = (curr - low) / (up - low);

        if (per >= 1) {
          percent.push(100);
        } else if (per <= 0) {
          percent.push(0);
        } else {
          percent.push(Number(per.toFixed(3)) * 100);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return percent;
  }, [stageList, format2Matrix, amount]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {}, []);
  return {
    format2Matrix: format2Matrix,
    current: current,
    activeList: activeList,
    percentList: percentList
  };
}

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.tsx");



react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.querySelector('#root'));

/***/ }),

/***/ "./src/pages/Home.tsx":
/*!****************************!*\
  !*** ./src/pages/Home.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PageHeader */ "./src/components/PageHeader/index.jsx");
/* harmony import */ var _components_UserInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UserInfo */ "./src/components/UserInfo/index.tsx");
/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Experience */ "./src/components/Experience/index.tsx");
/* harmony import */ var _components_CompanyInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CompanyInfo */ "./src/components/CompanyInfo/index.tsx");
/* harmony import */ var _components_ProjectInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProjectInfo */ "./src/components/ProjectInfo/index.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer/index.tsx");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data */ "./src/data/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Home.css */ "./src/pages/Home.css");










function Home() {
  var scroller = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var statusBarHeight = _utils__WEBPACK_IMPORTED_MODULE_8__.navbarHeight.statusBarHeight,
      navBarHeight = _utils__WEBPACK_IMPORTED_MODULE_8__.navbarHeight.navBarHeight;
  var headerNormalHeight = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return statusBarHeight + navBarHeight;
  }, [navBarHeight, statusBarHeight]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "home",
    ref: scroller
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_PageHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    scroller: scroller
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "home-header",
    style: {
      height: "".concat((0,_utils__WEBPACK_IMPORTED_MODULE_8__.getRpx2px)(headerNormalHeight), "px")
    }
  }, _data__WEBPACK_IMPORTED_MODULE_7__.data.headTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginTop: "".concat((0,_utils__WEBPACK_IMPORTED_MODULE_8__.getRpx2px)(headerNormalHeight), "px")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_UserInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    user: _data__WEBPACK_IMPORTED_MODULE_7__.data.user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CompanyInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    company: _data__WEBPACK_IMPORTED_MODULE_7__.data.expert
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Experience__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ProjectInfo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    project: _data__WEBPACK_IMPORTED_MODULE_7__.data.project
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
}

/***/ }),

/***/ "./src/utils/getTargetElement.js":
/*!***************************************!*\
  !*** ./src/utils/getTargetElement.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTargetElement": () => (/* binding */ getTargetElement)
/* harmony export */ });
function getTargetElement(target, defaultElement) {
  if (!target) {
    return defaultElement;
  }

  var targetElement;

  if ('current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }

  return targetElement;
}

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDeviceInfo": () => (/* binding */ getDeviceInfo),
/* harmony export */   "isHair": () => (/* binding */ isHair),
/* harmony export */   "navbarHeight": () => (/* binding */ navbarHeight),
/* harmony export */   "getRpx2px": () => (/* binding */ getRpx2px),
/* harmony export */   "viewport": () => (/* binding */ viewport)
/* harmony export */ });
var getDeviceInfo = function () {
  var _window$navigator;

  var ua = (_window$navigator = window.navigator) === null || _window$navigator === void 0 ? void 0 : _window$navigator.userAgent;
  var isAndroid = /android/i.test(ua);
  var isIos = /iPhone|iPad|iPod|iOS/i.test(ua);
  var matchs = typeof ua === "string" && ua.match(/AliApp\(LT\/([\d.]+)\)/i);
  var appVersion = "";

  if (matchs && matchs[1]) {
    appVersion = matchs[1];
  }

  return {
    isAndroid: isAndroid,
    isIos: isIos,
    appVersion: appVersion
  };
}();
var isHair = function isHair() {
  if (!window.screen) return false;
  var _window$screen = window.screen,
      screenWidth = _window$screen.width,
      screenHeight = _window$screen.height;
  var heightLengths = [812, 896, 844, 926, 693, 852, 932];
  var widthLengths = [375, 414, 390, 428, 320, 393, 430];
  var heightIndex = heightLengths.findIndex(function (h) {
    return h === screenHeight;
  });
  return heightIndex > -1 && widthLengths[heightIndex] === screenWidth;
};
var navbarHeight = function () {
  var isIos = getDeviceInfo.isIos,
      isAndroid = getDeviceInfo.isAndroid;
  var statusBarHeight = 0;
  var navBarHeight = 0;
  var topNavHeight = 1000;
  var scale = 375 / window.screen.width;

  if (isHair()) {
    statusBarHeight = 44 * scale;
    navBarHeight = 44 * scale;
  } else if (isIos) {
    statusBarHeight = 20 * scale;
    navBarHeight = 44 * scale;
    topNavHeight = 956;
  } else {
    statusBarHeight = 0;
    navBarHeight = 96 / 2;
    topNavHeight = 940;
  }

  if (isAndroid) {
    navBarHeight = 86 / 2;

    if (window.navigator.userAgent.indexOf("Windmill") !== -1) {
      statusBarHeight = 44 / 2;

      if (window.screen.height / window.screen.width > 1.95) {
        statusBarHeight = 60 / 2;
      }
    } // 当获取statusbar失败，则设置默认值：25


    statusBarHeight = statusBarHeight || 25;
  }

  return {
    statusBarHeight: statusBarHeight * 2,
    navBarHeight: navBarHeight * 2,
    topNavHeight: topNavHeight
  };
}();
var getRpx2px = function getRpx2px(rpx) {
  return rpx * window.screen.width / 750;
};
function viewport() {
  // flexible的动态计算，兼容了很多场景
  var doc = window.document;
  var docEl = doc.documentElement;
  var metaEl = doc.querySelector('meta[name="viewport"]');
  var flexibleEl = doc.querySelector('meta[name="flexible"]');
  var dpr = 0;
  var scale = 0;
  var tid;

  if (metaEl) {
    console.warn('将根据已有的meta标签来设置缩放比例');
    var match = metaEl.getAttribute('content').match(/initial-scale=([\d.]+)/);

    if (match) {
      scale = parseFloat(match[1]);
      dpr = parseInt("".concat(1 / scale), 10);
    }
  } else if (flexibleEl) {
    var content = flexibleEl.getAttribute('content');

    if (content) {
      var initialDpr = content.match(/initial-dpr=([\d.]+)/);
      var maximumDpr = content.match(/maximum-dpr=([\d.]+)/);

      if (initialDpr) {
        dpr = parseFloat(initialDpr[1]);
        scale = parseFloat((1 / dpr).toFixed(2));
      }

      if (maximumDpr) {
        dpr = parseFloat(maximumDpr[1]);
        scale = parseFloat((1 / dpr).toFixed(2));
      }
    }
  }

  if (!dpr && !scale) {
    var isIPhone = window.navigator.appVersion.match(/iphone/gi);
    var devicePixelRatio = window.devicePixelRatio;

    if (isIPhone) {
      // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
      if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
        dpr = 3;
      } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
        dpr = 2;
      } else {
        dpr = 1;
      }
    } else {
      // 其他设备下，仍旧使用1倍的方案
      dpr = 1;
    }

    scale = 1 / dpr;
  }

  docEl.setAttribute('data-dpr', "".concat(dpr));

  if (!metaEl) {
    metaEl = doc.createElement('meta');
    metaEl.setAttribute('name', 'viewport');
    metaEl.setAttribute('content', "initial-scale=".concat(scale, ", maximum-scale=").concat(scale, ", minimum-scale=").concat(scale, ", user-scalable=no"));

    if (docEl.firstElementChild) {
      docEl.firstElementChild.appendChild(metaEl);
    } else {
      var wrap = doc.createElement('div');
      wrap.appendChild(metaEl);
      doc.write(wrap.innerHTML);
    }
  }

  function refreshRem() {
    var width = docEl.clientWidth || docEl.getBoundingClientRect().width;
    var rem = 100 * (width / 750);
    docEl.style.fontSize = "".concat(rem, "px"); // @ts-ignore

    if (window._customerStore) {
      window._customerStore.globalRem = width / 750;
    }
  } // resize在safari中，收缩屏幕的时候也会触发


  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  window.addEventListener(resizeEvt, function () {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300);
  }, false);
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }
  }, false);
  refreshRem();
}
;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/App.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/App.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n  margin:0;\n  padding:0;\n}\n.app{\n  font-size: 30px;\n}", "",{"version":3,"sources":["webpack://./src/App.css"],"names":[],"mappings":"AAAA;EACE,QAAQ;EACR,SAAS;AACX;AACA;EACE,eAAe;AACjB","sourcesContent":["*{\n  margin:0;\n  padding:0;\n}\n.app{\n  font-size: 30px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Card/index.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Card/index.css ***!
  \*****************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.card-wrap{\n\n}\n.card-title{\n  width: 100%;\n  height: 50;\n  font-size: 42;\n  font-weight: bolder;\n  display:flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.card-content{\n  width:100%;\n  color:#fff;\n}", "",{"version":3,"sources":["webpack://./src/components/Card/index.css"],"names":[],"mappings":";AACA;;AAEA;AACA;EACE,WAAW;EACX,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,2BAA2B;EAC3B,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,UAAU;AACZ","sourcesContent":["\n.card-wrap{\n\n}\n.card-title{\n  width: 100%;\n  height: 50;\n  font-size: 42;\n  font-weight: bolder;\n  display:flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.card-content{\n  width:100%;\n  color:#fff;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/CompanyInfo/index.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/CompanyInfo/index.css ***!
  \************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".swiper {\n  width: 7rem;\n  color:#fff;\n  overflow: hidden;\n  display: flex;\n  margin-top:0.2rem;\n  margin-left:0.25rem;\n  margin-right:0.25rem;\n  border-radius:10px;\n}\n\n.swiper-wrapper {\n  height: 300;\n  display: flex;\n}\n.swiper-slide {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n.companyCell {\n  width:100%;\n  background-color: #3Eb575;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/components/CompanyInfo/index.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,UAAU;EACV,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,aAAa;AACf;AACA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;AACzB;AACA;EACE,UAAU;EACV,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB","sourcesContent":[".swiper {\n  width: 7rem;\n  color:#fff;\n  overflow: hidden;\n  display: flex;\n  margin-top:0.2rem;\n  margin-left:0.25rem;\n  margin-right:0.25rem;\n  border-radius:10px;\n}\n\n.swiper-wrapper {\n  height: 300;\n  display: flex;\n}\n.swiper-slide {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n.companyCell {\n  width:100%;\n  background-color: #3Eb575;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Experience/ExperienceNode/index.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Experience/ExperienceNode/index.css ***!
  \**************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".pendingStep {\n  position: absolute;\n  top: -0.5rem;\n}\n.pendingStepDot{\n  width: 0.5rem;\n  height: 0.5rem;\n  background-color: #3Eb575;\n  color:#fff;\n  font-weight: bolder;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.26rem;\n  border-radius: 50%;\n  margin-top:0.25rem;\n}\n.pendingStepImage {\n  position:absolute;\n  top:-0.1rem;\n  font-weight: bolder;\n}\n.pendingStepText {\n  text-align: center;\n  white-space: nowrap;\n}\n.pendingStepDesc{\n  width:5rem;\n  position:absolute;\n  left:0.25rem;\n  top:100%;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  font-size:0.26rem;\n  font-weight: bolder;\n}\n.pendingStepJob{\n  width:5rem;\n  position:absolute;\n  left:0.25rem;\n  top:-10%;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  font-size:0.26rem;\n  font-weight: bolder;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Experience/ExperienceNode/index.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,YAAY;AACd;AACA;EACE,aAAa;EACb,cAAc;EACd,yBAAyB;EACzB,UAAU;EACV,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,iBAAiB;EACjB,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,iBAAiB;EACjB,YAAY;EACZ,QAAQ;EACR,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,UAAU;EACV,iBAAiB;EACjB,YAAY;EACZ,QAAQ;EACR,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;AACrB","sourcesContent":[".pendingStep {\n  position: absolute;\n  top: -0.5rem;\n}\n.pendingStepDot{\n  width: 0.5rem;\n  height: 0.5rem;\n  background-color: #3Eb575;\n  color:#fff;\n  font-weight: bolder;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.26rem;\n  border-radius: 50%;\n  margin-top:0.25rem;\n}\n.pendingStepImage {\n  position:absolute;\n  top:-0.1rem;\n  font-weight: bolder;\n}\n.pendingStepText {\n  text-align: center;\n  white-space: nowrap;\n}\n.pendingStepDesc{\n  width:5rem;\n  position:absolute;\n  left:0.25rem;\n  top:100%;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  font-size:0.26rem;\n  font-weight: bolder;\n}\n.pendingStepJob{\n  width:5rem;\n  position:absolute;\n  left:0.25rem;\n  top:-10%;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  font-size:0.26rem;\n  font-weight: bolder;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Experience/index.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Experience/index.css ***!
  \***********************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.experienceListWrap {\n  width: 7rem;\n  margin-left:0.25rem;\n  margin-right:0.25rem;\n  overflow-x: scroll;\n}\n.experienceList {\n  width:100%;\n  height:2rem;\n  display: flex;\n  align-items: center;\n}\n.experienceWrap {\n  position: relative;\n}\n.experienceBar {\n  border-radius: 10px;\n  background-color: #ebeef5;\n}\n.experienceBarInner {\n  height: 10px;\n  border-radius: 10px;\n  background-color: #3Eb575;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Experience/index.css"],"names":[],"mappings":";AACA;EACE,WAAW;EACX,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,WAAW;EACX,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,mBAAmB;EACnB,yBAAyB;AAC3B;AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;AAC3B","sourcesContent":["\n.experienceListWrap {\n  width: 7rem;\n  margin-left:0.25rem;\n  margin-right:0.25rem;\n  overflow-x: scroll;\n}\n.experienceList {\n  width:100%;\n  height:2rem;\n  display: flex;\n  align-items: center;\n}\n.experienceWrap {\n  position: relative;\n}\n.experienceBar {\n  border-radius: 10px;\n  background-color: #ebeef5;\n}\n.experienceBarInner {\n  height: 10px;\n  border-radius: 10px;\n  background-color: #3Eb575;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Footer/index.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Footer/index.css ***!
  \*******************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".footer{\n  width:100%;\n  height:1rem;\n  background-color:#3Eb575;\n  color:#fff;\n  font-size:0.22rem;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/components/Footer/index.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,WAAW;EACX,wBAAwB;EACxB,UAAU;EACV,iBAAiB;EACjB,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;AACrB","sourcesContent":[".footer{\n  width:100%;\n  height:1rem;\n  background-color:#3Eb575;\n  color:#fff;\n  font-size:0.22rem;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/PageHeader/index.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/PageHeader/index.css ***!
  \***********************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".page-header {\n  position: relative;\n  width: 100%;\n}\n.page-header-bg {\n  width: 100%;\n  opacity: 0;\n}\n.page-header-fixed {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.page-header-content-wrap {\n  width: 100%;\n}\n.page-header-content {\n  width:100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/components/PageHeader/index.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,WAAW;EACX,UAAU;AACZ;AACA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,UAAU;AACZ;AACA;EACE,WAAW;AACb;AACA;EACE,UAAU;EACV,kBAAkB;EAClB,MAAM;EACN,OAAO;AACT","sourcesContent":[".page-header {\n  position: relative;\n  width: 100%;\n}\n.page-header-bg {\n  width: 100%;\n  opacity: 0;\n}\n.page-header-fixed {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.page-header-content-wrap {\n  width: 100%;\n}\n.page-header-content {\n  width:100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Progress/index.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Progress/index.css ***!
  \*********************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".progress-wrap {\n  width: 100%;\n  height: 100%;\n}\n.progress {\n  background-color: gray;\n  overflow: hidden;\n}\n.progress-bar {\n  width: 100%;\n  height: 100%;\n  background-color: red;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Progress/index.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;AACd;AACA;EACE,sBAAsB;EACtB,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,YAAY;EACZ,qBAAqB;AACvB","sourcesContent":[".progress-wrap {\n  width: 100%;\n  height: 100%;\n}\n.progress {\n  background-color: gray;\n  overflow: hidden;\n}\n.progress-bar {\n  width: 100%;\n  height: 100%;\n  background-color: red;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/ProjectInfo/ProjectNode/index.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/ProjectInfo/ProjectNode/index.css ***!
  \************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".done {\n  display: flex;\n}\n.doneIcon {\n  width: 20;\n  height: 20;\n  background-color: #3Eb575;\n  border-radius: 50%;\n}\n.doneContent {\n  width: 6.4rem;\n  margin-left: 10;\n  margin-top: -10;\n  margin-bottom: 20;\n  padding:20;\n  background-color: #3Eb575;\n  border-radius:10px;\n  color:#fff;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.doneContent::before {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border: 8 solid transparent;\n  border-left-width: 8;\n  border-left-style: solid;\n  border-left-color: #ebeef5;\n  transform: rotateZ(180deg);\n  position: absolute;\n  left: -16;\n  top: 10;\n}\n\n.doneTitle{\n  height:1rem;\n  display:flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.projectName{\n  font-size:0.3rem;\n  font-weight: bolder;\n}\n.projectTime{\n  font-size:0.25rem;\n}\n.doneDesc{\n  display:flex;\n}\n.doneResult{\n  display:flex;\n  flex-direction: row;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ProjectInfo/ProjectNode/index.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf;AACA;EACE,SAAS;EACT,UAAU;EACV,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,UAAU;EACV,yBAAyB;EACzB,kBAAkB;EAClB,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,QAAQ;EACR,SAAS;EACT,2BAA2B;EAC3B,oBAAoB;EACpB,wBAAwB;EACxB,0BAA0B;EAC1B,0BAA0B;EAC1B,kBAAkB;EAClB,SAAS;EACT,OAAO;AACT;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,uBAAuB;AACzB;AACA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,iBAAiB;AACnB;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;EACZ,mBAAmB;AACrB","sourcesContent":[".done {\n  display: flex;\n}\n.doneIcon {\n  width: 20;\n  height: 20;\n  background-color: #3Eb575;\n  border-radius: 50%;\n}\n.doneContent {\n  width: 6.4rem;\n  margin-left: 10;\n  margin-top: -10;\n  margin-bottom: 20;\n  padding:20;\n  background-color: #3Eb575;\n  border-radius:10px;\n  color:#fff;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.doneContent::before {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border: 8 solid transparent;\n  border-left-width: 8;\n  border-left-style: solid;\n  border-left-color: #ebeef5;\n  transform: rotateZ(180deg);\n  position: absolute;\n  left: -16;\n  top: 10;\n}\n\n.doneTitle{\n  height:1rem;\n  display:flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.projectName{\n  font-size:0.3rem;\n  font-weight: bolder;\n}\n.projectTime{\n  font-size:0.25rem;\n}\n.doneDesc{\n  display:flex;\n}\n.doneResult{\n  display:flex;\n  flex-direction: row;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/ProjectInfo/index.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/ProjectInfo/index.css ***!
  \************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".projectInfo {\n  margin-top: 0.4rem;\n  display: flex;\n  align-items: center;\n}\n.projectList {\n  margin-left:0.25rem;\n  margin-right:0.25rem;\n  display: flex;\n  flex-direction: column;\n}\n.projectItemWrap {\n  display: flex;\n}\n.projectItemBar {\n  border-radius: 10;\n  background-color: #ebeef5;\n}\n.projectItemBarInner {\n  border-radius: 0.1rem;\n  background-color: #3Eb575;\n}\n.projectItem {\n  margin-left:-0.14rem;\n  position: relative;\n  display: flex;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ProjectInfo/index.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,oBAAoB;EACpB,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,aAAa;AACf;AACA;EACE,iBAAiB;EACjB,yBAAyB;AAC3B;AACA;EACE,qBAAqB;EACrB,yBAAyB;AAC3B;AACA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,aAAa;AACf","sourcesContent":[".projectInfo {\n  margin-top: 0.4rem;\n  display: flex;\n  align-items: center;\n}\n.projectList {\n  margin-left:0.25rem;\n  margin-right:0.25rem;\n  display: flex;\n  flex-direction: column;\n}\n.projectItemWrap {\n  display: flex;\n}\n.projectItemBar {\n  border-radius: 10;\n  background-color: #ebeef5;\n}\n.projectItemBarInner {\n  border-radius: 0.1rem;\n  background-color: #3Eb575;\n}\n.projectItem {\n  margin-left:-0.14rem;\n  position: relative;\n  display: flex;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/UserInfo/index.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/UserInfo/index.css ***!
  \*********************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".user-wrap{\n  width:7rem;\n  margin-left:0.25rem;\n  margin-right:0.25rem;\n}\n.user-item-wrap {\n  background-color:#3Eb575;\n  border-radius:5px;\n}\n.user-item{\n  height:60;\n  display:flex;\n  align-items: center;\n  font-size:26;\n  margin-left:0.2rem;\n}\n\n.user-label{\n  display:flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.user-value{\n  \n}", "",{"version":3,"sources":["webpack://./src/components/UserInfo/index.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,wBAAwB;EACxB,iBAAiB;AACnB;AACA;EACE,SAAS;EACT,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;AACrB;AACA;;AAEA","sourcesContent":[".user-wrap{\n  width:7rem;\n  margin-left:0.25rem;\n  margin-right:0.25rem;\n}\n.user-item-wrap {\n  background-color:#3Eb575;\n  border-radius:5px;\n}\n.user-item{\n  height:60;\n  display:flex;\n  align-items: center;\n  font-size:26;\n  margin-left:0.2rem;\n}\n\n.user-label{\n  display:flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.user-value{\n  \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/Home.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/Home.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.home{\n  width:100%;\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:scroll;\n}\n.home-header{\n  width:100%;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bolder;\n  font-size: 32;\n  \n}", "",{"version":3,"sources":["webpack://./src/pages/Home.css"],"names":[],"mappings":";AACA;EACE,UAAU;EACV,WAAW;EACX,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,UAAU;EACV,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,aAAa;;AAEf","sourcesContent":["\n.home{\n  width:100%;\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:scroll;\n}\n.home-header{\n  width:100%;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bolder;\n  font-size: 32;\n  \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./src/App.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/Card/index.css":
/*!***************************************!*\
  !*** ./src/components/Card/index.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Card/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/CompanyInfo/index.css":
/*!**********************************************!*\
  !*** ./src/components/CompanyInfo/index.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/CompanyInfo/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/Experience/ExperienceNode/index.css":
/*!************************************************************!*\
  !*** ./src/components/Experience/ExperienceNode/index.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Experience/ExperienceNode/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/Experience/index.css":
/*!*********************************************!*\
  !*** ./src/components/Experience/index.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Experience/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/Footer/index.css":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Footer/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/PageHeader/index.css":
/*!*********************************************!*\
  !*** ./src/components/PageHeader/index.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/PageHeader/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/Progress/index.css":
/*!*******************************************!*\
  !*** ./src/components/Progress/index.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/Progress/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/ProjectInfo/ProjectNode/index.css":
/*!**********************************************************!*\
  !*** ./src/components/ProjectInfo/ProjectNode/index.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/ProjectInfo/ProjectNode/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/ProjectInfo/index.css":
/*!**********************************************!*\
  !*** ./src/components/ProjectInfo/index.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/ProjectInfo/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/UserInfo/index.css":
/*!*******************************************!*\
  !*** ./src/components/UserInfo/index.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/UserInfo/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/pages/Home.css":
/*!****************************!*\
  !*** ./src/pages/Home.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./Home.css */ "./node_modules/css-loader/dist/cjs.js!./src/pages/Home.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Home_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Home_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/******/ 			"app": 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_canvas"] = self["webpackChunkreact_canvas"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-dom_index_js","vendors-node_modules_classnames_index_js-node_modules_swiper_swiper_css-node_modules_swiper_s-addfae"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map