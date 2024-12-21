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
	const sortBirds = sortBirdsByName(birds);

	let row = `<h1>Dostępne Ptaki</h1>
            <div>Wszystkie dostępne ptaki z fotografiami oraz danymi dotyczącymi autorstwa</div>`;

	for (let i = 0; i < sortBirds.length; i++) {
		let song = "";
        let img = ""
		let name = `<div class="nameOfBird">${sortBirds[i].nazwa}</div>`

        if (sortBirds[i].jpg != "") {
            img = `
            <img src="${sortBirds[i].jpg}" alt="Opis obrazka" width="100">
            `
        }

		for (let j = 0; j < sortBirds[i].spiew.length; j++) {
			if (sortBirds[i].spiew[0] != "") {
				console.log(sortBirds[i].nazwa);

				song += `
                <div class="audioContainer">
                    <audio controls>
                        <source src="https://${sortBirds[i].spiew[j]}" type="audio/mpeg">
                        Twoja przeglądarka nie obsługuje elementu audio.
                    </audio>
                    <div class="authorName">${sortBirds[i].autorzyDzwiekow[j]}</div>

                </div>
            `;
			} else {
				song = "<div>brak dźwięku</div>";
			}
		}

		row += `
            <div class="birdListElement">
                ${img}
                ${name}
                ${song}
            </div>
            `;
	}

	row += `<button onclick="getMenu()">Menu</button>`;
	birdsMenu.innerHTML = row;

	showPanel("birdsMenu");
}

function getReadyMadeSets() {
	const readyMadeSets = document.getElementById("readyMadeSets");
	let row = "";
	for (let i = 0; i < sets.length; i++) {
		row += `
                <button onclick="getQuiz(sets[${i}].ptaki)" id="set${i}">${sets[i].name}</button>
                 `;
	}

	row += `<button onclick="getMenu()">Menu</button>`;
	readyMadeSets.innerHTML = row;

	showPanel("readyMadeSets");
}

function getMySets() {
	const mySetsW = document.getElementById("mySets");
	let row = "";

	// Odczyt z LOCAL STORAGE
	const birdsString = localStorage.getItem("myBirds");

	// Sprawdzamy, czy obiekt istnieje, a jeśli tak, parsujemy go
	if (birdsString) {
		const birdObiekt = JSON.parse(birdsString);
		mySets = birdObiekt;

		for (let i = 0; i < birdObiekt.length; i++) {
			row += `
                <button onclick="getQuiz(mySets[${i}].ptaki)" id="mySets${i}">${birdObiekt[i].name}</button>
                 `;
		}
	} else {
		console.log("Obiekt nie został zapisany w localStorage");
	}

	row += `
      
      <button onclick="setNewSet()">Dodaj nowy 
      zestaw</button>
      <button onclick="removeSets()">Usuń wszystkie zestawy</button>
      <button onclick="getMenu()">Menu</button>
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
	console.log(nameOfSet.value);

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
