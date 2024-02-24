import Image from 'next/image'
import React from 'react'


export default function ReviewBox({carImage,personImage,name,time,firstParagraph,secondParagraph}:any) {
    return (
        <div className="bg-[#EFECEC] rounded-xl  shadow-lg transition-all review-box relative flex flex-col md:flex-row md:mr-10 group hover:after:relative after:-right-[40px] hover:after:border-r-[4px]  hover:after:border-[#D5281D]  ">
            <div className="image">
                <Image src={carImage} alt='' className='w-full md:w-fit h-full rounded-t-xl md:rounded-l-xl'/>
            </div>
            <div className="content bg-[#FAF9F9] flex-grow py-6 px-4 group-hover:bg-[#EFECEC] rounded-b-xl md:rounded-r-xl ">
                <div  className="information mb-3 flex gap-4 items-center">
                    <div className="image">
                        <Image src={personImage} alt=''/>
                    </div>
                    <div>
                        <p className="name text-[24px] leading-7 text-[#1E1E1E]">{name}</p>
                        <p className="time text-[#666666] leading-5">{time}</p>
                    </div>
                </div>
                <p className='text-[#666666] leading-5 mb-3'>{firstParagraph}</p>
                <p className='text-[#666666] leading-5'>{secondParagraph}</p>
            </div>
        </div>
    )
}
