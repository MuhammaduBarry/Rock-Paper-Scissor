const rock = document.querySelector("#r");
const paper = document.querySelector("#p");
const scissor = document.querySelector("#s");

// we need to create an array of rps, so that the computer can choose random

let rpsArray = [rock, paper, scissor];

let getComputerChoice = () => {
    let random = Math.floor(Math.random() * rpsArray.length);
    return rpsArray[random];
}

onload = () => console.log(getComputerChoice());