import userAnswer from '..';
import getRandomInt from '../additional/getrandomint';
import isItRight from '../additional/isitright';

const startGCD = (userName) => {
  console.log(
    '\nBrain-gcd: Find the greatest common divisor of given numbers.',
  );

  const getGCD = (a, b) => {
    let gcd;
    for (let counter = a; counter >= 1; counter -= 1) {
      if (a % counter === 0 && b % counter === 0) {
        gcd = counter;
      }
    }
    return gcd;
  };

  const numberOne = getRandomInt(1, 99);
  const numberTwo = getRandomInt(1, 99);
  const gcd = getGCD(numberOne, numberTwo);
  console.log(`\nQuestion:  ${numberOne} ${numberTwo}`);
  const answer = userAnswer('Your answer: ');
  const counter = 3;

  return isItRight(userName, answer, gcd, counter);
};

export default startGCD;
