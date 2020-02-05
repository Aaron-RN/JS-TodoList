/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"html { box-sizing: border-box; }\\r\\n\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n/* Used for Debugging purposes */\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  -webkit-transition-duration: 0.25s;\\r\\n  -moz-transition-duration: 0.25s;\\r\\n  transition-duration: 0.25s;\\r\\n}\\r\\n\\r\\nbody{\\r\\n  font-size: 18px;\\r\\n}\\r\\ninput[type=\\\"text\\\"]{\\r\\n  outline: none;\\r\\n  border: 1px solid midnightblue;\\r\\n  border-radius: 8px;\\r\\n  padding: 8px;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  text-align: center;\\r\\n  font-size: 44px;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  text-align: center;\\r\\n  font-size: 36px;\\r\\n  margin: auto\\r\\n}\\r\\n\\r\\nh3 {\\r\\n  font-size: 30px;\\r\\n}\\r\\n\\r\\n.container{\\r\\n  padding: 0 5em 0 5em;  \\r\\n}\\r\\n\\r\\n.center{\\r\\n  display: block;\\r\\n  text-align: center;\\r\\n  margin: 0 auto;\\r\\n  vertical-align: middle;\\r\\n}\\r\\n.label{\\r\\n  padding: 8px;\\r\\n  margin: 12px 8px;\\r\\n}\\r\\n\\r\\n.button-todo {\\r\\n  outline: none;\\r\\n  border: 2px solid midnightblue;\\r\\n  border-radius: 15px;\\r\\n  box-shadow: 3px 3px rgba(0,0,0,0.2);\\r\\n  padding: 4px 6px 4px 6px;\\r\\n  font-size: 18px;\\r\\n  font-weight: 500;\\r\\n  background: white;\\r\\n  cursor: pointer;\\r\\n}\\r\\n.button-todo:hover{\\r\\n  border-color: goldenrod;\\r\\n  transform:scale(1.03);\\r\\n  -moz-transform:scale(1.03);\\r\\n  -webkit-transform:scale(1.03);\\r\\n  -ms-transform:scale(1.03);\\r\\n  -o-transform:scale(1.03);\\r\\n}\\r\\n\\r\\n.button {\\r\\n  outline: none;\\r\\n  border: 2px solid midnightblue;\\r\\n  border-radius: 15px;\\r\\n  box-shadow: 3px 3px rgba(0,0,0,0.2);\\r\\n  padding: 8px 10px 8px 10px;\\r\\n  font-size: 24px;\\r\\n  font-weight: 500;\\r\\n  background: white;\\r\\n  cursor: pointer;\\r\\n}\\r\\n.button:hover{\\r\\n  border-color: goldenrod;\\r\\n  transform:scale(1.03);\\r\\n  -moz-transform:scale(1.03);\\r\\n  -webkit-transform:scale(1.03);\\r\\n  -ms-transform:scale(1.03);\\r\\n  -o-transform:scale(1.03);\\r\\n}\\r\\n\\r\\n.btn-plus:before{\\r\\n  content: \\\"+\\\";\\r\\n  font-size: 30px;\\r\\n  font-weight: bolder;\\r\\n  display: inline-block;\\r\\n  vertical-align: middle;\\r\\n  margin: 0 4px 4px 0;\\r\\n}\\r\\n\\r\\n.btn-plus:hover:before{\\r\\n  transform:scale(1.3);\\r\\n  -moz-transform:scale(1.3);\\r\\n  -webkit-transform:scale(1.3);\\r\\n  -ms-transform:scale(1.3);\\r\\n  -o-transform:scale(1.3);\\r\\n}\\r\\n\\r\\n.todo{\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  width: 450px;\\r\\n  border: 2px solid lightgrey;\\r\\n  border-radius: 15px;\\r\\n  box-shadow: 3px 3px rgba(0,0,0,0.2);\\r\\n  margin-bottom: 10px;\\r\\n}\\r\\n.todo *{\\r\\n  padding: 8px;\\r\\n  font-size: 22px;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".modal{\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  z-index: 999;\\r\\n  background-color: rgba(0,0,0,0.3);\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  overflow: scroll;\\r\\n  }\\r\\n\\r\\n.modal-content{\\r\\n  background: white;\\r\\n  max-width: 600px;\\r\\n  width: auto;\\r\\n  min-height: 200px;\\r\\n  border: 1px solid black;\\r\\n  border-radius: 6px;\\r\\n  box-shadow: 5px 10px rgba(0,0,0,0.2);\\r\\n  margin: 10% auto;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.exit{\\r\\n  width: 40px;\\r\\n  height: 40px;\\r\\n  padding: 8px;\\r\\n  position: relative;\\r\\n  display: block;\\r\\n  left: calc(96% - 10px);\\r\\n  color: white;\\r\\n  background-color: darkred;\\r\\n  text-align: center;\\r\\n  vertical-align: middle;\\r\\n  cursor: pointer;\\r\\n}\\r\\n.exit:hover{\\r\\n  background-color: red;\\r\\n}\\r\\n\\r\\n.show{ display: block; }\\r\\n\\r\\n.hide{ display: none; }\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/modal.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/main.css?");

/***/ }),

