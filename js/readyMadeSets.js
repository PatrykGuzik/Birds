

function getReadyMadeSets() {
	const readyMadeSets = document.getElementById("readyMadeSets");
	let row = `${getLevelBtns()}`;
	for (let i = 0; i < sets.length; i++) {
		row += getHTMLSet(sets, i, "sets");
	}

	row += `<div class="space"></div>${getMenuPanel()}`;
	readyMadeSets.innerHTML = row;

	showPanel("readyMadeSets");
}
