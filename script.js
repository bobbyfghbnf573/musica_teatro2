// script.js
const audio = document.getElementById('audio');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const playlist = document.getElementById('playlist');
const currentSongTitle = document.getElementById('current-song-title');

// Lista de canciones
const songs = [
    { title: "Inicio (nada)", src: "musica/inicio.wav" },
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
        li.id = `song-${index}`;
        li.style.color = 'white'; // Establecer el color de fuente en blanco para todas las canciones
        li.addEventListener('click', () => playSong(index));
        playlist.appendChild(li);
    });
}

// Actualizar estilos de la lista
function updatePlaylistStyles() {
    songs.forEach((_, index) => {
        const songElement = document.getElementById(`song-${index}`);
        if (index === currentSongIndex) {
            songElement.style.color = 'red'; // Cambiar el color de la canción actual a rojo
        } else if (index === (currentSongIndex + 1) % songs.length) {
            songElement.style.color = 'yellow'; // Cambiar el color de la siguiente canción a amarillo
        } else {
            songElement.style.color = 'white'; // Mantener el color blanco para el resto de las canciones
        }
    });
}

// Reproducir canción
function playSong(index) {
    currentSongIndex = index;
    audio.src = songs[currentSongIndex].src;
    currentSongTitle.textContent = songs[currentSongIndex].title;
    audio.play();
    updatePlaylistStyles();
}

// Siguiente canción
nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
});

// Volver al principio sin reproducir automáticamente
restartBtn.addEventListener('click', () => {
    currentSongIndex = 0;
    audio.src = songs[currentSongIndex].src;
    currentSongTitle.textContent = songs[currentSongIndex].title;
    updatePlaylistStyles();
});

// Eventos de teclado
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        nextBtn.click();
    } else if (event.key.toLowerCase() === 'r') {
        event.preventDefault();
        restartBtn.click();
    }
});

// Cargar la primera canción
window.onload = () => {
    loadPlaylist();
    audio.src = songs[currentSongIndex].src;
    currentSongTitle.textContent = songs[currentSongIndex].title;
    updatePlaylistStyles();
};
