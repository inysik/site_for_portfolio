const wrapper = document.querySelector('.feedback-wrapper');
const slides = document.querySelectorAll('.feedback-wrapper__slide');
const buttons = document.querySelectorAll('.btn__pagination');

let currentIndex = 0;

function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentIndex = index;
  wrapper.style.transform = `translateX(-${index * 100}%)`;

  // активная пагинация
  buttons.forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
}

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    showSlide(index);
  });
});

// показываем первый слайд при загрузке
showSlide(0);
