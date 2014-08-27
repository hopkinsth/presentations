var my = {};
Object.defineProperty(my, 'fullName', {
  get: function () {
    return [
      this.firstName,
      this.lastName
    ].join(' ');
  }
});

my.firstName = 'Bob';
my.lastName = 'Jones';
console.log(my.fullName);