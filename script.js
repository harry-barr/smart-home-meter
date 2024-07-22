let currentTemp = 20; // Initial temperature
const songNames = [
  "Boogie Wonderland",
  "Dancing Machine",
  "Shake Your Groove Thing",
  "Funky Town",
  "Disco Inferno",
  "Le Freak",
  "Stayin' Alive",
  "Super Freak",
  "I Will Survive",
];
let currentSongIndex = -1; // No song playing initially

function updateTempDisplay() {
  document.getElementById("tempDisplay").innerText = `${currentTemp}°C`;
}

function updateSongDisplay() {
  const songDisplay = document.getElementById("songDisplay");
  if (currentSongIndex === -1) {
    songDisplay.innerText = "No song playing";
  } else {
    songDisplay.innerText = songNames[currentSongIndex];
  }
}

function addGlowEffect(button) {
  button.classList.add("glow");
  setTimeout(() => button.classList.remove("glow"), 300); // Duration for the glow effect
}

function increaseTemp() {
  currentTemp++;
  updateTempDisplay();
  addGlowEffect(document.querySelector('button[onclick="increaseTemp()"]'));
}

function decreaseTemp() {
  currentTemp--;
  updateTempDisplay();
  addGlowEffect(document.querySelector('button[onclick="decreaseTemp()"]'));
}

function setTemp() {
  addGlowEffect(document.querySelector('button[onclick="setTemp()"]'));
}

function playMusic() {
  if (currentSongIndex === -1) {
    currentSongIndex = Math.floor(Math.random() * songNames.length);
  }
  updateSongDisplay();
  addGlowEffect(document.querySelector('button[onclick="playMusic()"]'));
}

function pauseMusic() {
  if (currentSongIndex !== -1) {
    addGlowEffect(document.querySelector('button[onclick="pauseMusic()"]'));
  }
}

function stopMusic() {
  if (currentSongIndex !== -1) {
    currentSongIndex = -1;
    updateSongDisplay();
    addGlowEffect(document.querySelector('button[onclick="stopMusic()"]'));
  }
}

function nextTrack() {
  if (currentSongIndex !== -1) {
    currentSongIndex = Math.floor(Math.random() * songNames.length);
    updateSongDisplay();
    addGlowEffect(document.querySelector('button[onclick="nextTrack()"]'));
  }
}

function toggleLights() {
  const lightToggle = document.getElementById("lightToggle");
  addGlowEffect(lightToggle.closest("label").querySelector(".slider"));
}

// Initial display updates
updateTempDisplay();
updateSongDisplay();
