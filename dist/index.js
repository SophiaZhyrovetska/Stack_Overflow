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

/***/ "./src/components/BlogBlock/BlogBlock.js":
/*!***********************************************!*\
  !*** ./src/components/BlogBlock/BlogBlock.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './Blog-block.less'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _helpers_BEM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/BEM */ \"./src/helpers/BEM.js\");\n\n\n\nconst b = Object(_helpers_BEM__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Blog-block\");\n\nconst BlogBlock = ({ title, questions }) => {\n  const rootEl = document.createElement(\"div\");\n\n  rootEl.innerHTML = `\n      <div class=\"${b(\"cell\")} ${b(\"cell--title\")}\">\n        <h4 class=\"${b(\"title\")}\">${title}</h4>\n      </div>\n      \n      ${questions\n        .map(\n          ({ icon, link }) => `\n            <div class=\"${b(\"cell\")}\">\n              <a href=\"#\" class=\"${b(\"icon\")}\">\n                <div aria-label=\"Meta Stack Exchange\" class=\"Favicon Favicon--${icon}\"></div>\n              </a>\n              <a href=\"#\" class=\"Ordinary-link ${b(\"link\")}\">${link}</a>\n            </div>\n            `\n        )\n        .join(\"\")}\n    `;\n\n  return rootEl;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogBlock);\n\n\n//# sourceURL=webpack:///./src/components/BlogBlock/BlogBlock.js?");

/***/ }),

/***/ "./src/components/BlogBlock/index.js":
/*!*******************************************!*\
  !*** ./src/components/BlogBlock/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BlogBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogBlock */ \"./src/components/BlogBlock/BlogBlock.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _BlogBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/components/BlogBlock/index.js?");

/***/ }),

/***/ "./src/components/FeaturedTagsBlock/FeaturedTagsBlock.js":
/*!***************************************************************!*\
  !*** ./src/components/FeaturedTagsBlock/FeaturedTagsBlock.js ***!
  \***************************************************************/
/*! exports provided: FeaturedTagsBlock, FeaturedTagsBlockDeleteVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FeaturedTagsBlock\", function() { return FeaturedTagsBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FeaturedTagsBlockDeleteVisible\", function() { return FeaturedTagsBlockDeleteVisible; });\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './Featured-tags-block.less'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _helpers_BEM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/BEM */ \"./src/helpers/BEM.js\");\n\n\nconst b = Object(_helpers_BEM__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Featured-tags-block\");\n\nconst FeaturedTagsBlock = data => {\n  const rootEl = document.createElement(\"a\");\n  rootEl.className = b(\"tag\") + \" Tag\";\n\n  rootEl.innerHTML = `\n  <span class=\"Tag__name\">${data}</span>\n  <span class= \"Tag__delete-tag\" title=\"Remove tag\"></span>\n`;\n\n  return rootEl;\n};\n\nconst FeaturedTagsBlockDeleteVisible = data => {\n  const rootEl = document.createElement(\"a\");\n  rootEl.className = b(\"tag\") + \" Tag\";\n\n  rootEl.innerHTML = `\n  <span class=\"Tag__name\">${data}</span>\n  <span class= \"Tag__delete-tag Tag__delete-tag--visible\" title=\"Remove tag\"></span>\n`;\n\n  return rootEl;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/components/FeaturedTagsBlock/FeaturedTagsBlock.js?");

/***/ }),

/***/ "./src/components/FeaturedTagsBlock/index.js":
/*!***************************************************!*\
  !*** ./src/components/FeaturedTagsBlock/index.js ***!
  \***************************************************/
/*! exports provided: FeaturedTagsBlock, FeaturedTagsBlockDeleteVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _FeaturedTagsBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeaturedTagsBlock */ \"./src/components/FeaturedTagsBlock/FeaturedTagsBlock.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"FeaturedTagsBlock\", function() { return _FeaturedTagsBlock__WEBPACK_IMPORTED_MODULE_0__[\"FeaturedTagsBlock\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"FeaturedTagsBlockDeleteVisible\", function() { return _FeaturedTagsBlock__WEBPACK_IMPORTED_MODULE_0__[\"FeaturedTagsBlockDeleteVisible\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/components/FeaturedTagsBlock/index.js?");

/***/ }),

