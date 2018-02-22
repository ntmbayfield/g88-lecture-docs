// See the line
//
// ENABLE DISPLAY OF WORD COUNTS HERE
//
// to enable display of final word counts.

let { countWordsIntoArray, countWordsIntoObject } = require('./word-counter')
let { uppercaseWordsFromFile } = require('./uppercase-words-from-file')

// let filename = 'test.txt'
// let filename = 'data/alice-in-wonderland.txt'
let filename = 'data/pride-and-prejudice.txt'

/* BEGIN array method */
uppercaseWordsFromFile(filename)
  .then((words) => {
    let startTimeArray = Date.now()
    console.log(`>>> begin ARRAY method with file ${filename}`)
    let wordCounts = countWordsIntoArray(words)
    console.log(`>>> end ARRAY method after ${Date.now() - startTimeArray} ms`)
  })
  .catch((err) => console.err(err))
/* END array method */

/* BEGIN array method */
uppercaseWordsFromFile(filename)
  .then((words) => {
    let startTimeObject = Date.now()
    console.log(`>>> begin HASH method with file ${filename}`)
    let wordCounts = countWordsIntoObject(words)
    console.log(`>>> end HASH method after ${Date.now() - startTimeObject} ms`)

    // ENABLE DISPLAY OF WORD COUNTS HERE
    let showWordCounts = false
    // console.log(wordCounts)
    console.log(`${showWordCounts ? wordCounts : 'display of word counts suppressed'}`)
  })
  .catch((err) => console.err(err))
/* END array method */

/* Start message */
console.log('>>> Starting demo. This could take a while...')
