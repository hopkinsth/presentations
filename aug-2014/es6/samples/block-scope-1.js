var name = 'Thomas';
var i;

for (i = 0; i &lt; 10; i += 1) {
  var i = 99;
  var name = 'Bob';
  var age = i;
}

console.log(name === 'Bob');
console.log(typeof age !== 'undefined');
console.log(i === 100);