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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n#container {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    height: 100vh;\n}\n\n#content {\n    grid-column: 2/-1;\n    background-color: grey;\n}\n\n#content-top {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    justify-items: center;\n    align-items: center;\n}\n\n#active-folder-heading {\n    font-size: 4.75rem;\n    font-weight: 700;\n}", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA;IACI,SAAS;AACb;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB","sourcesContent":["* {\n    margin: 0;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n#container {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    height: 100vh;\n}\n\n#content {\n    grid-column: 2/-1;\n    background-color: grey;\n}\n\n#content-top {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    justify-items: center;\n    align-items: center;\n}\n\n#active-folder-heading {\n    font-size: 4.75rem;\n    font-weight: 700;\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "#sidebar {\n    grid-column: 1/2;\n    grid-row: 1/-1;\n    background-color: rgb(170, 255, 43);\n    font-size: 2rem;\n    padding: 24px;\n    display: grid;\n    grid-template-rows: 7fr 1fr;\n    width: 400px;\n    justify-items: center;\n    justify-content: center;\n}\n\n#side-bar-items {\n    display: grid;\n}\n\n#sidebar #sidebar-add-button {\n    margin: 10px;\n    width: 100px;\n    height: 40px;\n    background-color: rgb(255, 255, 255);\n    font-size: 1.2rem;\n    border-radius: 20px;\n    font-weight: 700;\n    cursor: pointer;\n}\n\n#sidebar #sidebar-add-button:hover {\n    background-color: rgb(10, 78, 10);\n    color: white;\n    font-weight: 900;\n}\n\n#sidebar #sidebar-add-button:active {\n    color: rgb(187, 159, 0);\n}\n\n#sidebar form {\n    display: grid;\n    grid-template-columns: 1fr;\n    /* position: absolute; */\n}\n\n.sidebar-folder {\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 10fr 1fr;\n    align-items: center;\n    padding: 8px;\n    border-radius: 10px;\n}\n\n.sidebar-folder:hover {\n    background-color: rgba(103, 103, 103, 0.5);\n    font-weight: 700;\n}\n\n.sidebar-folder button {\n    background-color: transparent;\n    border-radius: 18px;\n    height: 27px;\n    width: 29px;\n    font-size: 1.2rem;\n    padding: 0;\n    border-width: 1px;\n}\n\n.sidebar-folder button:hover {\n    background-color: rgba(255, 37, 37, 0.798);\n    font-weight: 900;\n    border-width: 1.5px;\n}\n\n#sidebar form input {\n    background: transparent;\n    border-radius: 10px;\n    border: 1px solid rgba(103, 103, 103, 0.5);\n    padding: 5px;\n    margin: 5px;\n    font-size: 1.8rem;\n}\n\n#sidebar form input:hover {\n    border: 1.2px solid rgb(0, 0, 0);\n}\n\n.sidebar-folder-title {\n    max-width: 350px;\n}", "",{"version":3,"sources":["webpack://./src/styles/sidebar.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,cAAc;IACd,mCAAmC;IACnC,eAAe;IACf,aAAa;IACb,aAAa;IACb,2BAA2B;IAC3B,YAAY;IACZ,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,oCAAoC;IACpC,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,aAAa;IACb,+BAA+B;IAC/B,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,0CAA0C;IAC1C,gBAAgB;AACpB;;AAEA;IACI,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,0CAA0C;IAC1C,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,0CAA0C;IAC1C,YAAY;IACZ,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["#sidebar {\n    grid-column: 1/2;\n    grid-row: 1/-1;\n    background-color: rgb(170, 255, 43);\n    font-size: 2rem;\n    padding: 24px;\n    display: grid;\n    grid-template-rows: 7fr 1fr;\n    width: 400px;\n    justify-items: center;\n    justify-content: center;\n}\n\n#side-bar-items {\n    display: grid;\n}\n\n#sidebar #sidebar-add-button {\n    margin: 10px;\n    width: 100px;\n    height: 40px;\n    background-color: rgb(255, 255, 255);\n    font-size: 1.2rem;\n    border-radius: 20px;\n    font-weight: 700;\n    cursor: pointer;\n}\n\n#sidebar #sidebar-add-button:hover {\n    background-color: rgb(10, 78, 10);\n    color: white;\n    font-weight: 900;\n}\n\n#sidebar #sidebar-add-button:active {\n    color: rgb(187, 159, 0);\n}\n\n#sidebar form {\n    display: grid;\n    grid-template-columns: 1fr;\n    /* position: absolute; */\n}\n\n.sidebar-folder {\n    cursor: pointer;\n    display: grid;\n    grid-template-columns: 10fr 1fr;\n    align-items: center;\n    padding: 8px;\n    border-radius: 10px;\n}\n\n.sidebar-folder:hover {\n    background-color: rgba(103, 103, 103, 0.5);\n    font-weight: 700;\n}\n\n.sidebar-folder button {\n    background-color: transparent;\n    border-radius: 18px;\n    height: 27px;\n    width: 29px;\n    font-size: 1.2rem;\n    padding: 0;\n    border-width: 1px;\n}\n\n.sidebar-folder button:hover {\n    background-color: rgba(255, 37, 37, 0.798);\n    font-weight: 900;\n    border-width: 1.5px;\n}\n\n#sidebar form input {\n    background: transparent;\n    border-radius: 10px;\n    border: 1px solid rgba(103, 103, 103, 0.5);\n    padding: 5px;\n    margin: 5px;\n    font-size: 1.8rem;\n}\n\n#sidebar form input:hover {\n    border: 1.2px solid rgb(0, 0, 0);\n}\n\n.sidebar-folder-title {\n    max-width: 350px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/to-do-folders.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/to-do-folders.css ***!
  \****************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".todo-folder {\n    grid-template: repeat(auto-fill, 300px) / repeat(auto-fill, minmax(260px, 1fr));\n}", "",{"version":3,"sources":["webpack://./src/styles/to-do-folders.css"],"names":[],"mappings":"AAAA;IACI,+EAA+E;AACnF","sourcesContent":[".todo-folder {\n    grid-template: repeat(auto-fill, 300px) / repeat(auto-fill, minmax(260px, 1fr));\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "#content {\n    display: grid;\n    grid-template-rows: 1fr 8fr;\n}\n\n#todo-clear-mode-button {\n    width: 175px;\n    font-size: 1.2rem;\n    border-radius: 12px;\n    height: 58px;\n    margin: 12px;\n    background-color: rgb(255, 198, 198);\n    font-weight: 500;\n}\n\n#todo-clear-mode-button:hover {\n    background-color: rgb(255, 171, 171);\n}\n\n#content-items {\n    /* display: grid;\n    grid-template: repeat(auto-fill, minmax(200px, 1fr)) / repeat(auto-fill, minmax(260px, 1fr)); */\n    margin: 16px;\n    padding: 16px;\n}\n\n#todo-inputs {\n    display: grid;\n}\n\n#todo-add-button {\n    align-self: center;\n    justify-self: center;\n    height: 80px;\n    width: 160px;\n    border-radius: 50px;\n    font-size: 2rem;\n    font-weight: 500;\n}\n\n#todo-add-button:hover {\n    background-color: rgb(0, 255, 0);\n    font-weight: 700;\n}\n\n/* To Do Form */\n\n#todo-add-form {\n    display: none;\n}\n\n#todo-add-form form {\n    background-color: white;\n    padding: 8px;\n    border-radius: 16px;\n    display: grid;\n    /* grid-template-rows: 1fr 2fr 3fr 1fr 5fr 1fr; */\n}\n\n#todo-add-form input,\n#todo-add-form textarea,\n#todo-add-form fieldset {\n    width: 250px;\n    font-size: 1rem;\n    border: 1px solid green;\n    padding: 4px;\n}\n\n#todo-add-form fieldset {\n    border: 0;\n}\n\n#todo-add-form fieldset div {\n    display: grid;\n    grid-template: 1fr / 1fr 5fr;\n    align-items: center;\n}\n\n#todo-add-form fieldset div input {\n    margin: 0.5rem;\n    width: 20px;\n}\n\n#todo-add-form button {\n    border-radius: 12px;\n}\n\n/* To Do */\n\n.todo {\n    background-color: white;\n    padding: 16px;\n    margin: 16px;\n    border-radius: 16px;\n    display: grid;\n    cursor: pointer;\n}\n\n.todo:hover {\n    background-color: rgb(24, 244, 24);\n    transition: background-color 0.15s ease-in-out;\n}\n\n.todo .title {\n    font-weight: bold;\n    font-size: 2rem;\n    justify-self: center;\n}\n\n.todo .priority {\n    justify-self: center;\n}", "",{"version":3,"sources":["webpack://./src/styles/to-do.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,oCAAoC;IACpC,gBAAgB;AACpB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI;mGAC+F;IAC/F,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,gCAAgC;IAChC,gBAAgB;AACpB;;AAEA,eAAe;;AAEf;IACI,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,iDAAiD;AACrD;;AAEA;;;IAGI,YAAY;IACZ,eAAe;IACf,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,WAAW;AACf;;AAEA;IACI,mBAAmB;AACvB;;AAEA,UAAU;;AAEV;IACI,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,kCAAkC;IAClC,8CAA8C;AAClD;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB","sourcesContent":["#content {\n    display: grid;\n    grid-template-rows: 1fr 8fr;\n}\n\n#todo-clear-mode-button {\n    width: 175px;\n    font-size: 1.2rem;\n    border-radius: 12px;\n    height: 58px;\n    margin: 12px;\n    background-color: rgb(255, 198, 198);\n    font-weight: 500;\n}\n\n#todo-clear-mode-button:hover {\n    background-color: rgb(255, 171, 171);\n}\n\n#content-items {\n    /* display: grid;\n    grid-template: repeat(auto-fill, minmax(200px, 1fr)) / repeat(auto-fill, minmax(260px, 1fr)); */\n    margin: 16px;\n    padding: 16px;\n}\n\n#todo-inputs {\n    display: grid;\n}\n\n#todo-add-button {\n    align-self: center;\n    justify-self: center;\n    height: 80px;\n    width: 160px;\n    border-radius: 50px;\n    font-size: 2rem;\n    font-weight: 500;\n}\n\n#todo-add-button:hover {\n    background-color: rgb(0, 255, 0);\n    font-weight: 700;\n}\n\n/* To Do Form */\n\n#todo-add-form {\n    display: none;\n}\n\n#todo-add-form form {\n    background-color: white;\n    padding: 8px;\n    border-radius: 16px;\n    display: grid;\n    /* grid-template-rows: 1fr 2fr 3fr 1fr 5fr 1fr; */\n}\n\n#todo-add-form input,\n#todo-add-form textarea,\n#todo-add-form fieldset {\n    width: 250px;\n    font-size: 1rem;\n    border: 1px solid green;\n    padding: 4px;\n}\n\n#todo-add-form fieldset {\n    border: 0;\n}\n\n#todo-add-form fieldset div {\n    display: grid;\n    grid-template: 1fr / 1fr 5fr;\n    align-items: center;\n}\n\n#todo-add-form fieldset div input {\n    margin: 0.5rem;\n    width: 20px;\n}\n\n#todo-add-form button {\n    border-radius: 12px;\n}\n\n/* To Do */\n\n.todo {\n    background-color: white;\n    padding: 16px;\n    margin: 16px;\n    border-radius: 16px;\n    display: grid;\n    cursor: pointer;\n}\n\n.todo:hover {\n    background-color: rgb(24, 244, 24);\n    transition: background-color 0.15s ease-in-out;\n}\n\n.todo .title {\n    font-weight: bold;\n    font-size: 2rem;\n    justify-self: center;\n}\n\n.todo .priority {\n    justify-self: center;\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles/to-do-folders.css":
/*!**************************************!*\
  !*** ./src/styles/to-do-folders.css ***!
  \**************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_to_do_folders_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./to-do-folders.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/to-do-folders.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_to_do_folders_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_to_do_folders_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_to_do_folders_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_to_do_folders_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony export */   "addToDoLabelAttributes": () => (/* binding */ addToDoLabelAttributes),
/* harmony export */   "setDateInputAttributes": () => (/* binding */ setDateInputAttributes),
/* harmony export */   "setRadioAttributes": () => (/* binding */ setRadioAttributes)
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

const setRadioAttributes = (element, label, name, value) => {
    const id = value.toLowerCase().replace(/\s/g, '-');
    element.setAttribute('type', 'radio');
    element.setAttribute('id', id);
    element.setAttribute('name', name);
    element.setAttribute('value', id);
    label.setAttribute('for', id);
    label.innerHTML = value;
};

const setDateInputAttributes = (element) => {
    element.setAttribute('type', 'date');
};

const setFormElementAttributes = (form, action, method) => {
    form.setAttribute('action', action);
    form.setAttribute('method', method);
};

const addSidebarFormAttributes = (form, input) => {
    setTextInputAttributes(input, 'text', 'folder-title', '15');
    setFormElementAttributes(form, '', 'post');
};

const addToDoFormAttributes = (form, title, desc) => {
    setFormElementAttributes(form, '', 'post');
    setTextInputAttributes(title, 'text', 'title-input', '10');
    setTextAreaAttributes(desc, 'description-input', '26', '5');
};

const addToDoLabelAttributes = (title, desc) => {
    setLabelAttributes(title, 'for', 'title-input', 'Title: ');
    setLabelAttributes(desc, 'for', 'description-input', 'Description');
};

const setLabelAttributes = (item, attType, att, text) => {
    item.setAttribute(attType, att);
    item.setAttribute('class', 'form-label');
    item.innerHTML = text;
};





/***/ }),

