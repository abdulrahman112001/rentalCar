import React from 'react'

export default function PricingBox({Offer,Time,Price,className}:any) {
    return (
        <p className={`${className} flex flex-col md:text-[20px] font-medium px-2 leading-6   `}>
            <span>
                <span className='text-[#62c05b]'>{Offer}</span>
                <span className='text-[#666666]'>{Time}</span>
            </span>
            <span className=' line-through text-[#D5281D] '>
                {Price}
            </span>
        </p>
    )
}
