import makeGame from '..';
import getRandomInt from '../utils';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const genPrimeData = () => {
  const gameRules = '\nBrain-prime: Answer "yes" if given number is prime. Otherwise answer "no"';
  const number = getRandomInt(2, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  const question = `${number}`;
  return [gameRules, answer, question];
};

const startPrime = () => makeGame(genPrimeData);

export default startPrime;
