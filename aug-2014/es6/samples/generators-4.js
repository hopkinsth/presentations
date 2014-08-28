var fs = require('fs');
var redis = require('redis');
var db = require('redis').createClient();
fs.readFile('package.json', function (err, buf) {
  if (err) {
    return console.error('fail', e.stack);
  }

  //oh, I need to save this to the db
  db.sadd('savedFiles', 'package.json', 
    function (err, res) {
      if (err) {
        return console.error('ouch.');
      }

      //now I need to copy it somewhere
      var oldFile = fs.createReadStream('package.json');
      var newFile = fs.createWriteStream('package.json.backup');

      oldFile.on('end', function () {
        console.log('file copied!');
        setImmediate(process.exit);
      });

      oldFile.pipe(newFile);
    }
  );
});