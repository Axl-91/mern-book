import express from "express";
import mongoose from "mongoose"; 
import { PORT, DB_URL } from "./config.js";
import { Book } from "./models/bookModel.js";

const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  console.log(request)
  return response.status(200).send("Welcome to MERN")
});

app.post("/books", async (request, response) => {
  console.log("POST Book")
  console.log(request.body)
  try {
    if (!request.body.title || !request.body.author || !request.body.publishYear) {
      return response.status(400).send({
        message: "Send all the required fields: title, author publishYear"
      });
    };
    
    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book)
    
  } catch (error) {
    
  }
});

mongoose.connect(DB_URL)
  .then(() =>{
    console.log("App connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`)
    });
  })
  .catch((error) => {
    console.log(error)
  });