/***/ "./src/components/HotNetworkQuestions/HotNetworkQuestions.js":
/*!*******************************************************************!*\
  !*** ./src/components/HotNetworkQuestions/HotNetworkQuestions.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './Hot-network-questions.less'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _helpers_BEM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/BEM */ \"./src/helpers/BEM.js\");\n\n\nconst b = Object(_helpers_BEM__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Hot-network-questions\");\n\nconst HotNetworkQuestions = data => {\n  const rootEl = document.createElement(\"li\");\n  rootEl.className = b(\"question\");\n\n  rootEl.innerHTML = `\n      <div\n              class=\"Favicon Favicon--codegolf ${b(\"icon\")}\"\n              title=\"The Workplace Stack Exchange\"\n      ></div>\n      <a\n              href=\"#\"\n              class=\"Ordinary-link ${b(\"question-link\")}\"\n      >${data.question}</a\n      >\n`;\n\n  return rootEl;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HotNetworkQuestions);\n\n\n//# sourceURL=webpack:///./src/components/HotNetworkQuestions/HotNetworkQuestions.js?");

/***/ }),

/***/ "./src/components/HotNetworkQuestions/index.js":
/*!*****************************************************!*\
  !*** ./src/components/HotNetworkQuestions/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HotNetworkQuestions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HotNetworkQuestions */ \"./src/components/HotNetworkQuestions/HotNetworkQuestions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _HotNetworkQuestions__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/components/HotNetworkQuestions/index.js?");

/***/ }),

/***/ "./src/components/QuestionPost/QuestionPost.js":
/*!*****************************************************!*\
  !*** ./src/components/QuestionPost/QuestionPost.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './Question-post.less'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _helpers_BEM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/BEM */ \"./src/helpers/BEM.js\");\n\n\nconst b = Object(_helpers_BEM__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Question-post\");\n\nconst QuestionPost = data => {\n  const rootEl = document.createElement(\"article\");\n  rootEl.className = b({ \"tagged-interesting\": data.tagged });\n\n  rootEl.innerHTML = `\n    <section class=\"${b(\"summary\")}\" >\n      <h3 class=\"${b(\"title\")}\">\n        <a href=\"#\" class=\"Ordinary-link\"\n          >${data.question}</a\n        >\n      </h3>\n      <div class=\" ${b(\"tags\")}\">\n        ${data.tags\n          .map(tag => `<a href=\"#\" class=\"Tag ${b(\"tag\")}\">${tag}</a>`)\n          .join(\"\")}\n      </div>\n      <footer class=\" ${b(\"started\")}\">\n        <a href=\"#\" class=\" ${b(\"started-link\")}\"\n          >asked\n          <time datetime=\"${data.year}-${data.month}-${data.day}\">${\n    data.year\n  }-${data.month}-${data.day}</time>\n        </a>\n        <a href=\"#\" rel=\"author\" class=\"Ordinary-link\">${data.author}</a>\n        <span\n          class=\"${b(\"author-reputation-score\")}\"\n          title=\"reputation score\"\n          >${data.score}</span>\n      </footer>\n    </section>\n\n    <section class=\"${b(\"reaction\")}\">\n      <div class=\"${b(\n        \"counter\"\n      )} Question-reaction-counter Question-reaction-counter--votes\">\n        <span class=\"Question-reaction-counter__number\" title=\"0 votes\">\n            ${data.votes}\n        </span>\n        <span>votes</span>\n      </div>\n      <div\n        class=\"${b(\n          \"counter\"\n        )} Question-reaction-counter Question-reaction-counter--answers Question-reaction-counter--answers--has-no-answer\"\n      >\n        <span\n          class=\"Question-reaction-counter__number\"\n          title=\"${data.answers} answers\"\n          >${data.answers}</span\n        >\n        <span>answers</span>\n      </div>\n      <div\n        class=\"${b(\n          \"counter\"\n        )} Question-reaction-counter Question-reaction-counter--views\"\n      >\n        <span class=\"Question-reaction-counter__number\" title=\"${\n          data.views\n        } views\"\n          >${data.views}</span\n        >\n        <span>views</span>\n      </div>\n    </section>\n`;\n\n  return rootEl;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuestionPost);\n\n\n//# sourceURL=webpack:///./src/components/QuestionPost/QuestionPost.js?");

/***/ }),

