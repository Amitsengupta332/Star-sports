import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import MyToysRow from '../MyToysRow/MyToysRow';


const MyToys = () => {
    const [myToys, setMyToys] = useState([])
    const { user } = useContext(AuthContext)

  
    useEffect(() => {

        fetch(`http://localhost:5000/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyToys(data);
            });
    }, [user])



    return (
        <div>
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
                                <MyToysRow key={toys._id} toys={toys} >

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