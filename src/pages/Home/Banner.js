import React from 'react';
import banner1 from '../../images/Banner/compressed picture/banner-1 (1).png'
import banner2 from '../../images/Banner/compressed picture/banner-2.png'
import banner3 from '../../images/Banner/compressed picture/banner-3.png'

const Banner = () => {
    return (
        <div class="carousel w-50 mt-24  ">
            <div id="slide1" class="carousel-item relative w-full justify-center">
                <img src={banner1} class="w-50 h-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">❮</a>
                    <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full justify-center ">
                <img src={banner2} class="w-50 h-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a>
                    <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full justify-center">
                <img src={banner3} class="w-50 h-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a>
                    <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;