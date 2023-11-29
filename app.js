function getComputerChoice() {
    rpsArray = ['rock', 'paper', 'scissor'];
    let random = Math.floor(Math.random() * rpsArray.length);
    return rpsArray[random];
}
const playerSelection = 'rock';
const computerSelection = getComputerChoice();
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper'){
        return 'You Lose! Paper beats Rock';
    }
}
console.log(playRound(playerSelection, computerSelection));
