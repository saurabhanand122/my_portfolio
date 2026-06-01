import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

const getClientPromise = () => {
  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }

  if (process.env.NODE_ENV === 'development') {
    // Keep one client across hot reloads in development.
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else if (!clientPromise) {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }

  return clientPromise;
};

export default getClientPromise;
