import React from 'react';
import { LibraryProvider } from './context/librarycontext';
import BookForm from './pages/bookform';
import BookList from './pages/booklist';
import AuthorForm from './pages/authorform';
import AuthorList from './pages/authorlist';
import './App.css'; // Import your CSS file

function App() {
  return (
    <LibraryProvider>
      <div className="app-container">
        <header>
          <h1>Library Admin Dashboard</h1>
        </header>
        <main>
          <section className="forms-section">
            <div className="form-container">
              <h2>Add Book</h2>
              <BookForm />
            </div>
            <div className="form-container">
              <h2>Add Author</h2>
              <AuthorForm />
            </div>
          </section>
          <section className="lists-section">
            <div className="list-container">
              <h2>Book List</h2>
              <BookList />
            </div>
            <div className="list-container">
              <h2>Author List</h2>
              <AuthorList />
            </div>
          </section>
        </main>
      </div>
    </LibraryProvider>
  );
}

export default App;
