'use strict';
let obj2 = {my: 'key', is: 'anObject'};
let obj3 = {hey: 'this', is: 'another!'};
let m = new Map();
m.set(obj2, 'secret message');
m.set(obj3, 'secret message 2');

console.log(m.get(obj2));
console.log(m.get(obj3));