import FlashSale from "./components/FlashSale"
import { Hero } from "./components/Hero"

import Botton from "./components/Botton"
import Category from "./components/Category"
import Music from "./components/Music"
import Selling from "./components/Selling"
import ExploreProduct from "./components/ExploreProduct"

import NewArrival from "./components/NewArrival"
import AboutCard from "./components/AboutCard"
import { FiHeadphones } from "react-icons/fi"
import { SiAdguard } from "react-icons/si"
import { FaBus } from "react-icons/fa"




const Page = () => {
  return (
    <>


      <Hero />
      <FlashSale />
      <div className=" my-[80px] text-center"><Botton text={"View All Products"} bgColor={"bg-[#DB4444]"} width={"w-[234px]"} /></div>
      <hr className="mx-[100px]" />

      <Category />
      <hr className="mx-[100px] my-[70px]" />


      <Selling />

      <hr className="mx-[100px] my-[70px]" />

      <Music />
      <ExploreProduct />

      <div className=" mt-[90px] text-center"><Botton text={"View All Products"} bgColor={"bg-[#DB4444]"} width={"w-[234px]"} /></div>
      <NewArrival />
    <div className="w-[943px] h-[161px] flex gap-[88px] my-[80px] ml-[248px]">
        <AboutCard paragraph={"Free delivery for all orders over $140"} icon={<FaBus className="w-[40px] h-[40px]" />} h4={"FREE AND FAST DELIVERY"} />
        <AboutCard paragraph={"24/7 CUSTOMER SERVICE"} icon={<FiHeadphones className="w-[40px] h-[40px]" />} h4={"Friendly 24/7 customer support"} />
        <AboutCard paragraph={"We reurn money within 30 days"} icon={<SiAdguard className="w-[40px] h-[40px]" />} h4={"MONEY BACK GUARANTEE"} />

      </div>
     
   
    
     </>
  )
}

export default Page