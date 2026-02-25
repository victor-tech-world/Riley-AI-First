import React from 'react';

const Infrastructure = () => {
    return (
        <div className='container mx-auto'>
        <div className='lg:grid-cols-2 grid pt-20 gap-x-10 mx-auto'>
            <div className=''>
                <div className='text-5xl pb-12'>
                    Enterprise Ready Infrastructure to
                    Protect Your Data
                </div>
                <div className='text-lg pb-8 text-infrastructure'>
                    Riley is SOC 2 Type II and GDPR compliant, with strict security measures to ensure your customer data and insights remain private, protected, and never misused
                </div>
                <button className="border-solid rounded-lg border-demoBorder border hover:bg-demo hover:cursor-pointer">
                    <p className="p-2 text-badrevenue">Discover how we protect your datao</p>
                </button>
            </div>
            <div className='flex justify-items-center'>
               <div className=''>
                <img width={150} src='/asset/img_15.png' />
               </div>
               <div>
                <img width={200} src='/asset/img_16.png' />
               </div>
            </div>
        </div>
        </div>
    );
};

export default Infrastructure;