/***/ "./src/css/modal.css":
/*!***************************!*\
  !*** ./src/css/modal.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./modal.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/modal.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/modal.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _views_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/home */ \"./src/views/home.js\");\n/* harmony import */ var _models_project_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/project-list */ \"./src/models/project-list.js\");\n\n\n\n\nconst home = new _views_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"](new _models_project_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"]());\n\nhome.render();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/models/project-list.js":
/*!************************************!*\
  !*** ./src/models/project-list.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/models/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/models/todo.js\");\n\n\n\nclass ProjectList {\n  constructor() {\n    const storedProjects = localStorage.getItem('projects');\n    if (storedProjects) {\n      this.projects = JSON.parse(storedProjects).map((storedProject) => {\n        const project = Object.assign(new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), storedProject);\n        project.todos = project.todos.map((storedTodo) => Object.assign(new _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), storedTodo));\n\n        return project;\n      });\n    } else {\n      this.projects = [];\n    }\n  }\n\n  getProject(projectId) {\n    return this.projects.find((project) => project.id === projectId);\n  }\n\n  addProject(project) {\n    this.projects.push(project);\n    this.save();\n  }\n\n  removeProject(projectId) {\n    const index = this.project.findIndex((project) => project.id === projectId);\n    this.project.splice(index, 1);\n    this.save();\n  }\n\n  save() {\n    localStorage.setItem('projects', JSON.stringify(this.projects));\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectList);\n\n\n//# sourceURL=webpack:///./src/models/project-list.js?");

/***/ }),

/***/ "./src/models/project.js":
/*!*******************************!*\
  !*** ./src/models/project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Project {\n  constructor(title) {\n    this.id = `project_${Math.random().toString(36).substr(2, 9)}`;\n    this.title = title;\n    this.todos = [];\n  }\n\n  addTodo(todo) {\n    this.todos.push(todo);\n  }\n\n  removeTodo(todoId) {\n    const index = this.todos.findIndex((todo) => todo.id === todoId);\n    this.todos.splice(index, 1);\n  }\n\n  toggleTodo(todoId) {\n    const todo = this.todos.find((t) => t.id === todoId);\n    todo.toggle();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\n\n//# sourceURL=webpack:///./src/models/project.js?");

/***/ }),

/***/ "./src/models/todo.js":
/*!****************************!*\
  !*** ./src/models/todo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Todo {\n  constructor(title, description, dueDate, priority) {\n    this.id = `todo_${Math.random().toString(36).substr(2, 9)}`;\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.checked = false;\n  }\n\n  toggle() {\n    this.checked = !this.checked;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\n\n\n//# sourceURL=webpack:///./src/models/todo.js?");

/***/ }),

