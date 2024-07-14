// create computer choice
function computerchoice(){
    const choice = ["snake", "water", "gun"];
    const random = Math.floor(Math.random()* choice.length);
    return choice[random];
}

// determine the winner
function determineWinner(playerchoice, computerchoice){
    if(playerchoice === computerchoice)return "its a tie";
    if(
        (playerchoice==="snake" && computerchoice === "water")||
        (playerchoice === "water" && computerchoice === "gun") ||
        (playerchoice === "gun" && computerchoice === "snake")
    ){
        return "congrats you win";
    }
    return "You lose computer wins";

}
// play the single round
function playsingle(){
    let playerchoice = prompt("enter snake, water and gun").toLowerCase();
    if(!["snake","water","gun"].includes(playerchoice)){
        alert("please enter the valid choice");
    }
    const computer = computerchoice();
    const result = determineWinner(playerchoice, computer);
    return result;
}
// play the game
function playgame(){
    let playerscore = 0;
    let computerscore = 0;
    while(true){
        const roundresult = playsingle();
        if(roundresult === "congrats you win")playerscore++;
        if(roundresult === "You lose computer wins")computerscore++;
        alert(`Current score:\nYou: ${playerscore}\n Computer:${computerscore}`);
        if(!confirm("Do you want to play another round"))break;
    }
    alert(`Final score:\n you: ${playerscore}\nComputerscore: ${computerscore}\n Thanks for playing game`);
}

playgame();