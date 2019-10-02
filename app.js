import compareNumbers from './compare-numbers.js';

//set all my variables
const numberButton = document.getElementById('number-button');
const triesRemaining = document.getElementById('tries-remaining');
let numberGuess = document.getElementById('number-guess');
const showGuess = document.getElementById('your-guess');
showGuess.classList.remove('hidden');
const gameOver = document.getElementById('game-over');
//const correctNumber = 15;
let tries = 4;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
};
let correctNumber = (getRandomInt(21));
console.log(correctNumber, 'correct number');


//this is my button event
numberButton.addEventListener('click', () => {

    
    const guess = parseInt(numberGuess.value, 10);
    console.log(guess);
    let meaningfulNumber = compareNumbers(guess, correctNumber);
    console.log(compareNumbers(guess, correctNumber));
    console.log(meaningfulNumber);
    
    tries = tries - 1;
    console.log(tries);
    triesRemaining.textContent = tries;

    if (tries === 0) {
        showGuess.textContent = 'You are out of tries!';
        numberButton.disabled = true;
        gameOver.classList.remove('hidden');
        gameOver.textContent = `Game over! The correct answer is ${correctNumber}.`;
    } else if (meaningfulNumber === 0) {
        showGuess.textContent = 'You guessed the right number!!';
        numberButton.disabled = true;
        gameOver.classList.remove('hidden');
    } else if (meaningfulNumber === 1) {
        showGuess.textContent = 'You guessed too high!';
    } else if (meaningfulNumber === -1) {
        showGuess.textContent = 'You guessed too low!';
    }
});  

