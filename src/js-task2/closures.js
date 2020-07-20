function createFunctions(count) {
  const arr = [];

  for (let i = 0; i < count; i += 1) {
    arr.push(() => i);
  }

  return arr;
}

module.exports = createFunctions;
