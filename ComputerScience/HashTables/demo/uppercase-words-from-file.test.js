let expect = require('chai').expect
let { uppercaseWordsFromFile } = require('./uppercase-words-from-file')

describe('util tests', function () {
  it('should pass this canary test', function () {
    expect(true).to.eql(true)
  })
})

describe('wordCounter has the right functions', function () {
  it('uppercaseWordsFromFile exists', function () {
    expect(uppercaseWordsFromFile).to.be.a('function')
  })
})

describe('readingFiles', function () {
  it('opens and reads test.txt and returns an array', function (done) {
    uppercaseWordsFromFile('test.txt')
      .then((result) => {
        expect(Array.isArray(result)).to.eql(true)
        done()
      })
      .catch((err) => done(err))
  })

  it('read correct content into an array', function (done) {
    let expectedWordsInFile = [
      'THE',
      'QUICK',
      'QUICK',
      'BROWN',
      'FOX',
      'JUMPED',
      'OVER',
      'THE',
      'LAZY',
      'YELLOW',
      'YELLOW',
      'DOG']

    uppercaseWordsFromFile('test.txt')
      .then((result) => {
        expect(result).to.deep.equal(expectedWordsInFile)
        done()
      })
      .catch((err) => done(err))
  })
})
