import userAnswer from '..';
import getUserName from '../additional/username';
import startCalc from './calc';
import startEven from './even';
import startGCD from './gcd';
import startPrime from './prime';
import startProgression from './progression';

const startGames = () => {
  const userName = getUserName;
  console.log(`\nHello, ${userName}!`);
  console.log('\nWelcome to the Brain Games!');
  console.log('\nPlease select the game you want:'
   + '\n1) brain-calc'
   + '\n2) brain-even'
   + '\n3) brain-gcd'
   + '\n4) brain-prime'
   + '\n5) brain-progression');
  const userGameAnswer = userAnswer('\nENTER the answer number: ');

  const selectGames = (userGame) => {
    switch (userGame) {
      case '1':
        startCalc(userName);
        break;
      case '2':
        startEven(userName);
        break;
      case '3':
        startGCD(userName);
        break;
      case '4':
        startPrime(userName);
        break;
      case '5':
        startProgression(userName);
        break;
      default:
        console.log('\nTry to start again!');
    }
  };
  return selectGames(userGameAnswer);
};

export default startGames;
