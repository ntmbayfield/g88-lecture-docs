//explore this with a partner. What is happening? What can you try?

let people = ['Alex', 'Eliza', 'Philip']

function greet(person){
  const promise = new Promise((resolve,reject)=> {
    setTimeout(()=>{
      if(person) resolve(`hello there, ${person}`)
      else reject(`something went wrong`)
    }
    ,500)
  })
  return promise
}


let greetings = people.map(person => greet(person))
console.log(greetings)

// Promise.all(greetings)
// .then(results=> console.log(results)) //what is results?
// .catch(results=> console.log(results)) //what is results?
