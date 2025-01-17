const slides = document.querySelector('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;

function showSlide(i) {
  index += i;
  if (index < 0) index = slides.children.length - 1;
  if (index >= slides.children.length) index = 0;
  slides.style.transform = `translateX(${-index * 100}%)`;
}

prev.addEventListener('click', () => showSlide(-1));
next.addEventListener('click', () => showSlide(1));

