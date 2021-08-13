$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(0); // will first fade out the loading animation 
  $('#preloader').delay(450).fadeOut('medium'); // will fade out the white DIV that covers the website. 
})