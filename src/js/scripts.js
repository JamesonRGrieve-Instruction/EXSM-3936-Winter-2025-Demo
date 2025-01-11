// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
async function main() {
  class Pen {
    #brand = "Bic"; // Private fields prefixed with # CANNOT be changed from outside the object/class. This means we know 100% all values in it (so long as you only set it in the setter) MUST be validated according to said setter.
    #colour = "black";
    #inkLevel = 100;
    constructor(brand, colour, inkLevel) {
      this.brand = brand || this.brand;
      this.colour = colour || this.colour;
      this.inkLevel = inkLevel || this.inkLevel;
    }
    get brand() {
      return this.#brand;
    }
    set brand(value) {
      this.#brand = value;
    }
    get colour() {
      return this.#colour;
    }
    set colour(value) {
      this.#colour = value;
    }
    get inkLevel() {
      return this.#inkLevel;
    }
    set inkLevel(value) {
      if (value < 0 || value > 100) {
        throw new Error("Ink level must be between 0 and 100 - it is a percentage.");
      }
      else {
        this.#inkLevel = value;
      }
    }
    write(numLetters) {
      try {
        this.inkLevel -= numLetters * 0.5;
      }
      catch (error) {
        output(error);
      }
    }
  }

  const myPen = new Pen();
  myPen.write(100);
  myPen.write(42);
  myPen.write(200);
  output(myPen.inkLevel);
}
