import React from 'react'

//Select
// import Box from '@mui/material/Box';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Image from 'next/image';
import { BMW } from '../atom/assets';
import QuantityInput from './QuantityInput';


//Number Input 



export default function BrandAndModelBox() {
    //Select
    const [age, setAge] = React.useState('');
    const handleChangeBrand = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
    };
    return (
        <div className="brand my-6">
            <h2 className='text-[24px] leading-[29px] font-medium'>Car Brand / Model</h2>
            <div className="brand">
                <h3 className='font-medium text-[20px] leading-6 text-[#666666] my-4'>Car Brand</h3>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Brand</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Brand"
                            onChange={handleChangeBrand}
                            >
                            <MenuItem value='BMW'><div className='flex items-center justify-between w-full'><span>BMW</span> <Image src={BMW} alt='' className='w-[28px]' /></div></MenuItem>
                            <MenuItem value='Mercides'><div className='flex items-center justify-between w-full'><span>Mercides</span> <Image src={BMW} alt='' className='w-[28px]' /></div></MenuItem>
                            <MenuItem value='TOYOTA'><div className='flex items-center justify-between w-full'><span>TOYOTA    </span> <Image src={BMW} alt='' className='w-[28px]' /></div></MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
            </div>
            <div className="model">
                <h3 className='font-medium text-[20px] leading-6 text-[#666666] my-4'>Car Model</h3>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Model</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Model"
                            onChange={handleChangeBrand}
                            >
                            <MenuItem value='BMW'>Select Car Model First</MenuItem>
                            <MenuItem value='BMW'>Select Car Model First</MenuItem>
                            <MenuItem value='BMW'>Select Car Model First</MenuItem>
                            <MenuItem value='BMW'>Select Car Model First</MenuItem>

                            </Select>
                        </FormControl>
                    </Box>
            </div>
            <div className="price my-7">
                <h2 className='text-[24px] leading-[29px] font-medium mb-4'>Model Year</h2>
                <QuantityInput />
            </div>
        </div>
    )
}
