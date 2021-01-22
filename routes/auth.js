


const router = require('express').Router();
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
let User = require('../models/user1.model');
const auth = require('../middleware/auth');
const JWT_SECRET = process.env.jwtSecret;



router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    // Check for existing user
    const user = await User.findOne({ email });
    if (!user) throw Error('User does not exist');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error('Invalid credentials');

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: 10000 });
    if (!token) throw Error('Couldnt sign the token');

    res.status(200).json({
      token,
      user: {
        id: user._id,
        username: user.username, //wo zuo wan gai le 10/26
        email: user.email
      }
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

router.get('/user', auth, async (req, res) => {
  try {
    //i dont want password to show
    const user = await User.findById(req.user.id).select('-password'); 
    if (!user) throw Error('User does not exist');
    res.json(user);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});


 
  module.exports = router;