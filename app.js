import compareNumbers from './compare-numbers.js';

//set all my variables
const numberButton = document.getElementById('number-button');
const triesRemaining = document.getElementById('tries-remaining');
let numberGuess = document.getElementById('number-guess');
const showGuess = document.getElementById('your-guess');
showGuess.classList.remove('hidden');
const gameOver = document.getElementById('game-over');
let tries = 4;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let correctNumber = (getRandomInt(21));


//this is my button event
numberButton.addEventListener('click', () => {

    
    const guess = parseInt(numberGuess.value, 10);
    let meaningfulNumber = compareNumbers(guess, correctNumber);

    tries = tries - 1;
    triesRemaining.textContent = tries;

    if (tries < 1) {
        showGuess.textContent = 'You are out of tries!';
        numberButton.disabled = true;
        gameOver.classList.remove('hidden');
        gameOver.textContent = `Game over! The correct answer is ${correctNumber}.`;
    } else if (meaningfulNumber === 0) {
        showGuess.textContent = 'Nice work! You guessed the right number!!';
        numberButton.disabled = true;
        gameOver.classList.remove('hidden');
    } else if (meaningfulNumber === 1) {
        showGuess.textContent = 'You guessed too high!';
    } else if (meaningfulNumber === -1) {
        showGuess.textContent = 'You guessed too low!';
    } else if (meaningfulNumber === 'invalid') {
        showGuess.textContent = 'That is not a number between 1 and 20';
    }
    

    

});  

