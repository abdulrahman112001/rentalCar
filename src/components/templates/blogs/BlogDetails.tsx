import React from 'react'
import { Aa, CarDetails1, CarDetails2, Latest1, Latest2, Latest3, Latest4, Latest5, Minus, Plus, Rent, SmallFacebook, SmallInstagram, SmallShare, SmallTelegram, SmallTwitter, SmallWhatsapp, ToBack } from '@/components/atom/assets'
import { ImageMention, LatestBox, MainButton, SearchBox } from '@/components/moluecles'
import Image from 'next/image'


export default function BlogDetails() {
  return (
    <div className='article-details container mx-auto flex gap-10 my-20 relative flex-col lg:flex-row'>
      <a href=""><Image src={ToBack} alt='' className='absolute -top-[60px] left-[10px]'/></a>
      <div className="sidebar lg:min-w-[400px] px-5 ">
        <div className="search shadow-xl bg-[#FAF9F9] rounded-lg px-5 mb-5">
        <SearchBox TitleButton='Search'/>
        </div>
        <div className="latest shadow-xl bg-[#FAF9F9] rounded-lg sm:px-5 py-6 mb-10">
            <h2 className='font-medium text-[26px] leading-7 mb-5 ml-5 sm:ml-0'>Latest</h2>
            <LatestBox month='Sep' day='20' image={Latest1} hour='1 hour ago' name='Rolls Royce Cullnan 2023'/>
            <LatestBox month='Sep' day='20' image={Latest2} hour='1 hour ago' name='Rolls Royce Cullnan 2023'/>
            <LatestBox month='Sep' day='20' image={Latest3} hour='1 hour ago' name='Rolls Royce Cullnan 2023'/>
            <LatestBox month='Sep' day='20' image={Latest4} hour='1 hour ago' name='Rolls Royce Cullnan 2023'/>
            <LatestBox month='Sep' day='20' image={Latest5} hour='1 hour ago' name='Rolls Royce Cullnan 2023'/>
        </div>
        <Image src={Rent} alt='' className='w-full' />
      </div>
      <div className="content flex-grow px-5 order-5 lg:order-8">
        <div className="top">
          <h2 className=' font-medium text-[28px] leading-[34px] mb-6'>Rolls Royce Cullinan Mansory 2023 </h2>
          <div className='flex flex-col lg:flex-row gap-3 mb-10'>
            <p className='text-[#928c8c]'>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
            </p>
            <Image src={CarDetails1} alt='' className=' self-start w-full'/>
          </div>
        </div>
        <div className="medium mb-8">
            <h2 className=' font-medium text-[24px] leading-[30px] mb-3'>Explore More About This</h2>
            <p className='lg:text-[18px] font-medium leading-[22px] text-[#666666] mb-4'>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
              with ipsum dolor sit amet...
            </p>
            <Image src={CarDetails2} alt='' className='w-full'/>
        </div>
        <div className="bottom flex justify-center">
          <button className="bg-gradient-to-r from-[#424242] to-[#1E1E1E]   h-[44px]  font-medium text-[20px] leading-6  hover:shadow-2xl   text-white   rounded py-2 px-7 md:px-14 ">
            Find Car
          </button>
        </div>

      </div>
      <div className="icons flex lg:flex-col justify-center lg:justify-start gap-10 px-5 order-4 lg:order-9 flex-wrap">
        <div className="top w-fit lg:w-[60px] flex lg:flex-col justify-center   items-center px-6 lg:px-0 py-5 shadow-xl rounded-full gap-8 bg-[#F3EFEF]  lg:mt-14">
          <Image src={Plus} alt=''/>
          <Image src={Aa} alt=''/>
          <Image src={Minus} alt=''/>
        </div>
         <div className="top w-full lg:w-[60px] flex lg:flex-col justify-center flex-wrap items-center px-6 lg:px-0 py-5 shadow-xl rounded-lg sm:rounded-full gap-8 bg-[#F3EFEF] ">
          <ImageMention link='/' image={SmallTelegram} />
          <ImageMention link='/' image={SmallFacebook} />
          <ImageMention link='/' image={SmallInstagram} />
          <ImageMention link='/' image={SmallWhatsapp} />
          <ImageMention link='/' image={SmallTwitter} />
          <ImageMention link='/' image={SmallShare} />

        </div>
      </div>
    </div>
  )
}
