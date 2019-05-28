import { makeGame, iter } from '..';
import getRandomInt from '../utils';

const generateEvenData = () => {
  const gameRules = '\nBrain-even: Answer "yes" if number even otherwise answer "no".';
  const number = getRandomInt(1, 100);
  const isEven = num => num % 2 === 0;
  const answer = isEven(number) ? 'yes' : 'no';
  const question = `${number}`;
  const gameData = [gameRules, answer, question];
  return gameData;
};
const startEven = () => makeGame(generateEvenData, iter);

export default startEven;
