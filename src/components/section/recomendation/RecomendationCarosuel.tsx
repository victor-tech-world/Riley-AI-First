import React from 'react';

const RecomendationCarosuel = () => {
    return (
        <div className='pt-20 max-w-[1000px] justify-self-center'>
            <div className='text-center justify-self-center w-2/3 py-3 text-[20px] font-sas'>
                <div>
                    <p className='font-sas leading-[30px]'>
                        I’ve had the chance to try Riley. As a product manager, it’s a relief and delight to finally have a product that turns data into actionable insights. Riley simplifies getting insights at scale - helping you identify themes, next steps, and launch improvements for customers much faster!
                    </p>
                </div>
            </div>
            <div className='justify-self-center py-0'>
                <p className='text-[18px] font-headfont'>
                    Sharanya Rao
                </p>
            </div>
            <div className='justify-self-center text-xl py-0'>
                <p className='text-[14px] font-headfont'>
                    Principal Product Manager Intuit
                </p>
            </div>
        </div>
    );
};

export default RecomendationCarosuel;