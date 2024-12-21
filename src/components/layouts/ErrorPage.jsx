import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
        <h1>sorry page not found</h1>
        <Link to="/" className='btn btn-warning'>go back</Link>            
        </>
    );
};

export default ErrorPage;