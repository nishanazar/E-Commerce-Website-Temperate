


import { IoIosTabletPortrait } from "react-icons/io";

interface IAboutCard{
    paragraph:string;
    icon: React.ReactNode;
    h4: string
}
const  AboutCard = (props: IAboutCard) => {
    const {paragraph, icon, h4}= props
  return (
    <div className="w-[249px] h-[161px] space-y-2">

    <div className="w-[80px] h-[80px] rounded-full border-gray-400 border-[10px] bg-black text-white ml-16"> <div className="ml-3 mt-2 w-[40px] h-[40px]">{icon}</div></div>
    <h4 className="w-[242px] h-[28px] text-[16px] leading-[28px] font-semibold mt-3 ">{h4}</h4>

<p className="w-[249px] h-[21px] text-[14px] leading-[21px] ">{paragraph}</p>
    </div>

  )
}

export default AboutCard