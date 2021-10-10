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

/***/ "./scripts/quizzes/typingTest.js":
/*!***************************************!*\
  !*** ./scripts/quizzes/typingTest.js ***!
  \***************************************/
/***/ (() => {

eval("const word = document.getElementById('word');\r\nconst text = document.getElementById('text');\r\nconst scoreEl = document.getElementById('score');\r\nconst timeEl = document.getElementById('time');\r\nconst endgameEl = document.getElementById('end-game-container');\r\nconst settingsBtn = document.getElementById('typing-settings-btn');\r\nconst settings = document.getElementById('typing-settings');\r\nconst settingsForm = document.getElementById('typing-settings-form');\r\nconst difficultySelect = document.getElementById('difficulty');\r\nconst startBtn = document.getElementById('start-btn');\r\n\r\n// List of words for game\r\nconst words = [\r\n  'sigh',\r\n  'tense',\r\n  'airplane',\r\n  'ball',\r\n  'pies',\r\n  'juice',\r\n  'warlike',\r\n  'bad',\r\n  'north',\r\n  'dependent',\r\n  'steer',\r\n  'silver',\r\n  'highfalutin',\r\n  'superficial',\r\n  'quince',\r\n  'eight',\r\n  'feeble',\r\n  'admit',\r\n  'drag',\r\n  'loving'\r\n];\r\n\r\n// Init word\r\nlet randomWord;\r\n\r\n// Init score\r\nlet score = 0;\r\n\r\n// Init time\r\nlet time = 10;\r\n\r\n// Set difficulty to value in ls or medium\r\nlet difficulty =\r\n  localStorage.getItem('difficulty') !== null\r\n    ? localStorage.getItem('difficulty')\r\n    : 'medium';\r\n\r\n// Set difficulty select value\r\ndifficultySelect.value =\r\n  localStorage.getItem('difficulty') !== null\r\n    ? localStorage.getItem('difficulty')\r\n    : 'medium';\r\n\r\n// Focus on text on start\r\ntext.focus();\r\n\r\n// Start counting down\r\nlet timeInterval ;\r\nstartBtn.addEventListener(\"click\",function(){\r\n  timeInterval = setInterval(updateTime, 1000);\r\n  text.value = \"\";\r\n  // Typing\r\ntext.addEventListener('input', e => {\r\n  const insertedText = e.target.value;\r\n\r\n  if (insertedText === randomWord) {\r\n    addWordToDOM();\r\n    updateScore();\r\n\r\n    // Clear\r\n    e.target.value = '';\r\n\r\n    if (difficulty === 'hard') {\r\n      time += 2;\r\n    } else if (difficulty === 'medium') {\r\n      time += 3;\r\n    } else {\r\n      time += 5;\r\n    }\r\n\r\n    updateTime();\r\n  }\r\n});\r\n})\r\n// Generate random word from array\r\nfunction getRandomWord() {\r\n  return words[Math.floor(Math.random() * words.length)];\r\n}\r\n\r\n// Add word to DOM\r\nfunction addWordToDOM() {\r\n  randomWord = getRandomWord();\r\n  word.innerHTML = randomWord;\r\n}\r\n\r\n// Update score\r\nfunction updateScore() {\r\n  score++;\r\n  scoreEl.innerHTML = score;\r\n}\r\n\r\n// Update time\r\nfunction updateTime() {\r\n  time--;\r\n  timeEl.innerHTML = time + 's';\r\n\r\n  if (time === 0) {\r\n    clearInterval(timeInterval);\r\n    // end game\r\n    gameOver();\r\n  }\r\n}\r\n\r\n// Game over, show end screen\r\nfunction gameOver() {\r\n  endgameEl.innerHTML = `\r\n    <h1 id=\"warning\">Time ran out!!!!!!</h1>\r\n    <p id=\"score\">Your final score is ${score}</p>\r\n    <button class=\"typingGameReload\" onclick=\"location.reload()\">Reload</button>\r\n  `;\r\n\r\n  endgameEl.style.display = 'flex';\r\n}\r\n\r\naddWordToDOM();\r\n\r\n// Event listeners\r\n\r\n\r\n\r\n// Settings btn click\r\nsettingsBtn.addEventListener('click', () => settings.classList.toggle('settings-hide'));\r\n\r\n// Settings select\r\nsettingsForm.addEventListener('change', e => {\r\n  difficulty = e.target.value;\r\n  localStorage.setItem('difficulty', difficulty);\r\n});\n\n//# sourceURL=webpack://root/./scripts/quizzes/typingTest.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/quizzes/typingTest.js"]();
/******/ 	
/******/ })()
;