import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const makeGame = (gameDataFunc, description) => {
  console.log('\nWelcome to the Brain Games!');
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`\nHello, ${userName}!`);

  const game = (gameFunc, counter) => {
    if (counter === 0) {
      console.log(`\nCongratulations, ${userName}!`);
    }
    if (counter !== 0) {
      const gameData = gameFunc();
      const [expected, question] = gameData;

      if (counter === numberOfRounds) {
        console.log(`\n${description}`);
      }
      console.log(`\nQuestion: ${question}`);
      const userAnswer = readlineSync.question('You answer: ');

      if (userAnswer === expected) {
        console.log('\nCorrect!');
        game(gameFunc, counter - 1);
      } else {
        console.log(`\n'${userAnswer}' is wrong answer ;(`
        + ` Correct answer was '${expected}'`);
        console.log(`Let's try again, ${userName}!\n`);
      }
    }
  };

  game(gameDataFunc, numberOfRounds);
};
export default makeGame;
