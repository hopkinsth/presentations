function *range(max) {
  'use strict';
  let i = 0;

  for (i = 0; i <= max; i += 1) {
    yield i;
  }
}

//calling range returns an object:
//a generator
console.log(range(5).next);