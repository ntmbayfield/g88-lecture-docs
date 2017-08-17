// Create a glass object that has a volume property and a liquid property
// Add a fill method that increases the liquid property
// If fill is called such that it would overflow the cup, make sure that the liquid property never exceeds volume

function Glass(volume,liquid){

  this.volume = volume;
  this.liquid = liquid;

  this.fill = function(){
    if(this.liquid + 1 <= this.volume){
      this.liquid++;
    }
  }
}

var redGlass = new Glass(5,1);
redGlass.fill();
redGlass.fill();
console.log(redGlass);

//what if I wanted to put too much liquid in the glass?
redGlass.liquid = 10;
console.log(redGlass); // whoa, it has too much liquid! How can I prevent that? See the mutator/accessor example



// Create a cow object that has a weight property and an eat method.
// The eat method should have 1 parameter, poundsOfFood
// The eat method should increase the cow's weight by the amount it ate

function Cow(weight){
  this.weight = weight;
  this.eat = function(poundsOfFood){
    this.weight = this.weight + poundsOfFood;
  };
}

var calf = new Cow(30);
calf.eat(20);
console.log(calf);
