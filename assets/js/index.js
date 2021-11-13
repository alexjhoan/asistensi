$(window).on('load', function () {
  $('body').css('opacity', '1');
});

let offset

if (screen.width > 768){
  offset = 200
} else {
  offset = 0
}

$('.nav_button-toggle').on('touchstart click', function(e){
  event.preventDefault();
  $('.nav_links').toggleClass('active');
});
