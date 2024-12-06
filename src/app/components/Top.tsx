import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

interface ITop {
    p1: string;
    p2: string;
}

const Top = (props: ITop) => {
    const {p1, p2} = props
  return (
    <div className=" relative top-[100px] left-[135px] mb-[50px] w-[1170px] h-[103]">
    <div className=" flex gap-[590px]">
     <div className="one-part">
     <div className="w-[130px] h-[40px] gap-4 flex">
     <div className="h-[40px] w-[20px] bg-[#DB4444]"></div>
     <p className="h-[20px] w-[184px] text-[#DB4444] text-[16px] font-semibold leading-[20px] mt-3">{p1}</p>
     </div>
     <h2 className="w-[379px] h-[48px] text-[36px] leading-[48px] mt-5 font-semibold tracking-[4%]">
     {p2}
     </h2>
     </div>
 
     <div className="2-part w-[100px] h-[46px] flex gap-[8px] relative top-[60px] ">
     <div className="w-[46px] h-[46px] rounded-full bg-[#F5F5F5]">
     <FaArrowLeft className="h-6 w-6 mt-2 ml-2"  />
     </div>
     <div className="w-[46px] h-[46px] rounded-full bg-[#F5F5F5]">
     <FaArrowRight  className="h-6 w-6 mt-2 ml-3"/>
     </div>
     </div>
     </div>
     </div>
  )
}

export default Top