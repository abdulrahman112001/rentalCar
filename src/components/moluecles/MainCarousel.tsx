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
import { Carousel1, RedCheck, Slide1, Slide2, Slide3 } from '../atom/assets';
import { MainHeading, PricingBox } from '.';

export default function MainCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
        <Swiper
        spaceBetween={100}
        loop={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 "
        >

            <SwiperSlide>
                <div className='flex gap-10 flex-wrap px-10 items-center justify-center mb-10'>
                    <Image  src={Carousel1} alt='' className='lg:max-w-[500px]'/>
                    <div className='flex-grow hidden lg:block'>
                        <h2 className=" font-medium text-[32px] md:text-[48px]  text-[#D5281D] ">BMW 530i</h2>
                        <span className='text-[24px] font-medium leading-[30px] mb-6 block text-[#666666]'>(2019)</span>
                        <PricingBox Offer='AED 130' Time=' /DAY' Price='AED 130' />
                        <ul className='flex flex-col gap-4 mt-4 mb-6'>
                            <li className='flex gap-4 '><Image src={RedCheck} alt=''/><span className='text-[20px] font-medium leading-6'>1 Day Rental Available</span></li>
                            <li className='flex gap-4 '><Image src={RedCheck} alt=''/><span className='text-[20px] font-medium leading-6'>Driver included</span></li>
                            <li className='flex gap-4 '><Image src={RedCheck} alt=''/><span className='text-[20px] font-medium leading-6'>Deposit: AED300</span></li>
                        </ul>
                        <a href="">
                            <button className="h-[44px]   font-medium text-[20px] leading-6 border hover:shadow-2xl  border-[#1E1E1E]  rounded py-2 px-7 ">
                                See Details
                            </button>
                        </a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex gap-10 flex-wrap px-10 items-center justify-center mb-10'>
                    <Image  src={Carousel1} alt='' className='lg:max-w-[500px]'/>
                    <div className='flex-grow hidden lg:block'>
                        <h2 className=" font-medium text-[32px] md:text-[48px]  text-[#D5281D] ">BMW 530i</h2>
                        <span className='text-[24px] font-medium leading-[30px] mb-6 block text-[#666666]'>(2019)</span>
                        <PricingBox Offer='AED 130' Time=' /DAY' Price='AED 130' />
                        <ul className='flex flex-col gap-4 mt-4 mb-6'>
                            <li className='flex gap-4 '><Image src={RedCheck} alt=''/><span className='text-[20px] font-medium leading-6'>1 Day Rental Available</span></li>
                            <li className='flex gap-4 '><Image src={RedCheck} alt=''/><span className='text-[20px] font-medium leading-6'>Driver included</span></li>
                            <li className='flex gap-4 '><Image src={RedCheck} alt=''/><span className='text-[20px] font-medium leading-6'>Deposit: AED300</span></li>
                        </ul>
                        <a href="">
                            <button className="h-[44px]   font-medium text-[20px] leading-6 border hover:shadow-2xl  border-[#1E1E1E]  rounded py-2 px-7 ">
                                See Details
                            </button>
                        </a>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex gap-10 flex-wrap px-10 items-center justify-center mb-10'>
                    <Image  src={Carousel1} alt='' className='lg:max-w-[500px]'/>
                    <div className='flex-grow hidden lg:block'>
                        <h2 className=" font-medium text-[32px] md:text-[48px]  text-[#D5281D] ">BMW 530i</h2>
                        <span className='text-[24px] font-medium leading-[30px] mb-6 block text-[#666666]'>(2019)</span>
                        <PricingBox Offer='AED 130' Time=' /DAY' Price='AED 130' />
                        <ul className='flex flex-col gap-4 mt-4 mb-6'>
                            <li className='flex gap-4 '><Image src={RedCheck} alt=''/><span className='text-[20px] font-medium leading-6'>1 Day Rental Available</span></li>
                            <li className='flex gap-4 '><Image src={RedCheck} alt=''/><span className='text-[20px] font-medium leading-6'>Driver included</span></li>
                            <li className='flex gap-4 '><Image src={RedCheck} alt=''/><span className='text-[20px] font-medium leading-6'>Deposit: AED300</span></li>
                        </ul>
                        <a href="">
                            <button className="h-[44px]   font-medium text-[20px] leading-6 border hover:shadow-2xl  border-[#1E1E1E]  rounded py-2 px-7 ">
                                See Details
                            </button>
                        </a>
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
        <SwiperSlide>
            <Image alt='' src={Slide2} />
        </SwiperSlide>
            <Image alt='' src={Slide3} />
        </SwiperSlide>
        </Swiper>

    </>
);
}
