var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	const test = 'OK'
	res.render('index.html', { test })
})

module.exports = router;
