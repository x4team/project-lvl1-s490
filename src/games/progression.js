import makeGame from '..';
import getRandomInt from '../utils';

const genProgression = (start, length, step, index) => {
  const arr = [];
  for (let counter = 0; counter <= length; counter += 1) {
    if (counter === index) {
      arr.push(['..']);
    } else {
      arr.push([start + step * counter]);
    }
  }
  return arr;
};
const gameDescription = 'Brain-progression: What number is missing in the progression?';
const length = 10;

const genProgressionData = () => {
  const startElement = getRandomInt(1, 100);
  const progressionStep = getRandomInt(1, 20);
  const hiddenElementIndex = getRandomInt(0, length);
  const progression = genProgression(startElement, length, progressionStep, hiddenElementIndex);

  const answer = String(startElement + progressionStep * hiddenElementIndex);
  const question = progression.join(' ');
  return [answer, question];
};

export default () => makeGame(genProgressionData, gameDescription);
