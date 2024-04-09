const images = document.querySelectorAll(".banner__img");
const prevButton = document.querySelector(".banner__button--prev");
const nextButton = document.querySelector(".banner__button--next");
let currentIndex = 0;

showImage(currentIndex);

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

function showImage(index) {
  images.forEach((img, i) => {
    img.style.transform = `translateX(-${index * 100}%)`;
  });
}
