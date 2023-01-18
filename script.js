let plaScor=0,compScor=0;
function getComputerChoice(){
    const text = ["Rock","Paper","Scissors"];
    const value = Math.round(Math.random()*2);
    return (text[value]);
}
function reset(){
    let button = document.querySelectorAll(".button");
    let plaS = document.querySelector("#playerScore");
    let compS = document.querySelector("#computerScore");
    let res = document.querySelector(".result");
    plaScor=0;
    compScor=0;
    button.forEach(e => e.disabled=false);
    button.forEach(e => e.style.backgroundColor="#881E27");
    plaS.textContent=plaScor;
    compS.textContent=compScor;
    res.textContent="Play!";
}
function playRound(playerSelection,computerSelection){
    let player=playerSelection.toLowerCase();
    let computer=computerSelection.toLowerCase();
    let pla = document.querySelector("#playerChoice");
    let comp = document.querySelector("#computerChoice");
    let plaS = document.querySelector("#playerScore");
    let res = document.querySelector(".result");
    let compS = document.querySelector("#computerScore");
    let choices = document.querySelector(".choices");
    let button = document.querySelectorAll(".button");
    pla.textContent=player.charAt(0).toUpperCase()+player.substring(1);
    comp.textContent=computer.charAt(0).toUpperCase()+computer.substring(1);
    console.log(player+" "+computer);

    choices.style.backgroundColor="#3E0E14";
    if (player==computer){
        console.log("Tie");
        choices.style.backgroundColor="#B39856";
        res.textContent="Tie!";
    }
    if (player=="rock" && computer=="paper"){
        console.log("player wins");
        plaScor++;
        res.textContent="Player wins!";
    }
    if (player=="rock" && computer=="scissors"){
        console.log("computer wins");
        compScor++;
        res.textContent="Computer wins!";
    }
    if (player=="paper" && computer=="rock"){
        console.log("player wins");
        plaScor++;
        res.textContent="Player wins!";
    }
    if (player=="paper" && computer=="scissors"){
        console.log("computer wins");
        compScor++;
        res.textContent="Computer wins!";
    }
    if (player=="scissors" && computer=="rock"){
        console.log("computer wins");
        compScor++;
        res.textContent="Computer wins!";
    }
    if (player=="scissors" && computer=="paper"){
        console.log("player wins");
        plaScor++;
        res.textContent="Player wins!";
    }
    plaS.textContent=plaScor;
    compS.textContent=compScor;
    if (plaScor+compScor>=5){
        if (plaScor==compScor){
            res.textContent="Game ended! Tie!"
        }
        if (plaScor>compScor){
            res.textContent="Game ended! Player wins!"
        }
        if (plaScor<compScor){
            res.textContent="Game ended! Computer wins!"
        }
        button.forEach(e => e.disabled=true);
        button.forEach(e => e.style.backgroundColor="#3E0E14");
    }
}
function game(){
    let counter=0;
    for (let i=0;i<5;i++){
        const playerSelection = "rock" //prompt("enter 'rock' or 'paper' or 'scissors'");
        const computerSelection = getComputerChoice();
        counter+=playRound(playerSelection, computerSelection);
    }
    console.log(counter);

}

// console.log();