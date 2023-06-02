class Person {
  say(name) {
    if (name) {
      this.#sayWithName(name);
    } else {
      this.#sayWithoutName(name);
    }
  }

  #sayWithName(name) {
    console.log(`Hello, my name is ${name}`);
  }
  #sayWithoutName() {
    console.log(`Hello`);
  }
}

const budi = new Person("Budi");
budi.say("Budi");
