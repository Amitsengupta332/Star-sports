import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const toy = useLoaderData();
    // console.log(toy);
    const { _id, toyName, price, quantity, description } = toy;
    console.log(toy);

    const handleUpdatedToy = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updatedToy = {

            price,
            quantity,
            description
        }
        console.log(updatedToy);

        //send data to the server
        fetch(`http://localhost:5000/updateToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: ' Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }


    return (
        <div>

            <div className=" p-24">
                <h2 className="text-3xl text-center mb-5 font-extrabold">Update a Toy : {toyName} </h2>
                {/* onSubmit={handleAddToy} */}
                {/* <form  >

                    <div className="form-control  md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="mb-8">
                        <div className="form-control md:w-full">
                            <label className="label">
                                <span className="label-text">Detail Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Add a Toy" className="btn   btn-success btn-block" />
                </form> */}

                <form onSubmit={handleUpdatedToy} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                    <div className="form-control md:w-1/2 mb-2 md:mb-8">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 mb-2 md:mb-8">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text"
                                name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2 mb-2 md:mb-8 ">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <label className="input-group">
                            <textarea name="description" defaultValue={description} placeholder="Description" className="textarea textarea-bordered w-full"></textarea>
                        </label>
                    </div>


                    <input type="submit" value="Update Toy" className="btn btn-success " />
                </form>





            </div>
        </div>
    );
};

export default Update;