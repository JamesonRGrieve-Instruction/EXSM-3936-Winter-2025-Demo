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
        else if (isNaN(value)) {
            throw new Error("Length must be a number.");
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
        else if (isNaN(value)) {
            throw new Error("Width must be a number.");
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
        return new Rectangle(this.colour, Math.max(this.length, this.width), Math.max(this.length, this.width));
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
        else if (isNaN(value)) {
            throw new Error("Base must be a number.");
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
        else if (isNaN(value)) {
            throw new Error("Height must be a number.");
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
        return new Rectangle(this.colour, Math.max(this.base, this.height), Math.max(this.base, this.height));
    }
}
class Hexagon extends Shape {

    #sideLength = 200;
    constructor(colour, sideLength) {
        super(colour);
        this.sideLength = sideLength || this.sideLength;
    }
    get sideLength() {
        return this.#sideLength.toFixed(2);
    }
    set sideLength(value) {
        if (value <= 0) {
            throw new Error("Side length must be greater than zero.");
        }
        else if (isNaN(value)) {
            throw new Error("Side length must be a number.");
        }
        else {
            this.#sideLength = Number(value);
        }
    }
    get perimeter() {
        return this.sideLength * 6;
    }
    get area() {
        return (3 * Math.sqrt(3) / 2) * Math.pow(this.sideLength, 2);
    }
    contain() {
        return new Rectangle(this.colour, this.sideLength * 2, this.sideLength * 2);
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
        else if (isNaN(value)) {
            throw new Error("Radius must be a number.");
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
        return new Rectangle(this.colour, this.diameter, this.diameter);
    }
}

function outputShapes(shapes) {
    let perimeterSum = 0;
    let areaSum = 0;
    let containingAreaSum = 0;
    for (const shape of shapes) {
        perimeterSum += shape.perimeter;
        areaSum += shape.area;
        containingAreaSum += shape.contain().area;
    }

    output(`Total Perimeter: ${perimeterSum.toFixed(2)}`);
    output(`Total Area: ${areaSum.toFixed(2)}`);
    output(`Total Area of Containing Squares: ${containingAreaSum.toFixed(2)}`);
}

// eslint-disable-next-line no-unused-vars
async function main() {
    const shapes = [];
    let choice;
    do {
        output("Select a Shape to Create\n1. Rectangle\n2. Triangle\n3. Circle\n4. Hexagon\n0. Exit\n\n");
        choice = (await input("Enter your choice: ")).trim();
        try {
            if (choice === "1") {
                const newRectangle = new Rectangle("Black");
                let valid = false;
                do {
                    try {
                        newRectangle.length = await input("Enter the length of the rectangle: ");
                        valid = true;
                    }
                    catch (e) {
                        output(e.message, "error");
                    }
                } while (!valid);
                valid = false;
                do {
                    try {
                        newRectangle.width = await input("Enter the width of the rectangle: ");
                        valid = true;
                    }
                    catch (e) {
                        output(e.message, "error");
                    }
                } while (!valid);
                shapes.push(newRectangle);
                outputShapes(shapes);
            }
            else if (choice === "2") {
                shapes.push(new Triangle("Black", await input("Enter the base of the triangle: "), await input("Enter the height of the triangle: ")));
                outputShapes(shapes);
            }
            else if (choice === "3") {
                shapes.push(new Circle("Black", await input("Enter the radius of the circle: ")));
                outputShapes(shapes);
            }
            else if (choice === "4") {
                shapes.push(new Hexagon("Black", await input("Enter the side length of the hexagon: ")));
                outputShapes(shapes);
            }
            else if (choice === "0") {
            }
            else {
                output("Invalid choice. Please try again.", "error");
            }
        }
        catch (e) {
            output("Invalid input for selected shape. Please try again.", "error");
        }
    } while (choice !== "0");
}
