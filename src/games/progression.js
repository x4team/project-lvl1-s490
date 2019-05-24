import isItRight from '../additional/isitright';
import getRandomInt from '../additional/getrandomint';

const startProgression = (userName) => {
  console.log(
    '\nBrain-progression: What number is missing in the progression?',
  );
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
  const funcExpected = arg => arg;
  const counter = 3;
  const qNumber = 1;
  return isItRight(userName, funcExpected, genProgression, qNumber, counter);
};

export default startProgression;
