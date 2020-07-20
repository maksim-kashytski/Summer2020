function integerNumbers(a, b) {
  const res = [];

  for (let i = a; i <= b; i += 1) {
    res.push(i);
  }

  return res.join(' ');
}

function oddIntegerValues(a, b) {
  const res = [];

  for (let i = a; i <= b; i += 1) {
    if (i % 2 !== 0) res.push(i);
  }

  return res.join(' ');
}

function lastDigitInEnglish(number) {
  const digit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const index = number.toString().replace(/\d+(\d)$/, '$1');

  return digit[index];
}

module.exports = {
  integerNumbers,
  oddIntegerValues,
  lastDigitInEnglish,
};
