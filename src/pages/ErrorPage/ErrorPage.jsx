import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
 

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div>
            <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900 mt-5'>
                <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                     <img src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?w=740&t=st=1684391288~exp=1684391888~hmac=3fbd9c35a43ec7f787f33633c55e271ac181febbb83bb02123c58a098dd79f13" alt="" />
                    <div className='max-w-md text-center'>
                        <h2 className='mb-8 font-extrabold text-9xl text-yellow-500'>
                            <span className='sr-only'>Error</span>
                            {status || 404}
                        </h2>
                        <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                            {error?.message}
                        </p>
                        <Link to='/' className='btn'>
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;
