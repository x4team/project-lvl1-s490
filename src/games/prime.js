import { makeGame, iterations } from '..';
import getRandomInt from '../utils';

const genPrimeData = () => {
  const gameRules = '\nBrain-prime: Answer "yes" if given number is prime. Otherwise answer "no"';
  const number = getRandomInt(2, 100);
  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const answer = isPrime(number) ? 'yes' : 'no';
  const question = `${number}`;
  const gameData = [gameRules, answer, question];
  return gameData;
};

const startPrime = () => makeGame(genPrimeData, iterations);

export default startPrime;
