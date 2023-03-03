import { connect, connection } from "mongoose";

const mongoConnection: { isConnected: boolean | number } = {
  isConnected: false
};

export async function dbConnect() {
  if (mongoConnection.isConnected) return;

  const db = await connect(process.env.MONGODB_URI as string);
  mongoConnection.isConnected = db.connections[0].readyState;
  console.log("Database Name: ", db.connection.db.databaseName);
}

connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

connection.on("error", (error) => {
  console.log("Error connecting to MongoDB", error);
});
