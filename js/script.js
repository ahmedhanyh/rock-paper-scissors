// Create a function that simulates the computer's turn
function computerPlay() {
    
    // Generate a random number between 0 and 3 exclusively
    let selection = Math.floor(Math.random() * 3);
    
    // Map each of 0, 1 and 2 to rock, paper and scissors
    if (selection === 0) {
        return 'rock';
    } else if (selection === 1) {
        return 'paper';
    } else if (selection === 2) {
        return 'scissors';
    }
}

// Create a function that checks if player has won
function playerWon(playerSelection, computerSelection) {
    
    // Return the result
    if (playerSelection === computerSelection) {
        return null;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return false;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return true;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return false;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return true;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return false;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return true;
    }
}

// Create a function to simulate a single game round
function playRound(e) {
    
    // Change all playerSelection letters to lower case 
    playerSelection = e.target.id;
    
    // Change all computerSelection letters to lower case
    computerSelection = computerPlay();
    
    // Return the result
    if (rounds === 5) {
        return;
    } else if (playerWon(playerSelection, computerSelection) === null) {
        roundResult.textContent = "Round Result: It's a draw";
        rounds++;
    } else if (playerWon(playerSelection, computerSelection)) {
        roundResult.textContent = `Round Result: You Win! ${playerSelection} beats ${computerSelection}`;
        playerScoreLabel.textContent = `Player Score: ${++playerScore}`;
        computerScoreLabel.textContent = `Computer Score: ${computerScore}`;
        rounds++;
    } else {
        roundResult.textContent = `Round Result: You Lose! ${computerSelection} beats ${playerSelection}`;
        playerScoreLabel.textContent = `Player Score: ${playerScore}`;
        computerScoreLabel.textContent = `Computer Score: ${++computerScore}`;
        rounds++;
    }

    if (rounds === 5) {
        if (playerScore === computerScore) {
            finalResult.textContent = "Draw!";
        } else if (playerScore > computerScore) {
            finalResult.textContent = "Winner!!!";
            finalResult.style.color = "green";
        } else {
            finalResult.textContent = "Loser!";
            finalResult.style.color = "red";
        }
        replayButton.removeAttribute("hidden");
    }
}

function replay() {
    playerScoreLabel.textContent = '';    
    computerScoreLabel.textContent = '';
    roundResult.textContent = '';
    finalResult.textContent = '';
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
    replayButton.setAttribute("hidden", "");
}

const playerScoreLabel = document.querySelector("#player-score");
const computerScoreLabel = document.querySelector("#computer-score");
const roundResult = document.querySelector("#round-result");
const finalResult = document.querySelector("#final-result");

let playerScore = 0,
computerScore = 0
rounds = 0;

const buttons = document.querySelectorAll("#btns-container .btn");
buttons.forEach(button => button.addEventListener("click", playRound));

const replayButton = document.querySelector("#replay-btn");
replayButton.addEventListener("click", replay);






