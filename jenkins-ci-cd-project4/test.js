const request = require('supertest');
const app = require('../app'); // adjust path if needed
const assert = require('assert');

describe('GET /', () => {
  it('should return Hello World!', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello World!', done);
  });
});
