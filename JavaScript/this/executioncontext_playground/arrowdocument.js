// with arrow function
// function document(name,type){
//   this.name = name;
//   this.type = type;
//
//   setTimeout( () => {
//       console.log(this); // global object
//       console.log(this.name);
//     },3000);
// }

//with bind
function document(name,type){
  this.name = name;
  this.type = type;

  setTimeout( function() {
      console.log(this); // Global object
      console.log(this.name); //myDoc
    }.bind(this),3000);
}

//with that = this
// function document(name,type){
//   this.name = name;
//   this.type = type;
//   let that = this;
//
//   setTimeout( function() {
//       console.log(that); // Global object
//       console.log(this); // Timeout object
//       console.log(that.name); //myDoc
//     },3000);
// }

document('myDoc', 'js');
