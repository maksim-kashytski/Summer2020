function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function percentage(a, percent) {
  const res = a * percent;

  return res / 100;
}

function div(a, b) {
  return a / b;
}

function integerDiv(a, b) {
  return parseInt(a / b, 10);
}

function abs(a) {
  return a < 0 ? a * -1 : a;
}

function sqr(x) {
  return x * x;
}

function sqrN(x, n) {
  return x ** n;
}

function factorialLoop(x) {
  let res = 1;
  let number = x;

  do {
    res *= number;
    number -= 1;
  } while (number > 0);

  return res;
}

function factorialRecursion(x) {
  return x ? x * factorialRecursion(x - 1) : 1;
}

function round(x) {
  return parseInt(x.toFixed(0), 10);
}

function rectangle(width, height) {
  const base = '*\xa0'.repeat(width);
  let rect = base;

  for (let i = 0; i < height - 1; i += 1) {
    rect += '\n';
    rect += base;
  }

  return rect;
}

function rightTriangle(lines) {
  const vertex = '*\xa0';
  let triangle = vertex;

  for (let i = 2; i <= lines; i += 1) {
    triangle += '\n';
    triangle += vertex.repeat(i);
  }

  return triangle;
}

function equilateralTriangle(lines) {
  let base = '*'.repeat(lines * 2 - 1);
  let triangle = base;
  let step = '';

  for (let i = 1; i < lines; i += 1) {
    base = base.substring(1, base.length - 1);
    step = '\xa0'.repeat(i);
    step += base;
    step += '\xa0'.repeat(i);
    step += '\n';
    step += triangle;
    triangle = step;
  }

  return triangle;
}

function rhombus(lines) {
  let base = '*'.repeat(lines * 2 + 1);
  let rhomb = base;
  let step = '';

  for (let i = 1; i < lines + 1; i += 1) {
    base = base.substring(1, base.length - 1);
    step = '\xa0'.repeat(i);
    step += base;
    step += '\xa0'.repeat(i);
    step += '\n';
    step += rhomb;
    rhomb = step;
  }

  base = '*'.repeat(lines * 2 + 1);

  for (let i = 1; i < lines + 1; i += 1) {
    base = base.substring(1, base.length - 1);
    rhomb += '\n';
    rhomb += '\xa0'.repeat(i);
    rhomb += base;
    rhomb += '\xa0'.repeat(i);
  }

  return rhomb;
}

console.log(`sum(1, 2) = ${sum(1, 2)}`);
console.log(`sub(2, 1) = ${sub(2, 1)}`);
console.log(`multiply(5, 3) = ${multiply(5, 3)}`);
console.log(`percentage(10, 5) = ${percentage(10, 5)}`);
console.log(`div(1, 2) = ${div(1, 2)}`);
console.log(`integerDiv(9, 2) = ${integerDiv(9, 2)}`);
console.log(`abs(-1) = ${abs(-1)}`);
console.log(`sqr(5) = ${sqr(5)}`);
console.log(`sqrN(2, 4) = ${sqrN(2, 4)}`);
console.log(`sqrN(2, 0) = ${sqrN(2, 0)}`);
console.log(`sqrN(2, -1) = ${sqrN(2, -1)}`);
console.log(`factorialLoop(4) = ${factorialLoop(4)}`);
console.log(`factorialRecursion(4) = ${factorialRecursion(4)}`);
console.log(`round(5.8) = ${round(5.8)}`);
console.log(`round(5.2) = ${round(5.2)}`);
console.log(`round(-2.8) = ${round(-2.8)}`);
console.log(`round(-2.2) = ${round(-2.2)}`);
console.log(rectangle(4, 5));
console.log(rightTriangle(5));
console.log(equilateralTriangle(5));
console.log(rhombus(4));
