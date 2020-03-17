/* Header*/

const MENU=document.querySelector('nav ul');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach( el => el.classList.remove('active'));

    event.target.classList.add('active');


    let scroll = event.target.innerHTML.toLowerCase()+"";

    window.scrollTo({
      top: document.querySelector(`.${scroll}`).offsetTop - 95,
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

function ScreenActive() {
  const iphone = document.querySelectorAll(".sliders .iphone");

  iphone.forEach( ph => ph.querySelectorAll(".click").forEach( 
    el => el.addEventListener( "click", event => {
      
      let display = ph.querySelector(".screen");

      (display.classList.contains("unvisible")) ?display.classList.remove("unvisible") :display.classList.add("unvisible");
    })

  ));
}
ScreenActive();


/* Portfolio. Взаимодействие с картинками */
const portfolioitem = document.querySelector(".portfolio-list");

let PicActive = true;
portfolioitem.addEventListener("click", (event) => {
  if ( event.target.classList.contains("interactive") ) {
    PicActive = false;
  }

  portfolioitem.querySelectorAll("img").forEach(el => el.classList.remove("interactive"));
  
  if (PicActive) {
    event.target.classList.add("interactive");
  }

  PicActive = true;
});

