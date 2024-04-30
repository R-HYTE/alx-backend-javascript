const createInt8TypedArray = (length, position, value) => {
  // Create a new ArrayBuffer with the given length
  const buffer = new ArrayBuffer(length);
  // Create a DataView for more flexible operations on the ArrayBuffer
  const view = new DataView(buffer);
  // Check if the position is valid (within the bounds of the array buffer)
  if (position < 0 || position >= length) throw new Error('Position outside range');
  // Set the value at the specified position as an Int8
  view.setInt8(position, value);
  // Return the DataView for inspection
  return view;
};

export default createInt8TypedArray;
