import React, { useContext } from "react";
import { LibraryContext } from "../context/librarycontext";

function BookList() {
    const { state } = useContext(LibraryContext)

    return (
        <div>
            <ul>
                {
                    state.books.map((book, index) => (
                        <li key={index}>{book.title}; <br /> 
                        {book.authorName}; <br /> 
                        {book.isbn}; <br />
                        {book.publicationDate}.</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default BookList