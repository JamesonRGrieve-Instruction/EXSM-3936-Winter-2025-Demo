// eslint-disable-next-line no-unused-vars
/* global output, input */
// eslint-disable-next-line no-unused-vars
class InkTube {
  #inkAmountML = 150;
  constructor(inkAmountML) {
    this.inkAmountML = 1 // inkAmountML || this.inkAmountML;
  }
  get inkAmountML() {
    return this.#inkAmountML.toFixed(2);
  }
  set inkAmountML(value) {
    if (value < 0) {
      throw new Error("Ink level must be zero or more.");
    }
    else {
      this.#inkAmountML = Number(value);
    }
  }
}
class Pen {
  #brand = "Bic"; // Private fields prefixed with # CANNOT be changed from outside the object/class. This means we know 100% all values in it (so long as you only set it in the setter) MUST be validated according to said setter.
  #colour = "black";
  inkTube;
  constructor(brand, colour, inkAmountML) {
    this.brand = brand || this.brand;
    this.colour = colour || this.colour;
    this.inkTube = new InkTube(inkAmountML);
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
  write(numLetters) {
    try {
      this.inkTube.inkAmountML -= numLetters * 0.1;
    }
    catch (error) {
      console.log(error);
    }
  }

  toString() {
    return JSON.stringify({
      ...this,
      brand: this.brand,
      colour: this.colour
    }, null, 4); // This number is the indentation
  }
}

async function main() {



  const myPen = new Pen();
  myPen.write(100);
  myPen.write(42);
  myPen.write(200);
  output(myPen);
  output(myPen.inkTube.inkAmountML);


}
module.exports = { Pen, InkTube };