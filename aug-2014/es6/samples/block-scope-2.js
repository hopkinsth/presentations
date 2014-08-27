'use strict';
let name = 'Thomas';
let i;

for (i = 0; i < 10; i += 1) { 
  let i = 99;
  let name = 'Bob';
  let age = i;
}

console.log(name === 'Thomas');
console.log(typeof age === 'undefined');
console.log(i === 10);