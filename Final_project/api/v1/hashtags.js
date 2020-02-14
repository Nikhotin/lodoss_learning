const express = require('express');
const Hashtag = require('./models/hashtag-model');
const router = express.Router();

router
  .get('/', function(req, res, next) {
    Hashtag.findAll().then(hashtags => {
      res.render('hashtags', { hashtags: hashtags });
    });
  })
  .post('/', function(req, res, next) {
    const newHashtag = Hashtag(req.params.hashtag);

    Hashtag.create(newHashtag).then(newHashtag => {
      res.render('hashtags', { message: `Хэштег ${newHashtag.hashtag} с ID ${newHashtag.id} был успешно создан` });
    });
  })
  .get('/:hashtagId', function(req, res, next) {
    const hashtagId = req.params.hashtagId;

    Hashtag.findAll({
      where: {
        id: hashtagId
      }
    }).then(hashtag => {
      res.render('hashtags', { hashtags: hashtag });
    });
  })
  .put('/:hashtagId', function(req, res, next) {
    const hashtagId = req.params.hashtagId;
    const newHashtag = Hashtag(req.params.hashtag);

    Hashtag.update(newHashtag, { 
      where: {
        id: hashtagId
      }
    }).then(hashtag => {
      res.render('hashtags', { message: `Хэштег с ID ${hashtag.id} был успешно обновлен` });
    });
  })
  .delete('/:hashtagId', function(req, res, next) {
    const hashtagId = req.params.hashtagId;
    let tag;
    let id;

    Hashtag.findAll({
      where: {
        id: hashtagId
      }
    }).then(hashtag => {
      tag = hashtag.hashtag;
      id = hashtag.id;
    })
    .destroy({
      where: {
        id: hashtagId
      }
    }).then(() => {
      res.render('hashtags', { message: `Хэштег ${tag} с ID ${id} был успешно удален` });
    });
  })

module.exports = router;
