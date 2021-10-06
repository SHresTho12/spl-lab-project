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

eval("module.exports = JSON.parse('[{\"v1\":{\"cx\":169,\"cy\":633,\"v1\":0,\"v2\":1,\"v3\":1,\"v4\":0},\"v2\":{\"cx\":170,\"cy\":174,\"v1\":1,\"v2\":0,\"v3\":0,\"v4\":1},\"v3\":{\"cx\":469,\"cy\":634,\"v1\":1,\"v2\":0,\"v3\":0,\"v4\":1},\"v4\":{\"cx\":470,\"cy\":174,\"v1\":0,\"v2\":1,\"v3\":1,\"v4\":0}},{\"v1\":{\"cx\":278,\"cy\":181,\"v1\":0,\"v2\":0,\"v3\":1,\"v4\":0,\"v5\":0},\"v2\":{\"cx\":312,\"cy\":568,\"v1\":0,\"v2\":0,\"v3\":0,\"v4\":1,\"v5\":0},\"v3\":{\"cx\":512,\"cy\":69,\"v1\":1,\"v2\":0,\"v3\":0,\"v4\":1,\"v5\":0},\"v4\":{\"cx\":512,\"cy\":565,\"v1\":0,\"v2\":1,\"v3\":1,\"v4\":0,\"v5\":1},\"v5\":{\"cx\":712,\"cy\":568,\"v1\":0,\"v2\":0,\"v3\":0,\"v4\":1,\"v5\":0}},{\"v1\":{\"cx\":182,\"cy\":174,\"v1\":0,\"v2\":0,\"v3\":1,\"v4\":0},\"v2\":{\"cx\":185,\"cy\":566,\"v1\":0,\"v2\":0,\"v3\":1,\"v4\":1},\"v3\":{\"cx\":380,\"cy\":174,\"v1\":1,\"v2\":1,\"v3\":0,\"v4\":0},\"v4\":{\"cx\":445,\"cy\":569,\"v1\":0,\"v2\":1,\"v3\":0,\"v4\":0}},{\"v1\":{\"cx\":177,\"cy\":566,\"v1\":0,\"v2\":0,\"v3\":0,\"v4\":0,\"v5\":0,\"v6\":1},\"v2\":{\"cx\":240,\"cy\":363,\"v1\":0,\"v2\":0,\"v3\":0,\"v4\":0,\"v5\":1,\"v6\":0},\"v3\":{\"cx\":177,\"cy\":170,\"v1\":0,\"v2\":0,\"v3\":0,\"v4\":1,\"v5\":1,\"v6\":1},\"v4\":{\"cx\":377,\"cy\":170,\"v1\":0,\"v2\":0,\"v3\":1,\"v4\":0,\"v5\":0,\"v6\":0},\"v5\":{\"cx\":320,\"cy\":368,\"v1\":0,\"v2\":1,\"v3\":1,\"v4\":0,\"v5\":0,\"v6\":0},\"v6\":{\"cx\":377,\"cy\":557,\"v1\":1,\"v2\":0,\"v3\":1,\"v4\":0,\"v5\":0,\"v6\":0}},{\"v1\":{\"cx\":63,\"cy\":130,\"v1\":0,\"v2\":1,\"v3\":0,\"v4\":1,\"v5\":0},\"v2\":{\"cx\":118,\"cy\":49,\"v1\":1,\"v2\":0,\"v3\":0,\"v4\":1,\"v5\":0},\"v3\":{\"cx\":123,\"cy\":185,\"v1\":0,\"v2\":0,\"v3\":0,\"v4\":1,\"v5\":0},\"v4\":{\"cx\":123,\"cy\":132,\"v1\":1,\"v2\":1,\"v3\":1,\"v4\":0,\"v5\":1},\"v5\":{\"cx\":162,\"cy\":132,\"v1\":0,\"v2\":0,\"v3\":0,\"v4\":1,\"v5\":0}}]');\n\n//# sourceURL=webpack://root/./Assests/dotsGameResource/images_json/numbersJson.json?");

/***/ }),

