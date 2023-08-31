/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/sub.js":
/*!***********************!*\
  !*** ./src/js/sub.js ***!
  \***********************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function () {\n  var textArea = document.getElementById('editor');\n  var lineNumbersDiv = document.querySelector('.line-numbers');\n\n  // Initialize with one line\n  lineNumbersDiv.textContent = '1';\n\n  // Update line numbers when text in textarea changes\n  textArea.addEventListener('input', function () {\n    var text = textArea.value;\n    var lines = text.split('\\n').length;\n\n    // Generate line numbers\n    var lineNumbers = '';\n    for (var i = 1; i <= lines; i++) {\n      lineNumbers += i + '\\n';\n    }\n    lineNumbersDiv.textContent = lineNumbers;\n\n    // Update line numbers container height to match textarea\n    lineNumbersDiv.style.height = \"\".concat(textArea.scrollHeight, \"px\");\n  });\n});\n\n//# sourceURL=webpack://WordWave/./src/js/sub.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/sub.js"]();
/******/ 	
/******/ })()
;