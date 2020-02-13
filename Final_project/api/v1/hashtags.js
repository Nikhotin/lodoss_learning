const express = require('express');
const Hashtag = require('./models/hashtag-model');
const router = express.Router();

router
  .get('/', function(req, res, next) {
    Hashtag.find({}, function (err, hashtags) {
      if (err) {
        throw err;
      } else {
        res.json(hashtags);
        // res.render('hashtags');
      }
    });
  })
  .post('/', function(req, res, next) {
    const newHashtag = Hashtag(req.swagger.params.hashtag.value);

    newHashtag.save(function (err) {
      if (err) {
        throw err
      } else {
        res.json({message: 'OK'});
        // res.render('hashtags');
      }
    });
  })
  .get('/:hashtagId', function(req, res, next) {
    const hashtagId = req.swagger.params.id.value;

    Hashtag.findById(hashtagId, function (err, hashtag) {
      if (err) {
        throw err;
      } else if (!hashtag) {
        res.status(404).json({message: 'Hashtag not found'})
      } else {
        res.json({ hashtag: hashtag.hashtag });
        // res.render('hashtags');
      }
    });
  })
  .put('/:hashtagId', function(req, res, next) {
    const hashtagId = req.swagger.params.id.value;
    const newHashtag = req.swagger.params.hashtag.value;

    Hashtag.findByIdAndUpdate(hashtagId, newHashtag, function (err, hashtag) {
      if (err) {
        throw err;
      } else {
        res.json({message: 'OK'});
        // res.render('hashtags');
      }
    });
  })
  .delete('/:hashtagId', function(req, res, next) {
    const hashtagId = req.swagger.params.id.value;

    Hashtag.findByIdAndRemove(hashtagId, function (err) {
      if (err) {
        throw err;
      } else {
        res.json({message: 'OK'});
        // res.render('hashtags');
      }
    });
  });

module.exports = router;
