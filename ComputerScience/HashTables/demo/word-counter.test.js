let expect = require('chai').expect
let { countWordsIntoObject, countWordsIntoArray } = require('./word-counter')
let { uppercaseWordsFromFile } = require('./uppercase-words-from-file')

describe('util tests', function () {
  it('should pass this canary test', function () {
    expect(true).to.eql(true)
  })
})

describe('wordCounter has the right functions', function () {
  it('countWordsIntoObject exists', function () {
    expect(countWordsIntoObject).to.be.a('function')
  })

  it('countWordsIntoArray exists', function () {
    expect(countWordsIntoArray).to.be.a('function')
  })
})

describe('counting into a hash', function () {
  let expectedWordCounts = {
    'QUICK': 2,
    'BROWN': 1,
    'FOX': 1,
    'JUMPED': 1,
    'OVER': 1,
    'THE': 2,
    'LAZY': 1,
    'YELLOW': 2,
    'DOG': 1
  }

  it('creates a hash with proper word counts from test.txt', function (done) {
    let words = Object.keys(expectedWordCounts)
    uppercaseWordsFromFile('test.txt')
      .then((wordsFromFile) => {
        let result = countWordsIntoObject(wordsFromFile)
        expect(result).to.deep.equal(expectedWordCounts)
        done()
      })
      .catch((err) => done(err))
  })
})

describe('counting into an array', function () {
  let expectedWordCounts = [
    ['THE', 2],
    ['QUICK', 2],
    ['BROWN', 1],
    ['FOX', 1],
    ['JUMPED', 1],
    ['OVER', 1],
    ['LAZY', 1],
    ['YELLOW', 2],
    ['DOG', 1]
  ]

  it('creates an array with proper words from test.txt', function (done) {
    let words = Object.keys(expectedWordCounts)
    uppercaseWordsFromFile('test.txt')
      .then((wordsFromFile) => {
        let result = countWordsIntoArray(wordsFromFile)
        expect(result).to.deep.equal(expectedWordCounts)
        done()
      })
      .catch((err) => done(err))
  })
})
