import Image from 'next/image'
import React from 'react'

export default function StateBox({image,state}:any) {
    return (
        <div className='py-2 px-2 md:px-2 flex gap-1 items-center  text-[12px] lg:text-[16px] bg-[#F3EFEF]  rounded-[8px] '>
            <Image src={image} alt='' />
            <span className=' font-medium md:text-xl text-[#1E1E1E]'>{state}</span>
        </div>
    )
}
