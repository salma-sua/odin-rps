humanScore = 0;
computerScore = 0;
roundWinner = '';


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
console.log(getComputerChoice());

function getHumanChoice() {
    prompt('Enter your choice: rock, paper, or scissors').toLowerCase();
}
console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `It\'s a tie! You both chose ${humanChoice}.`;
    }
    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') 
    ) {
        humanScore++;
        return `You win this round! ${humanChoice} beats ${computerChoice}.`;
    }
    if (
        (humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'rock') 
    ) {
        computerScore++;
        return `You lose this round! ${computerChoice} beats ${humanChoice}.`;
    }
}
playRound(getHumanChoice(), getComputerChoice());

function gameOver() {
    if (humanScore === 5) {
        return 'You win the game!';
    }
    if (computerScore === 5) {
        return 'You lost!';
    }
}