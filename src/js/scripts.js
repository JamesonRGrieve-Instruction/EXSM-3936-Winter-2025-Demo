// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  class Person {
    constructor(firstName, lastName, birthDate) {
      this.firstName = firstName || "John";
      this.lastName = lastName || "Doe";
      this.birthDate = birthDate || "January 1, 1970";
    }

  }

  const me = new Person("James", "Grieve");
  // me.firstName = "James";
  // me.lastName = "Grieve";
  const you = new Person();

  output(`${me.firstName} ${me.lastName}, born on ${me.birthDate}.`);
  output(`${you.firstName} ${you.lastName}, born on ${you.birthDate}.`);


}
