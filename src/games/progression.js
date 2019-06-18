import makeGame from '..';
import getRandomInt from '../utils';

const genProgression = (start, length, step, index) => {
  let arr = [];
  for (let counter = 0; counter <= length; counter += 1) {
    if (counter === index) {
      arr = arr.concat(['..']);
    } else {
      arr = arr.concat([start + step * counter]);
    }
  }
  return arr;
};
const gameDescription = '\nBrain-progression: What number is missing in the progression?';
const length = 10;

const genProgressionData = () => {
  const startElement = getRandomInt(1, 100);
  const stepProgression = getRandomInt(1, 20);
  const hiddenElementIndex = getRandomInt(1, length);
  const progression = genProgression(startElement, length, stepProgression, hiddenElementIndex);

  const answer = String(startElement + stepProgression * hiddenElementIndex);
  const question = progression.join(' ');
  return [answer, question];
};

const startProgression = () => makeGame(genProgressionData, gameDescription);

export default startProgression;
