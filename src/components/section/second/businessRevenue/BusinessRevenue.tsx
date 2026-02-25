import React from 'react';

const BusinessRevenue = () => {
    return (
        <>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 pr-9 pt-24 max-w-4xl mx-auto">
            <div className="flex flex-col text-start">
                <p className="text-3xl pb-9">Revenue risk identified early</p>
                <p className="pb-5">
                    Churn, renewal, and expansion signals surface months in advance, so teams know which customers to save, grow, or ignore before revenue decisions are forced
                </p>
            </div>
            <div className="flex ">
                <img src="/asset/img_3.gif" />
            </div>
        </div>
        </>
    );
};

export default BusinessRevenue;