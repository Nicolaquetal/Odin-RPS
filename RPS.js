
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random()*3);
    return choices[i];
}

function getPlayerChoice(){
    const input = prompt("What's your choice?"); 
    if (input.toLowerCase()==="rock"){ return "rock"}
    else if (input.toLowerCase()==="paper") {return "paper"}
    else if (input.toLowerCase()==="scissors") {return "scissors"}  
    else { return "error"}
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

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i<5; i++){
        let temp = getPlayerChoice();
        while( temp === "error") {
            temp = getPlayerChoice();
        }
        const playerSelection = temp;
        const computerSelection = getComputerChoice();
        console.log(computerSelection)
        result = playRound(playerSelection, computerSelection)
        console.log(playRound(playerSelection, computerSelection));
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
        console.log ("player :" + playerScore)
        console.log ("computer :" + computerScore)
    
    
    }
    console.log ("player :" + playerScore)
    console.log ("computer :" + computerScore)
    if (playerScore > computerScore ){
        console.log ("You win the game")
    }
    else if (playerScore < computerScore ){
        console.log ("You loose the game")
    }
    else { console.log("That's a tie")}

}
game()


