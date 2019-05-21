import userAnswer from '..';

const startProgression = () => {
  console.log(
    '\nBrain-progression: What number is missing in the progression?',
  );

  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const getRandomProgression = (num, arr) => {
    const arrClone = arr.slice();
    for (let counter = 10; counter > 0; counter -= 1) {
      arrClone[arrClone.length] = num + arrClone[arrClone.length - 1];
    // Or arrClone.push(num + arrClone[arrClone.length - 1]);
    }
    return arrClone;
  };

  const getChangeArr = (arr, startIndex) => {
    const itemsToReplace = 1;
    const replaceTo = '..';
    const arrClone = arr.slice();
    arrClone.splice(startIndex, itemsToReplace, replaceTo);
    return arrClone.join(' ');
  };

  for (let counter = 3; counter > 0; counter -= 1) {
    const progressionStep = getRandomInt(1, 20);
    const startNumber = getRandomInt(1, 20);
    const startIndex = getRandomInt(1, 9);
    const array = [startNumber];
    const arrayProgression = getRandomProgression(progressionStep, array.slice());
    const string = getChangeArr(arrayProgression.slice(), startIndex);
    console.log(`\nQuestion: ${string}`);
    const answer = userAnswer('Your answer: ');
    if (answer === arrayProgression[startIndex]) {
      console.log('\nCorrect!');
      if (counter === 1) {
        console.log(`\nCongratulations, ${userName}!`);
      }
    } else {
      console.log(
        `\n'${answer}' is wrong answer ;(. Correct answer was '${
          arrayProgression[startIndex]
        }'.\n Let's try again, ${userName}!`,
      );
      break;
    }
  }
};

export default startProgression;
