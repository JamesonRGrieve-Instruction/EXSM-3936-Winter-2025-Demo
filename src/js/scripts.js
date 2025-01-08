// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  class Person {
    constructor(firstName = "John", lastName = "Doe", birthDate = "January 1, 1970") {
      this.firstName = firstName || "John";
      this.lastName = lastName || "Doe";
      this.birthDate = birthDate || "January 1, 1970";
    }
    calculateAge() {
      const today = new Date();
      const birthDate = new Date(this.birthDate);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    }
  }

  const me = new Person("James", "Grieve", null);
  // me.firstName = "James";
  // me.lastName = "Grieve";
  const you = new Person();

  output(`${me.firstName} ${me.lastName}, born on ${me.birthDate} - ${me.calculateAge()} years old.`);
  output(`${you.firstName} ${you.lastName}, born on ${you.birthDate} - ${you.calculateAge()} years old.`);


}
