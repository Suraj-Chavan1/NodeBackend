import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        // console.log(MONGODB_URI)
        const connect = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\nMongoDB connected !! DB HOST: ${connect.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;
