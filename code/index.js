// $("explore").addEventListener("click", function () {
//   // location.href ="explore.html"
//   var dogAudio = new Audio("sounds/dog.wav");
//   dogAudio.play();
// });

var m = localStorage.getItem("message");

showMessage(m)
if(m == "done"){
  $("#messageContent").css("display","none");
  $("#dialogContent").css("background-color","white");
  $("#messageDone").css("display","block");
}

$("#sendMessage").click(function() {
  var name = $("#username").val();
  var email = $("#email").val();
  var message = $("#messageText").val();

  if(name.trim().length < 4){
    showMessage("Name is to short");
  }

  else if(email.endsWith("@gmail.com") != true){
    showMessage("Enter valid email addess");
  }

  else if(message.trim().length < 1){
    showMessage("Enter some message for us");
  }

  else{
    writeUserData(name, email, message);

  }

});

$("#message").click(function() {
  $("#dialog").fadeIn();

});

$("#closedialog").click(function() {
  $("#dialog").fadeOut();
});

var database = firebase.database();


function writeUserData(name, email, message) {
  // Generate a reference to a new location and add some data using push()
  var myRef = firebase.database().ref().push();
   var key = myRef.key;


  firebase.database().ref('users/' + key).set({
    username: name,
    email: email,
    message: message,
    key : key
  }, function(error) {
    if (error) {
      showMessage("Saved Failed");
    } else {
      showMessage("Send Successfully");
      $("#messageContent").css("display","none");
      $("#dialogContent").css("background-color","white");
      $("#messageDone").css("display","block");
      localStorage.setItem("message", "done");


    }
  });
}

function showMessage(text) {
  var x = document.getElementById("snackbar");
  x.innerHTML = text
  x.className = "show";
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 3000);
}
