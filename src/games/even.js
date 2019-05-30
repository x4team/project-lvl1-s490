import { makeGame } from '..';
import getRandomInt from '../utils';

const gameDescription = 'Brain-even: Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;

const genEvenData = () => {
  const number = getRandomInt(1, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  const question = String(number);
  const gameData = [gameDescription, answer, question];
  return gameData;
};
const startEven = () => makeGame(genEvenData, gameDescription);
export default startEven;
