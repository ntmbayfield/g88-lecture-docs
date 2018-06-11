'use strict';
function hello(name) {
  console.log(this); //undefined
  return 'Hello ' + name + '!';
}

hello();
