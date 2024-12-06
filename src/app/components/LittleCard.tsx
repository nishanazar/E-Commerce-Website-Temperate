
import { IoIosTabletPortrait } from "react-icons/io";

interface ICard {
    paragraph:string;
    icon: React.ReactNode;
}
const LittleCard = (props: ICard) => {
    const {paragraph, icon}= props
  return (
    <div className="w-[170px] h-[145px] rounded border-[1px] border-[#0000004D] hover:bg-[#DB4444] hover:text-white">
<div className="w-[56px] h-[56px] relative top-[30px] left-[65px]">
{icon}</div>
<p className="w-[59px] h-[24px] text-[16px] leading-[24px] ml-[55px] mt-[23px]  ">{paragraph}</p>
    </div>
  )
}

export default LittleCard
