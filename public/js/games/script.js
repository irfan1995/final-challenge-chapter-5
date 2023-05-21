const playerRock = document.getElementById("player-rock");
const playerPaper = document.getElementById("player-paper");
const playerScissors = document.getElementById("player-scissors");
const computerRock = document.getElementById("computer-rock");
const computerPaper = document.getElementById("computer-paper");
const computerScissors = document.getElementById("computer-scissors");
const resultBox = document.getElementById("result-box");
const resultText = document.getElementById("result-text");
const colorChoice = "#C4C4C4";
const borderRadius = "20px";

function choiceComputer() {

    const choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
      computerRock.style.backgroundColor = colorChoice;
      computerRock.style.borderRadius = borderRadius;
      return "rock";
    } else if (choice === 1) {
     computerPaper.style.backgroundColor = colorChoice;
     computerPaper.style.borderRadius = borderRadius;
      return "paper";
    } else {
     computerScissors.style.backgroundColor = colorChoice;
     computerScissors.style.borderRadius = borderRadius;
      return "scissors";
    }

}

function rockpaperScissors(choicePlayer, choiceCom) {

    if (choicePlayer === choiceCom) {
      return "draw";
    }
  
    if (choicePlayer === "rock") {
      if (choiceCom === "paper") {
        return "computer";
      } else {
        return "player";
      }
    } else if (choicePlayer === "paper") {
      if (choiceCom === "scissors") {
        return "computer";
      } else {
        return "player";
      }
    } else {
      if (choiceCom === "rock") {
        return "computer";
      } else {
        return "player";
      }
    }

}

function choiceRock() {
    
    playerRock.style.backgroundColor = colorChoice;
    playerRock.style.borderRadius = borderRadius;
    
    let player = "rock";
    // console.log("Choice Player = " + player);
    
    computer = choiceComputer();
    // console.log("Choice Computer = " + computer);
    
    resultRock = rockpaperScissors(player, computer);
    
    showResult(resultRock);
    stopChoice();

}
  
function choicePaper() {

    playerPaper.style.backgroundColor = colorChoice;
    playerPaper.style.borderRadius = borderRadius;

    let player = "paper";
    // console.log("Choice Player = " + player);
    
    computer = choiceComputer();
    // console.log("Choice Computer = " + computer);
    
    resultPaper = rockpaperScissors(player, computer);
    
    showResult(resultPaper);
    stopChoice();

}
  
function choiceScissors() {
    
    playerScissors.style.backgroundColor = colorChoice;
    playerScissors.style.borderRadius = borderRadius;
    
    let player = "scissors";
    // console.log("Choice Player = " + player);
    
    computer = choiceComputer();
    // console.log("Choice Computer = " + computer);
    
    resultScissors = rockpaperScissors(player, computer);
    
    showResult(resultScissors);
    stopChoice();

}

function showResult(result) {

    resultBox.style.removeProperty("visibility");
    if (result === "draw") {
        resultText.innerText = "DRAW";
    } else if (result === "computer") {
        resultText.innerText = "COMPUTER\nWIN";
    } else {
      resultText.innerText = "PLAYER\nWIN";
    }

}

function stopChoice(){

    playerRock.style.pointerEvents = "none"
    playerPaper.style.pointerEvents = "none"
    playerScissors.style.pointerEvents = "none"

}

function refresh() {

    playerRock.style.pointerEvents = "auto";
    playerPaper.style.pointerEvents = "auto";
    playerScissors.style.pointerEvents = "auto";
    resultBox.style.visibility = "hidden";
    playerRock.style.removeProperty("background-color");
    playerPaper.style.removeProperty("background-color");
    playerScissors.style.removeProperty("background-color");
    computerRock.style.removeProperty("background-color");
    computerPaper.style.removeProperty("background-color");
    computerScissors.style.removeProperty("background-color");
    
}



