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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Assests_dotsGameResource_images_json_numbersJson_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Assests/dotsGameResource/images_json/numbersJson.json */ \"./Assests/dotsGameResource/images_json/numbersJson.json\");\n\n\n\n\n\nconst canvas = document.getElementById(\"dotsCanvas\");\nlet resultArray;\nlet actualObject;\nlet score = 0;\nlet edges = 0;\nlet scaleofdevice = window.devicePixelRatio;\n\nvar data = { //global variable set equal to object\n    canvas: null,\n    ctx: null,\n    clickedDot: null, //dot that was previously clicked--fromDot\n    // dots: [{ x: 200, y: 200 }, { x: 300, y: 200 }, { x: 220, y: 150 }, { x: 280, y: 150 }, { x: 250, y: 100 }] // letter A //array-dots variable\n        // dots2: [{ x: 100, y: 100 }, { x: 200, y: 100 }, { x: 100, y: 200 }, { x: 200, y: 200 }] // shape rectangle\n        dots:null,\n        is_drawing : false, \n\n        draw_color :\"blue\",\n\n        drawing_width : \"2\"\n};\n\n//Creating the array for the dots position\nfunction dotsIndex(arg){\n    \n    let dots = [];\n    let length = Object.keys(arg).length;\n    for(let i = 1 ; i <= length;i++){\n        let indexElement = 'v' + i.toString();\n        var width = (arg[indexElement].cx/1920)*data.canvas.width, height = (arg[indexElement].cy/1080)*data.canvas.height;\n        let index = {x:width, y:height };\n        dots.push(index);\n    }\n    console.log(data.dots);\n    return dots;\n\n}\n\n//initialize the dots\nfunction initilizeDots(){\n    let dotsNumber =1 //Math.floor(Math.random() * 5);\n    console.log(dotsNumber);\n    \n     actualObject =_Assests_dotsGameResource_images_json_numbersJson_json__WEBPACK_IMPORTED_MODULE_0__; //numberJson[dotsNumber];\n    \n   data.dots = dotsIndex(_Assests_dotsGameResource_images_json_numbersJson_json__WEBPACK_IMPORTED_MODULE_0__[dotsNumber]);\n    resultObject(dotsNumber);\n   }\n   \n\n   //Creating a result object\n\n   //creating the object that will hold result\nfunction resultObject(number){\n    resultArray = JSON.parse(JSON.stringify(_Assests_dotsGameResource_images_json_numbersJson_json__WEBPACK_IMPORTED_MODULE_0__[number]));\n    let length = Object.keys(resultArray).length;\n    for(let i = 1 ; i<=length ; i++){\n        let indexElement = 'v' + i.toString();\n        for(let j =1 ; j <=length ; j++){\n            let indexElement2 = 'v' + j.toString();\n            if( resultArray[indexElement][indexElement2] = 1) edges++;\n            resultArray[indexElement][indexElement2] = 0;\n        }\n    }\n}\n//Drawing Dots\nfunction drawDots() { //draws the dots on the screen\n    var i = 0;\n    for (; i < data.dots.length; i++) { //loop \n        var d = data.dots[i];\n        //var width = (d.x/1920)*data.canvas.width;\n        //var height = (d.y/1080)*data.canvas.height;\n        data.ctx.beginPath(); //begin a new path\n        data.ctx.arc(d.x, d.y, 15/scaleofdevice, 0, 2 * Math.PI); //arc(x position, y position, radius, arc start, arc end) --full circumference of circle\n        data.ctx.fillStyle = '#28b485b6'; //grey color\n        data.ctx.fill(); //add fill to see on screen--set fillstyle\n        data.ctx.closePath(); //close the path\n    }\n}\n\n\nfunction prepCanvas() { //setup resolution and size of canvas\n    var res = window.devicePixelRatio || 1, //resolution\n        scale = 1 / res;\n\n        let canvasBg =\"white\";\n    data.canvas = document.getElementById('dotCanvas'); //dots canvas\n    data.ctx = data.canvas.getContext('2d'); //context\n    data.ctx.fillStyle = \"white\";\n    data.canvas.width =window.innerWidth - 60;\n    data.canvas.height = 645;\n    data.canvas.addEventListener(\"touchstart\", start , false); \n    data.canvas.addEventListener(\"touchmove\", draw , false); \n    data.canvas.addEventListener(\"mousedown\", start , false); \n    data.canvas.addEventListener(\"mousemove\", draw , false); \n\n    data.canvas.addEventListener(\"touchend\",stop,false);\n    data.canvas.addEventListener(\"mouseup\",stop,false);\n    data.canvas.addEventListener(\"mouseout\",stop,false);\n\n    // console.log(data.canvas.height);\n    //data.ctx.scale(res, res);\n    // data.canvas.addEventListener('mousedown', function(event) { //mousedown event listener(click mouse), will call a function which will call checkForDot function\n    //     console.log(event.clientX,event.clientY);\n    //     checkForDot(event);\n    // });\n\n}\n\n\nfunction start(event){\n\ndata.is_drawing = true;\ndata.ctx.beginPath();\ndata.ctx.moveTo(event.clientX - data.canvas.offsetLeft,\n                 event.clientY - data.canvas.offsetTop);\n                \n\nevent.preventDefault();\n}\nfunction draw(event){\nif(data.is_drawing){\n    data.ctx.lineTo(event.clientX - data.canvas.offsetLeft,\n        event.clientY - data.canvas.offsetTop);\ndata.ctx.strokeStyle = data.draw_color;\ndata.ctx.lineWidth = data.drawing_width;\ndata.ctx.lineCap = \"round\";\ndata.ctx.lineJoin = \"round\";\ndata.ctx.stroke();\n}\n\nevent.preventDefault();\n}\n\n\n\n\n\n\n\nfunction stop(event){\n    if(data.is_drawing){\n        data.ctx.stroke();\n        data.ctx.closePath();\n        data.is_drawing = false;\n\n    }\n    event.preventDefault();\n}\n\n\n\n//Change the color of the drAWING\ndocument.querySelectorAll('.color-button').forEach(item => {\n    item.addEventListener('click', event => {\n        data.draw_color = item.style.background;\n    })\n  })\n  //Change the color through the color picker\n  document.querySelectorAll('.color-picker').forEach(item => {\n    item.addEventListener('input', event => {\n        console.log(item.value);\n        data.draw_color = item.value;\n    })\n  })\n  //change the size of the lines\n  document.querySelectorAll('.pen-range').forEach(item => {\n    item.addEventListener('input', event => {\n        console.log(item.value);\n        data.drawing_width = item.value;\n    })\n  })\n\n\n  //Clear the canvas\n\n  document.getElementById('clearCanvas').addEventListener(\"click\", function(){ \n\n   data.ctx.fillStyle = \"rgb(221, 205, 205)\";\n    data.ctx.clearRect(0 , 0, data.canvas.width , data.canvas.height);\n    data.ctx.fillRect(0 , 0, data.canvas.width , data.canvas.height);\n    drawDots();\n\n   });\nfunction imagegenerate(){\n    let canvas = document.getElementById(\"dotsCanvas\");\nlet img = canvas.toDataURL(\"../../../images/ConnectDotsGame\");\ndocument.write('<img src=\"'+img+'\"/>');\n}\nprepCanvas();\ninitilizeDots();\ndrawDots();\n\nfunction change_color(element){\n    data.draw_color = element.style.background;\n}\nprepCanvas();\n\n\n\n//# sourceURL=webpack://root/./scripts/Games/ConnectDotsGame/newDots.js?");

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