/***/ "./src/components/QuestionPost/index.js":
/*!**********************************************!*\
  !*** ./src/components/QuestionPost/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _QuestionPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuestionPost */ \"./src/components/QuestionPost/QuestionPost.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _QuestionPost__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/components/QuestionPost/index.js?");

/***/ }),

/***/ "./src/helpers/BEM.js":
/*!****************************!*\
  !*** ./src/helpers/BEM.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst ELEMENT_SEPARATOR = \"__\",\n  MODIFIER_SEPARATOR = \"--\";\n\nfunction getBEMPAth({ b, e, m }) {\n  const base = e ? [b, e].join(ELEMENT_SEPARATOR) : b;\n\n  return [base, ...m.map(modifier => [base, modifier].join(MODIFIER_SEPARATOR))]\n    .join(\" \")\n    .trim();\n}\n\nconst b = b => (elementName, modifiers = {}) => {\n  let e, m;\n\n  if (typeof elementName === \"string\") {\n    e = elementName;\n  } else {\n    modifiers = elementName || {};\n  }\n\n  if (Array.isArray(modifiers)) {\n    m = modifiers;\n  } else {\n    m = Object.keys(modifiers).filter(modifier => modifiers[modifier]) || [];\n  }\n\n  return getBEMPAth({ b, e, m });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (b);\n\n\n//# sourceURL=webpack:///./src/helpers/BEM.js?");

/***/ }),

/***/ "./src/helpers/library.js":
/*!********************************!*\
  !*** ./src/helpers/library.js ***!
  \********************************/
