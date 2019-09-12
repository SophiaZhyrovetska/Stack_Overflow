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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/users.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/components/UserInfo/UserInfo.js":
/*!*********************************************!*\
  !*** ./src/components/UserInfo/UserInfo.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './User-info.less'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _helpers_BEM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/BEM */ \"./src/helpers/BEM.js\");\n\n\nconst b = Object(_helpers_BEM__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"User-info\");\n\nconst UserInfo = data => {\n  const rootEl = document.createElement(\"article\");\n  rootEl.className = b() + \" Users-list__user-info\";\n\n  rootEl.innerHTML = `\n        <a href=\"#\">\n          <img\n            class=\"${b(\"avatar\")}\"\n            src=\"${data.avatar}\"\n            alt=\"${data.name} avatar\"\n        /></a>\n        \n        <div class=\"${b(\"details\")}\">\n          <a href=\"#\" class=\"Ordinary-link ${b(\"name\")}\"\n            >${data.name}</a\n          >\n          <span class=\"${b(\"location\")}\">${data.location}</span>\n          <span\n            class=\"${b(\"reputation-score\")}\"\n            title=\"reputation this week: 2,597 total reputation: 783,741\"\n            >${data.score}</span\n          >\n        </div>\n        \n        <div class=\"${b(\"tags\")}\">\n          ${data.watched_tags\n            .map(tag => `<a href=\"#\" class=\"${b(\"tag\")}\">${tag}</a>`)\n            .join(\"\")}\n        </div>\n`;\n\n  return rootEl;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserInfo);\n\n\n//# sourceURL=webpack:///./src/components/UserInfo/UserInfo.js?");

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

/***/ "./src/js/filterQuestions.js":
/*!***********************************!*\
  !*** ./src/js/filterQuestions.js ***!
  \***********************************/
/*! exports provided: initQuestionsTypesHandlers, switchFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initQuestionsTypesHandlers\", function() { return initQuestionsTypesHandlers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"switchFilter\", function() { return switchFilter; });\n/* harmony import */ var _helpers_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/library */ \"./src/helpers/library.js\");\n/* harmony import */ var _components_QuestionPost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/QuestionPost */ \"./src/components/QuestionPost/index.js\");\n\n\n\nconst nav = document.getElementsByClassName(\"Button-group\")[0];\nconst buttonsSelectors = [\n  \".Button-group__button--interesting\",\n  \".Button-group__button--featured\",\n  \".Button-group__button--hot\",\n  \".Button-group__button--week\",\n  \".Button-group__button--month\"\n];\n\nconst switchFilter = (buttonName) =>{\n    if (buttonName === \"interesting\") {\n      Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(\n          document,\n          \".Questions-list\",\n          \"/api/questions\",\n          _components_QuestionPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n          true\n      ).catch(err => console.log(err));\n      Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"buttonGroupChangeState\"])(\n          nav,\n          \".Button-group__button--interesting\",\n          buttonsSelectors,\n          \"Button-group__button--current\"\n      );\n      localStorage.setItem(\"buttonGroup\", nav.innerHTML);\n\n    }\n\n    if (buttonName === \"featured\") {\n        console.log(\"hello\");\n      Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(\n          document,\n          \".Questions-list\",\n          \"/api/questions\",\n          _components_QuestionPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n          true,\n          element => {\n            return element.featured > 0;\n          }\n      ).catch(err => console.log(err));\n      Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"buttonGroupChangeState\"])(\n          nav,\n          \".Button-group__button--featured\",\n          buttonsSelectors,\n          \"Button-group__button--current\"\n      );\n      localStorage.setItem(\"buttonGroup\", nav.innerHTML);\n\n    }\n\n    if (buttonName === \"hot\") {\n      Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(\n          document,\n          \".Questions-list\",\n          \"api/questions\",\n          _components_QuestionPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n          true,\n          element => {\n            return Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"isDateCloseToCurrent\"])(element, 2) && element.views > 100;\n          }\n      ).catch(err => console.log(err));\n      Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"buttonGroupChangeState\"])(\n          nav,\n          \".Button-group__button--hot\",\n          buttonsSelectors,\n          \"Button-group__button--current\"\n      );\n      localStorage.setItem(\"buttonGroup\", nav.innerHTML);\n\n    }\n    if (buttonName === \"week\") {\n      Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(\n          document,\n          \".Questions-list\",\n          \"/api/questions\",\n          _components_QuestionPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n          true,\n          element => {\n            return Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"isDateCloseToCurrent\"])(element, 6) && element.views > 100;\n          }\n      ).catch(err => console.log(err));\n      Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"buttonGroupChangeState\"])(\n          nav,\n          \".Button-group__button--week\",\n          buttonsSelectors,\n          \"Button-group__button--current\"\n      );\n\n      localStorage.setItem(\"buttonGroup\", nav.innerHTML);\n    }\n    if (buttonName === \"month\") {\n      Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(\n          document,\n          \".Questions-list\",\n          \"/api/questions\",\n          _components_QuestionPost__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n          true,\n          element => {\n            return Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"isDateCloseToCurrent\"])(element, 30) && element.views > 100;\n          }\n      ).catch(err => console.log(err));\n      Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"buttonGroupChangeState\"])(\n          nav,\n          \".Button-group__button--month\",\n          buttonsSelectors,\n          \"Button-group__button--current\"\n      );\n\n      localStorage.setItem(\"buttonGroup\", nav.innerHTML);\n    }\n};\n\nconst initQuestionsTypesHandlers = () => {\n  nav.addEventListener(\"click\", ev => {\n      let buttonName;\n    if (ev.target.matches(\".Button-group__button--interesting\")) {\n        buttonName = \"interesting\";\n      switchFilter(buttonName);\n        history.pushState(buttonName,buttonName,buttonName);\n    }\n    if (ev.target.matches(\".Button-group__button--featured\")) {\n        buttonName = \"featured\";\n        switchFilter(buttonName);\n        history.pushState(buttonName,buttonName,buttonName);\n    }\n    if (ev.target.matches(\".Button-group__button--hot\")) {\n        buttonName = \"hot\";\n        switchFilter(buttonName);\n        history.pushState(buttonName,buttonName,buttonName);\n    }\n    if (ev.target.matches(\".Button-group__button--week\")) {\n        buttonName = \"week\";\n        switchFilter(buttonName);\n        history.pushState(buttonName,buttonName,buttonName);\n    }\n    if (ev.target.matches(\".Button-group__button--month\")) {\n        buttonName = \"month\";\n        switchFilter(buttonName);\n        history.pushState(buttonName,buttonName,buttonName);\n    }\n  });\n};\n\n\n\n\n//# sourceURL=webpack:///./src/js/filterQuestions.js?");

