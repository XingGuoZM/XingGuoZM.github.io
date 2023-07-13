"use strict";
(self["webpackChunkxingguozm_github_io"] = self["webpackChunkxingguozm_github_io"] || []).push([["src_components_Card_index_tsx-src_components_IconList_index_tsx"],{

/***/ "./src/components/Card/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Card/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardTypeEnum": () => (/* binding */ CardTypeEnum),
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./src/components/Card/index.less");


var CardTypeEnum;

(function (CardTypeEnum) {
  CardTypeEnum["Large"] = "Large";
  CardTypeEnum["Medium"] = "Medium";
  CardTypeEnum["Small"] = "Small";
  CardTypeEnum["Tiny"] = "Tiny";
})(CardTypeEnum || (CardTypeEnum = {}));

/**
 * 
 * @param param0 
 * type: Large 、medium、small
 */
function Card(_ref) {
  var type = _ref.type,
      children = _ref.children,
      data = _ref.data;
  var renderCardByType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    switch (type) {
      case CardTypeEnum.Large:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "card-large"
        }, data.map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            key: item.id
          }, children(item));
        }));

      case CardTypeEnum.Medium:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "card-medium"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "card-medium-left"
        }, data.filter(function (_, index) {
          return index % 2 === 0;
        }).map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            key: item.projectName
          }, children(item));
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "card-medium-right"
        }, data.filter(function (_, index) {
          return index % 2 !== 0;
        }).map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            key: item.projectName
          }, children(item));
        })));

      case CardTypeEnum.Small:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "card-small"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "card-small-left"
        }, data.filter(function (_, index) {
          return index % 3 === 0;
        }).map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            key: item.id
          }, children(item));
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "card-small-center"
        }, data.filter(function (_, index) {
          return index % 3 === 1;
        }).map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            key: item.id
          }, children(item));
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "card-small-right"
        }, data.filter(function (_, index) {
          return index % 3 === 2;
        }).map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            key: item.id
          }, children(item));
        })));

      case CardTypeEnum.Tiny:
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "card-tiny-wrap"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "card-tiny-1"
        }, data.filter(function (_, index) {
          return index % 4 === 0;
        }).map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            key: item.id
          }, children(item));
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "card-tiny-2"
        }, data.filter(function (_, index) {
          return index % 4 === 1;
        }).map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            key: item.id
          }, children(item));
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "card-tiny-3"
        }, data.filter(function (_, index) {
          return index % 4 === 2;
        }).map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            key: item.id
          }, children(item));
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "card-tiny-4"
        }, data.filter(function (_, index) {
          return index % 4 === 3;
        }).map(function (item) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            key: item.id
          }, children(item));
        })));

      default:
        return;
    }
  }, [children, data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-content"
  }, renderCardByType()));
}

/***/ }),

/***/ "./src/components/IconList/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/IconList/index.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IconList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./src/components/IconList/index.less");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function IconList(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? '' : _ref$data,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? '#fff' : _ref$fill;

  if (Array.isArray(data) && data.length === 2) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "expertIcon2"
    }, data === null || data === void 0 ? void 0 : data.map(function (Icon, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon, {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_defineProperty({
          'expertSmallIcon2': true
        }, className, true)),
        key: index,
        fill: fill
      });
    }));
  }

  if (Array.isArray(data) && data.length === 3) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "expertIcon3"
    }, data === null || data === void 0 ? void 0 : data.map(function (Icon, index) {
      var _classnames2;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon, {
        key: index,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_classnames2 = {}, _defineProperty(_classnames2, 'expertSmallIcon3', true), _defineProperty(_classnames2, 'firstExpertSmallIcon3', index === 0), _defineProperty(_classnames2, className, true), _classnames2)),
        fill: fill
      });
    }));
  }

  var Icon = data[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_defineProperty({
      'expertIcon': true
    }, className, true)),
    fill: fill
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/Card/index.less":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/Card/index.less ***!
  \*****************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".card-content {\n  width: 100%;\n}\n.card-large {\n  border-radius: 0.1rem;\n}\n.card-medium {\n  width: 7rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.card-medium .card-medium-right {\n  margin-left: 0.1rem;\n}\n.card-small {\n  display: flex;\n  justify-content: space-between;\n}\n.card-tiny-wrap {\n  display: flex;\n  justify-content: space-between;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Card/index.less"],"names":[],"mappings":"AAIA;EACE,WAAA;AAHF;AAKA;EACE,qBAAA;AAHF;AAOA;EACE,WAAA;EACA,aAAA;EACA,mBAAA;EACA,eAAA;AALF;AACA;EASI,mBAAA;AAPJ;AAaA;EACE,aAAA;EACA,8BAAA;AAXF;AAcA;EACE,aAAA;EACA,8BAAA;AAZF","sourcesContent":["\n.card-wrap{\n\n}\n.card-content{\n  width:100%;\n}\n.card-large{\n  border-radius:0.1rem;\n\n}\n\n.card-medium{\n  width:7rem;\n  display:flex;\n  flex-direction: row;\n  flex-wrap:wrap;\n  .card-medium-left{\n\n  }\n  .card-medium-right{\n    margin-left:0.1rem;\n  }\n}\n\n\n\n.card-small{\n  display:flex;\n  justify-content: space-between;\n\n}\n.card-tiny-wrap{\n  display:flex;\n  justify-content: space-between;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/IconList/index.less":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/IconList/index.less ***!
  \*********************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".expertIcon {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.expertIcon2 {\n  display: flex;\n  align-items: center;\n}\n.expertSmallIcon2 {\n  width: 1rem;\n  height: 1rem;\n}\n.expertIcon3 {\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.firstExpertSmallIcon3 {\n  flex-basis: 2rem;\n}\n.expertSmallIcon3 {\n  width: 0.6rem;\n  height: 0.6rem;\n}\n", "",{"version":3,"sources":["webpack://./src/components/IconList/index.less"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,cAAA;AACF;AAEA;EACE,aAAA;EACA,mBAAA;AAAF;AAEA;EACE,WAAA;EACA,YAAA;AAAF;AAGA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,eAAA;AADF;AAGA;EACE,gBAAA;AADF;AAGA;EACE,aAAA;EACA,cAAA;AADF","sourcesContent":[".expertIcon{\n  width:1.5rem;\n  height:1.5rem;\n}\n\n.expertIcon2{\n  display:flex;\n  align-items: center;\n}\n.expertSmallIcon2{\n  width:1rem;\n  height:1rem;\n}\n\n.expertIcon3{\n  width:2rem;\n  height:2rem;\n  display:flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.firstExpertSmallIcon3{\n  flex-basis: 2rem;\n}\n.expertSmallIcon3{\n  width:0.6rem;\n  height:0.6rem;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/Card/index.less":
/*!****************************************!*\
  !*** ./src/components/Card/index.less ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./index.less */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/Card/index.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_index_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_index_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/IconList/index.less":
/*!********************************************!*\
  !*** ./src/components/IconList/index.less ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./index.less */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./src/components/IconList/index.less");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_index_less__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_2_use_1_node_modules_less_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_index_less__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

}]);
//# sourceMappingURL=index.js.map