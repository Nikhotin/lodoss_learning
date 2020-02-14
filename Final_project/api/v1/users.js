const express = require('express');
const User = require('./models/user-model');
const router = express.Router();

router
  .get('/', function(req, res, next) {
    User.findAll().then(users => {
      res.render('users', { users: users });
    });
  })
  .post('/', function(req, res, next) {
    const newUser = User(req.params.user);

    User.create(newUser).then(newUser => {
      res.render('users', { message: `Пользователь ${newUser.name} с ID ${newUser.id} был успешно создан` });
    });
  })
  .get('/:userId', function(req, res, next) {
    const userId = req.params.userId;

    User.findAll({
      where: {
        id: userId
      }
    }).then(user => {
      res.render('users', { users: user });
    });
  })
  .put('/:userId', function(req, res, next) {
    const userId = req.params.userId;
    const newUser = User(req.params.user);

    User.update(newUser, { 
      where: {
        id: userId
      }
    }).then(user => {
      res.render('users', { message: `Данные пользователя с ID ${user.id} были успешно обновлены` });
    });
  })
  .delete('/:userId', function(req, res, next) {
    const userId = req.params.userId;
    let name;
    let id;

    User.findAll({
      where: {
        id: userId
      }
    }).then(user => {
      name = user.name;
      id = user.id;
    })
    .destroy({
      where: {
        id: userId
      }
    }).then(() => {
      res.render('users', { message: `Пользователь ${name} с ID ${id} был успешно удален` });
    });
  })
  
  module.exports = router;