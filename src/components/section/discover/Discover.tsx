import React from 'react';

const Discover = () => {
    return (
        <div className='mt-24 rounded-3xl mx-10 bg-gradient-to-r from-discoverbgleftcolor to-discoverbgrightcolor'>
            <div className='flex justify-center text-6xl pb-10 pt-40'>
                Discover your hidden growth drivers
            </div>
            <div className='flex justify-center pb-40 '>
                <input className='rounded-l-lg border-solid border p-2 border-demoBorder focus:border-demoBorder' placeholder='Enter your email' />
                <button className='rounded-r-lg border-solid border p-2  bg-whitecolor border-demoBorder hover:bg-discoverbtncolor hover:text-demo'  >See what's driving growth</button>
            </div>
        </div>
    );
};

export default Discover;