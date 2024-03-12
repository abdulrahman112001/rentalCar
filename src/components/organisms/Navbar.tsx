import { Languages, MainLink } from '@/components/moluecles';
import { Logo } from '@/components/atom/assets/';
import Image from 'next/image';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';


export default function Navbar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: any, open: boolean) => (event:any) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor:any) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="text-right p-2">
        <CloseIcon className=" cursor-pointer text-[25px] text-[#333]"  onClick={toggleDrawer(anchor, false)}/>
      </div>
      <List className="flex gap-3">
        <div className="image">
          <Link href="/">
            <Image src={Logo} alt="" className="w-[120px]" />
          </Link>
        </div>
        <Languages />
      </List>
      <List>
        <div className="flex flex-col gap-3">
          <MainLink link="/">Home</MainLink>
          <MainLink link="Blogs">Blogs</MainLink>
          <MainLink link="OurCars">Our Cars</MainLink>
        </div>
      </List>
      <Divider />
      <List>
        <div className="flex flex-col gap-3">
          <MainLink link="ContactUs">Contact Us</MainLink>
          <MainLink link="AboutUs">About Us</MainLink>
        </div>
      </List>
    </Box>
  );

  return (
    <div className=" bg-[#F3EFEF]">
      <div className="hidden md:flex  navbar h-[70px] gap-0 md:gap-4  lg:gap-10 items-center justify-center pl-10 ">
        <div className="left flex gap-9">
          <MainLink link="Blogs">Blogs</MainLink>
          <MainLink link="OurCars">Our Cars</MainLink>
          <MainLink link="/">Home</MainLink>
        </div>
        <div className="image w-[120px]">
          <Link href="/">
            <Image src={Logo} alt="" className="w-[120px]" />
          </Link>
        </div>
        <div className="right flex gap-9">
          <MainLink link="ContactUs">Contact Us</MainLink>
          <MainLink link="AboutUs">About Us</MainLink>
        </div>
        <Languages />
      </div>
      <div className="md:hidden  ">
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <div className='flex justify-between w-full'>
            <Button
              onClick={toggleDrawer(anchor, true)}
              className=" text-[#979393] "
            >
              <MenuIcon className='text-[30px]'/>
            </Button>
            <div className="image">
                <a href="">
                  <Image src={Logo} alt="" className="w-[120px]" />
                </a>
              </div>
            </div>

            <Drawer
            //@ts-ignore
              anchor={anchor}
            //@ts-ignore

              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
