const music = document.getElementById("bgMusic");
const icon = document.getElementById("musicIcon");
const DEFAULT_VOLUME = 0.3;
window.addEventListener("DOMContentLoaded", () => {
  music.volume = DEFAULT_VOLUME;
  music.muted = false;
  music.play()
    .then(() => {
      updateMusicIcon(true);
    })
    .catch((err) => {
      console.warn("Autoplay bị chặn:", err);
      updateMusicIcon(false);
    });
});
icon.addEventListener("click", () => {
  if (music.paused) {
    music.muted = false;
    music.volume = DEFAULT_VOLUME;
    music.play()
      .then(() => updateMusicIcon(true))
      .catch(err => console.warn("Không thể phát:", err));
  } else {
    music.pause();
    updateMusicIcon(false);
  }
});
function updateMusicIcon(isPlaying) {
  icon.src = isPlaying ? "image/icon-music-play.webp" : "image/icon-music-pause.png";
  icon.alt = isPlaying ? "Đang phát nhạc" : "Nhạc đã tắt";
  icon.title = isPlaying ? "Tắt nhạc 🎵" : "Bật nhạc 🔇";
}
