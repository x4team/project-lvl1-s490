#!/bin/node
import userName from '..';

console.log('Welcome to the Brain Games!\nAnswer \"yes\" if number even otherwise answer \"no\".');
const answer = userName('May I have your name? ');

console.log(`Hello, ${answer}!`);
