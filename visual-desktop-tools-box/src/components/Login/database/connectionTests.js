const {MongoClient} = require('mongodb');
const assert = require('assert').strict;
require('dotenv').config();


async function testDBInsertion(client, input) {
  const res = await client.db("login_db").collection("login_collection").insertOne(input);
  return res.ops[0]; // Return first and only operation
}

async function testDBRetrieval(client, input) {
  await client.db("login_db").collection("login_collection").insertOne(input); // Insert input
  const res = await client.db("login_db").collection("login_collection").findOne({}, {sort:{$natural:-1}}); // Retrieve Input
  return {username: res.username, password: res.password};
}

async function runDBTests(client){
  // Trivial Test
  assert.equal(1,1);

  // Database Insertion Tests
  inputInsert1 = {username: "test_username", password: "test_password"};
  inputInsert2 = {username: "", password: ""};
  inputInsert3 = {username: "ltkicQ7PHo", password: "bjV1FdpeY7"};

  assert.deepEqual(await testDBInsertion(client, inputInsert1), inputInsert1);
  assert.deepEqual(await testDBInsertion(client, inputInsert2), inputInsert2);
  assert.deepEqual(await testDBInsertion(client, inputInsert3), inputInsert3);


  // Database Retrieval Tests
  // Comparator var is needed as input gets modified by MongoDB
  inputRet1 = {username: "test_username", password: "test_password"};
  inputRet2 = {username: "", password: ""};
  inputRet3 = {username: "ltkicQ7PHo", password: "bjV1FdpeY7"};

  inputRetComp1 = Object.assign({}, inputRet1);
  inputRetComp2 = Object.assign({}, inputRet2);
  inputRetComp3 = Object.assign({}, inputRet3);

  assert.deepEqual(await testDBRetrieval(client, inputRet1), inputRetComp1);
  assert.deepEqual(await testDBRetrieval(client, inputRet2), inputRetComp2);
  assert.deepEqual(await testDBRetrieval(client, inputRet3), inputRetComp3);

  // THIS LINE DELETES ALL ENTRIES IN THE COLLECTION
  // await client.db("login_db").collection("login_collection").deleteMany({});
}

async function main(){
  const uri = process.env.ATLAS_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
      await client.connect(); // Connect to MongoDB cluster
      await runDBTests(client); // Make DB calls
  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

main().catch(console.error);
