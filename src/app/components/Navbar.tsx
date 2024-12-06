import Link from "next/link"
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { Poppins } from 'next/font/google';
import Upperpart from "./Upperpart";
const pop = Poppins({
    subsets: ['latin'], 
    weight: ['400'], 
});

const Navbar = () => {
  return (
    <>
    <Upperpart/>
    <div className={`${pop.style} w-[1170px] h-[38px] relative lg:top-[78px] top-[30px] lg:left-[135px] left-[50px] gap-[148px]  flex items-center`}>
    <div className="w-[675px] h-[24px] gap-[190px] text-[#000000] flex items-center">
        <div className="w-[118px] h-[24px] font-bold text-[24px] leading-[24px]">Exclusive</div>
        <div className="md:hidden flex "><CiMenuBurger className="w-[32px] h-[32px] relative right-8"/></div>
        <div className="w-[367px] h-[24px] gap-[48px] text-[16px] font-normal md:flex hidden">
            <Link className="w-[48px]" href="/">Home</Link>
            <Link className="w-[66px] " href="/contact">Contact</Link>
            <Link className="w-[48px]" href="/about">About</Link>
            <Link className="w-[61px]" href="/sign">Sign Up</Link>
        </div>
    </div>

    <div className="w-[347px] h-[38px] md:flex gap-[24px] hidden items-center">
        <div className="w-[243px] rounded-[4px] bg-[#F5F5F5] flex gap-[10px]">
        <input className="text-[12px] leading-[18px] py-[7px] pr-3 pl-5 bg-[#F5F5F5]" placeholder="What are you looking for?"/> 
        <CiSearch className="h-6 w-6 my-2" />
        </div>
        <div className="w-[80px] h-[32px] gap-4 flex">
        <CiHeart className="w-8 h-8"/>
        <IoCartOutline className="w-8 h-8"/>
        </div>
    </div>
   
    </div>
    </>
  )
}

export default Navbar