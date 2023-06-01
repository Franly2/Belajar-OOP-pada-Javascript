function Manager(firstName, lastName) {
  this.firstName = firstName;
  this.lastname = lastName;
  this.sayHello = function (nama) {
    console.log(`Hi ${nama}, my name is ${this.firstName}`);
  };
}

Manager.prototype.run = function () {
  console.log(`${this.firstName} is running`);
};

const eko = new Manager("eko", "khannedy");
console.log(eko);
eko.run();
