import React from 'react'
import { ReviewBox } from '../'
import { Person1, Person2, Review1, Review2, Review3 } from '../../atom/assets'

// Swiper 
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



export default function BigReviewBox() {
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
                        <ReviewBox
                            carImage={Review1}
                            personImage={Person1}
                            name= 'Our innovation'
                            time= 'Our innovation'
                            firstParagraph= 'Our innovation goes beyond boundaries - distinguished customer service - a distinguished fleet of cars - competitive prices'
                            secondParagraph= 'Our innovation goes beyond boundaries - distinguished customer service - a distinguished fleet of'
                        />  
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewBox
                            carImage={Review2}
                            personImage={Person2}
                            name= 'Our innovation'
                            time= 'Our innovation'
                            firstParagraph= 'Our innovation goes beyond boundaries - distinguished customer service - a distinguished fleet of cars - competitive prices'
                            secondParagraph= 'Our innovation goes beyond boundaries - distinguished customer service - a distinguished fleet of'
                        />  
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewBox
                            carImage={Review3}
                            personImage={Person1}
                            name= 'Our innovation'
                            time= 'Our innovation'
                            firstParagraph= 'Our innovation goes beyond boundaries - distinguished customer service - a distinguished fleet of cars - competitive prices'
                            secondParagraph= 'Our innovation goes beyond boundaries - distinguished customer service - a distinguished fleet of'
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="big-box  my-14 hidden sm:flex flex-col gap-10">
                <ReviewBox
                    carImage={Review1}
                    personImage={Person1}
                    name= 'Our innovation'
                    time= 'Our innovation'
                    firstParagraph= 'Our innovation goes beyond boundaries - distinguished customer service - a distinguished fleet of cars - competitive prices'
                    secondParagraph= 'Our innovation goes beyond boundaries - distinguished customer service - a distinguished fleet of'
                />  
                <ReviewBox
                    carImage={Review2}
                    personImage={Person2}
                    name= 'Our innovation'
                    time= 'Our innovation'
                    firstParagraph= 'Our innovation goes beyond boundaries - distinguished customer service - a distinguished fleet of cars - competitive prices'
                    secondParagraph= 'Our innovation goes beyond boundaries - distinguished customer service - a distinguished fleet of'
                />
                <ReviewBox
                    carImage={Review3}
                    personImage={Person1}
                    name= 'Our innovation'
                    time= 'Our innovation'
                    firstParagraph= 'Our innovation goes beyond boundaries - distinguished customer service - a distinguished fleet of cars - competitive prices'
                    secondParagraph= 'Our innovation goes beyond boundaries - distinguished customer service - a distinguished fleet of'
                />

            </div>
        </>
        
    ) 
}
