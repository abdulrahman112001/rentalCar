import * as React from 'react';

import Image from 'next/image';
import { ToForward } from '../../atom/assets';
import { TabsBox } from '../';

import ModalComp from '@/components/moluecles/Modal';
import { useState } from "react";



export default function RequirementsModal() {

    const [openModal, setOPenModal] = useState(false);

    return (
        <div>
            <div onClick={()=> setOPenModal(true)} className='h-[88px] flex justify-between items-center bg-[#FAF9F9] p-5 w-full cursor-pointer'>
                <span className='font-medium text-[22px] lg:text-[24px]'>Requirments</span>
                <Image src={ToForward} alt=''/>
            </div>
                <ModalComp
            open={openModal}
            onClose={() => setOPenModal(false)}
            Children={ <div className="container mx-auto mb-12 relative px-5 md:px-7">
                            <h2 className="text-[20px] lg:text-[24px] font-medium leading-[30px] text-center mb-8">
                                Requirments
                            </h2>
                            <div className="requiments lg:w-[560px] mx-auto ">
                                <div className="bg-[#FAF9F9] rounded-lg p-4 shadow-lg mb-8">
                                    <div className='flex flex-col text-center md:flex-row md:justify-between mb-3'>
                                        <span className='font-weight text-[18px]'>Minimum Driver’s Age</span>
                                        <span className='font-weight text-[18px] text-[#D5281D]'>18 Years</span>
                                    </div>
                                    <div className='flex flex-col text-center md:flex-row md:justify-between mb-3'>
                                        <span className='font-weight text-[18px]'>Security Deposite</span>
                                        <span className='font-weight text-[18px] text-[#D5281D]'>AED 500</span>
                                    </div>
                                    <div className='flex flex-col text-center md:flex-row md:justify-between  '>
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
            }
            />
        </div>


    );
}