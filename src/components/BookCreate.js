import React, { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle("");
  };
  return (
    <div className='book-create'>
      <form onSubmit={handleSubmit}>
        <h3>Add a Book</h3>
        <input
          className='input'
          placeholder='Book Title'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input type='submit' value={"submit"} className='button' />
      </form>
    </div>
  );
};

export default BookCreate;
