import React from 'react';
import notFound from '../../src/images/404.png'

const NotFound = () => {
    return (
        <div className='mt-24 flex justify-center items-center'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;