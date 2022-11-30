import axios from "axios";
import React, { useState, useEffect } from "react";
import { BookCreate, BookList } from "./components";

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  const deleteBook = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);
    const deleted = books.filter((book) => {
      return id !== book.id;
    });

    setBooks(deleted);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updateBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updateBooks);
  };
  const createBook = async (title) => {
    const response = await axios.post("  http://localhost:3001/books", {
      title,
    });

    const updatedBooks = [...books, response.data];

    setBooks(updatedBooks);
  };
  return (
    <div className='app'>
      <BookCreate onCreate={createBook} />
      <h1>Reading List</h1>
      <BookList books={books} deleteBook={deleteBook} onEdit={editBookById} />
    </div>
  );
};

export default App;
