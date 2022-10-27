import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div className='text-center'>
            <h1 className='display-1 fw-bold text-danger'>404!</h1>
            <p className='mb-4'>Ooopps! Page not found</p>
            <Link to='/home'>Go Back To Home</Link>
        </div>
    );
};

export default Page404;