'use strict';

var photoArray = [];

var Photo = function(fileLocation) {
  //constructor

  this.path = fileLocation;
  this.votes = 1;
  this.index = //where it lives in  photoArray?

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

//etc

var Tracker = function() {
this.leftPhoto = this.getRandomInt();
this.rightPhoto = this.getRandomInt();

};

Photo.prototype.highlight = function() {
//highlight the photo after it is clicked
};

Tracker.prototype.waitingForVote = function() {
  //receive the click
  //increment the vote count
  //event listener on each photo
  //hightlight()
  //drawTheChart
  //giveUserOptionToVoteAgain()?
};
//receiveVote()

Tracker.prototype.getRandomInt = function() {
  var random = (Math.floor(Math.random() * 14) );
  console.log(random)
//generate a random number to select an image from img folder
    photoArray[random].displayPhotos();


};


Tracker.prototype.displayPhotos = function() {
  //display the randomly selected photo
  // prevent picking same photo twice
  while (this.leftPhoto == this.rightPhoto) {
    this.rightPhoto = this.getRandomInt();
  }
};
Tracker();



//some document.getElementById variables to access and manipulate the document