/***/ "./src/views/home.js":
/*!***************************!*\
  !*** ./src/views/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/views/modal.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/views/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/views/todo.js\");\n\n\n\n\nclass Home {\n  constructor(projectList) {\n    this.projectList = projectList;\n    this.modal = _modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    this.modalDiv = this.modal.init();\n    this.content = document.createElement('div');\n    this.content.setAttribute('id', 'main');\n    this.content.classList.add('container');\n\n    const header = document.createElement('h1');\n    header.innerHTML = 'Todo List';\n\n    this.newProjectBtn = document.createElement('button');\n    this.newProjectBtn.id = 'new-project';\n    this.newProjectBtn.classList.add('button');\n    this.newProjectBtn.classList.add('btn-plus');\n    this.newProjectBtn.innerHTML = 'New Project';\n    this.newProjectBtn.addEventListener('click', this.modal.showNewProject);\n\n    this.content.appendChild(header);\n    this.content.appendChild(this.newProjectBtn);\n\n    this.modal.addProjectBtn(() => {\n      const project = this.modal.getNewProject();\n      if (!project) { return; }\n\n      this.projectList.addProject(project);\n      this.renderNewProject(project);\n      this.modal.hide();\n    });\n\n    this.modal.addTodoBtn(() => {\n      const { todo, projectId } = this.modal.getNewTodo();\n      if (!todo || !projectId) { return; }\n\n      this.projectList.getProject(projectId).addTodo(todo);\n      this.projectList.save();\n      this.renderNewTodo(todo, projectId);\n      this.modal.hide();\n    });\n  }\n\n  renderNewTodo(todo, projectId) {\n    const todoView = new _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"](todo, projectId);\n\n    todoView.todoChecked.addEventListener('click', () => {\n      const project = this.projectList.getProject(projectId);\n      project.toggleTodo(todo.id);\n      this.projectList.save();\n    });\n\n    todoView.deleteTodoBtn.addEventListener('click', () => {\n      const project = this.projectList.getProject(projectId);\n      todoView.todoContent.remove();\n      project.removeTodo(todo.id);\n      this.projectList.save();\n    });\n\n    todoView.render();\n  }\n\n  renderNewProject(project) {\n    const projectView = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](project);\n    projectView.newTodoBtn.addEventListener('click', (e) => {\n      const projectId = e.target.parentNode.id;\n      this.modal.showNewTodo(projectId);\n    });\n    projectView.render();\n    project.todos.forEach((todo) => { this.renderNewTodo(todo, project.id); });\n  }\n\n  render() {\n    document.body.appendChild(this.modalDiv);\n    document.body.appendChild(this.content);\n    this.projectList.projects.forEach((project) => { this.renderNewProject(project); });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n\n//# sourceURL=webpack:///./src/views/home.js?");

/***/ }),

