function getButtonsIKnow(id){
    const html = `
      <div class="ifKnow" id="ifKnow${id}">
          <button class="no" id="iDontKnow${id}">Nie wiem</button>
          <button class="yes" id="iKnow${id}">Wiem</button>
      </div>
    `
    return html
  }

function getLastCard() {
    const container = document.getElementById("container1")
    const html = `
    <div class="repeatCont">
        <button onclick="makeRepeat()">Powtórz</button>
        <button onclick="getMenu()">Przejdź do menu</button>
    </div>
    `;
    container.innerHTML = html
}

function getFinishCard() {
  const container = document.getElementById("container1")
    const html = `
    <div class="finishCont">
        <div class="finishInfo">To już wszystko</div>
        <button onclick="getMenu()">Przejdź do menu</button>
    </div>
    `;
    container.innerHTML = html
}

function getRandVoice(birdNumber, birdList) {
    if (birdList[birdNumber].spiew.length == 1){
      return birdList[birdNumber].spiew[0]
    }else{
      const randNr = getRandomInt(0,birdList[birdNumber].spiew.length-1)
      return birdList[birdNumber].spiew[randNr]
    }
}

function getSoundsOnPage(birdsList) {
    showPanel("cards");
    refreshCounter(1,birdsList.length)
    const cont = document.getElementById("container1")
    cont.innerHTML = "";
    
    let row = '';
      for (let i = 0; i < birdsList.length; i++) {
          
          row += `<div id="c${i}" class="contSong">
                    <div id=firstPage${i} class="firstPage">
                      <audio id="myAudio${i}" src="${getRandVoice(i,birdsList)}"></audio>
  
                      <button class="playBtn" id="toggleButton${i}"><i class="fas fa-play"></i></button>
  
                      <button class="restartBtn" id="restartButton${i}"><i class="fa-solid fa-rotate-left"></i></button>
                      
  
                      
                      <div class="checkW">
                    <div id="${i}" 
                    class="next">
                    sprawdź
                    </div>
                    </div>
                    </div>
                    <div id=secondPage${i} class="secondPage">  
                      <div id="birdName${i}" class="birdName"></div>
                      ${getButtonsIKnow(i)}
                    </div>
                  </div>
  
                  `;
      }
  
    row += `<button class="menuBtn" onclick="getMenu()">Menu</button>`
    cont.innerHTML=row;
}


function refreshCounter(cardNr,listLength){
    const counter = document.getElementById('counter')
    counter.innerHTML = `${cardNr}/${listLength}`
}


function check(birdList){
    for (let i = 0; i < birdList.length; i++) {
  
      setAudioButton(i)
  
      const butt = document.getElementById(i)
      butt.addEventListener("click", (e) => {
        answer= document.getElementById(`birdName${i}`)
        answer.innerHTML = 
        `
        <img class="birdImg" src="${birdList[i].jpg}" alt="" />
        <div>${birdList[i].nazwa}</div>
        
        `
        changePage(i, 2)
        setAudioButton(i)
      });
  
      const buttIDontKnow = document.getElementById(`iDontKnow${i}`)
  
      //jeśli odpowiedź jest NIEprawidłowa---------------
      buttIDontKnow.addEventListener("click", (e) =>{
        if (isRepeatBirds1) {
            repeatBirds1.push(birdList[i]);
        }else{
            repeatBirds2.push(birdList[i]);
        }
        
        showNextCard(i, birdList.length);
      })
  
      //jeśli odpowiedź jest prawidłowa-------------------
      const buttIKnow = document.getElementById(`iKnow${i}`)
  
      buttIKnow.addEventListener("click", (e) =>{
        showNextCard(i, birdList.length)
      })
      }
}

function makeRepeat() {
    
    if (isRepeatBirds1) {
        repeatBirds2 = []
        getQuiz(repeatBirds1)
    }else{
        repeatBirds1 = []
        getQuiz(repeatBirds2)
    }
        
    isRepeatBirds1 = !isRepeatBirds1

    
    
}

function showNextCard(cardNr, lengthList) {

    for (let i = 0; i < lengthList; i++){
      const card = document.getElementById(`c${i}`)
      card.style.display = "none";
    }
  
    if ((cardNr+1) < lengthList){
        
      const cardForShow = document.getElementById(`c${cardNr+1}`)
      cardForShow.style.display = "block";
  
      refreshCounter(cardNr+2,lengthList);
    }else{
        if (repeatBirds1.length > 0 && isRepeatBirds1){
            getLastCard()
        } else if (repeatBirds2.length > 0 && !isRepeatBirds1){
            getLastCard()
        }
        
        else{
            getFinishCard()
        }
    }
  
}

function getQuiz(birdList) {
    const shuffle = shuffleArray(birdList)
    getSoundsOnPage(shuffle)
    check(birdList)
  }


//Audio player
// Pobranie elementów audio, przycisków

function changePage(i){
    const firstPage = document.getElementById(`firstPage${i}`);
  
    const secondPage = document.getElementById(`secondPage${i}`);
  
    
      firstPage.style.display = 'none';
      secondPage.style.display = 'block';
  }
  
  
  function setAudioButton(i) {
    const audio = document.getElementById(`myAudio${i}`);
    const toggleButton = document.getElementById(`toggleButton${i}`);
    const restartButton = document.getElementById(`restartButton${i}`);
  
    audio.pause();
  
    // Funkcja włączająca/wyłączająca odtwarzanie
    toggleButton.addEventListener('click', function() {
      if (audio.paused) {
        // Jeśli audio jest wstrzymane, odtwarzamy je
        audio.play();
        toggleButton.innerHTML = `<i class="fas fa-pause"></i>`; // Zmieniamy tekst przycisku na "Pause"
      } else {
        // Jeśli audio jest odtwarzane, zatrzymujemy je
        audio.pause();
        toggleButton.innerHTML = `<i class="fas fa-play"></i>`; // Zmieniamy tekst przycisku na "Play"
      }
      });
  
      // Funkcja restartująca odtwarzanie utworu
      restartButton.addEventListener('click', function() {
        // Ustawiamy czas na początek (0) i odtwarzamy
        audio.currentTime = 0;
        audio.play();
        toggleButton.innerHTML = `<i class="fas fa-pause"></i>`; // Zmieniamy tekst przycisku na "Pause" po restarcie
      });
  }