// eslint-disable-next-line no-unused-vars
/* global output, input */
class Person {
  constructor(firstName = "John", middleName = "Gertrude", lastName = "Doe") {
    if (this.constructor === Person) {
      throw new Error(`${this.constructor.name} is an abstract class.`);
    }
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  }
  greet() {
    throw new Error(`greet() is an abstract method and must be implemented in the ${this.constructor.name} class.`);
  }
}
class Student extends Person {
  constructor(firstName, middleName, lastName) {
    super(firstName, middleName, lastName);
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  greet() {
    return `Hello, my name is ${this.fullName} and I am a student!`;
  }
}
class Lawyer extends Person {
  constructor(firstName, middleName, lastName) {
    super(firstName, middleName, lastName);
  }
  get fullName() {
    return `${this.firstName} ${this.middleName[0]}. ${this.lastName} Esq.`;
  }
  greet() {
    return `Hello, my name is ${this.fullName} and I am a lawer!`;
  }
}
class BusDriver extends Person {
  constructor(firstName, middleName, lastName) {
    super(firstName, middleName, lastName);
  }
  greet() {
    return `Hello, my name is ${this.fullName} and I drive a bus!`;
  }
}
// eslint-disable-next-line no-unused-vars
async function main() {
  const people = [new Student("John", "Gertrude", "Doe"), new BusDriver("Bob", "Alice", "Doe"), new Lawyer("Jane", "Timothy", "Doe"), new BusDriver("Terrence", "Tiamat", "Doe")];
  for (const person of people) {
    output(person.greet());
  }
}
