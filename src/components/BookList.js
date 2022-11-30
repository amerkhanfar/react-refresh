import React, { useState } from "react";
import BookShow from "./BookShow";

const BookList = ({ books, deleteBook, onEdit }) => {
  return (
    <div>
      {books.map((book) => {
        return (
          <BookShow
            book={book}
            deleteBook={deleteBook}
            onEdit={onEdit}
            key={book.id}
          />
        );
      })}
    </div>
  );
};

export default BookList;
