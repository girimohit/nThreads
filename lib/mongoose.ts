import mongoose from "mongoose";
let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) {
  // if (!uri) {
    throw new Error("Missing MongoDB URI");
  }

  if (isConnected) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    // await mongoose.connect(uri);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
};




// import mongoose from "mongoose";

// let isConnected = false; // Variable to track the connection status

// const uri = "mongodb+srv://mohit:pass@nthreads.0osqqos.mongodb.net/nthreads?appName=nThreads";

// export const connectToDB = async () => {
//   // Set strict query mode for Mongoose to prevent unknown field queries.
//   mongoose.set("strictQuery", true);

//   // if (!process.env.MONGODB_URL) return console.log("Missing MongoDB URL");
//   if (!uri) return console.log("Missing MongoDB URL");

//   // If the connection is already established, return without creating a new connection.
//   if (isConnected) {
//     console.log("MongoDB connection already established");
//     return;
//   }

//   try {
//     // await mongoose.connect(process.env.MONGODB_URL);
//     await mongoose.connect(uri);

//     isConnected = true; // Set the connection status to true
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.log(error);
//   }
// };
