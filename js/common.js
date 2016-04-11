$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//bxslider
	$('.slider_wrap ul').bxSlider();

	//mobile menu
	$( ".trigger_menu" ).click(function() {
	  $( ".wrapper" ).toggleClass( "openmenu");
	});
	// $( ".menu li a" ).click(function() {
	//   $( this ).next('.dropdown').slideToggle('slow');
	// });
});