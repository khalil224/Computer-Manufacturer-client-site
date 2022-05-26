import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetcher from '../api/Fetcher';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { toast } from 'react-toastify';
import Tools from './Tools';


const PurchasePage = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);

    const [tool, setTool] = useState([]);
    const [Count, setCount] = useState(0)

    useEffect(() => {

        (async () => {
            const res = await fetcher.get(`/tool/${id}`);
            setTool(res.data)
        })();
    }, []);

    const increment = () => {
        if (Count < tool.minimumOrderQuantity || Count < tool.availableOrderQuantity) {
            setCount(Count + 20);
        }
        else {
            setCount(Count + 1)
        }
    }
    const decrement = () => {
        setCount(Count - 1);
    }
    let Error;
    if (Count < tool.minimumOrderQuantity) {
        Error = <p className='text-warning text-center'>Please Order Minimum Quantity</p>

    }
    if (Count > tool.availableOrderQuantity) {
        Error = <p className='text-warning text-center'>Please Order less Quantity</p>

    }


    const handleBooking = (e) => {
        e.preventDefault();

        const order = {
            toolId: tool._id,
            toolName: tool.Name,
            UserName: user.displayName,
            userEmail: user.email,
            phone: e.target.phone.value,
            OrderQuantity: Count

        }

        fetch(`http://localhost:5000/order`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast(`Your Order is Successfully Submitted.`)
                }
                else {
                    toast('already exist')
                }
            })

    }



    return (

        <div className='mb-24'>
            <div class="hero min-h-screen bg-base-100 mt-24 ">
                <div class="hero-content flex-col lg:flex-row ">
                    <img src={tool.img} alt='' class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-3xl font-bold">{tool.Name}</h1>
                        <p class="py-3 font-semibold">{tool.detailDescription}</p>
                        <p className='font-bold'>Price:{tool.Price}</p>
                        <p className='font-bold'>Minimum Order Quantity: {tool.minimumOrderQuantity}</p>
                        <p className='font-bold'>Available Quantity: {tool.availableOrderQuantity}</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <form onSubmit={handleBooking} >
                            <h2 className='text-center my-3 text-3xl font-bold text-primary underline'>PURCHASE FIELD</h2>
                            <div className='text-center '><span>
                                {Count > tool.availableOrderQuantity ? <button className='btn btn-primary mr-3' disabled onClick={() => increment(Count)}>Increase <br />Order <br />Quantity</button> :
                                    <button className='btn btn-primary mr-3' onClick={increment}>Increase <br />Order <br />Quantity</button>}{Count}
                                {Count < tool.minimumOrderQuantity ? <button className='btn btn-primary ml-3 :' disabled onClick={decrement}>Decrease <br />Order <br />Quantity</button> :
                                    <button className='btn btn-primary ml-3' onClick={decrement}>Decrease <br />Order <br />Quantity</button>}</span></div>
                            {Error}
                            <input type="text" name="name" disabled value={user?.displayName || ''} class="input input-bordered w-full max-w-lg my-3" />
                            <input type="text" name='email' disabled value={user?.email || ''} class="input input-bordered w-full max-w-lg my-3" />
                            <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-lg my-3" />
                            {<input type="text" name='address' placeholder="Your Address" class="input input-bordered w-full max-w-lg my-3" />}
                            <input type="submit" value="PURCHASE" class="btn btn-primary w-full max-w-lg my-3" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PurchasePage;