import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetcher from '../api/Fetcher';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const PurchasePage = () => {
    const { id } = useParams();
    const [user, loading, error] = useAuthState(auth);

    const [tool, setTool] = useState([]);

    console.log(tool)
    useEffect(() => {
        // const url = `http://localhost:5000/tool/${id}`;
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setTool(data))
        (async () => {
            const res = await fetcher.get(`/tool/${id}`);
            setTool(res.data)
        })();
    }, []);

    return (

        <div class="hero min-h-screen bg-base-100 mt-24 mb-24">
            <div class="hero-content flex-col lg:flex-row ">
                <img src={tool.img} alt='' class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-3xl font-bold">{tool.Name}</h1>
                    <p class="py-3 font-semibold">{tool.description}</p>
                    <p className='font-bold'>Price:{tool.Price}</p>
                    <p className='font-bold'>Minimum Order Quantity: {tool.minimumOrderQuantity}</p>
                    <p className='font-bold'>Available Quantity: {tool.availableOrderQuantity}</p>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;