/***/ "./src/views/modal.js":
/*!****************************!*\
  !*** ./src/views/modal.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/modal.css */ \"./src/css/modal.css\");\n/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_modal_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/project */ \"./src/models/project.js\");\n/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/todo */ \"./src/models/todo.js\");\n\n\n\n\n// Generates two new elements and returns the parent element\nfunction NewInputElement(type, innerhtml, placeholder = '') {\n  const todoTitleLabel = document.createElement('div');\n  todoTitleLabel.classList = 'label center';\n  todoTitleLabel.innerHTML = innerhtml;\n\n  let inputElement;\n  if (type === 'textarea') {\n    inputElement = document.createElement('textarea');\n    inputElement.setAttribute('rows', '4');\n    inputElement.setAttribute('cols', '50');\n    inputElement.setAttribute('maxlength', '100');\n  } else {\n    inputElement = document.createElement('input');\n    inputElement.setAttribute('type', type);\n  }\n  if (type === 'text') {\n    inputElement.setAttribute('placeholder', placeholder);\n    inputElement.setAttribute('maxlength', '25');\n  }\n  if (type === 'number' || type === 'range') {\n    inputElement.setAttribute('defaultValue', '1');\n    inputElement.setAttribute('value', '1');\n    inputElement.setAttribute('min', '1');\n    inputElement.setAttribute('max', '3');\n  }\n  inputElement.classList = 'center';\n\n  todoTitleLabel.appendChild(inputElement);\n\n  return todoTitleLabel;\n}\n\n// Generates a new button element with possible text within variable\n// and a value for data-button attribute\nfunction NewButtonElement(text, dataValue) {\n  const btn = document.createElement('button');\n  btn.classList.add('button');\n  btn.classList.add('center');\n  btn.setAttribute('data-button', dataValue);\n  btn.innerHTML = text;\n\n  return btn;\n}\n\nconst modal = (() => {\n  let modalDiv;\n  let modalErrors;\n  let validErrors = [];\n  let exitBtn;\n  // Project related elements\n  let newProjectDiv;\n  let projectTitleInput;\n  let projectAddBtn;\n  // Todo related elements\n  let newTodoDiv;\n  let todoProjectIdInput;\n  let todoTitleInput;\n  let todoDescriptionInput;\n  let todoDueDateInput;\n  let todoPriorityInput;\n  let todoAddBtn;\n\n  const addValidationError = (error) => {\n    modalErrors.innerHTML = '';\n    if (!validErrors.find((err) => err === error)) { validErrors.push(error); }\n    validErrors.forEach((err) => {\n      const p = document.createElement('div');\n      p.innerHTML = err;\n      modalErrors.appendChild(p);\n    });\n  };\n  const getProjectTitleInput = () => projectTitleInput.value.toString();\n  const addProjectBtn = (funct) => projectAddBtn.addEventListener('click', funct);\n  const getTodoTitleInput = () => todoTitleInput.value.toString();\n  const getTodoDescriptionInput = () => todoDescriptionInput.value.toString();\n  const getTodoDueDateInput = () => todoDueDateInput.value;\n  const getTodoPriorityInput = () => todoPriorityInput.value;\n  const addTodoBtn = (funct) => todoAddBtn.addEventListener('click', funct);\n  const ElementHide = (element) => { element.classList.add('hide'); };\n  const ElementShow = (element) => { element.classList.remove('hide'); };\n  const hide = () => { modalDiv.classList = 'modal'; };\n  const show = () => {\n    modalDiv.classList = 'modal show';\n    validErrors = [];\n    modalErrors.innerHTML = '';\n    projectTitleInput.value = '';\n    todoTitleInput.value = '';\n    todoDescriptionInput.value = '';\n    todoDueDateInput.value = '';\n    todoPriorityInput.value = '';\n  };\n\n  const showNewProject = () => {\n    show();\n    projectTitleInput.focus();\n    ElementHide(newTodoDiv);\n    ElementShow(newProjectDiv);\n  };\n\n  const showNewTodo = (projectId) => {\n    todoProjectIdInput.value = projectId;\n    show();\n    todoTitleInput.focus();\n    ElementHide(newProjectDiv);\n    ElementShow(newTodoDiv);\n  };\n\n  const getNewProject = () => {\n    const title = getProjectTitleInput();\n    if (title) { return new _models_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title); }\n    addValidationError('Project must have a title!');\n    return false;\n  };\n\n  const getNewTodo = () => {\n    let errorsFound = false;\n    const title = getTodoTitleInput();\n    const desc = getTodoDescriptionInput();\n    let dueDate = getTodoDueDateInput();\n    const priority = getTodoPriorityInput();\n\n    if (!title) { addValidationError('Todo must have a title!'); errorsFound = true; }\n    if (!dueDate) {\n      const today = new Date();\n      dueDate = today.getDate();\n    }\n    if (errorsFound) { return false; }\n    return { projectId: todoProjectIdInput.value, todo: new _models_todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"](title, desc, dueDate, priority) };\n  };\n\n  const init = () => {\n    modalDiv = document.createElement('div');\n    modalDiv.classList.add('modal');\n\n    const modalContent = document.createElement('div');\n    modalContent.classList.add('modal-content');\n\n    modalErrors = document.createElement('div');\n    modalErrors.classList.add('modal-errors');\n\n    exitBtn = document.createElement('div');\n    exitBtn.classList.add('exit');\n    exitBtn.innerHTML = 'x';\n    exitBtn.addEventListener('click', hide);\n\n    //  New Project Related Elements\n    newProjectDiv = document.createElement('div');\n    newProjectDiv.setAttribute('id', 'newProject');\n\n    const header = document.createElement('h2');\n    header.innerHTML = 'New Project';\n\n    const projectLabel = NewInputElement('text', 'Title', 'eg. Daily Chores');\n    projectTitleInput = projectLabel.firstElementChild;\n\n    projectAddBtn = NewButtonElement('Add Project', 'New Project');\n\n    //  New Todo Related Elements\n    newTodoDiv = document.createElement('div');\n    newTodoDiv.setAttribute('id', 'newTodo');\n\n    const header2 = document.createElement('h2');\n    header2.innerHTML = 'New Todo';\n\n    todoProjectIdInput = document.createElement('input');\n    todoProjectIdInput.type = 'hidden';\n    const todoTitleLabel = NewInputElement('text', 'Title', 'eg. Wash car');\n    todoTitleInput = todoTitleLabel.firstElementChild;\n    const todoDescriptionLabel = NewInputElement('textarea', 'Description', 'eg. Wash the car really good');\n    todoDescriptionInput = todoDescriptionLabel.firstElementChild;\n    const todoDueDateLabel = NewInputElement('date', 'Due Date');\n    todoDueDateInput = todoDueDateLabel.firstElementChild;\n    const todoPriorityLabel = NewInputElement('range', 'Priority', '1 for lowest and 3 for highest');\n    todoPriorityInput = todoPriorityLabel.firstElementChild;\n\n    todoAddBtn = NewButtonElement('Add Todo', 'New Todo');\n\n    modalDiv.appendChild(modalContent);\n    modalContent.appendChild(exitBtn);\n    modalContent.appendChild(modalErrors);\n    // Append Project Elements\n    modalContent.appendChild(newProjectDiv);\n    newProjectDiv.appendChild(header);\n    newProjectDiv.appendChild(projectLabel);\n    newProjectDiv.appendChild(projectAddBtn);\n    // Append Todo Elements\n    modalContent.appendChild(newTodoDiv);\n    newTodoDiv.appendChild(header2);\n    newTodoDiv.appendChild(todoTitleLabel);\n    newTodoDiv.appendChild(todoDescriptionLabel);\n    newTodoDiv.appendChild(todoDueDateLabel);\n    newTodoDiv.appendChild(todoPriorityLabel);\n    newTodoDiv.appendChild(todoAddBtn);\n\n    return modalDiv;\n  };\n  return {\n    init,\n    addValidationError,\n    addProjectBtn,\n    addTodoBtn,\n    showNewProject,\n    showNewTodo,\n    hide,\n    getNewProject,\n    getNewTodo,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (modal);\n\n\n//# sourceURL=webpack:///./src/views/modal.js?");

/***/ }),

