const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber - SUM', function() {
  it('should return 5 when inputs are 1.5 and 2.5', function() {
    assert.strictEqual(calculateNumber('SUM', 1.5, 2.5), 5);
  });

  it('should return 5 when inputs are 1 and 3.5', function() {
    assert.strictEqual(calculateNumber('SUM', 1, 3.5), 5);
  });
});

describe('calculateNumber - SUBTRACT', function() {
  it('should return -1 when inputs are 2 and 2.5', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 2, 2.5), -1);
  });

  it('should return -6 when inputs are 1.2 and 6.5', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 6.5), -6);
  });
});

describe('calculateNumber - DIVIDE', function() {
  it('should return 2 when inputs are 1.5 and 1.4', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.5, 1.4), 2);
  });

  it('should return "Error" when inputs are 8.4 and 0', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 8.4, 0), 'Error');
  });

  it('should return 1 when inputs are 5 and 5', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 5, 5), 1);
  });
});