/*! exports provided: delegateEvent, render, renderLastElement, isDateCloseToCurrent, isDescendant, buttonGroupChangeState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"delegateEvent\", function() { return delegateEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLastElement\", function() { return renderLastElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDateCloseToCurrent\", function() { return isDateCloseToCurrent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDescendant\", function() { return isDescendant; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttonGroupChangeState\", function() { return buttonGroupChangeState; });\nconst sanitizeHtml = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'sanitize-html'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nconst { last } = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'ramda'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nconst delegateEvent = (node, cssPath, eventName, callBackFn) => {\n  const evHandler = ev => {\n    if (ev.target.matches(cssPath)) {\n      callBackFn.call(ev.target, ev);\n    }\n  };\n  node.addEventListener(eventName, evHandler);\n\n  return () => node.removeEventListener(eventName, eventName);\n};\n\nconst render = async (\n  parentNode,\n  containerClass,\n  path,\n  htmlElementGenerator,\n  removePreviousContent,\n  filterPredicat\n) => {\n  const container = parentNode.querySelector(containerClass);\n  if (removePreviousContent) {\n    while (container.firstChild) {\n      container.removeChild(container.firstChild);\n    }\n  }\n  const data = await (await fetch(path)).json();\n  let dataArray;\n  Array.isArray(data) ? (dataArray = data) : (dataArray = [data]);\n  let dataFiltered;\n  filterPredicat\n    ? (dataFiltered = dataArray.filter(filterPredicat))\n    : (dataFiltered = dataArray);\n  dataFiltered.map(element =>\n    container.appendChild(htmlElementGenerator(element))\n  );\n  sessionStorage.setItem(\n    containerClass,\n    document.querySelector(containerClass).innerHTML\n  );\n};\n\nconst renderLastElement = async (\n  parentNode,\n  containerClass,\n  path,\n  htmlElementGenerator,\n  removePreviousContent,\n  filterPredicat\n) => {\n  const container = parentNode.querySelector(containerClass);\n  if (removePreviousContent) {\n    while (container.firstChild) {\n      container.removeChild(container.firstChild);\n    }\n  }\n  const data = await (await fetch(path)).json();\n  let dataArray;\n  Array.isArray(data) ? (dataArray = data) : (dataArray = [data]);\n  let dataFiltered;\n  filterPredicat\n    ? (dataFiltered = dataArray.filter(filterPredicat))\n    : (dataFiltered = dataArray);\n  container.appendChild(htmlElementGenerator(last(dataFiltered)));\n};\n\nconst today = new Date();\nconst yearCurrent = today.getFullYear();\nconst monthCurrent = today.getMonth() + 1;\nconst dayCurrent = today.getDate();\n\nconst isDateCloseToCurrent = (element, dateRange) => {\n  const sameYear = element.year == yearCurrent;\n\n  const sameMonth =\n    sameYear &&\n    element.month == monthCurrent &&\n    element.day + dateRange >= dayCurrent;\n  const monthChanged =\n    sameYear &&\n    element.month == monthCurrent - 1 &&\n    element.day + dateRange >= dayCurrent + 31;\n  const yearChanged =\n    element.year == yearCurrent - 1 &&\n    monthCurrent == 1 &&\n    element.month == 12 &&\n    element.day + dateRange > dayCurrent + 31;\n\n  return sameMonth || monthChanged || yearChanged;\n};\n\nconst isDescendant = (parent, child) => {\n  let node = child.parentNode;\n  while (node != null) {\n    if (node == parent) {\n      return true;\n    }\n    node = node.parentNode;\n  }\n  return false;\n};\n\nconst buttonGroupChangeState = (\n  parentNode,\n  targetButtonSelector,\n  otherButtonsSelectorsList,\n  stateClass\n) => {\n  otherButtonsSelectorsList\n    .filter(selector => {\n      return parentNode.querySelector(selector).classList.contains(stateClass);\n    })\n    .map(selector => {\n      parentNode.querySelector(selector).classList.remove(stateClass);\n    });\n  parentNode.querySelector(targetButtonSelector).classList.add(stateClass);\n};\n\n\n\n\n//# sourceURL=webpack:///./src/helpers/library.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_QuestionPost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/QuestionPost */ \"./src/components/QuestionPost/index.js\");\n/* harmony import */ var _components_FeaturedTagsBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/FeaturedTagsBlock */ \"./src/components/FeaturedTagsBlock/index.js\");\n/* harmony import */ var _components_HotNetworkQuestions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/HotNetworkQuestions */ \"./src/components/HotNetworkQuestions/index.js\");\n/* harmony import */ var _components_BlogBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/BlogBlock */ \"./src/components/BlogBlock/index.js\");\n/* harmony import */ var _helpers_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/library */ \"./src/helpers/library.js\");\n/* harmony import */ var _js_filterQuestions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/filterQuestions */ \"./src/js/filterQuestions.js\");\n/* harmony import */ var _js_editTagsBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/editTagsBlock */ \"./src/js/editTagsBlock.js\");\n\n\n\n\n\n\n\n\nconst savedQuestions = localStorage.getItem(\".Questions-list\");\nconst savedButtonGroupState = localStorage.getItem(\"buttonGroup\");\nconst currentUserID = 1;\nif (savedQuestions && savedButtonGroupState) {\n  document.querySelector(\".Questions-list\").innerHTML = savedQuestions;\n  document.getElementsByClassName(\n    \"Button-group\"\n  )[0].innerHTML = savedButtonGroupState;\n} else {\n  Object(_helpers_library__WEBPACK_IMPORTED_MODULE_4__[\"render\"])(document, \".Questions-list\", \"api/questions\", _components_QuestionPost__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).catch(\n    err => console.log(err)\n  );\n  document\n    .querySelector(\".Button-group__button--interesting\")\n    .classList.add(\"Button-group__button--current\");\n}\nObject(_helpers_library__WEBPACK_IMPORTED_MODULE_4__[\"render\"])(\n  document,\n  \".Featured-tags-block__content--watched\",\n  \"api/users/\"+ currentUserID + \"/watched_tags\",\n  _components_FeaturedTagsBlock__WEBPACK_IMPORTED_MODULE_1__[\"FeaturedTagsBlock\"]\n).catch(err => console.log(err));\nObject(_helpers_library__WEBPACK_IMPORTED_MODULE_4__[\"render\"])(\n  document,\n  \".Featured-tags-block__content--ignored\",\n  \"api/users/1/ignored_tags\",\n  _components_FeaturedTagsBlock__WEBPACK_IMPORTED_MODULE_1__[\"FeaturedTagsBlock\"]\n).catch(err => console.log(err));\nObject(_helpers_library__WEBPACK_IMPORTED_MODULE_4__[\"render\"])(\n  document,\n  \".Hot-network-questions__list\",\n  \"/api/questions/?hot=true\",\n  _components_HotNetworkQuestions__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n).catch(err => console.log(err));\nObject(_helpers_library__WEBPACK_IMPORTED_MODULE_4__[\"render\"])(document, \".Blog-block\", \"/api/blog\", _components_BlogBlock__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).catch(err =>\n  console.log(err)\n);\nObject(_js_filterQuestions__WEBPACK_IMPORTED_MODULE_5__[\"initQuestionsTypesHandlers\"])();\nconst watchedTags = document.querySelectorAll(\".Featured-tags-block\")[0];\nconst ignoredTags = document.querySelectorAll(\".Featured-tags-block\")[1];\n\nObject(_js_editTagsBlock__WEBPACK_IMPORTED_MODULE_6__[\"editTagsBlock\"])(watchedTags, \"watched\", \"/api/users/\" + currentUserID);\nObject(_js_editTagsBlock__WEBPACK_IMPORTED_MODULE_6__[\"editTagsBlock\"])(ignoredTags, \"ignored\", \"/api/users/\" + currentUserID);\n\nwindow.onpopstate = function(event) {\n  let buttonName = JSON.stringify(event.state);\n  Object(_js_filterQuestions__WEBPACK_IMPORTED_MODULE_5__[\"switchFilter\"])(buttonName.substring(1, buttonName.length-1));\n};\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/addTag.js":
/*!**************************!*\
  !*** ./src/js/addTag.js ***!
  \**************************/
