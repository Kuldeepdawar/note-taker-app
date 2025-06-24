import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connection connected");
  } catch (error) {
    console.error("Error connecting with DB");
    process.exit(1);
  }
};
