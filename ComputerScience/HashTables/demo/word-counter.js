function countWordsIntoObject(wordList) {
  let acc = {}

  wordList.forEach((word) => {
    if (word in acc) {
      acc[word] += 1
    }
    else {
      acc[word] = 1
    }
  })

  return acc
}

function countWordsIntoArray(wordList) {
  let acc = []

  for (let i = 0, len = wordList.length; i < len; i++) {
    let foundIndex = -1
    let word = wordList[i]

    for (let j = 0, innerLen = acc.length; j < innerLen; j++) {
      if (acc[j][0] === word) {
        foundIndex = j
        break
      }
    }

    if (foundIndex === -1) {
      acc.push([word, 1])
    }
    else {
      acc[foundIndex][1] += 1
    }
  }

  return acc
}

module.exports = {
  countWordsIntoObject: countWordsIntoObject,
  countWordsIntoArray: countWordsIntoArray
}
