var express = require('express');
var router = express.Router();

/* can get '/' and not '/new' because the path is declared in APP.js*/
router.get('/', function(req, res, next) {
    res.render('form', { title: 'Message Board'});
});

module.exports = router;