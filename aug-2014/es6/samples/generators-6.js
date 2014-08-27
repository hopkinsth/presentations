'use strict';
let co = require('co');
let exec = require('co-exec');
let get = require('cogent');
co(function *() {
  let url = 'http://www.google.com/stuff';
  let username = yield exec('whoami');
  let data = yield get(url);

  username = username.trim();
  console.log('%s requested data from %s', username, url);
  console.log('the data received is:');
  data.pipe(process.stdout);
})();