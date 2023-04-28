//factoiral code
function factorial(num) {
    if (num === 0) {
      return 1;
    }
    else {
      return num * factorial(num - 1);
    }
  }

//Person class code
  class Person {
    constructor(firstName, lastName, yearOfBirth) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.yearOfBirth = yearOfBirth;
    }
  
    getAge() {
      const current_year = new Date().getFullYear();
      return current_year - this.yearOfBirth;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }

//Person object test code
var person = new Person("Sami", "Ahmed", 2000);
console.log(person.getAge()); //outputs 2023 - 2000
console.log(person.getFullName()); //outputs Sami Ahmed