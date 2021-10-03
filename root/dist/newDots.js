/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Assests/dotsGameResource/images_json/numbersJson.json":
/*!***************************************************************!*\
  !*** ./Assests/dotsGameResource/images_json/numbersJson.json ***!
  \***************************************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"v1\":{\"cx\":69,\"cy\":233,\"v1\":0,\"v2\":1,\"v3\":1,\"v4\":0},\"v2\":{\"cx\":70,\"cy\":44,\"v1\":1,\"v2\":0,\"v3\":0,\"v4\":1},\"v3\":{\"cx\":202,\"cy\":234,\"v1\":1,\"v2\":0,\"v3\":0,\"v4\":1},\"v4\":{\"cx\":202,\"cy\":44,\"v1\":0,\"v2\":1,\"v3\":1,\"v4\":0}},{\"v1\":{\"cx\":278,\"cy\":181,\"v1\":0,\"v2\":0,\"v3\":1,\"v4\":0,\"v5\":0},\"v2\":{\"cx\":312,\"cy\":568,\"v1\":0,\"v2\":0,\"v3\":0,\"v4\":1,\"v5\":0},\"v3\":{\"cx\":512,\"cy\":69,\"v1\":1,\"v2\":0,\"v3\":0,\"v4\":1,\"v5\":0},\"v4\":{\"cx\":512,\"cy\":565,\"v1\":0,\"v2\":1,\"v3\":1,\"v4\":0,\"v5\":1},\"v5\":{\"cx\":712,\"cy\":568,\"v1\":0,\"v2\":0,\"v3\":0,\"v4\":1,\"v5\":0}},{\"v1\":{\"cx\":82,\"cy\":74,\"v1\":0,\"v2\":0,\"v3\":1,\"v4\":0},\"v2\":{\"cx\":85,\"cy\":166,\"v1\":0,\"v2\":0,\"v3\":1,\"v4\":1},\"v3\":{\"cx\":128,\"cy\":72,\"v1\":1,\"v2\":1,\"v3\":0,\"v4\":0},\"v4\":{\"cx\":145,\"cy\":169,\"v1\":0,\"v2\":1,\"v3\":0,\"v4\":0}},{\"v1\":{\"cx\":77,\"cy\":166,\"v1\":0,\"v2\":0,\"v3\":0,\"v4\":0,\"v5\":0,\"v6\":1},\"v2\":{\"cx\":82,\"cy\":63,\"v1\":0,\"v2\":0,\"v3\":0,\"v4\":0,\"v5\":1,\"v6\":0},\"v3\":{\"cx\":92,\"cy\":112,\"v1\":0,\"v2\":0,\"v3\":0,\"v4\":1,\"v5\":1,\"v6\":1},\"v4\":{\"cx\":123,\"cy\":115,\"v1\":0,\"v2\":0,\"v3\":1,\"v4\":0,\"v5\":0,\"v6\":0},\"v5\":{\"cx\":126,\"cy\":68,\"v1\":0,\"v2\":1,\"v3\":1,\"v4\":0,\"v5\":0,\"v6\":0},\"v6\":{\"cx\":131,\"cy\":157,\"v1\":1,\"v2\":0,\"v3\":1,\"v4\":0,\"v5\":0,\"v6\":0}},{\"v1\":{\"cx\":63,\"cy\":130,\"v1\":0,\"v2\":1,\"v3\":0,\"v4\":1,\"v5\":0},\"v2\":{\"cx\":118,\"cy\":49,\"v1\":1,\"v2\":0,\"v3\":0,\"v4\":1,\"v5\":0},\"v3\":{\"cx\":123,\"cy\":185,\"v1\":0,\"v2\":0,\"v3\":0,\"v4\":1,\"v5\":0},\"v4\":{\"cx\":123,\"cy\":132,\"v1\":1,\"v2\":1,\"v3\":1,\"v4\":0,\"v5\":1},\"v5\":{\"cx\":162,\"cy\":132,\"v1\":0,\"v2\":0,\"v3\":0,\"v4\":1,\"v5\":0}}]');\n\n//# sourceURL=webpack://root/./Assests/dotsGameResource/images_json/numbersJson.json?");

/***/ }),

