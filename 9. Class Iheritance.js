class Person {
  running(nama) {
    console.log(`${nama} is currently runnning`);
  }
}

class Teach extends Person {
  teaching(nama) {
    console.log(`${nama} is currently teaching`);
  }
}

const mrJohn = new Person();
mrJohn.running("Mr John");

const msBey = new Teach();
msBey.running("Ms Bey");
