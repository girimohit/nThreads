import mongoose from "mongoose";

let isConnected = false;
let cachedPromise: Promise<typeof mongoose> | null = null;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) {
    throw new Error("Missing MongoDB URI");
  }

  if (isConnected) {
    // console.log("MongoDB already connected");
    return;
  }

  if (cachedPromise) {
    console.log("MongoDB connection attempt already in progress...");
    return cachedPromise;
  }

  try {
    console.log("Initializing MongoDB connection...");
    
    // Explicitly listing standard options for Atlas stability in Node.js
    cachedPromise = mongoose.connect(process.env.MONGODB_URI, {
      dbName: "nThreads",
      connectTimeoutMS: 10000,
      serverSelectionTimeoutMS: 10000,
      family: 4, // Force IPv4
    });

    await cachedPromise;
    isConnected = true;
    cachedPromise = null; // Clear the promise once resolved
    
    console.log("MongoDB connected successfully");
  } catch (error) {
    cachedPromise = null; // Clear the promise on failure
    console.error("MongoDB connection failed:", error);
    throw error;
  }
};

