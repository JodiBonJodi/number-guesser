const compareNumbers = (guess, correctNumber) => {
    

     if (guess > 20 || guess < 1) {
         return 'invalid';
     } else if (guess > correctNumber) {
         return 1;
     } else if (guess < correctNumber) {
         return -1;
     } else {
         return 0;
    }

    //  if (guess > correctNumber) {
    //      return 1;
    //  } else if (guess < correctNumber) {
    //      return -1;
    //  } else {
    //      return 0;
    //  }
};
export default compareNumbers;