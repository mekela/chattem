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

	//slick	
	$('.brands_landing_slider').slick({
	  centerMode: true,
	  centerPadding: '60px',
	  slidesToShow: 3,
	});

	//close
	$('.close_modal a').on('click', function(){
	  //console.log($(this).parent);
	  $.fancybox.close();
	 });

	//scroll link
	$('.brands_landing_wrap nav a').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top-5},800);
		return false;
	});
});