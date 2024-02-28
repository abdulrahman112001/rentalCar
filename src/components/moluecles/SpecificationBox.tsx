import Image from 'next/image'
import React from 'react'

export default function SpecificationBox({image,description}:any) {
    return (
        <div className="box flex flex-col gap-3 items-center">
            <div className='p-5 bg-[#F3EFEF] w-fit rounded-full'><Image src={image} alt='' className='min-w-[30px]'/></div>
            <span className='text-[#D5281D]'>{description}</span>
        </div>
    )
}
