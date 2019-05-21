const isItRight = (userName, answer, expected, counter) => {
  for (let i = counter; i > 0; i -= 1) {
    if (answer === expected) {
      console.log('\nCorrect!');
      if (counter === 1) {
        console.log(`\nCongratulations, ${userName}!`);
      }
    } else {
      console.log(`\n'${answer}' is wrong answer ;(. Correct answer was '${expected}'.\n Let's try again, ${userName}!`);
      break;
    }
  }
};
export default isItRight;
