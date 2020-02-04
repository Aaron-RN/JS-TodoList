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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst initHomePage = (() => {\n  let content;\n  let newProjectBtn;\n  let selectedProject;\n\n  const setSelectedProject = (proj) => selectedProject = proj;\n  const getSelectedProject = () => selectedProject;\n  const newProject = (funct) => newProjectBtn.addEventListener('click', funct);\n  const allTodos = (funct) => document.querySelectorAll('.button-todo').forEach((btn) => btn.addEventListener('click', funct));\n\n  const init = () => {\n    content = document.createElement('div');\n    content.setAttribute('id', 'main');\n    content.classList.add('container');\n\n    const header = document.createElement('h1');\n    header.innerHTML = 'Todo List';\n\n    newProjectBtn = document.createElement('button');\n    newProjectBtn.classList.add('button');\n    newProjectBtn.classList.add('btn-plus');\n    newProjectBtn.innerHTML = 'New Project';\n\n    content.appendChild(header);\n    content.appendChild(newProjectBtn);\n\n    return content;\n  };\n  return {\n    init, newProject, allTodos, setSelectedProject, getSelectedProject,\n  };\n})();\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initHomePage);\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/modal.css */ \"./src/css/modal.css\");\n/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_modal_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/todo */ \"./src/models/todo.js\");\n/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/project */ \"./src/models/project.js\");\n\n\n\n\n\n\n\n// Home Page  + New Todo Button Brings up Modal\nconst NewTodo = (e) => {\n  const todoBtn = e.target;\n  const todoBtnID = parseInt(todoBtn.dataset.id, Math.radix);\n\n  const project = _models_project__WEBPACK_IMPORTED_MODULE_5__[\"allProjects\"].find((proj) => proj.getID() === todoBtnID);\n  \n  _home__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setSelectedProject(project);\n  _modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].show(e);\n};\n\n// Function for Modal Button New Project Button\nfunction AddProject() {\n  const id = _models_project__WEBPACK_IMPORTED_MODULE_5__[\"allProjects\"].length + 1;\n  const title = _modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getProjectTitleInput();\n\n  const projectTodoContent = Object(_models_project__WEBPACK_IMPORTED_MODULE_5__[\"NewProjectHTML\"])(id, title);\n\n  const project = Object(_models_project__WEBPACK_IMPORTED_MODULE_5__[\"Project\"])(id, title);\n  project.setProjElement(projectTodoContent);\n  _models_project__WEBPACK_IMPORTED_MODULE_5__[\"allProjects\"].push(project);\n  \n  _home__WEBPACK_IMPORTED_MODULE_2__[\"default\"].allTodos(NewTodo);\n  _modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].hide();\n}\n\n//Function for Modal Button New Todo Button\nfunction AddTodo() {\n  const project = _home__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getSelectedProject();\n  const projectDiv = project.getProjElement();\n  const title = _modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getTodoTitleInput();\n  const desc = _modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getTodoDescriptionInput();\n  const dueDate = _modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getTodoDueDateInput();\n  const priority = _modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getTodoPriorityInput();\n  \n  const todo = Object(_models_todo__WEBPACK_IMPORTED_MODULE_4__[\"Todo\"])(title, desc, dueDate, priority);\n  project.addTodo(todo, projectDiv);\n  \n  Object(_models_todo__WEBPACK_IMPORTED_MODULE_4__[\"AddTodoHTML\"])(todo, projectDiv);\n\n  _modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].hide();\n}\n\ndocument.body.appendChild(_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init());\ndocument.body.appendChild(_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init());\n\n// Add eventlistners 'on click' To all buttons... the two Modal buttons and the homepage New Project Button\n_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"].newProject(_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].show);\n_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addProjectBtn(AddProject);\n_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addTodoBtn(AddTodo);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst initModal = (() => {\n  let modal;\n  let exitBtn;\n  //Project related elements\n  let newProjectDiv;\n  let projectTitleInput;\n  let projectAddBtn;\n  //Todo related elements\n  let newTodoDiv;\n  let todoTitleInput;\n  let todoDescriptionInput;\n  let todoDueDateInput;\n  let todoPriorityInput;\n  let todoAddBtn;\n  \n  const getProjectTitleInput = () => projectTitleInput.value.toString();\n  const addProjectBtn = (funct) => projectAddBtn.addEventListener('click', funct);\n  const getTodoTitleInput = () => todoTitleInput.value.toString();\n  const getTodoDescriptionInput = () => todoDescriptionInput.value.toString();\n  const getTodoDueDateInput = () => todoDueDateInput.value;\n  const getTodoPriorityInput = () => todoPriorityInput.value;\n  const addTodoBtn = (funct) => todoAddBtn.addEventListener('click', funct);\n  const ElementHide = (element) => { element.classList = 'hide'; };\n  const ElementShow = (element) => { element.classList = ''; };\n  const hide = () => { modal.classList = 'modal'; };\n  const show = (e) => {\n    const btn = e.target;\n    const newObject = btn.innerHTML;\n    modal.classList = 'modal show';\n    projectTitleInput.value = '';\n    todoTitleInput.value = '';\n    todoDescriptionInput.value = '';\n    todoDueDateInput.value = '';\n    todoPriorityInput.value = '';\n    if (newObject === 'New Project'){\n      projectTitleInput.focus();\n      ElementHide(newTodoDiv);\n      ElementShow(newProjectDiv);\n    }\n    if (newObject === 'New Todo'){\n      ElementHide(newProjectDiv);\n      ElementShow(newTodoDiv);\n      todoTitleInput.focus();\n    }\n  };\n\n  const init = () => {\n    modal = document.createElement('div');\n    modal.classList.add('modal');\n\n    const modalContent = document.createElement('div');\n    modalContent.classList.add('modal-content');\n\n    exitBtn = document.createElement('div');\n    exitBtn.classList.add('exit');\n    exitBtn.innerHTML = 'x';\n    exitBtn.addEventListener('click', hide);\n\n    //  New Project Related Elements\n    newProjectDiv = document.createElement('div');\n    newProjectDiv.setAttribute('id', 'newProject');\n\n    const header = document.createElement('h2');\n    header.innerHTML = 'New Project';\n\n    const projectLabel = NewInputElement('text', projectTitleInput, 'eg. Daily Chores', 'Title');\n    projectTitleInput = projectLabel.firstElementChild;\n    \n    projectAddBtn = NewButtonElement('Add Project', 'New Project');\n\n    //  New Todo Related Elements\n    newTodoDiv = document.createElement('div');\n    newTodoDiv.setAttribute('id', 'newTodo');\n\n    const header2 = document.createElement('h2');\n    header2.innerHTML = 'New Todo';\n\n    const todoTitleLabel = NewInputElement('text', todoTitleInput, 'eg. Wash car', 'Title');\n    todoTitleInput = todoTitleLabel.firstElementChild;\n    const todoDescriptionLabel = NewInputElement('text', todoDescriptionInput, 'eg. Wash car', 'Description');\n    todoDescriptionInput = todoDescriptionLabel.firstElementChild;\n    const todoDueDateLabel = NewInputElement('date', todoDueDateInput, 'eg. Wash car', 'Due Date');\n    todoDueDateInput = todoDueDateLabel.firstElementChild;\n    const todoPriorityLabel = NewInputElement('number', todoPriorityInput, 'eg. 1 for lowest and 3 for highest', 'Priority');\n    todoPriorityInput = todoPriorityLabel.firstElementChild;\n\n    todoAddBtn = NewButtonElement('Add Todo', 'New Todo');\n    \n    modal.appendChild(modalContent);\n    modalContent.appendChild(exitBtn);\n    // Append Project Elements\n    modalContent.appendChild(newProjectDiv);\n    newProjectDiv.appendChild(header);\n    newProjectDiv.appendChild(projectLabel);\n    newProjectDiv.appendChild(projectAddBtn);\n    //Append Todo Elements\n    modalContent.appendChild(newTodoDiv);\n    newTodoDiv.appendChild(header2);\n    newTodoDiv.appendChild(todoTitleLabel);\n    newTodoDiv.appendChild(todoDescriptionLabel);\n    newTodoDiv.appendChild(todoDueDateLabel);\n    newTodoDiv.appendChild(todoPriorityLabel);\n    newTodoDiv.appendChild(todoAddBtn);\n\n    return modal;\n  };\n  return {\n    init, addProjectBtn, addTodoBtn, show, hide, getProjectTitleInput,\n    getTodoTitleInput, getTodoDescriptionInput, getTodoDueDateInput, getTodoPriorityInput,\n  };\n})();\n\n// Generates two new elements and returns the parent element\nfunction NewInputElement(type, inputElement, placeholder = \"\", innerhtml){\n  const todoTitleLabel = document.createElement('div');\n  todoTitleLabel.classList = 'label center';\n  todoTitleLabel.innerHTML= innerhtml;\n\n  inputElement = document.createElement('input');\n  inputElement.setAttribute('type', type);\n  if (type === 'text'){ inputElement.setAttribute('placeholder', placeholder);}\n  if (type === 'number'){ inputElement.setAttribute('min', 1);inputElement.setAttribute('max', 3);}\n  inputElement.classList = 'center';\n  \n  todoTitleLabel.appendChild(inputElement);\n  \n  return todoTitleLabel;\n}\n\n// Generates a new button element with possible text within variable\n// and a value for data-button attribute\nfunction NewButtonElement(text, dataValue){\n  const btn = document.createElement('button');\n  btn.classList.add('button');\n  btn.classList.add('center');\n  btn.setAttribute('data-button', dataValue);\n  btn.innerHTML = text; \n  \n  return btn;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initModal);\n\n\n//# sourceURL=webpack:///./src/modal.js?");

/***/ }),

