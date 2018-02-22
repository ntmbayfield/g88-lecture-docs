let fs = require('fs')

function uppercaseWordsFromFile(filename) {
  return new Promise((resolve, reject) => {
    const options = {
      flag: 'r',
      encoding: 'utf-8'
    }

    fs.readFile(filename, options, (err, data) => {
      if (err) {
        reject(err)
      }

      let words = data
        .split('\n')
        .reduce((acc, line) => acc.concat(line.split(' ')), [])
        .map((word) => word.replace(/[^\w\s]|_/g, ''))
        .map((word) => word.toUpperCase())

      resolve(words)
    })
  })
}

module.exports = {
  uppercaseWordsFromFile: uppercaseWordsFromFile
}
