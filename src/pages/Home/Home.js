import React from 'react';
import Tools from '../Tools';
import TopBanner from './TopBanner';


const Home = () => {



    return (
        <div>
            <TopBanner></TopBanner>
            <h3 className='mt-10 text-3xl font-bold text-center text-primary underline'>TODAY'S BEST DEALS</h3>
            <Tools></Tools>
        </div>
    );
};

export default Home;