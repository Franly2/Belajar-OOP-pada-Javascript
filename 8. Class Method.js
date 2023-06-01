class Person {
  constructor(nama) {
    this.nama = nama;
  }
  sayHello(lawanBicara) {
    console.log(`Hello ${lawanBicara}, my name is ${this.nama}`);
  }
}

const budi = new Person("Budi");
budi.sayHello("Joko");
