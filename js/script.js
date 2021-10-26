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
        return 0;
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
function playRound(playerSelection, computerSelection) {

    // Change all playerSelection letters to lower case 
    playerSelection = playerSelection.toLowerCase();

    // Change all computerSelection letters to lower case
    computerSelection = computerSelection.toLowerCase();

    // Return the result
    if (playerWon(playerSelection, computerSelection) === 0) {
        return "It's a draw";
    } else if (playerWon(playerSelection, computerSelection)) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// Create a function to start a game consisting of five rounds
function game() {

    // Store computerPlay() result in computerSelection
    let computerSelection = computerPlay();
    
    // Simulate the player's turn (by receiving user input and storing the value in playerSelection)
    let playerSelection = prompt("Your turn! Choose Rock, Paper or Scissors");
    
    // Simulate a game round
    console.log(playRound(playerSelection, computerSelection));

    // Repeat the steps above 4 more times
    computerSelection = computerPlay();
    playerSelection = prompt("Your turn! Choose Rock, Paper or Scissors");
    console.log(playRound(playerSelection, computerSelection));

    computerSelection = computerPlay();
    playerSelection = prompt("Your turn! Choose Rock, Paper or Scissors");
    console.log(playRound(playerSelection, computerSelection));

    computerSelection = computerPlay();
    playerSelection = prompt("Your turn! Choose Rock, Paper or Scissors");
    console.log(playRound(playerSelection, computerSelection));

    computerSelection = computerPlay();
    playerSelection = prompt("Your turn! Choose Rock, Paper or Scissors");
    console.log(playRound(playerSelection, computerSelection));
}
    
// TODO: Start the game