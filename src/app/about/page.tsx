import Image from "next/image"
import AboutItems from "../components/AboutItems"
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import { RiShoppingBag4Line } from "react-icons/ri";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaSackDollar } from "react-icons/fa6";
import AboutTeam from "../components/AboutTeam";
import Dot from "../components/Dot";
import AboutCard from "../components/AboutCard";
import { FaBus } from "react-icons/fa6";
import { FiHeadphones } from "react-icons/fi";
import { SiAdguard } from "react-icons/si";

const About = () => {
  return (
    <>
    <div className="flex gap-[40px] ">
    <div className="w-[525px] h-[336px] ml-[135px] mt-[322px] text-justify">
      <h1 className="w-[277px] h-[64px] text-[54px] font-semibold leading-[64px] tracking-[6%] mb-3">Our Story</h1>
      <div className="w-[525px] h-[113px] text-[16px] leading-[26px]">
      <p className="w-[525px] h-[130px]">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p> <br />
      <p className="w-[505px] h-[78px]">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
      </div>
    </div>

    <Image className="mt-[200px]" src={"/about-pic.png"} alt={"about-pc"} height={390} width={620}/>
    </div>

    <div className=" w-[1170px] h-[230px] flex  ml-[135px] gap-[30px] mt-[70px]">
      <AboutItems paragraph={"Sallers active our site"} icon={<TbLayoutSidebarRightCollapseFilled className="w-[40px] h-[40px]" />} h4={"10.5k "}/>
      <AboutItems paragraph={"Mopnthly Produduct Sale"} icon={<AiOutlineDollarCircle className="w-[40px] h-[40px]  " />} h4={"33k "}/>
      <AboutItems paragraph={"Customer active in our site"} icon={<RiShoppingBag4Line  className="w-[40px] h-[40px]  " />} h4={"45.5k "}/>
      <AboutItems paragraph={"Anual gross sale in our site"} icon={<FaSackDollar  className="w-[40px] h-[40px]  " />} h4={"25k "}/>

    </div>

    <div className=" w-[1170px] h-[564px] flex  ml-[135px] gap-[30px] mt-[80px]">
    <AboutTeam src={"/male.png"} name={"Tom Cruise"} profession={"Founder & Chairman"}/>
    <AboutTeam src={"/female.png"} name={"Emma Watson"} profession={"Managing Director"}/>
    <AboutTeam src={"/male2.png"} name={"Will Smith"} profession={"Product Designer"}/>
    </div>

    <div className="w-[112px] h-[26px] flex gap-3 mt-[30px] mx-auto">
 <Dot h={"h-[12px]"} w={"w-[12px]"} bg={"bg-black"} opacity={"opacity-30"}/>
 <Dot h={"h-[12px]"} w={"w-[12px]"} bg={"bg-black"} opacity={"opacity-30"}/>
 <div className="h-[14px] w-[14px] rounded-full border-2 border-gray-500 bg-[#DB4444]"></div>
 <Dot h={"h-[12px]"} w={"w-[12px]"} bg={"bg-black"} opacity={"opacity-30"}/>
 <Dot h={"h-[12px]"} w={"w-[12px]"} bg={"bg-black"} opacity={"opacity-30"}/>
</div>

<div className="w-[943px] h-[161px] flex gap-[88px] my-[60px] ml-[248px]">
  <AboutCard paragraph={"Free delivery for all orders over $140"} icon={<FaBus  className="w-[40px] h-[40px]"/>}  h4={"FREE AND FAST DELIVERY"}/>
  <AboutCard paragraph={"24/7 CUSTOMER SERVICE"} icon={<FiHeadphones className="w-[40px] h-[40px]" />}  h4={"Friendly 24/7 customer support"}/>
  <AboutCard paragraph={"We reurn money within 30 days"} icon={<SiAdguard className="w-[40px] h-[40px]" />}  h4={"MONEY BACK GUARANTEE"}/>

</div>
    </>

  )
}

export default About
