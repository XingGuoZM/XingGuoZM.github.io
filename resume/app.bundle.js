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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");




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

/***/ "./src/components/Experience/ExperienceNode/index.tsx":
/*!************************************************************!*\
  !*** ./src/components/Experience/ExperienceNode/index.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Experience)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./src/components/Experience/ExperienceNode/index.less");


function Experience(props) {
  var time = props.time,
      name = props.name,
      job = props.job;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "experience-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "experience-dot"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "experience-time"
  }, time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "experience-name"
  }, name), job && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "experience-job"
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






function Experience(_ref) {
  var data = _ref.data;
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

/***/ "./src/components/Expert/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Expert/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Expert)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.mjs");
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/pagination */ "./node_modules/swiper/modules/pagination.css");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css */ "./src/components/Expert/index.css");






function Expert(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "expertWrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Pagination],
    pagination: {
      clickable: true
    },
    onSlideChange: function onSlideChange() {
      return console.log('slide change');
    },
    onSwiper: function onSwiper(swiper) {
      return console.log(swiper);
    }
  }, data.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "expert"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "expertCell"
    }, item.icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: "expertIcon",
      src: item.icon
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "expertText"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "expertTitle"
    }, item.title), item.desc && item.desc.map(function (desc) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "expertDesc"
      }, "\u27A3 ", desc);
    })))));
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
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
      situation = _ref.situation,
      task = _ref.task,
      action = _ref.action,
      resultList = _ref.resultList;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "project"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "project-icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "project-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "project-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "project-name"
  }, projectName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "project-time"
  }, projectTime, "\uFF5C", projectRole)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "project-desc"
  }, situation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "project-desc"
  }, task), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "project-desc"
  }, action), resultList === null || resultList === void 0 ? void 0 : resultList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-result",
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
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ "./src/components/ProjectInfo/index.less");
 // import useStageProgress from "../../hooks/useProgressStage";





function ProjectInfo(_ref) {
  var project = _ref.project;
  var scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var strokeList = new Array(project.length).fill("0.1rem");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "project-list-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "project-list",
    ref: scrollRef
  }, project.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-item-wrap",
      key: item.projectName
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Progress__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "project-item-bar",
      barClassName: "project-item-bar-inner",
      direction: _constant__WEBPACK_IMPORTED_MODULE_2__.DirectionEnum.Column,
      percent: 100,
      strokeWidth: strokeList[index]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "project-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProjectNode__WEBPACK_IMPORTED_MODULE_3__["default"], item)));
  })));
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
/* harmony import */ var _assets_react_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/react.svg */ "./src/assets/react.svg");
/* harmony import */ var _assets_webpack_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/webpack.svg */ "./src/assets/webpack.svg");


