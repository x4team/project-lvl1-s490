import userAnswer from '..';

const startEven = () => {
  console.log(
    '\nBrain-even: Answer "yes" if number even otherwise answer "no".',
  );
  
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const parityCheck = (number) => {
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  for (let counter = 3; counter > 0; counter -= 1) {
    const number = getRandomInt(1, 100);
    console.log(`\nQuestion: ${number}`);
    const answer = userAnswer('Your answer: ');
    if (answer === parityCheck(number)) {
      console.log('\nCorrect!');
      if (counter === 1) {
        console.log(`\nCongratulations, ${userName}!`);
      }
    } else {
      console.log(
        `\n'${answer}' is wrong answer ;(. Correct answer was '${parityCheck(
          number,
        )}'.\n Let's try again, ${userName}!`,
      );
      break;
    }
  }
};

export default startEven;
