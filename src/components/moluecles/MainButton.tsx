import Image from "next/image";
import React from "react";
import { ArrowRight } from "../atom/assets";
import Link from "next/link";

export default function MainButton({ title, link, arrowRight, className }: any) {
  return (
    <div className="w-full flex justify-center items-center">
      <button className={`${className} border hover:shadow-2xl  border-[#1E1E1E] text-[#1E1E1E] rounded-[2px] md:rounded py-2 md:py-3 px-6 md:px-14 mb-5 `}>
        <Link
          href={link}
          className="flex gap-2 md:gap-5 font-medium md:text-[20px]  leading-6  justify-center items-center "
        >
          {title}
          <Image
            src={ArrowRight}
            alt=""
            className="w-[22px]"
            hidden={arrowRight}
          />
        </Link>
      </button>
    </div>
  );
}
