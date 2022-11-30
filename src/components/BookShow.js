import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, deleteBook, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = () => {
    deleteBook(book.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = (
      <BookEdit book={book} setShowEdit={setShowEdit} onEdit={onEdit} />
    );
  } else {
    content = <h3>{book.title}</h3>;
  }
  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt='books' />
      {content}
      <div className='actions'>
        <button className='edit' onClick={handleEdit}>
          Edit
        </button>
        <button className='delete' onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
