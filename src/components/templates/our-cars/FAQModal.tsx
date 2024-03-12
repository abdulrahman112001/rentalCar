import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Image from 'next/image';
import { Close, ToForward } from '../../atom/assets';
import { AccordionBox } from '../';


import ModalComp from '@/components/moluecles/Modal';
import { useState } from "react";





export default function FAQModal() {
    const [openModal, setOPenModal] = useState(false);

    return (

        <div>
            <div onClick={()=> setOPenModal(true)} className=' cursor-pointer h-[88px] flex justify-between items-center bg-[#FAF9F9] p-5 w-full'>
                <span className='font-medium text-[22px] lg:text-[24px]'>FAQ</span>
                <Image src={ToForward} alt=''/>
            </div>
            <ModalComp
            open={openModal}
            onClose={() => setOPenModal(false)}
            Children={ <div className="container mx-auto my-12 relative px-7">

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
            }
            />
        </div>
        

        

    );
}