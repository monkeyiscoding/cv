
// $("explore").addEventListener("click", function () {
//   // location.href ="explore.html"
//   var dogAudio = new Audio("sounds/dog.wav");
//   dogAudio.play();
// });

$("#explore").click(function(){
  $("h1").css("color","purple");
});

$("#message").click(function(){
  $("#dialog").fadeIn();

});

$("#closedialog").click(function(){
  $("#dialog").fadeOut();
});
