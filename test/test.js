var assert = require('assert')
const request = require('supertest')
const app = require('../app')


describe('Server', function() {

  let token = null
  before('should login', function(done) {
    request(app)
      .get('/login/kenobi')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        token = res.body
        done(err)
      })
  })
  it('should quote Star Wars', function(done) {
    request(app)
      .get('/hello/there')
      .set('Authorization', 'Bearer ' + token)
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
