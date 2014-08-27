'use strict';
let projects = new WeakMap();
let person = {
  name: 'Thomas',
  eMail: 'thopkins@site.com'
};

//ok:
projects.set(person, 'Tagular');