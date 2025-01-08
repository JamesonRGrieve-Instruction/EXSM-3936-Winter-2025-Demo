// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  class Person {
    #birthDate; // Private fields prefixed with # CANNOT be changed from outside the object/class. This means we know 100% all values in it (so long as you only set it in the setter) MUST be validated according to said setter.
    constructor(firstName = "John", lastName = "Doe", birthDate = "January 1, 1970") {
      this.firstName = firstName || "John";
      this.lastName = lastName || "Doe";
      this.birthDate = birthDate || "January 1, 1970";
      this.hair = {
        color: "black",
        length: 5
      }
    }
    get birthDate() {
      return this.#birthDate.toUpperCase();
    }
    set birthDate(value) {
      if ((new Date(value)).toString() !== "Invalid Date") {
        this.#birthDate = value;
      };
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

  const me = new Person("James", "Grieve", "February 1, 1970");
  // me.firstName = "James";
  // me.lastName = "Grieve";
  me.birthDate = "Yes";
  const you = new Person();

  output(`${me.firstName} ${me.lastName}, born on ${me.birthDate} - ${me.calculateAge()} years old with ${me.hair.color} hair.`);
  output(`${you.firstName} ${you.lastName}, born on ${you.birthDate} - ${you.calculateAge()} years old.`);

}
