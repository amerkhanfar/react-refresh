import React, { useState } from "react";

const BookEdit = ({ book, setShowEdit, onEdit }) => {
  const [title, setTitle] = useState(book.title);
  return (
    <form
      className='book-edit'
      onSubmit={(e) => {
        e.preventDefault();
        onEdit(book.id, title);
        setShowEdit(false);
      }}>
      <label>title</label>
      <input
        className='input'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button className='button is-primary'>Save</button>
    </form>
  );
};

export default BookEdit;
