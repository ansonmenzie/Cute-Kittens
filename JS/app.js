'use strict';

$(document).ready(function() {

  var photoArray = [];

  var Photo = function(fileLocation) {
    //constructor

    this.path = fileLocation;
    this.votes = 0;

  };

  photoArray.push(new Photo('img/kitten1.jpg'));
  photoArray.push(new Photo('img/kitten2.jpg'));
  photoArray.push(new Photo('img/kitten3.jpg'));
  photoArray.push(new Photo('img/kitten4.jpg'));
  photoArray.push(new Photo('img/kitten5.jpg'));
  photoArray.push(new Photo('img/kitten6.jpg'));
  photoArray.push(new Photo('img/kitten7.jpg'));
  photoArray.push(new Photo('img/kitten8.jpg'));
  photoArray.push(new Photo('img/kitten9.jpg'));
  photoArray.push(new Photo('img/kitten10.jpg'));
  photoArray.push(new Photo('img/kitten11.jpg'));
  photoArray.push(new Photo('img/kitten12.jpg'));
  photoArray.push(new Photo('img/kitten13.jpg'));
  photoArray.push(new Photo('img/kitten14.jpg'));

  var leftVotes;
  var rightVotes;

  var Tracker = function(leftPhoto, rightPhoto) {
    this.leftPhoto = leftPhoto;
    this.rightPhoto = rightPhoto;
  };
  var tracker = new Tracker();


  Tracker.prototype.getRandomInt = function() {
    var random = (Math.floor(Math.random() * 14) );
    return random;
  //generate a random number to select an image from img folder
    // photoArray[random].displayPhotos();
  };

  Tracker.prototype.displayPhotos = function() {
    //display the randomly selected photo
    // prevent picking same photo twice
    this.leftPhoto = photoArray[this.getRandomInt()];
    this.rightPhoto = photoArray[this.getRandomInt()];
    while (this.leftPhoto == this.rightPhoto) {
      this.rightPhoto = photoArray[this.getRandomInt()];
    }

    var left = $('#left')[0];
    var right = $('#right')[0];
    // var left = document.getElementById("left");
    // var right = document.getElementById("right");
    var leftContent = '<img src = "' + this.leftPhoto.path + '" />';
    var rightContent = '<img src = "' + this.rightPhoto.path + '" />';
    left.innerHTML = leftContent;
    right.innerHTML = rightContent;
    highlight();

  };

   var ctx = $("#myChart").get(0).getContext("2d");
  var myDoughnutChart = new Chart(ctx).Doughnut(data);
  var data = [
    {
        value: 1,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Right Kitty"
    },
    {
        value: 1,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "left Kitty"
    }
  ]
  var myDoughnutChart = new Chart(ctx).Doughnut(data);

  Tracker.prototype.addVote = function() {
    var index = photoArray[this.getRandomInt()];
    photoArray[index]++;
  };

  $('button').click(function(){
    tracker.addVote($('.highlight').attr('src'));
    $('button').css({'visibility':'hidden'});
    tracker.displayPhotos();
  });

  var highlight = function(){
    $('div').click(function(){
      $('button').css({'visibility':'visible'});
      $('.highlight').removeClass('highlight');
      $(this).toggleClass('highlight');
    });

  tracker.displayPhotos();
  tracker.addVote();
  };

});

