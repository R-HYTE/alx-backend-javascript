export default class Building {
  constructor(sqft) {
    // Check if this instance is not directly of Building and if the subclass
    // hasn't defined evacuationWarningMessage
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft; // Set square footage via the setter implicitly
  }

  // Setter for sqft allows the modification of square footage
  set sqft(sqft) {
    this._sqft = sqft;
  }

  // Getter for sqft allows reading the square footage
  get sqft() {
    return this._sqft;
  }
}
