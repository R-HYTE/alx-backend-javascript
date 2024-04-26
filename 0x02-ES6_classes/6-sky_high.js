import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Getter for sqft from the parent class (Building) already exists, so it can be used directly
  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override the abstract method from Building
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
