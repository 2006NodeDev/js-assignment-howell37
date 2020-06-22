/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/
// object literal
const employeeOl = {
  firstName: "ebony",
  lastName: "richards",
  age: 19,
};

//constructor function

function employeeConstructor(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

let newEmployee = new employeeConstructor("Kayla", "loo", 28);

//es6 class

class employeeClass {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

let secEmployee = new employeeConstructor("lu", "jai", 29);

console.log(employeeOl);
console.log(
  `I am ${secEmployee.firstName} ${secEmployee.lastName} and I am ${secEmployee.age} years old!`
);
console.log(
  `I am ${newEmployee.firstName} ${newEmployee.lastName} and I am ${newEmployee.age} years old!`
);
