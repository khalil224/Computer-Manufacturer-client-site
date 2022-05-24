import React from 'react';
import bannerpicture from '../../images/build-from-scratch.png'

const TopBanner = () => {
    return (
        <div class="hero h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerpicture} alt="" class="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">BUILD YOUR OWN PC</h1>
                    <p class="py-6">FIND THE BEST PARTS FOR YOUR PC & WORKSTATION.</p>
                    <button class="btn btn-primary">BUILD NOW</button>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;