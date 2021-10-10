const msgElement = document.getElementById('msg');

const randomNum = getRandomNumber();
    //
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;



let recognition = new window.SpeechRecognition();

//start recognition and the game
recognition.start();


//capture user voice
function onSpeak(e){
   const msg = e.results[0][0].transcript;

   writeMessage(msg);
   checkNumber(msg);
   console.log(msg);
}


//Write the result on the webpage

function writeMessage(msg){
    msgElement.innerHTML= `
    <div>You Said :</div>
    <span class="guessBox">${msg}</span>
    `;
    
    
    
}


//check for the result

// Check msg against number
function checkNumber(msg) {
    const num = +msg;
  
    // Check if valid number
    if (Number.isNaN(num)) {
      msgElement.innerHTML += '<div>That is not a valid number</div>';
      return;
    }
  
    // Check in range
    if (num > 100 || num < 1) {
      msgElement.innerHTML += '<div>Number must be between 1 and 100</div>';
      return;
    }
  
    // Check number
    if (num === randomNum) {
      document.body.innerHTML = `
        <h2>Congrats! You have guessed the number! <br><br>
        It was ${num}</h2>
        <button class="play-again" id="play-again">Play Again</button>
      `;
    } else if (num > randomNum) {
      msgElement.innerHTML += '<div>GO LOWER</div>';
    } else {
      msgElement.innerHTML += '<div>GO HIGHER</div>';
    }
  }
  


//generate random number
function getRandomNumber(){
    return Math.floor(Math.random()*100) +1;
}

// Speak result
recognition.addEventListener('result', onSpeak);

// End SR service
recognition.addEventListener('end', () => recognition.start());

document.body.addEventListener('click', e => {
  if (e.target.id == 'play-again') {
    window.location.reload();
  }
});
