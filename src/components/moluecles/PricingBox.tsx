import React from 'react'

export default function PricingBox({Offer,Time,Price}:any) {
    return (
        <p className='flex flex-col text-[20px] font-medium px-2 leading-6 gap-2  '>
            <span>
                <span className='text-[#62c05b]'>{Offer}</span>
                <span className='text-[#666666]'>{Time}</span>
            </span>
            <span className=' line-through text-[#D5281D] text-[16px]'>
                {Price}
            </span>
        </p>
    )
}
