/* Header*/

const MENU=document.querySelector('nav ul');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach( el => el.classList.remove('active'));

    event.target.classList.add('active');


    let classForScroll = event.target.innerHTML.toLowerCase()+"";

    window.scrollTo({
      top: document.querySelector(`.${classForScroll}`).offsetTop - 95,
      behavior: 'smooth'
    });

});

/*Slider. Переключение слайдов */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("fade");
  
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex - 1].style.display = "block";
}

/* Slider. Активация экранов телефонов*/
