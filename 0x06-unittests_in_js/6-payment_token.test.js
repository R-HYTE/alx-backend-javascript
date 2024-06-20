const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');
const expect = chai.expect;

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with a successful response when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch(done);
  });

  it('should reject with an error when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then(done)
      .catch(error => {
        expect(error).to.be.instanceOf(Error);
        expect(error.message).to.equal('API request failed');
        done();
      });
  });
});
