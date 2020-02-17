const should = require('should');
const request = require('supertest');
const server = require('../../app');

describe('routers', function() {

  describe('hashtags', function() {

    describe('GET /hashtags', function() {

      it('should return all hashtags in DB', function(done) {

        request(server)
          .get('/hashtags')
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.should.be.an.instanceOf(Object);
            res.body.should.be.instanceOf(Array);

            console.log(res.body);

            res.body.forEach(function(hashtag) {
              hashtag.should.be.an.instanceOf(Object);
            })

            done();
          });
      });

    });

    describe('POST /hashtags', function() {

      it('should add new hashtag in DB', function(done) {

        request(server)
          .post('/hashtags')
          .send({note_id: 12, hashtag: 'Best'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.message.should.eql('Хэштег был успешно создан');

            done();
          });
      });

    });

    describe('GET /hashtags/:hashtagId', function() {

      it('should return hashtag with id = hashtagId', function(done) {

        request(server)
          .get('/hashtags/5')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
          
            res.body[0].should.be.an.instanceOf(Object);
            res.body.should.be.instanceOf(Array).and.have.lengthOf(1);

            done();
          });
      });

    });

    describe('PUT /hashtags/hashtagsId', function() {

      it('should edit hashtag with id = hashtagId', function(done) {
        const hashtagEdit = {hashtag: 'Good'}
        request(server)
          .put('/hashtags/7')
          .send(hashtagEdit)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.message.should.eql('Хэштег был успешно обновлен');

            done();
          });
      });

    });

    describe('DELETE /hashtags/hashtagId', function() {

      it('should delete hashtag with id = hashtagId', function(done) {

        request(server)
          .delete('/hashtags/3')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.message.should.eql('Хэштег был успешно удален');

            done();
          });
      });

    });

  });

});