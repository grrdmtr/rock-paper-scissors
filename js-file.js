

function computerPlay() {
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let computerChoise = choices[Math.floor(Math.random()*3)];
    return computerChoise;
}

function playersPlay() {
    let select = prompt('Write "ROCK" "PAPER" or "SCISSORS"');
    select = select.toUpperCase();
    return select;
}

let score;

function playRound (playerSelection, computerSelection) {
    
    if (playerSelection == "ROCK" && computerSelection == "PAPER") {
         score = "lose";
         result.textContent = "You Lose! PAPER beats ROCK";
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
         score = "win";
         result.textContent = "You win!";
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
         score = "win";
         result.textContent = "You win!";
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
         score = "lose";
         result.textContent = "You Lose! ROCK beats SCISSORS";
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
         score = "lose";
         result.textContent = 'You Lose! SCISSORS beats PAPER';
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
         score = "win";
         result.textContent = "You win!";
    } else if (playerSelection == "PAPER" && computerSelection == "PAPER") {
         score = "draw";
         result.textContent = "It's a draw";
    } else if (playerSelection == "ROCK" && computerSelection == "ROCK") {
         score = "draw";
         result.textContent = "It's a draw";
    } else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
         score = "draw";
         result.textContent = "It's a draw";
    };
    getResult(); 
};
let playerScore = 0;
let computerScore = 0;
let totalScore = 0;

function getResult() {
    if (score === "win") {
        playerScore += 1;
        } else if (score === "lose") {
        computerScore += 1;
        }
        console.log(playerScore);
        console.log(computerScore);
        checkWinner();  
    } 

function checkWinner() {

    totalScore = playerScore + computerScore;    

     if (playerScore > computerScore && totalScore === 5) {
        result.textContext = "Congratulations! You won!";
        playerScore = 0;
        computerScore = 0;
     } else if (playerScore < computerScore &&  totalScore === 5) {
        result.textContent = "Bohoo! You lose!";
        playerScore = 0;
        computerScore = 0;
     } else if (playerScore == computerScore &&  totalScore === 5) {
        result.textContext = "Ha! It's a draw!";
        playerScore = 0;
        computerScore = 0;
     }
}

 const container = document.querySelector('#container');

 const result = document.createElement('div');
 result.classList.add('result');
 container.appendChild(result);