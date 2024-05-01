// Run Mongose
import dotenv from "dotenv";
import mongoose from "mongoose";

//Connect to MongoDB
dotenv.config();
const dbURL = process.env.MONGODB_URI;
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conneected to database");
  })
  .catch((error) => {
    console.log(error);
  });

// Design Schema
let clientSchema = mongoose.Schema(
  {
    email: String,
  },
  { timestamps: true }
);

//Build Model
let Client = mongoose.model("clients", clientSchema);

//Export Model
export default Client;
