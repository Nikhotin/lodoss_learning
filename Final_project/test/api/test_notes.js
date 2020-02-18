const should = require('should');
const request = require('supertest');
const server = require('../../app');

describe('routers', function() {

  describe('notes', function() {

    describe('GET /notes', function() {

      it('should return all notes in DB', function(done) {

        request(server)
          .get('/notes')
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.should.be.an.instanceOf(Object);
            res.body.should.be.instanceOf(Array);
            
            console.log(res.body);

            res.body.forEach(function(note) {
              note.should.be.an.instanceOf(Object);
            })

            done();
          });
      });

    });

    describe('POST /notes', function() {

      it('should add new note in DB', function(done) {

        request(server)
          .post('/notes')
          .send({user_id: 5, title: 'Какая-то заметка', content: 'Заметка о чем-то'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.message.should.eql('Заметка была успешно создана');

            done();
          });
      });

    });

    describe('GET /notes/:noteId', function() {

      it('should return note with id = noteId', function(done) {

        request(server)
          .get('/notes/12')
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

    describe('PUT /notes/noteId', function() {

      it('should edit user with id = userId', function(done) {
        const noteEdit = {content: 'Заметка о последнем альбоме Eminem'}
        request(server)
          .put('/notes/19')
          .send(noteEdit)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.message.should.eql('Заметка была успешно обновлена');

            done();
          });
      });

    });

    describe('DELETE /notes/noteId', function() {

      it('should delete note with id = noteId', function(done) {

        request(server)
          .delete('/note/16')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.message.should.eql('Заметка была успешно удалена');

            done();
          });
      });

    });

  });

});