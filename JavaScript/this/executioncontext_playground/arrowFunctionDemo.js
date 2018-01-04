//why doesn't this work? How can we fix it?
var greet = {
  name: "tom",
	wave:()=> {
    let x =3
    console.log("you waved and said ", this.name);
		// this.sayHello();
	},
	sayHello: ()=> {
		console.log("hi!");
	}
};

greet.wave();

//////////////////////////

// this doesn't work because *this* is bound to the object that was returned by the constructor function. We would have to use that = this to make it work
const Document = function(name,type){
  this.name = name
  this.type = type
  let that = this
  return {
    getName: function (){
      console.log(that);
      console.log(this);
      console.log("document name is:", this.name);
      return this.name
    }
  }
}

// this works because the arrow function does not set a *this* binding and instead uses the parent binding which is myDoc
// function Document(name,type){
//   this.name = name
//   this.type = type
//
//   return {
//     getName: () => {
//       console.log(this);
//       console.log(this.name);
//       return this.name
//     }
//   }
// }
let myDoc = new Document("jsNotes", ".js")

myDoc.getName()
