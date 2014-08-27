var obj = {}
var obj2 = {my: 'key', is: 'anObject'};
var obj3 = {hey: 'this', is: 'another!'};

obj[obj2] = 'secret message';
obj[obj3] = 'secret message 2';

//value is overwritten; key is the same
console.log(obj[obj2] === 'secret message 2');