

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
         result.textContent = "You Lose! paper beats rock";
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
         score = "win";
         result.textContent = "You win!";
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
         score = "win";
         result.textContent = "You win!";
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
         score = "lose";
         result.textContent = "You Lose! rock beats scissors";
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
         score = "lose";
         result.textContent = 'You Lose! scissors beats paper';
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
        scoreContainer.textContent = `The score is ${playerScore} - ${computerScore}`; 
        result.textContext = "Congratulations! You won!";
        playerScore = 0;
        computerScore = 0;
     } else if (playerScore < computerScore &&  totalScore === 5) {
        scoreContainer.textContent = `The score is ${playerScore} - ${computerScore}`; 
        result.textContent = "Bohoo! You lost!";
        playerScore = 0;
        computerScore = 0;
     } else if (playerScore == computerScore &&  totalScore === 5) {
        scoreContainer.textContent = `The score is ${playerScore} - ${computerScore}`; 
        result.textContext = "Ha! It's a draw!";
        playerScore = 0;
        computerScore = 0;
     } else {
         scoreContainer.textContent = `The score is ${playerScore} - ${computerScore}`;
     }
}

 const gameContainer = document.querySelector('#game')

 const results = document.createElement('div');
 results.classList.add('results');
 gameContainer.appendChild(results);

 const title = document.createElement('div');
 title.textContent = "SCORE BOARD";
 results.appendChild(title);

 const result = document.createElement('div');

 result.classList.add('result');
 results.appendChild(result);

 const scoreContainer = document.createElement('div');

 scoreContainer.classList.add('scoreContainer');
 results.appendChild(scoreContainer);
