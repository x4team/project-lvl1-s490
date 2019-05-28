import readlineSync from 'readline-sync';
import startCalc from './games/calc';
import startEven from './games/even';
import startGCD from './games/gcd';
import startPrime from './games/prime';
import startProgression from './games/progression';

const startGames = () => {
  console.log('\nPlease select the game you want:'
   + '\n1) brain-calc'
   + '\n2) brain-even'
   + '\n3) brain-gcd'
   + '\n4) brain-prime'
   + '\n5) brain-progression');
  const userGameAnswer = readlineSync.question('\nENTER the answer number: ');

  const selectGames = (userGame) => {
    switch (userGame) {
      case '1':
        startCalc();
        break;
      case '2':
        startEven();
        break;
      case '3':
        startGCD();
        break;
      case '4':
        startPrime();
        break;
      case '5':
        startProgression();
        break;
      default:
        console.log('\nTry to start again!');
    }
  };
  return selectGames(userGameAnswer);
};

export default startGames;
