import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  static get [Symbol.species]() {
    return Car; // Ensure cloning returns a Car instance
  }

  // Optionally, if you want to expose range in some way, add a getter here
  get range() {
    return this._range;
  }
}
