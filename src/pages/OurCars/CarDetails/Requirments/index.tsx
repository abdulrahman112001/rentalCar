import * as React from 'react';

import Image from 'next/image';
import { Close } from '@/components/atom/assets';
import { AccordionBox, TabsBox } from '@/components/moluecles';


export default function index() {
    return (
        <div className="container mx-auto my-12 relative px-7">
            <a href="">
                <Image
                src={Close}
                alt=""
                className="absolute -top-[0px]  right-[20px] lg:left-[10px]"
                />
            </a>
            <h2 className="text-[24px] font-medium leading-[30px] lg:text-center mb-8">
                Requirments
            </h2>
            <div className="requiments lg:w-[560px] mx-auto ">
                <div className="bg-[#FAF9F9] rounded-lg p-5 shadow-lg mb-8">
                    <div className='flex justify-between mb-3'>
                        <span className='font-weight text-[18px]'>Minimum Driver’s Age</span>
                        <span className='font-weight text-[18px] text-[#D5281D]'>18 Years</span>
                    </div>
                    <div className='flex justify-between mb-3'>
                        <span className='font-weight text-[18px]'>Security Deposite</span>
                        <span className='font-weight text-[18px] text-[#D5281D]'>AED 500</span>
                    </div>
                    <div className='flex justify-between '>
                        <span className='font-weight text-[18px]'>Refunded In</span>
                        <span className='font-weight text-[18px] text-[#D5281D]'>30 Days</span>
                    </div>
                </div>
                <h2 className="text-[24px] font-medium leading-[30px] mb-5">
                    Documents Required
                </h2>
                <p className='text-[#666666] mb-8'>We are eligible to rent a car across the emirates provided you have the below mentioned documents valid with you</p>
                <div className="tabs mb-8">
                    <TabsBox />
                </div>
                <p className='text-[#666666]'>Visitors from the GCC, US, UK, Canada, Europe and certain other countries can drive with their home country driving license, without the need of an IDP.</p>
            </div>
        </div>
    );  
}
