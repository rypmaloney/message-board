var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Oh boy!",
    user: "Rick",
    added: new Date()
  },
  {
    text: "What. it. do!",
    user: "Stacy",
    added: new Date()
  },
];





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.post('/new', (req, res, next) =>{
  console.log(req.body)

  messages.push({text: req.body.message, user: req.body.name, added: new Date()});
  res.redirect('/')
  res.end()
})

module.exports = router;
