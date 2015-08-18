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

var ctx = document.getElementById("myChart").getContext("2d");
console.dir(Chart)
var myNewChart = new Chart(ctx).Doughnut([{value: leftVotes, color: 'red'}, {value: rightVotes, color: 'green'}]);
console.dir(Chart);


var Tracker = function() {
this.leftPhoto = '';
this.rightPhoto = '';
};
var tracker = new Tracker();

Photo.prototype.highlight = function() {
//highlight the photo after it is clicked
//Does this need JS functionality? Can it be done with just css????
};

Tracker.prototype.waitingForVote = function() {
  left.addEventListener("click", function(e) {
  var targetSrc = e.target.src.slice(44, 100)
    console.log('left was clicked')
    photoArray.forEach(function(val) {
      if(val.path === targetSrc) {
        val.votes ++;
      }
      leftVotes = val.votes;
    })
    // this.displayPhotos();
  });
  right.addEventListener("click", function(e) {
  var targetSrc = e.target.src.slice(44, 100)
    console.log('right was clicked')
    photoArray.forEach(function(val) {
      if(val.path === targetSrc) {
        val.votes ++;
      }
      rightVotes = val.votes;
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

Tracker.prototype.getRandomInt = function() {
  return(Math.floor(Math.random() * 14) );
  // console.log(random)
//generate a random number to select an image from img folder
  // photoArray[random].displayPhotos();
};


Tracker.prototype.displayPhotos = function() {
  //display the randomly selected photo
  // prevent picking same photo twice
  this.leftPhoto = photoArray[this.getRandomInt()];
  this.rightPhoto = photoArray[this.getRandomInt()];
  while (this.leftPhoto == this.rightPhoto) {
    this.rightPhoto = this.getRandomInt();
  }
  var left = document.getElementById("left");
  left.innerHTML = '<img src = "img/kitten10.jpg">'
  var right = document.getElementById("right");
  right.innerHTML = '<img src = "img/kitten13.jpg">'
};

tracker.displayPhotos();
tracker.waitingForVote();



//some document.getElementById variables to access and manipulate the document
