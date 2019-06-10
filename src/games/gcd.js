import { makeGame, iterations } from '..';
import getRandomInt from '../utils';

const genGCDData = () => {
  const gameRules = '\nBrain-gcd: Find the greatest common divisor of given numbers.';

  const getGCD = (a, b) => {
    for (let counter = a; counter >= 1; counter -= 1) {
      if (a % counter === 0 && b % counter === 0) {
        return counter;
      }
    }
    return '1';
  };
  const numberOne = getRandomInt(1, 100);
  const numberTwo = getRandomInt(1, 100);
  const answer = `${getGCD(numberOne, numberTwo)}`;
  const question = `${numberOne} ${numberTwo}`;
  const gameData = [gameRules, answer, question];
  return gameData;
};

const startGCD = () => makeGame(genGCDData, iterations);

export default startGCD;
