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

    if (ranNumber === 0) {
        return "Rock";
    } else if (ranNumber === 1) {
        return "Paper";
    } else if (ranNumber == 2) {
        return "Scissors";
    }


}

console.log(computerPlay());

function userPlay(choice) {


    if (choice.toLowerCase() === "rock") {
        return "Rock";
    } else if (choice.toLowerCase() === "paper") {
        return "Paper";
    } else if (choice.toLowerCase() === "scissors") {
        return "Scissors";
    }
}



/*
Rock beats scissors
scissors beat paper
paper beats rock
*/


function game(computerChoice, playerChoice) {

    console.log("Loading game....")

    console.log(`You picked ${playerChoice}`);
    console.log(`Computer picked ${computerChoice}`);


    if (computerChoice == playerChoice) {
        console.log(`You both picked "${computerChoice}"... Draw!`);
        return "Draw";
    } else if (computerChoice === "Rock" && playerChoice === "Scissors") {
        console.log("Computer Wins");
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        console.log("player Wins");
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        console.log("player Wins");
    } else if (computerChoice === "Scissors" && playerChoice === "Paper") {
        console.log("computer Wins");
    } else if (computerChoice === "Rock" && playerChoice === "Paper") {
        console.log("computer Wins");
    } else if (computerChoice === "Paper" && playerChoice === "Rock") {
        console.log("player Wins");
    }


}


game(computerPlay(), computerPlay());

