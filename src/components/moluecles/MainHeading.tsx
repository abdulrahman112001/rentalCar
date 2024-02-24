import React from 'react'

export default function MainHeading({heading}:any) {
    return (
        <h2 className=" font-medium text-[32px] md:text-[48px] text-center text-[#1E1E1E] ">
        {heading}
        </h2>
    )
}
