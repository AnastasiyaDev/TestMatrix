"use strict";

// var videolist = [
// {
//     "type": "steps",
//     "id": "z8M0Fa1JVco"
//   },
//   {
//     "type": "steps",
//     "id": "Wi2KcdoCuo4"
//   },
//   {
//     "type": "steps",
//     "id": "8H6dYUgQKB8" 
//   },
//   {
//     "type": "steps",
//     "id": "PZjGrmHdFME" 
//   },
//   {
//     "type": "steps",
//     "id": "_wLGr24VeoI" 
//   },
//   {
//     "type": "steps",
//     "id": "DG4FAU5qmMY" 
//   },
//   {
//     "type": "education",
//     "id": "RmNWNLXmswk" 
//   },
//   {
//     "type": "education",
//     "id": "-tztXOz8Vc0" 
//   },
//   {
//     "type": "education",
//     "id": "kUfIVtyydgQ" 
//   },
//   {
//     "type": "inspiration",
//     "id": "VmmwwzR536g" 
//   },
//   {
//     "type": "inspiration",
//     "id": "vz0k8O-Ef9Y" 
//   },
//   {
//     "type": "inspiration",
//     "id": "6oPBFnsqJW8" 
//   }

// ];

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

// videolist.forEach(function(item) {
//   console.log(item);
//       switch(item.type){
//         case 'steps': {
//           steps.push(item); 
//           console.log(steps);
//           break;
//         }
//         case 'education': {
//           education.push(item); 
//           break;
//         }
//         case 'inspiration': {
//           inspiration.push(item); 
//           break;
//         }
//       }
//   });


videolist.forEach(function(item) {
  // console.log(item.list);
      switch(item.title){
        case 'Step by Step': {
          steps.push(item); 
          console.log(steps);

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

// var ownerArr = [{
//     "owner": "Colin",
//     "pets": [{"name":"dog1"}, {"name": "dog2"}]
// }, {
//     "owner": "John",
//     "pets": [{"name":"dog3"}, {"name": "dog4"}]
// }];

// ownerArr.map(function(owner){
//    return owner.pets[0].name;
//    console.log(owner);
// });


// function windowSize(){
    // if ($(window).width() >= '601'){
        $stepsSlider.html(tmpl({ videos: steps }));
        $educationSlider.html(tmpl({ videos: education }));
        $inspirationSlider.html(tmpl({ videos: inspiration }));
    // } else {
        $stepsMob.html(tmpl({ videos: steps }));
        $stepsMob.append("<button id='more-steps' class='load-more'>Load more</button>");
        $educationMob.html(tmpl({ videos: education }));
        $educationMob.append("<button id='more-education' class='load-more'>Load more</button>");        
        $inspirationMob.html(tmpl({ videos: inspiration }));
        $inspirationMob.append("<button id='more-inspiration' class='load-more'>Load more</button>");              
//     }
// }

// $(window).on('load resize',windowSize);