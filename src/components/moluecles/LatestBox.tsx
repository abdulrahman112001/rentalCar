import Image from 'next/image'
import React from 'react'

export default function LatestBox({month,day,image,hour,name}:any) {
    return (
        <div className="latest-box relative flex items-center w-[100%] gap-3   p-[10px]  rounded-lg mb-3">
            <div className='flex flex-col items-center gap-2 w-[60px] '>
                <p className=' text-[18px] font-medium leading-6 '>{month}</p>
                <span className='font-semibold text-[24px] leading-6'>{day}</span>
            </div>
            <Image src={image} alt='' className='w-[150px] lg:w-[120px] ' />
            <div className=' flex-grow '>
                <p className='text-[12px] mb-3'>{hour}</p>
                <p className='text-[18px] font-medium leading-5 text-[#1e1e1e]'>{name}</p>
            </div>
            </div>
    )
}
