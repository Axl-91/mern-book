import express from "express";
import mongoose from "mongoose"; 
import { PORT, DB_URL } from "./config.js";
import { Book } from "./models/bookModel.js";

const app = express();
app.use(express.json());

// GET root
app.get("/", (_request, response) => {
  return response.status(200).send("Welcome to MERN")
});

// GET "/books" (Show all Books)
app.get("/books", async(_request, response) => {
  try {
    const books = await Book.find({});

    return response.status(200).json({
      count: books.length,
      data: books
    });
  } catch (error) {
    console.log(error.message)
    response.status(500).send({message: error.message})
  }
});

// GET "/books/:id" (Show single Book)
app.get("/books/:id", async(request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);

    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message)
    response.status(500).send({message: error.message})
  }
});

// POST "/books" (Create a Book)
app.post("/books", async (request, response) => {
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
    console.log(error.message);
    response.status(500).send({message: error.message})
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
    console.log(error);
  });
