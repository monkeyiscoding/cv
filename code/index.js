
// $("explore").addEventListener("click", function () {
//   // location.href ="explore.html"
//   var dogAudio = new Audio("sounds/dog.wav");
//   dogAudio.play();
// });

$("#explore").click(function(){
  $("h1").css("color","purple");
});

$("#message").click(function(){
  $(".messageDialog").css("display","block")
});

$("#closedialog").click(function(){
  $("#dialog").css("display","none");
});
