const express = require('express');
const User = require('./models/user-model');
const router = express.Router();

router
  .get('/', function(req, res, next) {
    User.find({}, function (err, users) {
      if (err) {
        throw err;
      } else {
        res.json(users);
        // res.render('users');
      }
    });
  })
  .post('/', function(req, res, next) {
    const newUser = User(req.swagger.params.user.value);

    newUser.save(function (err) {
      if (err) {
        throw err
      } else {
        res.json({message: 'OK'});
        // res.render('users');
      }
    });
  })
  .get('/:userId', function(req, res, next) {
    const userId = req.swagger.params.id.value;

    User.findById(userId, function (err, user) {
      if (err) {
        throw err;
      } else if (!user) {
        res.status(404).json({message: 'User not found'})
      } else {
        res.json({name: users.name, phone: users.phone, date_of_birth: users.date_of_birth});
        // res.render('users');
      }
    });
  })
  .put('/:userId', function(req, res, next) {
    const userId = req.swagger.params.id.value;
    const newUser = req.swagger.params.user.value;

    User.findByIdAndUpdate(userId, newUser, function (err, user) {
      if (err) {
        throw err;
      } else {
        res.json({message: 'OK'});
        // res.render('users');
      }
    });
  })
  .delete('/:userId', function(req, res, next) {
    const userId = req.swagger.params.id.value;

    User.findByIdAndRemove(userId, function (err) {
      if (err) {
        throw err;
      } else {
        res.json({message: 'OK'});
        // res.render('users');
      }
    });
  });
  
  module.exports = router;