import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle';

const AllToysRow = ({ toy }) => {
    // console.log(toy);
    const { _id,customerName, toyName, subCategory, price, quantity } = toy;
    useTitle('AllToysRow')
    return (
        <>
            <tr>
                <td>{customerName}</td>
                <td>{toyName}</td>
                <td>{subCategory}</td>
                <td>${price}</td>
                <td>{quantity}</td>
                {/* `/checkout/${_id}` */}
                <td> <Link to={`/viewDetails/${_id}`} ><button className="btn btn-primary">View Details</button></Link> </td>
            </tr>
        </>
    );
};

export default AllToysRow;