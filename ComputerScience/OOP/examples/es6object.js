'use strict'
class Car {

  constructor (make,model) {
    this.make = make;
    this.model = model;
    this.gasIsFull = true;
  }

  drive(){
    this.gasIsFull = false;
  }

  fillTank(){
    this.gasIsFull = true;
  }

}

var myCar = new Car();
console.log(myCar);
