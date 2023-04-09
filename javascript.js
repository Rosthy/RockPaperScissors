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
        console.log("Tie round")
    }
    else if(computerSelection == "rock" && playerSelection == "scissors" ||
            computerSelection == "paper" && playerSelection == "rock" ||
            computerSelection == "scissors" && playerSelection == "paper"){
            computerScore = ++computerScore;
            console.log("Computer chose " + computerSelection)
            console.log("You chose " + playerSelection )
            console.log(computerSelection+" beats " + playerSelection)
            console.log("You lose this round")


        
    }
    else {
        console.log("Computer chose " + computerSelection)
        console.log("You chose " + playerSelection )
        console.log(playerSelection+" beats " + computerSelection)
        console.log("You win this round")
        playerScore = ++playerScore;
        
    }

}
function game(){
    while (true){
        playRound()
        if(playerScore == 5 || computerScore == 5){
            break
        }
    }
    if (computerScore > playerScore){
        console.log("Player Score:" + playerScore)
        console.log("Computer Score:" + computerScore)
        return "Computer wins"
    }
    else{
        console.log("Player Score:" + playerScore)
        console.log("Computer Score:" + computerScore)
        return "player wins"
    }

}
console.log(game())