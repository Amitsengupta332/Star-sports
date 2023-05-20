import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const details = useLoaderData()
    const { toyName, picture, customerName, email, quantity, description, price, rating } = details;
    return (
        <div className='mb-20 mt-5'>

            <div className="card card-side bg-base-200 ">
                <div>
                    <img src={picture} alt="Movie" />
                </div>
                <div className="card-body">
                    <h2 className="text-4xl font-semibold">Toy Name: {toyName}</h2>
                    <div className='text-2xl'>
                        <p>Seller Name: {customerName}</p>
                        <p>Seller Email: {email}</p>
                        <p>Price: ${price}</p>
                        <p> Available Quantity: {quantity}</p>
                        <p>Rating : {rating}</p>
                        <p>Description:  {description}</p>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;