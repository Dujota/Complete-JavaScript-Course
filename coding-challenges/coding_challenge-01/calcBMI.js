let isHigher, mass, height;

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

console.log(`Is ${mark.name}'s BMI higher than ${john.name}'s?`);

if (bmi(mark.mass, mark.height) > bmi(john.mass, john.height)) {
  console.log(true);
} else {
  console.log(false);
}
