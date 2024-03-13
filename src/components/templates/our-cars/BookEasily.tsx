
import { Check1, Email, Marker, Name  } from '@/components/atom/assets';
import { PricingBox } from '@/components/moluecles';
import Image from 'next/image';


export default function index() {
    return (
        <div className="container mx-auto mb-4 relative px-3">
            {/* <a href="">
                <span className="absolute text-[22px] font-medium text-[#D5281D] -top-[0px]  left-[10px]">Cancel</span>
            </a> */}
            <h2 className="text-[24px] font-medium leading-[30px] text-center mb-8">
                BookEasily
            </h2>   
            <div className="book lg:w-[600px] mx-auto ">
                <div className='rounded-lg p-2 bg-[#FAF9F9] flex flex-col md:flex-row gap-3 mb-8 shadow-lg'>
                    <Image src={Check1} alt='' className='w-full md:w-[160px] min-h-[124px]'/>
                    <div  className='flex flex-col justify-between gap-3 min-h-full py-2'>
                        <h2 className=' font-medium text-[20px]'>Rolls Royce Cullinan Mansory 2023 </h2>
                        <p className='text-[#666666]'>Rent and drive this Rolls Royce Cullinan Mansory 2022-model in Dubai</p>
                        <span><Image src={Marker} alt=''/></span>
                    </div>
                </div>
                <div className='mb-8'>
                    <p className='text-[18px] font-medium mb-3'>Summary Information:</p>
                    <div className='bg-[#FAF9F9] p-3 md:p-5 shadow-lg'>
                        <div className='top flex justify-between mb-5' >
                            <div className='flex flex-col'>
                                <span className='text-[#666666]'>Pick Up</span>
                                <span className='font-medium text-[20px]'>12 dec 2016</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-[#666666]'>Drop Off</span>
                                <span className='font-medium text-[20px]'>18 dec 2016</span>
                            </div>
                            <p className='text-[#3EA62B] text-[18px] font-medium'>Edit</p>
                        </div>
                        <div className='center flex justify-between mb-5' >
                            <div className='flex flex-col'>
                                <span className='text-[#666666]'>500 AED/per day</span>
                                <span className='text-[#666666]'>500 x 3</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-[#D5281D]'>(500 km max)</span>
                                
                            </div>
                            <p className='text-[#3EA62B] text-[18px] font-medium'>  </p>
                        </div>
                        <div className="bottom">
                            <PricingBox Offer='Total: 1500' Price='1600 AED'/>
                        </div>
                    </div>
                </div>
                <div>
                    <form action="">
                        <p className='text-[18px] font-medium mb-3'>Customer Information:</p>
                        <div className='bg-[#FAF9F9] p-6 shadow-lg mb-8'>
                            <div className="name flex flex-col gap-2 mb-4">
                                <p className='font-medium text-[18px]'>Name:</p>
                                <div className='w-full h-[44px] relative'>
                                    <input type="text" className='w-full h-full px-4 outline-none border-none'/>
                                    <Image src={Name} alt='' className='absolute top-1/2 -translate-y-1/2 right-[10px]'/>
                                </div>
                            </div>
                            <div className="email flex flex-col gap-2 mb-4">
                                <p className='font-medium text-[18px]'>Email:</p>
                                <div className='w-full h-[44px] relative'>
                                    <input type="email" className='w-full h-full px-4 outline-none border-none'/>
                                    <Image src={Email} alt='' className='absolute top-1/2 -translate-y-1/2 right-[10px]'/>
                                </div>
                            </div>
                            <div className="telephone flex flex-col gap-2">
                                <p className='font-medium text-[18px]'>Phone:</p>
                                <div className='w-full h-[44px] relative'>
                                    <input type="tel" className='w-full h-full px-4 outline-none border-none'/>
                                    {/* <Image src={Telephone} alt='' className='absolute top-1/2 -translate-y-1/2 right-[10px]'/> */}
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center '>
                            <input type="submit" value="Submit" className=' cursor-pointer rounded-lg py-2 px-6 bg-[#1E1E1E] text-white h-[44px] w-[280px] ' />
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    );
}
