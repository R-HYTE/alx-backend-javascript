function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  // Create an array from set elements that start with the specified startString
  const result = Array.from(set).reduce((accumulator, item) => {
    if (typeof item === 'string' && item.startsWith(startString)) {
      accumulator.push(item.slice(startString.length));
    }
    return accumulator;
  }, []);

  // Join the modified elements with a dash
  return result.join('-');
}

export default cleanSet;
