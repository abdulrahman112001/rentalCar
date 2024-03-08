import { SearchBox } from '@/components/moluecles'
import { Filter,DrawerFilter,BigAvailableCarBox } from '..'
import React from 'react'

export default function OurCars() {
  return (
    <div className='my-14 flex gap-6 container mx-auto flex-col xl:flex-row px-10'>
      <div className=" hidden lg:block w-full xl:min-w-[350px] bg-[#FAF9F9]  px-6 py-8 self-start shadow-xl">
        <Filter />
      </div>
      <DrawerFilter />
      <div className="content flex-grow  ">
        <SearchBox TitleButton='Search'/>
        <div className="available-cars">
          <h2 className='font-medium text-[24px] leading-7 mb-5'>
            Available Cars (320)
          </h2>
          <BigAvailableCarBox />
        </div>
      </div>
    </div>
  )
}
