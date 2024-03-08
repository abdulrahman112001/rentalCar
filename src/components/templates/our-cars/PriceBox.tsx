import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
    return `${value}°C`;
}
export default function PriceBox() {
    //Slider
    const [value, setValue] = React.useState<number[]>([20, 37]);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    return (
        <div className="price my-5">
                    <div className='flex items-center gap-4'>
                        <h2 className='text-[24px] leading-[29px] font-medium'>Price</h2>
                        <span className='text-[#5EAB58] font-medium text-[20px]'>(Per Day)</span>
                    </div>
                    <div className="flex justify-center gap-5 my-4">
                        <span className='bg-white rounded shadow-lg py-2 text-[22px] font-semibold leading-6 text-[#1e1e1e] px-7'>$ {value}</span>
                        <span className='bg-white rounded shadow-lg py-2 text-[22px] font-semibold leading-6 text-[#1e1e1e] px-7'>$ 100</span>
                    </div>
                    <div className="slider flex justify-center">
                        <Box sx={{ width: 350 }}>
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                            />
                        </Box>
                    </div>
        </div>
    )
}
