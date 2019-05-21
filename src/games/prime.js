import userAnswer from '..';

const startPrime = () => {
  console.log(
    '\nBrain-prime: Answer "yes" if given number is prime. Otherwise answer "no"',
  );

  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const isPrime = (num) => {
    for (let i = 2; i < num; i -= 1) {
      if (num % i === 0) return 'no';
    }
    return 'yes';
  };

  for (let counter = 3; counter > 0; counter -= 1) {
    const number = getRandomInt(1, 100);
    console.log(`\nQuestion: ${number}`);
    const answer = userAnswer('Your answer: ');
    if (answer === isPrime(number)) {
      console.log('\nCorrect!');
      if (counter === 1) {
        console.log(`\nCongratulations, ${userName}!`);
      }
    } else {
      console.log(
        `\n'${answer}' is wrong answer ;(. Correct answer was '${isPrime(
          number,
        )}'.\n Let's try again, ${userName}!`,
      );
      break;
    }
  }
};

export default startPrime;
