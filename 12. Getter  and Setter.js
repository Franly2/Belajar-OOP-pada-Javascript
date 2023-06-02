class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const name = value.split(" ");
    this.firstName = name[0];
    this.lastName = name[1];
  }
}

const budi = new Person("Eko", "Khannedy");
console.log(budi);
console.log(budi.fullName);

budi.fullName = "Budi Khannedy";
console.log(budi);
