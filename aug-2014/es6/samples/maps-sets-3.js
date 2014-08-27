'use strict';
let s = new Set();
s.add('bob');
s.add({here: 'is', a: 'thing'});
s.add('bob');

console.log(s.size === 2);