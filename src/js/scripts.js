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
  set cylinderCount(cylinderCount) {
    this.#cylinderCount = cylinderCount;
  }
  get isRunning() {
    return this.#isRunning;
  }
  set isRunning(isRunning) {
    this.#isRunning = isRunning;
  }
}
class Transmission {
  #gearCount = 5;
  #type = "manual";
  constructor(gearCount, type) {
    this.gearCount = gearCount || this.gearCount;
    this.type = type || this.type;
  }
  get gearCount() {
    return this.#gearCount;
  }
  set gearCount(gearCount) {
    this.#gearCount = gearCount;
  }
  get type() {
    return this.#type;
  }
  set type(type) {
    this.#type = type;
  }
}
class Car {
  #make = "Honda";
  #model = "Civic";
  #year = 2000;
  #odometer = 0;
  constructor(make, model, year, odometer, engine) {
    this.make = make || this.make;
    this.model = model || this.model;
    this.year = year || this.year;
    this.odometer = odometer || this.odometer;
    this.engine = engine || new Engine();
  }
  get make() {
    return this.#make;
  }
  set make(make) {
    this.#make = make;
  }
  get model() {
    return this.#model;
  }
  set model(model) {
    this.#model = model;
  }
  get year() {
    return this.#year;
  }
  set year(year) {
    this.#year = year;
  }
  get odometer() {
    return this.#odometer;
  }
  set odometer(odometer) {
    this.#odometer = odometer;
  }

  StartEngine() {
    if (this.engine.isRunning) {
      throw new Error("Engine is already running");
    }
    else {
      this.engine.isRunning = true;
    }
  }

  StopEngine() {
    this.engine.isRunning = false;
  }
  drive(distance) {
    if (this.engine.isRunning) {
      this.odometer += distance;
    }
    else {
      throw new Error("Engine is not running");
    }
  }
}

// eslint-disable-next-line no-unused-vars
async function main() {
  const myCar = new Car();
  myCar.StartEngine();
  myCar.drive(100);
  myCar.StopEngine();
  myCar.StartEngine();
  myCar.drive(50);
  myCar.StopEngine();
  output(`${myCar.odometer}km`);
  output(JSON.stringify({
    ...myCar,
    make: myCar.make,
    model: myCar.model,
    year: myCar.year,
    odometer: myCar.odometer,
    engine: {
      ...myCar.engine,
      cylinderCount: myCar.engine.cylinderCount,
      isRunning: myCar.engine.isRunning,
    }
  }, null, 4));
}
