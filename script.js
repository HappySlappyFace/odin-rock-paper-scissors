let plaScor=0,compScor=0;
function getComputerChoice(){
    const text = ["Rock","Paper","Scissors"];
    const value = Math.round(Math.random()*2);
    return (text[value]);
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