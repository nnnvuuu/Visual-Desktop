const router = require('express').Router();
let User = require('../models/user.model');

// Regular GET request returns all users
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST request for add creates a new user and makes the text empty for the notepad
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const text = '';
  const dates = Array.from("-".repeat(31));
  const color = 'plain';
  const fontSize = 16;

  const newUser = new User({username, text, dates, color, fontSize});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// GET request given ID returns the User
router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE request given ID deletes the User
router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(user => res.json('User Deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


// POST request to /update/:id given ID updates User's text
router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.text = req.body.text;
      user.color = req.body.color;
      user.fontSize = req.body.fontSize;
      user.save()
        .then(() => res.json('User Text updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// POST request to /update/dates/:id given ID updates User's custom dates
router.route('/update/dates/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.dates = req.body.dates;
      user.save()
        .then(() => res.json('User Dates updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
