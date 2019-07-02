import makeGame from '..';
import getRandomInt from '../utils';

const gameDescription = 'Brain-prime: Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const genPrimeData = () => {
  const number = getRandomInt(2, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  const question = String(number);
  return [answer, question];
};

export default () => makeGame(genPrimeData, gameDescription);
