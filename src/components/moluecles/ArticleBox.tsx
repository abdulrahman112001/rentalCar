import Image from 'next/image'
import React from 'react'
import { Suv } from '../atom/assets'

export default function ArticleBox({ArticleImage,ArticleTitle,ArticleContent,date,link}:any) {
    return (
        <div className="group article-box w-full sm:w-[47%] lg:w-[31%] shadow-lg rounded-xl ">
            <div className="image w-full relative">
                <Image src={ArticleImage} alt='' className='w-full rounded-t-lg'/>
                <p className='w-[138px] h-[34px] after:border-l-[#1e1e1e]  after:border-transparent after:absolute after:contents[] after:border-[17.5px] after:top-[0] after:left-[138px]  px-4 py-1 bg-[#1e1e1e] text-white text-lg absolute  z-10 -top-0 -left-0'> {date}</p>
            </div>
            <div className="content w-full p-6 bg-[#FAF9F9] group-hover:bg-[#EFECEC] rounded-b-xl">
                <h2 className=' font-medium  text-[23px] leading-5  mb-4'>{ArticleTitle}</h2>
                <div>
                <p className=' lg:text-[18px] leading-6 mb-5 font-normal'>
                {ArticleContent}
                <a href={link} className='text-[#3ea62b]'>Read More</a>
                </p>
                </div>

            </div>
        </div>
    )
}
