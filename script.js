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
/*
function getHumanChoice(){
    // DECLARE variables
    let sChoice;
    const button = document.querySelectorAll("button");

    button.forEach((button) =>{
        button.addEventListener('click', () =>{
            alert("button clicked");
            sChoice = button.className;
        })
    });

    // RETURN
    return sChoice;
}
*/

// FUNCTION playRound
function playRound(humanChoice, computerChoice){
    switch (humanChoice){
        case "ROCK":
            if (computerChoice === "ROCK"){
                alert("Tie! Rock equals Rock");
            }
            else if (computerChoice === "PAPER"){
                alert("You lose! Paper beats Rock");
                ncomputerScore++;
            }
            else{
                alert("You win! Rock beats Scissors");
                nhumanScore++;
            }
            break;
        case "PAPER":
            if (computerChoice === "ROCK"){
                alert("You win! Paper beats Rock");
                nhumanScore++;
            }
            else if (computerChoice === "PAPER"){
                alert("Tie! Paper equals Paper");

            }
            else{
                alert("You Lose! Scissors beats Paper");
                ncomputerScore++;
            }
            break;
        case "SCISSORS":
            if (computerChoice === "ROCK"){
                alert("You lose! Rock beats Scissors");
                ncomputerScore++;
            }
            else if(computerChoice === "PAPER"){
                alert("You win! Scissors beats Paper");
                nhumanScore++;
            }
            else{
                alert("Tie! Scissors equals Scissors");
            }
            break;
        default:
            alert("Invalid input! Point goes to computer!");
            ncomputerScore++;
    }
}

// FUNCTION playGame
function playGame(){
    const buttons = document.querySelectorAll("button");
    
    buttons.forEach((button) => {
        button.addEventListener("click", () =>{
            playRound(button.className, getComputerChoice());
        });
    });
    


    /*
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
    */
}
// DECLARE global variables
let nhumanScore = 0;
let ncomputerScore = 0;

// SEQUENCE play the game!
playGame();

