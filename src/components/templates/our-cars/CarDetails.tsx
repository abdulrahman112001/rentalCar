import {
  CarInsurance,
  CarSeat,
  Check1,
  Check2,
  Check3,
  Check4,
  Check5,
  FuelStation,
  Measuring,
  MoneyDollar,
  RedCheck,
  RedDoor,
  ToBack,
  ToForward,
} from "@/components/atom/assets";
import { PricingBox, SearchBox } from "@/components/moluecles";

import { RequirementsModal, FAQModal, SpecificationBox, BookEasily } from "..";
import Image from "next/image";
import Link from "next/link";
import ModalComp from "@/components/moluecles/Modal";
import { useState } from "react";

export default function CarDetails() {
  const [openModal, setOPenModal] = useState(false);
  return (
    <div className="car-details container mx-auto  my-12 relative ">
      <Link href="/">
        <Image src={ToBack} alt="" className="absolute -top-[0] left-[10px]" />
      </Link>
      <div className="top mb-8 px-5">
        <h2 className=" font-medium text-[24px] lg:text-[28px] pl-[45px] mb-10">
          Rent Rolls Royce Cullinan Mansory 2023 in Dubai
        </h2>
        <div className="car-check lg:h-[300px] flex gap-3  flex-col lg:flex-row">
          <Image src={Check1} alt="" className="flex-grow w-full lg:w-auto" />
          <Image src={Check2} alt="" className="flex-grow w-[0] lg:w-auto" />
          <div className=" flex flex-col gap-3">
            <Image src={Check3} alt="" className="flex-grow w-[0] lg:w-[220px]" />
            <Image src={Check4} alt="" className="flex-grow w-[0] lg:w-[220px]" />
          </div>
          <div>
            <Image src={Check5} alt="" className="flex-grow w-[0] lg:w-[280px] h-full" />
          </div>
        </div>
      </div>
      <div className="center mb-20 px-5 flex gap-10 flex-col lg:flex-row">
        <div className="description flex-grow">
          <h2 className="font-medium text-[24px] leading-7 mb-6">
            Description
          </h2>
          <p className="text-[#666666] ">
            Rent and drive this Rolls Royce Cullinan Mansory 2022-model in
            Dubai, UAE for AED 7500/day. Rental cost includes basic
            comprehensive insurance and standard mileage limit of 250 km/day
            (AED 15 per additional km applicable). Security deposit of AED 5000
            is required. Contact Luxury Supercar Rentals directly for bookings
            and inquiries...
          </p>
          <div className="specification flex justify-between md:justify-start  gap-6  flex-wrap my-10">
            <SpecificationBox image={RedDoor} description="4 Door" />
            <SpecificationBox image={CarInsurance} description="Swedan" />
            <SpecificationBox image={MoneyDollar} description="Econm" />
            <SpecificationBox image={FuelStation} description="Petrol" />
            <SpecificationBox image={CarSeat} description="4 Seat" />
            <SpecificationBox image={Measuring} description="6.5L/100K" />
          </div>
          <div className="highlights">
            <h2 className="font-medium text-[24px] leading-7 mb-4">
              Highlights
            </h2>
            <ul className="flex flex-wrap gap-x-10 gap-y-4">
              <li className="flex gap-4 lg:w-[40%]">
                <Image src={RedCheck} alt="" />
                <span className="text-[18px] lg:text-[20px] font-medium leading-6">
                  1 Day Rental Available
                </span>
              </li>
              <li className="flex gap-4 lg:w-[40%]">
                <Image src={RedCheck} alt="" />
                <span className="text-[18px] lg:text-[20px] font-medium leading-6">
                  Driver included
                </span>
              </li>
              <li className="flex gap-4 lg:w-[40%]">
                <Image src={RedCheck} alt="" />
                <span className="text-[18px] lg:text-[20px] font-medium leading-6">
                  Deposit: AED300
                </span>
              </li>
              <li className="flex gap-4 lg:w-[40%]">
                <Image src={RedCheck} alt="" />
                <span className="text-[18px] lg:text-[20px] font-medium leading-6">
                  Delivery Know More
                </span>
              </li>
              <li className="flex gap-4 lg:w-[40%]">
                <Image src={RedCheck} alt="" />
                <span className="text-[18px] lg:text-[20px] font-medium leading-6">
                  Insurance Included
                </span>
              </li>
              <li className="flex gap-4 lg:w-[40%]">
                <Image src={RedCheck} alt="" />
                <span className="text-[18px] lg:text-[20px] font-medium leading-6">
                  Insurance Included
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="check lg:min-w-[450px] bg-[#FAF9F9] shadow-xl rounded-lg px-6 py-10  self-start">
          <div className=" pb-6 border-b border-[#1e1e1e81]">
            <PricingBox Offer="500 AED/" Price="600 AED" Time="day" />
          </div>
          <SearchBox
            TitleButton="Check Availability"
            action={() => setOPenModal(true)}
          />
          <ul className=" flex flex-col gap-2">
            <li className="text-[16px] lg:text-[20px] font-medium text-[#666666]">
              <span>1.</span> 1 Day Rental Available
            </li>
            <li className="text-[16px] lg:text-[20px] font-medium text-[#666666]">
              <span>2.</span> Deposit: AED 300
            </li>
            <li className="text-[16px] lg:text-[20px] font-medium text-[#666666]">
              <span>3.</span> 500 km max
            </li>
          </ul>
          <ModalComp
            open={openModal}
            onClose={() => setOPenModal(false)}
            Children={<BookEasily />}
          />
        </div>
      </div>
      <div className="bottom flex flex-col px-5 mb-32 gap-5">
        <div className="h-[88px] flex justify-between items-center bg-[#FAF9F9] p-5">
          <span className="font-medium text-[22px] lg:text-[24px]">
            Supplier Details{" "}
          </span>
          <Link href="/">
            <Image src={ToForward} alt="" />
          </Link>
        </div>

        <RequirementsModal />
        <FAQModal />
      </div>

    </div>
  );
}
