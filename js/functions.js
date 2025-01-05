function shuffleArray(arr) {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]]; //
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
function sortBirdsByFamily(birds) {
	return birds.sort((a, b) => {
		if (a.rodzina < b.rodzina) {
			return -1; 
		}
		if (a.rodzina > b.rodzina) {
			return 1; 
		}
		return 0; 
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
	<div>`;
}

// usuwanie zbędnych spacji
const trimTrailingSpaces = str => str.replace(/\s+$/, "");

// HTML Zestawu
function getHTMLSet(set, iteration, sets, isTrash = false) {
	let trashCan = `
		<button class="trashSet hidden" id="trash${iteration}" onclick="removeSet(${iteration})">
			<i class="fa-solid fa-trash-can"></i>
		</button>
	`;

	let thisSets = "mySets";

	if (!isTrash) {
		trashCan = "";
		thisSets = "sets";
	}

	return `<div class="checkSetBtnsCont">
                    <div class="checkSetName">${set[iteration].name}</div>

                    <div class="checkSetBtn">
                    <button class="learnBtn" onclick="getQuiz(${sets}[${iteration}].ptaki, type='sounds')" id="set${iteration}"><i class="fa-solid fa-music"></i></button>

                    <button class="learnBtn"  onclick="getQuiz(${sets}[${iteration}].ptaki, type='image')" id="set${iteration}"><i class="fa-solid fa-image"></i></button>

					<button class="learnBtn"  onclick="showInfoPanel(${iteration}, ${thisSets})" >
					<i class="fa-solid fa-info"></i>
					</button>


					${trashCan}


                    </div>
                </div>
                 `;
}

function removeItemByName(data, nameToRemove) {
	/**
	 * Usuwa element z listy na podstawie wartości klucza 'name'.
	 *
	 * @param {Array} data - Lista obiektów.
	 * @param {string} nameToRemove - Wartość klucza 'name' elementu, który ma zostać usunięty.
	 * @return {Array} - Zaktualizowana lista danych bez usuniętego elementu.
	 */
	return data.filter(item => item.name !== nameToRemove);
}

function removeInfoPanel() {
	const infoPanel = document.querySelectorAll(".infoPanel");
	stopAllMediaPlayers()
	infoPanel.forEach(element => {
		element.classList.add("hidden");
	});
}

// Pokazuje Panel z listą ptaków
function showInfoPanel(iteration, setsW) {
	const infoPanel = document.querySelectorAll(".infoPanel");

	infoPanel.forEach(element => {
		element.classList.toggle("hidden");

		const infoContent = document.querySelector(".infoContent");

		let infoList = `<div class="setNameInfo">${setsW[iteration].name}</div>`;

		for (let i = 0; i < setsW[iteration].ptaki.length; i++) {
			infoList += `
			<li>
				<div class="contListImg">
				 	<img  src="${
					getImgByName(setsW[iteration].ptaki[i].nazwa)
					}" alt="">
				</div>
				${setsW[iteration].ptaki[i].nazwa}
			
			</li>
		`;
		}

		let infoListHTML = `<ul>${infoList}</ul>
		<br><br><br>`;

		infoContent.innerHTML = infoListHTML;
	});
}




function getInfoPanel() {
	return `
	
	<div class="infoPanel hidden">
		<button onclick="removeInfoPanel()">
			<i class="fa-solid fa-x"></i>
		</button>
		<div class="infoContent"></div>
	</div>`;
}

// Zwraca stringa do pierwszego przecinka
function getStringBeforeComma(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    const commaIndex = input.indexOf(',');
    return commaIndex !== -1 ? input.slice(0, commaIndex) : input;
}

// i po ostatnim
function getStringAfterLastComma(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    const lastCommaIndex = input.lastIndexOf(',');
    return lastCommaIndex !== -1 ? input.slice(lastCommaIndex + 1).trim() : '';
}


// zwraca Ptaka po nazwie
function findBirdFromList(birdList, name) {
    return birdList.find(bird => bird.nazwa === name) || null;
}


function getImgByName(name) {
	const bird = findBirdFromList(birds, name)
	return bird.jpg
}