/***/ "./src/models/project.js":
/*!*******************************!*\
  !*** ./src/models/project.js ***!
  \*******************************/
/*! exports provided: Project, NewProjectHTML, allProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Project\", function() { return Project; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewProjectHTML\", function() { return NewProjectHTML; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"allProjects\", function() { return allProjects; });\nconst allProjects = [];\n\nconst Project = (id, title) => {\n  let projElement;\n  const setProjElement = (elem) => projElement = elem;\n  const getProjElement = () => projElement;\n  const todos = [];\n  const getID = () => id;\n  const getTodos = () => todos;\n  const addTodo = (todo) => {\n    todos.push(todo);\n  };\n  const removeTodo = (todoId) => {\n    const index = todos.findIndex((todo) => todo.id === todoId);\n    todos.splice(index, 1);\n  };\n  const getTodo = (todoId) => todos.find((t) => t.id === todoId);\n\n  return {\n    title, getTodos, addTodo, removeTodo, getTodo, getID, setProjElement, getProjElement,\n  };\n};\n\n// Function creates HTML related to Project object;\nfunction NewProjectHTML(id, title){\n  const projectContent = document.createElement('div');\n  projectContent.setAttribute('id', id);\n  projectContent.classList.add('container');\n\n  const projectTodoContent = document.createElement('div');\n  \n  const header = document.createElement('h3');\n  header.innerHTML = title;\n\n  const newTodoBtn = document.createElement('button');\n  newTodoBtn.classList.add('button-todo');\n  newTodoBtn.classList.add('btn-plus');\n  newTodoBtn.setAttribute('data-id', id.toString());\n  newTodoBtn.innerHTML = 'New Todo';\n\n\n  projectContent.appendChild(header);\n  projectContent.appendChild(projectTodoContent);\n  projectContent.appendChild(newTodoBtn);\n  document.body.appendChild(projectContent);\n  \n  return projectTodoContent;\n}\n\n\n\n\n//# sourceURL=webpack:///./src/models/project.js?");

/***/ }),

