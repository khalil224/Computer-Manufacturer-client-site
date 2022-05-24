import React, { useEffect, useState } from 'react';
import Tool from './Home/Tool';

const Tools = () => {
    const [parts, setParts] = useState([]);
    console.log(parts)
    useEffect(() => {
        fetch("partsData.json")
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])


    return (
        <div className=' mb-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    parts.map(product => <Tool
                        key={product.id}
                        product={product}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;