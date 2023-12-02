npcArray = ['rock', 'paper', 'scissor'];
let playerScore = 0;
let computerScore = 0;

// let questionPrompt = prompt("rock, paper or scissor?").toLowerCase();

function playerChoice(choice) {
    if (choice === npcArray[0]) {
        return 'rock';
    } else if (choice === npcArray[1]) {
        return 'paper';
    } else if (choice === npcArray[2]) {
        return 'scissor';
    }
}




function getComputerChoice() {
    let random = Math.floor(Math.random() * npcArray.length);
    return npcArray[random];
}

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')
    ) {
        playerScore++;
        return 'You win!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'scissor' && computerSelection === 'rock') ||
        (playerSelection === 'paper' && computerSelection === 'scissor')
    ) {
        computerScore++;
        return 'You lose!';
    } else if (playerSelection === computerSelection) {
        return "It's a draw";
    } else {
        return 'Something went wrong';
    }
}



// we need to create a function game that returns 5 different results 
function trackScore() {
    console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
}

for (let i = 1; i <= 5; i++) {
    const questionPrompt = prompt("ROCK, PAPER, OR SCISSOR?").toLowerCase();
    const playerSelection = playerChoice(questionPrompt);

    if (playerSelection !== null) {
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        trackScore();
    }
}
