'use strict';

const line = document.querySelector('.slider__line');
const slides = document.querySelectorAll('.slider__item');
const btnNext = document.querySelector('.slider__btn--right');
const btnPrev = document.querySelector('.slider__btn--left');

let count = 0; // current slide index
let width; // width of one slide

const rollSlider = () => {
  line.style.transform = `translateX(${-count * width}px)`;
};

const init = () => {
  const viewport = document.querySelector('.slider__viewport');

  if (!viewport) {
    return;
  }

  width = viewport.offsetWidth;

  slides.forEach((item) => {
    item.style.width = width + 'px';
  });

  rollSlider();
};

window.addEventListener('resize', init);
init();

btnNext.addEventListener('click', () => {
  count++;
  if (count >= slides.length) {
    count = 0; // return to the beginning
  }
  rollSlider();
});

btnPrev.addEventListener('click', () => {
  count--;
  if (count < 0) {
    count = slides.length - 1; // go to the end
  }
  rollSlider();
});
