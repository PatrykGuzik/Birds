function shuffleArray(arr) {
	// Przesuwamy elementy w tablicy w sposób losowy (algorytm Fisher-Yates)
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]]; // Zamiana miejscami elementów
	}
	return arr;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function removeFromListByName(list, name) {
	return list.filter(obj => obj.name !== name);
}
function showPanel(panel) {
	const cards = document.querySelector(".cards");
	const menu = document.querySelector(".menu");
	const readyMadeSets = document.querySelector(".readyMadeSets");
	const mySets = document.querySelector(".mySets");
	const birdsMenu = document.querySelector(".birdsMenu");
	const birds = document.querySelector(".birds");

	const panelToShow = document.querySelector(`.${panel}`);

	cards.style.display = "none";
	menu.style.display = "none";
	readyMadeSets.style.display = "none";
	mySets.style.display = "none";
	birdsMenu.style.display = "none";
	birds.style.display = "none";

	panelToShow.style.display = "block";
}

function stopAllMediaPlayers() {
	// Pobranie wszystkich elementów audio i video na stronie
	const mediaElements = document.querySelectorAll("audio, video");

	// Iteracja po wszystkich elementach i zatrzymanie ich
	mediaElements.forEach(element => {
		element.pause(); // Zatrzymuje odtwarzanie
		element.currentTime = 0; // Przewija do początku, opcjonalnie
	});
}

// Sortowanie
function sortBirdsByName(birds) {
	return birds.sort((a, b) => {
		// Porównujemy nazwy ptaków (będą one posortowane alfabetycznie)
		if (a.nazwa < b.nazwa) {
			return -1; // a powinno być przed b
		}
		if (a.nazwa > b.nazwa) {
			return 1; // b powinno być przed a
		}
		return 0; // jeśli są równe
	});
}

function hiddCounter() {
	const counter = document.getElementById("counter");
	counter.style.display = "none";
}
function showCounter() {
	const counter = document.getElementById("counter");
	counter.style.display = "block";
}


function getMenuPanel() {
	return `
	<div class="menuPanel">
		<button id="menuBtn" onclick="getMenu()">
			<i class="fa-solid fa-house"></i>
		</button>
	<div>`
	
	
}