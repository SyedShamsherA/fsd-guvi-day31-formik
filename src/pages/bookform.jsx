import React, { useContext } from 'react'
import { LibraryContext } from '../context/librarycontext'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function BookForm() {
    const { addBook } = useContext(LibraryContext)

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('title is required'),
        authorName: Yup.string().required('author name is required'),
        isbn: Yup.string().required('isbn no is required'),
        publicationDate: Yup.string().required('publication data is required')
    })

    const formik = useFormik({
        initialValues: {
            title: '',
            authorName: '',
            isbn: '',
            publicationDate: ''
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            addBook(values)
            resetForm()
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="title">Title:</label><br />
            <input
                type="text"
                id="title"
                name="title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title} />
            {formik.touched.title && formik.errors.title ? (
                <div>{formik.errors.title}</div>
            ) : null}
            <br />

            <label htmlFor="authorName">Author Name:</label><br />
            <input
                type="text"
                id="authorName"
                name="authorName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.authorName} />
            {formik.touched.authorName && formik.errors.authorName ? (
                <div>{formik.errors.authorName}</div>
            ) : null}
            <br />

            <label htmlFor="isbn">ISBN:</label><br />
            <input
                type="text"
                id="isbn"
                name="isbn"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.isbn} />
            {formik.touched.isbn && formik.errors.isbn ? (
                <div>{formik.errors.isbn}</div>
            ) : null}
            <br />

            <label htmlFor="publicationDate">Publication Date:</label><br />
            <input
                type="text"
                id="publicationDate"
                name="publicationDate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.publicationDate} />
            {formik.touched.publicationDate && formik.errors.publicationDate ? (
                <div>{formik.errors.publicationDate}</div>
            ) : null}
            <br />

            <button type="submit">Add Book</button>
        </form>
    )
}

export default BookForm