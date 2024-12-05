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
    return list.filter(obj => obj.name!== name);
}
function showPanel(panel) {
  const cards = document.querySelector(".cards");
  const menu = document.querySelector(".menu");
  const readyMadeSets = document.querySelector(".readyMadeSets");

  const panelToShow = document.querySelector(`.${panel}`);


  cards.style.display = "none";
  menu.style.display = "none";
  readyMadeSets.style.display = "none";
  
  panelToShow.style.display = "block";



}