let randomSelection = 0
const displayPlayer = document.getElementById('player-choice')
let playerSelection
let computerSelection
let result
const displayComputer = document.getElementById('computer-choice')
const displayResult = document.getElementById('result')
let computerPoints = 0
let playerPoints = 0
const displayPlayerPoints = document.getElementById('player-points')
const displayComputerPoints = document.getElementById('computer-points')


// Get a random number for computer
function computerPlay() {
    let randomSelection = Math.floor(Math.random()*3);
    if (randomSelection === 0){
        computerSelection = 'rock';
    }
    else if (randomSelection === 1){
        computerSelection = 'paper';
    }
    else if (randomSelection === 2){
        computerSelection = 'scissors';
    }
    displayComputer.innerHTML = computerSelection
}

function playRound(playerSelection, computerSelection){

    if (computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'paper' && playerSelection === 'rock' || computerSelection === 'scissors' && playerSelection === 'paper'){
        computerPoints += 1;
        result = `You Lose, ${computerSelection} beats ${playerSelection}!`;
    }
    else if (computerSelection === 'rock' && playerSelection === 'paper' || computerSelection === 'paper' && playerSelection === 'scissors' || computerSelection === 'scissors' && playerSelection === 'rock'){
        playerPoints += 1;
        result = `You Win, ${playerSelection} beats ${computerSelection}!`;
    }
    else if (computerSelection == playerSelection){
        result = `Tie, you both chose ${playerSelection}!`;
    }
    else{
        result = 'That is not a valid option, please try again.'
    }
    displayResult.innerHTML = result
    displayPlayerPoints.innerHTML = playerPoints
    displayComputerPoints.innerHTML = computerPoints
}

function game(){
    const computerSelection = computerPlay()

    console.log(playRound(playerSelection, computerSelection));
        if (playerPoints > computerPoints){
            console.log(`WINNER WINNER! You had ${playerPoints} points and the computer had ${computerPoints} points`)
        }
        else if (playerPoints < computerPoints){
            return console.log(`Aww you lost! You had ${playerPoints} points and the computer had ${computerPoints} points`)
        }
        else{
            return console.log(`Tie you both had ${playerPoints} points`)
        }
    }

    // Listen for button click then display it
const buttons = document.querySelectorAll('button')

buttons.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerSelection = e.target.id
    displayPlayer.innerHTML = playerSelection
    computerPlay()
    playRound(playerSelection, computerSelection)
}))