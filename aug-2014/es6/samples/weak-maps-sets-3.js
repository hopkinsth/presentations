'use strict';
let projects = new WeakMap();
let person = {
  name: 'Thomas',
  eMail: 'thopkins@site.com'
};

projects.set(person, 'Tagular');
person = null;

//???
projects.get(person);