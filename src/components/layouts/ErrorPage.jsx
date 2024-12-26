import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
        <div className='w-full min-h-screen flex items-center justify-center flex-col'>
            <img className='w-40' src="https://img.icons8.com/?size=100&id=BxmLSDqYIDrH&format=png&color=000000" alt="" />
        <h1 className='py-5 text-3xl'>Opps! not found</h1>
        <Link to="/" className='btn btn-success'>go back</Link>        
        </div>    
        </>
    );
};

export default ErrorPage;