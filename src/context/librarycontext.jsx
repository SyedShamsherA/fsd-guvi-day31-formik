import React, { createContext, useReducer } from "react";

const initialState = {
    books: [],
    authors: []
}

const LibraryContext = createContext()

const libraryReducer = (state, action) => {
    switch(action.type){
        case 'ADD_BOOK': 
        return{
            ...state,
            books: [...state.books, action.payload]
        };
        case 'ADD_AUTHOR':
            return{
                ...state,
                authors: [...state.authors, action.payload]
            }
            default:
                return state
    }
}

const LibraryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(libraryReducer, initialState);
  
    const addBook = (book) => {
      dispatch({ type: 'ADD_BOOK', payload: book });
    };
  
    const addAuthor = (author) => {
      dispatch({ type: 'ADD_AUTHOR', payload: author });
    };
  
    return (
      <LibraryContext.Provider value={{ state, addBook, addAuthor }}>
        {children}
      </LibraryContext.Provider>
    );
  };
  
  export { LibraryContext, LibraryProvider };