const slides = document.querySelectorAll(".slide");
let current = 0;

// Авто-листание каждые 4 секунды
const slideInterval = setInterval(() => {
  slides[current].classList.remove("active");
  current++;

  if (current < slides.length) {
    slides[current].classList.add("active");

    // Extra slide анимация
    if (slides[current].classList.contains("extra-slide")) {
      animateExtraSlide();
    }

  } else {
    current = slides.length - 1;
    slides[current].classList.add("active");
    clearInterval(slideInterval);
  }
}, 4000);

// Автозапуск музыки
window.addEventListener("load", () => {
  const music = document.getElementById("bg-music");
  music.play().catch(() => {
    document.body.addEventListener("click", () => music.play(), { once: true });
  });
});

// Анимация extra slide
function animateExtraSlide() {
  const photos = document.querySelectorAll(".extra-slide .fly-photo");
  const textLines = document.querySelectorAll(".extra-slide .karaoke-line");

  // Фото вылетают поочередно, потом остаются видимыми
  photos.forEach((photo, index) => {
    setTimeout(() => {
      photo.style.opacity = 1;
      photo.style.animation = "flyIn 1s forwards";
    }, index * 500);
  });

  // Текст караоке по строчкам
  textLines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add("karaoke-animate");
      const duration = Math.max(line.textContent.length * 0.08, 6);
      line.style.animationDuration = `${duration}s`;
      line.style.opacity = 1;
    }, photos.length * 500 + 500 + index * 1000);
  });
}
