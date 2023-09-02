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

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("var butInstall = document.getElementById(\"buttonInstall\");\nvar installImage = document.getElementById(\"installImage\");\n\n// Function to hide the install button and image\nvar hideInstallElements = function hideInstallElements() {\n  butInstall.classList.add('hidden');\n  installImage.classList.add('hidden');\n};\n\n// Function to show the install button and image\nvar showInstallElements = function showInstallElements() {\n  butInstall.classList.remove('hidden');\n  installImage.classList.remove('hidden');\n};\n\n// Function to show the install prompt\nvar showInstallPrompt = function showInstallPrompt() {\n  var promptEvent = window.deferredPrompt;\n  if (promptEvent) {\n    // Show prompt\n    promptEvent.prompt();\n\n    // Reset the deferred prompt variable, it can only be used once\n    window.deferredPrompt = null;\n\n    // Hide the install button and image after the prompt is shown\n    hideInstallElements();\n  }\n};\nbutInstall.addEventListener(\"click\", showInstallPrompt);\ninstallImage.addEventListener(\"click\", showInstallPrompt);\n\n// Event listener to detect the beforeinstallprompt event\nwindow.addEventListener('beforeinstallprompt', function (event) {\n  // Store the triggered event\n  window.deferredPrompt = event;\n\n  // Hide the default install button initially\n  hideInstallElements();\n\n  // Show the install image\n  installImage.classList.remove('hidden');\n});\n\n// Event listener to detect the appinstalled event\nwindow.addEventListener('appinstalled', function (event) {\n  // Clear prompt\n  window.deferredPrompt = null;\n});\n\n//# sourceURL=webpack://WordWave/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;