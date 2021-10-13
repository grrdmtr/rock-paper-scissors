

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

function playRound (playerSelection, computerSelection) {

    let score;

     if (playerSelection == "ROCK" && computerSelection == "PAPER") {
         score = "lose";
         console.log("You Lose! PAPER beats ROCK");
         return score;
     } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
         score = "win";
         console.log("You win!");
         return score;
     } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
         score = "win";
         console.log("You win!");
         return score;
     } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
         score = "lose";
         console.log("You Lose! ROCK beats SCISSORS");
         return score;
     } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
         score = "lose";
         console.log('You Lose! SCISSORS beats PAPER');
         return score;
     } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
         score = "win";
         console.log("You win!");
         return score;
     } else if (playerSelection == "PAPER" && computerSelection == "PAPER") {
         score = "draw";
         console.log("It's a draw");
         return score;
     } else if (playerSelection == "ROCK" && computerSelection == "ROCK") {
         score = "draw";
         console.log("It's a draw");
         return score;
     } else if (playerSelection == "SCISSORS" && computerSelection == "SCISSORS") {
         score = "draw";
         console.log("It's a draw")
         return score;
     } 
 }

function game() {
     let playerScore = 0;
     let computerScore = 0;
     let finalScore;
     // check prefix and postfix incrementation ++i, i++;
     for (i=0; i <= 5; i++) {
         console.log(playRound(playersPlay(), computerPlay())); 
         if (score === "win") {
             playerScore += 1;
             finalScore =  `The score is ${playerScore} - ${computerScore}`;
             console.log(playerScore);
             console.log(computerScore);
             console.log(finalScore);
         } else if (score === "lose") {
             computerScore += 1;
             finalScore =  `The score is ${playerScore} - ${computerScore}`;
             console.log(playerScore);
             console.log(computerScore);
             console.log(finalScore);
         } else if (score === "draw") {
             finalScore =  `The score is ${playerScore} - ${computerScore}`;
             console.log(playerScore);
             console.log(computerScore);
             console.log(finalScore);
         } else if(score === undefined) {
             playRound(playersPlay(), computerPlay());
             console.log(playerScore);
             console.log(computerScore);
             console.log(finalScore);
         }
     }
     if (playerScore > computerScore) {
         console.log(`${finalScore}. You won!`);
     } else if (playerScore <computerScore) {
         console.log(`${finalScore}. You lose!`)
     } else {
         console.log(`${finalScore}. It's a draw!`)
     }
 }

 window.addEventListener('click', playRound);