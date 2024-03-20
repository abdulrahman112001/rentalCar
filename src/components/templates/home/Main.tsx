import Image from "next/image";
import React from "react";
import {
  MainButton,
  MainHeading,
} from "@/components/moluecles";
import {
  BigBestBox,
  BigChauffeurBox,
  BigJourneyBox,
  BigTypeBox,
  Introduction,
  MainCarousel,
  BigReviewBox,
  BigArticleBox,

} from "../";
import { BlackBackground, CarsGroup, Offer } from "@/components/atom/assets";
export default function Main() {
  return (
    <>
      <Introduction />
      <div className="main-carousel container mx-auto mt-10 px-5 md:px-10">
        <MainCarousel />
      </div>
      <div className="journey container mx-auto  my-16 md:my-24  px-5">
        <div className="text-center">
          <MainHeading heading="START YOUR JOURNEY" />
        </div>
        <BigJourneyBox />
        <MainButton title="Find Car" link="/OurCars" arrowRight={true} className=' md:hidden'/>

      </div>
      <div className="offer  relative my-16 md:my-24 ">
        <Image
          src={BlackBackground}
          alt=""
          className="w-full min-h-[200px] sm:min-h-[350px] relative"
        />
        <Image
          src={CarsGroup}
          alt=""
          className=" absolute top-1/2 left-1/2 -translate-x-1/2"
        />
        <Image
          src={Offer}
          alt=""
          className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] md:-translate-y-[75%] w-[270px] md:w-auto"
        />
      </div>
      <div className="types container mx-auto my-16 md:my-24 px-5 ">
        <div className="text-center">
          <MainHeading heading="CAR TYPES" />
        </div>
        <BigTypeBox />
      </div>
      <div className="best-cars container mx-auto my-16 md:my-24 px-5">
        <div className="text-center">
          <MainHeading heading="BEST CARS" />
        </div>
        <BigBestBox />
        <MainButton title="ALL CARS" link="/OurCars" />
      </div>
      <div className="chuffars container mx-auto my-16 md:my-24 px-5">
        <div className="text-center">
          <MainHeading heading="CAR & CHUFFAR" />
        </div>
        <BigChauffeurBox />
        <MainButton title="ALL CARS" link="/OurCars" />
      </div>
      <div className="articles container mx-auto my-16 md:my-24 px-5">
        <div className="text-center">
          <MainHeading heading="Articles" />
        </div>
        <BigArticleBox />
        <MainButton link="Blogs" title="All Articles" />
      </div>
      <div className="reviews container mx-auto my-16 md:my-24 px-5">
        <div className="text-center">
          <MainHeading heading="REVIEWS" />
        </div>
        <BigReviewBox />
      </div>
    </>
  );
}
