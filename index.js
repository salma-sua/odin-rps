function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = Math.floor(Math.random() * 3);
    return choices[computerSelection];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}`;
    }

    if (
       (playerSelection === 'rock' && computerSelection === 'scissors') ||
       (playerSelection === 'paper' && computerSelection === 'rock') ||
       (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    if (
        (playerSelection === 'scissors' && computerSelection === 'rock') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'rock' && computerSelection === 'paper')
         ) {
         return `You lose! ${computerSelection} beats ${playerSelection}`;
     }
}

const computerSelection = getComputerChoice();
console.log(playRound('rock', computerSelection));
