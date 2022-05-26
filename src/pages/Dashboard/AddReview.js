import React from 'react';

const AddReview = () => {
    return (
        <div className='flex justify-center items-center  mt-24'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <form  >
                        <h2 className='text-center my-3 text-3xl font-bold text-primary underline'>Add Review</h2>
                        {<input type="text-area" name='review' class="input input-bordered w-full max-w-lg my-3" />}
                        {<input type="rating" name='rating' placeholder="Your Rating" class="input input-bordered w-full max-w-lg my-3" />}

                        <input type="submit" value="SUMBIT" class="btn btn-primary w-full max-w-lg my-3" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;