/*
Randomly generates and R, P, or S (1-3)
    Random number generator
    Assign to string
Player Input
    input and store value(case insensitive)
Game
    Compare two results
    Print result

*/

// let rock = document.getElementById("rock");
// let paper = document.getElementById("paper");
// let scissors = document.getElementById("scissors");










/*
Rock beats scissors
scissors beat paper
paper beats rock
*/


// function userPlay(choice) {




//     if (choice.toLowerCase() === "rock") {
//         return "Rock";
//     } else if (choice.toLowerCase() === "paper") {
//         return "Paper";
//     } else if (choice.toLowerCase() === "scissors") {
//         return "Scissors";
//     }
// }












// function game() {

//     console.log("Loading game....")

//     let userScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i <= 4; i++) {


//         let computerChoice = computerPlay();



//         console.log(`You picked ${playerChoice}`);
//         console.log(`Computer picked ${computerChoice}`);


//         if (computerChoice == playerChoice) {
//             console.log(`You both picked "${computerChoice}"... Draw!`);
//             userScore++;
//             computerScore++;
//         } else if (computerChoice === "Rock" && playerChoice === "Scissors") {
//             console.log("Computer Wins");
//             computerScore++;
//         } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
//             console.log("player Wins");
//             userScore++;
//         } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
//             console.log("player Wins");
//             userScore++;
//         } else if (computerChoice === "Scissors" && playerChoice === "Paper") {
//             console.log("computer Wins");
//             computerScore++;
//         } else if (computerChoice === "Paper" && playerChoice === "Rock") {
//             console.log("computer Wins");
//             computerScore++;
//         } else if (playerChoice === "Paper" && computerChoice === "Rock") {
//             console.log("player Wins");
//             userScore++;
//         }

//         console.log(`Computer Score: ${computerScore} Player Score: ${userScore}`)


//     }

//     if (computerScore > userScore) {
//         console.log(`You lose by ${computerScore - userScore} points`);
//     } else if (userScore > computerScore) {
//         console.log(`You win by ${userScore - computerScore} points`);
//     } else {
//         console.log(`It's a draw.. you both sored ${userScore}`);
//     }

// }


// this is different

// game();















// let playerScore = document.getElementsByClassName("player");
// let cpuScore = document.getElementsByClassName("cpu");





// let body = document.querySelector("body");



// let rock = document.getElementById("rock");
// let paper = document.getElementById("paper");
// let scissors = document.getElementById("scissors");







// function playerChoice() {
//     let playerChoice = "";
//     let choosen = document.createElement('div');
//     let choosenText = document.createTextNode(playerChoice);
//     let showChoice = document.querySelector(`.choice`);






//     rock.addEventListener("click", () => {
//         playerChoice = "rock";
//         choosen.appendChild(choosenText);


//     }
//     );

//     paper.addEventListener("click", () => {
//         playerChoice = "paper";
//         choosen.appendChild(choosenText);

//     }
//     );

//     scissors.addEventListener("click", () => {
//         playerChoice = "scissors"
//         choosen.appendChild(choosenText);


//     }
//     );




//     console.log("hello" + playerChoice);


//     showChoice.insertBefore(choosen, showChoice.childNodes[0]);






//     return playerChoice;

// }

// playerChoice();() => playerChoice = "rock");




