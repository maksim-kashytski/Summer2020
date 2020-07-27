function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

function isFunction(obj) {
  return typeof obj === 'function';
}

function keys(obj) {
  if ((typeof obj !== 'object' && typeof obj !== 'string') || obj === null) {
    throw new Error('Error');
  }

  const prop = [];

  for (const key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) prop.push(key);
  }

  return prop;
}

function allKeys(obj) {
  if ((typeof obj !== 'object' && typeof obj !== 'string') || obj === null) {
    throw new Error('Error');
  }

  const prop = [];

  for (const key in obj) {
    prop.push(key);
  }

  return prop;
}

function values(obj) {
  if ((typeof obj !== 'object' && typeof obj !== 'string') || obj === null) {
    throw new Error('Error');
  }

  const objValues = [];

  for (const key in obj) {
    objValues.push(obj[key]);
  }

  return objValues;
}

function pairs(obj) {
  if ((typeof obj !== 'object' && typeof obj !== 'string') || obj === null) {
    throw new Error('Error');
  }

  const keyValue = [];

  for (const key in obj) {
    keyValue.push([key, obj[key]]);
  }

  return keyValue;
}

function functions(obj) {
  if (typeof obj !== 'object' || obj === null) {
    throw new Error('Error');
  }

  let prop = [];

  for (const key in obj) {
    if (typeof obj[key] === 'object') prop = prop.concat(functions(obj[key]));
    if (typeof obj[key] === 'function') prop.push(key);
  }

  return prop.sort();
}

function bind(func, context) {
  const args = [].slice.call(arguments, 2);

  return () => func.apply(context, args);
}

const obj1 = {
  age: 21,
  name: 'Max',
};

const obj2 = {
  gender: 'male',
  getName() {
    return this.name;
  },
  __proto__: obj1,
};

const obj3 = {
  a: 1,
  b: 2,
  с() {
    return 0;
  },
  d() {
    return 0;
  },
};

const obj4 = {
  get() {
    return this.name;
  },
};

const getName = bind(obj4.get, obj1);

console.log(isObject(obj1));
console.log(isFunction(obj2.getName));
console.log(keys(obj2));
console.log(allKeys(obj2));
console.log(values(obj3));
console.log(values('foo'));
console.log(pairs(obj3));
console.log(functions(obj3));
console.log(getName());