/***/ "./src/models/todo.js":
/*!****************************!*\
  !*** ./src/models/todo.js ***!
  \****************************/
/*! exports provided: Todo, AddTodoHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Todo\", function() { return Todo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AddTodoHTML\", function() { return AddTodoHTML; });\nconst Todo = (title, description, dueDate, priority) => {\n  const id = Math.random().toString(36).substr(2, 9);\n  let checked = false;\n  const getChecked = () => checked;\n  const toggle = () => {\n    checked = !checked;\n  };\n\n  return {\n    id, title, description, dueDate, priority, getChecked, toggle,\n  };\n};\n\nfunction AddTodoHTML(todo, projectDiv){\n  const todoContent = document.createElement('div');\n  todoContent.setAttribute('id', todo.id);\n  todoContent.classList.add('todo');\n  const todoChecked = document.createElement('input');\n  todoChecked.classList.add('inline-block');\n  todoChecked.setAttribute('type', 'checkbox');\n  const todoTitle = document.createElement('div');\n  todoTitle.innerHTML = todo.title;\n  const todoDueDate = document.createElement('div');\n  todoDueDate.innerHTML = todo.dueDate;\n\n  todoContent.appendChild(todoChecked);\n  todoContent.appendChild(todoTitle);\n  todoContent.appendChild(todoDueDate);\n  projectDiv.appendChild(todoContent);  \n}\n\n\n\n\n//# sourceURL=webpack:///./src/models/todo.js?");

/***/ })

/******/ });