let isRepeatBirds1 = true;
let repeatBirds1 = []
let repeatBirds2 = []


const birds = [
    {
        "nazwa":"Bogatka",
        "jpg": "bogatka",
        "spiew": ["https://www.glosy-ptakow.pl/sounds/653.mp3", "https://www.glosy-ptakow.pl/sounds/653.mp3", "dymowka_spiew"],
        "siedlisko": "",
        "opis": "",
        "okres": "",
    },
    {
        "nazwa":"Czyż",
        "jpg": "czyż",
        "spiew": ["https://cdn.download.ams.birds.cornell.edu/api/v2/asset/33236491/mp3"],
        "siedlisko": "",
        "opis": "",
        "okres": ""
    },
    {
      "nazwa":"czajka",
      "jpg": "czajka",
      "spiew": ["https://www.glosy-ptakow.pl/sounds/653.mp3"],
      "siedlisko": "",
      "opis": "",
      "okres": ""
  },
  {
    "nazwa":"Czernica",
    "jpg": "czernica",
    "spiew": ["https://www.glosy-ptakow.pl/sounds/653.mp3", "czyz_spiew", "https://www.glosy-ptakow.pl/sounds/653.mp3"],
    "siedlisko": "",
    "opis": "",
    "okres": "",
},
{
    "nazwa":"Gąsiorek",
    "jpg": "gasiorek",
    "spiew": ["https://www.glosy-ptakow.pl/sounds/653.mp3"],
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






const birdList1 = ["Czyż", "Bogatka"]
const birdList2 = ["Czyż"]
let sets = [];


sets.push(createNewBirdList("Nowa lista", birdList1, birds))
sets.push(createNewBirdList("Praki Gór", birdList2, birds))




