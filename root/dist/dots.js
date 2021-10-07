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

/***/ "./scripts/Games/ConnectDotsGame/dots.js":
/*!***********************************************!*\
  !*** ./scripts/Games/ConnectDotsGame/dots.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Assests_dotsGameResource_images_json_numbersJson_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Assests/dotsGameResource/images_json/numbersJson.json */ \"./Assests/dotsGameResource/images_json/numbersJson.json\");\n\r\n\r\nlet resultArray;\r\nlet actualObject;\r\nlet score = 0;\r\nlet edges = 0;\r\nlet scaleofdevice = window.devicePixelRatio;\r\n\r\n// var count = Object.keys(jsonData).length;\r\n\r\n// console.log(count);\r\nvar nextButton = document.getElementById('nextButton');\r\nvar checkButton = document.getElementById('check');\r\nvar scoreBar = document.getElementById('score');\r\nlet dotsNumber = 0;\r\nvar data = { //global variable set equal to object\r\n    canvas: null,\r\n    ctx: null,\r\n    clickedDot: null, //dot that was previously clicked--fromDot\r\n    // dots: [{ x: 200, y: 200 }, { x: 300, y: 200 }, { x: 220, y: 150 }, { x: 280, y: 150 }, { x: 250, y: 100 }] // letter A //array-dots variable\r\n        // dots2: [{ x: 100, y: 100 }, { x: 200, y: 100 }, { x: 100, y: 200 }, { x: 200, y: 200 }] // shape rectangle\r\n        dots:null\r\n};\r\n\r\n//creating the object that will hold result\r\nfunction resultObject(number){\r\n    resultArray = JSON.parse(JSON.stringify(_Assests_dotsGameResource_images_json_numbersJson_json__WEBPACK_IMPORTED_MODULE_0__[number]));\r\n    let length = Object.keys(resultArray).length;\r\n    for(let i = 1 ; i<=length ; i++){\r\n        let indexElement = 'v' + i.toString();\r\n        for(let j =1 ; j <=length ; j++){\r\n            let indexElement2 = 'v' + j.toString();\r\n            if( resultArray[indexElement][indexElement2] = 1) edges++;\r\n            resultArray[indexElement][indexElement2] = 0;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n//Creating the array for the dots position\r\nfunction dotsIndex(arg){\r\n    \r\n    let dots = [];\r\n    let length = Object.keys(arg).length;\r\n    for(let i = 1 ; i <= length;i++){\r\n        let indexElement = 'v' + i.toString();\r\n        var width = (arg[indexElement].cx/1920)*data.canvas.width, height = (arg[indexElement].cy/1080)*data.canvas.height;\r\n        let index = {x:width, y:height };\r\n        dots.push(index);\r\n    }\r\n    console.log(data.dots);\r\n    return dots;\r\n\r\n}\r\n\r\n\r\n\r\n//Dynamically changing the alphabet\r\nnextButton.addEventListener('click' , ()=> {\r\n   \r\n    prepCanvas();\r\n    initilizeDots();\r\n    drawDots();\r\n    data.clickedDot =null;\r\n} );\r\n\r\n\r\n\r\n\r\n//finds whether or not two circles are colliding on the screen\r\nfunction circleCollision(c1, c2) { \r\n    var a = c1.r + c2.r,\r\n        x = c1.x - c2.x,\r\n        y = c1.y - c2.y;\r\n\r\n    if (a > Math.sqrt((x * x) + (y * y))) return true; //colliding\r\n    else return false; //not colliding\r\n}\r\n\r\nfunction initilizeDots(){\r\n     dotsNumber = Math.floor(Math.random() * 5);\r\n     console.log(dotsNumber);\r\n     \r\n     actualObject = _Assests_dotsGameResource_images_json_numbersJson_json__WEBPACK_IMPORTED_MODULE_0__[dotsNumber];\r\n     \r\n    data.dots = dotsIndex(_Assests_dotsGameResource_images_json_numbersJson_json__WEBPACK_IMPORTED_MODULE_0__[dotsNumber]);\r\n     resultObject(dotsNumber);\r\n    }\r\n\r\nfunction prepCanvas() { //setup resolution and size of canvas\r\n    var res = window.devicePixelRatio || 1, //resolution\r\n        scale = 1 / res;\r\n    data.canvas = document.getElementById('dots'); //dots canvas\r\n    data.ctx = data.canvas.getContext('2d'); //context\r\n   \r\n    data.canvas.width =window.innerWidth * scale;\r\n    data.canvas.height =window.innerHeight * scale;\r\n    data.canvas.style.width =window.innerWidth *scale + 'px';\r\n    data.canvas.style.height = window.innerHeight * scale + 'px';\r\n    // console.log(data.canvas.height);\r\n    data.ctx.scale(res, res);\r\n    data.canvas.addEventListener('mousedown', function(event) { //mousedown event listener(click mouse), will call a function which will call checkForDot function\r\n        console.log(event.clientX,event.clientY);\r\n        checkForDot(event);\r\n    });\r\n}\r\n\r\nfunction drawDots() { //draws the dots on the screen\r\n    var i = 0;\r\n    for (; i < data.dots.length; i++) { //loop \r\n        var d = data.dots[i];\r\n        //var width = (d.x/1920)*data.canvas.width;\r\n        //var height = (d.y/1080)*data.canvas.height;\r\n        data.ctx.beginPath(); //begin a new path\r\n        data.ctx.arc(d.x, d.y, 15/scaleofdevice, 0, 2 * Math.PI); //arc(x position, y position, radius, arc start, arc end) --full circumference of circle\r\n        data.ctx.fillStyle = '#ffb900'; //grey color\r\n        data.ctx.fill(); //add fill to see on screen--set fillstyle\r\n        data.ctx.closePath(); //close the path\r\n    }\r\n}\r\n\r\n\r\n//Score Counting \r\nfunction scoreCount(dot1 , dot2){\r\n\r\n\r\nresultArray[dot1][dot2] = 1;\r\nconsole.log(resultArray[dot1][dot2]);\r\nresultArray[dot2][dot1] = 1;\r\n\r\nconsole.log(resultArray);\r\n}\r\n\r\n//find the dots\r\nfunction findDots(dot1 , dot2){\r\n    let length = Object.keys(resultArray).length;\r\n    let d1 ,d2;\r\n    for(let i  = 1 ; i<= length ; i++){\r\n        let indexElement = 'v' + i.toString();\r\n        var dotx = (resultArray[indexElement].cx/1920)*data.canvas.width,  doty = (resultArray[indexElement].cy/1080)*data.canvas.height;\r\n        if(dot1.x == dotx && dot1.y == doty ) d1 = indexElement;\r\n        else if(dot2.x == dotx && dot2.y == doty) d2 = indexElement;\r\n    }\r\n    console.log(d1,d2);\r\n    scoreCount(d1,d2);\r\n}\r\n\r\n\r\n\r\nfunction startGame() {\r\n    resetValues();\r\n    \r\n    score = 0;\r\n    \r\n}\r\n\r\nfunction drawLine(toDot) { //drawing the line to toDot\r\n    data.ctx.beginPath();\r\n   //var width = (data.canvas.width * clickedDot.x) /1920 , height = (data.canvas.height * clickedDot.y)/1080,width2 = (data.canvas.width * toDot.x) /1920 , height = (data.canvas.height * toDot.y) /1080;\r\n    data.ctx.moveTo(data.clickedDot.x, data.clickedDot.y); //position of clickedDot(fromDot)\r\n    data.ctx.lineTo(toDot.x, toDot.y); //position of toDot\r\n\r\n    data.ctx.lineWidth = 5;\r\n    data.ctx.strokeStyle = '#777';\r\n    data.ctx.stroke();\r\n    data.ctx.closePath();\r\n    findDots(toDot , data.clickedDot);\r\n}\r\n\r\nfunction checkForDot(event) { //when user clicks down on mouse, checks if user clicked on a dot \r\n    //event which will give pageX and pageY property\r\n\r\n    var i = 0,\r\n        col = null; //collision dot (dot with which we collide)\r\n    for (; i < data.dots.length; i++) { //run a loop of dots to check whether or not it was on any of them\r\n        var d = data.dots[i], //dot at current index\r\n            //width = (data.canvas.width * d.x)/1920,height = (data.canvas.height *d.y)/1080,\r\n            c1 = { x: d.x, y: d.y, r: 15/scaleofdevice }, //circle1 object\r\n            c2 = { x: event.clientX/scaleofdevice, y: event.clientY/scaleofdevice, r: 15/scaleofdevice}; //circle2 object--touch\r\n        if (circleCollision(c1, c2)) col = d; //check if the circles are colliding-- if colliding, set collision dot = dot at current index\r\n    }\r\n\r\n    if (col !== null) { //colliding\r\n        if (data.clickedDot !== null) {\r\n            data.dots.fillStyle = 'black';\r\n            drawLine(col);\r\n        }\r\n        data.clickedDot = col; //save previous clicked dot\r\n    } else data.clickedDot = null; //not colliding on the screen--reset the line by clicking on empty space\r\n}\r\n\r\nfunction displayLetter(src, width, height) {\r\n    var img = document.createElement(\"img\");\r\n    img.src = src;\r\n    img.width = width;\r\n    img.height = height;\r\n\r\n    document.body.appendChild(img);\r\n}\r\n\r\nwindow.onload = function() {\r\n    document.getElementById(\"strt\").addEventListener(\"click\", startGame);\r\n    // document.getElementById(\"hint\").onclick = displayLetter('../../../images/ConnectDotsGame/A.jpg', 150, 200);\r\n}\r\n\r\n\r\n\r\ncheckButton.addEventListener('click',()=>{\r\n    console.log(actualObject);\r\n    console.log(resultArray);\r\n    let length = Object.keys(resultArray).length;\r\n    for(let i = 1 ; i<=length ; i++){\r\n        let indexElement = 'v' + i.toString();\r\n        for(let j =1 ; j <=length ; j++){\r\n            let indexElement2 = 'v' + j.toString();\r\n            if(resultArray[indexElement][indexElement2] == actualObject[indexElement][indexElement2]) score++;\r\n            if(resultArray[indexElement][indexElement2] != actualObject[indexElement][indexElement2]) score--;\r\n        }\r\n    }\r\n    scoreBar.innerHTML = Math.floor(score/edges * 10);\r\n\r\n   \r\n    resetValues();\r\n    \r\n})\r\n\r\nfunction resetValues(){\r\n    \r\n    data.clickedDot =null;\r\n    resultArray = null;\r\n    actualObject = null;\r\n    prepCanvas();\r\n    initilizeDots();\r\n    drawDots();\r\n}\n\n//# sourceURL=webpack://root/./scripts/Games/ConnectDotsGame/dots.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/Games/ConnectDotsGame/dots.js");
/******/ 	
/******/ })()
;