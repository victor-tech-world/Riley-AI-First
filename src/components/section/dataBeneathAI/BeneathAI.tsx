import React from 'react';

const BeneathAI = () => {
    return (
        <div className="mx-auto max-w-4xl mx-auto">
            <div className="mt-8 text-center">
                <div className=" justify-self-center p-4">
                    <p className="text-3xl">
                        Intelligence is only as good as the data beneath it
                    </p>
                </div>
                <div className="flex justify-self-center p-4 ">
                    <p>
                        Without a unified data layer, expansion signals fragment, health scores mislead, and forecasts break. Riley orchestrates your data before intelligence is applied, so every decision is based on a trusted operating view
                    </p>
                </div>
                <button className="border-solid rounded-lg border-demoBorder border-2 hover:bg-demo hover:cursor-pointer">
                    <p className="p-2">Request a demo</p>
                </button>
                <div className="pt-10">
                    <img src="/asset/img_6.png" />
                </div>
            </div>
        </div>
    );
};

export default BeneathAI;