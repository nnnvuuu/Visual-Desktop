const router = require("express").Router();
const User1 = require("../models/user1.model");
const JWT_SECRET = process.env.jwtSecret;
const bcrypt = require("bcrypt"); 
const jwt = require('jsonwebtoken');


router.post("/register", async(req,res)=> { 


const { email, password, passwordCheck, username } = req.body;


  
try {
  // Simple validation
  if (!email || !password || !username || !passwordCheck  ) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  if(password.length < 6){
    return res.status(400).json({ msg: 'the password needs to be at least 6 character long' });
  }


  if(password != passwordCheck){
    return res.status(400).json({ msg: 'need to enter the same password twitch' });
  }

  if(username.length < 3){
    return res.status(400).json({ msg: 'the username needs to be at least 3 character long' });
  }

  if(username.length > 10){
    return res.status(400).json({ msg: 'the username needs to be at most 10 character long' });
  }

   // Check for existing user
   const existingUser = await User1.findOne({ email:email });
   if (existingUser){
    return res.status(400).json({ msg: 'An account with this email address already exist'});
   }

    // Check for existing username
    const existingUsername = await User1.findOne({ username:username });
    if (existingUsername){
     return res.status(400).json({ msg: 'the username has already been used'});
    }


   const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error('Something went wrong with bcrypt');

    const hash = await bcrypt.hash(password, salt);
    if (!hash) throw Error('Something went wrong hashing the password');

    const newUser = new User1({
      username,
      email,
      password: hash
    });

    const savedUser = await newUser.save();
    if (!savedUser) throw Error('Something went wrong saving the user');

    const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, {
      expiresIn: 10000
    });

    res.status(200).json({
      token,
      user: {
        id: savedUser.id,
        username: savedUser.username,
        email: savedUser.email
      }
    });
        // window.location.href = "http://localhost:3000/SignUp";

  } catch (e) {
    
    res.status(400).json({ error: e.message });
  }
   
})

// Regular GET request returns all users
router.route('/').get((req, res) => {
  User1.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;