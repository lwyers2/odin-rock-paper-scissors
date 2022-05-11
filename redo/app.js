


createStartGameBox();

//createConfirmation();



function createStartGameBox() {

    // createBoxes('new-game');
    let boxes = document.createElement('div');
    boxes.className = "boxes";



    let startGame = document.createElement('div');
    startGame.className = "box";
    startGame.id = "start-game";
    let text = document.createTextNode("Start Game?");
    startGame.appendChild(text);

    let container = document.querySelector(".container");
    container.appendChild(boxes);

    boxes.appendChild(startGame);

    startGame.addEventListener("click", () => {
        console.log("Hello Start");
        createPlayerChoiceBox();
        createConfirmation();
        createScoreBoard();
        removeStartGameBox();
    });
}


function removeStartGameBox() {
    let startGame = document.querySelector('#start-game');
    startGame.remove();
}

//please copy above 
function createPlayerChoiceBox() {

    let playerChoice = document.createElement('div');
    playerChoice.className = "player-choice";


    let boxes = document.createElement('div');
    boxes.className = "boxes";
    boxes.id = "player-choice";

    let rock = document.createElement('div');
    rock.className = "box";
    let rockText = document.createTextNode("Rock");
    rock.appendChild(rockText);

    let paper = document.createElement('div');
    paper.className = "box";
    let paperText = document.createTextNode("Paper");
    paper.appendChild(paperText);

    let scissors = document.createElement('div');
    scissors.className = "box";
    let scissorsText = document.createTextNode("Scissors");
    scissors.appendChild(scissorsText);

    let container = document.querySelector(".container");
    container.appendChild(playerChoice);
    playerChoice.appendChild(boxes);



    boxes.appendChild(rock);

    boxes.appendChild(paper);


    boxes.appendChild(scissors);

    rock.addEventListener("click", () => {

        console.log("Rock Clicked");
        updatePlayerChoice("Rock");


    });

    paper.addEventListener("click", () => {

        console.log("Paper Clicked");
        updatePlayerChoice("Paper");

    });

    scissors.addEventListener("click", () => {

        console.log("Scissors Clicked");
        updatePlayerChoice("Scissors");

    });

}

function createConfirmation() {
    let confirm = document.createElement('div');
    confirm.className = "confirm";

    let boxes = document.createElement('div');
    boxes.className = "boxes";

    let container = document.querySelector(".container");
    container.appendChild(confirm);

    let choiceTitle = document.createElement('h2');
    choiceTitle.className = "player-choice-title";

    let choiceTitleText = document.createTextNode('Choice: PlaceHolder?');
    choiceTitle.appendChild(choiceTitleText);
    confirm.appendChild(choiceTitle);

    let confirmBox = document.createElement('div');
    confirmBox.className = 'box';
    confirmBox.id = "confirm";
    let confirmText = document.createTextNode('Confirm');
    confirmBox.appendChild(confirmText);




    confirm.appendChild(boxes);


    boxes.appendChild(confirmBox);
    confirmBox.style = "display:none";


    confirmBox.addEventListener("click", () => {

        console.log("Confirm coice of.. : " + choiceTitle.id);
        playRound(choiceTitle.id);

    });



}


function createScoreBoard() {

    let scores = document.createElement('div');
    scores.className = 'scores';

    let boxes = document.createElement('div');
    boxes.className = "boxes";

    let container = document.querySelector(".container");
    container.appendChild(scores);

    let playerScore = document.createElement('div');
    playerScore.className = 'box';
    playerScore.id = '0';
    let playerText = document.createTextNode('PlayerScore: ');
    playerScore.appendChild(playerText);




    let cpuScore = document.createElement('div');
    cpuScore.className = 'box';
    cpuScore.id = "0";
    let cpuText = document.createTextNode('CPUScore: ');
    cpuScore.appendChild(cpuText);


    scores.appendChild(boxes);

    boxes.appendChild(playerScore);

    boxes.appendChild(cpuScore);


}


function updatePlayerChoice(choice) {
    let choiceDiv = document.querySelector(".player-choice-title");
    let confirmBox = document.querySelector('#confirm');
    confirmBox.style = "display:block";
    choiceDiv.id = choice;
    choiceDiv.textContent = "Player Choice: " + choice;
}


function playRound(choice) {

    let playerChoice = choice;
    let cpuChoice = getCpuChoice();

    console.log("Player Chose: " + playerChoice + " CPU Chose: " + cpuChoice);

    let winner = decideWinner(playerChoice, cpuChoice);

    updateScore(winner);

}

function getCpuChoice() {

    const choices = ["Rock", "Paper", "Scissors"];



    let max = 2;
    let random = Math.floor(Math.random() * (max + 1));
    console.log

    return choices[random];

}


function decideWinner(playerChoice, cpuChoice) {


    if (playerChoice == cpuChoice) {
        return 'draw';
    } else if (playerChoice == 'Rock' && cpuChoice == 'Paper') {
        return 'cpu';
    } else if (playerChoice == 'Paper' && cpuChoice == 'Rock') {
        return 'player';
    } else if (playerChoice == 'Rock' && cpuChoice == 'Scissors') {
        return 'player';
    } else if (playerChoice == 'Scissors' && cpuChoice == 'Rock') {
        return 'cpu';
    } else if (playerChoice == 'Paper' && cpuChoice == 'Scissors') {
        return 'cpu';
    } else if (playerChoice == 'Scissors' && cpuChoice == 'Paper') {
        return 'player';
    }
}

function updateScore(winner) {

    if (winner == 'player') {

    }

}

// /*
// Creates boxes add in string to id div
// */
// function createBoxes(id) {

//     let boxes = document.createElement('div');
//     boxes.className = "boxes";

//     if (id.length > 1) {
//         boxes.id = id;
//     }

// }