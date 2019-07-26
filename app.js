// const shuffle = function(array) {

// 	var currentIndex = array.length;
// 	var temporaryValue, randomIndex;

// 	// While there remain elements to shuffle...
// 	while (0 !== currentIndex) {
// 		// Pick a remaining element...
// 		randomIndex = Math.floor(Math.random() * currentIndex);
// 		currentIndex -= 1;

// 		// And swap it with the current element.
// 		temporaryValue = array[currentIndex];
// 		array[currentIndex] = array[randomIndex];
// 		array[randomIndex] = temporaryValue;
// 	}

// 	return array;

// };

// const array=["fa-html5", "fa-js","fa-css3-alt", "fa-react", "fa-node","fa-angular","fa-git","fa-vuejs", "fa-html5", "fa-js","fa-css3-alt","fa-node","fa-angular","fa-git","fa-vuejs", "fa-react"];

// const shuffleCards = (e) => {
//   const results = shuffle(array);
//   const a = results.map((result => {
//     return `<div class="card" type="html"><i class="fab ${result}"></i></div>`;
//   })).join(' ');
//   document.getElementById('board').innerHTML = a;
// };

// window.onload = shuffleCards();
window.onload = () => {

}
const empty = document.getElementsByClassName('fab');
const cards = document.getElementsByClassName('card');
const btn = document.getElementById('refresh');

// Set cards display to none
const startGame = () =>{
	Array.from(empty).forEach((empty) => {
		empty.style.display = 'none';
	})
}
setTimeout(startGame, 5000);

// Shuffle Cards Positions
const shuffle = () =>{
	Array.from(cards).forEach((card) =>{
		card.style.order = Math.floor(Math.random() * 16);
	});
	Array.from(empty).forEach(function(brown){
	brown.style.display = 'block';
	let count = document.getElementById('moves');
	count.textContent = "0"; 
	})
	console.log('Card has reshuffled.')
	setTimeout(startGame, 5000);
}

shuffle();

// Count Number of Moves
const counter = () => {
	let count = document.getElementById('moves');
	count.textContent++; 
}

// Display cards on click
function click(){
	Array.from(cards).forEach(function(card){
		card.addEventListener("click", function(e){
			this.childNodes[0].style.display = 'block';
		});
	});
}
click();