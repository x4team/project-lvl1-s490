import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const makeGame = (gameDataFunc, Description) => {
  console.log('\nWelcome to the Brain Games!');
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`\nHello, ${userName}!`);

  const game = (gameFunc, counter) => {
    if (counter === 0) {
      return console.log(`\nCongratulations, ${userName}!`);
    }
    const gameData = gameFunc();
    const [expected, question] = gameData;
    if (counter === numberOfRounds) {
      console.log(`\n${Description}`);
    }
    console.log(`\nQuestion: ${question}`);
    const userAnswer = readlineSync.question('You answer: ');

    if (userAnswer === expected && counter !== 0) {
      console.log('\nCorrect!');
      game(gameFunc, counter - 1);
    } else {
      console.log(`\n'${userAnswer}' is wrong answer ;(.`);
      console.log(`Correct answer was '${expected}'.\n Let's try again, ${userName}!`);
    } return false;
  };

  return game(gameDataFunc, numberOfRounds);
};
export default makeGame;
