import { React } from "react";

function Book({ taco }) {
  return (
    <div>
      {taco.map((book) => {
        const { id, author, bookTitle, image } = book;
        return (
          <article key={id} className="book">
            <img src={image} alt={bookTitle}></img>
            <p>Author: {author}</p>
            <p>Book Title: {bookTitle}</p>
          </article>
        );
      })}
    </div>
  );
}

export default Book;
