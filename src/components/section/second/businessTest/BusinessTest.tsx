import React from 'react';

const BusinessTest = () => {
    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 pr-9 pt-24 max-w-4xl mx-auto">
            <div className="flex flex-col text-start">
                <p className="text-[30px] font-[500] pr-[40px] font-sas leading-8">Decisions tested before resources are committed</p>
                <p className="pb-5 text-[14px] leading-[20px] font-sas text-badrevenue pr-[40px] pt-[10px]">
                    Pricing, packaging, GTM, and product bets are pressure-tested against retention and expansion impact, so teams stop guessing and commit capital where growth is most likely
                </p>
            </div>
            <div className="flex ">
                <img src="/asset/img_4.png" />
            </div>
        </div>
    );
};

export default BusinessTest;