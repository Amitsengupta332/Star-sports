import React from 'react';

const MyToysRow = ({ toys }) => {
    console.log(toys);
    const { _id, picture, name, sellerName, email, subcategory, price, rating, quantity, description } = toys;
    return (
        <>
            <tr>
                <td><div className="avatar">
                    <div className="rounded w-24 h-24">
                          <img src={picture}  alt="Avatar Tailwind CSS Component" /> 
                    </div>
                </div></td>

                <td>{name}</td>
                <td>{sellerName}</td>
                <td>{email}</td>
                <td>${price}</td>
                <td>{rating}</td>
                <td>{quantity}</td>
                <td>{description}</td>
                <td>
                    <button className="btn btn-success btn-xs">Update</button>

                </td>
                <td>
                    <button className="btn btn-error btn-xs">Delete</button>

                </td>

            </tr>
        </>
    );
};

export default MyToysRow;