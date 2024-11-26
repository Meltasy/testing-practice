function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1)
}

function reverseString(string) {
  return string.split('').reverse().join('')
}

function calculator(firstNum, secondNum) {
  return {
    firstNum: firstNum,
    secondNum: secondNum,
    add() {
        return firstNum + secondNum
    },
    subtract() {
        return firstNum - secondNum
    },
    divide() {
        return firstNum / secondNum
    },
    multiply() {
        return firstNum * secondNum
    }
  }
}

function caesarCipher(string, shiftFactor) {
  if (shiftFactor < 0) {
    shiftFactor = shiftFactor + 26
  }
  let newString = ''
  for (let i = 0; i < string.length; i++) {
    let item = string[i]
    if (item.match(/[a-z]/i)) {
      let code = string.charCodeAt(i)
      if (code >= 65 && code <= 90) {
        item = String.fromCharCode(((code - 65 + shiftFactor) % 26) + 65)
      } else if (code >= 97 && code <= 122) {
        item = String.fromCharCode(((code - 97 + shiftFactor) % 26) + 97)
      }
    }
    newString += item
  }
  return newString
}

function analyzeArray(array) {
    const object = {
        average: array.reduce((a, b) => (a + b)) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
    return object
}

module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray }
