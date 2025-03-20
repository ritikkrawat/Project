const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://twitter_admin:mvYv4VCJzRy67MaD@cluster0.ddasw44.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    const postCollection = client.db('database').collection('posts'); //This is post collection
    const userCollection = client.db('database').collection('users'); //This is user collection

    // Get posts
    app.get('/post', async (req, res) => {
      const posts = (await postCollection.find().toArray()).reverse();
      res.send(posts);
    });

    // Post a new post
    app.post('/post', async (req, res) => {
      const post = req.body;
      const result = await postCollection.insertOne(post);
      res.send(result);
    });    

    // Get users
    app.get('/user', async (req, res) => {
      const users = await userCollection.find().toArray();
      res.send(users);
    });

    // Register a new user
    app.post('/register', async (req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    // Get logged-in user by email
    app.get('/loggedInUser', async (req, res) => {
      const email = req.query.email;
      const user = await userCollection.find({ email: email }).toArray();
      res.send(user);
    });

    // Get posts by user email
    app.get('/userPost', async (req, res) => {
      const email = req.query.email;
      const posts = (await postCollection.find({ email: email }).toArray()).reverse();
      res.send(posts);
    });

    // Update user profile
    app.patch('/userUpdates/:email', async (req, res) => {
      const email = req.params.email;
      const profile = req.body;
      const options = { upsert: true };
      const updateDoc = { $set: profile };
      const result = await userCollection.updateOne({ email: email }, updateDoc, options);
      res.send(result);
    });

  } catch (error) {
    console.log(error);
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Ritik Rawat!');
});

app.listen(port, () => {
  console.log(`Twitter listening on port ${port}`);
});