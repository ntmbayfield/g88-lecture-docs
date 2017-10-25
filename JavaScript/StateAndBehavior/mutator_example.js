// Create a glass object that has a volume property and a liquid property
// Add a fill method that increases the liquid property
// If fill is called such that it would overflow the cup, make sure that the liquid property never exceeds volume

function Glass(volume,liquid){

  var _volume = volume;
  var _liquid = liquid;

  this.fill = function(){
    if(_liquid + 1 <= _volume){
      _liquid++;
    }
  }

  this.getLiquid = function(){
    return _liquid;
  }
}

var redGlass = new Glass(5,1);
redGlass.fill();
redGlass.fill();
console.log(redGlass);
