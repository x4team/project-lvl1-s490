import makeGame from '..';
import getRandomInt from '../utils';

const genProgression = (start, length, step, index) => {
  const arr = [start];
  for (let counter = length; counter >= 1; counter -= 1) {
    arr.push(arr[arr.length - 1] + step);
  }
  arr.splice(index, 1, '.. ');
  return arr;
};

const genProgressionData = () => {
  const startElement = getRandomInt(1, 100);
  const lengthProgression = 10;
  const stepProgression = getRandomInt(1, 20);
  const indexHidden = getRandomInt(0, 9);
  const progression = genProgression(startElement, lengthProgression, stepProgression, indexHidden);

  const gameRules = '\nBrain-progression: What number is missing in the progression?';
  const answer = String(startElement + stepProgression * indexHidden);
  const question = progression.join(', ');
  return [gameRules, answer, question];
};

const startProgression = () => makeGame(genProgressionData);

export default startProgression;
