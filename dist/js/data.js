"use strict";

var videolist = [
    {
        'title': 'Step by Step',
        'list': [
            "z8M0Fa1JVco",
            "Wi2KcdoCuo4",
            "8H6dYUgQKB8",
            "PZjGrmHdFME",
            "_wLGr24VeoI",
            "DG4FAU5qmMY"
        ]
    },
    {
        'title': 'Craft Education',
        'list': [
            "RmNWNLXmswk",
            "-tztXOz8Vc0",
            "kUfIVtyydgQ",
            "RmNWNLXmswk",
            "-tztXOz8Vc0",
            "kUfIVtyydgQ"
        ]
    },
    {
        'title': 'Inspiration',
        'list': [
            "VmmwwzR536g",
            "vz0k8O-Ef9Y",
            "6oPBFnsqJW8",
            "VmmwwzR536g",
            "vz0k8O-Ef9Y",
            "6oPBFnsqJW8"
        ]
    }
];

var steps = [];
var education = [];
var inspiration = [];

var tmpl = _.template($('#list-template').html());

var $stepsSlider = $('.steps-videos__slider');
var $educationSlider = $('.education-videos__slider');
var $inspirationSlider = $('.inspiration-videos__slider');

var $stepsMob = $('.steps-videos__mob');
var $educationMob = $('.education-videos__mob');
var $inspirationMob = $('.inspiration-videos__mob');


videolist.forEach(function(item) {
      switch(item.title){
        case 'Step by Step': {
          steps.push(item); 
          break;
        }
        case 'Craft Education': {
          education.push(item); 
          break;
        }
        case 'Inspiration': {
          inspiration.push(item); 
          break;
        }
      }
  });

$stepsSlider.html(tmpl({ videos: steps }));
$educationSlider.html(tmpl({ videos: education }));
$inspirationSlider.html(tmpl({ videos: inspiration }));

$stepsMob.html(tmpl({ videos: steps }));
$stepsMob.append("<button id='more-steps' class='load-more'>Load more</button>");
$educationMob.html(tmpl({ videos: education }));
$educationMob.append("<button id='more-education' class='load-more'>Load more</button>");        
$inspirationMob.html(tmpl({ videos: inspiration }));
$inspirationMob.append("<button id='more-inspiration' class='load-more'>Load more</button>");              
