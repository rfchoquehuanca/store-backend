'user strict';

const express = require('express');

const router = express.Router();

router.get('/', function(req, res){
  res.send('Hello Sales')
})

module.exports = router;