/***/ "./src/modules/clear-mode.js":
/*!***********************************!*\
  !*** ./src/modules/clear-mode.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClearEventListener": () => (/* binding */ addClearEventListener)
/* harmony export */ });
const clearButton = document.querySelector('#todo-clear-mode-button');
let clearMode = false;

//Call on each to do created
const addClearEventListener = (element) => {
    element.addEventListener('click', () => {
        if (clearMode) {
            element.remove();
        } else {
            //Expand to do
        }
    });
};

const toggleClearStyle = (clearMode) => {
    if (clearMode) {
        clearButton.style.boxShadow = '0 0 10px red';
        clearButton.style.fontWeight = '900';
        clearButton.style.fontSize = '1.4rem';
        clearButton.style.color = 'red';
        clearButton.style.transition = 'box-shadow 50ms ease-in, ' +
            'font-weight 50ms ease-in, ' +
            'font-size 50ms ease-in, ' +
            'color 50ms ease-in';

    } else {
        clearButton.style.boxShadow = '';
        clearButton.style.fontWeight = '500';
        clearButton.style.fontSize = '1.2rem';
        clearButton.style.color = 'black';
    }
};

clearButton.addEventListener('click', () => {
    if (!clearMode) {
        clearMode = true;
        toggleClearStyle(clearMode);
    } else {
        clearMode = false;
        toggleClearStyle(clearMode);
    }
});



