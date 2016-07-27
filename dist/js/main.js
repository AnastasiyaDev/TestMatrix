$(document).ready(function(){


  $('.slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 601,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false
	      }
	    }

	  ]
  });

  	$(".youtube-link").on( 'click', function(event) {
	  	event.stopPropagation();
		$.fancybox({
				'padding'		: 0,
				'autoScale'		: true,
				'transitionIn'	: 'none',
				'transitionOut'	: 'none',
				'title'			: this.title,
				'maxWidth'      : '1000',
	      		'maxHeight'     : '700',
	      		'width'         : '80%',
	      		'height'        : '50%',
				'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
				'type'			: 'swf',
				'swf'			: {
				   	 'wmode'		: 'transparent',
					'allowfullscreen'	: 'true'
				}

			});

		return false;
	});

	$(".img-block").hover(
	  function() {
	    $(this).find($('.play-circle')).attr( "src", "img/playCircle-active.png");
	  }, function() {
    	 $(this).find($('.play-circle')).attr( "src", "img/playCircle.png");
  		}

	);

	$("#more-steps").click(function(){
	    $('.steps-videos__mob').find(".img-block:not(:visible):lt(2)").slideToggle('fast',
	        function() {
	            if ($('.steps-videos__mob').find(".img-block:not(:visible)").length==0) {
	                $("#more-steps").css("display","none");
	            }
	        }
	    );
	})
 
});
