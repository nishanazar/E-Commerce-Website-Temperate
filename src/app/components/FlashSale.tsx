import Dot from "./Dot"
import Date from "./Date"
import { FaArrowRight } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";

import Image from "next/image";
import { FaStar } from "react-icons/fa6";

import { FaArrowLeft } from "react-icons/fa";
import Items from "./Items";

const FlashSale = () => {
  return (
  <div className="">
      <div className=" relative top-[156px] left-[135px] mb-[50px] w-[1170px] h-[103] gap-[470px]">
    <div className="w-[600px] h-[103px] ">
    <div className="w-[100px] h-[40px] gap-4 flex">
    <div className="h-[40px] w-[20px] bg-[#DB4444]"></div>
    <p className="h-[20px] w-[64px] text-[#DB4444] text-[16px] font-semibold leading-[20px] mt-3">Today’s</p>
    </div>

    <div className="flex gap-[80px]">
    <h2 className="w-[211px] h-[48px] text-[36px] leading-[48px] mt-5">
    Flash Sales
    </h2>
{/* pink section */}
    <div className="w-[302px] h-[50px] bg-white mt-3 flex gap-5">
    <Date day={"Days"} date={"03"}/>

    <div className="w-4 h-[16px] relative top-7 space-y-1">
    <Dot h={"h-1"} w={"w-1"} bg={"bg-[#E07575]"}/>
    <Dot h={"h-1"} w={"w-1"} bg={"bg-[#E07575]"}/>
    </div>

      <Date day={"Hours"} date={"23"}/>
      <div className="w-4 h-[16px] relative top-7 space-y-1">
      <Dot h={"h-1"} w={"w-1"} bg={"bg-[#E07575]"}/>
      <Dot h={"h-1"} w={"w-1"} bg={"bg-[#E07575]"}/>
      </div>

      <Date day={"Minutes"} date={"19"}/>
      <div className="w-4 h-[16px] relative top-7 space-y-1">
      <Dot h={"h-1"} w={"w-1"} bg={"bg-[#E07575]"}/>
       <Dot h={"h-1"} w={"w-1"} bg={"bg-[#E07575]"}/>
      </div>
      <Date day={"Seconds"} date={"56"}/>
    </div>
    {/* pink complete */}


        </div>
    </div>
    </div>
  <div className="w-[100px] h-[46px] flex gap-[8px] relative left-[1090px] top-[60px]">
    <div className="w-[46px] h-[46px] rounded-full bg-[#F5F5F5]">
    <FaArrowLeft className="h-6 w-6 mt-2 ml-2"  />
    </div>
    <div className="w-[46px] h-[46px] rounded-full bg-[#F5F5F5]">
    <FaArrowRight  className="h-6 w-6 mt-2 ml-3"/>
    </div>
    </div>





<div className="main mt-[110px] ml-[135px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

  <Items src={"/hv.png"} percenatage={"-40%"} h2={"HAVIT HV-G92 Gamepad"} value1={"$120"} value2={"$160"} starvalue={"(88)"}/>


  
<div className="w-[270px] h-[350px] gap-4">
  <div className="w-[270px] h-[250px] rounded bg-[#F5F5F5]">
    <Image className="relative top-[60px] left-[40px]" src={"/keyboard.png"} alt="keyboard" height={152} width={172} />
    <div className="relative bottom-[80px] left-3 w-[55px] h-[26px] rounded bg-[#DB4444] py-1 px-3 text-[14px] leading-[18px] text-[#FAFAFA]">-40%</div>

<div className="w-[34px] h-[76px] space-y-4 relative bottom-[100px] left-[220px]">
  <div className="w-[34px] h-[34px] bg-[#FFFFFF] rounded-full"><IoIosHeartEmpty className="w-[16px] h-[14px] relative top-2 left-2"/></div>
  <div className="w-[34px] h-[34px] bg-[#FFFFFF] rounded-full"><Image className="relative top-[9px] left-2" src={"/eyes.png"} alt="icon" height={14} width={16} /></div>
</div>
<button className="bg-[#000000] w-[270px] h-[41px] rounded-[4px] mt-5 text-white">Add To Cart</button>


<div className="text w-[201px] h-[84px] space-y-2 text-[16px] leading-[24px] font-medium">
  <h2 className="mt-3">HAVIT HV-G92 Gamepad</h2>
  <div className="gap-[12px] flex w-[85px] h-[24px]" >
    <p className=" text-[#DB4444]">$120</p>
    <p className="  line-through text-[#000000] opacity-50">$160</p></div>

    <div className="w-[140px] h-[20px] flex gap-[8px]">
      <div className="gap-1 flex text-[#FFAD33]"><FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar /></div>
      <div className="w-[32px] h-[20px]text-[14px] font-extrabold text-[#000000]">(75)</div>
    </div>
</div>
</div>
</div>

<Items src={"/moniter.png"} percenatage={"-30%"} h2={"IPS LCD Gaming Monitor"} value1={"$370"} value2={"$400"} starvalue={"(99)"}height="h-[155px]" width="w-[155px]"/>

<Items src={"/chair.png"} percenatage={"-25%"} h2={"S-Series Comfort Chair "} value1={"$375"} value2={"$400"} starvalue={"(99)"} height="h-[155px]" width="w-[135px]"/>
</div>
{/* complete */}




  </div>
 
  )
}

export default FlashSale