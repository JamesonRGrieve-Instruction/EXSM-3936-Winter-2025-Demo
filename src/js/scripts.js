// eslint-disable-next-line no-unused-vars
/* global output, input */
class Engine {
  #cylinderCount = 4;
  #isRunning = false;
  constructor(cylinderCount, isRunning) {
    this.cylinderCount = cylinderCount || this.cylinderCount;
    this.isRunning = isRunning || this.isRunning;
  }
  get cylinderCount() {
    return this.#cylinderCount;
  }
  set cylinderCount(value) {
    this.#cylinderCount = value;
  }
  get isRunning() {
    return this.#isRunning;
  }
  set isRunning(value) {
    this.#isRunning = value;
  }
}
class Transmission {
  #gearCount = 5;
  #selectedGear = 'N';
  #type = "manual";
  constructor(gearCount, selectedGear, type) {
    this.gearCount = gearCount || this.gearCount;
    this.selectedGear = selectedGear || this.selectedGear;
    this.type = type || this.type;
  }
  get gearCount() {
    return this.#gearCount;
  }
  set gearCount(value) {
    this.#gearCount = value;
  }
  get selectedGear() {
    return this.#selectedGear;
  }
  set selectedGear(value) {
    this.#selectedGear = value;
  }
  get type() {
    return this.#type;
  }
  set type(value) {
    this.#type = value;
  }
}
class Vehicle {
  #make = "Honda";
  #model = "Civic";
  #year = 2000;
  #odometer = 0;
  constructor(make, model, year, odometer, engine, transmission) {
    this.make = make || this.make;
    this.model = model || this.model;
    this.year = year || this.year;
    this.odometer = odometer || this.odometer;
    this.engine = engine || new Engine();
    this.transmission = transmission || new Transmission();
  }
  get make() {
    return this.#make;
  }
  set make(value) {
    this.#make = value;
  }
  get model() {
    return this.#model;
  }
  set model(value) {
    this.#model = value;
  }
  get year() {
    return this.#year;
  }
  set year(value) {
    this.#year = value;
  }
  get odometer() {
    return this.#odometer;
  }
  set odometer(value) {
    this.#odometer = value;
  }

  startEngine() {
    if (this.engine.isRunning) {
      throw new Error("Engine is already running");
    }
    if (this.transmission.type === "manual" && this.transmission.selectedGear !== 'N') {
      throw new Error("Transmission is not in neutral");
    }
    if (this.transmission.type === "automatic" && !['P', 'N'].includes(this.transmission.selectedGear)) {
      throw new Error("Transmission is not in neutral or park");
    }
    else {
      this.engine.isRunning = true;
    }
  }

  stopEngine() {
    this.engine.isRunning = false;
  }
  shiftTransmission(targetGear) {
    this.transmission.selectedGear = targetGear;
  }
  drive(distance) {
    if (!this.engine.isRunning) {
      throw new Error("Engine is not running");
    }
    if (this.transmission.type === "manual" && this.transmission.selectedGear === 'N') {
      throw new Error("Transmission is in neutral, you cannot drive");
    }
    if (this.transmission.type === "automatic" && ['P', 'N'].includes(this.transmission.selectedGear)) {
      throw new Error("Transmission is in park or neutral, you cannot drive");
    }
    else {
      this.odometer += distance;
    }
  }
  objDump() {
    return {
      ...this,
      make: this.make,
      model: this.model,
      year: this.year,
      odometer: this.odometer,
      engine: {
        ...this.engine,
        cylinderCount: this.engine.cylinderCount,
        isRunning: this.engine.isRunning,
      },
      transmission: {
        ...this.transmission,
        gearCount: this.transmission.gearCount,
        selectedGear: this.transmission.selectedGear,
        type: this.transmission.type,
      },
    };
  }
  toString() {
    return JSON.stringify(this.objDump(), null, 4);
  }
}
class Car extends Vehicle {
  constructor(make, model, year, odometer, engine, transmission) {
    super(make, model, year, odometer, engine, transmission);
  }
}
class PickupTruck extends Vehicle {
  #bedLength = 7;
  constructor(make, model, year, odometer, bedLength, engine, transmission) {
    super(make, model, year, odometer, bedLength, engine, transmission);
    this.bedLength = bedLength || this.bedLength;
  }
  get bedLength() {
    return this.#bedLength;
  }
  set bedLength(value) {
    this.#bedLength = value;
  }
  objDump() {
    return {
      ...super.objDump(),
      bedLength: this.bedLength,
    };
  }
}

// eslint-disable-next-line no-unused-vars
async function main() {
  const myVehicle = new PickupTruck();
  myVehicle.startEngine();
  myVehicle.shiftTransmission("1");
  myVehicle.drive(100);
  myVehicle.shiftTransmission("N");
  myVehicle.stopEngine();
  myVehicle.startEngine();
  myVehicle.shiftTransmission("1");
  myVehicle.drive(50);
  myVehicle.shiftTransmission("N");
  myVehicle.stopEngine();
  output(`${myVehicle.odometer}km`);
  output(myVehicle);
}
