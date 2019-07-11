import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const makeGame = (gameDataFunc, description) => {
  console.log('\nWelcome to the Brain Games!');
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`\nHello, ${userName}!`);
  console.log(`\n${description}`);
  const game = (gameFunc, counter) => {
    if (counter === 0) {
      return true;
    }
    const gameData = gameFunc();
    const [expected, question] = gameData;

    console.log(`\nQuestion: ${question}`);
    const userAnswer = readlineSync.question('You answer: ');

    if (userAnswer === expected) {
      console.log('\nCorrect!');
      return game(gameFunc, counter - 1);
    }
    console.log(`\n'${userAnswer}' is wrong answer ;(`
        + ` Correct answer was '${expected}'`);
    return false;
  };
  const result = game(gameDataFunc, numberOfRounds);
  if (result) {
    console.log(`\nCongratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!\n`);
  }
};
export default makeGame;
