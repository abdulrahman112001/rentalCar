import Image from "next/image";
import {
  New,
  Sale,
  Door,
  Size,
  Econm,
  Chair,
  Country,
  Petrol,
  SeeDetails,
} from "../../atom/assets";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { PricingBox } from "../../moluecles";
import { StateBox } from "..";
import Link from "next/link";

export default function   BestBox({
  CarLogo,
  NavigationState,
  NewState,
  SaleState,
  Image1,
  Image2,
  Image3,
  title,
  WeekPrice,
  DayPrice,
  WeekOffer,
  DayOffer,
  CarDoors,
  CarTank,
  CarEconm,
  CarSeat,
  CarCountry,
  CarBattery,
}: any) {
  return (
    <div className="group best-box w-full sm:w-[47%] lg:w-[32%] shadow-lg rounded-t-lg">
      <div className="carousel w-full relative">
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
          <SwiperSlide>
            <Image src={Image1} alt="" className="min-w-full rounded-t-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Image2} alt="" className="w-full rounded-t-lg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={Image3} alt="" className="w-full rounded-t-lg" />
          </SwiperSlide>
        </Swiper>
        <Image
          src={CarLogo}
          alt=""
          className="absolute bottom-[10px] right-[10px] z-10 w-[30px] md:w-[44px]"
        />
        <Image
          src={Sale}
          alt=""
          className=" absolute  z-10 -top-4 -left-1"
          hidden={!SaleState}
        />
        <Image
          src={New}
          alt=""
          className=" absolute  z-10 -top-4 -left-1"
          hidden={!NewState}
        />
      </div>
      <div className="content w-full p-6 bg-[#f3efef71] group-hover:bg-[#EFECEC]">
        <h2 className=" font-medium text-[24px] leading-7 text-center mb-5">
          {title}
        </h2>
        <div className="flex justify-center text-center">
          <div className="border-r-4 border-[#D9D9D9]">
            <PricingBox Offer={DayOffer} Price={DayPrice} Time="/DAY" />
          </div>
          <PricingBox Offer={WeekOffer} Price={WeekPrice} Time="/MON" />
          {/* <p className='flex flex-col text-[20px] font-medium px-2 leading-6 border-r-4 border-[#D9D9D9]'><span><span className='text-[#62c05b]'>{DayOffer}</span> /DAY</span> <span className=' line-through text-[#D5281D] text-[16px]'>{DayPrice}</span></p> */}
          {/* <p className='flex flex-col text-[20px] font-medium px-2 leading-6 '><span><span className='text-[#62c05b]'>{WeekOffer}</span> /MON</span> <span className=' line-through text-[#D5281D]  text-[16px]'>{WeekPrice}</span></p> */}
        </div>
        <div className="mt-6 relative">
          <div className="mt-4 flex flex-wrap gap-x-2 md:gap-x-6 gap-y-3 group-hover:invisible">
            <StateBox image={Door} state={CarDoors} />
            <StateBox image={Size} state={CarTank} />
            <StateBox image={Econm} state={CarEconm} />
            <StateBox image={Chair} state={CarSeat} />
            <StateBox image={Country} state={CarCountry} />
            <StateBox image={Petrol} state={CarBattery} />
          </div>
          <Link
            href="/OurCars/1"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block"
          >
            <Image src={SeeDetails} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
