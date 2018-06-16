'use strict'

function myAwesomeFunction (greet) {
    console.log(`${greet} ${this.name}`)
}

var cat = {
    name: "Felix",
    furColor: "black"
}
var dog = {
    name: "Snoopy",
    furColor: "black and white"
}

myAwesomeFunction.call(cat, "meow") //invoke the fn with cat set as this
myAwesomeFunction.call(dog, "woof") // invoke the fn with dog set as this
