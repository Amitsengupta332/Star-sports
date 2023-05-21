import React from 'react';

const Feedback = () => {
    return (
        <div>
            <h2 className='text-5xl text-center font-bold mt-7 mb-10'>Our Happy Customer</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                <div className="card w-96 bg-base-100  ">
                    <figure className="avatar">

                        <img src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=740&t=st=1684676158~exp=1684676758~hmac=f1ce50d31acdfe5363cb035b2c18eef71fa9231a1457f59ff80419f5f862f68a" alt="Shoes"  />

                    </figure>
                    <div className="card-body items-center text-center">
                        <p>I love shopping at this sports store! They have a great selection of football, cricket, and badminton gear. The staff is friendly and knowledgeable, helping me find the right equipment for my needs. Highly recommended 
                            <br />
                            - Michael S
                        </p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100  ">
                    <figure className="avatar">

                        <img src="https://img.freepik.com/free-photo/young-man-posing-with-crossed-arms_114579-42107.jpg?size=626&ext=jpg" alt="Shoes"  />

                    </figure>
                    <div className="card-body items-center text-center">
                        <p>I recently purchased a cricket bat from this sports shop for my children, and I'm extremely pleased with the product. The bat is perfectly sized for young players and has a lightweight design that allows for easy handling. The quality is outstanding, and it has proven to be durable even after multiple practice sessions. 
                            <br />
                            - John C
                        </p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100  ">
                    <figure className="avatar">

                        <img src="https://as2.ftcdn.net/v2/jpg/05/95/87/19/1000_F_595871954_y8qv5dkgSCdj6MAJB0d7hTGCU1dkupTH.jpg" alt="Shoes"  />

                    </figure>
                    <div className="card-body items-center text-center">
                        <p>I recently purchased a badminton set from this sports shop for my kids, and I must say, it has exceeded my expectations. The set includes lightweight rackets that are perfect for little hands and shuttlecocks that have excellent flight stability. The quality of the equipment is top-notch, and it has provided endless hours of fun for my children. I appreciate the attention to detail in designing a set specifically for kids, ensuring their safety and enjoyment.  
                            <br />
                            - Sarah L
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;