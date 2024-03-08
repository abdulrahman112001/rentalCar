import Image from "next/image";
import { Logo, Instagram,Twitter,LinkedIn } from "../atom/assets";
import { MainLink } from "../moluecles";
import Link from "next/link";



export default function Footer() {
    return (
        <div className="footer  bg-[#F3EFEF] py-[50px]">
            <div className="image w-fit mx-auto mb-8">
                <a href="">
                    <Image src={Logo} alt="" className="w-[120px]" />
                </a>
            </div>
            <div className="social flex  justify-center items-center gap-6 mb-6">
                {/* <a href=""><Image alt='' src={Facebook} className="w-[35px]"/></a> */}
                <a href=""><Image alt='' src={Twitter} className="w-[26px] h-[22px]"/></a>
                <a href=""><Image alt='' src={LinkedIn} className="w-[22px] h-[22px]"/></a>
                <a href=""><Image alt='' src={Instagram} className="w-[35px]"/></a>  
            </div>
            <div className="links flex flex-col md:flex-row gap-16 items-center justify-center mb-6">
                <div className="flex md:flex-col flex-wrap text-center gap-3 w-full md:w-auto ">
                    <div className="w-full">
                        <MainLink link="Blogs">Blogs</MainLink>
                    </div>
                    <Link href='' className="w-[46%] md:w-auto">title</Link>
                    <Link href='' className="w-[46%] md:w-auto">title</Link>
                    <Link href='' className="w-[46%] md:w-auto">title</Link>
                    <Link href='' className="w-[46%] md:w-auto">title</Link>
                </div>
                <div className="flex md:flex-col flex-wrap text-center gap-3 w-full md:w-auto">
                    <div className="w-full">
                        <MainLink link="OurCars">Our Cars</MainLink>
                    </div>
                    <Link href='' className="w-[46%] md:w-auto">title</Link>
                    <Link href='' className="w-[46%] md:w-auto">title</Link>
                    <Link href='' className="w-[46%] md:w-auto">title</Link>
                    <Link href='' className="w-[46%] md:w-auto">title</Link>

                </div>
                <div className="flex  md:flex-col flex-wrap text-center gap-3 w-full md:w-auto">
                    <div className="w-full">
                        <MainLink link="/">Home</MainLink>
                    </div>
                    <Link href='' className="w-[46%] md:w-auto">title</Link>
                    <Link href='' className="w-[46%] md:w-auto">title</Link>
                    <Link href='' className="w-[46%] md:w-auto">title</Link>
                    <Link href='' className="w-[46%] md:w-auto">title</Link>
                </div>
                <div className="flex  md:flex-col flex-wrap text-center gap-3 w-full md:w-auto">
                    <div className="w-full">
                        <MainLink link="ContactUs">Contact us</MainLink>
                    </div>
                    <Link href='' className="w-[46%] md:w-auto">title</Link>
                    <Link href='' className="w-[46%] md:w-auto">title</Link>
                    <Link href='' className="w-[46%] md:w-auto">title</Link>
                    <Link href='' className="w-[46%] md:w-auto">title</Link>
                </div>
                <div className="flex  md:flex-col flex-wrap text-center gap-3 w-full md:w-auto">
                    <div className="w-full">
                        <MainLink link="AboutUs">About us</MainLink>
                    </div>
                    <Link href='' className="w-[46%] md:w-auto">title</Link>
                    <Link href='' className="w-[46%] md:w-auto">title</Link>
                    <Link href='' className="w-[46%] md:w-auto">title</Link>
                    <Link href='' className="w-[46%] md:w-auto">title</Link>

                </div>
            </div>
        </div>
    )
}
