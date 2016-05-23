$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		
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

	  responsive: [{ 
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        } 
    }]

	});

	$(".history_slider").slick({
		centerMode: true,
	  	centerPadding: '80px',
	  	slidesToShow: 1,
	    autoplay: false,
	    dots: true,
	    customPaging : function(slider, i) {
	        var thumb = $(slider.$slides[i]).data('thumb');
	        return '<a>'+thumb+'</a>';
	    },

	    responsive: [{ 
	        breakpoint: 800,
	        settings: {
	        	centerPadding: '0px',
	            slidesToShow: 1,
	            slidesToScroll: 1
	        } 
	    }]
	});


	//close
	$('.close_modal a').on('click', function(){
	  //console.log($(this).parent);
	  $.fancybox.close();
	 });

	//scroll link
	$('.brands_landing_wrap nav a, .to_top_button').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top-5},800);
		return false;
	});
});