import { SearchBox } from '@/components/moluecles'
import { Filter,DrawerFilter,BigAvailableCarBox } from '..'
import React from 'react'

export default function OurCars() {
  return (
    <div>
        <div className=' bg-[#f8f3f3] px-3 border-t lg:border-none fixed bottom-[30px] left-1/2 -translate-x-1/2 z-20'>
          <DrawerFilter />
        </div>
        <div className='my-14 lg:mt-14 flex gap-6 container mx-auto flex-col xl:flex-row px-5 '>
          <div className=" hidden xl:block w-full xl:min-w-[350px] xl:max-w-[450px] bg-[#FAF9F9]  px-6 py-8 self-start shadow-xl">
            <Filter/>
          </div>
          <div className="content flex-grow ">
              {/* <SearchBox TitleButton='Search' className=' sticky top-0 z-50 bg-[#FAF9F9] px-3 rounded-lg'/> */}
              <SearchBox TitleButton='Search' />
            <div className="available-cars">
              <h2 className='font-medium text-[24px] leading-7 mb-5'>
                Available Cars (320)
              </h2>
              <BigAvailableCarBox />
            </div>
          </div>
        </div>
    </div>
  )
}