function game() {

    //functions
    function gameChoice(choice) {

        if (choice === "rock") {
            console.log("being called")
            submit("player", "Rock");
        } else if (choice === "paper") {
            submit("player", "Paper");
        } else if (choice === "scissors") {
            submit("player", "Scissors");
        }
    }
    function submit(player, submitChoice) {

        if (player === "player") {
            let pick = document.querySelector(".pick");

            if (!pick.contains(document.querySelector(".playerChoice"))) {
                let playerChoiceDiv = document.createElement('p');
                playerChoiceDiv.className = "playerChoice";
                let playerChoiceText = document.createTextNode(`${submitChoice}`);
                playerChoiceDiv.appendChild(playerChoiceText);


                pick.appendChild(playerChoiceDiv);

            } else {
                pick.children[0].remove();

                let playerChoiceDiv = document.createElement('p');
                playerChoiceDiv.className = "playerChoice";
                let playerChoiceText = document.createTextNode(`${submitChoice}`);
                playerChoiceDiv.appendChild(playerChoiceText);


                pick.appendChild(playerChoiceDiv);
            }
        } else if (player === "cpu") {

            let cpuChoice = document.querySelector(".cpuChoice");

            if (!cpuChoice.contains(document.querySelector(".computerChoice"))) {
                let cpuChoiceDiv = document.createElement('p');
                cpuChoiceDiv.className = "computerChoice";
                let cpuChoiceText = document.createTextNode(`${submitChoice}`);
                cpuChoiceDiv.appendChild(cpuChoiceText);


                cpuChoice.appendChild(cpuChoiceDiv);

            } else {
                cpuChoice.children[0].remove();

                let cpuChoiceDiv = document.createElement('p');
                cpuChoiceDiv.className = "computerChoice";
                let cpuChoiceText = document.createTextNode(`${submitChoice}`);
                cpuChoiceDiv.appendChild(cpuChoiceText);


                cpuChoice.appendChild(cpuChoiceDiv);
            }

        }

    }
    function oneGame(playerChoice) {


        let computerChoice = computerPlay();
        submit("cpu", computerChoice);

        console.log(`You picked ${playerChoice}`);
        console.log(`Computer picked ${computerChoice}`);

        if (computerChoice == playerChoice) {
            console.log(`You both picked "${computerChoice}"... Draw!`);
            return "draw";

        } else if (computerChoice === "Rock" && playerChoice === "Scissors") {
            console.log("Computer Wins");
            return "computer";
        } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
            console.log("player Wins");
            return "player";
        } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
            console.log("player Wins");
            return "player";
        } else if (computerChoice === "Scissors" && playerChoice === "Paper") {
            console.log("computer Wins");
            return "computer";
        } else if (computerChoice === "Paper" && playerChoice === "Rock") {
            console.log("computer Wins");
            return "computer";
        } else if (playerChoice === "Paper" && computerChoice === "Rock") {
            console.log("player Wins");
            return "player";
        }
    }
    //randomise computer pick
    function computerPlay() {

        function rand() {

            let decRand = (Math.random() * 10);
            if (decRand < 3.3) {
                return 0;
            } else if (decRand >= 3.3 && decRand < 6.6) {
                return 1;
            } else if (decRand >= 6.6) {
                return 2;
            }

        };

        let ranNumber = rand();
        let rock = document.getElementById("rock");
        let paper = document.getElementById("paper");
        let scissors = document.getElementById("scissors");
        if (ranNumber === 0) {
            return "Rock";
        } else if (ranNumber === 1) {
            return "Paper";
        } else if (ranNumber == 2) {
            return "Scissors";
        }


    }

    let userScore = 0;
    let computerScore = 0;







    // dom manipulation for images and submit button
    let button = document.getElementById("submit");
    let rock = document.getElementById("rock");
    let paper = document.getElementById("paper");
    let scissors = document.getElementById("scissors");


    //Event Listeners

    rock.addEventListener("click", () => {
        console.log("rock clicked");
        gameChoice("rock");
    });
    paper.addEventListener("click", () => {
        console.log("paper clicked");
        gameChoice("paper");
    });

    scissors.addEventListener("click", () => {
        console.log("scissors clicked");
        gameChoice("scissors");
    });

    button.addEventListener("click", submitButton);


    function updateScores(score1, score2) {

        let score = document.querySelector(".scores");

        if (!score.contains(document.querySelector(".newScore"))) {
            let newScoreP = document.createElement('p');

            newScoreP.className = "newScore";
            let newScoreText = document.createTextNode(`Player Score: ${score1} CPU Score: ${score2}`);
            newScoreP.appendChild(newScoreText);

            score.appendChild(newScoreP);
        } else {
            score.children[0].remove();
            let newScoreP = document.createElement('p');
            newScoreP.className = "newScore";
            let newScoreText = document.createTextNode(`Player Score: ${score1} CPU Score: ${score2}`);
            newScoreP.appendChild(newScoreText);
            score.appendChild(newScoreP);
        }
    }

    function submitButton() {

        let pick = document.querySelector(".pick");
        let playerChoice = document.querySelector(".playerChoice");



        if (!pick.contains(document.querySelector(".playerChoice"))) {
            alert("Please choose");
        } else {

            //console.log(playerChoice.innerHTML);
            console.log(document.querySelector(".playerChoice"))
            let result = oneGame(playerChoice.innerHTML);


            if (result == "draw") {
                userScore++;
                computerScore++;
            } else if (result == "computer") {
                computerScore++;
            } else if (result == "player") {
                userScore++;
            }


            updateScores(userScore, computerScore);


            if ((userScore + computerScore) >= 5) {
                console.log("Final Score : Computer Score: " + computerScore + " User Score: " + userScore);
                button.removeEventListener("click", submitButton);
            }
        }


        ;
    }











    if (computerScore > userScore) {
        console.log(`You lose by ${computerScore - userScore} points`);
    } else if (userScore > computerScore) {
        console.log(`You win by ${userScore - computerScore} points`);
    } else {
        console.log(`It's a draw.. you both sored ${userScore}`);
    }



}


game();