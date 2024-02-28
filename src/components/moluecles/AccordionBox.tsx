import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import { Close, RedPlus } from '@/components/atom/assets';

export default function AccordionBox({AccordiontTitle,children}:any) {
    return (
        <Accordion >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                className=' border-b '
                >
                <span className='font-medium text-[18px] lg:text-[20px]'>{AccordiontTitle}</span>
                <Image src={RedPlus} alt='' className='h-[12px] w-[12px]'/>
                </AccordionSummary>
                <AccordionDetails className='border-t'>
                {children}
                </AccordionDetails>
            </Accordion>
    )
}
