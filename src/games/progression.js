import { makeGame, iterations } from '..';
import getRandomInt from '../utils';

const genProgressionData = () => {
  const gameRules = '\nBrain-progression: What number is missing in the progression?';
  const genProgression = (array) => {
    const progressionStep = getRandomInt(8, 20);
    const progressionLength = 10;
    const indexLocationNumber = getRandomInt(1, 9);

    const progression = [array[0]];
    const qHeadElements = indexLocationNumber - 1;
    const qTailElements = progressionLength - indexLocationNumber;
    const genHead = () => {
      for (let i = qHeadElements; i >= 1; i -= 1) {
        progression.unshift(progression[0] - progressionStep);
      }
    };
    const genTail = () => {
      for (let i = qTailElements; i >= 1; i -= 1) {
        progression.push(progression[progression.length - 1] + progressionStep);
      }
    };
    genHead();
    genTail();
    progression.splice(indexLocationNumber - 1, 1, '.. ');
    return progression.join(', ');
  };
  const number = getRandomInt(1, 100);
  const answer = `${number}`;
  const question = genProgression([number]);
  const gameData = [gameRules, answer, question];
  return gameData;
};

const startProgression = () => makeGame(genProgressionData, iterations);

export default startProgression;
