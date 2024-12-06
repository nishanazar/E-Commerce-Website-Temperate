import { FaStar } from "react-icons/fa"
import Botton from "./Botton"
import SellingItems from "./SellingItems"


const Selling = () => {
  return (
    <>
    <div className=" relative left-[135px] mb-[50px] w-[1170px] h-[103]">
   <div className=" flex gap-[600px]">
    <div className="one-part">
    <div className="w-[130px] h-[40px] gap-4 flex">
    <div className="h-[40px] w-[20px] bg-[#DB4444]"></div>
    <p className="h-[20px] w-[89px] text-[#DB4444] text-[16px] font-semibold leading-[20px] mt-3">This Month</p>
    </div>
    <h2 className="w-[400px] h-[48px] text-[36px] leading-[48px] mt-5 font-semibold tracking-[4%]">
    Best Selling Products
    </h2>
    </div>
   <div className="mt-[43px]"><Botton bgColor={"bg-[#DB4444]"} text={"View All"} width={"w-[159px]"}/></div>
   </div>
   </div>

   {/* items */}
   <div className="w-[1170px] h-[350px] gap-[30px] mt-[30px] ml-[135px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">

    <SellingItems src={"/coat.png"} h2={"The north coat"} value1={"$260"} value2={"$360"} starvalue={"(65)"} icon={<FaStar className="text-[#FFAD33]"/>} />

    <SellingItems src={"/parse.png"} h2={"Gucci duffle bag"} value1={"$906"} value2={"$1106"} starvalue={"(65)"} icon={<FaStar className="text-[#000000] opacity-50"/>}  height="h-[175px]" width="w-[165px]"/>

    <SellingItems src={"/cpu.png"} h2={"RGB liquid CPU Cooler"} value1={"$160"} value2={"$170"} starvalue={"(65)"} icon={<FaStar className="text-[#000000] opacity-50"/>}  height="h-[175px]" width="w-[185px]"/>

    <SellingItems src={"/book-tab.png"} h2={"Small BookSelf"} value1={"$360"} value2={"$360"} starvalue={"(65)"} icon={<FaStar className="text-[#FFAD33]"/>} height="h-[175px]" width="w-[155px]" />

   </div>
    
 
    </>
  )
}

export default Selling