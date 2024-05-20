// script.js
const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const playlist = document.getElementById('playlist');
const currentSongTitle = document.getElementById('current-song-title');

// Lista de canciones
const songs = [
    { title: "Timbre", src: "musica/timbre.wav" },
    { title: "Timbre", src: "musica/timbre.wav" },
    { title: "Reverse", src: "musica/reverse.mp3" },
    { title: "Final reverse", src: "musica/final.wav" },
    { title: "Timbre", src: "musica/timbre.wav" }
];

let currentSongIndex = 0;

// Cargar lista de reproducción
function loadPlaylist() {
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = song.title;
        li.addEventListener('click', () => playSong(index));
        playlist.appendChild(li);
    });
}

// Reproducir canción
function playSong(index) {
    currentSongIndex = index;
    audio.src = songs[currentSongIndex].src;
    currentSongTitle.textContent = songs[currentSongIndex].title;
    audio.play();
}

// Reproducir/Pausar
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

// Siguiente canción
nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
});

// Canción anterior
prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
});

// Cargar la primera canción
window.onload = () => {
    loadPlaylist();
    playSong(currentSongIndex);
};
