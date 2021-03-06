


createStartGameBox(true);

//createConfirmation();



function createStartGameBox(newGame) {


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
        if (!newGame) {
            document.querySelector('.winner').remove();

        }
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
    rock.className = "small-box";
    let rockText = document.createTextNode("Rock");
    rock.appendChild(rockText);

    let paper = document.createElement('div');
    paper.className = "small-box";
    let paperText = document.createTextNode("Paper");
    paper.appendChild(paperText);

    let scissors = document.createElement('div');
    scissors.className = "small-box";
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

    let choiceTitle = document.createElement('h3');
    choiceTitle.className = "player-choice-title";

    let choiceTitleText = document.createTextNode('Choice: PlaceHolder?');
    choiceTitle.appendChild(choiceTitleText);
    confirm.appendChild(choiceTitle);


    let cpuChoiceTitle = document.createElement('h3');
    cpuChoiceTitle.className = "cpu-choice-title";

    let cpuChoiceTitleText = document.createTextNode('CPU Choice: PlaceHolder?');
    cpuChoiceTitle.appendChild(cpuChoiceTitleText);
    confirm.appendChild(cpuChoiceTitle);


    let winnerTitle = document.createElement('h4');
    winnerTitle.className = "round-winner";

    let winnerTitleText = document.createTextNode('Round Winner');
    winnerTitle.appendChild(winnerTitleText);
    confirm.appendChild(winnerTitle);


    let confirmBox = document.createElement('div');
    confirmBox.className = 'small-box';
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
    playerScore.className = 'score-box';
    playerScore.id = 'player-score';
    let playerText = document.createTextNode('0');
    playerScore.appendChild(playerText);




    let cpuScore = document.createElement('div');
    cpuScore.className = 'score-box';
    cpuScore.id = "cpu-score";
    let cpuText = document.createTextNode('0');
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


function updateCpuChoice(choice) {
    let choiceDiv = document.querySelector(".cpu-choice-title");
    let confirmBox = document.querySelector('#confirm');
    confirmBox.style = "display:block";
    choiceDiv.id = choice;
    choiceDiv.textContent = "CPU Choice: " + choice;
}




function playRound(choice) {

    let playerChoice = choice;
    let cpuChoice = getCpuChoice();
    updateCpuChoice(cpuChoice);

    console.log("Player Chose: " + playerChoice + " CPU Chose: " + cpuChoice);

    let winner = decideWinner(playerChoice, cpuChoice);

    updateScore(winner);

}

function getCpuChoice() {

    const choices = ["Rock", "Paper", "Scissors"];



    let max = 2;
    let random = Math.floor(Math.random() * (max + 1));


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

    let playerScore = document.querySelector('#player-score');

    let cpuScore = document.querySelector('#cpu-score');

    let actualPlayerScore = parseInt(playerScore.innerHTML);

    let actualCpuScore = parseInt(cpuScore.innerHTML);






    if (winner == 'player') {

        playerScore.innerHTML = actualPlayerScore + 1;
        updateRoundWinner('player');
        if (actualPlayerScore + 1 == 5) {
            endGame('Player', actualCpuScore + 1);

        }

    } else if (winner == 'cpu') {
        cpuScore.innerHTML = actualCpuScore + 1;
        updateRoundWinner('cpu');
        if (actualCpuScore + 1 == 5) {
            endGame('Computer', actualCpuScore + 1);
        }
    } else if (winner == 'draw') {
        updateRoundWinner('draw');
    }

}

function endGame(winner, score) {
    let playerChoice = document.querySelector('.player-choice');
    let confirm = document.querySelector('.confirm');
    let scores = document.querySelector('.scores');
    playerChoice.remove();
    confirm.remove();
    scores.remove();

    let showWinner = document.createElement('div');
    showWinner.className = 'winner';
    let winnerText = document.createTextNode('Winner: ' + winner + " Score: " + score);
    showWinner.appendChild(winnerText);

    let container = document.querySelector(".container");
    container.appendChild(showWinner);




    createStartGameBox(false);




}


function updateRoundWinner(winner) {

    let roundWinner = document.querySelector('.round-winner');
    console.log('hello luke');
    roundWinner.innerHTML = 'Round Winner: ' + winner;

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