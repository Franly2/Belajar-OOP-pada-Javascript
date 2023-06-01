class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }
  running(lawanBicara, firstName) {
    console.log(`Sorry ${lawanBicara},${this.firstName} is currently runnning`);
  }
}

class Teach extends Person {
  constructor(firstName, lastName) {
    super(firstName);
    this.lastName = lastName;
  }
  teaching(lawanBicara) {
    console.log(
      `Sorry ${lawanBicara},${this.firstName} ${this.lastName} is currently teaching`
    );
  }
}

const Andy = new Person("Andy");
Andy.running("Joko");
console.log(Andy);

const msBey = new Teach("Eko", "Khannedy");
msBey.teaching("Joko");
console.log(msBey);
