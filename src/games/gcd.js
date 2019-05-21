import userAnswer from '..';

const startGCD = () => {
  console.log(
    '\nBrain-gcd: Find the greatest common divisor of given numbers.',
  );

  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const getGCD = (a, b) => {
    let gcd;
    for (let counter = a; counter >= 1; counter -= 1) {
      if (a % counter === 0 && b % counter === 0) {
        gcd = counter;
      }
    }
    return gcd;
  };

  for (let counter = 3; counter > 0; counter -= 1) {
    const numberOne = getRandomInt(1, 99);
    const numberTwo = getRandomInt(1, 99);
    const gcd = getGCD(numberOne, numberTwo);
    console.log(`\nQuestion:  ${numberOne} ${numberTwo}`);
    const answer = userAnswer('Your answer: ');
    if (answer === gcd) {
      console.log('\nCorrect!');
      if (counter === 1) {
        console.log(`\nCongratulations, ${userName}!`);
      }
    } else {
      console.log(
        `\n'${answer}' is wrong answer ;(. Correct answer was '${gcd}'.\n Let's try again, ${userName}!`,
      );
      break;
    }
  }
};

export default startGCD;
