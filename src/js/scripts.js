// eslint-disable-next-line no-unused-vars
/* global output, input */
class WritingImplement {
  #brand = "Dixon"; // Private fields prefixed with # CANNOT be changed from outside the object/class. This means we know 100% all values in it (so long as you only set it in the setter) MUST be validated according to said setter.
  constructor(brand) {
    if (this.constructor === WritingImplement) {
      throw new Error("WritingImplement is an abstract class.");
    }
    this.#brand = brand || this.#brand;
  }
  get brand() {
    return this.#brand;
  }
  set brand(value) {
    this.#brand = value;
  }
  write(numLetters) {
    throw new Error(`write() is an abstract method and must be implemented in the ${this.constructor.name} class.`);
  }
}

class Pencil extends WritingImplement {
  #lengthMM = 200;
  constructor(brand, lengthMM) {
    super(brand);
    this.lengthMM = lengthMM || this.lengthMM;
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

  toString() {
    return JSON.stringify({
      ...this,
      brand: this.brand,
      lengthMM: this.lengthMM
    }, null, 4); // This number is the indentation
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
      this.inkAmountML -= numLetters * 0.1;
    }
    catch (error) {
      console.log(error);
    }
  }

  toString() {
    return JSON.stringify({
      ...this,
      brand: this.brand,
      colour: this.colour,
      inkAmountML: this.inkAmountML
    }, null, 4); // This number is the indentation
  }
}
class PaintBrush extends WritingImplement {
  constructor(brand) {
    super(brand);
  }
}

// eslint-disable-next-line no-unused-vars
async function main() {
  const myPencilsAndPens = [
    new Pencil(),
    new Pen(),
    new PaintBrush(),
    new Pencil()
  ];
  for (const item of myPencilsAndPens) {
    item.write(100);
    item.write(42);
    item.write(200);
    output(item);
  }
  // const myPen = new Pen();
  // myPen.write(100);
  // myPen.write(42);
  // myPen.write(200);
  // output(myPen);
  // output(myPen.inkAmountML);


  // const myPencil = new Pencil();
  // myPencil.write(100);
  // myPencil.write(42);
  // myPencil.write(200);
  // output(myPencil);
  // output(myPencil.lengthMM);
}
// module.exports = { Pen, Pencil, WritingImplement };