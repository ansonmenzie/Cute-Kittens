
$(document).ready(function() {

  var Photo = function(url) {
    this.picUrl = url;
    this.votes = 0;
  };

  var photoArray = [];

  $.ajax({
    url: "https://api.imgur.com/3/album/DDoWy",
    headers:{
      "Authorization": "Client-ID b73d808e6845225"
      }
    })

    .done(function(res) {
      var images = res.data.images;
      for (i = 0; i < images.length; i++) {
        photoArray.push(new Photo(images[i].link));
      };
      displayPhotos();
    });

    var displayPhotos = function() {
     var randIndex1 = Math.floor(Math.random() * photoArray.length);
     var randIndex2 = Math.floor(Math.random() * photoArray.length);
     console.log(randIndex1 + "  " + randIndex2);
     while (randIndex1 === randIndex2) {
       randIndex2 = Math.floor(Math.random() * photoArray.length - 1);
     }

    $('#kit1').attr('src', photoArray[randIndex1].picUrl);
    $('#kit2').attr('src', photoArray[randIndex2].picUrl);
    }


    var voteL = 0;
    $('#kit1').on('click', function(e){
    voteL ++;
    console.log(voteL);
    $('#kit1').css({'border': '10px solid #F21905'});
    $('#kit2').attr('src', photoArray[this.randIndex2]);

   });

    var voteR = 0;
    $('#kit2').on('click', function(e){
    voteR ++;
    console.log(voteR);
    $('#kit2').css({'border': '10px solid #F21905'});
    $('#kit1').attr('src', photoArray[this.randIndex1]);

  });

    var ctx = $("#myChart").get(0).getContext("2d");
  var myDoughnutChart = new Chart(ctx).Doughnut(data);
  var data = [
    {
        value: 1,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "meow"
    },
    {
        value: 1,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "purrr"
    }
  ]
  var myDoughnutChart = new Chart(ctx).Doughnut(data);


    $('#button').on('click', function() {
      displayPhotos();
    $('#kit2').css({'border': ''});
    $('#kit1').css({'border': ''});

  })


});