/***/ }),

/***/ "./src/js/filterUsers.js":
/*!*******************************!*\
  !*** ./src/js/filterUsers.js ***!
  \*******************************/
/*! exports provided: initUsersHandlers, switchUserFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initUsersHandlers\", function() { return initUsersHandlers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"switchUserFilter\", function() { return switchUserFilter; });\n/* harmony import */ var _helpers_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/library */ \"./src/helpers/library.js\");\n/* harmony import */ var _components_UserInfo_UserInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UserInfo/UserInfo */ \"./src/components/UserInfo/UserInfo.js\");\n\n\n\n\nconst nav = document.getElementsByClassName(\"Button-group\")[0];\nconst form = document.getElementsByClassName(\"Filter-users__search-form\")[0];\nconst buttonsSelectors = [\n  \".Button-group__button--reputation\",\n  \".Button-group__button--new-users\",\n  \".Button-group__button--voters\",\n  \".Button-group__button--editors\",\n  \".Button-group__button--moderators\"\n];\nconst switchUserFilter = (buttonName) =>{\n  if (buttonName === \"reputation\") {\n    Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(document, \".Users-list\", \"/api/users\", _components_UserInfo_UserInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], true).catch(err =>\n        console.log(err)\n    );\n    Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"buttonGroupChangeState\"])(\n        nav,\n        \".Button-group__button--reputation\",\n        buttonsSelectors,\n        \"Button-group__button--current\"\n    );\n    localStorage.setItem(\"buttonGroupUsers\", nav.innerHTML);\n  }\n\n  if (buttonName === \"new-users\") {\n    Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(document, \".Users-list\", \"/api/users\", _components_UserInfo_UserInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], true, element => {\n      return Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"isDateCloseToCurrent\"])(element, 30);\n    }).catch(err => console.log(err));\n    Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"buttonGroupChangeState\"])(\n        nav,\n        \".Button-group__button--new-users\",\n        buttonsSelectors,\n        \"Button-group__button--current\"\n    );\n    localStorage.setItem(\"buttonGroupUsers\", nav.innerHTML);\n  }\n\n  if (buttonName === \"voters\") {\n    Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(document, \".Users-list\", \"/api/users\", _components_UserInfo_UserInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], true, element => {\n      return element.votes > 10;\n    }).catch(err => console.log(err));\n    Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"buttonGroupChangeState\"])(\n        nav,\n        \".Button-group__button--voters\",\n        buttonsSelectors,\n        \"Button-group__button--current\"\n    );\n    localStorage.setItem(\"buttonGroupUsers\", nav.innerHTML);\n  }\n  if (buttonName === \"editors\") {\n    Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(document, \".Users-list\", \"/api/users\", _components_UserInfo_UserInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], true, element => {\n      return element.edits > 10;\n    }).catch(err => console.log(err));\n    Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"buttonGroupChangeState\"])(\n        nav,\n        \".Button-group__button--editors\",\n        buttonsSelectors,\n        \"Button-group__button--current\"\n    );\n    localStorage.setItem(\"buttonGroupUsers\", nav.innerHTML);\n  }\n  if (buttonName === \"moderators\") {\n    Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(document, \".Users-list\", \"/api/users\", _components_UserInfo_UserInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], true, element => {\n      return element.moderator;\n    }).catch(err => console.log(err));\n    Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"buttonGroupChangeState\"])(\n        nav,\n        \".Button-group__button--moderators\",\n        buttonsSelectors,\n        \"Button-group__button--current\"\n    );\n    localStorage.setItem(\"buttonGroupUsers\", nav.innerHTML);\n  }\n};\nconst initUsersHandlers = () => {\n  nav.addEventListener(\"click\", ev => {\n    let buttonName;\n    if (ev.target.matches(\".Button-group__button--reputation\")) {\n      buttonName = \"reputation\";\n      switchUserFilter(buttonName);\n      history.pushState(buttonName,buttonName,buttonName);\n    }\n\n    if (ev.target.matches(\".Button-group__button--new-users\")) {\n      buttonName = \"new-users\";\n      switchUserFilter(buttonName);\n      history.pushState(buttonName,buttonName,buttonName);\n      localStorage.setItem(\"buttonGroupUsers\", nav.innerHTML);\n    }\n\n    if (ev.target.matches(\".Button-group__button--voters\")) {\n      buttonName = \"voters\";\n      switchUserFilter(buttonName);\n      history.pushState(buttonName,buttonName,buttonName);\n    }\n    if (ev.target.matches(\".Button-group__button--editors\")) {\n      buttonName = \"editors\";\n      switchUserFilter(buttonName);\n      history.pushState(buttonName,buttonName,buttonName);\n    }\n    if (ev.target.matches(\".Button-group__button--moderators\")) {\n      buttonName = \"moderators\";\n      switchUserFilter(buttonName);\n      history.pushState(buttonName,buttonName,buttonName);\n    }\n  });\n};\n\nform.addEventListener(\"submit\", ev => {\n  ev.preventDefault();\n  let value = document.getElementsByClassName(\"Search-form__input-field\")[1]\n    .value;\n  Object(_helpers_library__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(document, \".Users-list\", \"/api/users\", _components_UserInfo_UserInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], true, element => {\n    return element.name.toLowerCase().includes(value.toLocaleLowerCase());\n  }).catch(err => console.log(err));\n  form.reset();\n});\n\n\n\n\n//# sourceURL=webpack:///./src/js/filterUsers.js?");

