const {MongoClient} = require('mongodb');
const assert = require('assert').strict;
require('dotenv').config();

/* Adds entry to database */
async function testNotepadText(client, input) {
  console.log("Testing initialization of " + input.username + " with text: " + input.text);
  var existing = false;
  await client.db("login_db").collection("login_collection").find({}).forEach(
    function(myDoc) {
      if(myDoc.username == input.username) existing = true;
    });
  if(!existing) return true;
  else return false;
}

async function runTests(client) {
  /* Deletes all entries in collection */

  await client.db("login_db").collection("login_collection").deleteMany({});

  inputNote1 = {username: "test_username", text: ""};
  inputNote2 = {username: "test_username", text: "nada"};
  inputNote3 = {username: "ltkicQ7PHo", text: "1234"};

  assert.deepEqual(await testNotepadText(client, inputNote1), true);
  assert.deepEqual(await testNotepadText(client, inputNote2), true);
  assert.deepEqual(await testNotepadText(client, inputNote3), true);
}

async function main() {
  const uri = process.env.ATLAS_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
      await client.connect(); // Connect to MongoDB cluster
      await runTests(client);
  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main();
