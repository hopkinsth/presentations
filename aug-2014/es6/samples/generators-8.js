'use strict';
let thunkify = require('thunkify');
let fs = require('fs');
let co = require('co');
fs.readFile = thunkify(fs.readFile);
co(function *() {
  try {
    let data = yield fs.readFile('/etc/fstab');
  } catch (e) {
    console.error('Got error', e);
  }
})();