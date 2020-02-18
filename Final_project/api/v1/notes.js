const express = require('express');
const Note = require('./models/note-model');
const router = express.Router();

router
  .get('/', function(req, res, next) {
    Note.findAll().then(notes => {
      res.json(notes);
    });
  })
  .post('/', function(req, res, next) {
    const newNote = req.body;

    Note.create(newNote).then(newNote => {
      res.json({ message: `Заметка была успешно создана` });
    });
  })
  .get('/:noteId', function(req, res, next) {
    const noteId = req.params.noteId;
    
    Note.findOne({
      where: {
        id: noteId
      }
    }).then(note => {
      res.json(note);
    });
  })
  .put('/:noteId', function(req, res, next) {
    const noteId = req.params.noteId;
    const newNote = req.body;

    Note.update(newNote, { 
      where: {
        id: noteId
      }
    }).then(note => {
      res.json({ message: `Заметка была успешно обновлена` });
    });
  })
  .delete('/:noteId', function(req, res, next) {
    const noteId = req.params.noteId;

    Note.destroy({
      where: {
        id: noteId
      }
    }).then(() => {
      res.json({ message: `Заметка была успешно удалена` });
    });
  })

module.exports = router;

