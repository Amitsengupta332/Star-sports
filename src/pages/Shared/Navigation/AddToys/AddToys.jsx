import { data } from "autoprefixer";
import { useContext } from "react";
import Swal from 'sweetalert2'
import { AuthContext } from "../../../../Provider/AuthProvider";


const AddToys = () => {

    const { user } = useContext(AuthContext)

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;

        const picture = form.picture.value;
        const toyName = form.name.value;
        const sellerName = form.seller.value;
        const email = user?.email;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        // const newToy = { picture, toyName, sellerName, email, subCategory, price, rating, quantity, description }
        // console.log(newToy);

        const newToy = {
            customerName: sellerName,
            email,
            picture,
            toyName,
            subCategory,
            price,
            rating,
            quantity,
            description             
        }
        console.log(newToy);


        // // send data to the server
        fetch('http://localhost:5000/addToys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newToy)
        }

        )
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Added Successful'
                    })
                }
            })
    }
    return (
        <div>
            <div className=" p-24">
                <h2 className="text-3xl text-center mb-5 font-extrabold">Add A Toy</h2>
                <form onSubmit={handleAddToy} >
                    {/* Photo Url and Toy name */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Picture Url</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    name="picture" placeholder="Picture Url" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Toy name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* seller name and seller email */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="seller"
                                    defaultValue={user?.displayName}
                                    placeholder="seller" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    defaultValue={user?.email}
                                    name="email" placeholder="seller email" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/*  category and price*/}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Sub-Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="subCategory" placeholder="Sub Category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text"
                                    name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* photo and rating */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
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

                    </div>
                    {/* form photo url */}
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
                </form>
            </div>
        </div>
    );
};

export default AddToys;