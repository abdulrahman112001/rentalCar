import Image from 'next/image'
import React from 'react'

export default function JourneyBox({image,description,text}:any) {
    return (
        <div className="box w-[270px]">
                <p className="flex flex-col md:flex-row  gap-4 mb-3 items-center">
                    <Image src={image} alt="" />
                    <span className='font-medium text-[18px]  md:text-[20px] leading-5'>{description}</span>
                </p>
                <p className=' font-normal  text-[16px] leading-5 text-[#666666] text-center md:text-left'>{text}</p>
        </div>
    )
}
