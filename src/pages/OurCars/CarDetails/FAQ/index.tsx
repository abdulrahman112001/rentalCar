import * as React from 'react';

import Image from 'next/image';
import { Close } from '@/components/atom/assets';
import { AccordionBox } from '@/components/moluecles';


export default function index() {
    return (
        <div className="container mx-auto my-12 relative px-7">
        <a href="">
            <Image
            src={Close}
            alt=""
            className="absolute -top-[0px]  right-[10px] lg:left-[10px]"
            />
        </a>
        <h2 className="text-[24px] font-medium leading-[30px] lg:text-center mb-12">
            FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="accordion lg:w-[560px] mx-auto accordion-faq" >
          <AccordionBox AccordiontTitle='How Can i get this car delivered? '>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum .. </AccordionBox>
          <AccordionBox AccordiontTitle='How Can i get this car delivered? '>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum .. </AccordionBox>
          <AccordionBox AccordiontTitle='How Can i get this car delivered? '>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum .. </AccordionBox>
          <AccordionBox AccordiontTitle='How Can i get this car delivered? '>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum .. </AccordionBox>
          <AccordionBox AccordiontTitle='How Can i get this car delivered? '>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum .. </AccordionBox>
          <AccordionBox AccordiontTitle='How Can i get this car delivered? '>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum .. </AccordionBox>
          <AccordionBox AccordiontTitle='How Can i get this car delivered? '>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum .. </AccordionBox>
          <AccordionBox AccordiontTitle='How Can i get this car delivered? '>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum .. </AccordionBox>
        </div>
        </div>
    );
}
