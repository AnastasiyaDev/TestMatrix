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
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false
	      }
	    }

	  ]
  });

// helpers : {
// 			media : {
// 			    youtube : {
// 			         params : {
// 			             theme : 'light',
//                          vq    : 'hd720',
//                          css   : {
//                             'body' : 'color: #fff'
//                          } 
// 			         }
// 			    } 
// 			}
// 		}

  $(".youtube-link").click(function() {
	$.fancybox({
			'padding'		: 0,
			'autoScale'		: true,
			'transitionIn'	: 'none',
			'transitionOut'	: 'none',
			'title'			: this.title,
			'maxWidth'      : '1000',
      		'maxHeight'     : '700',
      		'width'         : '70%',
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
	    // alert("fff");
	  }, function() {
    	 $(this).find($('.play-circle')).attr( "src", "img/playCircle.png");
  		}

	);
 
});
