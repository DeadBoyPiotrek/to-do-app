import { MongoClient } from 'mongodb';
var mongodb = require('mongodb');
// const uri = process.env.MONGODB_URI;

const uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.87zsw.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
const options = {};

let client;
let clientPromise;

// if (!process.env.MONGODB_URI) {
//   throw new Error('Please add your Mongo URI to .env.local');
// }

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export const getTasks = async () => {
  try {
    const client = await clientPromise;
    const db = await client.db();
    const data = await db.collection('tasks').find({}).toArray();
    const tasks = await JSON.parse(JSON.stringify(data));

    return tasks;
  } catch (e) {
    console.error(e);
    return e?.message;
  }
};
export const getTask = async id => {
  try {
    const client = await clientPromise;
    const db = await client.db();
    const data = await db
      .collection('tasks')
      .find({ _id: new mongodb.ObjectID(id) })

      .toArray();
    const task = await JSON.parse(JSON.stringify(data));

    return task;
  } catch (e) {
    console.error(e);
    return e?.message;
  }
};

// export const getTasks = async () => {};
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.

export default clientPromise;
