/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n#container {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    height: 100vh;\n}\n\n#content {\n    grid-column: 2/-1;\n    background-color: grey;\n}", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA;IACI,SAAS;AACb;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;AAC1B","sourcesContent":["* {\n    margin: 0;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n#container {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    height: 100vh;\n}\n\n#content {\n    grid-column: 2/-1;\n    background-color: grey;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/sidebar.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/sidebar.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#sidebar {\n    grid-column: 1/2;\n    grid-row: 1/-1;\n    background-color: rgb(170, 255, 43);\n    font-size: 2rem;\n    padding: 24px;\n    display: grid;\n    grid-template-rows: 7fr 1fr;\n    width: 400px;\n    justify-items: center;\n    justify-content: center;\n}\n\n#side-bar-items {\n    display: grid;\n}\n\n#sidebar #sidebar-add-button {\n    margin: 10px;\n    width: 100px;\n    height: 40px;\n    background-color: rgb(255, 255, 255);\n    font-size: 1.2rem;\n    border-radius: 20px;\n    font-weight: 700;\n    cursor: pointer;\n}\n\n#sidebar #sidebar-add-button:hover {\n    background-color: rgb(10, 78, 10);\n    color: white;\n    font-weight: 900;\n}\n\n#sidebar #sidebar-add-button:active {\n    color: rgb(187, 159, 0);\n}\n\n#sidebar form {\n    display: grid;\n    grid-template-columns: 1fr;\n    /* position: absolute; */\n}\n\n.sidebar-item {\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 10fr 1fr;\n    align-items: center;\n    padding: 8px;\n    border-radius: 10px;\n}\n\n.sidebar-item:hover {\n    background-color: rgba(103, 103, 103, 0.5);\n    font-weight: 700;\n}\n\n.sidebar-item button {\n    background-color: transparent;\n    border-radius: 18px;\n    height: 27px;\n    width: 29px;\n    font-size: 1.2rem;\n    padding: 0;\n    border-width: 1px;\n}\n\n.sidebar-item button:hover {\n    background-color: rgba(255, 37, 37, 0.798);\n    font-weight: 900;\n    border-width: 1.5px;\n}\n\n#sidebar form input {\n    background: transparent;\n    border-radius: 10px;\n    border: 1px solid rgba(103, 103, 103, 0.5);\n    padding: 5px;\n    margin: 5px;\n    font-size: 1.8rem;\n}\n\n#sidebar form input:hover {\n    border: 1.2px solid rgb(0, 0, 0);\n}", "",{"version":3,"sources":["webpack://./src/styles/sidebar.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,cAAc;IACd,mCAAmC;IACnC,eAAe;IACf,aAAa;IACb,aAAa;IACb,2BAA2B;IAC3B,YAAY;IACZ,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,oCAAoC;IACpC,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,aAAa;IACb,+BAA+B;IAC/B,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,0CAA0C;IAC1C,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,0CAA0C;IAC1C,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,0CAA0C;IAC1C,YAAY;IACZ,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,gCAAgC;AACpC","sourcesContent":["#sidebar {\n    grid-column: 1/2;\n    grid-row: 1/-1;\n    background-color: rgb(170, 255, 43);\n    font-size: 2rem;\n    padding: 24px;\n    display: grid;\n    grid-template-rows: 7fr 1fr;\n    width: 400px;\n    justify-items: center;\n    justify-content: center;\n}\n\n#side-bar-items {\n    display: grid;\n}\n\n#sidebar #sidebar-add-button {\n    margin: 10px;\n    width: 100px;\n    height: 40px;\n    background-color: rgb(255, 255, 255);\n    font-size: 1.2rem;\n    border-radius: 20px;\n    font-weight: 700;\n    cursor: pointer;\n}\n\n#sidebar #sidebar-add-button:hover {\n    background-color: rgb(10, 78, 10);\n    color: white;\n    font-weight: 900;\n}\n\n#sidebar #sidebar-add-button:active {\n    color: rgb(187, 159, 0);\n}\n\n#sidebar form {\n    display: grid;\n    grid-template-columns: 1fr;\n    /* position: absolute; */\n}\n\n.sidebar-item {\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 10fr 1fr;\n    align-items: center;\n    padding: 8px;\n    border-radius: 10px;\n}\n\n.sidebar-item:hover {\n    background-color: rgba(103, 103, 103, 0.5);\n    font-weight: 700;\n}\n\n.sidebar-item button {\n    background-color: transparent;\n    border-radius: 18px;\n    height: 27px;\n    width: 29px;\n    font-size: 1.2rem;\n    padding: 0;\n    border-width: 1px;\n}\n\n.sidebar-item button:hover {\n    background-color: rgba(255, 37, 37, 0.798);\n    font-weight: 900;\n    border-width: 1.5px;\n}\n\n#sidebar form input {\n    background: transparent;\n    border-radius: 10px;\n    border: 1px solid rgba(103, 103, 103, 0.5);\n    padding: 5px;\n    margin: 5px;\n    font-size: 1.8rem;\n}\n\n#sidebar form input:hover {\n    border: 1.2px solid rgb(0, 0, 0);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/to-do.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/to-do.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#content {\n    display: grid;\n}\n\n#content-items {\n    display: grid;\n    grid-template: repeat(5, 1fr) / repeat(5, 1fr);\n}\n\n#content-items {\n    display: grid;\n    margin: 16px;\n    padding: 16px;\n}\n\n/* To Do Form */\n\n#todo-add-form form {\n    background-color: white;\n    padding: 8px;\n    border-radius: 16px;\n\n}\n\n#todo-add-form input,\n#todo-add-form textarea {\n    width: 350px;\n    font-size: 1rem;\n    border: 1px solid green;\n    padding: 4px;\n}\n\n#todo-add-form #description {\n    height: 200px;\n}\n\n#todo-add-form button {\n    border-radius: 12px;\n}\n\n/* To Do */\n\n.todo {\n    background-color: white;\n    padding: 16px;\n    margin: 16px;\n    border-radius: 16px;\n}\n\n.todo .title {\n    font-weight: bold;\n    font-size: 2rem;\n}", "",{"version":3,"sources":["webpack://./src/styles/to-do.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8CAA8C;AAClD;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;AACjB;;AAEA,eAAe;;AAEf;IACI,uBAAuB;IACvB,YAAY;IACZ,mBAAmB;;AAEvB;;AAEA;;IAEI,YAAY;IACZ,eAAe;IACf,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB;;AAEA,UAAU;;AAEV;IACI,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB","sourcesContent":["#content {\n    display: grid;\n}\n\n#content-items {\n    display: grid;\n    grid-template: repeat(5, 1fr) / repeat(5, 1fr);\n}\n\n#content-items {\n    display: grid;\n    margin: 16px;\n    padding: 16px;\n}\n\n/* To Do Form */\n\n#todo-add-form form {\n    background-color: white;\n    padding: 8px;\n    border-radius: 16px;\n\n}\n\n#todo-add-form input,\n#todo-add-form textarea {\n    width: 350px;\n    font-size: 1rem;\n    border: 1px solid green;\n    padding: 4px;\n}\n\n#todo-add-form #description {\n    height: 200px;\n}\n\n#todo-add-form button {\n    border-radius: 12px;\n}\n\n/* To Do */\n\n.todo {\n    background-color: white;\n    padding: 16px;\n    margin: 16px;\n    border-radius: 16px;\n}\n\n.todo .title {\n    font-weight: bold;\n    font-size: 2rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/sidebar.css":
/*!********************************!*\
  !*** ./src/styles/sidebar.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./sidebar.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/sidebar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sidebar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/to-do.css":
/*!******************************!*\
  !*** ./src/styles/to-do.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_to_do_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./to-do.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/to-do.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_to_do_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_to_do_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_to_do_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_to_do_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/attributes.js":
/*!***********************************!*\
  !*** ./src/modules/attributes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAttributes": () => (/* binding */ addAttributes),
