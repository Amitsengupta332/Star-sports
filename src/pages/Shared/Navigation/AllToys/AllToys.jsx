import React, { useEffect, useState } from 'react';
import AllToysRow from '../AllToysRow/AllToysRow';
import useTitle from '../../../../hooks/useTitle';

const AllToys = () => {

    const [allToys, setAllToys] = useState([]);
    const [searchText, setSearchText] = useState("");
    useTitle('AllToys')

    //https://toy-marketplace-server-hazel.vercel.app/allToys
    useEffect(() => {
        fetch('https://toy-marketplace-server-hazel.vercel.app/allToys')
            .then(res => res.json())
            .then(result => {
                setAllToys(result)
            })
    }, [])

    
    // const handleSearch = () => {
    //     fetch(`https://toy-marketplace-server-hazel.vercel.app/allToys/${searchText}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //              setAllToys(data);
    //         })
    //         .catch((error) => {
    //             console.error("Error searching toys:", error);
    //         });
    // };

    const handleSearch = () => {
        fetch(`https://toy-marketplace-server-hazel.vercel.app/getToyByText/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
             setAllToys(data);
          });
      };




    return (
        <div>
            <h2 className='text-5xl text-center'>All toys here: {allToys.length}</h2>
            {/* search  */}
            <div className="flex justify-center items-center mb-4 mt-4">
                <input  onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                <button onClick={handleSearch} className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
            {/* search end */}
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