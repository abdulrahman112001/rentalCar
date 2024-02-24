import React from 'react'

export default function MainLink({link,children}:any) {
    return (
        <a href={link} className='poppins font-medium text-[18px] leading-[27px] p-3 md:p-0 hover:bg-[#F3EFEF] text-[#1E1E1E]'>
            {children}
        </a>
    )
}
