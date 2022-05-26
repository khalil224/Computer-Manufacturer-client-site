
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import fetcher from '../../api/Fetcher';
import Loading from '../Loading';
import User from './User';

const AllUsers = () => {

    // const [users, setUsers] = useState([]);

    // useEffect(() => {

    //     (async () => {
    //         const res = await fetcher.get(`/user`, {
    //             method: 'GET',
    //             headers: {
    //                 authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         });
    //         setUsers(res.data)
    //     })();
    // }, []);

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://the-computing-cafe.web.app/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    console.log(users.email)

    return (
        <div className='mt-24 ml-24'>
            <h2>All Users:{users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <User key={users._id} user={user}
                                refetch={refetch}
                            ></User>

                            )

                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;