/***/ }),

/***/ "./src/users.js":
/*!**********************!*\
  !*** ./src/users.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_UserInfo_UserInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/UserInfo/UserInfo */ \"./src/components/UserInfo/UserInfo.js\");\n/* harmony import */ var _js_filterUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/filterUsers */ \"./src/js/filterUsers.js\");\n/* harmony import */ var _js_filterQuestions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/filterQuestions */ \"./src/js/filterQuestions.js\");\n\n\n\nconst render = async (containerClass, path, htmlElementGenerator) => {\n  const container = document.querySelector(containerClass);\n  const data = await (await fetch(path)).json();\n\n  data.map(element => container.appendChild(htmlElementGenerator(element)));\n  localStorage.setItem(\n    containerClass,\n    document.querySelector(containerClass).innerHTML\n  );\n};\n\nconst savedUsers = localStorage.getItem(\".Users-list\");\nconst savedButtonGroupState = localStorage.getItem(\"buttonGroupUsers\");\nif (savedUsers && savedButtonGroupState) {\n  document.querySelector(\".Users-list\").innerHTML = savedUsers;\n  document.getElementsByClassName(\n    \"Button-group\"\n  )[0].innerHTML = savedButtonGroupState;\n} else {\n  render(\".Users-list\", \"/api/users\", _components_UserInfo_UserInfo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).catch(err => console.log(err));\n  document\n    .querySelector(\".Button-group__button--reputation\")\n    .classList.add(\"Button-group__button--current\");\n}\nObject(_js_filterUsers__WEBPACK_IMPORTED_MODULE_1__[\"initUsersHandlers\"])();\nwindow.onpopstate = function(event) {\n  let buttonName = JSON.stringify(event.state);\n  Object(_js_filterUsers__WEBPACK_IMPORTED_MODULE_1__[\"switchUserFilter\"])(buttonName.substring(1, buttonName.length-1));\n};\n\n\n//# sourceURL=webpack:///./src/users.js?");

/***/ })

/******/ });