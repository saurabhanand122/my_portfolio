import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

if (process.env.NODE_ENV === 'development') {
  // In development, use a global variable so the MongoClient is not
  // constantly re-created across hot-reloads.
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new client for each serverless instance
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
