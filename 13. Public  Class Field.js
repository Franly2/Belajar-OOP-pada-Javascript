class Person {
  firstName;
  lastName;
  balance = 0;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {}
}

const eko = new Person("budi", "khannedy");
console.log(eko);
