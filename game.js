let randomSelection = 0
const displayUser = document.getElementById('player-choice')
let playerSelection
const computerSelection = computerPlay();
const displayComputer = document.getElementById('computer-choice')
let computerPoints = 0
let playerPoints = 0

// Get a random number for computer
function computerPlay() {
    let randomSelection = Math.floor(Math.random()*3);
    if (randomSelection === 0){
        return 'rock';
    }
    else if (randomSelection === 1){
        return 'paper';
    }
    else if (randomSelection === 2){
        return 'scissors';
    }
    return console.log(randomSelection)
}

function playRound(playerSelection, computerSelection){

    if (computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'paper' && playerSelection === 'rock' || computerSelection === 'scissors' && playerSelection === 'paper'){
        computerPoints += 1;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (computerSelection === 'rock' && playerSelection === 'paper' || computerSelection === 'paper' && playerSelection === 'scissors' || computerSelection === 'scissors' && playerSelection === 'rock'){
        playerPoints += 1;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (computerSelection == playerSelection){
        return `Tie! you chose ${playerSelection} and computer also chose ${computerSelection}`;
    }
    else{
        return 'That is not a valid option, please try again.'
    }
}

function game(){
    const computerSelection = computerPlay()

    console.log(playRound(playerSelection, computerSelection));
        if (playerPoints > computerPoints){
            console.log(`WINNER WINNER! you had ${playerPoints} points and the computer had ${computerPoints} points`)
        }
        else if (playerPoints < computerPoints){
            return console.log(`Aww you lost! you had ${playerPoints} points and the computer had ${computerPoints} points`)
        }
        else{
            return console.log(`Tie you both had ${playerPoints} points`)
        }
    }

    // Listen for button click then display it
const buttons = document.querySelectorAll('button')

buttons.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerSelection = e.target.id
    displayUser.innerHTML = playerSelection
}))