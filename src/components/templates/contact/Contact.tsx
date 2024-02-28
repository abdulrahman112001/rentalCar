import { Phone, WhatsApp ,Telegram} from '@/components/atom/assets'
import { ContactBox, MainHeading } from '@/components/moluecles'
import React from 'react'

export default function Contact() {
  return (
    <div className="contact container mx-auto my-16 px-10">
      <div className="text-center"><MainHeading heading='Contact Us' /></div>
      <p className='leading-5 lg:text-[20px] lg:w-[400px] my-6 text-center  mx-auto text-[#666666]'>Book your car through our website without wasting your time</p>
      <div className="big-box flex flex-wrap justify-between items-center gap-y-10 my-14">
          <ContactBox link='/' contactImage={WhatsApp} title='WhatsApp' firstNumber='01023876299' secondNumber='01023876299' linkDescription='Chat With us' />
          <ContactBox link='/' contactImage={Phone} title='Phone' firstNumber='01023876299' secondNumber='01023876299' linkDescription='Call' />
          <ContactBox link='/' contactImage={Telegram} title='Telegram' firstNumber='01023876299' secondNumber='01023876299' linkDescription='Chat With us' />
      </div>
    </div>
  )
}
