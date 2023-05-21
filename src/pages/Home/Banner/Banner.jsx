import React, { useEffect } from 'react';
import banner from '../../../assets/top-view-still-life-sport-composition-23-2149006372.jpg'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {

    // aos
    useEffect(() => {
        AOS.init({
          duration: 800, // Animation duration
          offset: 200, // Offset (in pixels) from the original trigger point
        });
      }, []);

    
    
    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${banner})` }} >
                <div className="max-w-xl w-full px-4 sm:px-6 lg:px-8 text-center " data-aos="fade-up">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white ">
                        Get Ready to Play
                    </h1>
                    <p className="mt-4 sm:mt-6 lg:mt-8 text-xl sm:text-2xl lg:text-3xl font-medium text-white  ">Where Imagination Knows No Bounds!</p>
                    <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-center">
                        <button className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 font-medium rounded-2xl bg-blue-600 text-white hover:bg-blue-700 ">Visit Us Our Store</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;