var data = {
  headTitle: '个人简历',
  user: [{
    label: '基本信息',
    value: '李志铭 | 1995 | 男'
  }, {
    label: '联系方式',
    value: '18969176324'
  }, {
    label: '工作意向',
    value: '高级前端开发工程师 | 深圳'
  } // { label: '', value: 'github', href: 'https://github.com' },
  ],
  expert: [{
    title: '性能优化',
    desc: ['网络瓶颈', 'CUP瓶颈', '渲染瓶颈']
  }, {
    title: 'React',
    icon: _assets_react_svg__WEBPACK_IMPORTED_MODULE_0__["default"]
  }, {
    title: 'hybrid h5'
  }, {
    title: 'webpack',
    icon: _assets_webpack_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
  }],
  experience: {
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
  },
  project: [{
    projectName: '淘特三⽅流量商品承接⻚',
    projectTime: '2023.2～2023.3',
    projectRole: '前端负责⼈',
    situation: '该项⽬是⼀个为了承接抖⾳等端外第三⽅流量⽽存在的落地⻚。原⻚⾯由于⽩屏时间过⻓、交互卡 顿、代码逻辑混乱且实现不规范，经常出现不知名错误且定位困难，直接导致三⽅过来的流量难以承 接住，转化率低造成不必要的损失。',
    task: '为此我和另外⼀名前端负责针对该⼤流量（上线之后五百多万uv）且低端安卓机⽤户数量庞⼤（约占 70%）的场景进⾏⻚⾯优化重构，开发历时2周。该⻚⾯由三个模块组成（红包权益模块+推荐商品模 块+tab商品⻓列表），我主要负责红包权益和tab商品瀑布流模块的开发并且全程跟进项⽬，进度管理，参与从需求评审到新⻚⾯上线之后平稳运⾏的全过程。',
    action: '前端技术栈：react+typescript,主要解决了完成红包的状态管理，瀑布流⽆限滚动列表优化，优化⻚⾯性能保证⻚⾯帧率⼤于30fps、 安卓⾸屏加载速度⼩于1s、图⽚/动画/请求接⼝/包体积的优化，⻚⾯模块的容灾容错处理。 数据指标: ',
    resultList: ["• 数据获取时间从450ms减少⾄230ms,提升50%左右 ", "• ⾸屏数据渲染时间由原来186ms减少⾄现在29ms，提升80%左右 ", "• 包体积由原来391kb减少⾄现在184kb,缩减52%左右 ", "• 前端投⼊20⼈/⽇，bug总量5条，Bug Reopen率0，平均关闭时⻓0.29天"]
  }, {
    projectName: '淘特游戏⼤厅',
    projectTime: '2021.6～2022.12',
    projectRole: '前端核⼼开发',
    situation: '该项⽬主要做各个游戏场的收⼝和分发，旨在提⾼⽤户停留时⻓和下单率。通过迭代⼀系列活动玩法 提⾼留存。游戏⼤厅主要通过玩游戏获取时⻓来赚取星星，可以在星星兑换⻚⾯⽤星星兑换游戏道具 或者购物红包来提⾼游戏时⻓或者下单等。',
    task: '全程参与项⽬的需求评审、设计交互评审、设计前端技术⽅案、技术⽅案实现评审（包括公司现有⽅ 案的调研）、测试⽤例评审、编写符合规范的前端代码、bug⽇清、项⽬上线后系统稳定性的保障（性 能及报错等）。',
    action: '项⽬第⼀期有4个⻚⾯开发，包含游戏⾸⻚、星星兑换⻚、抽奖⻚⾯、排⾏榜⻚，我负 责⾸⻚（其中⼀个⻚⾯）全部需求的实现及维护，后续迭代⽀持其他⻚⾯的开发。采⽤技术栈为： react、typescript、lottie、swiper 根据设计稿还原出前端⻚⾯，完成了活动主题氛围的换肤、加载和交互的性能优化、图⽚优化、渲染 优化等，游戏⻓列表下滚动跟随的视频单实例播放管理，命令式的弹窗队列组件，游戏时⻓的统计上 报脚本，模块楼层管理、渲染及配置。 数据指标',
    resultList: ['• 前端可交互时间(tti)从1.5s降到1.1s ', '• 主js体积压缩之后409kb,主css70kb ', '• 项⽬第⼀期前端投⼊113⼈/⽇（前端开发4⼈，后续迭代前端2⼈）']
  }, {
    projectName: '淘特游戏时⻓统计脚本',
    projectTime: '2022.7～2022.8',
    projectRole: '前端核心开发',
    situation: '该项⽬专为游戏⼤厅及各个游戏⻓提供⽤户游戏时⻓的统计服务以及游戏⼤厅流量去向的追踪。',
    task: '参与了需求评审、现有⽅案调研、技术⽅案设计、代码的编写实现、测试bug修复等⼯作',
    action: '使用的技术栈为preact、js,在开发过程中主要 解决了统计数据准确性（采集和处理）、防作弊和安全性、与宿主⻚ ⾯（⾃研游戏和三⽅接⼊游戏） 相隔离、异常处理、配置能⼒、后续复⽤扩展与维护（如⽀持ui渲染）等问题。',
    resultList: ['• 上线后保持平稳的运⾏，为游戏⼤厅提供稳定的时⻓统计服务。']
  }, {
    projectName: '智慧园区后台管理系统',
    projectTime: '2018.5～2019.5',
    projectRole: '前端负责⼈',
    situation: '该项⽬为⽅便⾼效的对园区消防、空调、电梯及⻔禁、硬件设备等管理维护和控制以及相关数据采集 并且可⼤屏可视化进⾏展示。',
    task: '参与系统的需求评审，根据设计稿给出可⾏的技术⽅案进⾏编码实现',
    action: '前端采用vue+vuex+element-ui技术栈,完成了⽤户⻆⾊权限管理、报警管理、数据报表、楼层电梯管理、设备远程控制，⼤屏实时数据展示，⻚⾯⽂案的国际化处理等功能',
    resultList: ['沉淀出⼀套基于 element-ui进⾏⼆次封装的适⽤于公司内部适⽤的公⽤业务组件，树表、树形选择器、树形菜单导航、 基础表格、表单、表单表格等', '封装过可拖拽的⾃定义指令，并在团队内部使⽤。']
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
/* harmony import */ var _utils_getTargetElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getTargetElement */ "./src/utils/getTargetElement.ts");



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
/* harmony import */ var _components_Expert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Expert */ "./src/components/Expert/index.tsx");
/* harmony import */ var _components_ProjectInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProjectInfo */ "./src/components/ProjectInfo/index.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer/index.tsx");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data */ "./src/data/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Expert__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: _data__WEBPACK_IMPORTED_MODULE_7__.data.expert
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Experience__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: _data__WEBPACK_IMPORTED_MODULE_7__.data.experience
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ProjectInfo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    project: _data__WEBPACK_IMPORTED_MODULE_7__.data.project
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
}

/***/ }),

