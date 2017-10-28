/* script by ProVerstka */
$(document).ready(function(){
	/* инициализация функций */
	/* описание функций */
    mobmenu();


    $('.promo-slider .slider').slick({
        dots: false,
        arrows: true
    });


});
/* подключение плагинов */
function mobmenu(){
    var opener = $('.btn-menu');
    var menu = $('#nav');
    opener.on('click', function(e){
        menu.slideToggle();
        $(document).click(function(event) {
            if ($(event.target).closest("#nav").length) return;
            $("#nav").removeAttr('style');
            event.stopPropagation();
            $(document).unbind('click')
        });
        return false;
    });

}