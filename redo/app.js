


createStartGameBox();


function createStartGameBox() {

    let boxes = document.createElement('div');
    boxes.className = "boxes";
    boxes.id = "new-game";

    let startGame = document.createElement('div');
    startGame.className = "box";
    let text = document.createTextNode("Start Game?");
    startGame.appendChild(text);

    let container = document.querySelector(".container");
    container.appendChild(boxes);

    boxes.appendChild(startGame);

    console.log("Hello");
}


//please copy above 
function createPlayerChoiceBox() {

    let playerChoice = document.createElement('div');
    playerChoice.className = "player-choice";


    let boxes = document.createElement('div');
    boxes.className = "boxes";


}