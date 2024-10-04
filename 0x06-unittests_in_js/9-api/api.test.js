api.test.js

const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const API_URL = 'http://localhost:7865';

  it('Correct status code?', (done) => {
    request.get(API_URL, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get(API_URL, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('Other: No error on request?', (done) => {
    request.get(API_URL, (error) => {
      expect(error).to.be.null;
      done();
    });
  });
});

describe('Cart page', () => {
  const API_URL = 'http://localhost:7865';

  it('Correct status code when :id is a number', (done) => {
    request.get(`${API_URL}/cart/12`, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result when :id is a number', (done) => {
    request.get(`${API_URL}/cart/12`, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('Correct status code when :id is NOT a number (=> 404)', (done) => {
    request.get(`${API_URL}/cart/hello`, (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});