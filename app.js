const shuffle = function(array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

const array=["fa-html5", "fa-js","fa-css3-alt", "fa-react", "fa-node","fa-angular","fa-git","fa-vuejs", "fa-html5", "fa-js","fa-css3-alt","fa-node","fa-angular","fa-git","fa-vuejs", "fa-react"];

const shuffleCards = (e) => {
  const results = shuffle(array);
  const a = results.map((result => {
    return `<div class="card" type="html"><i class="fab ${result}"></i></div>`;
  })).join(' ');
  document.getElementById('board').innerHTML = a;
}

window.onload = shuffleCards();