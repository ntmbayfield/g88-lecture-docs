// function Document(name,type){
//   this.name = name;
//   this.type = type;
//   this.getName = function (){
//       console.log(this);//Document { name: 'jsNotes', type: '.js', getName: [Function] }
//       return this.name;
//     }
// }

// let myDoc = new Document("jsNotes", ".js")
// myDoc.getName()


class Document {
  constructor(name,type){
    this.name = name;
    this.type = type;
  }
  getName(){
      console.log(this);//Document { name: 'jsNotes', type: '.js', getName: [Function] }
      return this.name;
    }

}

let myDoc = new Document("jsNotes", ".js")
myDoc.getName()
