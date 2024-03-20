import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';
import { Carousel1, RedCheck, Slide1, Slide2, Slide3 } from '../../atom/assets';
import {PricingBox } from '../../moluecles';
import Link from 'next/link';

export default function MainCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className=' -mt-10'>
        <Swiper
        spaceBetween={100}
        loop={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 "
        >

            <SwiperSlide>
                <div className='flex gap-4 md:gap-10  items-center justify-center mb-2 md:mb-10 '>
                    <Image  src={Carousel1} alt='' className='min-w-[120px] min-h-[120px] md:min-w-[400px]'/>
                    <div className=' min-w-[160px] md:w-auto '>
                        <div className='flex md:flex-col gap-2 items-center md:items-start  flex-wrap'>
                            
                            <h2 className=" font-bold md:font-medium text-[16px] md:text-[48px]  text-[#D5281D] ">BMW 530i</h2>
                            <span className='text-[14px] md:text-[24px] font-medium leading-[30px] mb-0 md:mb-6 block text-[#666666]'>(2019)</span>
                        
                        </div>
                        <p className='pricing-box flex md:flex-col gap-2 text-[13px] md:text-[20px] font-medium leading-6'>
                            <span>
                                <span className='text-[#62c05b]'>AED 130</span>
                                <span className='text-[#666666]'>/DAY</span>
                            </span>
                            <span className=' line-through text-[#D5281D] text-[11px] md:text-[20px] '>
                                AED 130
                            </span>
                        </p>
                        <ul className='flex flex-col gap-1 md:gap-4 mt-2 md:mt-4 mb-2 md:mb-6 itc'>
                            <li className='flex items-center gap-2 md:gap-4 '><Image className='w-[15px] h-[15px] md:w-[24px] md:h-[24px]' src={RedCheck} alt=''/><span className='text-[13px] md:text-[20px] font-medium leading-6'>1 Day Rental Available</span></li>
                            <li className='flex items-center gap-2 md:gap-4 '><Image className='w-[15px] h-[15px] md:w-[24px] md:h-[24px]' src={RedCheck} alt=''/><span className='text-[13px] md:text-[20px] font-medium leading-6'>Driver included</span></li>
                            <li className='flex items-center gap-2 md:gap-4 '><Image className='w-[15px] h-[15px] md:w-[24px] md:h-[24px]' src={RedCheck} alt=''/><span className='text-[13px] md:text-[20px] font-medium leading-6'>Deposit: AED300</span></li>
                        </ul>
                        <Link href="/OurCars/CarDetails">
                            <button className="hidden md:block h-[44px]  font-medium text-[20px] leading-6 border hover:shadow-2xl  border-[#1E1E1E]  rounded py-2 px-7 ">
                                See Details
                            </button>
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex gap-4 md:gap-10  items-center justify-center md:mb-10 '>
                    <Image  src={Carousel1} alt='' className='min-w-[120px] min-h-[120px] md:min-w-[400px]'/>
                    <div className=' min-w-[160px] md:w-auto '>
                        <div className='flex md:flex-col gap-2 items-center md:items-start  flex-wrap'>
                            
                            <h2 className=" font-bold md:font-medium text-[16px] md:text-[48px]  text-[#D5281D] ">BMW 530i</h2>
                            <span className='text-[14px] md:text-[24px] font-medium leading-[30px] mb-0 md:mb-6 block text-[#666666]'>(2019)</span>
                        
                        </div>
                        <p className='pricing-box flex md:flex-col gap-2 text-[13px] md:text-[20px] font-medium leading-6'>
                            <span>
                                <span className='text-[#62c05b]'>AED 130</span>
                                <span className='text-[#666666]'>/DAY</span>
                            </span>
                            <span className=' line-through text-[#D5281D]  text-[11px] md:text-[20px]'>
                                AED 130
                            </span>
                        </p>
                        <ul className='flex flex-col gap-1 md:gap-4 mt-2 md:mt-4 mb-2 md:mb-6 itc'>
                            <li className='flex items-center gap-2 md:gap-4 '><Image className='w-[15px] h-[15px] md:w-[24px] md:h-[24px]' src={RedCheck} alt=''/><span className='text-[13px] md:text-[20px] font-medium leading-6'>1 Day Rental Available</span></li>
                            <li className='flex items-center gap-2 md:gap-4 '><Image className='w-[15px] h-[15px] md:w-[24px] md:h-[24px]' src={RedCheck} alt=''/><span className='text-[13px] md:text-[20px] font-medium leading-6'>Driver included</span></li>
                            <li className='flex items-center gap-2 md:gap-4 '><Image className='w-[15px] h-[15px] md:w-[24px] md:h-[24px]' src={RedCheck} alt=''/><span className='text-[13px] md:text-[20px] font-medium leading-6'>Deposit: AED300</span></li>
                        </ul>
                        <Link href="/OurCars/CarDetails">
                            <button className="hidden md:block h-[44px]  font-medium text-[20px] leading-6 border hover:shadow-2xl  border-[#1E1E1E]  rounded py-2 px-7 ">
                                See Details
                            </button>
                        </Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex gap-4 md:gap-10  items-center justify-center md:mb-10 '>
                    <Image  src={Carousel1} alt='' className='min-w-[120px] min-h-[120px] md:min-w-[400px]'/>
                    <div className=' min-w-[160px] md:w-auto '>
                        <div className='flex md:flex-col gap-2 items-center md:items-start  flex-wrap'>
                            
                            <h2 className=" font-bold md:font-medium text-[16px] md:text-[48px]  text-[#D5281D] ">BMW 530i</h2>
                            <span className='text-[14px] md:text-[24px] font-medium leading-[30px] mb-0 md:mb-6 block text-[#666666]'>(2019)</span>
                        
                        </div>
                        <p className='pricing-box flex md:flex-col gap-2 text-[13px] md:text-[20px] font-medium leading-6'>
                            <span>
                                <span className='text-[#62c05b]'>AED 130</span>
                                <span className='text-[#666666]'>/DAY</span>
                            </span>
                            <span className=' line-through text-[#D5281D]  text-[11px] md:text-[20px]'>
                                AED 130
                            </span>
                        </p>
                        <ul className='flex flex-col gap-1 md:gap-4 mt-2 md:mt-4 mb-2 md:mb-6 itc'>
                            <li className='flex items-center gap-2 md:gap-4 '><Image className='w-[15px] h-[15px] md:w-[24px] md:h-[24px]' src={RedCheck} alt=''/><span className='text-[13px] md:text-[20px] font-medium leading-6'>1 Day Rental Available</span></li>
                            <li className='flex items-center gap-2 md:gap-4 '><Image className='w-[15px] h-[15px] md:w-[24px] md:h-[24px]' src={RedCheck} alt=''/><span className='text-[13px] md:text-[20px] font-medium leading-6'>Driver included</span></li>
                            <li className='flex items-center gap-2 md:gap-4 '><Image className='w-[15px] h-[15px] md:w-[24px] md:h-[24px]' src={RedCheck} alt=''/><span className='text-[13px] md:text-[20px] font-medium leading-6'>Deposit: AED300</span></li>
                        </ul>
                        <Link href="/OurCars/CarDetails">
                            <button className="hidden md:block h-[44px]  font-medium text-[20px] leading-6 border hover:shadow-2xl  border-[#1E1E1E]  rounded py-2 px-7 ">
                                See Details
                            </button>
                        </Link>
                    </div>
                </div>
            </SwiperSlide>



        </Swiper>



    <Swiper
    //@ts-ignore
        onSwiper={thumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
    >
        <SwiperSlide>
            <Image alt='' src={Slide1} />
        </SwiperSlide>
        <SwiperSlide>
            <Image alt='' src={Slide2} />
        </SwiperSlide>
        <SwiperSlide>
            <Image alt='' src={Slide3} />
        </SwiperSlide>
    </Swiper>

    </div>
);
}
