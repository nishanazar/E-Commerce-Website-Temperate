import { RiArrowDropDownLine } from "react-icons/ri";
import { Poppins } from 'next/font/google';
const pop = Poppins({
    subsets: ['latin'], 
    weight: ['400'], 
});

const Upperpart = () => {
  return (
    <div className={`${pop.style} h-[48px] w-full bg-[#000000] text-[#FAFAFA] lg:text-[14px] text-[11px] leading-[21px]`}>
    <div className="w-[859px] h-[24px] relative top-3  lg:left-[445px] md:left-[100px] lg:gap-[231px] md:gap-[150px] flex">
    <div className='flex '>
    <p className=" w-[474px] h-[18px] ">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
    <p className='w-[68px] h-[24px] font-semibold underline leading-[24px] '>ShopNow</p>
    </div>
    <div className='w-[78px] h-[24px] flex gap-[5px]'>
    <p className='w-[49px] h-[21px]'>English</p>
    <RiArrowDropDownLine className="h-6 w-6" />
    </div>
    </div>
    </div>
  )
}

export default Upperpart