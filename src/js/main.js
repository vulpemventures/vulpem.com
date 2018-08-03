$(function () {
    const slider = $(".main-slider");
    slider.slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        // centerMode: true,
        // centerPadding: '60px',
        arrows: false,
        infinite: false,
    });

    slider.on('wheel', (function(e) {
        e.preventDefault();

        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickPrev');
        } else {
            $(this).slick('slickNext');
        }
    }));
});