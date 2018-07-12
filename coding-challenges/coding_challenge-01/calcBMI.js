let mass, height;

let mark = {
  name: 'Mark',
  mass: 62,
  height: 1.7
};

let john = {
  name: 'John',
  mass: 70,
  height: 1.8
};

const bmi = (mass, height) => mass / (height * height);
console.log(bmi(60, 1.6));
