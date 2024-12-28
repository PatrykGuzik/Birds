// Własne zestawy

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
        console.log(mySets);
        

		for (let i = 0; i < birdObiekt.length; i++) {
			row += getHTMLSet(birdObiekt, i, "mySets");
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
                    <div class="birdA" id="bird${i}">${birds[i].nazwa} <i class="fa-solid fa-plus plus"></i></div>
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
			mySet.push(trimTrailingSpaces(bird.innerText));
		});

		checkBird();
	}

	// Przycisk Zapisz
	const saveBtn = document.getElementById("saveBtn");
	saveBtn.addEventListener("click", e => {
		if (nameOfSet.value != "") {
			mySets.push(createNewBirdList(nameOfSet.value, mySet, birds));
			

			localStorage.setItem("myBirds", JSON.stringify(mySets));

			getMySets();
		} else {
			const validationInput = document.querySelector(".validationInput");
			window.scrollTo({
				top: 0,       // Pozycja pionowa
				behavior: 'smooth' // Opcjonalnie: płynne przewijanie
			  });

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


function findBird(){
	const inputBird = document.getElementById("findBird")
	const sortBirds = sortBirdsByName(birds);

	inputBird.addEventListener("input", function (e) {
		
		const filteredBirds = sortBirds.filter((bird) =>
			bird.nazwa.toLowerCase().includes(inputBird.value))
		return filteredBirds
	})

	
}


// pokazywanie wybranych ptaków
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