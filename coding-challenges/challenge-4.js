let john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.mass / (this.height * this.height);
  }
};

console.log(john.calcBMI());
