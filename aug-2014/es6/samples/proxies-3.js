'use strict';
var o = {};
o.name = 'Bob';
var p = Proxy.create({
  get: function (rec, prop) {
    return o[prop];
  },
  delete: function (prop) {
    //nop for now; can't delete any properties
    return true;
  },
  defineProperty: function (name, desc) {
    //only allow email property
    if ('email' === name) {
      Object.defineProperty(o, name, desc);
    }
  }
});

delete p.name;
console.log(p.name);