import React from 'react';
import news from '../images/Email-Newsletter-PNG-Clipart.png'

const Newsletter = () => {
    return (
        <div>  <h2 className='text-5xl font-bold text-primary  text-center'>SUBSCRIBE OUR NEWSLETTER</h2>
            <p className='text-2xl  my-3  text-center uppercase'>We will notify you our update and offer</p>
            <div class="hero min-h-screen bg-base-100 mb-24">

                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div class="text-center lg:text-left">

                        <img src={news} alt="" />
                    </div>
                    <div>

                        <div class=" flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Enter your email address</span>
                                    </label>
                                    <input type="text" placeholder="username@site.com" class="input input-bordered" />
                                </div>

                                <div class="form-control mt-6">
                                    <button class="btn btn-primary">SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;