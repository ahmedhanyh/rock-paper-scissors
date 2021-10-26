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

// Create a function to simulate a single game round
function playRound(playerSelection, computerSelection) {

    // Change all playerSelection letters to lower case 
    playerSelection = playerSelection.toLowerCase();

    // Change all computerSelection letters to lower case
    computerSelection = computerSelection.toLowerCase();

    // Return the result
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You Lose! Scissors beats Paper'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You Lose! Rock beats Scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beats Paper'
    }
}

// Create a function to start a game consisting of five rounds
function game() {

    // Store computerPlay() result in computerSelection
    let computerSelection = computerPlay();
    
    // Simulate the player's turn (by receiving user input and storing the value in playerSelection)
    let playerSelection = prompt("Your turn! Choose Rock, Paper or Scissors");
    
    // Simulate a game round
    playRound(playerSelection, computerSelection);

    // Store computerPlay() result in computerSelection
    let computerSelection = computerPlay();
    
    // Simulate the player's turn (by receiving user input and storing the value in playerSelection)
    let playerSelection = prompt("Your turn! Choose Rock, Paper or Scissors");
    
    // Simulate a game round
    playRound(playerSelection, computerSelection);

    // Store computerPlay() result in computerSelection
    let computerSelection = computerPlay();
    
    // Simulate the player's turn (by receiving user input and storing the value in playerSelection)
    let playerSelection = prompt("Your turn! Choose Rock, Paper or Scissors");
    
    // Simulate a game round
    playRound(playerSelection, computerSelection);

    // Store computerPlay() result in computerSelection
    let computerSelection = computerPlay();
    
    // Simulate the player's turn (by receiving user input and storing the value in playerSelection)
    let playerSelection = prompt("Your turn! Choose Rock, Paper or Scissors");
    
    // Simulate a game round
    playRound(playerSelection, computerSelection);

    // Store computerPlay() result in computerSelection
    let computerSelection = computerPlay();
    
    // Simulate the player's turn (by receiving user input and storing the value in playerSelection)
    let playerSelection = prompt("Your turn! Choose Rock, Paper or Scissors");
    
    // Simulate a game round
    playRound(playerSelection, computerSelection);
}
    
// TODO: Start the game