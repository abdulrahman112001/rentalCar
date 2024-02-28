import Image from 'next/image'
import { New,Sale,Door,Size,Econm,Chair,Country,Petrol,SeeDetails, LocationImage  } from '../atom/assets'


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { AvailableStateBox, PricingBox } from '.';


export default function     AvailableCarBox({DetailsLink,Location,TwoDayOffer,TwoDayPrice,CarLogo,NavigationState,NewState,SaleState,Image1,Image2,Image3,title,WeekPrice,DayPrice,WeekOffer,DayOffer,CarDoors,CarTank,CarEconm,CarSeat,CarCountry,CarBattery}:any) {
    return (
        <div className="group best-box w-full shadow-lg rounded-t-lg flex flex-col lg:flex-row min-h-[280px]">
            <div className="carousel w-full relative  lg:max-w-[300px]  self-stretch h-[280px]">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={NavigationState}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><Image src={Image1} alt='' className='w-full rounded-t-lg h-[280px]'/></SwiperSlide>
                    <SwiperSlide><Image src={Image2} alt='' className='w-full rounded-t-lg h-[280px]'/></SwiperSlide>
                    <SwiperSlide><Image src={Image3} alt='' className='w-full rounded-t-lg h-[280px]'/></SwiperSlide>
                </Swiper>
                <Image src={CarLogo} alt='' className='absolute bottom-[10px] right-[10px] z-10 w-[30px] md:w-[44px]' />
                <Image src={Sale} alt='' className=' absolute  z-10 -top-4 -left-1' hidden={!SaleState} />
                <Image src={New} alt='' className=' absolute  z-10 -top-4 -left-1' hidden={!NewState} />
            </div>
            <div className="content w-full p-6 bg-[#f3efef71] group-hover:bg-[#EFECEC]">
                <h2 className=' font-medium text-[26px] leading-7 mb-5'>{title}</h2>
                <div className='relative'>
                    <div className='group-hover:invisible lg:group-hover:hidden flex flex-col md:flex-row gap-10 lg:gap-0  '>
                            <div className='flex flex-col w-[280px] '>
                                <div className='mb-4 lg:mb-14 flex flex-wrap gap-x-2 md:gap-x-6 gap-y-3'>
                                    <AvailableStateBox image={Door} state={CarDoors} />
                                    <AvailableStateBox image={Size} state={CarTank} />
                                    <AvailableStateBox image={Econm} state={CarEconm} />
                                    <AvailableStateBox image={Chair} state={CarSeat} />
                                    <AvailableStateBox image={Country} state={CarCountry} />
                                    <AvailableStateBox image={Petrol} state={CarBattery} />
                                </div>
                                <div className="location flex gap-2 w-[150px]">
                                    <Image src={LocationImage} alt=''/>
                                    <span className='text-[#2D79A4] text-[18px] font-medium'>{Location}</span>
                                </div>
                            </div>
                            <div className='flex-grow'>
                                <PricingBox Offer={DayOffer} Price={DayPrice} Time='/Day' />
                                <p className='text-[#62c05b] mt-8 mb-2 text-right'>Free Cancelation</p>
                                <div className='flex justify-end'>
                                    <button className="h-[44px]   font-medium text-[20px] leading-6 border hover:shadow-2xl  border-[#1E1E1E]  rounded py-2 px-7 ">
                                        Details
                                    </button>
                                </div>
                        </div>
                    </div>
                    <div className='h-full w-full absolute hidden group-hover:flex  flex-col top-0'>
                        <PricingBox Offer={TwoDayOffer} Price={TwoDayPrice} Time=' /2 Days' />
                        <div className='w-full flex flex-col items-end '>
                            <p className='text-[#62c05b] mt-10 mb-5'>Free Cancelation</p>
                            <a href={DetailsLink} className='' ><Image src={SeeDetails} alt='' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
