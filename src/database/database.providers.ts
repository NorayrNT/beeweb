require("dotenv").config();
import * as  mongoose from "mongoose";
import { DB_CONNECTION } from "./constants";

export const databaseProvider = [
    {
        provide: DB_CONNECTION,
        useFactory: (): Promise<typeof mongoose> => mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.d5xcf.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)        
    }
]