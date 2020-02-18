const express = require('express');
const User = require('./models/user-model');
const router = express.Router();

router
  .get('/', function(req, res, next) {
    User.findAll().then(users => {
      res.json(users);
    });
  })
  .post('/', function(req, res, next) {
    const newUser = req.body;

    User.create(newUser).then(newUser => {
      res.json({ message: `Пользователь был успешно создан` });
    });
  })
  .get('/:userId', function(req, res, next) {
    const userId = req.params.userId;

    User.findOne({
      where: {
        id: userId
      }
    }).then(user => {
      res.json(user);
    });
  })
  .put('/:userId', function(req, res, next) {
    const userId = req.params.userId;
    const newUser = req.body;

    User.update(newUser, { 
      where: {
        id: userId
      }
    }).then(user => {
      res.json({ message: `Данные пользователя были успешно обновлены` });
    });
  })
  .delete('/:userId', function(req, res, next) {
    const userId = req.params.userId;

    User.destroy({
      where: {
        id: userId
      }
    }).then(() => {
      res.json({ message: `Пользователь был успешно удален` });
    });
  })
  
  module.exports = router;