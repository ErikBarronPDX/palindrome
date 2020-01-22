$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    var inputString = $("#userInput").val();
    if (!inputString){
      alert ("Please enter a string");
    } else {
      event.preventDefault();
      var arrayForward = Array.from(inputString.toUpperCase());
      var arrayBackward = (arrayForward.slice()).reverse();
      if (arrayForward.toString() === arrayBackward.toString()){
        $(".relayString").text(inputString + " is a palindrome!");
      } else {
        $(".relayString").text(inputString + " is not a palindrome!");
      }
    }
  });
});