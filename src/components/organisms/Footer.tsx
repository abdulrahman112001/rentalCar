import Image from "next/image";
import { Logo, Instagram,Twitter,Facebook,LinkedIn } from "../atom/assets";
import { MainLink } from "../moluecles";



export default function Footer() {
    return (
        <div className="footer  bg-[#F3EFEF] py-[50px]">
            <div className="image w-fit mx-auto mb-8">
                <a href="">
                    <Image src={Logo} alt="" className="w-[120px]" />
                </a>
            </div>
            <div className="social flex  justify-center items-center gap-6 mb-6">
                <a href=""><Image alt='' src={Facebook} className="w-[35px]"/></a>
                <a href=""><Image alt='' src={Twitter} className="w-[26px] h-[22px]"/></a>
                <a href=""><Image alt='' src={LinkedIn} className="w-[22px] h-[22px]"/></a>
                <a href=""><Image alt='' src={Instagram} className="w-[35px]"/></a>  
            </div>
            <div className="links flex flex-col md:flex-row gap-16 items-center justify-center mb-6">
                <div className="flex  flex-col text-center gap-3">
                    <MainLink link="Blogs">Blogs</MainLink>
                    <span>title</span>
                    <span>title</span>
                    <span>title</span>
                </div>
                <div className="flex  flex-col text-center gap-3">
                <MainLink link="OurCars">Our Cars</MainLink>
                    <span>title</span>
                    <span>title</span>
                    <span>title</span>
                </div>
                <div className="flex  flex-col text-center gap-3">
                    <MainLink link="/">Home</MainLink>
                    <span>title</span>
                    <span>title</span>
                    <span>title</span>
                </div>
                <div className="flex  flex-col text-center gap-3">
                    <MainLink link="ContactUs">Contact us</MainLink>
                    <span>title</span>
                    <span>title</span>
                    <span>title</span>
                </div>
                <div className="flex  flex-col text-center gap-3">
                    <MainLink link="AboutUs">About us</MainLink>
                    <span>title</span>
                    <span>title</span>
                    <span>title</span>
                </div>
            </div>
        </div>
    )
}
