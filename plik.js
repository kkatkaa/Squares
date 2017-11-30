$(document).ready(function(){

  createsquare(625);
  squareStyle(32);

  // Event
  colourChange();

});

// The square
function createsquare(iterations) {
  for (var i = 0; i < iterations; i++) {
    var div = document.createElement("div");
    div.className = "square";
    $(".container").append(div);
  }
}
// The square styling
function squareStyle(squareSize) {
  $(".square").css({
    "background-color": "#CCCFFF",
    "width": squareSize,
    "height": squareSize,
    "float": "left"
  });
}
// Change the colour of the sqaures
function colourChange()
{
  $(".square").mouseenter(function() {
    $(this).css("background-color", "#CCFFFF");
  });
}
// Reset the square
function squareReset(){
  // empty out current square
  $(".container").empty();

  // How big the users wants the square
  var userInput = prompt("Please enter how big you want your square (between 12 and 64)");
  if (isNaN(userInput)) {
    alert("Error: You didn't enter a number!");
  }
  else if (userInput < 12 || userInput > 64)
  {
    alert("Error: Wrong number!");
  }
  else {
    var squareSize = 800 / userInput;
    var iterations = userInput * userInput;
    createsquare(iterations);
    squareStyle(squareSize);
    colourChange();
    }
  }
