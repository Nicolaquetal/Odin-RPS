
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random()*3);
    return choices[i];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return "It's a tie"
    }
    else {
        switch(playerSelection) {
            case "rock":
                return (computerSelection === "paper" ? "You Loose" : "You win");
                break;
            case "paper":
                return (computerSelection === "scissors" ? "You Loose" : "You win");
                break;
            case "scissors":
                return (computerSelection === "rock" ? "You Loose" : "You win");
                break;
        }
    }
}

function endofgame(){
    playerScore = 0;
    computerScore = 0; 
     
}

let playerScore = 0;
let computerScore = 0;

const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const roundresult = document.querySelector('.roundresult');
const playerscore = document.querySelector('.playerscore');
const computerscore= document.querySelector('.computerscore');
const gameresult= document.querySelector('.gameresult');
const btn = Array.from(document.querySelectorAll('button'));
btn.forEach(btn => btn.addEventListener('click', playGame));

function playGame(e) {
    gameresult.textContent ="Not finished yet"; 
    const playerSelection= e.target.id;
    const computerSelection = getComputerChoice();
    player.textContent = playerSelection;
    computer.textContent = computerSelection;
    result = playRound(playerSelection, computerSelection)
    roundresult.textContent = result;
    switch (result){
        case "It's a tie":
            break;
        case "You Loose":
            computerScore += 1;
            break;
        case "You win":
            playerScore +=1
            break;
    }
    playerscore.textContent = playerScore;
    computerscore.textContent = computerScore;
    

    if (playerScore === 5){
        gameresult.textContent = "You win the game";
        endofgame();
    }
    else if (computerScore ===5){
        gameresult.textContent = "You loose the game";
        endofgame();
    }
    
} 








