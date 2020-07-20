function reverseString(str) {
  let res = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    res += str[i];
  }

  return res;
}

function endsWith(str, substr) {
  return new RegExp(`${substr}$`).test(str);
}

function startsWith(str, substr) {
  return new RegExp(`^${substr}`).test(str);
}

function endsWithAlternative(str, substr) {
  if (str.length < substr.length) return false;

  for (let i = 1; i <= str.length; i += 1) {
    if (str[str.length - i] !== substr[substr - i] && substr[substr - i] !== undefined) {
      return false;
    }
  }

  return true;
}

function startsWithAlternative(str, substr) {
  if (str.length < substr.length) return false;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== substr[i] && substr[i] !== undefined) {
      return false;
    }
  }

  return true;
}

function isCamelCase(str) {
  return /^[a-z]+([A-Z][a-z]+)+$/.test(str);
}

function isSnakeCase(str) {
  return /^([a-z]+_)+[a-z]+$/.test(str);
}

function isKebabCase(str) {
  return /^([a-z]+-)+[a-z]+$/.test(str);
}

function isNaN(value) {
  return Number(value).toString() === 'NaN';
}

function isFinite(value) {
  const number = +value;

  return !(number === Infinity || number === -Infinity || number !== number);
}

function isFalsy(value) {
  return !value;
}

function occurrences(str, substr, sensitive) {
  const reg = new RegExp(sensitive ? substr : substr.toLowerCase(), 'g');
  const text = sensitive ? str : str.toLowerCase();
  const res = [];
  let item = reg.exec(text);

  while (item) {
    res.push(item.index);
    item = reg.exec(text);
  }

  return res;
}

module.exports = {
  reverseString,
  endsWith,
  startsWith,
  endsWithAlternative,
  startsWithAlternative,
  isCamelCase,
  isSnakeCase,
  isKebabCase,
  isNaN,
  isFinite,
  isFalsy,
  occurrences,
};
