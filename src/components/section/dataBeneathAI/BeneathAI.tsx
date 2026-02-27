import React from 'react';
import BeneathAIPicture from './BeneathAIPicture';

const BeneathAI = () => {
    return (
        <>
            <div className="max-w-4xl mx-auto">
                <div className="mt-8 text-center">
                    <div className=" justify-self-center pt-[80px]">
                        <p className="text-[30px] font-sas font-[500] leading-[35px]">
                            Intelligence is only as good as the data beneath it
                        </p>
                    </div>
                    <div className="flex justify-self-center text-[14px] font-sas text-badrevenue ">
                        <p className='py-[20px]'>
                            Without a unified data layer, expansion signals fragment, health scores mislead, and forecasts break. Riley orchestrates your data before intelligence is applied, so every decision is based on a trusted operating view
                        </p>
                    </div>
                    <button className="border-solid rounded-lg border-demoBorder border hover:bg-demo hover:cursor-pointer">
                        <p className="py-[10px] px-[18px] text-[16px] font-[500] text-badrevenue">Request a demo</p>
                    </button>
                </div>
            </div>
            <BeneathAIPicture/>
        </>
    );
};

export default BeneathAI;