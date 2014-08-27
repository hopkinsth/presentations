'use strict';
let thunkify = require('thunkify');
let co = require('co');
let redis = require('redis');
let conn = redis.createClient();

conn.set = thunkify(conn.set);
conn.get = thunkify(conn.get);

co(function *() {
  let threshhold = (yield conn.get('curThreshhold')) || 10;
  let data = yield getData(threshhold);

  yield conn.set('someDataKey', JSON.stringify(data));

  console.log('data value is...', yield conn.get('someDataKey'));
  console.log('done!');
})();

function getData(limit) {
  return function(done) {
    let result = [];
    for (let i = 0; i < limit; i += 1) {
      result.push(i + 1);
    }
    done(null, result);
  };
}