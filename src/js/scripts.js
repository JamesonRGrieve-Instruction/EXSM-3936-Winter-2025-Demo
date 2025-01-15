// eslint-disable-next-line no-unused-vars
/* global output, input */
class WritingImplement {
  #brand = "Dixon"; // Private fields prefixed with # CANNOT be changed from outside the object/class. This means we know 100% all values in it (so long as you only set it in the setter) MUST be validated according to said setter.
  constructor(brand) {
    this.#brand = brand || this.#brand;
  }
  get brand() {
    return this.#brand;
  }
  set brand(value) {
    this.#brand = value;
  }
}

class Pencil extends WritingImplement {
  #lengthMM = 200;
  constructor(brand, lengthMM) {
    super(brand);
    this.lengthMM = lengthMM;
  }
  get lengthMM() {
    return this.#lengthMM.toFixed(2);
  }
  set lengthMM(value) {
    if (value < 0) {
      throw new Error("Ink level must be zero or more.");
    }
    else {
      this.#lengthMM = Number(value);
    }
  }
  write(numLetters) {
    try {
      this.lengthMM -= numLetters * 0.05;
    }
    catch (error) {
      console.log(error);
    }
  }
}
class Pen extends WritingImplement {
  #colour = "black";
  #inkAmountML = 150;
  constructor(brand, colour, inkAmountML) {
    super(brand);
    this.colour = colour || this.colour;
    this.inkAmountML = inkAmountML || this.inkAmountML;
  }

  get colour() {
    return this.#colour;
  }
  set colour(value) {
    this.#colour = value;
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
// eslint-disable-next-line no-unused-vars
async function main() {
  const myPen = new Pen();
  myPen.write(100);
  myPen.write(42);
  myPen.write(200);
  output(myPen);
  output(myPen.inkAmountML);
}
// module.exports = { Pen, InkTube };