/* harmony export */   "addSidebarFormAttributes": () => (/* binding */ addSidebarFormAttributes),
/* harmony export */   "addToDoFormAttributes": () => (/* binding */ addToDoFormAttributes),
/* harmony export */   "addToDoLabelAttributes": () => (/* binding */ addToDoLabelAttributes)
/* harmony export */ });
const addAttributes = (text, attType, attName, elementType) => {
    const element = document.createElement(elementType);
    element.textContent = text;
    element.setAttribute(attType, attName);
    return element;
};

const setTextInputAttributes = (item, type, id, maxLength) => {
    item.setAttribute('type', type);
    item.setAttribute('id', id);
    item.setAttribute('name', id);
    item.setAttribute('maxLength', maxLength);
    item.required = true;
};

const setTextAreaAttributes = (item, id, cols, rows) => {
    item.setAttribute('id', id);
    item.setAttribute('name', id);
    item.setAttribute('rows', rows);
    item.setAttribute('cols', cols);
};

const setFormElementAttributes = (form, action, method) => {
    form.setAttribute('action', action);
    form.setAttribute('method', method);
};

const addSidebarFormAttributes = (form, input) => {
    setTextInputAttributes(input, 'text', 'folder-title', '20');
    setFormElementAttributes(form, '', 'post');
};

