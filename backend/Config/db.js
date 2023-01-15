import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


const connection = async () => {
    await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.obucu9c.mongodb.net/flipkart?retryWrites=true&w=majority`);
   
}

export default connection

