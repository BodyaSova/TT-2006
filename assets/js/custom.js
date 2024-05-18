// Слайдеры
$(document).ready(function(){
    $('.first-slider').slick({
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 8000,
      fade: true,
      pauseOnFocus: false,
      pauseOnHover: false
    });

    $('.works-slider').slick({
      arrows: true,
      appendArrows: $('.works-arrows'),
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 2000,
            pauseOnFocus: false,
            pauseOnHover: false
          }
        },
      ]
    });
    
    // Анимации
    if (window.innerWidth < 1024) {

      function removeAos() {
        var elem = document.getElementById('aos-css-file');
        elem.parentNode.removeChild(elem);
        return false;
      }
      removeAos();
    
    }
    
    AOS.init();
  });

  // Hamburger
  const burger = document.querySelector('.hamburger')
  const nav = document.querySelector('header')

  function burgerMenu () {
      burger.classList.toggle('is-active');
      nav.classList.toggle('show');
  }

burger.addEventListener('click', burgerMenu);

// Функция для прокрутки страницы вниз
  (function() {
    var btnScrollDown = document.querySelector('.scroll-down');
    
    function scrollDown() {
        var windowHeight = window.innerHeight;
        var scrollAmount = 0;
        var scrollIncrement = 10;
        
        function scroll() {
            if (scrollAmount < windowHeight) {
                window.scrollBy(0, scrollIncrement);
                scrollAmount += scrollIncrement;
                setTimeout(scroll, 10);
            }
        }
        
        scroll();
    }
    
    btnScrollDown.addEventListener('click', scrollDown);
})();

// Функция для прокрутки страницы вверх
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Плавная прокрутка
  });
}