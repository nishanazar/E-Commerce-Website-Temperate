import { TbMathGreater } from "react-icons/tb";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { Poppins } from 'next/font/google';
import List from "./List";
import Dot from "./Dot";
const pop = Poppins({
    subsets: ['latin'], 
    weight: ['400'], 
});

export const Hero = () => {
  return (
    <div className="flex">
        <div className="w-[217px] h-[344px] relative top-[182px] left-[135px] gap-4 text-[#000000]">
            <ul className={`${pop.style} text-[16px] leading-[24px] font-normal space-y-4`}>
            <li className="w-[217px] h-[24px] flex gap-[51px]">
            <p className="w-[142px]">Woman’s Fashion</p> 
            <TbMathGreater className="h-[17.73px] w-[15.78px] ml-2 text-black" />
            </li>
            <li className="w-[217px] h-[24px] flex gap-[81px]">
            <p className="w-[112px]">Men’s Fashion</p> 
            <TbMathGreater className="h-[17.73px] w-[15.78px] ml-2 text-black" />
            </li>
            <li>
            <List paragraphy={"Electronics"} width={"w-[87px]"} height={"h-[24px]"}/>
            </li>
            <li>
            <List paragraphy={"Home & Lifestyle"} width={"w-[132px]"} height={"h-[24px]"}/>
            </li>
            <li>
            <List paragraphy={"Medicine"} width={"w-[73px]"} height={"h-[24px]"}/>
            </li>
            <li>
            <List paragraphy={"Sports & Outdoor"} width={"w-[137px]"} height={"h-[24px]"}/>
            </li>
            <li>
            <List paragraphy={"Baby’s & Toys"} width={"w-[109px]"} height={"h-[24px]"}/>
            </li>
            <li>
            <List paragraphy={"Groceries & Pets"} width={"w-[131px]"} height={"h-[24px]"}/>
            </li>
            <li>
            <List paragraphy={"Health & Beauty"} width={"w-[128px]"} height={"h-[24px]"}/>
            </li>
            </ul>
            </div>

            <div className="border-l-[1px] h-[424px] relative left-[150px] top-[100px]"></div>

           <div className="w-[892px] h-[344px] relative top-[182px] left-[213px] bg-[#000000] text-[#FAFAFA] flex">
           <div className="ml-[64px]  relative left-[64px]">
           <Image className="relative top-[58px] " src={"/apple.png"} alt="apple-icon" width={190} height={49}/>
           <p className="w-[294px] h-[120px] relative top-[75px] text-[48px] font-semibold leading-[60px] ">Up to 10% off Voucher</p>
           <div className="h-[28px] w-[113px] mt-[99px] flex gap-2">
           <h4 className="w-[81px] h-24px text-[16px] leading-[24px] font-medium">
           Shop Now
           </h4>
           <FaArrowRight className="w-[16.5] h-[14px] mt-[6px]" />
           </div>
           <div className="w-[81px] border-b-[1px]"></div>
</div>
<div>
    <Image className="mt-4 ml-[33px]" src={"/hero-pic.png"} alt="mobile" height={352} width={496}/>
</div>

</div>
<div className="w-[110px] h-[14px] flex gap-3  mt-[500px] relative right-[300px]">
    <Dot h={"h-3"} w={"w-3"} bg={"bg-[#FFFFFF]"} opacity={"opacity-50"}/>
    <Dot h={"h-3"} w={"w-3"} bg={"bg-[#FFFFFF]"} opacity={"opacity-50"}/>
    <div className="h-[14px] w-[14px] rounded-full border-2 border-[#ffffff] bg-[#DB4444]"></div>
    <Dot h={"h-3"} w={"w-3"} bg={"bg-[#FFFFFF]"} opacity={"opacity-50"}/>
    <Dot h={"h-3"} w={"w-3"} bg={"bg-[#FFFFFF]"} opacity={"opacity-50"}/>

</div>
    </div>
  )
}
