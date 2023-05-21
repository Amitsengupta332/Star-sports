import React from 'react';
 

const MyToysRow = ({ toys, handleDelete  }) => {
    // console.log(toys);
    const { _id, picture, toyName, customerName, email, subcategory, price, rating, quantity, description } = toys;

    // const handleDelete = _id => {
    //     console.log(_id);
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             console.log('delete confirm');
    //             fetch(`http://localhost:5000/deleteToys/${_id} `,{
    //                 method: 'DELETE',
    //             })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 if (data.deletedCount > 0){
    //                     Swal.fire(
    //                         'Deleted!',
    //                         'Your  Toy has been deleted.',
    //                         'success'
    //                     )
    //                 }
    //             })
    //         }
    //     })
    // }

 



    return (
        <>
            <tr>
                <td><div className="avatar">
                    <div className="rounded w-24 h-24">
                        <img src={picture} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div></td>

                <td>{toyName}</td>
                <td>{customerName}</td>
                <td>{email}</td>
                <td>${price}</td>
                <td>{rating}</td>
                <td>{quantity}</td>
                <td>{description}</td>
                <td>
                    <button className="btn  btn-primary btn-sm">Update</button>

                </td>
                <td>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-sm btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>

                </td>

            </tr>
        </>
    );
};

export default MyToysRow;