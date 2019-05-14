#!/bin/node
import userName from '..';

console.log('\nWelcome to the Brain Games!\nAnswer \"yes\" if number even otherwise answer \"no\".');
const answer = userName('\nMay I have your name? ');

console.log(`\nHello, ${answer}!`);