/*! exports provided: addTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTag\", function() { return addTag; });\n/* harmony import */ var _helpers_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/library */ \"./src/helpers/library.js\");\n\nconst sanitizeHtml = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'sanitize-html'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nconst addTag = (\n  parentNode,\n  containerClass,\n  htmlElementGenerator,\n  form,\n  userURL,\n  isWatchedTags\n) => {\n  form.addEventListener(\"submit\", async ev => {\n    ev.preventDefault();\n    let value = sanitizeHtml(parentNode.getElementsByTagName(\"input\")[0].value);\n    const data = await (await fetch(userURL)).json();\n    let tags;\n    let tagsUrl;\n    if(isWatchedTags){\n      tags = data.watched_tags;\n      tagsUrl = userURL + \"/watched_tags\";\n    }else{\n      tags = data.ignored_tags;\n      tagsUrl = userURL + \"/ignored_tags\";\n    }\n    const isValueRepeated =\n      tags.filter(tag => {\n        return tag === value;\n      }).length > 0;\n    if (value && !isValueRepeated) {\n      isWatchedTags ? data.watched_tags.push(value):data.ignored_tags.push(value);\n      fetch(\"/api/users\", {\n        headers: {\n          Accept: \"application/json\",\n          \"Content-Type\": \"application/json\"\n        },\n        method: \"PUT\",\n        body: JSON.stringify(data)\n      })\n        .then(response => response.json())\n        .then(obj =>\n          Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"renderLastElement\"])(\n            parentNode,\n            containerClass,\n              tagsUrl,\n            htmlElementGenerator\n          ).catch(err => console.log(err))\n        );\n    }\n    form.reset();\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/js/addTag.js?");

/***/ }),

/***/ "./src/js/deleteTag.js":
/*!*****************************!*\
  !*** ./src/js/deleteTag.js ***!
  \*****************************/
/*! exports provided: deleteTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTag\", function() { return deleteTag; });\n/* harmony import */ var _helpers_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/library */ \"./src/helpers/library.js\");\n\n\nconst getTagValue = tagNode => {\n  return tagNode.querySelector(\".Tag__name\").innerHTML;\n};\n\nconst deleteTag = (node, containerClass, htmlElementGenerator, userURL, isWatchedTags) => {\n  Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"delegateEvent\"])(node, \".Tag__delete-tag\", \"click\", async ev => {\n    node.querySelector(containerClass).removeChild(ev.target.parentNode);\n    ev.preventDefault();\n    const value = getTagValue(ev.target.parentNode);\n    const data = await (await fetch(userURL)).json();\n    let tagsURL;\n    if (isWatchedTags) {\n      data.watched_tags = data.watched_tags.filter((tag) =>{return tag !== value});\n      tagsURL = userURL + \"/watched_tags\"\n    } else {\n      data.ignored_tags = data.ignored_tags.filter((tag) =>{return tag !== value});\n      tagsURL = userURL + \"/ignored_tags\";\n    }\n\n    fetch(\"/api/users\", {\n      headers: {\n        Accept: \"application/json\",\n        \"Content-Type\": \"application/json\"\n      },\n      method: \"PUT\",\n      body: JSON.stringify(data)\n    })\n        .then(response => response.json())\n        .then(obj =>\n            console.log(obj)\n        );\n  })\n};\n\n\n\n\n//# sourceURL=webpack:///./src/js/deleteTag.js?");

