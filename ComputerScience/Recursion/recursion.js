// Define a recursive function that takes an argument n and prints the lyrics to 99 bottles of beer on the wall, starting with that number n.

function bottlesRecursion(n){
  //base case
  if (n === 0) {
    console.log("no more bottles of beer on the wall.");
  }

  //call self with new data
  else {
    console.log(`${n} bottles of beer on the wall. ${n} bottles of beer...`);
    return bottlesRecursion(n-1);
  }
}
// bottlesRecursion(0);
bottlesRecursion(5);


// Define a recursive function that takes an argument num and computes the factorial of that number. For example num = 5 would return 120 since 5*4*3*2*1 = 120.
// function factorial(num){
//   if (num <= 1){
//     // base case
//     return 1;
//
//   }
//   else{
//     //call self with new data
//     return num * factorial(num -1);
//   }
//
// }
//
// console.log("Final answer is:",factorial(5));
