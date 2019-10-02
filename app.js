import compareNumbers from './compare-numbers.js';

const numberButton = document.getElementById('number-button');
let numberGuess = document.getElementById('number-guess');


const correctNumber = 15;


numberButton.addEventListener('click', () => {
    const guess = parseInt(numberGuess.value, 10);
    console.log(guess);
    console.log(compareNumbers(guess, correctNumber));


    
    

    // const allowedGuesses = 4;
    // allowedGuesses.onclick 
});

