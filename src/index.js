import readlineSync from 'readline-sync';

const makeGame = (gameDataFunc) => {
  const iterations = 3;

  console.log('\nWelcome to the Brain Games!');
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`\nHello, ${userName}!`);

  const Game = (gameFunc, counter) => {
    const gameData = gameFunc();
    const gameDescription = gameData[0];
    const expected = gameData[1];
    const question = gameData[2];
    if (counter === 3) console.log(`\n${gameDescription}`);
    if (counter === 0) return console.log(`\nCongratulations, ${userName}!`);
    console.log(`\nQuestion: ${question}`);
    const userAnswer = readlineSync.question('You answer: ');

    if (userAnswer === expected && counter !== 0) {
      console.log('\nCorrect!');
      Game(gameFunc, counter - 1);
    } else {
      console.log(`\n'${userAnswer}' is wrong answer ;(. Correct answer was '${expected}'.\n Let's try again, ${userName}!`);
    } return 'Error: The function received invalid arguments.';
  };

  return Game(gameDataFunc, iterations);
};
export default makeGame;
