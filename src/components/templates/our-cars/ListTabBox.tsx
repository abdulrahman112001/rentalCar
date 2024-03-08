import Image from 'next/image'
import React from 'react'
import { RightCheck } from '../../atom/assets'

export default function ListTabBox({title}:any) {
    return (
        <li className='flex gap-3 items-center mb-2'>
            <Image src={RightCheck} alt='' className='w-[24px] h-[16px]' />
            <span className='text-[#666666]'>{title}</span>
        </li>
    )
}
