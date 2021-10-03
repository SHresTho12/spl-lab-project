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

eval("const word = document.getElementById('word');\nconst text = document.getElementById('text');\nconst scoreEl = document.getElementById('score');\nconst timeEl = document.getElementById('time');\nconst endgameEl = document.getElementById('end-game-container');\nconst settingsBtn = document.getElementById('typing-settings-btn');\nconst settings = document.getElementById('typing-settings');\nconst settingsForm = document.getElementById('typing-settings-form');\nconst difficultySelect = document.getElementById('difficulty');\n\n// List of words for game\nconst words = [\n  'sigh',\n  'tense',\n  'airplane',\n  'ball',\n  'pies',\n  'juice',\n  'warlike',\n  'bad',\n  'north',\n  'dependent',\n  'steer',\n  'silver',\n  'highfalutin',\n  'superficial',\n  'quince',\n  'eight',\n  'feeble',\n  'admit',\n  'drag',\n  'loving'\n];\n\n// Init word\nlet randomWord;\n\n// Init score\nlet score = 0;\n\n// Init time\nlet time = 10;\n\n// Set difficulty to value in ls or medium\nlet difficulty =\n  localStorage.getItem('difficulty') !== null\n    ? localStorage.getItem('difficulty')\n    : 'medium';\n\n// Set difficulty select value\ndifficultySelect.value =\n  localStorage.getItem('difficulty') !== null\n    ? localStorage.getItem('difficulty')\n    : 'medium';\n\n// Focus on text on start\ntext.focus();\n\n// Start counting down\nconst timeInterval = setInterval(updateTime, 1000);\n\n// Generate random word from array\nfunction getRandomWord() {\n  return words[Math.floor(Math.random() * words.length)];\n}\n\n// Add word to DOM\nfunction addWordToDOM() {\n  randomWord = getRandomWord();\n  word.innerHTML = randomWord;\n}\n\n// Update score\nfunction updateScore() {\n  score++;\n  scoreEl.innerHTML = score;\n}\n\n// Update time\nfunction updateTime() {\n  time--;\n  timeEl.innerHTML = time + 's';\n\n  if (time === 0) {\n    clearInterval(timeInterval);\n    // end game\n    gameOver();\n  }\n}\n\n// Game over, show end screen\nfunction gameOver() {\n  endgameEl.innerHTML = `\n    <h1>Time ran out</h1>\n    <p>Your final score is ${score}</p>\n    <button onclick=\"location.reload()\">Reload</button>\n  `;\n\n  endgameEl.style.display = 'flex';\n}\n\naddWordToDOM();\n\n// Event listeners\n\n// Typing\ntext.addEventListener('input', e => {\n  const insertedText = e.target.value;\n\n  if (insertedText === randomWord) {\n    addWordToDOM();\n    updateScore();\n\n    // Clear\n    e.target.value = '';\n\n    if (difficulty === 'hard') {\n      time += 2;\n    } else if (difficulty === 'medium') {\n      time += 3;\n    } else {\n      time += 5;\n    }\n\n    updateTime();\n  }\n});\n\n// Settings btn click\nsettingsBtn.addEventListener('click', () => settings.classList.toggle('settings-hide'));\n\n// Settings select\nsettingsForm.addEventListener('change', e => {\n  difficulty = e.target.value;\n  localStorage.setItem('difficulty', difficulty);\n});\n\n//# sourceURL=webpack://root/./scripts/quizzes/typingTest.js?");

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