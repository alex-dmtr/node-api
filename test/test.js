var assert = require('assert')
const request = require('supertest')
const app = require('../app')


describe('Server', function() {

  let token = null
  const username = 'Kenobi'
  it('should login', function(done) {
    request(app)
      .post('/login')
      .send({username})
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
      .expect('Content-Type', /text/)
      .expect("General Kenobi", done)
  })
  it('should return username', function(done) {
    request(app)
      .get('/whoami')
      .set('Authorization', 'Bearer ' + token)
      .expect('Content-Type', /text/)
      .expect(username, done)
  })
})
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });
