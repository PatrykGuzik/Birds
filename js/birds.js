let isRepeatBirds1 = true;
let repeatBirds1 = []
let repeatBirds2 = []


const birds = [
    {
        "nazwa":"Bogatka",
        "jpg": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/169357911/900",
        "spiew": [
            "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/527685/mp3",
            "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/553605/mp3",
            "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/538211/mp3"
            ],
        "siedlisko": "",
        "opis": "",
        "okres": "",
    },
    {
        "nazwa":"Mysikrólik",
        "jpg": "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/45035631/1200",
        "spiew": ["https://cdn.download.ams.birds.cornell.edu/api/v2/asset/553763/mp3"],
        "siedlisko": "",
        "opis": "",
        "okres": ""
    },
    {
      "nazwa":"Kos",
      "jpg": "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/44584641/1200",
      "spiew": ["https://cdn.download.ams.birds.cornell.edu/api/v2/asset/527798/mp3"],
      "siedlisko": "",
      "opis": "",
      "okres": ""
  },
  {
    "nazwa":"Raniuszek",
    "jpg": "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/612496830/1200",
    "spiew": [
        "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/541083/mp3",
        "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/553699/mp3"
    ],
    "siedlisko": "",
    "opis": "",
    "okres": "",
},
{
    "nazwa":"Rudzik",
    "jpg": "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/44599871/1200",
    "spiew": ["https://cdn.download.ams.birds.cornell.edu/api/v2/asset/527768/mp3"],
    "siedlisko": "",
    "opis": "",
    "okres": ""
},
{
  "nazwa":"Gil",
  "jpg": "Gil",
  "spiew": ["https://www.glosy-ptakow.pl/sounds/653.mp3"],
  "siedlisko": "",
  "opis": "",
  "okres": ""
},
  
]


function filterBirds(nazwa, listaPtaków) {
    // Tworzymy pustą tablicę na wynik
    let wynik = [];
    
    // Iterujemy przez tablicę ptaków
    for (let ptak of listaPtaków) {
        // Sprawdzamy, czy nazwa ptaka równa się szukanej nazwie 
        if (ptak.nazwa === nazwa) {
            wynik.push(ptak);
            return ptak
        }
    }
}


function createNewBirdList(listName, newBirdList, oldBirdList){
    
    let a = { "name" : listName,
        "ptaki": [], 
    }
    
    
    for (let i = 0; i < newBirdList.length; i++) {
        a.ptaki.push(filterBirds(newBirdList[i], oldBirdList)) 
    }
    
    
    return a
}






const birdList1 = ["Mysikrólik", "Bogatka","Kos","Raniuszek", "Rudzik"]
const birdList2 = ["Czyż"]
let sets = [];


sets.push(createNewBirdList("Ptaki Miasta", birdList1, birds))



// Własne Zestawy
let mySets = []

// const birdsString = localStorage.getItem('myBirds');
// if (birdsString) {
//     const birdObiekt = JSON.parse(birdsString);
//     mySets.push(birdObiekt)
//     console.log(mySets);
    
//     console.log(mySets[0].ptaki);
    
   
// } else {
//     console.log('Obiekt nie został zapisany w localStorage');
// }

