import Image from 'next/image'
import React from 'react'
import { WhatsApp } from '../atom/assets'

export default function ContactBox({contactImage,title,firstNumber,secondNumber,linkDescription,link}:any) {
    return (
        <div className="contact-box w-full sm:w-[47%] lg:w-[30%] shadow-lg rounded-sm bg-[#FAF9F9] p-6 py-8">
                <Image src={contactImage} alt=''/>
                <h2 className='font-medium text-[24px] leading-[30px] my-5'>{title}</h2>
                <p className='text-[18px] lg:text-[20px] font-medium leading-6 text-[#666666] mb-2'>{firstNumber}</p>
                <p className='text-[18px] lg:text-[20px] font-medium leading-6 text-[#666666] mb-5'>{secondNumber}</p>
                <button className=" min-w-[184px] border hover:shadow-2xl  border-[#1E1E1E] text-[#1E1E1E] rounded py-2 px-4 md:px-8  ">
                <a href={link} className="flex gap-5 font-medium text-[20px] leading-6  justify-center items-center " >
                    {linkDescription}
                </a>
            </button>
                
        </div>
    )
}
