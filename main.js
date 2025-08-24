/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/About.js":
/*!**********************!*\
  !*** ./src/About.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutcontrol: () => (/* binding */ aboutcontrol)\n/* harmony export */ });\n\r\nfunction aboutcontrol (e,curentclass){\r\nif( e.target.getAttribute(\"class\") != curentclass){\r\n\r\n    let container = document.querySelector(\"#content\");\r\n    let btn = document.createElement(\"div\")\r\n    if(document.querySelectorAll(\".content>div\")){\r\n       Array.from( document.querySelectorAll(\"#content>div\")).forEach((item)=>{\r\n        container.removeChild(item);\r\n       })\r\n    }\r\n    btn.textContent = \"CONTENT\"\r\n    btn.style.backgroundColor = \"PINK\";\r\n    container.appendChild(btn)\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvQWJvdXQuanM/OTJkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGZ1bmN0aW9uIGFib3V0Y29udHJvbCAoZSxjdXJlbnRjbGFzcyl7XHJcbmlmKCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSAhPSBjdXJlbnRjbGFzcyl7XHJcblxyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRlbnQ+ZGl2XCIpKXtcclxuICAgICAgIEFycmF5LmZyb20oIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjY29udGVudD5kaXZcIikpLmZvckVhY2goKGl0ZW0pPT57XHJcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGl0ZW0pO1xyXG4gICAgICAgfSlcclxuICAgIH1cclxuICAgIGJ0bi50ZXh0Q29udGVudCA9IFwiQ09OVEVOVFwiXHJcbiAgICBidG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJQSU5LXCI7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKVxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/About.js\n\n}");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menucontrol: () => (/* binding */ menucontrol)\n/* harmony export */ });\n\r\nfunction menucontrol (e,curentclass){\r\nif( e.target.getAttribute(\"class\") != curentclass){\r\nlet container = document.querySelector(\"#content\");\r\nlet btn = document.createElement(\"div\")\r\nif(document.querySelectorAll(\".content>div\")){\r\n       Array.from( document.querySelectorAll(\"#content>div\")).forEach((item)=>{\r\n        container.removeChild(item);\r\n       })}\r\nbtn.textContent = \"Normal Bhojan\"\r\nbtn.style.color = \"black\";\r\ncontainer.appendChild(btn)\r\n}}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9NZW51LmpzPzZhZDUiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBmdW5jdGlvbiBtZW51Y29udHJvbCAoZSxjdXJlbnRjbGFzcyl7XHJcbmlmKCBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSAhPSBjdXJlbnRjbGFzcyl7XHJcbmxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbmxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbmlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGVudD5kaXZcIikpe1xyXG4gICAgICAgQXJyYXkuZnJvbSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjb250ZW50PmRpdlwiKSkuZm9yRWFjaCgoaXRlbSk9PntcclxuICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoaXRlbSk7XHJcbiAgICAgICB9KX1cclxuYnRuLnRleHRDb250ZW50ID0gXCJOb3JtYWwgQmhvamFuXCJcclxuYnRuLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xyXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKVxyXG59fVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Menu.js\n\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homecontrol: () => (/* binding */ homecontrol)\n/* harmony export */ });\n\r\nfunction homecontrol(e, curentclass) {\r\n    if (e.target.getAttribute(\"class\") != curentclass) {\r\n        let container = document.querySelector(\"#content\");\r\n        let btn = document.createElement(\"div\")\r\n        if (document.querySelectorAll(\".content>div\")) {\r\n            Array.from(document.querySelectorAll(\"#content>div\")).forEach((item) => {\r\n                container.removeChild(item);\r\n            })}\r\n            btn.textContent = \"HELLo\"\r\n            btn.style.color = \"black\";\r\n            container.appendChild(btn)\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanM/N2I0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGZ1bmN0aW9uIGhvbWVjb250cm9sKGUsIGN1cmVudGNsYXNzKSB7XHJcbiAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgIT0gY3VyZW50Y2xhc3MpIHtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGVudD5kaXZcIikpIHtcclxuICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NvbnRlbnQ+ZGl2XCIpKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBidG4udGV4dENvbnRlbnQgPSBcIkhFTExvXCJcclxuICAgICAgICAgICAgYnRuLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/home.js\n\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _Menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.js */ \"./src/Menu.js\");\n/* harmony import */ var _About_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.js */ \"./src/About.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet func = {homecontrol: _home_js__WEBPACK_IMPORTED_MODULE_0__.homecontrol,menucontrol: _Menu_js__WEBPACK_IMPORTED_MODULE_1__.menucontrol,aboutcontrol: _About_js__WEBPACK_IMPORTED_MODULE_2__.aboutcontrol};\r\nlet currentclass;\r\n\r\nfunction btncontroller() {\r\n    let array = Array.from(document.querySelectorAll(\"button\"));\r\n    let heading = document.querySelector(\"h1\")\r\n    let content = document.querySelector(\"#content\")\r\n\r\n    array.forEach((item) => {\r\n        item.addEventListener(\"click\", (e) => {\r\n            console.log(e.target.getAttribute(\"class\"))\r\n            let man=e.target.getAttribute(\"class\") + \"control\";\r\n            func[man](e,currentclass);\r\n            currentclass = e.target.getAttribute(\"class\")\r\n\r\n        })\r\n    })\r\n\r\n}\r\n\r\nbtncontroller();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF3QztBQUNBO0FBQ0U7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXLCtEQUFZLGdFQUFhO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9tZWNvbnRyb2wgfSBmcm9tIFwiLi9ob21lLmpzXCI7XHJcbmltcG9ydCB7IG1lbnVjb250cm9sIH0gZnJvbSBcIi4vTWVudS5qc1wiO1xyXG5pbXBvcnQgeyBhYm91dGNvbnRyb2wgfSBmcm9tIFwiLi9BYm91dC5qc1wiO1xyXG5cclxuXHJcblxyXG5sZXQgZnVuYyA9IHtob21lY29udHJvbCxtZW51Y29udHJvbCxhYm91dGNvbnRyb2x9O1xyXG5sZXQgY3VycmVudGNsYXNzO1xyXG5cclxuZnVuY3Rpb24gYnRuY29udHJvbGxlcigpIHtcclxuICAgIGxldCBhcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKSk7XHJcbiAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMVwiKVxyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIilcclxuXHJcbiAgICBhcnJheS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikpXHJcbiAgICAgICAgICAgIGxldCBtYW49ZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgKyBcImNvbnRyb2xcIjtcclxuICAgICAgICAgICAgZnVuY1ttYW5dKGUsY3VycmVudGNsYXNzKTtcclxuICAgICAgICAgICAgY3VycmVudGNsYXNzID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIilcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5idG5jb250cm9sbGVyKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;