import Image from 'next/image';
import React from 'react';
import { Down, Kingdom } from '../atom/assets/index';

export default function Languages() {
    return (
        <div className="language flex gap-2 items-center md:ml-5 lg:ml-10">
        English
        <Image alt="" src={Kingdom} className="rounded-full w-[18px] h-[18px]" />
        <Image alt="" src={Down} className=" align-bottom w-[12px] h-[8px]" />
        </div>
    );
}
