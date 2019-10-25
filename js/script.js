// Слайдер на цикле

var slideButtons = document.querySelectorAll('.slider__btn');
var slides = document.querySelectorAll('.slider__item');

if (slides != null) {

  var removeClass = function () {
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove('slider__item--show');
    };
    for (var i = 0; i < slideButtons.length; i++) {
      slideButtons[i].classList.remove('slider__btn--current');
    };
  };

  var addButtonClickHandler = function (slide, btn) {
    btn.addEventListener('click', function (evt) {
      evt.preventDefault();
      removeClass();
      slide.classList.add('slider__item--show');
      btn.classList.add('slider__btn--current');
    });
  };

  for (var i = 0; i < slideButtons.length; i++) {
    addButtonClickHandler(slides[i], slideButtons[i]);
  }

}

// Модальное окно

var buttonContacts = document.querySelector('.contact__btn');
var popupModalSection = document.querySelector('.modal');
var closeButton = document.querySelector('.modal__btn--close');

buttonContacts.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupModalSection.classList.add('modal__show');
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupModalSection.classList.remove('modal__show');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popupModalSection.classList.remove('modal__show');
  }
});
