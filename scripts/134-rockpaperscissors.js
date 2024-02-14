let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,                  
  ties: 0
}

updateScoreElement();

let isAutoPlaying = false;
console.log(isAutoPlaying);
let intervalId;

function autoPlay() {
  if(!isAutoPlaying) {
    intervalId = setInterval(function() {   // This is how we stop an interval, saving it in an id, then clearInterval with the id.
      const playerMove = pickComputerMove();
      showResult(playerMove);
    }, 1000)
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  }
  else if (randomNumber >= 1 /3 && randomNumber <= 2/3) {
    computerMove = 'paper';
  }
  else if (randomNumber >= 2 /3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove
}

function showResult(playermove) {
  const computerMove = pickComputerMove();
  let result = '';

  if(playermove === 'rock') {
    if(computerMove === 'rock') {
    result = 'Tie!';
    }

    else if(computerMove === 'paper') {
      result = 'You lose!';
    }

    else if(computerMove === 'scissors') {
      result = 'You win!';
    }
  }

  else if(playermove === 'scissors') {
    if(computerMove === 'rock') {
    result = 'You lose!';
    }

    else if(computerMove === 'paper') {
      result = 'You win!';
    }

    else if(computerMove === 'scissors') {
      result = 'Tie!';
    }
  }

  else if(playermove === 'paper') {
    if(computerMove === 'rock') {
    result = 'You win!';
    }

    else if(computerMove === 'paper') {
      result = 'Tie!';
    }

    else if(computerMove === 'scissors') {
      result = 'You lose!';
    }
  }

  if(result === "You win!") {
      score.wins += 1;
    } else if (result === "You lose!") {
      score.losses +=1;
    } else if (result === "Tie!") {
      score.ties += 1;
    }

    document.querySelector('.js-result').innerHTML = `${result}`;

    updateScoreElement();

    document.querySelector('.js-moves').innerHTML = `You
<img class="move-icon" src="js-images/${playermove}-emoji.png">
<img class="move-icon" src="js-images/${computerMove}-emoji.png">
Computer`;

    localStorage.setItem('score', JSON.stringify(score)); // this is the method to save things to local storage. The first arg is a key, second arg is a value.




}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}


