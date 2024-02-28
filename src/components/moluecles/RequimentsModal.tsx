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
import { AccordionBox, TabsBox } from '.';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function RequimentsModal() {
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
            <span className='font-medium text-[22px] lg:text-[24px]'>Requirments</span>
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
            className="absolute -top-[0px]  right-[20px] lg:left-[10px] cursor-pointer"
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            />
            <h2 className="text-[24px] font-medium leading-[30px] lg:text-center mb-8">
                Requirments
            </h2>
            <div className="requiments lg:w-[560px] mx-auto ">
                <div className="bg-[#FAF9F9] rounded-lg p-5 shadow-lg mb-8">
                    <div className='flex justify-between mb-3'>
                        <span className='font-weight text-[18px]'>Minimum Driver’s Age</span>
                        <span className='font-weight text-[18px] text-[#D5281D]'>18 Years</span>
                    </div>
                    <div className='flex justify-between mb-3'>
                        <span className='font-weight text-[18px]'>Security Deposite</span>
                        <span className='font-weight text-[18px] text-[#D5281D]'>AED 500</span>
                    </div>
                    <div className='flex justify-between '>
                        <span className='font-weight text-[18px]'>Refunded In</span>
                        <span className='font-weight text-[18px] text-[#D5281D]'>30 Days</span>
                    </div>
                </div>
                <h2 className="text-[24px] font-medium leading-[30px] mb-5">
                    Documents Required
                </h2>
                <p className='text-[#666666] mb-8'>We are eligible to rent a car across the emirates provided you have the below mentioned documents valid with you</p>
                <div className="tabs mb-8">
                    <TabsBox />
                </div>
                <p className='text-[#666666]'>Visitors from the GCC, US, UK, Canada, Europe and certain other countries can drive with their home country driving license, without the need of an IDP.</p>
            </div>
        </div>
        </Dialog>
    </React.Fragment>
    );
}