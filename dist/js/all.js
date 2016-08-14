/*eslint no-unused-vars: "true"*/
var videoList = [{
    'title': 'Step <span class="color-red">by</span> Step',
    'list': [
        'z8M0Fa1JVco',
        'Wi2KcdoCuo4',
        '8H6dYUgQKB8',
        'PZjGrmHdFME',
        '_wLGr24VeoI',
        'DG4FAU5qmMY'
    ]
}, {
    'title': 'Craft <span class="color-red">Education</span>',
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
/*global $ _ videoList*/

var tmpl = _.template($('#listTemplate').html());

$('#videos').html(tmpl({ videos: videoList }));

var $slider = $('.slider');
var $searchForm = $('.search-form');
var $allUnvisEl = $('.search-form > .unvis');
var $linkOnYoutube = $('.youtube-link');
// var $moreStepsVideoButton = $('#more-steps-videos');
// var $stepsVideoMob = $('.mob');

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
            arrows: false,
            vertical: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
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


// $moreStepsVideoButton.click(function() {
//     $stepsVideoMob.find('.img-block:not(:visible):lt(2)').slideToggle('fast',
//         function() {
//             // $imgBlock.css({'visibility':'visible', 'position':'static'});
//             if ($stepsVideoMob.find('.img-block:not(:visible)').length == 0) {
//                 $moreStepsVideoButton.css('display', 'none');
//             }
//         }
//     );
// });