/***/ "./scripts/Games/ConnectDotsGame/newDots.js":
/*!**************************************************!*\
  !*** ./scripts/Games/ConnectDotsGame/newDots.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Assests_dotsGameResource_images_json_numbersJson_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Assests/dotsGameResource/images_json/numbersJson.json */ \"./Assests/dotsGameResource/images_json/numbersJson.json\");\n\r\n\r\n\r\n\r\n\r\nconst canvas = document.getElementById(\"dotsCanvas\");\r\nlet resultArray;\r\nlet actualObject;\r\nlet score = 0;\r\nlet edges = 0;\r\nlet scaleofdevice = window.devicePixelRatio;\r\n\r\nvar data = { //global variable set equal to object\r\n    canvas: null,\r\n    ctx: null,\r\n    clickedDot: null, //dot that was previously clicked--fromDot\r\n    // dots: [{ x: 200, y: 200 }, { x: 300, y: 200 }, { x: 220, y: 150 }, { x: 280, y: 150 }, { x: 250, y: 100 }] // letter A //array-dots variable\r\n        // dots2: [{ x: 100, y: 100 }, { x: 200, y: 100 }, { x: 100, y: 200 }, { x: 200, y: 200 }] // shape rectangle\r\n        dots:null,\r\n        is_drawing : false, \r\n\r\n        draw_color :\"blue\",\r\n\r\n        drawing_width : \"2\"\r\n};\r\n\r\n//Creating the array for the dots position\r\nfunction dotsIndex(arg){\r\n    \r\n    let dots = [];\r\n    let length = Object.keys(arg).length;\r\n    for(let i = 1 ; i <= length;i++){\r\n        let indexElement = 'v' + i.toString();\r\n        var width = (arg[indexElement].cx/1920)*data.canvas.width, height = (arg[indexElement].cy/1080)*data.canvas.height;\r\n        let index = {x:width, y:height };\r\n        dots.push(index);\r\n    }\r\n    console.log(data.dots);\r\n    return dots;\r\n\r\n}\r\n\r\n//initialize the dots\r\nfunction initilizeDots(){\r\n    let dotsNumber =1 //Math.floor(Math.random() * 5);\r\n    console.log(dotsNumber);\r\n    \r\n     actualObject =_Assests_dotsGameResource_images_json_numbersJson_json__WEBPACK_IMPORTED_MODULE_0__; //numberJson[dotsNumber];\r\n    \r\n   data.dots = dotsIndex(_Assests_dotsGameResource_images_json_numbersJson_json__WEBPACK_IMPORTED_MODULE_0__[dotsNumber]);\r\n    resultObject(dotsNumber);\r\n   }\r\n   \r\n\r\n   //Creating a result object\r\n\r\n   //creating the object that will hold result\r\nfunction resultObject(number){\r\n    resultArray = JSON.parse(JSON.stringify(_Assests_dotsGameResource_images_json_numbersJson_json__WEBPACK_IMPORTED_MODULE_0__[number]));\r\n    let length = Object.keys(resultArray).length;\r\n    for(let i = 1 ; i<=length ; i++){\r\n        let indexElement = 'v' + i.toString();\r\n        for(let j =1 ; j <=length ; j++){\r\n            let indexElement2 = 'v' + j.toString();\r\n            if( resultArray[indexElement][indexElement2] = 1) edges++;\r\n            resultArray[indexElement][indexElement2] = 0;\r\n        }\r\n    }\r\n}\r\n//Drawing Dots\r\nfunction drawDots() { //draws the dots on the screen\r\n    var i = 0;\r\n    for (; i < data.dots.length; i++) { //loop \r\n        var d = data.dots[i];\r\n        //var width = (d.x/1920)*data.canvas.width;\r\n        //var height = (d.y/1080)*data.canvas.height;\r\n        data.ctx.beginPath(); //begin a new path\r\n        data.ctx.arc(d.x, d.y, 15/scaleofdevice, 0, 2 * Math.PI); //arc(x position, y position, radius, arc start, arc end) --full circumference of circle\r\n        data.ctx.fillStyle = '#28b485b6'; //grey color\r\n        data.ctx.fill(); //add fill to see on screen--set fillstyle\r\n        data.ctx.closePath(); //close the path\r\n    }\r\n}\r\n\r\n\r\nfunction prepCanvas() { //setup resolution and size of canvas\r\n    var res = window.devicePixelRatio || 1, //resolution\r\n        scale = 1 / res;\r\n\r\n        let canvasBg =\"white\";\r\n    data.canvas = document.getElementById('dotCanvas'); //dots canvas\r\n    data.ctx = data.canvas.getContext('2d'); //context\r\n    data.ctx.fillStyle = \"white\";\r\n    data.canvas.width =window.innerWidth - 60;\r\n    data.canvas.height = 645;\r\n    data.canvas.addEventListener(\"touchstart\", start , false); \r\n    data.canvas.addEventListener(\"touchmove\", draw , false); \r\n    data.canvas.addEventListener(\"mousedown\", start , false); \r\n    data.canvas.addEventListener(\"mousemove\", draw , false); \r\n\r\n    data.canvas.addEventListener(\"touchend\",stop,false);\r\n    data.canvas.addEventListener(\"mouseup\",stop,false);\r\n    data.canvas.addEventListener(\"mouseout\",stop,false);\r\n\r\n    // console.log(data.canvas.height);\r\n    //data.ctx.scale(res, res);\r\n    // data.canvas.addEventListener('mousedown', function(event) { //mousedown event listener(click mouse), will call a function which will call checkForDot function\r\n    //     console.log(event.clientX,event.clientY);\r\n    //     checkForDot(event);\r\n    // });\r\n\r\n}\r\n\r\n\r\nfunction start(event){\r\n\r\ndata.is_drawing = true;\r\ndata.ctx.beginPath();\r\ndata.ctx.moveTo(event.clientX - data.canvas.offsetLeft,\r\n                 event.clientY - data.canvas.offsetTop);\r\n                \r\n\r\nevent.preventDefault();\r\n}\r\nfunction draw(event){\r\nif(data.is_drawing){\r\n    data.ctx.lineTo(event.clientX - data.canvas.offsetLeft,\r\n        event.clientY - data.canvas.offsetTop);\r\ndata.ctx.strokeStyle = data.draw_color;\r\ndata.ctx.lineWidth = data.drawing_width;\r\ndata.ctx.lineCap = \"round\";\r\ndata.ctx.lineJoin = \"round\";\r\ndata.ctx.stroke();\r\n}\r\n\r\nevent.preventDefault();\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction stop(event){\r\n    if(data.is_drawing){\r\n        data.ctx.stroke();\r\n        data.ctx.closePath();\r\n        data.is_drawing = false;\r\n\r\n    }\r\n    event.preventDefault();\r\n}\r\n\r\n\r\n\r\n//Change the color of the drAWING\r\ndocument.querySelectorAll('.color-button').forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        data.draw_color = item.style.background;\r\n    })\r\n  })\r\n  //Change the color through the color picker\r\n  document.querySelectorAll('.color-picker').forEach(item => {\r\n    item.addEventListener('input', event => {\r\n        console.log(item.value);\r\n        data.draw_color = item.value;\r\n    })\r\n  })\r\n  //change the size of the lines\r\n  document.querySelectorAll('.pen-range').forEach(item => {\r\n    item.addEventListener('input', event => {\r\n        console.log(item.value);\r\n        data.drawing_width = item.value;\r\n    })\r\n  })\r\n\r\n\r\n  //Clear the canvas\r\n\r\n  document.getElementById('clearCanvas').addEventListener(\"click\", function(){ \r\n\r\n   data.ctx.fillStyle = \"rgb(221, 205, 205)\";\r\n    data.ctx.clearRect(0 , 0, data.canvas.width , data.canvas.height);\r\n    data.ctx.fillRect(0 , 0, data.canvas.width , data.canvas.height);\r\n    drawDots();\r\n\r\n   });\r\nfunction imagegenerate(){\r\n    let canvas = document.getElementById(\"dotsCanvas\");\r\nlet img = canvas.toDataURL(\"../../../images/ConnectDotsGame\");\r\ndocument.write('<img src=\"'+img+'\"/>');\r\n}\r\nprepCanvas();\r\ninitilizeDots();\r\ndrawDots();\r\n\r\nfunction change_color(element){\r\n    data.draw_color = element.style.background;\r\n}\r\nprepCanvas();\r\n\r\n\n\n//# sourceURL=webpack://root/./scripts/Games/ConnectDotsGame/newDots.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/Games/ConnectDotsGame/newDots.js");
/******/ 	
/******/ })()
;