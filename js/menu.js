function getMenu() {
	// restart Tablic pomocniczych
	repeatBirds1 = [];
	repeatBirds2 = [];

	// zatrzymanie odtwarzania
	stopAllMediaPlayers();

	showPanel("menu");
}

// Ptaki w Menu
function getBirds() {
	const birdsMenu = document.getElementById("birdsMenu");
	const head = `
	<h1>Dostępne Ptaki</h1>
    <div>
		Wszystkie dostępne ptaki z fotografiami oraz danymi dotyczącymi autorstwa
	</div>
	<i class="fa-solid fa-magnifying-glass"></i>
	<input autocomplete="off" type="text" id="findBird">
	<div class="bodyCont"></div>
	`
	birdsMenu.innerHTML = head;

	const bodyCont = document.querySelector(".bodyCont");
	bodyCont.innerHTML = getBirdListHTML(birds)
	
	showPanel("birdsMenu");
	playPauseAudio(birds);
	

	// Wyszukiwanie
	const inputBird = document.getElementById("findBird")
	const sortBirds = sortBirdsByName(birds);

	inputBird.addEventListener("input", function (e) {
		const filteredBirds = sortBirds.filter((bird) =>
			bird.nazwa.toLowerCase().includes(inputBird.value))
		bodyCont.innerHTML = getBirdListHTML(filteredBirds)
		playPauseAudio(filteredBirds);
	})

	
}

function getBirdListHTML(birdList) {
	const sortBirds = sortBirdsByName(birdList);

	let row = ``;

	for (let i = 0; i < sortBirds.length; i++) {
		let song = "";
		let img = "";
		let name = `<div class="nameOfBird">${sortBirds[i].nazwa}</div>`;

		if (sortBirds[i].jpg != "") {
			img = `
            <img src="${sortBirds[i].jpg}" alt="Opis obrazka" width="100">
            `;
		}

		for (let j = 0; j < sortBirds[i].spiew.length; j++) {
			if (sortBirds[i].spiew[0] != "") {
				song += `
                <div class="audioContainer">
                    <audio id="myAudio${i}${j}">
                        <source src="https://${sortBirds[i].spiew[j]}" type="audio/mpeg">
                        Twoja przeglądarka nie obsługuje elementu audio.
                    </audio>

					<div class="audioBtns">
						<button class="playBtnList" id="toggleButton${i}${j}"><i class="fas fa-play"></i></button>
	
						<button class="restartBtnList" id="restartButton${i}${j}"><i class="fa-solid fa-rotate-left"></i></button>
					</div>
					
					

					<div class="authorCont">
						<div class="authorName">${sortBirds[i].autorzyDzwiekow[j]}</div>
						<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank"><i class="fa-brands fa-creative-commons"></i></a>
						<a href="https://xeno-canto.org/" target="_blank">xeno-canto</a>
					</div>
					
					

                </div>
            `;
			} else {
				song = "<div>brak dźwięku</div>";
			}
		}

		row += `
            <div id="listElement${i}" class="birdListElement">
				<div class="imgContainer">
					${img}
                	${name}
				</div>
                

                ${song}
            </div>
            `;
	}

	row += getMenuPanel();
	return row

}




function getReadyMadeSets() {
	const readyMadeSets = document.getElementById("readyMadeSets");
	let row = "";
	for (let i = 0; i < sets.length; i++) {
		row += `
                <button onclick="getQuiz(sets[${i}].ptaki)" id="set${i}">${sets[i].name}</button>
                 `;
	}

	row += getMenuPanel();
	readyMadeSets.innerHTML = row;

	showPanel("readyMadeSets");
}

