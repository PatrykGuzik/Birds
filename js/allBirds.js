// Ptaki w Menu
function getBirds() {
	const birdsMenu = document.getElementById("birdsMenu");
	const head = `
	<h1>Dostępne Ptaki</h1>
    <div>
		Wszystkie dostępne ptaki z fotografiami oraz danymi dotyczącymi autorstwa
	</div>
	<div class="searchBirdCont">
		<i class="fa-solid fa-magnifying-glass"></i>
		<input autocomplete="off" type="text" placeholder="Szukaj" id="findBird">
	</div>
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
			bird.nazwa.toLowerCase().includes(inputBird.value.toLowerCase()))
		bodyCont.innerHTML = getBirdListHTML(filteredBirds)
		playPauseAudio(filteredBirds);
	})

	
}

function getBirdListHTML(birdList) {
	let sortBirds = sortBirdsByName(birdList);

	let row = ``;

	for (let i = 0; i < sortBirds.length; i++) {
		let song = "";
		let img = "";
		let author = `
		<div class="authorIMG">
		 fot. ${getStringBeforeComma(sortBirds[i].autorJPG)}...
		</div>`;
		let name = `
		<div class="nameOfBird">
			${sortBirds[i].nazwa}
		</div>
		<div class="nameOfFamily">
			${sortBirds[i].rodzina}
		</div>
		
		`;

		if (sortBirds[i].jpg != "") {
			img = `
            <img class="imgBtn" onclick="showInfoPanelBird('${sortBirds[i].nazwa}')" src="${sortBirds[i].jpg}" alt="Opis obrazka" width="150" height="100">
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
					${author}
				</div>
				<div class="birdInfoContainer">
					${name}
				</div>
                

                ${song}
            </div>
            `;
	}

	row += getMenuPanel();
	return row

}


function showInfoPanelBird(nazwa) {
	const infoPanel = document.querySelector(".infoPanel");
	const birdToShow = findBirdFromList(birds, nazwa);
	const infoContent = document.querySelector(".infoContent")
	

	infoContent.innerHTML = `
		<div class="birdNameCont">
			<div class="birdName">${birdToShow.nazwa}</div>
			<div class="birdFamilyName">${birdToShow.rodzina}</div>
		</div>
		<div class="infoImgCont">
			 <img  src="${birdToShow.jpg}" alt="">
			 <span>
			 	${getStringBeforeComma(birdToShow.autorJPG)}
			 
				<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank"><i class="fa-brands fa-creative-commons"></i></a>	
			
			 <a href="${getStringAfterLastComma(birdToShow.autorJPG)}" target="_blank" rel="noopener noreferrer">Wikipedia</a>
			 </span>
			 
		</div>
	`


	infoPanel.classList.toggle("hidden");

}


function playPauseAudio(list) {
	let sortBirds = sortBirdsByName(list);

	for (let i = 0; i < sortBirds.length; i++) {
		for (let j = 0; j < sortBirds[i].spiew.length; j++) {
			console.log();
			const idK = `${i}${j}`;
			audio = document.getElementById(`myAudio${idK}`);
			setAudioButton(idK);
		}
	}
}