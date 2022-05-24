import React, { useState } from 'react';
import './Tool.css'

const Tool = ({ product }) => {
    const { Name, img, description, Price, availableOrderQuantity, minimumOrderQuantity } = product;

    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <div class=" card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{Name}</h2>
                <p>{isReadMore ? description.slice(0, 150) : description}
                    <span onClick={toggleReadMore} className="read-or-hide">
                        {isReadMore ? "...read more" : " show less"}
                    </span></p>
                <p>Price:{Price}</p>
                <p>Minimum Order Quantity:{minimumOrderQuantity}</p>
                <p>Available Order Quantity:{availableOrderQuantity}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;