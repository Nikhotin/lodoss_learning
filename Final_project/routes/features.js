const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('features', { title: 'Features' });
});
module.exports = router;
