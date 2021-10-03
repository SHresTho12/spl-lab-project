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

/***/ "./scripts/Games/ConnectDotsGame/dots.js":
/*!***********************************************!*\
  !*** ./scripts/Games/ConnectDotsGame/dots.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Assests_dotsGameResource_images_json_numbersJson_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Assests/dotsGameResource/images_json/numbersJson.json */ \"./Assests/dotsGameResource/images_json/numbersJson.json\");\n\n\nlet resultArray;\nlet actualObject;\nlet score = 0;\nlet edges = 0;\nlet scaleofdevice = window.devicePixelRatio;\n\n// var count = Object.keys(jsonData).length;\n\n// console.log(count);\nvar nextButton = document.getElementById('nextButton');\nvar checkButton = document.getElementById('check');\nvar scoreBar = document.getElementById('score');\nlet dotsNumber = 0;\nvar data = { //global variable set equal to object\n    canvas: null,\n    ctx: null,\n    clickedDot: null, //dot that was previously clicked--fromDot\n    // dots: [{ x: 200, y: 200 }, { x: 300, y: 200 }, { x: 220, y: 150 }, { x: 280, y: 150 }, { x: 250, y: 100 }] // letter A //array-dots variable\n        // dots2: [{ x: 100, y: 100 }, { x: 200, y: 100 }, { x: 100, y: 200 }, { x: 200, y: 200 }] // shape rectangle\n        dots:null\n};\n\n//creating the object that will hold result\nfunction resultObject(number){\n    resultArray = JSON.parse(JSON.stringify(_Assests_dotsGameResource_images_json_numbersJson_json__WEBPACK_IMPORTED_MODULE_0__[number]));\n    let length = Object.keys(resultArray).length;\n    for(let i = 1 ; i<=length ; i++){\n        let indexElement = 'v' + i.toString();\n        for(let j =1 ; j <=length ; j++){\n            let indexElement2 = 'v' + j.toString();\n            if( resultArray[indexElement][indexElement2] = 1) edges++;\n            resultArray[indexElement][indexElement2] = 0;\n        }\n    }\n}\n\n\n//Creating the array for the dots position\nfunction dotsIndex(arg){\n    \n    let dots = [];\n    let length = Object.keys(arg).length;\n    for(let i = 1 ; i <= length;i++){\n        let indexElement = 'v' + i.toString();\n        var width = (arg[indexElement].cx/1920)*data.canvas.width, height = (arg[indexElement].cy/1080)*data.canvas.height;\n        let index = {x:width, y:height };\n        dots.push(index);\n    }\n    console.log(data.dots);\n    return dots;\n\n}\n\n\n\n//Dynamically changing the alphabet\nnextButton.addEventListener('click' , ()=> {\n   \n    prepCanvas();\n    initilizeDots();\n    drawDots();\n    data.clickedDot =null;\n} );\n\n\n\n\n\nfunction circleCollision(c1, c2) { //finds whether or not two circles are colliding on the screen\n    var a = c1.r + c2.r,\n        x = c1.x - c2.x,\n        y = c1.y - c2.y;\n\n    if (a > Math.sqrt((x * x) + (y * y))) return true; //colliding\n    else return false; //not colliding\n}\n\nfunction initilizeDots(){\n     dotsNumber = Math.floor(Math.random() * 5);\n     console.log(dotsNumber);\n     \n     actualObject = _Assests_dotsGameResource_images_json_numbersJson_json__WEBPACK_IMPORTED_MODULE_0__[dotsNumber];\n     \n    data.dots = dotsIndex(_Assests_dotsGameResource_images_json_numbersJson_json__WEBPACK_IMPORTED_MODULE_0__[dotsNumber]);\n     resultObject(dotsNumber);\n    }\n\nfunction prepCanvas() { //setup resolution and size of canvas\n    var res = window.devicePixelRatio || 1, //resolution\n        scale = 1 / res;\n    data.canvas = document.getElementById('dots'); //dots canvas\n    data.ctx = data.canvas.getContext('2d'); //context\n   \n    data.canvas.width =window.innerWidth * scale;\n    data.canvas.height =window.innerHeight * scale;\n    data.canvas.style.width =window.innerWidth *scale + 'px';\n    data.canvas.style.height = window.innerHeight * scale + 'px';\n    // console.log(data.canvas.height);\n    data.ctx.scale(res, res);\n    data.canvas.addEventListener('mousedown', function(event) { //mousedown event listener(click mouse), will call a function which will call checkForDot function\n        console.log(event.clientX,event.clientY);\n        checkForDot(event);\n    });\n}\n\nfunction drawDots() { //draws the dots on the screen\n    var i = 0;\n    for (; i < data.dots.length; i++) { //loop \n        var d = data.dots[i];\n        //var width = (d.x/1920)*data.canvas.width;\n        //var height = (d.y/1080)*data.canvas.height;\n        data.ctx.beginPath(); //begin a new path\n        data.ctx.arc(d.x, d.y, 15/scaleofdevice, 0, 2 * Math.PI); //arc(x position, y position, radius, arc start, arc end) --full circumference of circle\n        data.ctx.fillStyle = '#28b485b6'; //grey color\n        data.ctx.fill(); //add fill to see on screen--set fillstyle\n        data.ctx.closePath(); //close the path\n    }\n}\n\n\n//Score Counting \nfunction scoreCount(dot1 , dot2){\n\n\nresultArray[dot1][dot2] = 1;\nconsole.log(resultArray[dot1][dot2]);\nresultArray[dot2][dot1] = 1;\n\nconsole.log(resultArray);\n}\n\n//find the dots\nfunction findDots(dot1 , dot2){\n    let length = Object.keys(resultArray).length;\n    let d1 ,d2;\n    for(let i  = 1 ; i<= length ; i++){\n        let indexElement = 'v' + i.toString();\n        var dotx = (resultArray[indexElement].cx/1920)*data.canvas.width,  doty = (resultArray[indexElement].cy/1080)*data.canvas.height;\n        if(dot1.x == dotx && dot1.y == doty ) d1 = indexElement;\n        else if(dot2.x == dotx && dot2.y == doty) d2 = indexElement;\n    }\n    console.log(d1,d2);\n    scoreCount(d1,d2);\n}\n\n\n\nfunction startGame() {\n    resetValues();\n    \n    score = 0;\n    \n}\n\nfunction drawLine(toDot) { //drawing the line to toDot\n    data.ctx.beginPath();\n   //var width = (data.canvas.width * clickedDot.x) /1920 , height = (data.canvas.height * clickedDot.y)/1080,width2 = (data.canvas.width * toDot.x) /1920 , height = (data.canvas.height * toDot.y) /1080;\n    data.ctx.moveTo(data.clickedDot.x, data.clickedDot.y); //position of clickedDot(fromDot)\n    data.ctx.lineTo(toDot.x, toDot.y); //position of toDot\n\n    data.ctx.lineWidth = 5;\n    data.ctx.strokeStyle = '#777';\n    data.ctx.stroke();\n    data.ctx.closePath();\n    findDots(toDot , data.clickedDot);\n}\n\nfunction checkForDot(event) { //when user clicks down on mouse, checks if user clicked on a dot \n    //event which will give pageX and pageY property\n\n    var i = 0,\n        col = null; //collision dot (dot with which we collide)\n    for (; i < data.dots.length; i++) { //run a loop of dots to check whether or not it was on any of them\n        var d = data.dots[i], //dot at current index\n            //width = (data.canvas.width * d.x)/1920,height = (data.canvas.height *d.y)/1080,\n            c1 = { x: d.x, y: d.y, r: 15/scaleofdevice }, //circle1 object\n            c2 = { x: event.clientX/scaleofdevice, y: event.clientY/scaleofdevice, r: 15/scaleofdevice}; //circle2 object--touch\n        if (circleCollision(c1, c2)) col = d; //check if the circles are colliding-- if colliding, set collision dot = dot at current index\n    }\n\n    if (col !== null) { //colliding\n        if (data.clickedDot !== null) {\n            data.dots.fillStyle = 'black';\n            drawLine(col);\n        }\n        data.clickedDot = col; //save previous clicked dot\n    } else data.clickedDot = null; //not colliding on the screen--reset the line by clicking on empty space\n}\n\nfunction displayLetter(src, width, height) {\n    var img = document.createElement(\"img\");\n    img.src = src;\n    img.width = width;\n    img.height = height;\n\n    document.body.appendChild(img);\n}\n\nwindow.onload = function() {\n    document.getElementById(\"strt\").addEventListener(\"click\", startGame);\n    // document.getElementById(\"hint\").onclick = displayLetter('../../../images/ConnectDotsGame/A.jpg', 150, 200);\n}\n\n\n\ncheckButton.addEventListener('click',()=>{\n    console.log(actualObject);\n    console.log(resultArray);\n    let length = Object.keys(resultArray).length;\n    for(let i = 1 ; i<=length ; i++){\n        let indexElement = 'v' + i.toString();\n        for(let j =1 ; j <=length ; j++){\n            let indexElement2 = 'v' + j.toString();\n            if(resultArray[indexElement][indexElement2] == actualObject[indexElement][indexElement2]) score++;\n            if(resultArray[indexElement][indexElement2] != actualObject[indexElement][indexElement2]) score--;\n        }\n    }\n    scoreBar.innerHTML = Math.floor(score/edges * 10);\n\n   \n    resetValues();\n    \n})\n\nfunction resetValues(){\n    \n    data.clickedDot =null;\n    resultArray = null;\n    actualObject = null;\n    prepCanvas();\n    initilizeDots();\n    drawDots();\n}\n\n//# sourceURL=webpack://root/./scripts/Games/ConnectDotsGame/dots.js?");

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