/***/ }),

/***/ "./src/js/editTagsBlock.js":
/*!*********************************!*\
  !*** ./src/js/editTagsBlock.js ***!
  \*********************************/
/*! exports provided: editTagsBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editTagsBlock\", function() { return editTagsBlock; });\n/* harmony import */ var _helpers_BEM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/BEM */ \"./src/helpers/BEM.js\");\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'pubsub-js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _addTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTag */ \"./src/js/addTag.js\");\n/* harmony import */ var _components_FeaturedTagsBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FeaturedTagsBlock */ \"./src/components/FeaturedTagsBlock/index.js\");\n/* harmony import */ var _deleteTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deleteTag */ \"./src/js/deleteTag.js\");\n/* harmony import */ var _helpers_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/library */ \"./src/helpers/library.js\");\n\n\n\n\n\n\n\nconst editTagsBlock = (node, TOPIC, userURL) => {\n  const b = Object(_helpers_BEM__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(node.classList[0]);\n\n\n  !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'pubsub-js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).subscribe(TOPIC, (msg, data) => {\n    let isWatchedTags;\n    TOPIC === \"watched\" ? isWatchedTags = true: isWatchedTags = false;\n    const tagsDeleteButtons = node.getElementsByClassName(\"Tag__delete-tag\");\n    Array.from(tagsDeleteButtons).map(button =>\n      button.classList.add(\"Tag__delete-tag--visible\")\n    );\n\n    let form = document.createElement(\"form\");\n    form.classList.add(\"Search-form\", \"Featured-tags-block__form\");\n    form.innerHTML = ` <input type=\"text\" class=\"Search-form__input-field\">\n                  <button type=\"submit\" class=\"Primary-button Primary-button--blue Primary-button--overlap\">Add</button>`;\n    node.appendChild(form);\n\n    Object(_addTag__WEBPACK_IMPORTED_MODULE_2__[\"addTag\"])(\n      node,\n      \".\" + b(\"content\"),\n      _components_FeaturedTagsBlock__WEBPACK_IMPORTED_MODULE_3__[\"FeaturedTagsBlockDeleteVisible\"],\n      form,\n      userURL,\n        isWatchedTags\n    );\n\n    const editButton = node.querySelector(\".\" + b(\"edit\"));\n    editButton.style.display = \"none\";\n\n    Object(_deleteTag__WEBPACK_IMPORTED_MODULE_4__[\"deleteTag\"])(node, \".\" + b(\"content\"), _components_FeaturedTagsBlock__WEBPACK_IMPORTED_MODULE_3__[\"FeaturedTagsBlockDeleteVisible\"], userURL, isWatchedTags);\n\n    document.addEventListener(\"click\", ev => {\n      let target = ev.target;\n      let clickInside = false;\n      while (target !== document) {\n        if (target === node) {\n          clickInside = true;\n          break;\n        }\n        target = target.parentNode;\n      }\n      if (!clickInside) {\n        editButton.style.display = \"inline\";\n        console.log(node.querySelector(\".\"+b(\"form\")));\n        node.removeChild(node.querySelector(\".\"+b(\"form\")));\n        Array.from(tagsDeleteButtons).map(button =>\n          button.classList.remove(\"Tag__delete-tag--visible\")\n        );\n      }\n    });\n  });\n  Object(_helpers_library__WEBPACK_IMPORTED_MODULE_5__[\"delegateEvent\"])(node, \".\" + b(\"edit\"), \"click\", ev => {\n    !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'pubsub-js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).publish(TOPIC, \"edit\");\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./src/js/editTagsBlock.js?");

/***/ }),

/***/ "./src/js/filterQuestions.js":
/*!***********************************!*\
  !*** ./src/js/filterQuestions.js ***!
  \***********************************/
