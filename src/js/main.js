$(function () {
    const slider = $(".main-slider");
    slider.slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        customPaging: function(slider,i) {
            return `<button class="slick-dots__item">0${i+1}</button>`
        },
    });

    slider.on('wheel', (function(e) {
        e.preventDefault();

        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickPrev');
        } else {
            $(this).slick('slickNext');
        }
    }));

    $('.navbar-burger').on('click', function () {
      $(this).toggleClass('is-active');
      if($(this).hasClass('is-active')){
          $('.navbar-menu_mobile').removeClass('is-opacity');
      }else {
        $('.navbar-menu_mobile').addClass('is-opacity');
      }
    })
});