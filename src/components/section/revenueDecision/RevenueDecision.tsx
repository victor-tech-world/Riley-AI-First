import React from 'react';

const RevenueDecision = () => {
    return (
        <div>
            <div className='text-2xl pt-20 text-center'>Trusted by teams turning customer signals into revenue decisions</div>
            <div className='flex flex-row justify-center px-3 pt-14'>
                <div className='px-2'>
                    <img width={120} src='/asset/img_10.png'/>
                </div>
                <div className='px-2'>
                    <img width={120} src='/asset/img_11.png'/>
                </div>
                <div className='px-2'>
                    <img width={250} src='/asset/img_12.svg'/>
                </div>
                <div className='px-2'>
                    <img width={150} src='/asset/img_13.png'/>
                </div>
                <div className='px-2'>
                    <img width={200} src='/asset/img_14.png'/>
                </div>
                {/* <img src='/asset/img_11.png'/>
                <img src='/asset/img_12.png'/>
                <img src='/asset/img_13.png'/>
                <img src='/asset/img_14.png'/> */}
            </div>
        </div>
    );
};

export default RevenueDecision;