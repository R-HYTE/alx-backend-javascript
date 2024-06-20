const chai = require('chai');
const { expect } = chai;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber - SUM', function() {
  it('should return 5 when inputs are 1.5 and 2.5', function() {
    expect(calculateNumber('SUM', 1.5, 2.5)).to.equal(5);
  });

  it('should return 5 when inputs are 1 and 3.5', function() {
    expect(calculateNumber('SUM', 1, 3.5)).to.equal(5);
  });
});

describe('calculateNumber - SUBTRACT', function() {
  it('should return -1 when inputs are 2 and 2.5', function() {
    expect(calculateNumber('SUBTRACT', 2, 2.5)).to.equal(-1);
  });

  it('should return -6 when inputs are 1.2 and 6.5', function() {
    expect(calculateNumber('SUBTRACT', 1.2, 6.5)).to.equal(-6);
  });
});

describe('calculateNumber - DIVIDE', function() {
  it('should return 2 when inputs are 1.5 and 1.4', function() {
    expect(calculateNumber('DIVIDE', 1.5, 1.4)).to.equal(2);
  });

  it('should return "Error" when inputs are 8.4 and 0', function() {
    expect(calculateNumber('DIVIDE', 8.4, 0)).to.equal("Error");
  });

  it('should return 1 when inputs are 5 and 5', function() {
    expect(calculateNumber('DIVIDE', 5, 5)).to.equal(1);
  });
});