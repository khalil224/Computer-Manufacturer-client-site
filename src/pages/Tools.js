import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
//import fetcher from '../api/Fetcher';
import Tool from './Home/Tool';
import Loading from './Loading';

const Tools = () => {
    //const [parts, setParts] = useState([]);


    const { data: parts, isLoading } = useQuery('tool', () => fetch('https://the-computing-cafe.web.app/tool')
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     // fetch("fetcher")
    //     //     .then(res => res.json())
    //     //     .then(data => setParts(data))
    //     (async () => {
    //         const res = await fetcher.get('/tool');
    //         setParts(res.data)
    //     })();
    // }, []);


    return (
        <div className=' mb-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    parts?.map(product => <Tool
                        key={product._id}
                        product={product}

                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;