/***/ "./src/utils/getTargetElement.ts":
/*!***************************************!*\
  !*** ./src/utils/getTargetElement.ts ***!
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

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/App.css":
/*!**************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/App.css ***!
  \**************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n.app {\n  font-size: 30px;\n}\n", "",{"version":3,"sources":["webpack://./src/App.css"],"names":[],"mappings":"AAAA;EACE,SAAA;EACA,UAAA;AACF;AACA;EACE,eAAA;AACF","sourcesContent":["*{\n  margin:0;\n  padding:0;\n}\n.app{\n  font-size: 30px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Card/index.css":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Card/index.css ***!
  \********************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".card-title {\n  width: 100%;\n  height: 50;\n  font-size: 42;\n  font-weight: bolder;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.card-content {\n  width: 100%;\n  color: #fff;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Card/index.css"],"names":[],"mappings":"AAIA;EACE,WAAA;EACA,UAAA;EACA,aAAA;EACA,mBAAA;EACA,aAAA;EACA,2BAAA;EACA,mBAAA;AAHF;AAKA;EACE,WAAA;EACA,WAAA;AAHF","sourcesContent":["\n.card-wrap{\n\n}\n.card-title{\n  width: 100%;\n  height: 50;\n  font-size: 42;\n  font-weight: bolder;\n  display:flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.card-content{\n  width:100%;\n  color:#fff;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Experience/ExperienceNode/index.less":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Experience/ExperienceNode/index.less ***!
  \******************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".experience-wrap {\n  position: absolute;\n  top: -0.5rem;\n}\n.experience-dot {\n  width: 0.5rem;\n  height: 0.5rem;\n  background-color: #3Eb575;\n  color: #fff;\n  font-weight: bolder;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.26rem;\n  border-radius: 50%;\n  margin-top: 0.25rem;\n}\n.experience-time {\n  position: absolute;\n  top: -0.1rem;\n  font-weight: bolder;\n  font-size: 0.26rem;\n}\n.experience-name {\n  width: 5rem;\n  position: absolute;\n  left: 0.25rem;\n  top: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.26rem;\n  font-weight: bolder;\n}\n.experience-job {\n  width: 5rem;\n  position: absolute;\n  left: 0.25rem;\n  top: -10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.26rem;\n  font-weight: bolder;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Experience/ExperienceNode/index.less"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,YAAA;AACF;AACA;EACE,aAAA;EACA,cAAA;EACA,yBAAA;EACA,WAAA;EACA,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;AACF;AACA;EACE,kBAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;AACF;AACA;EACE,WAAA;EACA,kBAAA;EACA,aAAA;EACA,SAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;AACF;AACA;EACE,WAAA;EACA,kBAAA;EACA,aAAA;EACA,SAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;AACF","sourcesContent":[".experience-wrap {\n  position: absolute;\n  top: -0.5rem;\n}\n.experience-dot{\n  width: 0.5rem;\n  height: 0.5rem;\n  background-color: #3Eb575;\n  color:#fff;\n  font-weight: bolder;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.26rem;\n  border-radius: 50%;\n  margin-top:0.25rem;\n}\n.experience-time {\n  position:absolute;\n  top:-0.1rem;\n  font-weight: bolder;\n  font-size:0.26rem;\n}\n.experience-name{\n  width:5rem;\n  position:absolute;\n  left:0.25rem;\n  top:100%;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  font-size:0.26rem;\n  font-weight: bolder;\n}\n.experience-job{\n  width:5rem;\n  position:absolute;\n  left:0.25rem;\n  top:-10%;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  font-size:0.26rem;\n  font-weight: bolder;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Experience/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Experience/index.css ***!
  \**************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".experienceListWrap {\n  width: 7rem;\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  overflow-x: scroll;\n}\n.experienceList {\n  width: 100%;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n}\n.experienceWrap {\n  position: relative;\n}\n.experienceBar {\n  border-radius: 0.01rem;\n  background-color: #ebeef5;\n}\n.experienceBarInner {\n  height: 0.1rem;\n  border-radius: 0.05rem;\n  background-color: #3Eb575;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Experience/index.css"],"names":[],"mappings":"AACA;EACE,WAAA;EACA,oBAAA;EACA,qBAAA;EACA,kBAAA;AAAF;AAEA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;AAAF;AAEA;EACE,kBAAA;AAAF;AAEA;EACE,sBAAA;EACA,yBAAA;AAAF;AAEA;EACE,cAAA;EACA,sBAAA;EACA,yBAAA;AAAF","sourcesContent":["\n.experienceListWrap {\n  width: 7rem;\n  margin-left:0.25rem;\n  margin-right:0.25rem;\n  overflow-x: scroll;\n}\n.experienceList {\n  width:100%;\n  height:2rem;\n  display: flex;\n  align-items: center;\n}\n.experienceWrap {\n  position: relative;\n}\n.experienceBar {\n  border-radius: 0.01rem;\n  background-color: #ebeef5;\n}\n.experienceBarInner {\n  height: 0.1rem;\n  border-radius:0.05rem;\n  background-color: #3Eb575;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Expert/index.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Expert/index.css ***!
  \**********************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".expertWrap {\n  width: 7rem;\n  height: 3rem;\n  margin-top: 0.2rem;\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  display: flex;\n  border-radius: 0.1rem;\n  overflow: hidden;\n}\n.expert {\n  width: 100%;\n  height: 100%;\n  background-color: #3Eb575;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.expertCell {\n  width: 90%;\n  height: 90%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.expertIcon {\n  width: 2rem;\n  height: 2rem;\n}\n.expertText {\n  width: 3rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.expertTitle {\n  height: 0.5rem;\n  font-size: 0.32rem;\n  font-weight: bolder;\n  display: flex;\n  align-items: center;\n}\n.expertDesc {\n  height: 0.5rem;\n  font-size: 0.25rem;\n  display: flex;\n  align-items: center;\n}\n.swiper {\n  z-index: auto;\n}\n.swiper-wrapper {\n  z-index: auto;\n}\n.expertWrap > .swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-horizontal > .swiper-pagination-bullets,\n.swiper-pagination-bullets.swiper-pagination-horizontal {\n  bottom: 0.2rem;\n  left: 0;\n  width: 100%;\n}\n.swiper-pagination-bullet {\n  width: 0.2rem;\n  height: 0.06rem;\n  border-radius: 0.1rem;\n  background-color: rgba(0, 0, 0, 0.6);\n  margin-left: 0.03rem;\n  margin-right: 0.03rem;\n}\n.swiper-pagination-bullet-active {\n  width: 0.4rem;\n  height: 0.06rem;\n  border-radius: 0.1rem;\n  background-color: #ebeef5;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Expert/index.css"],"names":[],"mappings":"AACA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,oBAAA;EACA,qBAAA;EACA,aAAA;EACA,qBAAA;EACA,gBAAA;AAAF;AAEA;EACE,WAAA;EACA,YAAA;EACA,yBAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAAF;AAEA;EACE,UAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAAF;AAEA;EACE,WAAA;EACA,YAAA;AAAF;AAEA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AAAF;AAGA;EACE,cAAA;EACA,kBAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;AADF;AAGA;EACE,cAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;AADF;AAIA;EACE,aAAA;AAFF;AAIA;EACE,aAAA;AAFF;AAKA;;;;EACE,cAAA;EACA,OAAA;EACA,WAAA;AAAF;AAEA;EACE,aAAA;EACA,eAAA;EACA,qBAAA;EACA,oCAAA;EACA,oBAAA;EACA,qBAAA;AAAF;AAEA;EACE,aAAA;EACA,eAAA;EACA,qBAAA;EACA,yBAAA;AAAF","sourcesContent":["\n.expertWrap{\n  width:7rem;\n  height:3rem;\n  margin-top:0.2rem;\n  margin-left:0.25rem;\n  margin-right:0.25rem;\n  display:flex;\n  border-radius:0.1rem;\n  overflow:hidden;\n}\n.expert{\n  width:100%;\n  height:100%;\n  background-color: #3Eb575;\n  color:#fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.expertCell {\n  width:90%;\n  height:90%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.expertIcon{\n  width:2rem;\n  height:2rem;\n}\n.expertText{\n  width:3rem;\n  display:flex;\n  flex-direction: column;\n  align-items: center;\n\n}\n.expertTitle{\n  height:0.5rem;\n  font-size:0.32rem;\n  font-weight: bolder;\n  display:flex;\n  align-items: center;\n}\n.expertDesc{\n  height:0.5rem;\n  font-size:0.25rem;\n  display:flex;\n  align-items: center;\n}\n\n.swiper {\n  z-index:auto;\n}\n.swiper-wrapper{\n  z-index:auto;\n\n}\n.expertWrap > .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal{\n  bottom: 0.2rem;\n  left: 0;\n  width: 100%;\n}\n.swiper-pagination-bullet{\n  width:0.2rem;\n  height:0.06rem;\n  border-radius:0.1rem;\n  background-color:rgba(0,0,0,.6);\n  margin-left:0.03rem;\n  margin-right:0.03rem;\n}\n.swiper-pagination-bullet-active{\n  width:0.4rem;\n  height:0.06rem;\n  border-radius:0.1rem;\n  background-color:#ebeef5;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Footer/index.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Footer/index.css ***!
  \**********************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".footer {\n  width: 100%;\n  height: 1rem;\n  background-color: #3Eb575;\n  color: #fff;\n  font-size: 0.22rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Footer/index.css"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;EACA,yBAAA;EACA,WAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AACF","sourcesContent":[".footer{\n  width:100%;\n  height:1rem;\n  background-color:#3Eb575;\n  color:#fff;\n  font-size:0.22rem;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/PageHeader/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/PageHeader/index.css ***!
  \**************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".page-header {\n  position: relative;\n  width: 100%;\n}\n.page-header-bg {\n  width: 100%;\n  opacity: 0;\n}\n.page-header-fixed {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.page-header-content-wrap {\n  width: 100%;\n}\n.page-header-content {\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n", "",{"version":3,"sources":["webpack://./src/components/PageHeader/index.css"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,WAAA;AACF;AACA;EACE,WAAA;EACA,UAAA;AACF;AACA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,UAAA;AACF;AACA;EACE,WAAA;AACF;AACA;EACE,WAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;AACF","sourcesContent":[".page-header {\n  position: relative;\n  width: 100%;\n}\n.page-header-bg {\n  width: 100%;\n  opacity: 0;\n}\n.page-header-fixed {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n.page-header-content-wrap {\n  width: 100%;\n}\n.page-header-content {\n  width:100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Progress/index.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Progress/index.css ***!
  \************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".progress-wrap {\n  width: 100%;\n  height: 100%;\n}\n.progress {\n  background-color: gray;\n  overflow: hidden;\n}\n.progress-bar {\n  width: 100%;\n  height: 100%;\n  background-color: red;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Progress/index.css"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,YAAA;AACF;AACA;EACE,sBAAA;EACA,gBAAA;AACF;AACA;EACE,WAAA;EACA,YAAA;EACA,qBAAA;AACF","sourcesContent":[".progress-wrap {\n  width: 100%;\n  height: 100%;\n}\n.progress {\n  background-color: gray;\n  overflow: hidden;\n}\n.progress-bar {\n  width: 100%;\n  height: 100%;\n  background-color: red;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/ProjectInfo/ProjectNode/index.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/ProjectInfo/ProjectNode/index.css ***!
  \***************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".project {\n  display: flex;\n}\n.project-icon {\n  width: 0.2rem;\n  height: 0.2rem;\n  background-color: #3Eb575;\n  border-radius: 50%;\n}\n.project-content {\n  width: 6.2rem;\n  margin-left: 0.1rem;\n  margin-top: -0.1rem;\n  margin-bottom: 0.2rem;\n  padding: 0.2rem;\n  background-color: #3Eb575;\n  border-radius: 0.1rem;\n  color: #fff;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n/* .project-content::before {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border: 0.8rem solid transparent;\n  border-left-width: 0.8rem;\n  border-left-style: solid;\n  border-left-color: #ebeef5;\n  transform: rotateZ(180deg);\n  position: absolute;\n  left: -0.16rem;\n  top: 0.1rem;\n} */\n.project-title {\n  height: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.project-name {\n  font-size: 0.3rem;\n  font-weight: bolder;\n}\n.project-time {\n  font-size: 0.25rem;\n}\n.project-desc {\n  text-indent: 0.5rem;\n  font-size: 0.2rem;\n}\n.project-result {\n  display: flex;\n  flex-direction: row;\n  font-size: 0.2rem;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ProjectInfo/ProjectNode/index.css"],"names":[],"mappings":"AAAA;EACE,aAAA;AACF;AACA;EACE,aAAA;EACA,cAAA;EACA,yBAAA;EACA,kBAAA;AACF;AACA;EACE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,qBAAA;EACA,eAAA;EACA,yBAAA;EACA,qBAAA;EACA,WAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;AACF;AACA;;;;;;;;;;;;GAYG;AAEH;EACE,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;AAAF;AAEA;EACE,iBAAA;EACA,mBAAA;AAAF;AAEA;EACE,kBAAA;AAAF;AAGA;EACE,mBAAA;EACA,iBAAA;AADF;AAGA;EACE,aAAA;EACA,mBAAA;EACA,iBAAA;AADF","sourcesContent":[".project {\n  display: flex;\n}\n.project-icon {\n  width: 0.2rem;\n  height: 0.2rem;\n  background-color: #3Eb575;\n  border-radius: 50%;\n}\n.project-content {\n  width: 6.2rem;\n  margin-left: 0.1rem;\n  margin-top: -0.1rem;\n  margin-bottom: 0.2rem;\n  padding:0.2rem;\n  background-color: #3Eb575;\n  border-radius:0.1rem;\n  color:#fff;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n/* .project-content::before {\n  content: \"\";\n  width: 0;\n  height: 0;\n  border: 0.8rem solid transparent;\n  border-left-width: 0.8rem;\n  border-left-style: solid;\n  border-left-color: #ebeef5;\n  transform: rotateZ(180deg);\n  position: absolute;\n  left: -0.16rem;\n  top: 0.1rem;\n} */\n\n.project-title{\n  height:1rem;\n  display:flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.project-name{\n  font-size:0.3rem;\n  font-weight: bolder;\n}\n.project-time{\n  font-size:0.25rem;\n}\n\n.project-desc{\n  text-indent: 0.5rem;\n  font-size:0.2rem;\n}\n.project-result{\n  display:flex;\n  flex-direction: row;\n  font-size:0.2rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/ProjectInfo/index.less":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/ProjectInfo/index.less ***!
  \****************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".project-list-wrap {\n  width: 7rem;\n  margin-top: 0.4rem;\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  display: flex;\n  align-items: center;\n}\n.project-list {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.project-item-wrap {\n  width: 100%;\n  display: flex;\n}\n.project-item-bar {\n  border-radius: 0.1rem;\n  background-color: #ebeef5;\n}\n.project-item-bar-inner {\n  border-radius: 0.1rem;\n  background-color: #3Eb575;\n}\n.project-item {\n  margin-left: -0.14rem;\n  position: relative;\n  display: flex;\n}\n", "",{"version":3,"sources":["webpack://./src/components/ProjectInfo/index.less"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,kBAAA;EACA,oBAAA;EACA,qBAAA;EACA,aAAA;EACA,mBAAA;AACF;AACA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;AACF;AACA;EACE,WAAA;EACA,aAAA;AACF;AACA;EACE,qBAAA;EACA,yBAAA;AACF;AACA;EACE,qBAAA;EACA,yBAAA;AACF;AACA;EACE,qBAAA;EACA,kBAAA;EACA,aAAA;AACF","sourcesContent":[".project-list-wrap {\n  width: 7rem;\n  margin-top: 0.4rem;\n  margin-left:0.25rem;\n  margin-right:0.25rem;\n  display: flex;\n  align-items: center;\n}\n.project-list {\n  width:100%;\n  display: flex;\n  flex-direction: column;\n}\n.project-item-wrap {\n  width:100%;\n  display: flex;\n}\n.project-item-bar {\n  border-radius: 0.1rem;\n  background-color: #ebeef5;\n}\n.project-item-bar-inner {\n  border-radius: 0.1rem;\n  background-color: #3Eb575;\n}\n.project-item {\n  margin-left:-0.14rem;\n  position: relative;\n  display: flex;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/UserInfo/index.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/UserInfo/index.css ***!
  \************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".user-wrap {\n  width: 7rem;\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n.user-item-wrap {\n  background-color: #3Eb575;\n  border-radius: 0.1rem;\n}\n.user-item {\n  height: 0.6rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.26rem;\n  margin-left: 0.2rem;\n}\n.user-label {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/components/UserInfo/index.css"],"names":[],"mappings":"AAAA;EACE,WAAA;EACA,oBAAA;EACA,qBAAA;AACF;AACA;EACE,yBAAA;EACA,qBAAA;AACF;AACA;EACE,cAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;AACF;AAEA;EACE,aAAA;EACA,yBAAA;EACA,mBAAA;AAAF","sourcesContent":[".user-wrap{\n  width:7rem;\n  margin-left:0.25rem;\n  margin-right:0.25rem;\n}\n.user-item-wrap {\n  background-color:#3Eb575;\n  border-radius:0.1rem;\n}\n.user-item{\n  height:0.6rem;\n  display:flex;\n  align-items: center;\n  font-size:0.26rem;\n  margin-left:0.2rem;\n}\n\n.user-label{\n  display:flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.user-value{\n  \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/pages/Home.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/pages/Home.css ***!
  \*********************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/* @font-face{\n  font-family: 'dakai';\n  src :url('../assets/font.woff2');\n} */\n.home {\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.home-header {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bolder;\n  font-size: 32;\n}\n", "",{"version":3,"sources":["webpack://./src/pages/Home.css"],"names":[],"mappings":"AAAA;;;GAGG;AAEH;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,kBAAA;AAAF;AAEA;EACE,WAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;EACA,aAAA;AAAF","sourcesContent":["\n/* @font-face{\n  font-family: 'dakai';\n  src :url('../assets/font.woff2');\n} */\n.home{\n  width:100%;\n  height:100%;\n  overflow-x:hidden;\n  overflow-y:scroll;\n}\n.home-header{\n  width:100%;\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bolder;\n  font-size: 32;\n  \n}"],"sourceRoot":""}]);
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/less-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/App.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Card/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/Experience/ExperienceNode/index.less":
/*!*************************************************************!*\
  !*** ./src/components/Experience/ExperienceNode/index.less ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Experience/ExperienceNode/index.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Experience/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/Expert/index.css":
/*!*****************************************!*\
  !*** ./src/components/Expert/index.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Expert/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Footer/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/PageHeader/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/Progress/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/ProjectInfo/ProjectNode/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/ProjectInfo/index.less":
/*!***********************************************!*\
  !*** ./src/components/ProjectInfo/index.less ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/ProjectInfo/index.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/less-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/components/UserInfo/index.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_Home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./Home.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/pages/Home.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_Home_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_Home_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/assets/react.svg":
/*!******************************!*\
  !*** ./src/assets/react.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NDEuOSA1OTUuMyI+PGcgZmlsbD0iIzYxREFGQiI+PHBhdGggZD0iTTY2Ni4zIDI5Ni41YzAtMzIuNS00MC43LTYzLjMtMTAzLjEtODIuNCAxNC40LTYzLjYgOC0xMTQuMi0yMC4yLTEzMC40LTYuNS0zLjgtMTQuMS01LjYtMjIuNC01LjZ2MjIuM2M0LjYgMCA4LjMuOSAxMS40IDIuNiAxMy42IDcuOCAxOS41IDM3LjUgMTQuOSA3NS43LTEuMSA5LjQtMi45IDE5LjMtNS4xIDI5LjQtMTkuNi00LjgtNDEtOC41LTYzLjUtMTAuOS0xMy41LTE4LjUtMjcuNS0zNS4zLTQxLjYtNTAgMzIuNi0zMC4zIDYzLjItNDYuOSA4NC00Ni45Vjc4Yy0yNy41IDAtNjMuNSAxOS42LTk5LjkgNTMuNi0zNi40LTMzLjgtNzIuNC01My4yLTk5LjktNTMuMnYyMi4zYzIwLjcgMCA1MS40IDE2LjUgODQgNDYuNi0xNCAxNC43LTI4IDMxLjQtNDEuMyA0OS45LTIyLjYgMi40LTQ0IDYuMS02My42IDExLTIuMy0xMC00LTE5LjctNS4yLTI5LTQuNy0zOC4yIDEuMS02Ny45IDE0LjYtNzUuOCAzLTEuOCA2LjktMi42IDExLjUtMi42Vjc4LjVjLTguNCAwLTE2IDEuOC0yMi42IDUuNi0yOC4xIDE2LjItMzQuNCA2Ni43LTE5LjkgMTMwLjEtNjIuMiAxOS4yLTEwMi43IDQ5LjktMTAyLjcgODIuMyAwIDMyLjUgNDAuNyA2My4zIDEwMy4xIDgyLjQtMTQuNCA2My42LTggMTE0LjIgMjAuMiAxMzAuNCA2LjUgMy44IDE0LjEgNS42IDIyLjUgNS42IDI3LjUgMCA2My41LTE5LjYgOTkuOS01My42IDM2LjQgMzMuOCA3Mi40IDUzLjIgOTkuOSA1My4yIDguNCAwIDE2LTEuOCAyMi42LTUuNiAyOC4xLTE2LjIgMzQuNC02Ni43IDE5LjktMTMwLjEgNjItMTkuMSAxMDIuNS00OS45IDEwMi41LTgyLjN6bS0xMzAuMi02Ni43Yy0zLjcgMTIuOS04LjMgMjYuMi0xMy41IDM5LjUtNC4xLTgtOC40LTE2LTEzLjEtMjQtNC42LTgtOS41LTE1LjgtMTQuNC0yMy40IDE0LjIgMi4xIDI3LjkgNC43IDQxIDcuOXptLTQ1LjggMTA2LjVjLTcuOCAxMy41LTE1LjggMjYuMy0yNC4xIDM4LjItMTQuOSAxLjMtMzAgMi00NS4yIDItMTUuMSAwLTMwLjItLjctNDUtMS45LTguMy0xMS45LTE2LjQtMjQuNi0yNC4yLTM4LTcuNi0xMy4xLTE0LjUtMjYuNC0yMC44LTM5LjggNi4yLTEzLjQgMTMuMi0yNi44IDIwLjctMzkuOSA3LjgtMTMuNSAxNS44LTI2LjMgMjQuMS0zOC4yIDE0LjktMS4zIDMwLTIgNDUuMi0yIDE1LjEgMCAzMC4yLjcgNDUgMS45IDguMyAxMS45IDE2LjQgMjQuNiAyNC4yIDM4IDcuNiAxMy4xIDE0LjUgMjYuNCAyMC44IDM5LjgtNi4zIDEzLjQtMTMuMiAyNi44LTIwLjcgMzkuOXptMzIuMy0xM2M1LjQgMTMuNCAxMCAyNi44IDEzLjggMzkuOC0xMy4xIDMuMi0yNi45IDUuOS00MS4yIDggNC45LTcuNyA5LjgtMTUuNiAxNC40LTIzLjcgNC42LTggOC45LTE2LjEgMTMtMjQuMXpNNDIxLjIgNDMwYy05LjMtOS42LTE4LjYtMjAuMy0yNy44LTMyIDkgLjQgMTguMi43IDI3LjUuNyA5LjQgMCAxOC43LS4yIDI3LjgtLjctOSAxMS43LTE4LjMgMjIuNC0yNy41IDMyem0tNzQuNC01OC45Yy0xNC4yLTIuMS0yNy45LTQuNy00MS03LjkgMy43LTEyLjkgOC4zLTI2LjIgMTMuNS0zOS41IDQuMSA4IDguNCAxNiAxMy4xIDI0IDQuNyA4IDkuNSAxNS44IDE0LjQgMjMuNHpNNDIwLjcgMTYzYzkuMyA5LjYgMTguNiAyMC4zIDI3LjggMzItOS0uNC0xOC4yLS43LTI3LjUtLjctOS40IDAtMTguNy4yLTI3LjguNyA5LTExLjcgMTguMy0yMi40IDI3LjUtMzJ6bS03NCA1OC45Yy00LjkgNy43LTkuOCAxNS42LTE0LjQgMjMuNy00LjYgOC04LjkgMTYtMTMgMjQtNS40LTEzLjQtMTAtMjYuOC0xMy44LTM5LjggMTMuMS0zLjEgMjYuOS01LjggNDEuMi03Ljl6bS05MC41IDEyNS4yYy0zNS40LTE1LjEtNTguMy0zNC45LTU4LjMtNTAuNiAwLTE1LjcgMjIuOS0zNS42IDU4LjMtNTAuNiA4LjYtMy43IDE4LTcgMjcuNy0xMC4xIDUuNyAxOS42IDEzLjIgNDAgMjIuNSA2MC45LTkuMiAyMC44LTE2LjYgNDEuMS0yMi4yIDYwLjYtOS45LTMuMS0xOS4zLTYuNS0yOC0xMC4yek0zMTAgNDkwYy0xMy42LTcuOC0xOS41LTM3LjUtMTQuOS03NS43IDEuMS05LjQgMi45LTE5LjMgNS4xLTI5LjQgMTkuNiA0LjggNDEgOC41IDYzLjUgMTAuOSAxMy41IDE4LjUgMjcuNSAzNS4zIDQxLjYgNTAtMzIuNiAzMC4zLTYzLjIgNDYuOS04NCA0Ni45LTQuNS0uMS04LjMtMS0xMS4zLTIuN3ptMjM3LjItNzYuMmM0LjcgMzguMi0xLjEgNjcuOS0xNC42IDc1LjgtMyAxLjgtNi45IDIuNi0xMS41IDIuNi0yMC43IDAtNTEuNC0xNi41LTg0LTQ2LjYgMTQtMTQuNyAyOC0zMS40IDQxLjMtNDkuOSAyMi42LTIuNCA0NC02LjEgNjMuNi0xMSAyLjMgMTAuMSA0LjEgMTkuOCA1LjIgMjkuMXptMzguNS02Ni43Yy04LjYgMy43LTE4IDctMjcuNyAxMC4xLTUuNy0xOS42LTEzLjItNDAtMjIuNS02MC45IDkuMi0yMC44IDE2LjYtNDEuMSAyMi4yLTYwLjYgOS45IDMuMSAxOS4zIDYuNSAyOC4xIDEwLjIgMzUuNCAxNS4xIDU4LjMgMzQuOSA1OC4zIDUwLjYtLjEgMTUuNy0yMyAzNS42LTU4LjQgNTAuNnpNMzIwLjggNzguNHoiLz48Y2lyY2xlIGN4PSI0MjAuOSIgY3k9IjI5Ni41IiByPSI0NS43Ii8+PHBhdGggZD0iTTUyMC41IDc4LjF6Ii8+PC9nPjwvc3ZnPg==");

/***/ }),

/***/ "./src/assets/webpack.svg":
/*!********************************!*\
  !*** ./src/assets/webpack.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjAwIDYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMzAwIC4xIDI2NSAxNDkuOXYyOTkuOWwtMjY1IDE0OS45LTI2NS0xNDkuOXYtMjk5Ljl6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0ibTUxNy43IDQzOS41LTIwOC45IDExOC4zdi05MmwxMzAuMi03MS43em0xNC4zLTEyLjl2LTI0Ny4ybC03Ni40IDQ0LjF2MTU5em0tNDUwLjUgMTIuOSAyMDguOSAxMTguMnYtOTJsLTEzMC4yLTcxLjZ6bS0xNC4zLTEyLjl2LTI0Ny4ybDc2LjQgNDQuMXYxNTl6bTguOS0yNjMuMiAyMTQuMy0xMjEuMnY4OWwtMTM3LjMgNzUuNS0xLjEuNnptNDQ2LjkgMC0yMTQuMi0xMjEuMnY4OWwxMzcuMiA3NS42IDEuMS42eiIgZmlsbD0iIzhlZDZmYiIvPjxwYXRoIGQ9Im0yOTAuNCA0NDQuOC0xMjguNC03MC43di0xMzkuOWwxMjguNCA3NC4xem0xOC40IDAgMTI4LjQtNzAuNnYtMTQwbC0xMjguNCA3NC4xem0tMTM4LjItMjI2LjggMTI5LTcwLjkgMTI4LjkgNzAuOS0xMjguOSA3NC40eiIgZmlsbD0iIzFjNzhjMCIvPjwvc3ZnPg==");

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_react-dom_index_js","vendors-node_modules_classnames_index_js-node_modules_swiper_modules_pagination_css-node_modu-41080c"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map