import Image from 'next/image'
import React from 'react'

export default function StateBox({image,state}:any) {
    return (
        <div className='py-2 px-3 md:px-6 flex gap-4 items-center bg-[#F3EFEF] w-fit rounded-[33px]'>
            <Image src={image} alt='' />
            <span className=' font-medium md:text-xl text-[#1E1E1E]'>{state}</span>
        </div>
    )
}
