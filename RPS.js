const choices = ["rock", "paper", "scissors"];
const numbersCard = document.getElementById("numbersCard");
const winStatus = document.getElementById("winStatus");
let pScore = 0;
let cScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "Mind Games!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "You Win!" : "You Lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
                break;
    }
    }
    
    winStatus.textContent = result;

   
    switch(result){
        case "Mind Games" : 
            pScoreDisp.textContent = pScore;
            cScoreDisp.textContent = cScore;
            break;
        case "You Win!":
            pScore++;
            pScoreDisp.textContent = pScore;
            break;
        case "You Lose!":
            cScore++;
            cScoreDisp.textContent = cScore;
            break;
        }
    }
