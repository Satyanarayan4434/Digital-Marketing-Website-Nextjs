import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  // Inside connectDB function, before mongoose.connect
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };
    // Log the options being used RIGHT BEFORE connecting
    console.log("CONNECT_DB_OPTIONS:", JSON.stringify(opts));
    // Log partial URI to confirm it's being read (mask password part)
    console.log(
      "CONNECT_DB_URI_START:",
      MONGODB_URI
        ? MONGODB_URI.substring(0, MONGODB_URI.indexOf(":") + 3) + "..."
        : "URI_NOT_FOUND"
    );

    cached.promise = mongoose.connect(MONGODB_URI, opts).catch((err) => {
      console.error("!!! MONGOOSE CONNECT ERROR:", err); // Log connection error directly
      cached.promise = null;
      throw err;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

// Connect to the database immediately when this module is imported
connectDB()
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

export default connectDB;
