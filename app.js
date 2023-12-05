const rock = document.querySelector("#r");
const paper = document.querySelector("#p");
const scissor = document.querySelector("#s");
const scoreBoard = document.querySelector("#scoreboard");
const currentScore = document.querySelector("#currentscore");
const win = document.querySelector("#win");
const restartBtn = document.createElement("button");


// we need to create an array of rps, so that the computer can choose random

let rpsArray = [rock, paper, scissor];

let computerSelection = () => {
    let random = Math.floor(Math.random() * rpsArray.length);
    return rpsArray[random];
}


// we need to create a player event that lets us play our move
let playerSelection = (choice) => {
    if (choice === rpsArray[0]) {
        return rock;
    } else if (choice === rpsArray[1]) {
        return paper;
    } else if (choice === rpsArray[2]) {
        return scissor;
    }
}

let playerScore = 0
let computerScore = 0


// now here comes the fun part we need to create a condition statement and nest it inside our function
// so that our we can actually play the game
// for this i will be using a switch statement

let playRound = (computerSelection, playerSelection) => {
    switch (true) {
        case computerSelection === rock && playerSelection === scissor:
        case computerSelection === paper && playerSelection === rock:
        case computerSelection === scissor && playerSelection === paper:
            computerScore += 1
            currentScore.textContent = "computer scored!!";
            break;
        case computerSelection === rock && playerSelection === paper:
        case computerSelection === paper && playerSelection === scissor:
        case computerSelection === scissor && playerSelection === rock:
            playerScore += 1
            currentScore.textContent = "player scored!!";
            break;
        case computerSelection === rock && playerSelection === rock:
        case computerSelection === paper && playerSelection === paper:
        case computerSelection === scissor && playerSelection === scissor:
            currentScore.textContent = "it's a draw!!";
            break;
        default:
            console.log("IM SORRY SOMETHING WENT WRONG :(");
    }
}

// we need to create a button that restarts everything through a page refresh

let button = () => {
    const restartBtnText = document.createTextNode("Game Over: Play Again");
    restartBtn.appendChild(restartBtnText);
    restartBtn.classList.add("restart-btn");
    win.appendChild(restartBtn);
}
restartBtn.addEventListener("click", () => {
    return location.reload();
})
// we created a function that tracked our play

let score = () => {
    let player = document.querySelector("#player");
    player.innerText = "Player Score:" + " " + playerScore;
    let computer = document.querySelector("#computer");
    computer.innerText = "computer Score:" + " " + computerScore;
    if (computerScore >= 5) {
        let h3First = document.createElement("h3")
        h3First.innerText = "Computer Won!!!";
        win.appendChild(h3First);
        removeClick();
        currentScore.textContent = "";
        button();
    } else if (playerScore >= 5) {
        let win = document.querySelector("#win");
        let h3Second = document.createElement("h3")
        h3Second.innerText = "player Won!!!";
        win.appendChild(h3Second);
        removeClick();
        currentScore.textContent = "";
        button();
    }
}

// this is were we will put our event listeners
rockClick = () => {
    return score(playRound(computerSelection(), playerSelection(rock)));
}
paperClick = () => {
    return score(playRound(computerSelection(), playerSelection(paper)));
}
scissorClick = () => {
    return score(playRound(computerSelection(), playerSelection(scissor)));
}

rock.addEventListener("click", rockClick);
paper.addEventListener("click", paperClick);
scissor.addEventListener("click", scissorClick);

const removeClick = () => {
    rock.removeEventListener("click", rockClick);
    paper.removeEventListener("click", paperClick);
    scissor.removeEventListener("click", scissorClick)
}