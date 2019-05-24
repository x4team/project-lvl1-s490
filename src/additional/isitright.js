import userAnswer from '..';
import getRandomInt from './getrandomint';

const genRandomGameData = (qNumbers) => {
  const arr = [];
  for (let j = qNumbers; j >= 1; j -= 1) {
    arr.push(getRandomInt(1, 100));
  }
  return arr;
};


const isItRight = (userName, funcExpected, funcQuestion, qNumber, counter) => {
  if (counter === 0) {
    return console.log(`\nCongratulations, ${userName}!`);
  }

  const array = genRandomGameData(qNumber).slice();

  const expected = `${funcExpected.apply(this, array)}`;

  const question = funcQuestion(array);

  console.log(`\nQuestion: ${question}`);
  const answer = userAnswer('You answer: ');
  if (answer === expected && counter !== 0) {
    console.log('\nCorrect!');
    isItRight(userName, funcExpected, funcQuestion, qNumber, counter - 1);
  } else {
    console.log(`\n'${answer}' is wrong answer ;(. Correct answer was '${expected}'.\n Let's try again, ${userName}!`);
  }
  return 'Error: The function received invalid arguments.';
};
export default isItRight;
