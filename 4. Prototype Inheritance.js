// Manager.prototype = Object.create(Employee.prototype);

// function Manager(firstName) {
//   this.firstName = firstName;
// }

// function Employee(firstName) {
//   this.firstName = firstName;
// }

// Manager.prototype.makan = function (nama) {
//   console.log(`Hi ${nama}, saya masih makan `);
// };

// Employee.prototype.menyapu = function (nama) {
//   console.log(`Hi ${nama}, saya masih menyapu`);
// };

// const eko = new Manager("eko");
// const budi = new Employee("budi");

// eko.menyapu("joko");

const a = 4;
const b = 2;

if (a < b) {
  console.log(`${a} lebih kecil dari ${b}`);
} else if (a === b) {
  console.log(`${a} sama dengan ${b}`);
} else {
  console.log(`${a} lebih besar dari ${b}`);
}
