//const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');
const playButton = document.getElementById('play-button');
const audioElement = document.getElementById('audio-player');

img.src = pictures[0];
img.style.zIndex = '10';

audioElement.src = audioList[0];

console.log(`main.js channelInfo webmaster: ${channelInfo.webmaster}`);
console.log(`main.js channelInfo pubdate: ${channelInfo.pubdate}`);

let position = 0;

function playAudio() {
  
    if (audioElement.paused) {
        playButton.src = "img/pause.png";
        playButton.classList.add('pauzeFx');
        
        loadAudio(position);
        
        //rotateImg();
        audioElement.play().catch(error => {
            console.error("Error playing audio:", error);
        });
    } else {
        playButton.src = "img/play.png";
        playButton.classList.remove('pauzeFx');
       
        audioElement.pause();
    }
}

function loadAudio(index) {
    audioElement.src = audioList[index];
    
    audioElement.load(); // Load the new audio source
    audioElement.addEventListener("canplaythrough", () => {
        // Ensure the audio is ready before playing
        //audioPlayer.play();
    });
}

const moveRight = () => {
  if (position >= pictures.length - 1) {
    position = 0
    img.src = pictures[position];
    
    cardTitle.textContent = titleList[position];
    cardDescription.textContent = titleDescription[position];
    return;
  }
  cardTitle.textContent = titleList[position + 1];
  cardDescription.textContent = titleDescription[position + 1];
  img.src = pictures[position + 1];
  position++;
}

const moveLeft = () => {
  if (position < 1) {
    position = pictures.length - 1;
    img.src = pictures[position];
    
    cardTitle.textContent = titleList[position];
    cardDescription.textContent = titleDescription[position];
    return;
  }
  cardTitle.textContent = titleList[position - 1];
  cardDescription.textContent = titleDescription[position - 1];
  img.src = pictures[position - 1];
  position--;
}

playButton.addEventListener("click", playAudio);

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);