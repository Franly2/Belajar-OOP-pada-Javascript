 function Employee (firstName){
  this.firstName = firstName,
  this.sayHello = function(name){
    console.log(`Hi ${name}, my name is ${this.firstName}`)
  }
};

function Manager (firstName, lastName){
  this.lastname= lastName,
  Employee.call(this, firstName)
}

const eko = new Manager("eko", "khannedy")
console.log(eko)
eko.sayHello("joko")