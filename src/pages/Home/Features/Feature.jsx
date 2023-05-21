import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Feature = () => {

    useEffect(() => {
        AOS.init({
          duration: 800, // Animation duration
          offset: 200, // Offset (in pixels) from the original trigger point
        });
      }, []);


    return (
        <div>
            <h2 className='text-5xl text-center font-bold mt-7'
            data-aos="fade-right"
            >Our Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 'data-aos="flip-left">
                <div className="card w-full bg-base-100  "  >
                    <figure className="px-10 pt-10">
                        <img src="https://img.icons8.com/?size=1x&id=SV9oGw9UXnqt&format=png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Cash On Delivery</h2>
 
                    </div>
                </div>
                <div className="card w-96 bg-base-100 " data-aos="flip-right">
                    <figure className="px-10 pt-10">
                        <img src="https://img.icons8.com/?size=1x&id=xaZLD9N5l16s&format=png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Home Delivery</h2>
 
                    </div>
                </div>
                <div className="card w-96 bg-base-100 "  >
                    <figure className="px-10 pt-10">
                        <img src="https://img.icons8.com/?size=1x&id=CR5BcMHbslGa&format=png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Home Delivery</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 "  >
                    <figure className="px-10 pt-10">
                        <img src="https://img.icons8.com/?size=1x&id=77389&format=png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Home Delivery</h2>
 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;