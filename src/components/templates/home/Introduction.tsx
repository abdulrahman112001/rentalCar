import React from 'react'
import {Road } from '../../atom/assets'
import Image from 'next/image'
import { MainButton } from '../../moluecles'

export default function Introduction() {
    return (
        <div className=" introduction mt-[50px] w-fit m-auto text-center relative ">
        <p className=" font-medium text-[20px] md:text-[24px] text-[#D9D9D9] leading-[30px] mb-5">
        Rent your car with
        </p>
        <h1 className="font-medium text-[28px] md:text-[40px] text-[#666666] leading-[58px] mb-5">
        MOST TRUSTED IN DUBAI{' '}
        </h1>
        <MainButton title='Find Cars' link='/OurCars'/>
        <Image
        src={Road}
        alt=""
        className="absolute w-[] -top-[80px] -right-[100px] -z-10 hidden md:block"
        />
    </div>
    )
}