/***/ }),

/***/ "./src/modules/form-dom.js":
/*!*********************************!*\
  !*** ./src/modules/form-dom.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addSidebarForm": () => (/* binding */ addSidebarForm),
/* harmony export */   "addToDoForm": () => (/* binding */ addToDoForm)
/* harmony export */ });
/* harmony import */ var _user_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-input */ "./src/modules/user-input.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/modules/attributes.js");
/* harmony import */ var _page_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-layout */ "./src/modules/page-layout.js");




const addFormParent = (parent, id) => {
    const element = document.createElement('div');
    element.setAttribute('id', id);
    parent.appendChild(element);
    return element;
};

const addFormElement = (parent) => {
    const element = document.createElement('form');
    parent.appendChild(element);
    return element;
};

const addFormToDOM = (parent, id) => {
    const formParent = addFormParent(parent, id);
    const form = addFormElement(formParent);
    return form;
};

const addSidebarForm = (parent) => {
    const form = addFormToDOM(parent, 'sidebar-add-form');
    const input = addFormInputElement('input', form);

    (0,_attributes__WEBPACK_IMPORTED_MODULE_1__.addSidebarFormAttributes)(form, input);
    (0,_user_input__WEBPACK_IMPORTED_MODULE_0__.registerSidebarSubmitListener)(form, input);
    return form;
};

