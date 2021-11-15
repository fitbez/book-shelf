import { React, useState } from "react";
import "./App.css";
import Book from "./components/Book";
import books from "./books";

function App() {
  const [book, setBooks] = useState(books);

  const handleClear = () => {
    setBooks([]);
  };

  return (
    <div className="App">
      <h2>Book List</h2>
      <h3>{book.length} books on the shelf</h3>
      <Book taco={book} />
      {book.length !== 0 ? (
        <button onClick={handleClear}>Clear all</button>
      ) : (
        <button onClick={() => setBooks(books)}>Reset</button>
      )}
    </div>
  );
}

export default App;
