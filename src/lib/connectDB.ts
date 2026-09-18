import mongoose from "mongoose";

export async function connectDB() {
    const MONGO_URL = process.env.MONGO_URL!;

    try {
        await mongoose.connect(MONGO_URL)
        console.log("DB is connected!")
        
    } catch (error) {
        console.log("DB is not connected successfully!", error) 
    }
}