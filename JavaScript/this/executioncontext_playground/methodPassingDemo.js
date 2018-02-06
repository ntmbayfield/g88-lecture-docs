this.context = "main";

const english = {
  name: "David",
  sayHi: function() {
    console.log(`Hi, ${this.name}`)
  }
};

const italian = {
  name: "Davide",
  sayCiao: function() {
    console.log(`Ciao, ${this.name}`)
  }
};

//here is a function that takes a callback and invokes it
const greetSomeone = function(greeting){
  this.context = "greet someone";
  greeting();
}

//invoking the method works
english.sayHi();
italian.sayCiao();

//why don't these work? How can we fix them?
greetSomeone(english.sayHi)
greetSomeone(italian.sayCiao)


//solution
// greetSomeone(english.sayHi.bind(english))
// greetSomeone(italian.sayCiao.bind(italian))
