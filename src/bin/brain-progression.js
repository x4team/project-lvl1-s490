#!/bin/node
import userAnswer from '..';

console.log('\nWelcome to the Brain Games!\nWhat number is missing in the progression?');

const userName = userAnswer('\nMay I have your name? ');

console.log(`\nHello, ${userName}!`);

const getRandomInt = function(min, max){
	return Math.floor(Math.random() *  (max - min +1)) + min;
}

const getRandomProgression = function(num, arr) {
   for(let counter = 10; counter > 0; counter--){
      arr[arr.length] = num + arr[arr.length -1];
     // Or arr.push(num + arr[arr.length - 1]);
  }
   return arr;
};

const getChangeArr = function(arr, start_index) {
    let elem_to_replace = 1;
    let replace_to = '..';
    let array_clone = arr.slice();
    array_clone.splice(start_index, elem_to_replace, replace_to);
     return array_clone.join(' ');
};

for(let counter = 3; counter > 0; counter--){
    let progression_step = getRandomInt(1, 20);
    let start_number = getRandomInt(1, 20);
    let start_index = getRandomInt(1, 9);
    let array = [start_number];
    let array_progression = getRandomProgression(progression_step, array.slice());
    let string = getChangeArr(array_progression.slice(), start_index);
     console.log(`\nQuestion: ${string}`);
     let answer = userAnswer('Your answer: ');
 	if(answer==array_progression[start_index]){
console.log('\nCorrect!');
        	if(counter==1) {
                  console.log(`\nCongratulations, ${userName}!`);			}
   } else {
               console.log(`\n'${answer}' is wrong answer ;(. Correct answer was '${array_progression[start_index]}'.\n Let's try again, ${userName}!`);
             		break;
                }
}
