// import './utils';
// import { square, add } from './utils';

// console.log('app.js is running!');
// console.log(square(4));
// console.log(add(100, 23));

import isSenior, { isAdult, canDrink } from './person';
import subtrack, { square } from './utils';

console.log(isAdult(20));
console.log(isAdult(17));
console.log(canDrink(20));
console.log(canDrink(22));
console.log(isSenior(65));
console.log(isSenior(64));

console.log(square(4));
console.log(subtrack(100, 19));