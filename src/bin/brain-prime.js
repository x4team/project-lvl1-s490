#!/bin/node
import userAnswer from '..';

console.log('\nWelcome to the Brain Games!\nAnswer \"yes\" if given number is prime. Otherwise answer \"no\"');

const userName = userAnswer('\nMay I have your name? ');

console.log(`\nHello, ${userName}!`);

const getRandomInt = function(min, max){
	return Math.floor(Math.random() *  (max - min +1)) + min;
}

const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return 'no';
  return 'yes';
}

for(let counter = 3; counter > 0; counter--){
        let number = getRandomInt(1, 100);
	console.log(`\nQuestion: ${number}`);
        let answer = userAnswer('Your answer: ');
 	if(answer == isPrime(number)){
console.log('\nCorrect!');
        	if(counter == 1) {
                  console.log(`\nCongratulations, ${userName}!`);		        	}
   } else {
               console.log(`\n'${answer}' is wrong answer ;(. Correct answer was '${isPrime(number)}'.\n Let's try again, ${userName}!`);
             		break;
                }
}
