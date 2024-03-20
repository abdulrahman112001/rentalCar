import Image from 'next/image'
import React from 'react'

export default function JourneyBox({image,description,text}:any) {
    return (
        <div className="box w-[270px]">
                <p className="flex flex-col md:flex-row  gap-4 mb-3 items-center">
                    <Image src={image} alt="" className='w-[24px] h-[24px] md:w-[32px] md:h-[32px]' />
                    <span className='font-medium text-[16px]  md:text-[20px] leading-5'>{description}</span>
                </p>
                <p className='text-[14px]  md:text-[16px] font-normal leading-5 text-[#666666] text-center md:text-left'>{text}</p>
        </div>
    )
}