const addToDoFormAttributes = (form, title, desc) => {
    setFormElementAttributes(form, '', 'post');
    setTextInputAttributes(title, 'text', 'title', '10');
    setTextAreaAttributes(desc, 'description', '26', '5');
};

const addToDoLabelAttributes = (title, desc) => {
    setLabelAttributes(title, 'for', 'title', 'Title: ');
    setLabelAttributes(desc, 'for', 'description', 'Description');
};

const setLabelAttributes = (item, attType, att, text) => {
    item.setAttribute(attType, att);
    item.setAttribute('class', 'form-label');
    item.innerHTML = text;
};





/***/ }),

/***/ "./src/modules/page-layout.js":
/*!************************************!*\
  !*** ./src/modules/page-layout.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAbove": () => (/* binding */ addAbove),
/* harmony export */   "addButton": () => (/* binding */ addButton),
/* harmony export */   "addContent": () => (/* binding */ addContent),
/* harmony export */   "addRemoveButton": () => (/* binding */ addRemoveButton),
/* harmony export */   "addSidebarForm": () => (/* binding */ addSidebarForm),
/* harmony export */   "addToDoForm": () => (/* binding */ addToDoForm),
/* harmony export */   "clearHTML": () => (/* binding */ clearHTML),
/* harmony export */   "displayToDo": () => (/* binding */ displayToDo),
/* harmony export */   "removeHTML": () => (/* binding */ removeHTML)
/* harmony export */ });
/* harmony import */ var _user_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-input */ "./src/modules/user-input.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/modules/attributes.js");




const content = document.querySelector('#content');

const addContent = (parent, text, className, elementType) => {
    const element = document.createElement(elementType);
    element.textContent = text;
    element.classList.add(className);
    parent.appendChild(element);
};

const addForm = (parent) => {
    const element = document.createElement('form');
    parent.appendChild(element);
    return element;
};

const addFormInputElement = (type, parent, id) => {
    const input = document.createElement(type);
    parent.appendChild(input);
    return input;
};

const addFormLabelElement = (parent) => {
    const label = document.createElement('label');
    parent.appendChild(label);
    return label;
};

const addFormParent = (parent, id) => {
    const element = document.createElement('div');
    element.setAttribute('id', id);
    parent.appendChild(element);
    return element;
};

const addFormToDOM = (parent, id) => {
    const formParent = addFormParent(parent, id);
    const form = addForm(formParent);
    return form;
};


const addSidebarForm = (parent) => {
    const form = addFormToDOM(parent, 'sidebar-add-form');
    const input = addFormInputElement('input', form, 'folder-title');

    (0,_attributes__WEBPACK_IMPORTED_MODULE_1__.addSidebarFormAttributes)(form, input);
    (0,_user_input__WEBPACK_IMPORTED_MODULE_0__.registerSidebarSubmitListener)(form, input);
    return form;
};

