function greet(itWorks){
  const promise = new Promise((resolve,reject)=> {
    if(itWorks) resolve("hello there, this is the greeting if it works")
    else reject("if it didn't then we should reject")
  })
  return promise //this function returns a promise
}

// console.log(greet()) //what gets logged here?
// console.log(greet(true)) //what gets logged here?

//what would happen if there was a timeout in the greet function?

//so far we haven't gotten the results we want...this is how we will do that
// greet(true)
// .then(result => console.log(result))
// .catch(err=> console.log(err))
