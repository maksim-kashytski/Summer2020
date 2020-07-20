const {
  reverseString,
  endsWith,
  startsWith,
  isCamelCase,
  isSnakeCase,
  isKebabCase,
  isNaN,
  isFinite,
  isFalsy,
  occurrences,
} = require('./strings.js');

const {
  integerNumbers,
  oddIntegerValues,
  lastDigitInEnglish,
} = require('./functions.js');

const createFunctions = require('./closures');

// Strings

console.log(`reverseString('qwerty') = ${reverseString('qwerty')}`);
console.log(`endsWith('qwerty', 'rty') = ${endsWith('qwerty', 'rty')}`);
console.log(`startsWith('qwerty', 'qwe') = ${startsWith('qwerty', 'qwe')}`);
console.log(`isCamelCase('isCamelCase') = ${isCamelCase('isCamelCase')}`);
console.log(`isSnakeCase('is_snake_case') = ${isSnakeCase('is_snake_case')}`);
console.log(`isKebabCase('kebab') = ${isKebabCase('is-kebab-case')}`);
console.log(`isNaN(' 10 ') = ${isNaN(' 10 ')}`);
console.log(`isFinite(NaN) = ${isFinite(NaN)}`);
console.log(`isFalsy(true) = ${isFalsy(true)}`);
console.log(`occurrences('lorem ipsum text loremipsumtext', 'text', false) = ${occurrences('lorem ipsum text loremipsumtext', 'text', false)}`);

// Functions

console.log(`integerNumbers(4, 17) = ${integerNumbers(4, 17)}`);
console.log(`oddIntegerValues(4, 17) = ${oddIntegerValues(4, 17)}`);
console.log(`lastDigitInEnglish(1234) = ${lastDigitInEnglish(1234)}`);

// Closures

const callbacks = createFunctions(4);

console.log(`callbacks[0]() = ${callbacks[0]()}`);
console.log(`callbacks[1]() = ${callbacks[1]()}`);
console.log(`callbacks[2]() = ${callbacks[2]()}`);
console.log(`callbacks[3]() = ${callbacks[3]()}`);
