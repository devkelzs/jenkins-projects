const request = require('supertest');
const app = require('./app');  // relative path to app.js
const assert = require('assert');

describe('GET /', () => {
  it('should return Hello World!', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello World!', done);
  });
});
