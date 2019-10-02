const compareNumbers = (guess, correctNumber) => {
    const showGuess = document.getElementById('your-guess');
    showGuess.classList.remove('hidden');


    if (guess > correctNumber) 
        showGuess.textContent = 'Your guess is too high.';
    else if (guess < correctNumber) 
        showGuess.textContent = 'Your guess is too low.';
    else 
        showGuess.textContent = 'Your guess is correct!';
};


export default compareNumbers;
