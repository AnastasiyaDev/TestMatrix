var videoList = [{
    'title': 'Step by Step',
    'list': [
        'z8M0Fa1JVco',
        'Wi2KcdoCuo4',
        '8H6dYUgQKB8',
        'PZjGrmHdFME',
        '_wLGr24VeoI',
        'DG4FAU5qmMY'
    ]
}, {
    'title': 'Craft Education',
    'list': [
        'RmNWNLXmswk',
        '-tztXOz8Vc0',
        'kUfIVtyydgQ',
        'RmNWNLXmswk',
        '-tztXOz8Vc0',
        'kUfIVtyydgQ'
    ]
}, {
    'title': 'Inspiration',
    'list': [
        'VmmwwzR536g',
        'vz0k8O-Ef9Y',
        '6oPBFnsqJW8',
        'VmmwwzR536g',
        'vz0k8O-Ef9Y',
        '6oPBFnsqJW8'
    ]
}];


 /*global $ _*/

 var steps = [];
 var education = [];
 var inspiration = [];

 var tmpl = _.template($('#list-template').html());

 var $stepsVideos = $('.steps-videos');
 var $educationVideos = $('.education-videos');
 var $inspirationVideos = $('.inspiration-videos');

 var $stepsVideosMob = $('.steps-videos-mob');
 var $educationVideosMob = $('.education-videos-mob');
 var $inspirationVideosMob = $('.inspiration-videos-mob');

 var titleSteps = 'step <span class="color-red">by</span> step';
 var titleEducation = 'craft <span class="color-red">education</span>';
 var titleInspiration = 'inspiration';

 // var titles = {
 //     'Step by Step' : 'step <span class="color-red">by</span> step',
 //     'Craft Education' : 'craft <span class="color-red">education</span>',
 //     'Inspiration' : 'inspiration'
 // };

 videoList.forEach(function(item) {
     switch (item.title) {
     case 'Step by Step':
         {
             steps.push(item);
             break;
         }
     case 'Craft Education':
         {
             education.push(item);
             break;
         }
     case 'Inspiration':
         {
             inspiration.push(item);
             break;
         }
     }
 });

 $stepsVideos.html(tmpl({ videos: steps, videoTitle: titleSteps, type: 'slider' }));
 $educationVideos.html(tmpl({ videos: education, videoTitle: titleEducation, type: 'slider' }));
 $inspirationVideos.html(tmpl({ videos: inspiration, videoTitle: titleInspiration, type: 'slider' }));


 $stepsVideosMob.html(tmpl({ videos: steps, videoTitle: titleSteps, type: 'mob' }))
 .append('<button id="more-steps" class="load-more">Load more</button>');

 $educationVideosMob.html(tmpl({ videos: education, videoTitle: titleEducation, type: 'mob' }))
 .append('<button id="more-education" class="load-more">Load more</button>');

 $inspirationVideosMob.html(tmpl({ videos: inspiration, videoTitle: titleInspiration, type: 'mob' }))
 .append('<button id="more-inspiration" class="load-more">Load more</button>');

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
