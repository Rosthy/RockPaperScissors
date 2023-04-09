let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

const myArray = ["rock","paper","scissors"]

function computerChoice(){
    return myArray[~~(Math.random() * myArray.length)]
}

function playRound(playerSelection,computerSelection){
    computerSelection = computerChoice()
    playerSelection = prompt("Take your pick").toLowerCase()
    if (computerSelection == playerSelection){
        return "Tie round"
    }
    else if(computerSelection == "rock" && playerSelection == "scissors" ||
            computerSelection == "paper" && playerSelection == "rock" ||
            computerSelection == "scissors" && playerSelection == "paper"){
        computerScore = ++computerScore;
        return "You lose"
    }
    else {
        return "You win"
        playerScore = ++playerScore;
    }

}
console.log(playRound())
console.log(computerScore)
console.log(playerScore)
