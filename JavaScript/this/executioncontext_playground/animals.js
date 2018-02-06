'use strict';

console.log(this); // {} whether it's strict or not

function defaultContext () {
    console.log(this); //{} or undefined if strict mode
}

var cat = {
    name: "Felix",
    furColor: "black",
    talk: function() {
      console.log(this); //cat object is the context
    }
}
var dog = {
    name: "Snoopy",
    furColor: "black and white"
}

cat.talk();
defaultContext();
defaultContext.call(cat);
defaultContext.call(dog);
