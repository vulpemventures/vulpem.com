$(function() {
  $(".slideshow-link").on("click", function(e) {
    var num = $(this).data("number");
    showSlide(num);
  });
  showSlide(1);
});

function showSlide(num) {
  var slides = $(".post");
  var dots = $(".slideshow-link");

  for (var i = 0; i < slides.length; i++) {
    slides.toggleClass("active", false);
    dots.toggleClass("active", false);
  }
  $(this).toggleClass("active", true);
  $(".post[data-number=" + num + "]").toggleClass("active", true);
}
