import React from 'react'
import { MainHeading } from '../../moluecles'
import { BrandAndModelBox, PriceBox } from '..'
import Image from 'next/image'
import { ArrowBottom, Location, LocationArea,ArrowBottomGreen } from '../../atom/assets'


//CheckBox

// import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { red } from '@mui/material/colors';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


// import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import CloseIcon from '@mui/icons-material/Close';


import { FaGear } from "react-icons/fa6";

export default function DrawerFilter() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    

    const DrawerList = (
        <Box  sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} >
            <div className="text-right p-2">
                <CloseIcon className=" cursor-pointer text-[25px] text-[#333]"  onClick={toggleDrawer(false)}/>
            </div>  
            <List className='p-4'>
                <form >
                <div className="filter flex items-center justify-between mb-6">
                    <MainHeading heading='Filters' />
                    <input type="reset" value="Rest All" className='cursor-pointer font-medium text-[20px] leading-[25px] text-[#5EAB58]'/>
                </div>
                <div className="location">
                    <div className='flex justify-between items-center'>
                        <h2 className='text-[24px] leading-[29px] font-medium'>Location</h2>
                        <Image src={Location} alt='' />
                    </div>
                    <Image src={LocationArea} alt=''  className='w-full my-4'/>
                </div>
                <hr />
                <PriceBox />
                <hr />
                <BrandAndModelBox />
                <hr />
                <div className="checks my-5">
                    <div className="seats mb-5">
                        <div className='flex justify-between items-center mb-2'>
                            <h2 className='text-[24px] leading-[29px] font-medium'>Num of Seats</h2>
                            <Image src={ArrowBottom} alt='' />
                        </div>
                        <div className="checkboxs">
                        <FormGroup>
                            <FormControlLabel color='primary' control={<Checkbox  />} label="1-2 seats" />
                            <FormControlLabel color='primary' control={<Checkbox />} label="3-4 seats" />
                            <FormControlLabel color='primary' control={<Checkbox />} label="6-7 seats" />
                            <FormControlLabel color='primary' control={<Checkbox />} label="+10 seats" />
                        </FormGroup>
                        </div>
                    </div>
                    <div className="vehicles mb-5">
                        <div className='flex justify-between items-center mb-2'>
                            <h2 className='text-[24px] leading-[29px] font-medium'>Vehicle Type</h2>
                            <Image src={ArrowBottom} alt='' />
                        </div>
                        <FormGroup className='mb-2'>
                            <FormControlLabel control={<Checkbox  />} label="Luxary" />
                            <FormControlLabel control={<Checkbox />} label="Suv" />
                            <FormControlLabel control={<Checkbox />} label="Sedan" />
                            <FormControlLabel control={<Checkbox />} label="Economy" />
                            <FormControlLabel control={<Checkbox />} label="Sports" />
                            <FormControlLabel control={<Checkbox />} label="Van" />
                        </FormGroup>
                        <div className='flex items-center gap-4 text-[#5EAB58]'>
                            <p className='text-[24px] leading-[29px] font-medium'>Show All</p>
                            <Image src={ArrowBottomGreen} alt='' />
                        </div>
                    </div>
                    <div className="features mb-5">
                        <div className='flex justify-between items-center mb-2'>
                            <h2 className='text-[24px] leading-[29px] font-medium'>Car Features</h2>
                            <Image src={ArrowBottom} alt='' />
                        </div>
                        <FormGroup className='mb-2'>
                            <FormControlLabel control={<Checkbox  />} label="Curise control" />
                            <FormControlLabel control={<Checkbox />} label="Bluetooth" />
                            <FormControlLabel control={<Checkbox />} label="Reverse Camera" />
                            <FormControlLabel control={<Checkbox />} label="Parking Sensors" />
                            <FormControlLabel control={<Checkbox />} label="Built in gps" />
                            <FormControlLabel control={<Checkbox />} label="Leather seats" />
                        </FormGroup>
                        <div className='flex items-center gap-4 text-[#5EAB58]'>
                            <p className='text-[24px] leading-[29px] font-medium'>Show All</p>
                            <Image src={ArrowBottomGreen} alt='' />
                        </div>
                    </div>
                    <div className="features mb-5">
                        <div className='flex justify-between items-center mb-2'>
                            <h2 className='text-[24px] leading-[29px] font-medium'>Car Colors</h2>
                            <Image src={ArrowBottom} alt='' />
                        </div>
                        <FormGroup className='mb-2'>
                            <FormControlLabel control={<Checkbox  />} label="Red" />
                            <FormControlLabel control={<Checkbox />} label="Blue" />
                            <FormControlLabel control={<Checkbox />} label="Black" />
                            <FormControlLabel control={<Checkbox />} label="Green" />
                            <FormControlLabel control={<Checkbox />} label="White" />
                            <FormControlLabel control={<Checkbox />} label="Silver" />
                        </FormGroup>
                        <div className='flex items-center gap-4 text-[#5EAB58]'>
                            <p className='text-[24px] leading-[29px] font-medium'>Show All</p>
                            <Image src={ArrowBottomGreen} alt='' />
                        </div>
                    </div>
                </div>
                <input type="submit" value="Update" className=' text-[20px] font-medium w-full py-3 px-14 border border-[#1E1E1E] rounded cursor-pointer' />
                </form>
            </List>
        </Box>
    );
    return (
        <div className="drawer-filter block lg:hidden">
            <Button className=' absolute left-0' onClick={toggleDrawer(true)}><FaGear /></Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>   
        </div>
    )
}
