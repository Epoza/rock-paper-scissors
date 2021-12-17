let randomSelection = 0

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

const playerSelection = 'rock';
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection){

    if (computerSelection === 'rock' && playerSelection === 'scissors' || computerSelection === 'paper' && playerSelection === 'rock' || computerSelection === 'scissors' && playerSelection === 'paper'){
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else if (computerSelection === 'rock' && playerSelection === 'paper' || computerSelection === 'paper' && playerSelection === 'scissors' || computerSelection === 'scissors' && playerSelection === 'rock'){
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
    for (i=0;i<=5;i++){
        let playerSelection = prompt('Write rock, paper, or scissors: ').toLowerCase();
        const computerSelection = computerPlay()
        console.log('Round: '+i)
        console.log(playRound(playerSelection, computerSelection));
    }
}
console.log(game());