function getMySets() {
	const mySetsW = document.getElementById("mySets");
	let row = `
	<div class="addRemoveCont">
		<button class="addNewSetBtn" onclick="setNewSet()">
			<i class="fa-solid fa-plus"></i>
		</button>
		<button class="removeAllSetsBtn" onclick="removeSets()">
			<i class="fa-solid fa-xmark"></i>
		</button>
	</div>
	
	`;

	// Odczyt z LOCAL STORAGE
	const birdsString = localStorage.getItem("myBirds");

	// Sprawdzamy, czy obiekt istnieje, a jeśli tak, parsujemy go
	if (birdsString) {
		const birdObiekt = JSON.parse(birdsString);
		mySets = birdObiekt;

		for (let i = 0; i < birdObiekt.length; i++) {
			row += `
                <button class="setList" onclick="getQuiz(mySets[${i}].ptaki)" id="mySets${i}">${birdObiekt[i].name}</button>
                 `;
		}
	} else {
		console.log("Obiekt nie został zapisany w localStorage");
	}

	row += `
      
      
		${getMenuPanel()}
      `;

	mySetsW.innerHTML = row;
	showPanel("mySets");
}

function setNewSet() {
	const allBirds = document.getElementById("birds");

	const sortBirds = sortBirdsByName(birds);

	let hiddenBirds = ``;
	for (let i = 0; i < birds.length; i++) {
		hiddenBirds += `
                    <div class="birdHidden" id="hiddenBird${i}">${sortBirds[i].nazwa}</div>
                    `;
	}

	let birdList = ``;
	for (let i = 0; i < birds.length; i++) {
		birdList += `
                    <div class="birdA" id="bird${i}">${birds[i].nazwa}</div>
                    `;
	}

	let row = `<div class="inputContainer">
    <div class="inputName">nazwa zestawu</div>
    <input type="text" autocomplete="off" id="nameOfSet" name="name"  /></div>
    <div class="validationInput">Wprowadź nazwę zestawu</div>
    <div class="birdContainer"> 
    <div class="hiddenBirdsCont">${hiddenBirds}</div>
    <div class="birdListCont">${birdList}</div>`;

	row += `</div>
    <button id="saveBtn">zapisz</button>
    <button onclick="getMenu()">Menu</button>
      `;

	allBirds.innerHTML = row;

	showPanel("birds");

	const nameOfSet = document.getElementById("nameOfSet");

	const mySet = [];
	for (let i = 0; i < birds.length; i++) {
		const bird = document.getElementById(`bird${i}`);

		bird.addEventListener("click", e => {
			mySet.push(bird.innerText);
			console.log(mySet);
		});

		checkBird();
	}

	// Przycisk Zapisz
	const saveBtn = document.getElementById("saveBtn");
	saveBtn.addEventListener("click", e => {
		console.log(nameOfSet.value == "");
		if (nameOfSet.value != "") {
			mySets.push(createNewBirdList(nameOfSet.value, mySet, birds));
			localStorage.setItem("myBirds", JSON.stringify(mySets));

			getMySets();
		} else {
			const validationInput = document.querySelector(".validationInput");

			validationInput.style.display = "block";
		}
	});
}

// Przycisk usuwania Zestawów
function removeSets() {
	localStorage.clear();
	mySets = [];

	getMySets();
}

function checkBird() {
	for (let i = 0; i < birds.length; i++) {
		const bird = document.querySelector(`#bird${i}`);

		const hiddenBird = document.querySelector(`#hiddenBird${i}`);

		bird.addEventListener("click", e => {
			bird.style.display = "none";
			hiddenBird.style.display = "block";
		});
	}
}

function playPauseAudio(list) {
	sortBirds = sortBirdsByName(list);

	for (let i = 0; i < sortBirds.length; i++) {
		for (let j = 0; j < sortBirds[i].spiew.length; j++) {
			console.log();
			const idK = `${i}${j}`;
			audio = document.getElementById(`myAudio${idK}`);
			setAudioButton(idK);
		}
	}
}


function findBird(){
	const inputBird = document.getElementById("findBird")
	const sortBirds = sortBirdsByName(birds);

	inputBird.addEventListener("input", function (e) {
		
		const filteredBirds = sortBirds.filter((bird) =>
			bird.nazwa.toLowerCase().includes(inputBird.value))
		return filteredBirds
	})

	
}