import React from 'react';

const BusinessInsight = () => {
    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 pr-9 pt-24 max-w-4xl mx-auto">
            <div className="flex flex-col text-start">
                <p className="text-[30px] font-[500] pr-[40px] font-sas leading-8">Insights that drive execution</p>
                <p className="pb-5 text-[14px] leading-[20px] font-sas text-badrevenue pr-[40px] pt-[10px]">
                    The right teams receive prioritized, decision-ready insights at the right moment, so analysis turns into action, not dashboards
                </p>
            </div>
            <div className="flex ">
                <img src="/asset/img_5.gif" />
            </div>
        </div>
    );
};

export default BusinessInsight;