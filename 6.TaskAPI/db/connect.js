import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL;


const connectDB = async () => {
    try {
        mongoose.connect(DATABASE_URL);
        console.log(`Database connected to url ${DATABASE_URL} successfully!`)
    } catch (error) {
        console.error(`Error connecting db: ${error}`);
    }
}


export default connectDB;
