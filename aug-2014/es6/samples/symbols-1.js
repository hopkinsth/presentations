'use strict';
let one = Symbol('name');
let two = Symbol('name');
let obj = {};
let swappy = Symbol();

obj[one] = 'Bob';
obj[two] = 'Joe';
obj[swappy] = 1;

console.log(obj[one]);
console.log(obj[two]);