const addToDoForm = (parent) => {
    const form = addFormToDOM(parent, 'todo-add-form');
    const titleLabel = addFormLabelElement(form);
    const title = addFormInputElement('input', form);
    (0,_page_layout__WEBPACK_IMPORTED_MODULE_2__.setToDoDueDateInput)(form);
    addToDoPriorityInput(form);
    const descLabel = addFormLabelElement(form);
    const description = addFormInputElement('textarea', form);
    const submitButton = addButton(form, 'submit', 'todo-submit-button', 'submit');

    (0,_attributes__WEBPACK_IMPORTED_MODULE_1__.addToDoFormAttributes)(form, title, description);
    (0,_attributes__WEBPACK_IMPORTED_MODULE_1__.addToDoLabelAttributes)(titleLabel, descLabel);

    (0,_user_input__WEBPACK_IMPORTED_MODULE_0__.registerToDoSubmitListener)(form);
};

const addFormInputElement = (type, parent) => {
    const input = document.createElement(type);
    parent.appendChild(input);
    return input;
};

const addFormDateElements = (parent) => {
    const dateInput = addFormInputElement('input', parent);
    (0,_attributes__WEBPACK_IMPORTED_MODULE_1__.setDateInputAttributes)(dateInput);
};

const addFormRadioElements = (parent, name, option) => {
    const radioInput = document.createElement('input');
    const label = document.createElement('label');

    (0,_attributes__WEBPACK_IMPORTED_MODULE_1__.setRadioAttributes)(radioInput, label, name, option);
    parent.appendChild(radioInput);
    parent.appendChild(label);
};

