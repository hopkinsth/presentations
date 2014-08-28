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

//ok:
projects.set(person, theProject);