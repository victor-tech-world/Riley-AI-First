import React from 'react';

const BusinessInsight = () => {
    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 pr-9 pt-24 max-w-4xl mx-auto">
            <div className="flex flex-col text-start">
                <p className="text-3xl pb-9">Decisions tested before resources are committed</p>
                <p className="pb-5">
                    Pricing, packaging, GTM, and product bets are pressure-tested against retention and expansion impact, so teams stop guessing and commit capital where growth is most likely
                </p>
            </div>
            <div className="flex ">
                <img src="/asset/img_5.gif" />
            </div>
        </div>
    );
};

export default BusinessInsight;