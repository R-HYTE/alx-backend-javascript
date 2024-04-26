export default class HolbertonClass {
  constructor(size, location) {
    this._size = size; // Store size in a private variable
    this._location = location; // Store location in a private variable
  }

  // Method to handle the conversion of an object to a number
  valueOf() {
    return this._size;
  }

  // Method to handle the conversion of an object to a string
  toString() {
    return this._location;
  }
}
