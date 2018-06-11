// broken
class MainDocument {
  constructor(name,type){
    this.name = name;
    this.type = type;
  }

  greet(greeting) {
    return function() {
      console.log(`${greeting}, the doc is named ${this.name}.${this.type}`);
    };
  }

}

let doc = new MainDocument('notes', 'pdf')
let helloGreeting = doc.greet("hello")
helloGreeting()

//////////////
// with arrow function
// class MainDocument {
//   constructor(name,type){
//     this.name = name;
//     this.type = type;
//   }
//
//   greet(greeting) {
//     return ()=> {
//       console.log(`${greeting}, the doc is named ${this.name}.${this.type}`);
//     };
//   }
//
// }
//
// let doc = new MainDocument('notes', 'pdf')
// let helloGreeting = doc.greet("hello")
// helloGreeting()
////////////////////////

//with bind
// class MainDocument {
//   constructor(name,type){
//     this.name = name;
//     this.type = type;
//   }
//
//   greet(greeting) {
//     return function() {
//       console.log(`${greeting}, the doc is named ${this.name}.${this.type}`);
//     }.bind(this)
//   }
//
// }
//
// let doc = new MainDocument('notes', 'pdf')
// let helloGreeting = doc.greet("hello")
// helloGreeting()

//////////////////////////
//with that = this
// class MainDocument {
//   constructor(name,type){
//     this.name = name;
//     this.type = type;
//   }
//
//   greet(greeting) {
//     let that = this
//     return function() {
//       console.log(`${greeting}, the doc is named ${that.name}.${that.type}`);
//     };
//   }
//
// }
//
// let doc = new MainDocument('notes', 'pdf')
// let helloGreeting = doc.greet("hello")
// helloGreeting()
