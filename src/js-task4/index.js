// Task 1

const Mammal = {
  eat: function() { console.log(`${this.name} is eating`) }
};

const Human = {
  run: function() { console.log(`${this.name} is running`) }
};

function Man(name, age) {
  this.name = name;
  this.age = age;
}

Man.prototype.run = Human.run;
Man.prototype.eat = Mammal.eat;

const al = new Man('Alex', 29);

console.log(al.name); // ‘Alex’
console.log(al.age); // 29
al.run(); // Alex is running
al.eat(); // Alex is eating

function spawn(func, ...args) {
  const obj = Object.create(func.prototype);

  func.apply(obj, args);

  return obj;
}

const al2 = spawn(Man, 'Alex', 29);

console.log(al2.name); // ‘Alex’
console.log(al2.age); // 29
al2.run(); // Alex is running
al2.eat(); // Alex is eating

// Task 2

let junior = {
  experience: 1,
};

let fullstack = {
  salary: 3000,
  __proto__: junior,
};

let architect = {
  knowledge: 100500,
  __proto__: fullstack,
};

let webdev = {
  efficiency: 100,
  __proto__: architect,
};

// Task 3

Object.prototype.toString = function() {
  return Object.entries(obj).map((i) => i.join(': ')).join(', ');
}

const obj = {
  prop1: 1,
  prop2: 2,
  prop3: 3,
};

console.log(`${obj}`); // prop1: 1, prop2: 2, prop3: 3 

// Task 4

Function.prototype.delay = function(ms) {
  const currentTime = new Date().getTime();

  while (new Date().getTime() < currentTime + ms);

  return (...args) => this(...args);
}

function add(a, b) {
  return a + b;
}

console.log(add.delay(1000)(1, 3));

// Task 5

function moves(model) {
  return {
    move: () => console.log(`${model} is moving...`),
  };
}

function createBicycle(model) {
  return {
    model,
    ...moves(model),
  };
}

const bicycle = createBicycle('stels');
bicycle.move();

function starts({ model }) {
  return {
    start: () => console.log(`${model} is starting...`),
  };
}

function createVehicle(model) {
  const vehicle = createBicycle(model);

  return {
    ...vehicle,
    ...starts(vehicle),
  };
}

const vehicle = createVehicle('boat');
vehicle.start();
vehicle.move();

function honks({ model }) {
  return {
    honk: () => console.log(`the ${model} honks...`),
  };
}

function createCar(model) {
  const car = createVehicle(model);

  return {
    ...car,
    ...honks(car),
  };
}

const car = createCar('ford');
car.move();
car.start();
car.honk();

function shoots({ model }) {
  return {
    shoot: () => console.log(`${model} is shooting...`),
  };
}

function createTank(model) {
  const tank = createCar(model);

  return {
    ...tank,
    ...shoots(tank),
  };
}

const tank = createTank('t-34');
tank.move();
tank.start();
tank.honk();
tank.shoot();
