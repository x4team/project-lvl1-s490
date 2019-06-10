import { makeGame, iterations } from '..';
import getRandomInt from '../utils';

const genEvenData = () => {
  const gameDescription = 'Brain-even: Answer "yes" if number even otherwise answer "no".';
  const isEven = num => num % 2 === 0;
  const number = getRandomInt(1, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  const question = String(number);
  const gameData = [gameDescription, answer, question];
  return gameData;
};
const startEven = () => makeGame(genEvenData, iterations);
export default startEven;
