import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Server is running on ${mongoose.connection.host}`.bgGreen.bold.black
    );
  } catch (error) {
    console.log(`${error}`.bgRed.bold);
  }
};
export default connectDB;
