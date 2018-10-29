$(function () {
  // const slider = $(".main-slider");
  // slider.slick({
  //   dots: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   infinite: false,
  //   customPaging: function(slider,i) {
  //     return `<button class="slick-dots-item">0${i+1}</button>`
  //   },
  // });

  // slider.on('wheel', (function (e) {
  //   e.preventDefault();
  //
  //   if (e.originalEvent.deltaY < 0) {
  //     $(this).slick('slickPrev');
  //   } else {
  //     $(this).slick('slickNext');
  //   }
  // }));

  $('.navbar-burger').on('click', function () {
    $(this).toggleClass('is-active');
    if($(this).hasClass('is-active')){
      $('.navbar-menu-mobile').removeClass('is-opacity');
    }else {
      $('.navbar-menu-mobile').addClass('is-opacity');
    }
  })
  $(window).resize(function() {
    let windowHeight = window.innerHeight;
    $('.navbar-menu-mobile').css({'height':windowHeight+'px'});
  });

  $('.contact-us').on('click', function(e) {
    e.preventDefault();
    window.location.href = "mailto:hello@vulpem.com";
  });

  $('a.scroll-down-link').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });

  $(document).ready(() => {
    console.log('page is loaded');
    if($('.banner').length){
      setTimeout($('.banner').addClass('banner-visible'), 10000);
    }
  });

  $('.banner .btn-close').on('click', () => {
    $('.banner').removeClass('banner-visible');
  })
});