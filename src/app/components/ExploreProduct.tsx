import { FaStar } from "react-icons/fa"
import Product1 from "./Product1"
import Top from "./Top"
import Circle from "./Circle"


const ExploreProduct = () => {
  return (
    <>
    <Top p1={"Our Products"} p2={"Explore Our Products"}/>
    <div className="w-[1170px] ml-[135px] h-[322px] gap-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-[140px]">
        
        <Product1 src={"/dog-food.png"} h2={"Breed Dry Dog Food"} value1={"$100"} starvalue={"(35)"} icon1={<FaStar className="text-[black] opacity-50" />} icon2={<FaStar className="text-[black] opacity-50" />} height={"h-[180px]"} width={"w-[125px]"}/>

        <Product1 src={"/dsl-cam.png"} h2={"CANON DSLR camera"} value1={"$100"} starvalue={"(35)"} icon2={<FaStar className="text-[black] opacity-50" /> } icon1={<FaStar className="text-[#FFAD33] " /> } height={"h-[179px]"} width={"w-[156px]"}/>


        <Product1 src={"/laptop.png"} h2={"ASUS FHD Gaming Laptop"} value1={"$700"} starvalue={"(335)"} icon1={<FaStar className="text-[#FFAD33]" /> } icon2={<FaStar className="text-[#FFAD33]" /> } height={"h-[180px]"} width={"w-[172px]"}/>


        <Product1 src={"/pro-set.png"} h2={"Curology Product Set "} value1={"$500"} starvalue={"(145)"} icon2={<FaStar className="text-[black] opacity-50" /> } icon1={<FaStar className="text-[#FFAD33]" /> } height={"h-[180px]"} width={"w-[172px]"}/>
        
    </div>

     {/* 2nd part */}

    <div className="w-[1170px] h-[322px] gap-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ml-[135px] mt-[140px]">
        <div>
     
        <Product1 src={"/car.png"} h2={"Kids Electric Car"} value1={"$960"} starvalue={"(65)"} icon1={<FaStar className="text-[#FFAD33]" />} icon2={<FaStar className="text-[#FFAD33]" />} height={"h-[180px]"} width={"w-[190px]"}/>
        <div className="w-[51px] h-[26px] rounded py-1 text-[12px] px-3 bg-[#00FF66] text-[#FAFAFA] relative bottom-[340px] left-3">NEW</div>
        <div className="relative bottom-[50px]"><Circle bgColor="bg-[#FB1314]" border="border-[#000000]"/></div>
        </div>



       <div>
        <Product1 src={"/shoes.png"} h2={"Jr. Zoom Soccer Cleats"} value1={"$1160"} starvalue={"(35)"} icon2={<FaStar className="text-[#FFAD33]" /> } icon1={<FaStar className="text-[#FFAD33] " /> } height={"h-[179px]"} width={"w-[156px]"}/>
        <div className="relative bottom-[25px]"><Circle bgColor="bg-[#EEFF61]" border="border-[#000000]"/></div>
        </div>


        <div>
        <Product1 src={"/shooter.png"} h2={"ASUS FHD Gaming Laptop"} value1={"$660"} starvalue={"(55)"} icon1={<FaStar className="text-[#FFAD33]" /> } icon2={<FaStar className="text-[black] opacity-50" /> } height={"h-[180px]"} width={"w-[172px]"}/>
        <div className="w-[51px] h-[26px] rounded py-1 text-[12px] px-3 bg-[#00FF66] text-[#FAFAFA] relative bottom-[340px] left-3">NEW</div>
        <div className="relative bottom-[50px]"><Circle bgColor="bg-[#000000]" border="border-[#000000]"/></div>
        </div>

     <div>
        <Product1 src={"/jacket.png"} h2={"Curology Product Set "} value1={"$500"} starvalue={"(145)"} icon2={<FaStar className="text-[black] opacity-50" /> } icon1={<FaStar className="text-[#FFAD33]" /> } height={"h-[176px]"} width={"w-[182px]"}/>
        <div className="relative bottom-[25px]"><Circle bgColor="bg-[#000000] opacity-50" border="border-black"/></div>
        </div>
        
    </div>
    </>
   
  )
}

export default ExploreProduct