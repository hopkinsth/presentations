var someJones = {};
Object.defineProperty(someJones, 'name', {
  get: function () {
    return this.name + ' Jones'
  },
  //blocks changing the descriptor
  //and deleting
  configurable: false
});

my.name = 'Bob';
console.log(my.name);
delete my.name;