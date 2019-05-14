#!/bin/node
import userAnswer from '..';

console.log('\nWelcome to the Brain Games!\nFind the greatest common divisor of given numbers.');
const userName = userAnswer('\nMay I have your name? ');

console.log(`\nHello, ${userName}!`);

const getRandomInt = function(min, max){
	return Math.floor(Math.random() *  (max - min +1)) + min;
};

const getGCD = (a, b) => {
	for(let counter = a; counter >= 1; counter--) {
		if(a % counter == 0 && b % counter == 0) return counter;
	}
};

for(let counter = 3; counter > 0; counter--) {
	let number_one = getRandomInt(1, 99);
	let number_two = getRandomInt(1, 99);
	let gcd = getGCD(number_one, number_two);
	console.log(`\nQuestion:  ${number_one} ${number_two}`);
	let answer = userAnswer('Your answer: ');
	if(answer==gcd){
		console.log('\nCorrect!');
			if(counter==1) {
	                       console.log(`\nCongratulations, ${userName}!`);
			}
	}  else {
	console.log(`\n'${answer}' is wrong answer ;(. Correct answer was '${gcd}'.\n Let's try again, ${userName}!`);
		break;
	}
}
