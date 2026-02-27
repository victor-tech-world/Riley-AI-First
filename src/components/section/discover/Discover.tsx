import React from 'react';

const Discover = () => {
    return (
        <div className='mt-[150px] mx-[30px] rounded-3xl bg-discoverbgrightcolor'>
            <div className='max-w-[768px] justify-self-center'>
                <div className='flex justify-self-center text-6xl pb-10 pt-40'>
                    <p className='text-center text-[60px] font-sas text-discovertitle leading-none'>
                        <strong>Discover your hidden growth drivers </strong>
                    </p>
                </div>
                <div className='flex justify-center pb-40 '>
                    <input className='text-[16px] rounded-l-lg bg-whitecolor border-solid border px-[14px] py-[8px] border-demoBorder focus:border-demoBorder' placeholder='Enter your email' />
                    <button className='rounded-r-lg border-solid border p-2  bg-whitecolor border-demoBorder hover:bg-discoverbtncolor hover:text-demo'  >See what's driving growth</button>
                </div>
            </div>
        </div>
    );
};

export default Discover;