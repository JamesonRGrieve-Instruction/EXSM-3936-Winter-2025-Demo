// eslint-disable-next-line no-unused-vars
/* global output, input */
class Shape {
    #colour = "Black"; // Private fields prefixed with # CANNOT be changed from outside the object/class. This means we know 100% all values in it (so long as you only set it in the setter) MUST be validated according to said setter.
    constructor(colour) {
        if (this.constructor === Shape) {
            throw new Error("Shape is an abstract class.");
        }
        this.#colour = colour || this.#colour;
    }
    get colour() {
        return this.#colour;
    }
    set colour(value) {
        this.#colour = value;
    }
    get perimeter() {
        throw new Error(`perimeter() is an abstract property and must be implemented in the ${this.constructor.name} class.`);
    }
    get area() {
        throw new Error(`area() is an abstract property and must be implemented in the ${this.constructor.name} class.`);
    }
    contain() {
        throw new Error(`contain() is an abstract method and must be implemented in the ${this.constructor.name} class.`);
    }
}

class Rectangle extends Shape {
    #length = 200;
    #width = 200;
    constructor(colour, length, width) {
        super(colour);
        this.length = length || this.length;
        this.width = width || this.width;

    }
    get length() {
        return this.#length.toFixed(2);
    }
    set length(value) {
        if (value <= 0) {
            throw new Error("Length must be greater than zero.");
        }
        else {
            this.#length = Number(value);
        }
    }
    get width() {
        return this.#width.toFixed(2);
    }
    set width(value) {
        if (value <= 0) {
            throw new Error("Width must be greater than zero.");
        }
        else {
            this.#width = Number(value);
        }
    }
    get isSquare() {
        return this.length === this.width;
    }
    get perimeter() {
        return (this.length * 2) + (this.width * 2);
    }
    get area() {
        return this.length * this.width;
    }
    contain() {

    }
}
class Triangle extends Shape {
    #base = 200;
    #height = 200;
    constructor(colour, base, height) {
        super(colour);
        this.base = base || this.base;
        this.height = height || this.height;

    }
    get base() {
        return this.#base.toFixed(2);
    }
    set base(value) {
        if (value <= 0) {
            throw new Error("Base must be greater than zero.");
        }
        else {
            this.#base = Number(value);
        }
    }
    get height() {
        return this.#height.toFixed(2);
    }
    set height(value) {
        if (value <= 0) {
            throw new Error("Height must be greater than zero.");
        }
        else {
            this.#height = Number(value);
        }
    }
    get perimeter() {
        // Calculate half the base
        const halfBase = this.base / 2;

        // Calculate the length of the equal sides using the Pythagorean theorem
        const sideLength = Math.sqrt(Math.pow(halfBase, 2) + Math.pow(this.height, 2));

        // Calculate the perimeter
        return this.base + 2 * sideLength;
    }
    get area() {
        return (this.base * this.height) / 2;
    }
    contain() {

    }
}
class Circle extends Shape {
    #radius = 200;
    constructor(colour, radius) {
        super(colour);
        this.radius = radius || this.radius;
    }
    get radius() {
        return this.#radius.toFixed(2);
    }
    set radius(value) {
        if (value <= 0) {
            throw new Error("Radius must be greater than zero.");
        }
        else {
            this.#radius = Number(value);
        }
    }
    get diameter() {
        return this.radius * 2;
    }
    get circumference() {
        return this.diameter * Math.PI;
    }
    get perimeter() {
        return this.circumference;
    }
    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    contain() {

    }
}

// eslint-disable-next-line no-unused-vars
async function main() {
    const myPencilsAndPens = [
        new Rectangle(),
        new Triangle(),
        new Circle(),
        new Rectangle()
    ];
    const myPen = new Triangle();
    output(myPen.inkAmountWithUnits);
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