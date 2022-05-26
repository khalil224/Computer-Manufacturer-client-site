import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import fetcher from '../../api/Fetcher';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    console.log(orders)

    const navigate = useNavigate();

    useEffect(() => {
        // fetch("fetcher")
        //     .then(res => res.json())
        //     .then(data => setParts(data))

        (async () => {
            const res = await fetcher.get('/order', {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setOrders(res.data)
        })();

    }, [user]);

    return (
        <div >
            <div class="overflow-x-auto">
                <table class="table w-full max-w-lg">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>PartsName</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>

                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>{order.UserName}</td>
                                    <td>{order.userEmail}</td>
                                    <td>{order.toolName}</td>
                                </tr>
                            )
                        }




                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MyOrders;