const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 9 when inputs are 6 and 3', function() {
    assert.strictEqual(calculateNumber(6, 3), 9);
  });

  it('should return 4 when inputs are 1 and 2.5', function() {
    assert.strictEqual(calculateNumber(1, 2.5), 4);
  });

  it('should return 7 when inputs are 1.5 and 4.7', function() {
    assert.strictEqual(calculateNumber(1.5, 4.7), 7);
  });

  it('should return 5 when inputs are 1.4 and 3.9', function() {
    assert.strictEqual(calculateNumber(1.4, 3.9), 5);
  });

  it('should return 0 when inputs are 0 and 0', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle negative numbers correctly', function() {
    assert.strictEqual(calculateNumber(-1.5, -2.5), -3);
    assert.strictEqual(calculateNumber(-1.4, -1.6), -3);
    assert.strictEqual(calculateNumber(-1.6, -2.6), -5);
  });

  it('should handle mixed positive and negative numbers', function() {
    assert.strictEqual(calculateNumber(1.4, -3.6), -3);
    assert.strictEqual(calculateNumber(1.5, -5.5), -3);
    assert.strictEqual(calculateNumber(1.6, -3.6), -2);
  });
});
