function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * choices.length)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerPlay();

  while (playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors") {
      alert('You can only enter : "rock", "paper", or "scissors" !');
      playerSelection = prompt("Enter 'rock', 'paper', or 'scissors':").toLowerCase();
  }

  if (playerSelection === computerSelection) {
    return `It's a tie! You both chose ${playerSelection} ! `;
  }
  else if (playerSelection === "rock" && computerSelection === "scissors" ||
             playerSelection === "paper" && computerSelection === "rock" ||
             playerSelection === "scissors" && computerSelection === "paper") {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  }
  else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function playAgain(){
  let wannaPlay = prompt('Wanna play again ? \nType "yes" or "no"').toLowerCase();
    if (wannaPlay === "yes"){
      game();
    }
    else if (wannaPlay ==="no"){
      alert("Goodbye ! See you soon !");
    }
    else{
      alert('You must only enter "yes" or "no".');
      playAgain();
    }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let computerSelection = computerPlay();

   for (let i = 0; i < 5; i++) {
    let result = playRound(prompt("What will you choose?:\n- rock\n- paper\n- scissors"), computerSelection);
    console.log(result);

    if (result.includes("Win")) {
      playerScore ++;
    }else if(result.includes("Lose")){
      computerScore ++;
    }
  }

  if (playerScore > computerScore) {
    console.log(`You win the game! Your score is ${playerScore} while Computer score is ${computerScore}`);
    alert(`You win the game! You won ${playerScore} rounds and computer won ${computerScore} round(s) !`);

  }else if(playerScore == computerScore){
    console.log(`It is a drawn: Your score is ${playerScore} and Computer score is also ${computerScore}`);

  }else{
    console.log(`You lost the game! Your score is ${playerScore} while Computer score is ${computerScore}`);
    alert(`You lost the game! You lost ${playerScore} rounds and computer won ${computerScore} !`);
  }
  playAgain();
}


let nickname = prompt("Welcome! What is your name?");
if (nickname.trim() === "") {
  alert("Oops! Your name can't be blank! Please enter your name again.");
  nickname = prompt("Welcome! What is your name?");
} else {
  alert(`Hi ${nickname}! Let's play!`);
}
game();
