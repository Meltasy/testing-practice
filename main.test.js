const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./main.js')

test('capitalize first charcter of string', () => {
  expect(capitalize('hello')).toBe('Hello')
  expect(capitalize('goodbye')).toBe('Goodbye')
})

test('capitalize first charcter of string with multiple words', () => {
  expect(capitalize('thank you')).toBe('Thank you')
  expect(capitalize('good evening')).toBe('Good evening')
})

test('reverse string', () => {
  expect(reverseString('lived')).toBe('devil')
  expect(reverseString('stressed')).toBe('desserts')
})

test('reverse string with multiple words', () => {
  expect(reverseString('god knits straw pals')).toBe('slap warts stink dog')
  expect(reverseString('rats deliver smart guns')).toBe('snug trams reviled star')
})

test('calculator operation: add', () => {
  expect(calculator(5, 3).add()).toEqual(8)
  expect(calculator(0.5555, 0.2345).add()).toBeCloseTo(0.79)
})

test('calculator operation: subtract', () => {
  expect(calculator(37, 13).subtract()).toEqual(24)
  expect(calculator(0.525, 0.215).subtract()).toBeCloseTo(0.31)
})

test('calculator operation: divide', () => {
  expect(calculator(64, 8).divide()).toEqual(8)
  expect(calculator(350, 45).divide()).toBeCloseTo(7.778)
})

test('calculator operation: multiply', () => {
  expect(calculator(15, 9).multiply()).toEqual(135)
  expect(calculator(3.5, 11.8).multiply()).toBeCloseTo(41.3)
})

test('caesarCipher with a shift of 3', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc')
  expect(caesarCipher('Walk with me', 3)).toMatch(/Zdon zlwk ph/)
})

test('caesarCipher with different shifts and characters', () => {
  expect(caesarCipher('Hello, everybody!', 9)).toBe('Qnuux, nenahkxmh!')
  expect(caesarCipher('Don\'t STOP shaking, baby!', 6)).toMatch(/Jut\'z YZUV yngqotm, hghe!/)
})

test('analzeArray with less than 10 numbers', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 })
  expect(analyzeArray([4, 6, 9, 17, 23, 19, 3, 5, 13])).toMatchObject({ average: 11, min: 3, max: 23, length: 9 })
})

test('analzeArray testing elements of object', () => {
  expect(analyzeArray([0.5, 3.8, 9.7, 2.4, 22.7, 16.3, 0.6]).average).toBeCloseTo(8)
  expect(analyzeArray([130, 34, 67, 99, 43, 21, 9, 52, 77, 105, 48, 117, 199]).min).toBe(9)
  expect(analyzeArray([267, 394, 621, 999, 450, 682, 756, 1245, 1039, 510, 827, 1136]).max).toBe(1245)
  expect(analyzeArray([130, 34, 67, 99, 43, 21, 9, 52, 77, 105, 48, 117, 199, 267, 394, 621, 999, 450, 682, 756, 1245, 1039, 510, 827, 1136]).length).toEqual(25)
})
