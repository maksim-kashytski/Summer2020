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
  return a * percent / 100;
}

function div(a, b) {
  return a / b;
}

function integerDiv(a, b) {
  return ~~ (a / b);
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

  do {
    res *= x--;
  } while (x > 0)

  return res;
}

function factorialRecursion(x) {
  return x ? x * factorialRecursion(x - 1) : 1;
}

function round(x) {
  const sign = x < 0 ? -1 : 1;

  x *= sign;
  x = x < ~~ x + 0.5 ? x | 0 : x | 1;

  return x * sign;
}

function rectangle(width, height) {
  const base = '*\xa0'.repeat(width);
  let rect = base;

  for (let i = 0; i < height - 1; i++) {
    rect += '\n' + base; 
  }

  return rect;
}

function rightTriangle(lines) {
  const vertex = '*\xa0';
  let triangle = vertex;

  for (let i = 2; i <= lines; i++) {
    triangle += '\n' + vertex.repeat(i);
  }

  return triangle;
}

function equilateralTriangle(lines) {
  let base = '*'.repeat(lines * 2 - 1);
  let triangle = base;

  for (i = 1; i < lines; i++) {
    base = base.substring(1, base.length - 1);
    triangle = '\xa0'.repeat(i) + base + '\xa0'.repeat(i) + '\n' + triangle;
  }

  return triangle;
}

function rhombus(lines) {
  let base = '*'.repeat(lines * 2 + 1);
  let rhombus = base;

  for (i = 1; i < lines + 1; i++) {
    base = base.substring(1, base.length - 1);
    rhombus = '\xa0'.repeat(i) + base + '\xa0'.repeat(i) + '\n' + rhombus;
  }

  base = '*'.repeat(lines * 2 + 1);

  for (i = 1; i < lines + 1; i++) {
    base = base.substring(1, base.length - 1);
    rhombus += '\n' + '\xa0'.repeat(i) + base + '\xa0'.repeat(i);
  }

  return rhombus;
}