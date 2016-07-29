 /*global $ */

 $(document).ready(function() {

     var $slider = $('.slider');
     var $searchForm = $('.search-form');
     var $allUnvisEl = $('.search-form > .unvis');
     var $linkOnYoutube = $('.youtube-link');
     var $imgBlock = $('.img-block');
     var $playVideo = $('.play-circle');
     var $moreVideoButton = $('#more-steps');
     var $stepsVideoForMob = $('.steps-videos__mob');

     $slider.slick({
         dots: false,
         infinite: true,
         speed: 300,
         slidesToShow: 3,
         slidesToScroll: 1,
         responsive: [{
             breakpoint: 1024,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 1,
                 infinite: true,
                 dots: false
             }
         }, {
             breakpoint: 601,
             settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 infinite: true,
                 dots: false
             }
         }]
     });

     $searchForm.on('click', '.form-search-open', function() {
         if ($allUnvisEl.hasClass('unvis')) {
             $allUnvisEl.addClass('vis').removeClass('unvis');
         }
     });

     $linkOnYoutube.on('click', function(event) {
         event.preventDefault();
         $.fancybox({
             'padding': 0,
             'autoScale': true,
             'transitionIn': 'none',
             'transitionOut': 'none',
             'title': this.title,
             'maxWidth': '1000',
             'maxHeight': '700',
             'width': '80%',
             'height': '60%',
             'href': this.href.replace(new RegExp('watch\\?v=', 'i'), 'v/'),
             'type': 'swf',
             'swf': {
                 'wmode': 'transparent',
                 'allowfullscreen': 'true'
             }

         });

         return false;
     });

     $imgBlock.hover(
         function() {
             $(this).find($playVideo).attr('src', 'img/playCircle-active.png');
         },
         function() {
             $(this).find($playVideo).attr('src', 'img/playCircle.png');
         }

     );

     $moreVideoButton.click(function() {
         $stepsVideoForMob.find('.img-block:not(:visible):lt(2)').slideToggle('fast',
             function() {
                 if ($stepsVideoForMob.find('.img-block:not(:visible)').length == 0) {
                     $moreVideoButton.css('display', 'none');
                 }
             }
         );
     });

 });
