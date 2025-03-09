import express from "express";
import mongoose from "mongoose"; 
import cors from "cors";
import { PORT, DB_URL } from "./config.js";
import booksRoute from "./routes/booksRoute.js"

const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", booksRoute);

mongoose.connect(DB_URL)
  .then(() =>{
    console.log("App connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`)
    });
  })
  .catch((error) => {
    console.log(error);
  });
