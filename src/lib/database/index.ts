import mongoose, { ConnectionStates } from "mongoose";
import { handleError } from "../utils";

type Connection = {
    isConnected?: null | ConnectionStates;
}

const MONGODB_URI = process.env.MONGODB_URI;

const connection:Connection = {}

export const connectToDB = async () => {
    try {
        if(connection.isConnected) {
            console.log("Using existing connection")
            return;
        }
        const db = await mongoose.connect(MONGODB_URI, {
            dbName: "madadirot"
        });
        connection.isConnected = db.connections[0].readyState;
      } catch (error) {
        handleError(error);
      }
}