const addFormLabelElement = (parent) => {
    const label = document.createElement('label');
    parent.appendChild(label);
    return label;
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
/* harmony export */   "addFolderChildElements": () => (/* binding */ addFolderChildElements),
/* harmony export */   "displayToDo": () => (/* binding */ displayToDo),
/* harmony export */   "hideElements": () => (/* binding */ hideElements),
/* harmony export */   "setToDoDueDateInput": () => (/* binding */ setToDoDueDateInput),
/* harmony export */   "toggleToDoFormVisible": () => (/* binding */ toggleToDoFormVisible)
/* harmony export */ });
/* harmony import */ var _clear_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear-mode */ "./src/modules/clear-mode.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/modules/attributes.js");




const addContent = (parent, text, className, elementType) => {
    const element = document.createElement(elementType);
    element.textContent = text;
    element.classList.add(className);
    parent.appendChild(element);
};

const addFolderChildElements = (parent, title, removeButton) => {
    parent.appendChild(title);
    parent.appendChild(removeButton);
};

const setToDoDueDateInput = (form) => {
    const today = new Date();
    const minDate = today.format('yyyy-MM-dd');
    console.log(minDate);
    const id = 'duedate-input';
    const name = 'todo-duedate';
    const value = 'todo-duedate';//today
    //const max = ;
    addFormDateElements(form);
};

const setRadioFormElements = (fieldset, name, optionsAr) => {
    for (let i = 0; i < optionsAr.length; i++) {
        const parentDiv = document.createElement('div');
        fieldset.appendChild(parentDiv);
        addFormRadioElements(parentDiv, name, optionsAr[i]);
    }
};

const createFieldset = (legendText) => {
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');

    fieldset.appendChild(legend);
    legend.innerHTML = legendText;
    return fieldset;
};

//Retitle
const addToDoPriorityInput = (form) => {
    const optionsAr = ['Low', 'Medium', 'High'];
    const fieldset = createFieldset('Priority: ');
    setRadioFormElements(fieldset, 'priority-input', optionsAr);
    form.appendChild(fieldset);
};

