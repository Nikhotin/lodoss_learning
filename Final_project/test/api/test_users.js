const should = require('should');
const request = require('supertest');
const server = require('../../app');

describe('routers', function() {

  describe('users', function() {

    describe('GET /users', function() {

      it('should return all users in DB', function(done) {

        request(server)
          .get('/users')
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.should.be.an.instanceOf(Object);
            res.body.should.be.instanceOf(Array);

            res.body.forEach(function(user) {
              user.should.be.an.instanceOf(Object);
            })

            done();
          });
      });

    });

    describe('POST /users', function() {

      it('should add new user in DB', function(done) {

        request(server)
          .post('/users')
          .send({name: 'Jade', phone: '88005553535', date_of_birth: '1983-04-03'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.message.should.eql('Пользователь был успешно создан');

            done();
          });
      });

    });

    describe('GET /users/:userId', function() {

      it('should return user with id = userId', function(done) {

        request(server)
          .get('/users/15')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
          
            res.body.should.be.an.instanceOf(Object);
            res.body.should.be.instanceOf(Array).and.have.lengthOf(1);

            done();
          });
      });

    });

    describe('PUT /users/userId', function() {

      it('should edit user with id = userId', function(done) {
        const userEdit = {phone: '0011111111'}
        request(server)
          .put('/users/12')
          .send(userEdit)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.message.should.eql('Данные пользователя были успешно обновлены');

            done();
          });
      });

    });

    describe('DELETE /users/userId', function() {

      it('should delete user with id = userId', function(done) {

        request(server)
          .delete('/users/11')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.message.should.eql('Пользователь был успешно удален');

            done();
          });
      });

    });

  });

});
