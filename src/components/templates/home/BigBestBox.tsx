import React from 'react'
import { BestBox } from '../'
import { BMW, R1, R2, R3, R4, R5 } from '../../atom/assets'

// Swiper 
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



export default function BigBestBox() {
    return (
        <>
            <div className=' sm:hidden my-8 overflow-visible '>
            <Swiper
            slidesPerView={1.11}
            spaceBetween={15}
            loop={true}
            className="mySwiper "
        >
                    <SwiperSlide>
                        <BestBox
                                Image1={R2}
                                Image2={R2}
                                Image3={R2}
                                NewState={true}
                                SaleState={false}
                                NavigationState={false}
                                CarLogo={BMW}
                                title="Volksvagen Polo (2019)"
                                DayOffer="AED 130"
                                DayPrice="AED 130"
                                WeekOffer="AED 130"
                                WeekPrice="AED 130"
                                CarDoors="4"
                                CarTank="6.5L/100K"
                                CarEconm="Econom"
                                CarSeat="4"
                                CarCountry="Swedan"
                                CarBattery="Petrol"
                            />
                    </SwiperSlide>
                    <SwiperSlide>
                        <BestBox
                                Image1={R1}
                                Image2={R1}
                                Image3={R1}
                                NewState={false}
                                SaleState={false}
                                NavigationState={false}
                                CarLogo={BMW}
                                title="Volksvagen Polo (2019)"
                                DayOffer="AED 130"
                                DayPrice="AED 130"
                                WeekOffer="AED 130"
                                WeekPrice="AED 130"
                                CarDoors="4"
                                CarTank="6.5L/100K"
                                CarEconm="Econom"
                                CarSeat="4"
                                CarCountry="Swedan"
                                CarBattery="Petrol"
                            />
                    </SwiperSlide>
                    <SwiperSlide>
                        <BestBox
                                Image1={R4}
                                Image2={R4}
                                Image3={R4}
                                NewState={false}
                                SaleState={false}
                                NavigationState={false}
                                CarLogo={BMW}
                                title="Volksvagen Polo (2019)"
                                DayOffer="AED 130"
                                DayPrice="AED 130"
                                WeekOffer="AED 130"
                                WeekPrice="AED 130"
                                CarDoors="4"
                                CarTank="6.5L/100K"
                                CarEconm="Econom"
                                CarSeat="4"
                                CarCountry="Swedan"
                                CarBattery="Petrol"
                            />
                    </SwiperSlide>
                    <SwiperSlide>
                        <BestBox
                                Image1={R4}
                                Image2={R4}
                                Image3={R4}
                                NewState={false}
                                SaleState={true}
                                NavigationState={false}
                                CarLogo={BMW}
                                title="Volksvagen Polo (2019)"
                                DayOffer="AED 130"
                                DayPrice="AED 130"
                                WeekOffer="AED 130"
                                WeekPrice="AED 130"
                                CarDoors="4"
                                CarTank="6.5L/100K"
                                CarEconm="Econom"
                                CarSeat="4"
                                CarCountry="Swedan"
                                CarBattery="Petrol"
                            />
                    </SwiperSlide>
                    <SwiperSlide>
                        <BestBox
                                Image1={R4}
                                Image2={R4}
                                Image3={R4}
                                NewState={false}
                                SaleState={true}
                                NavigationState={false}
                                CarLogo={BMW}
                                title="Volksvagen Polo (2019)"
                                DayOffer="AED 130"
                                DayPrice="AED 130"
                                WeekOffer="AED 130"
                                WeekPrice="AED 130"
                                CarDoors="4"
                                CarTank="6.5L/100K"
                                CarEconm="Econom"
                                CarSeat="4"
                                CarCountry="Swedan"
                                CarBattery="Petrol"
                            />
                    </SwiperSlide>
                    <SwiperSlide>
                        <BestBox
                                Image1={R5}
                                Image2={R5}
                                Image3={R5}
                                NewState={false}
                                SaleState={false}
                                NavigationState={false}
                                CarLogo={BMW}
                                title="Volksvagen Polo (2019)"
                                DayOffer="AED 130"
                                DayPrice="AED 130"
                                WeekOffer="AED 130"
                                WeekPrice="AED 130"
                                CarDoors="4"
                                CarTank="6.5L/100K"
                                CarEconm="Econom"
                                CarSeat="4"
                                CarCountry="Swedan"
                                CarBattery="Petrol"
                            />
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className="big-box hidden sm:flex flex-wrap justify-between gap-y-8 my-14">
                <BestBox
                    Image1={R2}
                    Image2={R2}
                    Image3={R2}
                    NewState={true}
                    SaleState={false}
                    NavigationState={false}
                    CarLogo={BMW}
                    title="Volksvagen Polo (2019)"
                    DayOffer="AED 130"
                    DayPrice="AED 130"
                    WeekOffer="AED 130"
                    WeekPrice="AED 130"
                    CarDoors="4"
                    CarTank="6.5L/100K"
                    CarEconm="Econom"
                    CarSeat="4"
                    CarCountry="Swedan"
                    CarBattery="Petrol"
                />
                <BestBox
                    Image1={R1}
                    Image2={R1}
                    Image3={R1}
                    NewState={false}
                    SaleState={false}
                    NavigationState={false}
                    CarLogo={BMW}
                    title="Volksvagen Polo (2019)"
                    DayOffer="AED 130"
                    DayPrice="AED 130"
                    WeekOffer="AED 130"
                    WeekPrice="AED 130"
                    CarDoors="4"
                    CarTank="6.5L/100K"
                    CarEconm="Econom"
                    CarSeat="4"
                    CarCountry="Swedan"
                    CarBattery="Petrol"
                />
                <BestBox
                    Image1={R4}
                    Image2={R4}
                    Image3={R4}
                    NewState={false}
                    SaleState={false}
                    NavigationState={false}
                    CarLogo={BMW}
                    title="Volksvagen Polo (2019)"
                    DayOffer="AED 130"
                    DayPrice="AED 130"
                    WeekOffer="AED 130"
                    WeekPrice="AED 130"
                    CarDoors="4"
                    CarTank="6.5L/100K"
                    CarEconm="Econom"
                    CarSeat="4"
                    CarCountry="Swedan"
                    CarBattery="Petrol"
                />
                <BestBox
                    Image1={R3}
                    Image2={R3}
                    Image3={R3}
                    NewState={false}
                    SaleState={false}
                    NavigationState={false}
                    CarLogo={BMW}

                    title="Volksvagen Polo (2019)"
                    DayOffer="AED 130"
                    DayPrice="AED 130"
                    WeekOffer="AED 130"
                    WeekPrice="AED 130"
                    CarDoors="4"
                    CarTank="6.5L/100K"
                    CarEconm="Econom"
                    CarSeat="4"
                    CarCountry="Swedan"
                    CarBattery="Petrol"
                />
                <BestBox
                    Image1={R4}
                    Image2={R4}
                    Image3={R4}
                    NewState={false}
                    SaleState={true}
                    NavigationState={false}
                    CarLogo={BMW}
                    title="Volksvagen Polo (2019)"
                    DayOffer="AED 130"
                    DayPrice="AED 130"
                    WeekOffer="AED 130"
                    WeekPrice="AED 130"
                    CarDoors="4"
                    CarTank="6.5L/100K"
                    CarEconm="Econom"
                    CarSeat="4"
                    CarCountry="Swedan"
                    CarBattery="Petrol"
                />
                <BestBox
                    Image1={R5}
                    Image2={R5}
                    Image3={R5}
                    NewState={false}
                    SaleState={false}
                    NavigationState={false}
                    CarLogo={BMW}
                    title="Volksvagen Polo (2019)"
                    DayOffer="AED 130"
                    DayPrice="AED 130"
                    WeekOffer="AED 130"
                    WeekPrice="AED 130"
                    CarDoors="4"
                    CarTank="6.5L/100K"
                    CarEconm="Econom"
                    CarSeat="4"
                    CarCountry="Swedan"
                    CarBattery="Petrol"
                />
        </div>
        </>

)
}
