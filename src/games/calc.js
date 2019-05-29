import { makeGame, iter } from '..';
import getRandomInt from '../utils';

const genCalcData = () => {
  const gameRules = '\nBrain-calc: What is the result of the expression?\n';

  const getQuestionAndAnswer = (num1, num2) => {
    switch (getRandomInt(1, 3)) {
      case 1:
        return [`${num1} - ${num2}`, num1 - num2];
      case 2:
        return [`${num1} + ${num2}`, num1 + num2];
      case 3:
        return [`${num1} * ${num2}`, num1 * num2];
      default:
        return 'Error: The function received invalid arguments.';
    }
  };
  const numberOne = getRandomInt(1, 100);
  const numberTwo = getRandomInt(1, 100);
  const array = getQuestionAndAnswer(numberOne, numberTwo);
  const question = array[0];
  const answer = `${array[1]}`;
  const gameData = [gameRules, answer, question];
  return gameData;
};
const startCalc = () => makeGame(genCalcData, iter);

export default startCalc;
