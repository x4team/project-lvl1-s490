import makeGame from '..';
import getRandomInt from '../utils';

const getGCD = (a, b) => {
  if (!b) {
    return a;
  }
  return getGCD(b, a % b);
};
const gameDescription = '\nBrain-gcd: Find the greatest common divisor of given numbers.';
const genGCDData = () => {
  const numberOne = getRandomInt(1, 100);
  const numberTwo = getRandomInt(1, 100);
  const answer = `${getGCD(numberOne, numberTwo)}`;
  const question = `${numberOne} ${numberTwo}`;
  return [answer, question];
};

const startGCD = () => makeGame(genGCDData, gameDescription);

export default startGCD;
