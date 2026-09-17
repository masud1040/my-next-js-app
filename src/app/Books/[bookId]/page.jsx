import React from 'react';

const  BookDetailId = async ({params}) => {
    const {bookId} = await params;

    const res = await fetch(`http://localhost:5000/books/${bookId}`);
    const book = await res.json();
    return (
        <div>
            <h1>{book.description}</h1>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <h4>{book.category}</h4>
            
        </div>
    );
};

export default BookDetailId;