
function document(name,type){
  this.name = name;
  this.type = type;

  let that = this;
  setTimeout( function() {
      console.log(this); // Global object
      console.log(this.name); //myDoc
    }.bind(this),3000);
}

document("myDoc", ".js");
