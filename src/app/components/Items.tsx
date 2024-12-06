import { FaStar } from "react-icons/fa"
import Image from "next/image"
import { IoIosHeartEmpty } from "react-icons/io"

interface IItems {
    src: string;
    percenatage: string;
    h2: string;
    value1: string;
    value2: string
    starvalue: string;
    height?: string;
    width? : string
    
}


const Items = (props: IItems) => {
    const {src, percenatage, h2 ,value1, value2,  starvalue, height, width} = props
return (

<div className="w-[270px] h-[350px] gap-4">
<div className="w-[270px] h-[250px] rounded bg-[#F5F5F5]">
<Image className={`${height} ${width} relative top-[40px] left-[45px]`} src={src} alt="" height={152} width={172} />
<div className="relative bottom-[135px] left-3 w-[55px] h-[26px] rounded bg-[#DB4444] py-1 px-3 text-[14px] leading-[18px] text-[#FAFAFA]">{percenatage}</div>

<div className="w-[34px] h-[76px] space-y-4 relative bottom-[160px] left-[220px]">
  <div className="w-[34px] h-[34px] bg-[#FFFFFF] rounded-full"><IoIosHeartEmpty className="w-[16px] h-[14px] relative top-2 left-2"/></div>
  <div className="w-[34px] h-[34px] bg-[#FFFFFF] rounded-full"><Image className="relative top-[9px] left-2" src={"/eyes.png"} alt="icon" height={14} width={16} /></div>
</div>


<div className="text w-[201px] h-[84px] space-y-2 text-[16px] leading-[24px] font-medium">
  <h2 className="mt-3">{h2}</h2>
  <div className="gap-[12px] flex w-[85px] h-[24px] font-bold" >
    <p className=" text-[#DB4444]">{value1}</p>
    <p className="  line-through text-[#000000] opacity-50">{value2}</p></div>

    <div className="w-[140px] h-[20px] flex gap-[8px]">
      <div className="gap-1 flex text-[#FFAD33]"><FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar /></div>
      <div className="w-[32px] h-[20px]text-[14px] font-extrabold text-[#000000]">{starvalue}</div>
    </div>
</div>



  </div>
</div>

  )
}

export default Items