
import { useNavigate } from 'react-router-dom';
import './Tool.css'

const Tool = ({ product }) => {
    const { _id, Name, img, Price, shortDescription, availableOrderQuantity, minimumOrderQuantity } = product;
    const navigate = useNavigate();


    const handlePurchase = (id) => {
        navigate(`/purchase-page/${id}`)
    }

    return (
        <div class=" card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{Name}</h2>
                <p>{shortDescription}</p>
                <p>Price:{Price}</p>
                <p>Minimum Order Quantity: {minimumOrderQuantity} </p>
                <p>Available Quantity:{availableOrderQuantity}</p>
                <div class="card-actions">
                    <button onClick={() => handlePurchase(_id)} class="btn btn-primary w-full max-w-lg">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;