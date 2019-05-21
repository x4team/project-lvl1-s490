import userAnswer from '..';
import getUserName from '../additional/username';
import startCalc from './calc';
import startEven from './even';
import startGCD from './gcd';
import startPrime from './prime';
import startProgression from './progression';

const startGames = () => {
  console.log('\nWelcome to the Brain Games!');
  const userName = getUserName;
  console.log(`\nHello, ${userName}`);
  console.log('\nPlease select the game you want:'
	    + '\n1) brain-calc'
            + '\n2) brain-even'
	    + '\n3) brain-gcd'
	    + '\n4) brain-prime'
	    + '\n5) brain-progression');
  const userGameAnswer = userAnswer('\nENTER the answer number:');
  const listGames = ['1', '2', '3', '4', '5'];
  const selectGames = (userGame) => {
    switch (listGames[userGame]) {
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