const toggleToDoFormVisible = () => {
    const toDoForm = document.querySelector('#todo-add-form');

    if (toDoForm.style.display === 'none') {
        toDoForm.style.display = 'grid';
    } else if (toDoForm.style.display === 'grid') {
        toDoForm.style.display = 'none';
    } else {
        toDoForm.style.display = 'grid';
    }
};

const displayToDo = (toDoItem, folder) => {
    const toDoInputs = document.querySelector('#todo-inputs');
    const toDoParent = (0,_attributes__WEBPACK_IMPORTED_MODULE_1__.addAttributes)('', 'class', 'todo', 'div');
    const titleDiv = (0,_attributes__WEBPACK_IMPORTED_MODULE_1__.addAttributes)(toDoItem.title, 'class', 'title', 'div');
    const dueDateDiv = (0,_attributes__WEBPACK_IMPORTED_MODULE_1__.addAttributes)(toDoItem.dueDate, 'class', 'due-date', 'div');
    const priorityDiv = (0,_attributes__WEBPACK_IMPORTED_MODULE_1__.addAttributes)(toDoItem.priority, 'class', 'priority', 'div');
    const descDiv = (0,_attributes__WEBPACK_IMPORTED_MODULE_1__.addAttributes)(toDoItem.description, 'class', 'description', 'div');

    folder.insertBefore(toDoParent, toDoInputs);
    toDoParent.appendChild(titleDiv);
    toDoParent.appendChild(dueDateDiv);
    toDoParent.appendChild(priorityDiv);
    toDoParent.appendChild(descDiv);

    (0,_clear_mode__WEBPACK_IMPORTED_MODULE_0__.addClearEventListener)(toDoParent);
};

const addButtonType = (button, type) => {
    button.setAttribute('type', type);
};

const addAbove = (className, elementType, parent, lowerDiv) => {
    const element = (0,_attributes__WEBPACK_IMPORTED_MODULE_1__.addAttributes)('', 'class', className, elementType);
    parent.insertBefore(element, lowerDiv);
    return element;
};

const addButton = (parent, text, id, type) => {
    const button = (0,_attributes__WEBPACK_IMPORTED_MODULE_1__.addAttributes)(text, 'id', id, 'button');
    addButtonType(button, type);
    parent.appendChild(button);
    return button;
};

const hideElements = (elements) => {
    elements.forEach((element) => {
        element.style.display = 'none';
    });
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
/* harmony import */ var _form_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-dom */ "./src/modules/form-dom.js");




const sidebarFolders = document.querySelector('#sidebar-folders');

const initSidebar = () => {
    addSidebarInput();
};

const addSidebarInput = () => {
    const sidebarForm = (0,_form_dom__WEBPACK_IMPORTED_MODULE_2__.addSidebarForm)(sidebarFolders);
    const sidebarButton = (0,_page_layout__WEBPACK_IMPORTED_MODULE_1__.addButton)(sidebarForm, '+ Folder', 'sidebar-add-button', 'submit');
};



/***/ }),

/***/ "./src/modules/to-do-folders.js":
/*!**************************************!*\
  !*** ./src/modules/to-do-folders.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToDoFolder": () => (/* binding */ addToDoFolder),
/* harmony export */   "getActiveFolder": () => (/* binding */ getActiveFolder),
/* harmony export */   "initToDoFolder": () => (/* binding */ initToDoFolder),
/* harmony export */   "setActiveFolder": () => (/* binding */ setActiveFolder)
/* harmony export */ });
/* harmony import */ var _styles_to_do_folders_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/to-do-folders.css */ "./src/styles/to-do-folders.css");
/* harmony import */ var _page_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-layout */ "./src/modules/page-layout.js");
/* harmony import */ var _user_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-input */ "./src/modules/user-input.js");




const contentItems = document.querySelector('#content-items');
const toDoInputs = document.querySelector('#todo-inputs');
let activeFolder = null;

const initToDoFolder = () => {
    const folderName = 'Projects';
    const folder = addToDoFolder(folderName);
    const sidebarFolder = (0,_user_input__WEBPACK_IMPORTED_MODULE_2__.setSidebarInput)(folderName, folder);
    activeFolder = setActiveFolder(sidebarFolder, folder);
};

