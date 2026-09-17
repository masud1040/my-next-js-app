import React from "react";
import BookCard from "../components/BookCard";

const getBooks = async () => {
  const res = await fetch("http://localhost:5000/books");
  return res.json();
};

const BooksPage = async () => {
  const books = await getBooks();
//   console.log(books);
  return (
    <div className=" ">
      <h1>Books : {books.length}</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
