function computerPlay() {
    let randomSelection = Math.floor(Math.random()*3);
    if (randomSelection === 0){
        console.log('rock');
    }
    else if (randomSelection === 1){
        console.log('paper');
    }
    else if (randomSelection === 2){
        console.log('scissors')
    }
    return console.log(randomSelection)
}
console.log(computerPlay())