import React from 'react';

import review from '../images/Business Summary/reviews.png'

const BusinessSummary = () => {
    return (
        <div className='mt-24 text-center'>
            <h2 className='text-5xl text-primary font-bold mb-3'>THOUSAND BUSINESS TRUST US</h2>
            <p className='text-2xl'>TRY TO UNDERSTAND USER EXPECTATION</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24'>
                <div className=''>
                    <img src={review} alt="" className='h-32 w-32' />
                    <p className='text-2xl'>30K+ Reviews</p>
                </div>
                <div>
                    <img src={review} alt="" className='h-32 w-32' />
                    <p className='text-2xl'>30K+ Reviews</p>
                </div>
                <div>
                    <img src={review} alt="" className='h-32 w-32' />
                    <p className='text-2xl'>30K+ Reviews</p>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;