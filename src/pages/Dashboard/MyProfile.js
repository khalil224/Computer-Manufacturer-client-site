import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    return (
        <div>
            <div class="mt-24 card w-96 bg-base-100 shadow-xl ">

                <div class="card-body items-center text-center ">
                    <h2 className='text-3xl font-bold underline text-primary mb-3'>MY PROFILE</h2>
                    <h2 class="card-title">{user.displayName}</h2>
                    <p>{user.email}</p>
                </div>
            </div>
            <div className='flex justify-center items-center mt-10 mb-24'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <form  >
                            <h2 className='text-center my-3 text-3xl font-bold text-primary underline'>Add About Yourself</h2>
                            {<input type="text" name='address' placeholder="City" class="input input-bordered w-full max-w-lg my-3" />}
                            {<input type="text" name='education' placeholder="Your Education" class="input input-bordered w-full max-w-lg my-3" />}
                            {<input type="text" name='linkedIn' placeholder="LinkedIn Profile" class="input input-bordered w-full max-w-lg my-3" />}
                            {<input type="text" name='phone' placeholder="Phone" class="input input-bordered w-full max-w-lg my-3" />}
                            <input type="submit" value="SUMBIT" class="btn btn-primary w-full max-w-lg my-3" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyProfile;