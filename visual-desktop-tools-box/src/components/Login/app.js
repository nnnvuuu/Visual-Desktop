var express = require('express');
var app = express();

var bodyParser = require("body-parser");


const { check, validationResult } = require('express-validator');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit-student-data', [
    check('username','Username must be AlphaNumerical').isAlphanumeric(),
    check('username','Username cannot be empty').notEmpty(),
    check('password','Password must be AlphaNumerical').isAlphanumeric(),
    check('password','Password cannot be empty').notEmpty()
  ], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
      }

    const username = req.body.username;
    const password = req.body.password;


    res.send(username + ' Logged in Successfully!');
  })



var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
