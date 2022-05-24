import React from 'react';
import Tools from '../Tools';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h3 className='mt-10 text-3xl font-bold text-center'>Our Available Cafe</h3>
            <Tools></Tools>
        </div>
    );
};

export default Home;