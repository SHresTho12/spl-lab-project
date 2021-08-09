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

/***/ "./scripts/Games/ConnectDotsGame/newDots.js":
/*!**************************************************!*\
  !*** ./scripts/Games/ConnectDotsGame/newDots.js ***!
  \**************************************************/
/***/ (() => {

eval("\n\n\n\n\nconst canvas = document.getElementById(\"dotsCanvas\");\nvar data = { //global variable set equal to object\n    canvas: null,\n    ctx: null,\n    clickedDot: null, //dot that was previously clicked--fromDot\n    // dots: [{ x: 200, y: 200 }, { x: 300, y: 200 }, { x: 220, y: 150 }, { x: 280, y: 150 }, { x: 250, y: 100 }] // letter A //array-dots variable\n        // dots2: [{ x: 100, y: 100 }, { x: 200, y: 100 }, { x: 100, y: 200 }, { x: 200, y: 200 }] // shape rectangle\n        dots:null,\n        is_drawing : false, \n        draw_color :\"black\",\n        drawing_width : \"2\"\n};\n\nfunction prepCanvas() { //setup resolution and size of canvas\n    var res = window.devicePixelRatio || 1, //resolution\n        scale = 1 / res;\n    data.canvas = document.getElementById('dotCanvas'); //dots canvas\n    data.ctx = data.canvas.getContext('2d'); //context\n   \n    data.canvas.width =window.innerWidth - 60;\n    data.canvas.height = 645;\n    data.canvas.addEventListener(\"touchstart\", start , false); \n    data.canvas.addEventListener(\"touchmove\", draw , false); \n    data.canvas.addEventListener(\"mousedown\", start , false); \n    data.canvas.addEventListener(\"mousemove\", draw , false); \n    data.canvas.addEventListener(\"touchEnd\",stop,false);\n    data.canvas.addEventListener(\"mouseUp\",stop,false);\n    data.canvas.addEventListener(\"mouseOut\",stop,false);\n    // console.log(data.canvas.height);\n    //data.ctx.scale(res, res);\n    // data.canvas.addEventListener('mousedown', function(event) { //mousedown event listener(click mouse), will call a function which will call checkForDot function\n    //     console.log(event.clientX,event.clientY);\n    //     checkForDot(event);\n    // });\n}\n\n\nfunction start(event){\n\ndata.is_drawing = true;\ndata.ctx.beginPath();\ndata.ctx.moveTo(event.clientX - data.canvas.offsetLeft,\n                 event.clientY - data.canvas.offsetTop);\n                \n\nevent.preventDefault();\n}\nfunction draw(event){\nif(data.is_drawing){\n    data.ctx.lineTo(event.clientX - data.canvas.offsetLeft,\n        event.clientY - data.canvas.offsetTop);\ndata.ctx.strokeStyle = data.draw_color;\ndata.ctx.lineWidth = data.drawing_width;\ndata.ctx.lineCap = \"round\";\ndata.ctx.lineJoin = \"round\";\ndata.ctx.stroke();\n}\n\nevent.preventDefault();\n}\n\n\nfunction stop(event){\n    if(data.is_drawing){\n        data.ctx.stroke();\n        data.ctx.closePath();\n        data.is_drawing = false;\n\n    }\n    event.preventDefault();\n}\nfunction change_color(element){\n    data.draw_color = element.style.background;\n}\nprepCanvas();\n\n//# sourceURL=webpack://root/./scripts/Games/ConnectDotsGame/newDots.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/Games/ConnectDotsGame/newDots.js"]();
/******/ 	
/******/ })()
;