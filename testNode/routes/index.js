var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res, next){ 
	console.log("One "+req.originalUrl);
  res.setHeader('Last-Modified', (new Date()).toUTCString());
  next(); 
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/name', function(req, res, next) {
	  res.render('index', { title: 'Names' });
	});
router.get('/logo', function(req, res, next) {
	 // res.setHeader('Last-Modified', (new Date()).toUTCString());
	  res.render('finallyDone', { title: 'Names' });
	});	


module.exports = router;
