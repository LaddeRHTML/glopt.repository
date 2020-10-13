 
const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false
});
  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header__nav'),
  menuItem = document.querySelectorAll('.header__nav_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('header__nav_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('header__nav_active');
      });
  });
});
$(document).ready(function(){
  function validateForms(form){
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите {0} символа!")
        } ,
        phone:"Пожалйста, введите свой номер телефона",
        email: {
          required:"Пожалуйста, введите свою почту",
          email:"Неправильно введен адрес почты"
        }
      }
    });
  }
  validateForms('#consultation-form');
  validateForms('#question-form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });
  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
  const btnCall = document.querySelectorAll("[data-modal='call']"),
        close = document.querySelector('.popup_close'),
        overlay = document.querySelector('.overlay');
  btnCall.forEach(item =>{
    item.addEventListener('click', ()=>{
      overlay.classList.toggle('show');
      document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', ()=>{
      overlay.classList.toggle('show');
      document.body.style.overflow = 'auto';
    });
  });
});






