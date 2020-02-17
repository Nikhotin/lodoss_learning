const should = require('should');
const request = require('supertest');
const server = require('../../app');

describe('authenticate', function() {

  describe('login', function() {

    describe('POST /', function() {

       
      it('should authenticate user', function(done) {

        request(server)
          .post('/login')
          .send({username: 'Next', password: 'q1q1'})
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
  
            res.body.message.should.eql('Welcome Next                ');
  
            done();
          });
      });      

    });

  });

});
