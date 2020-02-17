const express = require('express');
const Hashtag = require('./models/hashtag-model');
const router = express.Router();

router
  .get('/', function(req, res, next) {
    Hashtag.findAll().then(hashtags => {
      res.json(hashtags );
    });
  })
  .post('/', function(req, res, next) {
    const newHashtag = req.body;

    Hashtag.create(newHashtag).then(newHashtag => {
      res.json({ message: `Хэштег был успешно создан` });
    });
  })
  .get('/:hashtagId', function(req, res, next) {
    const hashtagId = req.params.hashtagId;

    Hashtag.findAll({
      where: {
        id: hashtagId
      }
    }).then(hashtag => {
      res.json(hashtag);
    });
  })
  .put('/:hashtagId', function(req, res, next) {
    const hashtagId = req.params.hashtagId;
    const newHashtag = req.body;

    Hashtag.update(newHashtag, { 
      where: {
        id: hashtagId
      }
    }).then(hashtag => {
      res.json({ message: `Хэштег был успешно обновлен` });
    });
  })
  .delete('/:hashtagId', function(req, res, next) {
    const hashtagId = req.params.hashtagId;

    Hashtag.destroy({
      where: {
        id: hashtagId
      }
    }).then(() => {
      res.json({ message: `Хэштег был успешно удален` });
    });
  })

module.exports = router;