/*! exports provided: initQuestionsTypesHandlers, switchFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initQuestionsTypesHandlers\", function() { return initQuestionsTypesHandlers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"switchFilter\", function() { return switchFilter; });\n/* harmony import */ var _helpers_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/library */ \"./src/helpers/library.js\");\n/* harmony import */ var _components_QuestionPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/QuestionPost */ \"./src/components/QuestionPost/index.js\");\n\n\n\nconst nav = document.getElementsByClassName(\"Button-group\")[0];\nconst buttonsSelectors = [\n  \".Button-group__button--interesting\",\n  \".Button-group__button--featured\",\n  \".Button-group__button--hot\",\n  \".Button-group__button--week\",\n  \".Button-group__button--month\"\n];\n\nconst switchFilter = (buttonName) =>{\n    if (buttonName === \"interesting\") {\n      Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(\n          document,\n          \".Questions-list\",\n          \"/api/questions\",\n          _components_QuestionPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n          true\n      ).catch(err => console.log(err));\n      Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"buttonGroupChangeState\"])(\n          nav,\n          \".Button-group__button--interesting\",\n          buttonsSelectors,\n          \"Button-group__button--current\"\n      );\n      localStorage.setItem(\"buttonGroup\", nav.innerHTML);\n\n    }\n\n    if (buttonName === \"featured\") {\n        console.log(\"hello\");\n      Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(\n          document,\n          \".Questions-list\",\n          \"/api/questions\",\n          _components_QuestionPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n          true,\n          element => {\n            return element.featured > 0;\n          }\n      ).catch(err => console.log(err));\n      Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"buttonGroupChangeState\"])(\n          nav,\n          \".Button-group__button--featured\",\n          buttonsSelectors,\n          \"Button-group__button--current\"\n      );\n      localStorage.setItem(\"buttonGroup\", nav.innerHTML);\n\n    }\n\n    if (buttonName === \"hot\") {\n      Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(\n          document,\n          \".Questions-list\",\n          \"api/questions\",\n          _components_QuestionPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n          true,\n          element => {\n            return Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"isDateCloseToCurrent\"])(element, 2) && element.views > 100;\n          }\n      ).catch(err => console.log(err));\n      Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"buttonGroupChangeState\"])(\n          nav,\n          \".Button-group__button--hot\",\n          buttonsSelectors,\n          \"Button-group__button--current\"\n      );\n      localStorage.setItem(\"buttonGroup\", nav.innerHTML);\n\n    }\n    if (buttonName === \"week\") {\n      Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(\n          document,\n          \".Questions-list\",\n          \"/api/questions\",\n          _components_QuestionPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n          true,\n          element => {\n            return Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"isDateCloseToCurrent\"])(element, 6) && element.views > 100;\n          }\n      ).catch(err => console.log(err));\n      Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"buttonGroupChangeState\"])(\n          nav,\n          \".Button-group__button--week\",\n          buttonsSelectors,\n          \"Button-group__button--current\"\n      );\n\n      localStorage.setItem(\"buttonGroup\", nav.innerHTML);\n    }\n    if (buttonName === \"month\") {\n      Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(\n          document,\n          \".Questions-list\",\n          \"/api/questions\",\n          _components_QuestionPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n          true,\n          element => {\n            return Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"isDateCloseToCurrent\"])(element, 30) && element.views > 100;\n          }\n      ).catch(err => console.log(err));\n      Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"buttonGroupChangeState\"])(\n          nav,\n          \".Button-group__button--month\",\n          buttonsSelectors,\n          \"Button-group__button--current\"\n      );\n\n      localStorage.setItem(\"buttonGroup\", nav.innerHTML);\n    }\n};\n\nconst initQuestionsTypesHandlers = () => {\n  nav.addEventListener(\"click\", ev => {\n      let buttonName;\n    if (ev.target.matches(\".Button-group__button--interesting\")) {\n        buttonName = \"interesting\";\n      switchFilter(buttonName);\n        history.pushState(buttonName,buttonName,buttonName);\n    }\n    if (ev.target.matches(\".Button-group__button--featured\")) {\n        buttonName = \"featured\";\n        switchFilter(buttonName);\n        history.pushState(buttonName,buttonName,buttonName);\n    }\n    if (ev.target.matches(\".Button-group__button--hot\")) {\n        buttonName = \"hot\";\n        switchFilter(buttonName);\n        history.pushState(buttonName,buttonName,buttonName);\n    }\n    if (ev.target.matches(\".Button-group__button--week\")) {\n        buttonName = \"week\";\n        switchFilter(buttonName);\n        history.pushState(buttonName,buttonName,buttonName);\n    }\n    if (ev.target.matches(\".Button-group__button--month\")) {\n        buttonName = \"month\";\n        switchFilter(buttonName);\n        history.pushState(buttonName,buttonName,buttonName);\n    }\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./src/js/filterQuestions.js?");

/***/ })

/******/ });