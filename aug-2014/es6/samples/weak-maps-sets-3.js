'use strict';
let projects = new WeakMap();
let person = {
  name: 'Thomas',
  eMail: 'thopkins@site.com'
};

let theProject = {
  name: 'Tagular',
  location: 'our hearts and minds'
};

projects.set(person, theProject);
theProject = null;

//???
console.log(projects.get(person));
person = {
  name: 'Someone Else'
};

console.log(projects.get(person));