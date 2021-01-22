/**
 * This file has two main methods: inputRegistration and inputLogin
 *
 * inputRegistration: takes in an object {username:"..." , password:"..."}
 *      and returns a boolean value representing whether or not the registration processed.
 *
 * inputLogin: takes in an object {username:"..." , password:"..."} and returns
 *      an id representing the registered entry. If no entry is found, null is returned.
 */

const {MongoClient} = require('mongodb');
require('dotenv').config();

async function inputRegistration(input) {
  // Setup connection to database
  const uri = process.env.ATLAS_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();

  var notTaken = true;

  // Iterate through all entries and check their usernames
  await client.db("login_db").collection("login_collection").find({}).forEach(
    function(myDoc) { if(myDoc.username == input.username) { notTaken = false; } });

  if (notTaken) {
    console.log("Register Successful!")
    await client.db("login_db").collection("login_collection").insertOne(input);
  } else {
    console.log(input.username + " is already taken. Returning False.\n");
  }

  return notTaken;
}

async function inputLogin(input) {
  // Setup connection to database
  const uri = process.env.ATLAS_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();

  var id = null;

  await client.db("login_db").collection("login_collection").find({}).forEach(
    function(myDoc) {
      if(myDoc.username == input.username && myDoc.password == input.password) {
        id = myDoc._id;
      }
    });
  console.log("Entry found with id: " + id);
  return id;
}

/* Get User Info */

const inquirer = require('inquirer');
const util = require('util');

var questions = [
  {
    type: 'input',
    name: 'signup',
    message: 'Signup [1] or Login [0]?'
  },
  {
    type: 'input',
    name: 'user',
    message: 'Username: '
  },
  {
    type: 'input',
    name: 'pass',
    message: 'Password'
  }
]
var signup, user, pass;
inquirer.prompt(questions).then(answers => {
  input = {username: answers.user, password: answers.pass};
  // console.log(util.inspect(input));
  console.log(Number(answers.signup), answers.signup);
  if(Number(answers.signup)) {
    console.log('Signing up...');
    console.log(inputRegistration(input));
  } else {
    console.log('Logging In...');
    console.log(inputLogin(input));
  }
});
