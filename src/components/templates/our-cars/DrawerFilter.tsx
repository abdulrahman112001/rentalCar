import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';


type Anchor = 'top' | 'left' | 'bottom' | 'right';


import { MainHeading } from '../../moluecles'
import { BrandAndModelBox, PriceBox } from '..'
import Image from 'next/image'
import { ArrowBottom, Location, LocationArea,ArrowBottomGreen, FilterIcon } from '../../atom/assets'


//CheckBox

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { red } from '@mui/material/colors';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


import CloseIcon from '@mui/icons-material/Close';


import { FaFilter } from "react-icons/fa";




export default function DrawerFilter() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
        };

    const list = (anchor: Anchor) => (
        <Box
        sx={{ height: anchor === 'top' || anchor === 'bottom' ? 'auto' : 1000 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="text-right p-2">
                <CloseIcon className=" cursor-pointer text-[25px] text-[#333]"  onClick={toggleDrawer(anchor,false)}/>
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
        <div className='w-full'>
            {(['bottom'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                <div className=" block xl:hidden w-full px-3">

                    <Button className='  flex justify-between text-white text-[20px] normal-case font-semibold w-full' onClick={toggleDrawer(anchor, true)}>
                        <span className=''>
                            Filter   
                        </span>
                        <span>
                            <FaFilter />
                        </span>
                    </Button>
                </div>
                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    {list(anchor)}
                </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
