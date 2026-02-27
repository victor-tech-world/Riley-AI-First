import React from 'react';

const Infrastructure = () => {
    return (
        <div className='mx-auto px-[128px] pt-100px'>
        <div className='lg:grid-cols-2 grid pt-20 gap-x-10 mx-auto'>
            <div className=''>
                    <p className='text-[50px] text-infratitle font-sas font-[300] leading- text-left pr-[300px]'>
                        <h2>
                            Enterprise Ready Infrastructure to
                            Protect Your Data
                        </h2>
                    </p>
                <div className='text-lg pb-8 text-infrastructure'>
                    <p className='text-[18px] font-sas text-infrastructure leading-[28.8px] font-[400] pr-[20px] pt-[40px]'>
                        Riley is SOC 2 Type II and GDPR compliant, with strict security measures to ensure your customer data and insights remain private, protected, and never misused
                    </p>
                </div>
                <button className="border-solid rounded-lg border-demoBorder border hover:bg-demo hover:cursor-pointer">
                    <p className="p-2 text-badrevenue text-[16px] font-sas font-[500] px-[18px] py-[10px]">Discover how we protect your datao</p>
                </button>
            </div>
            <div className='flex place-self-center'>
               <div >
                <img className='max-h-[132px]' src='/asset/img_15.png' />
               </div>
               <div >
                <img className='max-h-[132px]' src='/asset/img_16.png' />
               </div>
            </div>
        </div>
        </div>
    );
};

export default Infrastructure;