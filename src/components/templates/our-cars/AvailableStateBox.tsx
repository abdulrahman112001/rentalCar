import Image from 'next/image'
import React from 'react'

export default function AvailableStateBox({image,state}:any) {
    return (
        <div className=' flex gap-3 items-center w-[120px] '>
            <Image src={image} alt='' />
            <span className=' font-medium  text-[#1E1E1E]'>{state}</span> 
        </div>
    )
}
