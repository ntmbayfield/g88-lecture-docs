let axios = require('axios')

//get all animals, pick a random one, get a quote based on that animal
getAnimals()
  .then(animals => {
    let randomAnimal = animals.data[getRandomInt(0,4)]
    return getQuote(randomAnimal)
    })
  .then(result => {
    console.log("random quote:",result.data[0])
    })
  .catch(result => console.log("random quote error:", result.response.data))


//make multiple requests concurrently. Once all quotes are received, log them.

getAnimals()
  .then(animals=> {
    let quotes = []
    quotes.push(getQuote(animals.data[0]))
    quotes.push(getQuote(animals.data[1]))
    quotes.push(getQuote(animals.data[2]))
    //the fourth one causes a rejection since there are no quotes for gerbils (uncomment it to try it!)
    // quotes.push(getQuote(animals.data[3]))
    return Promise.all(quotes)
  })
  .then(results=> {
    let allResults = results.map(result=> result.data[0])
    console.log(allResults)
  })
  .catch(err=> console.log("there was a problem", err.response.data))


  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

  function getAnimals(){
    let animal = axios.get("http://localhost:3000/animals.json")
    return animal
  }
  function getQuote(animal){
    let quotes = axios.get(`http://localhost:3000/${animal}.json`)
    return quotes
  }
