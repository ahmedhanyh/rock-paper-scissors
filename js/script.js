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

// TODO: Create a function to simulate a single game round

// TODO: Create a function to start a game consisting of five rounds

    // TODO: Store computerPlay() result in computerSelection

    // TODO: Simulate the player's turn (by receiving user input and storing the value in playerSelection)

    // TODO: Simulate a game round

// TODO: Start the game