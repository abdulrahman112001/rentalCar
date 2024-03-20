import React from 'react'
import { Article1, Article2, Article3 } from '../../atom/assets'
import { ArticleBox } from '@/components/moluecles'

// Swiper 
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function BigArticleBox() {
    return (
        <div>
            <div className=' sm:hidden my-8 overflow-visible '>
            <Swiper
            slidesPerView={1.11}
            spaceBetween={15}
            loop={true}
            className="mySwiper "
        >
                    <SwiperSlide>
                        <ArticleBox link='Blogs/1' date='12 Sep 2024' ArticleImage={Article1} ArticleTitle='Volksvagen Polo (2019)' ArticleContent='is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ArticleBox link='Blogs/1' date='12 Sep 2024' ArticleImage={Article2} ArticleTitle='Volksvagen Polo (2019)' ArticleContent='is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ArticleBox link='Blogs/1' date='12 Sep 2024' ArticleImage={Article3} ArticleTitle='Volksvagen Polo (2019)' ArticleContent='is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..'/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="big-box hidden  sm:flex flex-wrap justify-between items-center gap-y-10 my-14">
                <ArticleBox link='Blogs/1' date='12 Sep 2024' ArticleImage={Article1} ArticleTitle='Volksvagen Polo (2019)' ArticleContent='is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..'/>
                <ArticleBox link='Blogs/1' date='12 Sep 2024' ArticleImage={Article2} ArticleTitle='Volksvagen Polo (2019)' ArticleContent='is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..'/>
                <ArticleBox link='Blogs/1' date='12 Sep 2024' ArticleImage={Article3} ArticleTitle='Volksvagen Polo (2019)' ArticleContent='is simply dummy text of the printing and typesetting industry. Lorem Ipsum ..'/>
            </div>
        </div>
    )
}