const addToDoFolder = (folderName) => {
    const folder = document.createElement('div');
    const folderClass = folderName.replace(/\s/g, '-');
    folder.classList.add('todo-folder', folderClass);
    contentItems.appendChild(folder);
    return folder;
};

const setActiveFolder = (sidebarFolder, folder) => {
    activeFolder = folder;
    hideInactiveFolders(folder);
    folder.appendChild(toDoInputs);
    changeFolderHeading(sidebarFolder);
    return activeFolder;
};

const getActiveFolder = () => {
    return activeFolder;
};

const hideInactiveFolders = (activeFolder) => {
    const folders = document.querySelectorAll('.todo-folder');
    (0,_page_layout__WEBPACK_IMPORTED_MODULE_1__.hideElements)(folders);
    activeFolder.style.display = 'grid';
    contentItems.style.display = 'block';       //Possible remove
};

const changeFolderHeading = (sidebarFolder) => {
    const folderHeading = document.querySelector('#active-folder-heading');
    const title = sidebarFolder.querySelector('.sidebar-folder-title');
    folderHeading.innerHTML = title.innerHTML;
};




/***/ }),

/***/ "./src/modules/to-do.js":
/*!******************************!*\
  !*** ./src/modules/to-do.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToDo": () => (/* binding */ addToDo),
/* harmony export */   "initToDo": () => (/* binding */ initToDo)
/* harmony export */ });
/* harmony import */ var _styles_to_do_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/to-do.css */ "./src/styles/to-do.css");
/* harmony import */ var _page_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-layout */ "./src/modules/page-layout.js");
/* harmony import */ var _user_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-input */ "./src/modules/user-input.js");
/* harmony import */ var _to_do_folders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./to-do-folders */ "./src/modules/to-do-folders.js");
/* harmony import */ var _form_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-dom */ "./src/modules/form-dom.js");






const toDoInputs = document.querySelector('#todo-inputs');

function toDo(title, dueDate, priority, description) {
    return {
        title: title,
        dueDate: dueDate,
        priority: priority,
        description: description,
    };
}

const addToDoButton = () => {
    const addToDoButton = (0,_page_layout__WEBPACK_IMPORTED_MODULE_1__.addButton)(toDoInputs, '+ To Do', 'todo-add-button', 'button');
    const toDoForm = document.querySelector('#todo-add-form');

    (0,_user_input__WEBPACK_IMPORTED_MODULE_2__.registerAddToDoListener)(addToDoButton);
};

const addToDo = () => {
    const title = (0,_user_input__WEBPACK_IMPORTED_MODULE_2__.getInput)('title-input');
    const dueDate = new Date();             //
    const year = dueDate.getFullYear();     //
    const priority = (0,_user_input__WEBPACK_IMPORTED_MODULE_2__.getRadioInput)('priority-input');
    const description = (0,_user_input__WEBPACK_IMPORTED_MODULE_2__.getInput)('description-input');
    const toDoItem = toDo(title, year, priority, description);
    const folder = (0,_to_do_folders__WEBPACK_IMPORTED_MODULE_3__.getActiveFolder)();


    (0,_page_layout__WEBPACK_IMPORTED_MODULE_1__.displayToDo)(toDoItem, folder);
};

const initToDo = () => {
    (0,_form_dom__WEBPACK_IMPORTED_MODULE_4__.addToDoForm)(toDoInputs);
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
/* harmony export */   "getInput": () => (/* binding */ getInput),
/* harmony export */   "getRadioInput": () => (/* binding */ getRadioInput),
/* harmony export */   "registerAddToDoListener": () => (/* binding */ registerAddToDoListener),
/* harmony export */   "registerSidebarSubmitListener": () => (/* binding */ registerSidebarSubmitListener),
/* harmony export */   "registerToDoSubmitListener": () => (/* binding */ registerToDoSubmitListener),
/* harmony export */   "setSidebarInput": () => (/* binding */ setSidebarInput)
/* harmony export */ });
/* harmony import */ var _page_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-layout */ "./src/modules/page-layout.js");
/* harmony import */ var _to_do_folders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do-folders */ "./src/modules/to-do-folders.js");
/* harmony import */ var _to_do__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-do */ "./src/modules/to-do.js");




