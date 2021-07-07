

//audio controller for all kinds of moves and matches

class AudioController {
  
  constructor() {
      this.bgMusic = new Audio('../../Assests/Audio/creepy.mp3');
      this.flipSound = new Audio('../../Assests/Audio/flip.wav');
      this.matchSound = new Audio('../../Assests/Audio/match.wav');
      this.victorySound = new Audio('../../Assests/Audio/victory.wav');
      this.gameOverSound = new Audio('../../Assests/Audio/gameOver.wav');
      this.bgMusic.volume = 0.5;
      this.bgMusic.loop = true;
  }
  startMusic() {
      this.bgMusic.play();
  }
  stopMusic() {
      this.bgMusic.pause();
      this.bgMusic.currentTime = 0;
  }
  flip() {
      this.flipSound.play();
  }
  match() {
      this.matchSound.play();
  }
  victory() {
      this.stopMusic();
      this.victorySound.play();
  }
  gameOver() {
      this.stopMusic();
      this.gameOverSound.play();
  }
}
//Creating a Game Class 
class MixOrMatch {
  constructor(totalTime, cards) {
      this.cardsArray = cards;
      this.totalTime = totalTime;
      this.timeRemaining = totalTime;
      this.timer = document.getElementById('time-remaining')
      this.ticker = document.getElementById('flips');
      this.cardScore = document.getElementById('score');
      this.audioController = new AudioController();
      this.score = 0;
  }

  startGame() {
      this.totalClicks = 0;
      this.timeRemaining = this.totalTime;
      this.cardToCheck = null;
      this.matchedCards = [];
      this.busy = true;
      setTimeout(() => {
          this.audioController.startMusic();
          this.shuffleCards(this.cardsArray);
          this.countdown = this.startCountdown();
          this.busy = false;
      }, 500)
      this.hideCards();
      this.timer.innerText = this.timeRemaining;
      this.ticker.innerText = this.totalClicks;
  }
  startCountdown() {
      return setInterval(() => {
          this.timeRemaining--;
          this.timer.innerText = this.timeRemaining;
          if(this.timeRemaining === 0)
              this.gameOver();
      }, 1000);
  }
  gameOver() {
      clearInterval(this.countdown);
      this.audioController.gameOver();
      document.getElementById('game-over-text').classList.add('visible');
  }
  victory() {
      clearInterval(this.countdown);
      this.audioController.victory();
      document.getElementById('victory-text').classList.add('visible');
  }
  hideCards() {
      this.cardsArray.forEach(card => {
          card.classList.remove('visible');
          card.classList.remove('matched');
      });
  }
  //Flipping a Card
  flipCard(card) {
      if(this.canFlipCard(card)) {
          this.audioController.flip();
          this.totalClicks++;
          this.ticker.innerText = this.totalClicks;
          card.classList.add('visible');

          if(this.cardToCheck) {
              this.checkForCardMatch(card);
          } else {
              this.cardToCheck = card;
          }
      }
  }
  //Checking card for match
  checkForCardMatch(card) {
      if(this.getCardType(card) === this.getCardType(this.cardToCheck))
          {this.cardMatch(card, this.cardToCheck);
            this.score = this.score+10;
            this.cardScore.innerHTML = this.score;
          }
      else 
          this.cardMismatch(card, this.cardToCheck);

      this.cardToCheck = null;
  }
  //Actual Matching Function
  cardMatch(card1, card2) {
      this.matchedCards.push(card1);
      this.matchedCards.push(card2);
      card1.classList.add('matched');
      card2.classList.add('matched');
      card1.classList.remove('hints');
      card2.classList.remove('hints');
      this.audioController.match();
      if(this.matchedCards.length === this.cardsArray.length)
          this.victory();
  }
  cardMismatch(card1, card2) {
      this.busy = true;
      setTimeout(() => {
          card1.classList.remove('visible');
          card2.classList.remove('visible');
          this.busy = false;
      }, 1000);
  }
  shuffleCards(cardsArray) { // Fisher-Yates Shuffle Algorithm.
      for (let i = cardsArray.length - 1; i > 0; i--) {
          let randIndex = Math.floor(Math.random() * (i + 1));
          cardsArray[randIndex].style.order = i;
          cardsArray[i].style.order = randIndex;
      }
  }
  getCardType(card) {
      return card.getElementsByClassName('memory-card-value')[0].src;
  }
  canFlipCard(card) {
      return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
  }
}

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {
  let overlays = Array.from(document.getElementsByClassName('overlay-text'));
  let cards = Array.from(document.getElementsByClassName('memory-card'));
  let game = new MixOrMatch(100, cards);
  let hintButton = document.getElementById('hint-button');

  hintButton.addEventListener('click',()=>{

    let hintCards = Array.from(document.getElementsByClassName('hint'));
    hintCards.forEach(hintCard => {
      hintCard.classList.add('hints-memory-card');
    });

    setTimeout(() => {
      let rotatedCard = Array.from(document.getElementsByClassName('hints-memory-card'));
      rotatedCard.forEach(card => {
        card.classList.remove('hints-memory-card');
      });
  }, 5000);


  });

  overlays.forEach(overlay => {
      overlay.addEventListener('click', () => {
          overlay.classList.remove('visible');
          game.startGame();
      });
  });

  cards.forEach(card => {
      card.addEventListener('click', () => {
          game.flipCard(card);
      });
  });
}

// let hasFlippedCard = false;
// let lockBoard = false;
// let firstCard, secondCard;

// function flipCard() {

//     if (lockBoard) return;
//     if (this === firstCard) return
//   this.classList.add('memory-card-flip');

//   if (!hasFlippedCard) {

//     // first click
//     hasFlippedCard = true;
//     firstCard = this;

//     return;
//   }

//   // second click
//   hasFlippedCard = false;
//   secondCard = this;

//   checkForMatch();
// }

// function checkForMatch() {
//   let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

//   isMatch ? disableCards() : unflipCards();
// }

// //Diabling a card from further fliping
// function disableCards() {
//   firstCard.removeEventListener('click', flipCard);
//   secondCard.removeEventListener('click', flipCard);

//   resetBoard();
// }

// //Making unflipped card go to the previous state

// function unflipCards() {
//     lockBoard = true;
//   setTimeout(() => {
//     firstCard.classList.remove('memory-card-flip');
//     secondCard.classList.remove('memory-card-flip');
//     resetBoard();

//   }, 1500);
// }

//reset the board


