import React, {useContext} from "react";
import { LibraryContext } from "../context/librarycontext";
import './authorlist.css'

function AuthorList () {
    const {state} = useContext(LibraryContext)

   return(
    <div>
        <ul>{state.authors.map((author, index) => (
        <li key={index}>
            <span className="name">{author.authorName}</span> - (<span className="birthDate">{author.birthDate}</span>)<br />
            <p className="biography">{author.biography}</p>
        </li>
    ))}
    </ul>
    </div>
   )
}

export default AuthorList