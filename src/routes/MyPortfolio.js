import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='mt-24 flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl ">

                <div class="card-body items-center text-center ml-6 mr-6">
                    <h2 class="card-title text-3xl text-primary uppercase underline">My Portfolio</h2>

                    <h3 className='text-xl font-bold'>Name: Muhammad Khalil Islam</h3>
                    <p className='font-bold'>Email: <span>khalilislamju@gmail.com</span>
                    </p>
                    <p className='font-bold'> Educational Background: <span>Currently studying B.Sc. honours  major in Mathematics at Jahangirnagar University, Savar, Dhaka.  </span></p>
                    <p className='font-bold'>List of technologies: C, C++, MATLAB, HTML,CSS,Bootstrap,Tailwind Css, Javascript, React, NodeJs,Mongodb,Data Structure etc. </p>
                    <p className='font-bold'>Website Link: </p>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;