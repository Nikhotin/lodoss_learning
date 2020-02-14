const express = require('express');
const Note = require('./models/note-model');
const router = express.Router();

router
  .get('/', function(req, res, next) {
    Note.findAll().then(notes => {
      res.render('notes', { notes: notes });
    });
  })
  .post('/', function(req, res, next) {
    const newNote = Note(req.params.note);

    Note.create(newNote).then(newNote => {
      res.render('notes', { message: `Заметка ${newNote.title} с ID ${newNote.id} была успешно создана` });
    });
  })
  .get('/:noteId', function(req, res, next) {
    const noteId = req.params.noteId;

    Note.findAll({
      where: {
        id: noteId
      }
    }).then(note => {
      res.render('notes', { notes: note });
    });
  })
  .put('/:noteId', function(req, res, next) {
    const noteId = req.params.noteId;
    const newNote = Note(req.params.note);

    Note.update(newNote, { 
      where: {
        id: noteId
      }
    }).then(note => {
      res.render('notes', { message: `Данные заметки с ID ${note.id} были успешно обновлены` });
    });
  })
  .delete('/:noteId', function(req, res, next) {
    const noteId = req.params.noteId;
    let title;
    let id;

    Note.findAll({
      where: {
        id: noteId
      }
    }).then(note => {
      title = note.title;
      id = note.id;
    })
    .destroy({
      where: {
        id: noteId
      }
    }).then(() => {
      res.render('notes', { message: `Заметка ${title} с ID ${id} была успешно удалена` });
    });
  })

module.exports = router;

