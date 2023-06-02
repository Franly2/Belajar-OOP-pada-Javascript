//
class Employee {}

class Manager {}

const eko = new Manager();
const budi = new Employee();

console.log(eko instanceof Employee);
console.log(budi instanceof Employee);

//! jika melakukan extends
// class Employee {}

// class Manager extends Employee {}

// const eko = new Manager();
// const budi = new Employee();

// console.log(eko instanceof Employee);
// console.log(budi instanceof Employee);
// * - jika  melakukan extends maka, eko instanceof Employee = true
