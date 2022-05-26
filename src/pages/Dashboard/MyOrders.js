import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import fetcher from '../../api/Fetcher';
import auth from '../../firebase.init';

const MyOrders = () => {
    const { id } = useParams()
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


    // const handleDelete = () => {
    //     fetch(`https://the-computing-cafe.web.app/order/${id}`, {
    //         method: 'DELETE',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);

    //         })
    // }

    return (
        <div >
            <div class="overflow-x-auto">
                <table class="table w-full max-w-lg">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>

                            <th>PartsName</th>
                            <th>Quantity</th>
                            <th>Cancel Order</th>



                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>

                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>{order.UserName}</td>
                                    <td>{order.toolName}</td>
                                    <td>{order.OrderQuantity}</td>
                                    <td><button class="btn btn-xs">Delete</button></td>

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