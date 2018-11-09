var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: 'Express'
  });
});

module.exports = router;


// test
/*router.get('/example/b', function (req, res, next) {
    console.log('response will be sent by the next function ...');
    // return res.send('Hello from B1!');
    next()
}, function (req, res) {
    return res.send('Hello from B2!');
});

var cb0 = function (req, res, next) {
    console.log('CB0');
    next();
}

var cb1 = function (req, res, next) {
    console.log('CB1');
    next();
}

var cb2 = function (req, res) {
    res.send('Hello from C!');
}

router.get('/example/c', [cb0, cb1, cb2]);*/

