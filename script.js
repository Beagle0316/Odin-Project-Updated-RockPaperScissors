// FUNCTION getComputerChoice
function getComputerChoice () {
    // DECLARE variables
    let nMax = 3;
    let nChoice;
    let sComputerChoice;
    // SEQUENCE Math.random
    nChoice = Math.floor(Math.random() * nMax);
    // IF 
    if (nChoice == 0){
        sComputerChoice = "Rock";
    }
    // ELSE IF
    else if (nChoice == 1){
        sComputerChoice = "Paper";
    }
    // ELSE
    else if (nChoice == 2){
        sComputerChoice = "Scissors";
    }
    // RETURN 
    return sComputerChoice.toUpperCase();
}

// FUNCTION getHumanChoice
function getHumanChoice(){
    // DECLARE variables
    let sChoice;

    // SEQUENCE prompt the user for their choice
    sChoice = prompt("Please write your choice (Rock, Paper, or Scissors)");

    // RETURN
    return sChoice.toUpperCase();
}

// FUNCTION playRound
function playRound(humanChoice, computerChoice){
    switch (humanChoice){
        case "ROCK":
            if (computerChoice === "ROCK"){
                console.log("Tie! Rock equals Rock");
            }
            else if (computerChoice === "PAPER"){
                console.log("You lose! Paper beats Rock");
                ncomputerScore++;
            }
            else{
                console.log("You win! Rock beats Scissors");
                nhumanScore++;
            }
            break;
        case "PAPER":
            if (computerChoice === "ROCK"){
                console.log("You win! Paper beats Rock");
                nhumanScore++;
            }
            else if (computerChoice === "PAPER"){
                console.log("Tie! Paper equals Paper");

            }
            else{
                console.log("You Lose! Scissors beats Paper");
                ncomputerScore++;
            }
            break;
        case "SCISSORS":
            if (computerChoice === "ROCK"){
                console.log("You lose! Rock beats Scissors");
                ncomputerScore++;
            }
            else if(computerChoice === "PAPER"){
                console.log("You win! Scissors beats Paper");
                nhumanScore++;
            }
            else{
                console.log("Tie! Scissors equals Scissors");
            }
            break;
        default:
            console.log("Invalid input! Point goes to computer!");
            ncomputerScore++;
    }
}

// FUNCTION playGame
function playGame(){
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    // SEQUENCE declare the winner of the game
    if (nhumanScore > ncomputerScore){
        console.log("Human Player Wins!");
    }
    else if(ncomputerScore > nhumanScore){
        console.log("Computer Player Wins!");
    }
    else{
        console.log("It is a tie! Refresh and play again!");
    }
}
// DECLARE global variables
let nhumanScore = 0;
let ncomputerScore = 0;

// SEQUENCE play the game!
console.log(playGame());
