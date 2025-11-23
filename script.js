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
    const container = document.querySelector(".textContainer");
    const text = document.createElement("p");
    switch (humanChoice){
        case "ROCK":
            if (computerChoice === "ROCK"){
                text.textContent = "Tie! Rock equals Rock";
            }
            else if (computerChoice === "PAPER"){
                text.textContent = "You lose! Paper beats Rock";
                ncomputerScore++;
            }
            else{
                text.textContent = "You win! Rock beats Scissors";
                nhumanScore++;
            }
            break;
        case "PAPER":
            if (computerChoice === "ROCK"){
                text.textContent = "You win! Paper beats Rock";
                nhumanScore++;
            }
            else if (computerChoice === "PAPER"){
                text.textContent = "Tie! Paper equals Paper";

            }
            else{
                text.textContent = "You Lose! Scissors beats Paper";
                ncomputerScore++;
            }
            break;
        case "SCISSORS":
            if (computerChoice === "ROCK"){
                text.textContent = "You lose! Rock beats Scissors";
                ncomputerScore++;
            }
            else if(computerChoice === "PAPER"){
                text.textContent = "You win! Scissors beats Paper";
                nhumanScore++;
            }
            else{
                text.textContent = "Tie! Scissors equals Scissors";
            }
            break;
        default:
            text.textContent = "Invalid input! Point goes to computer!";
            ncomputerScore++;
    }
    container.appendChild(text);
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

