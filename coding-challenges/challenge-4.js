let john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height); // save the computed value as a property of the object and returnit
    return this.bmi;
  }
};

let mark = {
  fullName: 'Mark Jacobs',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height); // save the computed value as a property of the object and returnit
    return this.bmi;
  }
};

console.log(john);
console.log(mark);

// we can calculate and compare in one tag if we have a return value for the function call inthe object
if (john.calcBMI() > mark.calcBMI()) {
  console.log(`${john.fullName} has the higher BMI at ${john.bmi}`);
} else if (john.bmi < mark.bmi) {
  // because the 1st line we have return value, we can now just acces the object's new value
  console.log(`${mark.fullName} has the higher BMI at ${mark.bmi}`);
} else {
  console.log(`They have the same BMI`);
}
