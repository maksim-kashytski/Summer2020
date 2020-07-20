function reverseString(str) {
  let res = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    res += str[i];
  }

  return res;
}

function endsWith(str, substr) {
  if (str.length < substr.length) return false;
  if (str === substr) return true;

  let i = 1;

  while (true) {
    if (str[str.length - i] === substr[substr.length - i]) {
      i += 1;
    } else if (substr[substr.length - i] === undefined) {
      return true;
    } else {
      return false;
    }
  }
}

function startsWith(str, substr) {
  if (str.length < substr.length) return false;
  if (str === substr) return true;

  let i = 0;

  while (true) {
    if (str[i] === substr[i]) {
      i += 1;
    } else if (substr[i] === undefined) {
      return true;
    } else {
      return false;
    }
  }
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
  if (typeof value !== 'number') return false;

  if (
    value === Infinity ||
    value === -Infinity ||
    value !== value
  ) {
    return false;
  }

  return true;
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
  isCamelCase,
  isSnakeCase,
  isKebabCase,
  isNaN,
  isFinite,
  isFalsy,
  occurrences,
};
