import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import MyToysRow from '../MyToysRow/MyToysRow';
import Swal from 'sweetalert2';
import useTitle from '../../../../hooks/useTitle';


const MyToys = () => {
    const [myToys, setMyToys] = useState([])
    const { user } = useContext(AuthContext)
    useTitle('MyToys')

    //https://toy-marketplace-server-hazel.vercel.app/myToys/${user?.email}

    useEffect(() => {

        fetch(`https://toy-marketplace-server-hazel.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMyToys(data);
            });
    }, [user])


    //https://toy-marketplace-server-hazel.vercel.app/deleteToys/${_id} 

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log('delete confirm');
                fetch(`https://toy-marketplace-server-hazel.vercel.app/deleteToys/${_id} `,{
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your  Toy has been deleted.',
                            'success'
                        )

                        const remaining = myToys.filter(booking => booking._id !== _id);
                        setMyToys(remaining)

                    }
                })
            }
        })
    }





    return (
        <div className='mb-20'>
            <h2>my toy here: {myToys.length} </h2>
            <div>
                <div className="max-w-full overflow-hidden ">
                    <table className="table w-full border border-gray-300">
                        <thead>
                            <tr>
                                {/* <th className="py-2">No</th> */}
                                <th className="py-2">Image</th>
                                <th className="py-2">Toy Name</th>
                                <th className="py-2">Seller Name</th>
                                <th className="py-2">Seller Email</th>
                                <th className="py-2">Price</th>
                                <th className="py-2">Rating</th>
                                <th className="py-2">Quantity</th>
                                <th className="py-2">Description</th>
                                <th className="py-2">Edit</th>
                                <th className="py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myToys?.map(toys => (
                                <MyToysRow
                                    key={toys._id}
                                    toys={toys}
                                    handleDelete={handleDelete}
                                    // handleMyToysUpdate={handleMyToysUpdate}
                                >

                                </MyToysRow>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;