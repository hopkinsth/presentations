var fs = require('fs');
fs.readFile('package.json', function (err, buf) {
  if (err) {
    return console.error('fail', e.stack);
  }

  //do something with buf here
});