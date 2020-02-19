const $ = require("jquery");

$('.navbar-burger').on('click', function () {
  $(this).toggleClass('is-active');
  if ($(this).hasClass('is-active')) {
    $('.navbar-menu-mobile').removeClass('is-opacity');
  } else {
    $('.navbar-menu-mobile').addClass('is-opacity');
  }
})
$(window).resize(function () {
  let windowHeight = window.innerHeight;
  $('.navbar-menu-mobile').css({ 'height': windowHeight + 'px' });
});

$('.contact-us').on('click', function (e) {
  e.preventDefault();
  window.location.href = "mailto:hello@vulpem.com";
});

$('a.scroll-down-link').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
});


//Banner
/*
$(document).ready(() => {
  console.log('page is loaded');
  if($('.banner').length){
    setTimeout($('.banner').addClass('banner-visible'), 10000);
  }
});

  $('.banner .btn-close').on('click', () => {
    $('.banner').removeClass('banner-visible');
  });
*/

require("particles.js");
window.particlesJS(
  "particles-js",
  require("./particles.config.json")
);