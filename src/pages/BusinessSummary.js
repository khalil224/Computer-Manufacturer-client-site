import React from 'react';

import review from '../images/Business Summary/feedback.png';
import people from '../images/Business Summary/people.png';
import annual from '../images/Business Summary/annuities.png';
import tools from '../images/Business Summary/computer-desktop.png';


const BusinessSummary = () => {
    return (
        <div className=' text-center mb-24'>
            <h2 className='text-5xl text-primary font-bold mb-3'>THOUSAND PEOPLE TRUST US</h2>
            <p className='text-2xl'>TRY TO UNDERSTAND USER EXPECTATION</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-24 ml-6'>
                <div class="card max-w-lg bg-base-00 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={review} alt="" class="rounded-xl h-32 w-32" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p className='text-2xl font-bold'>30K+ Reviews</p>
                    </div>
                </div>
                <div class="card max-w-lg bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={people} alt="" class="rounded-xl h-32 w-32" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p className='text-2xl font-bold'>We Serverd 200+ Customers</p>
                    </div>
                </div>
                <div class="card max-w-lg bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={annual} alt="" class="rounded-xl h-32 w-32" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p className='text-2xl font-bold'>100M+ Annual Revenue</p>
                    </div>
                </div>
                <div class="card max-w-lg bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={tools} alt="" class="rounded-xl h-32 w-32" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <p className='text-2xl font-bold'>40+ Parts</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;