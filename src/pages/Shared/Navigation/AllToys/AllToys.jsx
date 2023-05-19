import React, { useEffect, useState } from 'react';
import AllToysRow from '../AllToysRow/AllToysRow';

const AllToys = () => {

    const [allToys, setAllToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(result => {
                setAllToys(result)
            })
    }, [])
    return (
        <div>
            <h2>All toys here: {allToys.length}</h2>
            <div>
                <div className="max-w-full overflow-hidden ">
                    <table className="table w-full border border-gray-300">
                        <thead>
                            <tr>
                                {/* <th className="py-2">No</th> */}
                                <th className="py-2">Seller Name</th>
                                <th className="py-2">Toy Name</th>
                                <th className="py-2">Sub Category</th>

                                <th className="py-2">Price</th>

                                <th className="py-2">Quantity</th>

                                <th className="py-2">view Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allToys.map(toy =>
                                    <AllToysRow
                                        key={toy._id}
                                        toy={toy}
                                    >
                                    </AllToysRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;