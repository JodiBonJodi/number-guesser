const compareNumbers = (guess, correctNumber) => {
    if (guess > correctNumber) 
        return 'too high';
    else if (guess < correctNumber) 
        return 'too low';
    else 
        return 'equal';
};







export default compareNumbers;
