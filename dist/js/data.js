/*global $ _*/

'use strict';

var videolist = [{
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


videolist.forEach(function(item) {
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

$stepsVideos.html(tmpl({ videos: steps, videoНeader: 'step <span class="color-red">by</span> step', type: 'slider' }));
$educationVideos.html(tmpl({ videos: education, videoНeader: 'craft <span class="color-red">education</span>', type: 'slider' }));
$inspirationVideos.html(tmpl({ videos: inspiration, videoНeader: 'inspiration', type: 'slider' }));


$stepsVideosMob.html(tmpl({ videos: steps, videoНeader: 'step <span class="color-red">by</span> step', type: 'videos__mob' }));
$stepsVideosMob.append('<button id="more-steps" class="load-more">Load more</button>');

$educationVideosMob.html(tmpl({ videos: education, videoНeader: 'craft <span class="color-red">education</span>', type: 'videos__mob' }));
$educationVideosMob.append('<button id="more-education" class="load-more">Load more</button>');

$inspirationVideosMob.html(tmpl({ videos: inspiration, videoНeader: 'inspiration', type: 'videos__mob' }));
$inspirationVideosMob.append('<button id="more-inspiration" class="load-more">Load more</button>');
