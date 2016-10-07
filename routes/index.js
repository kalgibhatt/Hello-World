var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET hello World. */
router.get('/helloWorld', function(req, res, next) {
	if(false)
	{
		res.render('helloWorld', { title: 'Hello World' });
	}
	else
	{
		next();
	}
});

router.get('/helloWorld', function(req, res, next) {
	res.render('helloWorld', { title: 'Hi Kalgi here' });
});

module.exports = router;