'use strict';

var photoArray = [];

var Photo = function(fileLocation) {
  //constructor

  this.path = fileLocation;
  this.votes = 0;
  this.index = photoArray;//where it lives in  photoArray?

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
// var ctx = document.getElementById("myChart").getContext("2d");
// console.dir(Chart)
// var myNewChart = new Chart(ctx).Doughnut([{value: leftVotes, color: 'red'}, {value: rightVotes, color: 'green'}]);
// console.dir(Chart);



var Tracker = function() {
  this.leftPhoto = '';
  this.rightPhoto = '';
};
var tracker = new Tracker();



Photo.prototype.highlight = function() {

};

Tracker.prototype.waitingForVote = function() {
  $('#left').bind('click', function(e){
  // left.addEventListener("click", function(e) {
    var targetSrc = e.target.src.slice(44, 100)
    console.log('left was clicked')
    photoArray.forEach(function(val) {
      if(val.path === targetSrc) {
        val.votes ++;
      }
      leftVotes = val.votes;
      console.log(leftVotes)
    })
    // this.displayPhotos();
  });
  $('#right').bind('click', function(e){
  // right.addEventListener("click", function(e) {
    var targetSrc = e.target.src.slice(44, 100)
    console.log('right was clicked')
    photoArray.forEach(function(val) {
      if(val.path === targetSrc) {
        val.votes ++;
      }
      rightVotes = val.votes;
      console.log(rightVotes)
    })
    // this.displayPhotos();
  });

  //receive the click
  //increment the vote count
  //event listener on each photo
  //hightlight()
  //drawTheChart
  //giveUserOptionToVoteAgain()?
};
//receiveVote()
// var ctx = document.getElementById("myChart").getContext("2d");
// console.dir(Chart)
// var myNewChart = new Chart(ctx).Doughnut([{value: leftVotes, color: 'red'}, {value: rightVotes, color: 'green'}]);
// console.dir(Chart);

Tracker.prototype.getRandomInt = function() {
  var random = (Math.floor(Math.random() * 14) );
  console.log(random)
  return random;
//generate a random number to select an image from img folder
  // photoArray[random].displayPhotos();
};

Tracker.prototype.displayPhotos = function() {
  //display the randomly selected photo
  // prevent picking same photo twice
  this.leftPhoto = photoArray[this.getRandomInt()];
  console.log(this.leftPhoto);
  this.rightPhoto = photoArray[this.getRandomInt()];
  console.log(this.rightPhoto);
  while (this.leftPhoto == this.rightPhoto) {
    this.rightPhoto = photoArray[this.getRandomInt()];
    console.log(this.rightPhoto);
  }

  var left = $('#left')[0];
  var right = $('#right')[0];
  // var left = document.getElementById("left");
  // var right = document.getElementById("right");
  var leftContent = '<img src = "' + this.leftPhoto.path + '" />';
  console.log(leftContent);
  var rightContent = '<img src = "' + this.rightPhoto.path + '" />';
  console.log(leftContent);
  left.innerHTML = leftContent;
  right.innerHTML = rightContent;
};

tracker.displayPhotos();
tracker.waitingForVote();

