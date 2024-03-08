import Image from 'next/image';
import React from 'react';
import { BMW, Down, Emirates, Kingdom } from '../atom/assets/index';

// import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Languages() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='multi-language'>
            <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
                <div className="language flex gap-2 items-center normal-case text-[18px]">
                    <span className='w-[70px] text-black font-medium'>English</span>
                    <Image alt="" src={Kingdom} className="rounded-full w-[18px] h-[18px]" />
                    <Image alt="" src={Down} className=" w-[14px] h-[14px]" />
                </div>
            </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
            className='py-0'
        >
            <MenuItem onClick={handleClose} selected={true} >
                <div className="language flex gap-2 items-center">
                    <span className='w-[70px]'>English</span>
                    <Image alt="" src={Kingdom} className="rounded-full w-[18px] h-[18px]" />
                </div>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <div className="language flex gap-2 items-center">
                <span className='w-[70px]'>اللغه العربيه</span>
                    <Image alt="" src={Emirates} className="rounded-full w-[18px] h-[18px]" />
                </div>
            </MenuItem>
        </Menu>



            {/* <div className="language flex gap-2 items-center md:ml-5 lg:ml-10">
                English
                <Image alt="" src={Kingdom} className="rounded-full w-[18px] h-[18px]" />
                <Image alt="" src={Down} className=" align-bottom w-[12px] h-[8px]" />
            </div> */}
        </div>

    );
}
