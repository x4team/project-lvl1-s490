import isItRight from '../additional/isitright';

const startCalc = (userName) => {
  console.log('\nBrain-calc: What is the result of the expression?\n');

  const getMathOperation = (number) => {
    if (number % 2 === 0) {
      return '+';
    } if (number % 2 !== 0) {
      if (number % 3 === 0) {
        return '-';
      } if (!Number.isNaN(number) && number % 5 === 0) {
        return '*';
      }
    }
    return '-';
  };

  const calculation = (numberOne, numberTwo, operation) => {
    if (operation === '+') {
      return numberOne + numberTwo;
    } if (operation === '-') {
      return numberOne - numberTwo;
    } if (operation === '*') {
      return numberOne * numberTwo;
    }
    return 'No operation found or error passing function arguments';
  };
  const total = (num1, operation, num2) => calculation(num1, num2, getMathOperation(operation));
  const counter = 3;
  const qNumber = 3;
  const question = array => `${array[0]} ${getMathOperation(array[1])} ${array[2]}`;
  return isItRight(userName, total, question, qNumber, counter);
};

export default startCalc;