/***/ "./scripts/Games/ConnectDotsGame/newDots.js":
/*!**************************************************!*\
  !*** ./scripts/Games/ConnectDotsGame/newDots.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Assests_dotsGameResource_images_json_numbersJson_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Assests/dotsGameResource/images_json/numbersJson.json */ \"./Assests/dotsGameResource/images_json/numbersJson.json\");\n\r\n\r\n//html elements\r\nconst canvas = document.getElementById(\"dotsCanvas\");\r\nconst downloadBtn = document.getElementById(\"downloadImg\");\r\nconst undoButton = document.getElementById(\"undoBtn\");\r\nconst hint = document.getElementById(\"hintText\");\r\nconst nextButton = document.getElementById(\"nextBtn\");\r\n\r\n\r\n//States\r\nlet resultArray;\r\nlet actualObject;\r\nlet text;\r\nlet scaleofdevice = window.devicePixelRatio;\r\nlet restore_array = [];\r\nlet index = -1;\r\n\r\n\r\n\r\n//Canvas Information\r\nvar data = {\r\n    canvas: null,\r\n    ctx: null,\r\n    clickedDot: null, //dot that was previously clicked--fromDot\r\n    // dots: [{ x: 200, y: 200 }, { x: 300, y: 200 }, { x: 220, y: 150 }, { x: 280, y: 150 }, { x: 250, y: 100 }] // letter A //array-dots variable\r\n    // dots2: [{ x: 100, y: 100 }, { x: 200, y: 100 }, { x: 100, y: 200 }, { x: 200, y: 200 }] // shape rectangle\r\n    dots: null,\r\n    is_drawing: false,\r\n    draw_color: \"blue\",\r\n    drawing_width: \"2\",\r\n};\r\n\r\n//Creating the array for the dots position\r\nfunction dotsIndex(arg) {\r\n    let dots = [];\r\n    let length = Object.keys(arg).length;\r\n    for (let i = 1; i <= length; i++) {\r\n        let indexElement = \"v\" + i.toString();\r\n        var width = (arg[indexElement].cx / 1920) * data.canvas.width,\r\n            height = (arg[indexElement].cy / 1080) * data.canvas.height;\r\n        let index = {\r\n            x: width,\r\n            y: height\r\n        };\r\n        dots.push(index);\r\n    }\r\n    return dots;\r\n}\r\n\r\n//initialize the dots\r\nfunction initilizeDots() {\r\n    let dotsNumber = Math.floor(Math.random() * 4);\r\n\r\n    actualObject = _Assests_dotsGameResource_images_json_numbersJson_json__WEBPACK_IMPORTED_MODULE_0__; //numberJson[dotsNumber];\r\n\r\n    data.dots = dotsIndex(_Assests_dotsGameResource_images_json_numbersJson_json__WEBPACK_IMPORTED_MODULE_0__[dotsNumber]);\r\n    text = dotsNumber;\r\n    \r\n}\r\n\r\n//Drawing Dots\r\nfunction drawDots() {\r\n    //draws the dots on the screen\r\n    var i = 0;\r\n    for (; i < data.dots.length; i++) {\r\n        //loop\r\n        var d = data.dots[i];\r\n        var width = (d.x/1920)*data.canvas.width;\r\n        var height = (d.y/1080)*data.canvas.height;\r\n        data.ctx.beginPath(); //begin a new path\r\n        //data.ctx.arc(d.x, d.y, 15 / scaleofdevice, 0, 2 * Math.PI); //arc(x position, y position, radius, arc start, arc end) --full circumference of circle\r\n        data.ctx.arc(width,height,15/scaleofdevice,0,2*Math.PI);\r\n        data.ctx.fillStyle = \"#ffb900\"; //grey color\r\n        data.ctx.fill(); //add fill to see on screen--set fillstyle\r\n        data.ctx.closePath(); //close the path\r\n    }\r\n    \r\n}\r\n\r\nfunction prepCanvas() {\r\n    //setup resolution and size of canvas\r\n    var res = window.devicePixelRatio || 1, //resolution\r\n        scale = 1 / res;\r\n    data.canvas = document.getElementById(\"dotCanvas\"); //dots canvas\r\n    data.ctx = data.canvas.getContext(\"2d\"); //context\r\n    \r\n    data.canvas.width = window.innerWidth - 60;\r\n    data.canvas.height = 645;\r\n    data.canvas.addEventListener(\"touchstart\", start, false);\r\n    data.canvas.addEventListener(\"touchmove\", draw, false);\r\n    data.canvas.addEventListener(\"mousedown\", start, false);\r\n    data.canvas.addEventListener(\"mousemove\", draw, false);\r\n\r\n    data.canvas.addEventListener(\"touchend\", stop, false);\r\n    data.canvas.addEventListener(\"mouseup\", stop, false);\r\n    data.canvas.addEventListener(\"mouseout\", stop, false);\r\n\r\n}\r\n\r\nfunction start(event) {\r\n    data.is_drawing = true;\r\n    data.ctx.beginPath();\r\n    data.ctx.moveTo(\r\n        event.clientX - data.canvas.offsetLeft,\r\n        event.clientY - data.canvas.offsetTop\r\n    );\r\n\r\n    event.preventDefault();\r\n}\r\n\r\nfunction draw(event) {\r\n    if (data.is_drawing) {\r\n        data.ctx.lineTo(\r\n            event.clientX - data.canvas.offsetLeft,\r\n            event.clientY - data.canvas.offsetTop\r\n        );\r\n        data.ctx.strokeStyle = data.draw_color;\r\n        data.ctx.lineWidth = data.drawing_width;\r\n        data.ctx.lineCap = \"round\";\r\n        data.ctx.lineJoin = \"round\";\r\n        data.ctx.stroke();\r\n    }\r\n\r\n    event.preventDefault();\r\n}\r\n\r\nfunction stop(event) {\r\n    if (data.is_drawing) {\r\n        data.ctx.stroke();\r\n        data.ctx.closePath();\r\n        data.is_drawing = false;\r\n    }\r\n    event.preventDefault();\r\n\r\n    if(event.type != 'mouseout'){\r\n        restore_array.push(data.ctx.getImageData(0, 0, data.canvas.width, data.canvas.height));\r\n         index+=1;\r\n    }\r\n    \r\n\r\n}\r\n\r\n//Change the color of the drAWING\r\ndocument.querySelectorAll(\".color-button\").forEach((item) => {\r\n    item.addEventListener(\"click\", (event) => {\r\n        data.draw_color = item.style.background;\r\n    });\r\n});\r\n//Change the color through the color picker\r\ndocument.querySelectorAll(\".color-picker\").forEach((item) => {\r\n    item.addEventListener(\"input\", (event) => {\r\n        console.log(item.value);\r\n        data.draw_color = item.value;\r\n    });\r\n});\r\n//change the size of the lines\r\ndocument.querySelectorAll(\".pen-range\").forEach((item) => {\r\n    item.addEventListener(\"input\", (event) => {\r\n        console.log(item.value);\r\n        data.drawing_width = item.value;\r\n    });\r\n});\r\n\r\n//Clear the canvas\r\n\r\ndocument.getElementById(\"clearCanvas\").addEventListener(\"click\", function () {\r\n    clearCanvas();\r\n});\r\n//clear canvas function\r\nfunction clearCanvas(){\r\n    data.ctx.fillStyle = \"rgb(73, 219, 85)\";\r\n    data.ctx.clearRect(0, 0, data.canvas.width, data.canvas.height);\r\n    data.ctx.fillRect(0, 0, data.canvas.width, data.canvas.height);\r\n    restore_array = [];\r\n    index =-1;\r\n    hint.innerHTML = \"\";\r\n\r\n}\r\n\r\n\r\nfunction imageGenerate() {\r\n    let canvas = document.getElementById(\"dotsCanvas\");\r\n    let img = canvas.toDataURL(\"../../../images/ConnectDotsGame\");\r\n    document.write('<img src=\"' + img + '\"/>');\r\n}\r\nprepCanvas();\r\ninitilizeDots();\r\ndrawDots();\r\n\r\nfunction change_color(element) {\r\n    data.draw_color = element.style.background;\r\n}\r\nprepCanvas();\r\n\r\n//download the image of  the canvas\r\n//only png\r\ndownloadBtn.addEventListener(\"click\", function () {\r\n    \r\n    if (window.navigator.msSaveBlob) {\r\n        window.navigator.msSaveBlob(data.canvas.msSaveBlob(), \"canvas-image.png\");\r\n    } else {\r\n        const a = document.createElement(\"a\");\r\n        document.body.appendChild(a);\r\n        a.href = data.canvas.toDataURL();\r\n        a.download = \"canvas-image.png\";\r\n        a.click();\r\n        document.body.removeChild(a);\r\n    }\r\n});\r\n\r\n//undo Functionality\r\nundoButton.addEventListener(\"click\", function () {\r\n    console.log(\"hello\");\r\n    if(index <= 0){clearCanvas();} \r\n    else{\r\n        index-= 1;\r\n        restore_array.pop();\r\n        data.ctx.putImageData(restore_array[index],0,0);\r\n    }\r\n});\r\n\r\n\r\n//functionality for drawing with dots\r\nnextButton.addEventListener(\"click\",function(){\r\n    nextButtonFunctionality();\r\n});\r\n\r\nfunction nextButtonFunctionality(){\r\n    clearCanvas();\r\n    initilizeDots();\r\n    drawDots();\r\n    showHint();\r\n    \r\n}\r\n\r\n//Hint\r\nfunction showHint(){\r\n    hint.innerHTML =text;\r\n\r\n}\n\n//# sourceURL=webpack://root/./scripts/Games/ConnectDotsGame/newDots.js?");

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