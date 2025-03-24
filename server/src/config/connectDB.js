import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`> MongoDB Connected as: ${conn.connection.name} (${conn.connection.host})`);
  } catch (error) {
    console.error(`> Error while connecting to MongoDB: ${error.message}`);
  }
}

export default connectDB;
