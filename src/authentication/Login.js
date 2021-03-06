import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import useToken from '../hooks/useToken';
import Loading from '../pages/Loading';

const Login = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const [token] = useToken(user || googleUser)

    // useEffect(() => {

    // }, [token, from, navigate])
    // if (token) {
    //     navigate(from, { replace: true });

    // }

    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    const navigateSignUp = () => {
        navigate('/signup')
    }

    let signInError;

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }

    if (loading || googleLoading) {
        return <Loading></Loading>
    }

    if (error || googleError) {
        signInError = <p className='text-red-500'>{error?.message || googleError.message}</p>
    }



    return (
        <div className='flex h-screen justify-center items-center '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold text-primary ">LOGIN</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label >
                            <input type="email" className="input input-bordered w-full max-w-xs"  {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                            })} />
                            <label className="label" >
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500"> {errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500" > {errors.email.message}</span >}


                            </label >
                        </div >
                        <div className="form-control w-full max-w-xs" >
                            <label className="label" >
                                <span className="label-text" > Password</span >

                            </label >
                            <input type="password" className="input input-bordered w-full max-w-xs"  {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password must be atleast 6 character '
                                }
                            })} />
                            <label className="label" >
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500"> {errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500" > {errors.password.message}</span >}


                            </label >
                        </div >
                        {signInError}
                        < input className='btn w-full max-w-xs btn-primary' type="submit" value="Login" />
                    </form >
                    <p>New to Computing Cafe?<span onClick={navigateSignUp} className='text-secondary pl-2 cursor-pointer'>Create a New Account</span></p>
                    <div className="divider" > OR</div >
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">CONTINUE WITH GOOGLE</button>
                </div >
            </div >
        </div >
    );
};

export default Login;