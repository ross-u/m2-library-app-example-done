const express = require("express");
const booksRouter = express.Router();

const Book = require("./../models/Book.model");
const Author = require("./../models/Author.model");

// GET /books
booksRouter.get("/", function (req, res, next) {
  Book.find()
    .then((allBooksFromDB) => {
      const props = { books: allBooksFromDB };
      res.render("Books", props);
    })
    .catch((err) => console.log(err));
});

// GET /books/add
booksRouter.get("/add", function (req, res, next) {
  res.render("AddBook");
});

// POST	/books/add
booksRouter.post("/add", (req, res, next) => {
  const { title, author, description, rating } = req.body;

  Book.create({ title, author, description, rating })
    .then((book) => res.redirect("/books"))
    .catch((err) => console.log(err));
});

// GET  /books/edit
booksRouter.get("/edit", (req, res, next) => {
  const { bookid } = req.query;

  Book.findById(bookid)
    .then((oneBook) => {
      const props = { oneBook: oneBook };
      res.render("EditBook", props);
    })
    .catch((err) => console.log(err));
});

// POST  /books/edit
booksRouter.post("/edit", (req, res, next) => {
  const { bookid } = req.query;
  const { title, author, description, rating } = req.body;

  Book.findByIdAndUpdate(
    bookid,
    { title, author, description, rating },
    { new: true }
  )
    .then((book) => res.redirect("/books"))
    .catch((error) => console.error(error));
});

// GET /books/details/:bookId
booksRouter.get("/details/:bookId", (req, res, next) => {
  const { bookId } = req.params;

  Book.findById(bookId)
    .populate("authors")
    .then((oneBook) => {
      const props = { oneBook: oneBook };

      res.render("BookDetails", props);
    })
    .catch((err) => console.log("Error retrieving book details: ", err));
});

module.exports = booksRouter;
