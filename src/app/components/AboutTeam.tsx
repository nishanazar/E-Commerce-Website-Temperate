
import Image from "next/image"
import { FaLinkedinIn } from "react-icons/fa"
import { FiTwitter } from "react-icons/fi"
import { IoLogoInstagram } from "react-icons/io5"

interface ITeam {
    src: string;
    name: string;
    profession: string
}
const AboutTeam = (props: ITeam) => {
    const {src, name, profession} = props
  return (
    <div className="w-[370px] h-[564px]  space-y-2">
        <Image src={src} alt={""} height={430} width={370}/>
        <h3 className="font-medium text-[28px] leading-[30px] tracking-[4%] w-[230px] h-[30px]">{name}</h3>
        <p className="font-normal text-[16px] w-[194px] h-[24px]">{profession}</p>

        <div className="w-[104px] h-[24px] flex gap-[16px]">
            <FiTwitter  className="w-[27.6px] h-[24px]"/>
            <IoLogoInstagram className="w-[24px] h-[24px]" />
            <FaLinkedinIn  className="w-[24px] h-[24px]"/></div>
        </div>
  )
}

export default AboutTeam