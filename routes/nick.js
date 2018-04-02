var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond nick!!');
  console.log("12312313");
});

module.exports = router;
