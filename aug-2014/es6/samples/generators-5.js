'use strict';
let co = require('co');
let thunkify = require('thunkify');
let read = thunkify(require('fs').readFile);
co(function *() {
  'use strict';
  let data = yield read('package.json');
  console.log('the data:', data);
})();