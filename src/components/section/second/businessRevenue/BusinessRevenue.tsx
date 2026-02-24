import React from 'react';

const BusinessRevenue = () => {
    return (
        <>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 pr-9 pt-24">
            <div className="flex flex-col text-start">
                <p className="text-3xl pb-9">From fragmented data to a single operating view</p>
                <p className="pb-5">
                    Customer, product, and revenue signals are continuously reconciled into one trusted business model, so every team works from the same reality
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