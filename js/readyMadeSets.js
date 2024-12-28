function getReadyMadeSets() {
	const readyMadeSets = document.getElementById("readyMadeSets");
	let row = "";
	for (let i = 0; i < sets.length; i++) {
		row += getHTMLSet(sets, i, "sets");
	}

	row += getMenuPanel();
	readyMadeSets.innerHTML = row;

	showPanel("readyMadeSets");
}