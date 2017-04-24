var squares = document.getElementsByClassName("game-square");
var gameMessage = document.getElementById("game-message");
var currentColorText = document.getElementById("current-color-text");
var correctColorRGB;
var correctSquareIndex;

var newColorsButton = document.getElementById("new-colors-button");
newColorsButton.addEventListener("click", resetGame);

implementClickListeners();
resetGame();

function generateRandomRGB(){
    var rValue = Math.floor(Math.random()*255);
    var gValue = Math.floor(Math.random()*255);
    var bValue = Math.floor(Math.random()*255);

    return "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";
}

function implementClickListeners(){
    for (var i = 0 ; i < squares.length ; i++){
        squares[i].addEventListener("click", function(){
            if (this.style.background == correctColorRGB){
                displayVictoryMessage();
            } else{
                displayFailMessage();
                this.style.background = "transparent";
            }
        });
    }
}

function displayVictoryMessage(){
    displayMessage("Correct!")
}

function displayFailMessage(){
    displayMessage("Nope.")
}

function displayMessage(msg){
    gameMessage.textContent = msg;
}

function resetGame(){
    correctColorRGB = generateRandomRGB();
    correctSquareIndex = Math.floor(Math.random()*squares.length)
    currentColorText.textContent = correctColorRGB;

    for (var i = 0 ; i < squares.length ; i++){
        if (i == correctSquareIndex){
            squares[i].style.background = correctColorRGB;
        } else{
            squares[i].style.background = generateRandomRGB();
        }
    }
}