const addToDoForm = (parent) => {
    const form = addFormToDOM(parent, 'todo-add-form');
    const titleLabel = addFormLabelElement(form);
    const title = addFormInputElement('input', form, 'title');
    const descLabel = addFormLabelElement(form);
    const description = addFormInputElement('textarea', form, 'description');


    const submitButton = addButton(form, 'submit', 'todo-submit-button', 'submit');
    (0,_attributes__WEBPACK_IMPORTED_MODULE_1__.addToDoFormAttributes)(form, title, description);
    (0,_attributes__WEBPACK_IMPORTED_MODULE_1__.addToDoLabelAttributes)(titleLabel, descLabel);

    (0,_user_input__WEBPACK_IMPORTED_MODULE_0__.registerToDoSubmitListener)(form);
};

const displayToDo = (toDoItem, contentItems, addToDoButton) => {
    const toDoParent = (0,_attributes__WEBPACK_IMPORTED_MODULE_1__.addAttributes)('', 'class', 'todo', 'div');
    const titleDiv = (0,_attributes__WEBPACK_IMPORTED_MODULE_1__.addAttributes)(toDoItem.title, 'class', 'title', 'div');
    const descDiv = (0,_attributes__WEBPACK_IMPORTED_MODULE_1__.addAttributes)(toDoItem.description, 'class', 'todo-desc', 'div');

    contentItems.appendChild(toDoParent);
    toDoParent.appendChild(titleDiv);
    toDoParent.appendChild(descDiv);
    appendAbove(contentItems, toDoParent, addToDoButton);

    // titleDiv.innerHTML = toDoItem.title;
    // descDiv.innerHTML = toDoItem.description;
};



const addButtonType = (button, type) => {
    button.setAttribute('type', type);
};

const appendAbove = (parent, lowerDiv, item) => {
    parent.insertBefore(item, lowerDiv);
};

//addAttributes needs changes
const addAbove = (className, elementType, parent, lowerDiv) => {
    const element = (0,_attributes__WEBPACK_IMPORTED_MODULE_1__.addAttributes)('', 'class', className, elementType);
    appendAbove(parent, lowerDiv, element);
    return element;
};

const addButton = (parent, text, id, type) => {
    const button = (0,_attributes__WEBPACK_IMPORTED_MODULE_1__.addAttributes)(text, 'id', id, 'button');
    addButtonType(button, type);
    parent.appendChild(button);
    return button;
};

const clearHTML = (element) => {
    element.innerHTML = '';
};

const removeHTML = (element) => {
    element.remove();
};

const addRemoveButton = (parent, text, id) => {
    const removeButton = addButton(parent, text, id, 'button');
    (0,_user_input__WEBPACK_IMPORTED_MODULE_0__.registerRemoveListener)(removeButton, parent);
    return removeButton;

};



/***/ }),

/***/ "./src/modules/sidebar.js":
/*!********************************!*\
  !*** ./src/modules/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initSidebar": () => (/* binding */ initSidebar)
/* harmony export */ });
/* harmony import */ var _styles_sidebar_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/sidebar.css */ "./src/styles/sidebar.css");
/* harmony import */ var _page_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-layout */ "./src/modules/page-layout.js");



const sidebarItems = document.querySelector('#sidebar-items');
let sidebarContent = ['Projects', 'Today', 'This Week'];

//Possible remove
const renderSidebarContent = () => {
    for (let i = 0; i < sidebarContent.length; i++) {
        (0,_page_layout__WEBPACK_IMPORTED_MODULE_1__.addContent)(sidebarItems, sidebarContent[i], 'sidebar-item', 'div');
    }
    addSidebarInput();
};

const initSidebar = () => {
    renderSidebarContent();
};

const addSidebarInput = () => {
    const sidebarForm = (0,_page_layout__WEBPACK_IMPORTED_MODULE_1__.addSidebarForm)(sidebarItems);
    const sidebarButton = (0,_page_layout__WEBPACK_IMPORTED_MODULE_1__.addButton)(sidebarForm, '+ Folder', 'sidebar-add-button', 'submit');

};



/***/ }),

/***/ "./src/modules/to-do.js":
/*!******************************!*\
  !*** ./src/modules/to-do.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initToDo": () => (/* binding */ initToDo),
