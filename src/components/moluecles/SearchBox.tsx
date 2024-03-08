import React from 'react'


export default function SearchBox({TitleButton}:any) {
    return (
        <div className="search   py-5 flex flex-wrap gap-y-5 items-center justify-between">
            <div className='flex flex-col w-[48%]'>
                <span className='font-medium text-[20px] leading-[22px] block mb-2'>Pick Up :</span>
                <input type="date" name="" id="" className='h-[45px] p-2 rounded-lg shadow '/>
            </div>
            <div className='flex flex-col w-[48%]'>
                <span className='font-medium text-[20px] leading-[22px] block mb-2'>Drop Off :</span>
                <input type="date" name="" id="" className='h-[45px] p-2 rounded-lg shadow'/>
            </div>
            <div className='w-full'>
                <button className="bg-gradient-to-r from-[#424242] to-[#1E1E1E]  w-full h-[44px]  font-medium text-[20px] leading-6 border hover:shadow-2xl  border-[#1E1E1E] text-white   rounded py-2 px-0 md:px-14 ">
                    {TitleButton}
                </button>
            </div>
        </div>
    )
}
