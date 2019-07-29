// const empty = document.getElementsByClassName('fab');
// const cards = document.getElementsByClassName('card');
// const btn = document.getElementById('refresh');

const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
  secondCard = this;
  checkForMatch();
}

checkForMatch = () => {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
  resetBoard();
})();

cards.forEach(card => card.addEventListener('click', flipCard));

// Set cards display to none
// const startGame = () =>{
// 	Array.from(empty).forEach((empty) => {
// 		empty.style.display = 'none';
// 	});
// }
// setTimeout(startGame, 3000);

// // Shuffle Cards Positions
const shuffle = () =>{
	Array.from(cards).forEach((card) =>{
		card.style.order = Math.floor(Math.random() * 16);
	});
	Array.from(empty).forEach(function(brown){
	brown.style.display = 'block';
	let count = document.getElementById('moves');
	count.textContent = "0"; 
	});
	setTimeout(startGame, 3000);
}

shuffle();

// Count Number of Moves
const counter = function counter(){
	let count = document.getElementById('moves');
	count.textContent++; 
}