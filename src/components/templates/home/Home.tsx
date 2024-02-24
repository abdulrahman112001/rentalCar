import Image from 'next/image';
import React from 'react';
import {
    BigArticleBox,
    BigBestBox,
    BigChuffarBox,
    BigJourneyBox,
    BigTypeBox,
    Introduction,
    MainButton,
    MainHeading,
    ReviewBox,
} from '@/components/moluecles';
import {
    BlackBackground,
    CarsGroup,
    Offer,
} from '@/components/atom/assets';
import BigReviewBox from '@/components/moluecles/BigReviewBox';
export default function Main() {
    return (
        <>
            <Introduction />
            <div className="carousel container mx-auto">
                <p>carousel</p>
            </div>
            <div className="journey container  my-24 mx-auto px-10">
                <MainHeading heading="START YOUR JOURNEY" />
                <BigJourneyBox />
            </div>
            <div className="offer  relative my-24">
                <Image
                    src={BlackBackground}
                    alt=""
                    className="w-full min-h-[350px] relative"
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
            <div className="types container mx-auto my-24 px-10">
                <MainHeading heading="CAR TYPES" />
                <BigTypeBox />
            </div>
            <div className="best-cars container mx-auto my-24 px-10">
                <MainHeading heading="BEST CARS" />
                <BigBestBox />
                <MainButton title='ALL CARS'  />
            </div>
            <div className="chuffars container mx-auto my-24 px-10">
                <MainHeading heading="CAR & CHUFFAR" />
                <BigChuffarBox />
                <MainButton title='ALL CARS'  />
            </div>
            <div className="articles container mx-auto my-24 px-10">
                <MainHeading heading="Articles" />
                <BigArticleBox />
                <MainButton link='Blogs' title='All Articles'  />
            </div>
            <div className="reviews container mx-auto my-24 px-10">
                <MainHeading heading="REVIEWS" />
                <BigReviewBox />
            </div>
        </>
    );
}