const sidebarFolders = document.querySelector('#sidebar-folders');

const getInput = (id) => {
    return document.getElementById(id).value;
};

const getRadioInput = (name) => {
    const radios = document.getElementsByName(name);

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
};

const setActiveFolderOnClick = (sidebarFolder, folder) => {
    const title = sidebarFolder.querySelector('.sidebar-folder-title');
    title.addEventListener('click', () => {
        let activeFolder = (0,_to_do_folders__WEBPACK_IMPORTED_MODULE_1__.setActiveFolder)(sidebarFolder, folder);
    });
};

/* Sidebar */

const setFolderElements = (parent, input, folder) => {
    const title = document.createElement('div');
    const removeButton = (0,_page_layout__WEBPACK_IMPORTED_MODULE_0__.addButton)(parent, 'X', 'remove-folder-button', 'button');
    title.innerHTML = input;
    (0,_page_layout__WEBPACK_IMPORTED_MODULE_0__.addFolderChildElements)(parent, title, removeButton);
    registerRemoveFolderListener(removeButton, folder, parent);
    title.setAttribute('class', 'sidebar-folder-title');
};


const setSidebarInput = (input, folder) => {
    const sidebarForm = document.querySelector('#sidebar-add-form');
    const item = (0,_page_layout__WEBPACK_IMPORTED_MODULE_0__.addAbove)('sidebar-folder', 'div', sidebarFolders, sidebarForm);
    setFolderElements(item, input, folder);
    setActiveFolderOnClick(item, folder);
    return item;
};

const getSidebarInput = () => {
    const input = getInput('folder-title');
    return input;
};

const manageSidebarInput = () => {
    const input = getSidebarInput();
    const folder = (0,_to_do_folders__WEBPACK_IMPORTED_MODULE_1__.addToDoFolder)(input);

    const sidebarFolder = setSidebarInput(input, folder);
};

const registerSidebarSubmitListener = (form, input) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        manageSidebarInput();
        resetForm(form);
    });
};

const removeFolder = (folder, sidebarElement) => {
    folder.remove();
    sidebarElement.remove();
};

const removeFolderContentItems = () => {
    const folderHeader = document.querySelector('#active-folder-heading');
    folderHeader.innerHTML = '';
};

const registerRemoveFolderListener = (button, folder, sidebarElement) => {
    button.addEventListener('click', () => {
        removeFolderContentItems();
        removeFolder(folder, sidebarElement);
    });
};

/* To Do */

const toggleAddToDoButtonDisplay = () => {
    const button = document.querySelector('#todo-add-button');
    if (button.style.display !== 'none') {
        button.style.display = 'none';
    } else {
        button.style.display = 'inline-block';
    }
};



const resetForm = (form) => {
    form.reset();
};

const registerAddToDoListener = (button) => {
    button.addEventListener('click', () => {
        toggleAddToDoButtonDisplay();
        (0,_page_layout__WEBPACK_IMPORTED_MODULE_0__.toggleToDoFormVisible)();
    });
};

const registerToDoSubmitListener = (form) => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        (0,_to_do__WEBPACK_IMPORTED_MODULE_2__.addToDo)();
        toggleAddToDoButtonDisplay();
        (0,_page_layout__WEBPACK_IMPORTED_MODULE_0__.toggleToDoFormVisible)();
        resetForm(form);
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
/* harmony import */ var _modules_to_do_folders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/to-do-folders */ "./src/modules/to-do-folders.js");





(0,_modules_to_do__WEBPACK_IMPORTED_MODULE_2__.initToDo)();
(0,_modules_sidebar__WEBPACK_IMPORTED_MODULE_1__.initSidebar)();
(0,_modules_to_do_folders__WEBPACK_IMPORTED_MODULE_3__.initToDoFolder)();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map