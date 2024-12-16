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
  "jpg": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/257629601/900",
  "spiew": ["https://cdn.download.ams.birds.cornell.edu/api/v2/asset/552987/mp3",
    "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/527850/mp3",
    "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/541220/mp3"
  ],
  "siedlisko": "",
  "opis": "",
  "okres": ""
},
{
    "nazwa":"Modraszka",
    "jpg": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/46409481/900",
    "spiew":["https://cdn.download.ams.birds.cornell.edu/api/v2/asset/553594/mp3",
        "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/553595/mp3"
    ],
    "siedlisko": "",
    "opis": "",
    "okres": ""
},
{
    "nazwa":"Kawka",
    "jpg": "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/45035361/900",
    "spiew":["https://cdn.download.ams.birds.cornell.edu/api/v2/asset/538145/mp3"],
    "siedlisko": "",
    "opis": "",
    "okres": ""
},
{
    "nazwa":"Wrona siwa",
    "jpg": "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/261728341/900",
    "spiew":["https://cdn.download.ams.birds.cornell.edu/api/v2/asset/553565/mp3"],
    "siedlisko": "",
    "opis": "",
    "okres": ""
},
{
    "nazwa":"Gawron",
    "jpg": "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/44959001/900",
    "spiew":["https://cdn.download.ams.birds.cornell.edu/api/v2/asset/553554/mp3"],
    "siedlisko": "",
    "opis": "",
    "okres": ""
},
{
    "nazwa":"Kwiczoł",
    "jpg": "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/256767691/900",
    "spiew":["https://cdn.download.ams.birds.cornell.edu/api/v2/asset/552918/mp3",
        "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/552920/mp3"
    ],
    "siedlisko": "",
    "opis": "",
    "okres": ""
},
{
    "nazwa":"Czajka",
    "jpg": "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/609204339/900",
    "spiew":["https://cdn.download.ams.birds.cornell.edu/api/v2/asset/552843/mp3"],
    "siedlisko": "",
    "opis": "",
    "okres": ""
},
{
    "nazwa":"Dzięcioł Duży",
    "jpg": "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/256154511/900",
    "spiew":["https://cdn.download.ams.birds.cornell.edu/api/v2/asset/553480/mp3"
    ],
    "siedlisko": "",
    "opis": "",
    "okres": ""
},
{
    "nazwa":"Kopciuszek",
    "jpg": "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/44587591/900",
    "spiew":["https://cdn.download.ams.birds.cornell.edu/api/v2/asset/538265/mp3",
        "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/552929/mp3"
    ],
    "siedlisko": "",
    "opis": "",
    "okres": ""
},
{
    "nazwa":"Sierpówka",
    "jpg": "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/308119951/900",
    "spiew":["https://cdn.download.ams.birds.cornell.edu/api/v2/asset/535404/mp3"],
    "siedlisko": "",
    "opis": "",
    "okres": ""
},
{
    "nazwa":"Pustułka",
    "jpg": "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/256164041/900",
    "spiew":["https://cdn.download.ams.birds.cornell.edu/api/v2/asset/552882/mp3","https://cdn.download.ams.birds.cornell.edu/api/v2/asset/541037/mp3"],
    "siedlisko": "",
    "opis": "",
    "okres": ""
},
{
    "nazwa":"Oknówka",
    "jpg": "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/258242941/900",
    "spiew":["https://cdn.download.ams.birds.cornell.edu/api/v2/asset/552913/mp3","https://cdn.download.ams.birds.cornell.edu/api/v2/asset/527675/mp3"],
    "siedlisko": "",
    "opis": "",
    "okres": ""
},
// {
//     "nazwa":"",
//     "jpg": "",
//     "spiew":[""],
//     "siedlisko": "",
//     "opis": "",
//     "okres": ""
// },
// {
//     "nazwa":"",
//     "jpg": "",
//     "spiew":[""],
//     "siedlisko": "",
//     "opis": "",
//     "okres": ""
// },
  
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






const birdList1 = ["Mysikrólik", "Bogatka","Kos","Raniuszek", "Rudzik","Gil"]
const birdList2 = ["Gil"]
let sets = [];


sets.push(createNewBirdList("Ptaki Miasta", birdList1, birds))
sets.push(createNewBirdList("Test", birdList2, birds))



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

