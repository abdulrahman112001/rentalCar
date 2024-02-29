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
import { Close, ToForward } from '../atom/assets';
import { AccordionBox } from '.';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FAQModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
        <Button  onClick={handleClickOpen} className='w-full p-0 text-black'>
        <div className='h-[88px] flex justify-between items-center bg-[#FAF9F9] p-5 w-full'>
            <span className='font-medium text-[22px] lg:text-[24px]'>FAQ</span>
            <Image src={ToForward} alt=''/>
        </div>
        </Button>
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
        <div className="container mx-auto my-12 relative px-7">
        <Image
            src={Close}
            alt=""
            className="absolute -top-[0px]  right-[10px] lg:left-[10px] cursor-pointer"
            //@ts-ignore
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            />
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
        </Dialog>
    </React.Fragment>
    );
}