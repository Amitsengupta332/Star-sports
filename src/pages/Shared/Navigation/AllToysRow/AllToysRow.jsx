import React from 'react';

const AllToysRow = ({ toy }) => {
    // console.log(toy);
    const { customerName, toyName, subCategory, price, quantity } = toy;
    return (
        <>
            <tr>
                <td>{customerName}</td>
                <td>{toyName}</td>
                <td>{subCategory}</td>
                <td>${price}</td>
                <td>{quantity}</td>
                <td><button className="btn btn-primary">View Details</button> </td>
            </tr>
        </>
    );
};

export default AllToysRow;