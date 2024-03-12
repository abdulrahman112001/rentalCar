import Image from 'next/image'
import React from 'react'

export default function TypeBox({image,type}:any) {
    return (
    <div className=" rounded-lg w-[47%]  lg:w-[22%]   text-center hover:text-white transition-all flex flex-col items-center justify-between gap-6 hover:bg-[#727171] max-h-[150px] sm:max-h-[170px]">
        <Image src={image}  alt='' className='min-w-[100px] sm:min-w-[200px] h-[70px] sm:min-h-[90px]'/>
        <span className=' font-semibold sm:text-lg md:text-xl leading-6 uppercase'>
            {type}
        </span>
    </div>
)
}
