// Without typing the following in, see if you can anticipate what will log to the screen. Turn & Talk to with your partner about what you think and why.

function scope() {
  a = 20;
  var b = 100;
  return b;
}

scope();

console.log(a);
console.log(b);

/////////////////////////

let num = 10;
function change(){
  let num = 20;
  num++;
}
change();
console.log(num); //what will it be?

/////////////////////////
console.log(hoist);
var hoist = 'Has the variable been hoisted?';

////////////////////////

console.log(hoist);
let hoist = 'Has the variable been hoisted?';

////////////////////////

console.log(hoist);
const hoist = 'Has the variable been hoisted?';

/////////////////////////

var arr = [1,2,3,4];

function changeArr(){
  var innerArr = arr;
  innerArr.push(5);
  console.log("innerArr is:",innerArr);

}
changeArr();
console.log("arr is:", arr);

/////////////////////////

let originalArr = [6,7,8,9];

function passThechangeArr(passedArray){
  passedArray.push(10);
  console.log("passedArray is:",passedArray);

}
passThechangeArr(originalArr);
console.log("originalArr is:",originalArr);
