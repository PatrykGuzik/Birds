function getMenu() {
    // restart Tablic pomocniczych
    repeatBirds1 = [];
    repeatBirds2 = [];

    showPanel("menu")



};

function getReadyMadeSets() {
    const readyMadeSets = document.getElementById("readyMadeSets")
    let row = '';
      for (let i = 0; i < sets.length; i++) {
          
          row += `
                <button onclick="getQuiz(sets[${i}].ptaki)" id="set${i}">${sets[i].name}</button>
                 `;
      }
  
      row += `<button onclick="getMenu()">Menu</button>`
      readyMadeSets.innerHTML=row;


    showPanel("readyMadeSets");
}

function getMySets() {
    
}