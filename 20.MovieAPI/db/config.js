import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();


const DATABASE_URL = process.env.DATABASE_URL;

const connectDB = () => {
    try {
        mongoose.connect(DATABASE_URL);
        console.log(`Database connected to URL: ${DATABASE_URL}`);
    }
    catch (error) {
        console.error(`Error connecting databse: ${error}`)
    }
}


export default connectDB;
