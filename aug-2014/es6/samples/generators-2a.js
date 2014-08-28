'use strict';
function *range(max) {
  'use strict';
  let i = 0;

  for (i = 0; i <= max; i += 1) {
    yield i;
  }
}

//generators are closely releated
//to iterators; you can loop over them
//with a `for-of` loop
for (let num of range(5)) {
  console.log(num);
}