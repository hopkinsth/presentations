'use strict';
function *id(line) {
  while (true) {
    line = line || '';
    line = yield line + ('' + Math.random());
  }
}

let idMachine = id();
idMachine.next();
console.log(idMachine.next('user1'));
console.log(idMachine.next('user2'));