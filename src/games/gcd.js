import { makeGame, iter } from '..';  
import getRandomInt from '../utils'; 

const startGCD = (userName) => {
  console.log(
    '\nBrain-gcd: Find the greatest common divisor of given numbers.',
  );

  const getGCD = (a, b) => {
    for (let counter = a; counter >= 1; counter -= 1) {
      if (a % counter === 0 && b % counter === 0) {
        return counter;
      }
    }
    return '1';
  };
  const counter = 3;
  const qNumber = 2;
  const question = arg => `${arg.join(', ')}`;
  return makeGame(userName, getGCD, question, qNumber, counter);
};

export default startGCD;
