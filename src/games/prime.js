import isItRight from '../additional/isitright';

const startPrime = (userName) => {
  console.log(
    '\nBrain-prime: Answer "yes" if given number is prime. Otherwise answer "no"',
  );

  const isPrime = (num) => {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) return 'no';
    }
    return 'yes';
  };

  const counter = 3;
  const qNumber = 1;
  const question = arg => `${arg}`;
  return isItRight(userName, isPrime, question, qNumber, counter);
};

export default startPrime;