/***/ "./src/views/project.js":
/*!******************************!*\
  !*** ./src/views/project.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass ProjectView {\n  constructor(project) {\n    this.content = document.createElement('div');\n    this.content.id = project.id;\n    this.content.classList.add('project');\n\n    const projectTodoContent = document.createElement('div');\n    const header = document.createElement('h3');\n    header.innerHTML = project.title;\n\n    this.newTodoBtn = document.createElement('button');\n    this.newTodoBtn.classList.add('button-todo');\n    this.newTodoBtn.classList.add('btn-plus');\n    this.newTodoBtn.setAttribute('data-id', project.id.toString());\n    this.newTodoBtn.innerHTML = 'New Todo';\n\n    this.content.appendChild(header);\n    this.content.appendChild(projectTodoContent);\n    this.content.appendChild(this.newTodoBtn);\n  }\n\n  render() {\n    document.querySelector('#main').appendChild(this.content);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectView);\n\n\n//# sourceURL=webpack:///./src/views/project.js?");

/***/ }),

/***/ "./src/views/todo.js":
/*!***************************!*\
  !*** ./src/views/todo.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass TodoView {\n  constructor(todo, projectId) {\n    this.projectId = projectId;\n    this.todoContent = document.createElement('div');\n    this.todoContent.setAttribute('id', todo.id);\n    this.todoContent.classList.add('todo');\n    this.todoChecked = document.createElement('input');\n    this.todoChecked.classList.add('inline-block');\n    this.todoChecked.setAttribute('type', 'checkbox');\n    this.todoChecked.checked = todo.checked;\n    const todoCard = document.createElement('div');\n    todoCard.className = 'todo-card';\n    const todoTitle = document.createElement('div');\n    todoTitle.innerHTML = todo.title;\n    const todoDescription = document.createElement('div');\n    todoDescription.innerHTML = todo.description;\n    todoDescription.classList.add('hide');\n\n    const todoDueDate = document.createElement('div');\n    todoDueDate.innerHTML = todo.dueDate;\n\n    todoCard.appendChild(todoTitle);\n    todoCard.appendChild(todoDescription);\n\n    this.todoContent.appendChild(this.todoChecked);\n    this.todoContent.appendChild(todoCard);\n    this.todoContent.appendChild(todoDueDate);\n\n    this.deleteTodoBtn = document.createElement('button');\n    this.deleteTodoBtn.innerHTML = 'x';\n    this.todoContent.appendChild(this.deleteTodoBtn);\n\n    this.todoContent.addEventListener('click', () => {\n      todoDescription.classList.toggle('hide');\n    });\n  }\n\n  render() {\n    const projectDiv = document.querySelector(`#${this.projectId}`);\n    projectDiv.appendChild(this.todoContent);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoView);\n\n\n//# sourceURL=webpack:///./src/views/todo.js?");

/***/ })

/******/ });