// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumbers from '../compare-numbers.js';
const test = QUnit.test;

test('should return too high if the guess is higher than the correct number', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const correctNumber = 15;
    const guess = 17;
    const expected = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('should return too low if the guess is lower than the correct number', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const correctNumber = 15;
    const guess = 9;
    const expected = -1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('should return equal if the guess is equal to the correct number', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const correctNumber = 15;
    const guess = 15;
    const expected = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('should return invalid if the guess is not a valid number', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const correctNumber = 15;
    const guess = 32;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 'invalid');
});
