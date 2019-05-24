import isItRight from '../additional/isitright';

const startEven = (userName) => {
  console.log(
    '\nBrain-even: Answer "yes" if number even otherwise answer "no".',
  );

  const parityCheck = (number) => {
    if (number % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };
  const counter = 3;
  const qNumber = 1;
  const question = arg => `${arg}`;
  return isItRight(userName, parityCheck, question, qNumber, counter);
};

export default startEven;
