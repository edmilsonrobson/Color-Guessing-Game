var squares = document.getElementsByClassName("game-square");
var gameMessage = document.getElementById("game-message");
var currentColorText = document.getElementById("current-color-text");
var title = document.getElementById("main-title");
var correctColorRGB;
var correctSquareIndex;

var newColorsButton = document.getElementById("new-colors-button");
newColorsButton.addEventListener("click", function(){
    document.activeElement.blur();
    resetGame();
});

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
                onWinGame();
            } else{
                displayFailMessage();
                this.style.background = "transparent";
            }
        });
    }
}

function displayVictoryMessage(){
    var successMessages = ["Yup!", "You did it!", "Great job!", "Awesome!", "You rule!"]
    var randomIndex = Math.floor(Math.random()*successMessages.length);
    displayMessage(successMessages[randomIndex])
}

function displayFailMessage(){
    var successMessages = ["Nope.", "Wrong!", "Sorry, that was wrong.", "Erm.. no.", "Try harder."]
    var randomIndex = Math.floor(Math.random()*successMessages.length);
    displayMessage(successMessages[randomIndex])
}

function displayMessage(msg){
    gameMessage.textContent = msg;
}

function onWinGame(){
    for (var i = 0 ; i < squares.length ; i++){
        squares[i].style.background = correctColorRGB;
    }

    title.style.background = correctColorRGB;
}

function resetGame(){
    title.style.background = "steelblue";
    displayMessage("");

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
