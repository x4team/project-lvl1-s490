import makeGame from '..';
import getRandomInt from '../utils';

const getGCD = (a, b) => {
  const result = (!b) ? a : getGCD(b, a % b);
  return result;
};
const gameDescription = 'Brain-gcd: Find the greatest common divisor of given numbers.';
const genGCDData = () => {
  const numberOne = getRandomInt(1, 100);
  const numberTwo = getRandomInt(1, 100);
  const answer = `${getGCD(numberOne, numberTwo)}`;
  const question = `${numberOne} ${numberTwo}`;
  return [answer, question];
};

export default () => makeGame(genGCDData, gameDescription);
