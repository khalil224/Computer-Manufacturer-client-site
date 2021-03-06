
import React from "react";
import { toast } from "react-toastify";

const User = ({ user, refetch }) => {
    const { email, role } = user;

    console.log(email)

    const makeAdmin = () => {
        fetch(`https://pacific-tor-22531.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
                toast.success('Successfully made an Admin')
            })
    }


    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td> {role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default User;