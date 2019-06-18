import makeGame from '..';
import getRandomInt from '../utils';

const isEven = num => num % 2 === 0;
const gameDescription = 'Brain-even: Answer "yes" if number even otherwise answer "no".';

const genEvenData = () => {
  const number = getRandomInt(1, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  const question = String(number);
  return [answer, question];
};

const startEven = () => makeGame(genEvenData, gameDescription);

export default startEven;
