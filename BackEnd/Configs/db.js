import mongoose from "mongoose"
import { configDotenv } from "dotenv"

configDotenv();
async function connectToDatabase(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Successfully  connected to MongoDB");        
    }catch(error){
        console.error("Error Connecting to MongoDB:",error);
        process.exit(1);
    }
}

export default connectToDatabase;