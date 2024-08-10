// app.js
 
// Complete logic of game inside this function
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;
 
 

    // Function to 
    const playGame = () => {
        const sassoBtn = document.querySelector('.sasso');
        const cartaBtn = document.querySelector('.carta');
        const forbiciBtn = document.querySelector('.forbici');
        const playerOptions = [sassoBtn, cartaBtn, forbiciBtn];
        const computerOptions = ['sasso', 'carta', 'forbici']
 
        // Function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click', function () {
 
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Scelta nr.: ${moves}`;
                
                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];
                const result = document.querySelector('.pcchoice')
                result.textContent = (computerChoice)
                
                // Function to check who wins
                winner(this.innerText, computerChoice)
 
                // Calling gameOver function  first 5 scores
                if (playerScore == 5 || computerScore==5) {
                    gameOver(playerOptions, movesLeft);
                }
            })
        })
       
    }
 
    // Function to decide winner
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if (player === computer) {
            result.textContent = 'Round pareggiato'
        }
        else if (player == 'sasso') {
            if (computer == 'carta') {
                result.textContent = "Il computer Vince !";
                computerScore++;
                computerScoreBoard.textContent = computerScore;
 
            } else {
                result.textContent = "L'umano Vince !";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'forbici') {
            if (computer == 'sasso') {
                result.textContent = "Il computer Vince !";
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = "L'umano Vince !";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if (player == 'carta') {
            if (computer == 'forbici') {
                result.textContent = "Il computer Vince !";
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = "L'umano Vince !";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
 
    // Function to run when game is over
    const gameOver = (playerOptions, movesLeft) => {
 
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
 
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
 
        chooseMove.innerText = 'Partita conclusa!!'
        movesLeft.style.display = 'none';
 
        if (playerScore > computerScore) {
            result.style.fontSize = '1rem';
            result.innerText = 'Hai VINTO la partita !!'
            result.style.color = 'blue';
        }
        else if (playerScore < computerScore) {
            result.style.fontSize = '1rem';
            result.innerText = 'Hai PERSO la partita !!';
            result.style.color = 'red';
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'white'
        }
        reloadBtn.innerText = 'Gioca ancora';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }
 
 
    // Calling playGame function inside game
    playGame();
 
}
 
// Calling the game function
game();