/* harmony export */   "toDo": () => (/* binding */ toDo)
/* harmony export */ });
/* harmony import */ var _styles_to_do_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/to-do.css */ "./src/styles/to-do.css");
/* harmony import */ var _page_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-layout */ "./src/modules/page-layout.js");
/* harmony import */ var _user_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-input */ "./src/modules/user-input.js");




const contentItems = document.querySelector('#content-items');

function toDo(title, description) {
    return {
        title: title,
        description: description,
    };
}

const addToDoButton = () => {
    const addToDoButton = (0,_page_layout__WEBPACK_IMPORTED_MODULE_1__.addButton)(contentItems, '+ To Do', 'todo-add-button', 'button');
    (0,_user_input__WEBPACK_IMPORTED_MODULE_2__.registerAddToDoListener)(addToDoButton);
};

const initToDo = () => {
    addToDoButton();
};



/***/ }),

/***/ "./src/modules/user-input.js":
/*!***********************************!*\
  !*** ./src/modules/user-input.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerAddToDoListener": () => (/* binding */ registerAddToDoListener),
/* harmony export */   "registerRemoveListener": () => (/* binding */ registerRemoveListener),
/* harmony export */   "registerSidebarSubmitListener": () => (/* binding */ registerSidebarSubmitListener),
/* harmony export */   "registerToDoSubmitListener": () => (/* binding */ registerToDoSubmitListener)
/* harmony export */ });
/* harmony import */ var _page_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout */ "./src/modules/page-layout.js");
/* harmony import */ var _to_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do */ "./src/modules/to-do.js");



const sidebarItems = document.querySelector('#sidebar-items');
const contentItems = document.querySelector('#content-items');

const getInput = (id) => {
    return document.getElementById(id).value;
};

const setSidebarFormItemElements = (parent, input) => {
    const title = document.createElement('div');
    const removeButton = (0,_page_layout__WEBPACK_IMPORTED_MODULE_0__.addRemoveButton)(parent, 'X', 'remove-folder-button');

    title.innerHTML = input;
    addFormItemElements(parent, title, removeButton);
};

//Only used for sidebar
const addFormItemElements = (parent, title, removeButton) => {
    parent.appendChild(title);
    parent.appendChild(removeButton);
};

const setSidebarInput = (input) => {
    const sidebarForm = document.querySelector('#sidebar-add-form');
    const item = (0,_page_layout__WEBPACK_IMPORTED_MODULE_0__.addAbove)('sidebar-item', 'div', sidebarItems, sidebarForm);
    setSidebarFormItemElements(item, input);
};

const getSidebarInput = () => {
    const input = getInput('folder-title');
    setSidebarInput(input);
};

const toggleButtonDisplay = (button) => {
    if (button.style.display !== 'none') {
        button.style.display = 'none';
    } else {
        button.style.display = 'inline-block';
    }
};


const addToDo = () => {
    const title = getInput('title');
    const description = getInput('description');
    const toDoItem = (0,_to_do__WEBPACK_IMPORTED_MODULE_1__.toDo)(title, description);
    const addToDoButton = document.querySelector('#todo-add-button');
    (0,_page_layout__WEBPACK_IMPORTED_MODULE_0__.displayToDo)(toDoItem, contentItems, addToDoButton);
};

const registerSidebarSubmitListener = (form, input) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        getSidebarInput();
        input.value = '';
    });
};

const registerToDoSubmitListener = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addToDo();
    });
};

const registerRemoveListener = (button, element) => {
    button.addEventListener('click', () => {
        element.remove();
    });
};

const registerAddToDoListener = (button) => {
    button.addEventListener('click', () => {
        toggleButtonDisplay(button);
        (0,_page_layout__WEBPACK_IMPORTED_MODULE_0__.addToDoForm)(contentItems);
    });
};



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
/************************************************************************/
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _modules_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sidebar */ "./src/modules/sidebar.js");
/* harmony import */ var _modules_to_do__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/to-do */ "./src/modules/to-do.js");



// const content = document.querySelector('#content');
// const sidebar = document.querySelector('#sidebar');

(0,_modules_sidebar__WEBPACK_IMPORTED_MODULE_1__.initSidebar)();
(0,_modules_to_do__WEBPACK_IMPORTED_MODULE_2__.initToDo)();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map