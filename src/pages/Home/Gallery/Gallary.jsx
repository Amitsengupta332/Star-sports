import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallary = () => {

    useEffect(() => {
        AOS.init({
          duration: 800, // Animation duration
          offset: 200, // Offset (in pixels) from the original trigger point
        });
      }, []);
      

    return (
        <div className='mt-5'>
            <h2 className='text-5xl text-center font-bold mb-5'>Sports Galleries</h2>
            <div className='mt-3 gap-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
                {/* card 1 */}
                <div className="card w-96 bg-base-100 shadow-xl relative mb-2">
                    <img
                        className="w-full"
                        src="https://img.freepik.com/free-photo/soccer-ball-green-grass_1232-3031.jpg?w=740&t=st=1684414802~exp=1684415402~hmac=665bb099e9f82fc46e5106f7be058d64503f24e29c2c0a7309b06a3fc6caa3c4"
                        alt="Shoes"
                        data-aos="fade-up"
                    />
                    <div className="card-details absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div className="text-white text-center p-6 bg-black bg-opacity-50">
                            <h2 className="card-title text-2xl font-bold mb-4 leading-tight">Football</h2>
                            <p className='text-lg leading-snug'>Price: $5</p>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card w-96 bg-base-100 shadow-xl relative">
                    <img
                        className="w-full"
                        src="https://img.freepik.com/free-photo/cricket-ball-isolated_53876-17944.jpg?w=740&t=st=1684415062~exp=1684415662~hmac=f60f4cdb5eaa14fcb92a0861ada81a2af2606c298a1c807d809f0bfca074a210"
                        alt="Shoes"
                        data-aos="fade-up"
                    />
                    <div className="card-details absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div className="text-white text-center bg-black bg-opacity-50 p-6">
                            <h2 className="card-title text-2xl font-bold mb-4 leading-tight">Cricket Ball</h2>
                            <p className='text-lg leading-snug'>Price: $4</p>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card w-96 bg-base-100 shadow-xl relative">
                    <img
                        className="w-full"
                        src="https://img.freepik.com/free-photo/cricketer-field-action_53876-63345.jpg?w=740&t=st=1684415257~exp=1684415857~hmac=4a12790c02d3b87b3970e38d41f261de27f027766ae7f1bfdd9d0258279e97c5"
                        alt="Shoes"
                        data-aos="fade-up"
                    />
                    <div className="card-details absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div className="text-white text-center p-6 bg-black bg-opacity-50">
                            <h2 className="card-title text-2xl font-bold mb-4 leading-tight">Cricket Bat</h2>
                            <p className='text-lg leading-snug'>Price: $10</p>
                        </div>
                    </div>
                </div>
                {/* card 4 */}
                <div className="card w-96 bg-base-100 shadow-xl relative">
                    <img
                        className="w-full"
                        src="https://img.freepik.com/free-photo/three-white-shuttlecocks-badminton-racquet_181624-16765.jpg?w=740&t=st=1684415925~exp=1684416525~hmac=4e9f9f60c048101e20614ec1cc3ead00c6c538c43c1a14c7cd76adea864d7ad2"
                        alt="Shoes"
                        data-aos="fade-down"
                    />
                    <div className="card-details absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div className="text-white text-center p-6 bg-black bg-opacity-50">
                            <h2 className="card-title">Badminton Racket</h2>
                            <p className='text-lg leading-snug'>Price: $10</p>
                        </div>
                    </div>
                </div>
                {/* card 5 */}
                <div className="card w-96 bg-base-100 shadow-xl relative">
                    <img
                        className="w-full"
                        src="https://img.freepik.com/free-photo/closeup-shuttlecock_53876-33670.jpg?w=740&t=st=1684416895~exp=1684417495~hmac=2d0a14318e05c6431571e8aa77622217f7c54f0fbc89c9e1c0237939afd1537f"
                        alt="Shoes"
                        data-aos="fade-down"
                    />
                    <div className="card-details absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div className="text-white text-center p-6 bg-black bg-opacity-50">
                            <h2 className="card-title">Badminton Shuttlecock</h2>
                            <p className='text-lg leading-snug'>Price: $2</p>
                        </div>
                    </div>
                </div>
                {/* card 6 */}
                <div className="card w-96 bg-base-100 shadow-xl relative">
                    <img
                        className="w-full"
                        src="https://img.freepik.com/free-photo/close-up-skateboard-rink_23-2148937840.jpg?w=740&t=st=1684416800~exp=1684417400~hmac=bb9a37363288255c1b0b6f8570d272b2968284ae8e9019e4e96c0ddb51cc2781"
                        alt="Shoes"
                        data-aos="fade-down"
                    />
                    <div className="card-details absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <div className="text-white text-center p-6 bg-black bg-opacity-50">
                            <h2 className="card-title text-2xl font-bold mb-4 leading-tight">Skateboard</h2>
                            <p className='text-lg leading-snug'>Price: $15</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallary;
