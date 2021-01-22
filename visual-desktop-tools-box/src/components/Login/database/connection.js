// Following code adapted from: https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database
const {MongoClient} = require('mongodb');
require('dotenv').config();


// Adds a new entry for login and console.logs the ID. Listings are objects.
async function addLogin(client, input){
  const res = await client.db("login_db").collection("login_collection").insertOne(input);
  console.log(`Added listing with id: ${res.insertedId}`);
}

// Looks for possible database entry for given user + pass combination and console.logs the ID
async function findID(client, user, pass) {
  const input = {"username": user, "password": pass};
  const res = await client.db("login_db").collection("login_collection").findOne(input);
  if(res == null) {
    console.log('Document not found. Returning null.')
    return null
  } else {
    console.log(`Retrieved listing with id: ${res._id}`);
    return res;
  }
}

// Retrieves a list of databases in the cluster and prints the results.
async function listDatabases(client){
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function main(){
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri = process.env.ATLAS_URI;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); // No warnings


  try {
      await client.connect(); // Connect to MongoDB cluster
      // The following functions inserts the username and password to the database and retrieves it
      const user = "test_username1";
      const pass = "test_password1";
      await addLogin(client, { username: user, password: pass}) // Create test login
      await findID(client, user, pass);
      // await listDatabases(client);

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

// Handling frontend
function getFormData(){
  // Grab name and password from fields
  var name=document.getElementById('username').value;
  var email=document.getElementById('password').value;

  console.log(name);
  console.log(email);


  alert("Form submitted!!!\n Username is: " + name + "\nEmail is: " + email);
}

main().catch(console.error);
