const express = require('express');
const Notes = require('./models/note-model');
const router = express.Router();

router
  .get('/', function(req, res, next) {
    Note.find({}, function (err, notes) {
      if (err) {
        throw err;
      } else {
        res.json(notes);
        // res.render('notes');
      }
    });
  })
  .post('/', function(req, res, next) {
    const newNote = Note(req.swagger.params.note.value);

    newNote.save(function (err) {
      if (err) {
        throw err
      } else {
        res.json({message: 'OK'});
        // res.render('notes');
      }
    });
  })
  .get('/:noteId', function(req, res, next) {
    const noteId = req.swagger.params.id.value;

    Note.findById(noteId, function (err, note) {
      if (err) {
        throw err;
      } else if (!note) {
        res.status(404).json({message: 'Note not found'})
      } else {
        res.json({ title: note.title, content: note.content, add_time: note.add_time });
        // res.render('notes');
      }
    });
  })
  .put('/:noteId', function(req, res, next) {
    const noteId = req.swagger.params.id.value;
    const newNote = req.swagger.params.note.value;

    Note.findByIdAndUpdate(noteId, newNote, function (err, note) {
      if (err) {
        throw err;
      } else {
        res.json({message: 'OK'});
        // res.render('notes');
      }
    });
  })
  .delete('/:hashtagId', function(req, res, next) {
    const noteId = req.swagger.params.id.value;

    Note.findByIdAndRemove(noteId, function (err) {
      if (err) {
        throw err;
      } else {
        res.json({message: 'OK'});
        // res.render('notes');
      }
    });
  });

module.exports = router;

