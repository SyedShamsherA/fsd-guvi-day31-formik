import React, {useContext} from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { LibraryContext } from '../context/librarycontext'
import './authorform.css'

function AuthorForm() {
    const { addAuthor } = useContext(LibraryContext)

    const validationSchema = Yup.object().shape({
        authorName: Yup.string().required('name is required'),
        birthDate: Yup.string().required('birth date is required'),
        biography: Yup.string().required('biography is required')
    })

    const formik = useFormik({
        initialValues: {
            authorName: '',
            birthDate: '',
            biography: ''
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            addAuthor(values)
            resetForm()
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
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

            <label htmlFor="birthDate">Birth Date:</label><br />
            <input
                type="text"
                id="birthDate"
                name="birthDate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.birthDate} />
            {formik.touched.birthDate && formik.errors.birthDate ? (
                <div>{formik.errors.birthDate}</div>
            ) : null}
            <br />

            <label htmlFor="biography">Biography:</label><br />
            <input
                type="text"
                id="biography"
                name="biography"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.biography} />
            {formik.touched.biography && formik.errors.biography ? (
                <div>{formik.errors.biography}</div>
            ) : null}
            <br />

            <button type="submit">Add Author</button>
        </form>
    )
}

export default AuthorForm