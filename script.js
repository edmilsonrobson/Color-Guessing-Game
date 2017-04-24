var squares = document.getElementsByClassName("game-square");

var correctColorRGB = generateRandomRGB();
console.log("Correct RGB: " + correctColorRGB);
var correctSquareIndex = Math.floor(Math.random()*squares.length)

for (var i = 0 ; i < squares.length ; i++){
    if (i == correctSquareIndex){
        squares[i].style.background = correctColorRGB;
    } else{
        squares[i].style.background = generateRandomRGB();
    }

    squares[i].addEventListener("click", function(){
        if (this.style.background == correctColorRGB){
            console.log("You got it!");
        } else{
            console.log("Nope!");
        }
    });
}

function generateRandomRGB(){
    var rValue = Math.floor(Math.random()*255);
    var gValue = Math.floor(Math.random()*255);
    var bValue = Math.floor(Math.random()*255);

    return "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";
}
