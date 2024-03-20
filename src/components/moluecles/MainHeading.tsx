import React from 'react'

export default function MainHeading({heading}:any) {
    return (
        <h2 className=" font-semibold text-[28px] md:text-[48px]  text-[#1E1E1E] ">
        {heading}
        </h2>
    )
}
