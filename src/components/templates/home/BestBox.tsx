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
  Image4,
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
    <div className="group best-box w-full sm:w-[47%] lg:w-[32%] shadow-md hover:shadow-lg rounded-lg cursor-pointer">
      <div className="carousel w-full relative">
        
          <div className=" sm:hidden">
            <Swiper
              slidesPerView={1}
              spaceBetween={5}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={NavigationState}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
              <Link href="/OurCars/1">
                <Image src={Image1} alt="" className="min-w-full rounded-t-lg" />
              </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/OurCars/1">
                  <Image src={Image2} alt="" className="w-full rounded-t-lg" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/OurCars/1">
                  <Image src={Image3} alt="" className="w-full rounded-t-lg" />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/OurCars/1">
                  <Image src={Image4} alt="" className="w-full rounded-t-lg" />
                </Link>
              </SwiperSlide>
            </Swiper> 
          </div>

          <div className="hover-effect group/box hidden sm:flex h-[220px] relative p-3">
            <div className=" grow group/part ">
              <Link href="/OurCars/1">
              <div className=" relative z-10 hidden  group-hover/box:flex   min-w-full h-full text-whitex justify-center items-end">
                <div className=" bg-[#232224b9] group-hover/part:bg-white h-[5px] w-[90%] absolute  rounded"></div>
              </div>
              
                  <Image src={Image1} alt="" className="w-full h-full z-[4] group-hover/part:z-[8] rounded-t-lg absolute top-0 left-0 " />
              </Link>
            </div>
            <div className=" grow group/part ">
              <Link href="/OurCars/1">
              <div className=" relative z-10 hidden  group-hover/box:flex   min-w-full h-full text-whitex justify-center items-end">
                <div className=" bg-[#232224b9] group-hover/part:bg-white h-[5px] w-[90%] absolute  rounded"></div>
              </div>
              
                  <Image src={Image2} alt="" className="w-full h-full z-[3] group-hover/part:z-[8] rounded-t-lg absolute top-0 left-0" />
              </Link>
            </div>
            <div className=" grow group/part ">
              <Link href="/OurCars/1">
              <div className=" relative z-10 hidden  group-hover/box:flex  min-w-full h-full text-white  justify-center items-end">
                <div className=" bg-[#232224b9] group-hover/part:bg-white h-[5px] w-[90%] absolute  rounded"></div>
              </div>
              
                  <Image src={Image3} alt="" className="w-full h-full z-[2] group-hover/part:z-[8] rounded-t-lg absolute top-0 left-0" />
              </Link>
              
            </div>
            <div className=" grow group/part ">
              <Link href="/OurCars/1">
              <div className=" relative z-10 hidden  group-hover/box:flex  min-w-full h-full text-white  justify-center items-end">
                <div className=" bg-[#232224b9] group-hover/part:bg-white h-[5px] w-[90%] absolute  rounded"></div>
              </div>
              
                  <Image src={Image4} alt="" className="w-full h-full z- group-hover/part:z-[8] rounded-t-lg absolute top-0 left-0" />
              </Link>
              
            </div>

          </div>
        <Image
          src={CarLogo}
          alt=""
          className="absolute bottom-[20px] right-[10px] z-10 w-[30px] md:w-[44px]"
        />
        <Image
          src={Sale}
          alt=""
          className=" absolute  z-10 -top-0 -left-1"
          hidden={!SaleState}
        />
        <Image
          src={New}
          alt=""
          className=" absolute  z-10 -top-0 -left-1"
          hidden={!NewState}
        />
      </div>
      <Link
            href="/OurCars/1"
          >
        <div className="content w-full p-3 bg-[#f3efef71] ">
          <h2 className=" font-medium text-[20px] lg:text-[24px] leading-7 text-center mb-3 shadow-black">
            {title}
          </h2>
          <div className="flex justify-center text-center">
            <div className="border-r-2 border-[#D9D9D9]">
              <PricingBox Offer={DayOffer} Price={DayPrice} Time="/DAY" />
            </div>
            <PricingBox Offer={WeekOffer} Price={WeekPrice} Time="/MON" />
            {/* <p className='flex flex-col text-[20px] font-medium px-2 leading-6 border-r-4 border-[#D9D9D9]'><span><span className='text-[#62c05b]'>{DayOffer}</span> /DAY</span> <span className=' line-through text-[#D5281D] text-[16px]'>{DayPrice}</span></p> */}
            {/* <p className='flex flex-col text-[20px] font-medium px-2 leading-6 '><span><span className='text-[#62c05b]'>{WeekOffer}</span> /MON</span> <span className=' line-through text-[#D5281D]  text-[16px]'>{WeekPrice}</span></p> */}
          </div>
          <div className="mt-4 relative">
            <div className=" flex flex-wrap gap-x-2 md:gap-x-3 gap-y-3">
              <StateBox image={Door} state={CarDoors} />
              <StateBox image={Chair} state={CarSeat} />
              <StateBox image={Petrol} state={CarBattery} />
              <StateBox image={Econm} state={CarEconm} />
              <StateBox image={Size} state={CarTank} />
              <StateBox image={Country} state={CarCountry} />
            </div>

              {/* <div  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
                <Image src={SeeDetails} alt="" />
              </div> */}
          </div>
        </div>
      </Link>

    </div>
  );
}
