import readlineSync from 'readline-sync';

console.log('\nWelcome to the Brain Games!');
const userName = readlineSync.question('\nMay I have your name? ');
console.log(`\nHello, ${userName}!`);
const counter = 3;

export const makeGame = (gameDataFunc, gameDescription) => {
  // gameRules, expected, number, question
  const gameDataExpand = gameDataFunc();
  const expected = gameDataExpand[1];
  const question = gameDataExpand[2];

  if (counter === 3) console.log(`\n${gameDescription}`);
  if (counter === 0) return console.log(`\nCongratulations, ${userName}!`);

  console.log(`\nQuestion: ${question}`);
  const userAnswer = readlineSync.question('You answer: ');
  if (userAnswer === expected && counter !== 0) {
    console.log('\nCorrect!');
    makeGame(gameDataFunc, counter - 1);
  } else {
    console.log(`\n'${userAnswer}' is wrong answer ;(. Correct answer was '${expected}'.\n Let's try again, ${userName}!`);
  } return 'Error: The function received invalid arguments.';
};
