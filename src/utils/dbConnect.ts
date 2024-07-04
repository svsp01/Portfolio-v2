import mongoose, { Connection } from 'mongoose';

interface GlobalMongoose {
  conn: Connection | null;
  promise: Promise<Connection> | null;
}

declare global {
  var mongoose: GlobalMongoose;
}

const MONGO_URI: any = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable inside .env.local');
}

if (!global.mongoose) {
  global.mongoose = {
    conn: null,
    promise: null,
  };
}

async function dbConnect(): Promise<Connection> {
  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    const opts = {
      bufferCommands: false,
    };

    global.mongoose.promise = mongoose.connect(MONGO_URI, opts).then((mongoose) => {
      return mongoose.connection;
    });
  }

  global.mongoose.conn = await global.mongoose.promise;
  return global.mongoose.conn;
}

export default dbConnect;
