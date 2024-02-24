import Image from 'next/image'
import React from 'react'

export default function TypeBox({image,type}:any) {
    return (
    <div className=" rounded-lg w-full sm:w-[47%]  lg:w-[22%]  text-center hover:text-white transition-all flex flex-col items-center justify-center gap-6 hover:bg-[#727171] min-h-[170px]">
        <Image src={image}  alt='' className=' min-w-[200px] min-h-[90px]'/>
        <span className=' font-semibold text-lg md:text-xl leading-6 uppercase'>
            {type}
        </span>
    </div>
)
}
