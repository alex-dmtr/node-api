var assert = require('assert')
const request = require('supertest')
const app = require('../server')

describe('Server', function() {
  it('should quote Star Wars', function(done) {
    request(app)
      .get('/hello/there')
      .expect('Content-Type', /json/)
      .expect("\"General Kenobi\"", done)
  })
})
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });
