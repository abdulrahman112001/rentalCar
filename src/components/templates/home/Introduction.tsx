import React from 'react'
import {Road } from '../../atom/assets'
import Image from 'next/image'
import { MainButton } from '../../moluecles'

export default function Introduction() {
    return (
        <div className=" introduction py-[30px] px-[20px] md:mt-[50px]  w-fit m-auto text-center relative ">
            <p className=" font-medium text-[16px] md:text-[24px] text-[#D9D9D9] leading-[30px] md:mb-5">
                Rent your car with
            </p>
            <h1 className="font-medium text-[18px] md:text-[40px] text-[#666666] leading-[58px] mb-2 md:mb-5">
                MOST TRUSTED IN DUBAI{' '}
            </h1>
            {/* <MainButton title='Find Cars' link='/OurCars'/> */}
            <MainButton title='Find Cars' link='/OurCars' arrowRight={true} className='md:hidden'/>
            <MainButton title='Find Cars' link='/OurCars' arrowRight={false} className='hidden md:block'/>
            <Image
            src={Road}
            alt=""
            className="absolute  -top-[20px] md:-top-[75px] -right-[40px]  md:-right-[100px] -z-10 h-full md:h-auto "
            />
    </div>
    )
}
