const request = require('supertest');
const app = require('../app');
const assert = require('assert');

describe('GET /', () => {
  it('should return Hello World!', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello World!', done);
  });
});
