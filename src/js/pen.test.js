// src/js/pen.test.js
describe('InkTube', () => {
    let InkTube;

    beforeAll(() => {
        // Import the InkTube class
        InkTube = require('./scripts.js').InkTube;
    });

    test('should initialize with default ink amount', () => {
        const inkTube = new InkTube();
        expect(inkTube.inkAmountML).toBe("150.00");
    });

    test('should initialize with custom ink amount', () => {
        const inkTube = new InkTube(100);
        expect(inkTube.inkAmountML).toBe("100.00");
    });

    test('should throw error when setting negative ink amount', () => {
        const inkTube = new InkTube();
        expect(() => {
            inkTube.inkAmountML = -10;
        }).toThrow('Ink level must be zero or more.');
    });

    test('should correctly set valid ink amount', () => {
        const inkTube = new InkTube();
        inkTube.inkAmountML = 75.5;
        expect(inkTube.inkAmountML).toBe("75.50");
    });
});

describe('Pen', () => {
    let Pen;

    beforeAll(() => {
        // Import the Pen class
        Pen = require('./scripts.js').Pen;
    });

    test('should initialize with default values', () => {
        const pen = new Pen();
        expect(pen.brand).toBe('Bic');
        expect(pen.colour).toBe('black');
        expect(pen.inkTube.inkAmountML).toBe("150.00");
    });

    test('should initialize with custom values', () => {
        const pen = new Pen('Parker', 'blue', 100);
        expect(pen.brand).toBe('Parker');
        expect(pen.colour).toBe('blue');
        expect(pen.inkTube.inkAmountML).toBe("100.00");
    });

    test('should correctly write and decrease ink amount', () => {
        const pen = new Pen();
        pen.write(100); // Should use 10ml of ink (0.1ml per letter)
        expect(pen.inkTube.inkAmountML).toBe("140.00");
    });

    test('should handle multiple write operations', () => {
        const pen = new Pen();
        pen.write(100); // -10ml
        pen.write(42);  // -4.2ml
        pen.write(200); // -20ml
        expect(pen.inkTube.inkAmountML).toBe("115.80");
    });

    test('should correctly convert to string', () => {
        const pen = new Pen('Parker', 'blue');
        const penString = pen.toString();
        const parsedPen = JSON.parse(penString);
        expect(parsedPen.brand).toBe('Parker');
        expect(parsedPen.colour).toBe('blue');
    });
});