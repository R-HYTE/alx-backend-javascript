const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

const { expect } = chai;
let consoleSpy;

beforeEach(() => {
  consoleSpy = sinon.spy(console, 'log');
});

afterEach(() => {
  consoleSpy.restore();
});

describe('sendPaymentRequestToApi', () => {
  it('should log out correct message when called with 100, 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log out correct message when called with 10, 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});