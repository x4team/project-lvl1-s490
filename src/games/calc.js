import userAnswer from '..';
import getUserName from '../additional/username';
const startCalc = () => {
  console.log('\nBrain-calc: What is the result of the expression?\n');
  
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const userName = getUserName();
  const getMathOperation = (number) => {
    if (number === 1) {
      return '+';
    } if (number === 2) {
      return '-';
    } if (number === 3) {
      return '*';
    }
    return 'No operation found';
  };

  const Calculation = (numberOne, numberTwo, operation) => {
    if (operation === '+') {
      return numberOne + numberTwo;
    } if (operation === '-') {
      return numberOne - numberTwo;
    } if (operation === '*') {
      return numberOne * numberTwo;
    }
    return 'No operation found or error passing function arguments';
  };

  for (let counter = 3; counter > 0; counter -= 1) {
    const operation = getMathOperation(getRandomInt(1, 3));
    const numberOne = getRandomInt(1, 99);
    const numberTwo = getRandomInt(1, 99);
    const total = Calculation(numberOne, numberTwo, operation);
    console.log(`Question:  ${numberOne} ${operation} ${numberTwo}`);
    const answer = userAnswer('Your answer: ');
    if (answer === total) {
      console.log('\nCorrect!');
      if (counter === 1) {
        console.log(`\nCongratulations, ${userName}!`);
      }
    } else {
      console.log(`\n'${answer}' is wrong answer ;(. Correct answer was '${total}'.\n Let's try again, ${userName}!`);
      break;
    }
  }
};

export default startCalc;
