const {MongoClient} = require('mongodb');
const assert = require('assert').strict;
require('dotenv').config();

async function testRegistration(client, input) {
  var notTaken = true;

  console.log("Attempting to register: " + input.username + " " + input.password);

  // Iterate through all entries and check their usernames
  await client.db("login_db").collection("login_collection").find({}).forEach(
    function(myDoc) {
      if(myDoc.username == input.username) { notTaken = false; }
    });

  if (notTaken) {
    console.log(input.username + " is not taken! Adding entry to database.\n");
    await client.db("login_db").collection("login_collection").insertOne(input);
  } else {
    console.log(input.username + " is already taken. Returning False.\n");
  }

  return notTaken;
}

async function testLogin(client, input) {
  var entryFound = false;
  var id = null;

  console.log("Attempting to login: " + input.username + " " + input.password);

  await client.db("login_db").collection("login_collection").find({}).forEach(
    function(myDoc) {
      if(myDoc.username == input.username && myDoc.password == input.password) {
        entryFound = true;
        id = myDoc._id;
      }
    });
  if (entryFound) {
    console.log("Input: { " + input.username + " , " + input.password + " } has a matching entry.\n");
    console.log("Entry id: " + id);
  } else {
    console.log("Input: { " + input.username + " , " + input.password + " } could not be found. Returning false.\n");
  }
  return entryFound;
}

async function runLoginRegisterTests(client){
  // THIS LINE DELETES ALL ENTRIES IN THE COLLECTION
  await client.db("login_db").collection("login_collection").deleteMany({});

  // Register Tests
  console.log("REGISTER TESTS");
  console.log("----------------------------");

  inputRegister1 = {username: "test_username", password: "test_password"};
  inputRegister2 = {username: "test_username", password: "test_password"};
  inputRegister3 = {username: "ltkicQ7PHo", password: "bjV1FdpeY7"};

  assert.deepEqual(await testRegistration(client, inputRegister1), true);
  assert.deepEqual(await testRegistration(client, inputRegister2), false);
  assert.deepEqual(await testRegistration(client, inputRegister3), true);

  console.log("----------------------------");

  // Login Tests
  console.log("REGISTER TESTS");
  console.log("----------------------------");

  inputLogin1 = {username: "test_username", password: "test_password"};
  inputLogin2 = {username: "123", password: "456"};
  inputLogin3 = {username: "ltkicQ7PHo", password: "bjV1FdpeY7"};

  assert.deepEqual(await testLogin(client, inputLogin1), true);
  assert.deepEqual(await testLogin(client, inputLogin2), false);
  assert.deepEqual(await testLogin(client, inputLogin3), true);

  console.log("----------------------------");

  // THIS LINE DELETES ALL ENTRIES IN THE COLLECTION
  await client.db("login_db").collection("login_collection").deleteMany({});
}

async function main(){
  const uri = process.env.ATLAS_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
      await client.connect(); // Connect to MongoDB cluster
      await runLoginRegisterTests(client);
  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error);
