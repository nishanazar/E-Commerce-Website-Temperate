import Botton from "./Botton"
import MusicTimer from "./MusicTimer"
import Image from "next/image"

const Music = () => {
  return (
    <div className="w-[1170px] h-[500px] ml-[135px] bg-[#000000] flex gap-14">
        <div className="font-semibold">
            <h4 className="text-[#00FF66] text-[16px] leading-[20px] w-[90px] h-[20px] relative top-[79px] left-[56px] ">Categories</h4>
            <h2 className="text-white text-[48px] leading-[60px] tracking-[4%] w-[443px] h-[120px]  relative top-[121px] left-[56px]">Enhance Your Music Experience</h2>
{/* timer */}
            <div className="w-[330px] h-[62px] gap-[24px] relative top-[150px] flex left-[56px] text-[16px] leading-[20px]">
             <MusicTimer num={"23"} text={"Houre"}/>
             <MusicTimer num={"05"} text={"days"}/>
             <MusicTimer num={"59"} text={"Minutes"}/>
             <MusicTimer num={"35"} text={"Seconds"}/>
             </div>
{/* complete */}
<div className="relative top-[185px] left-[56px]"><Botton text={"Buy Now!"} bgColor="bg-[#00FF66]" width={"w-[171px]"}/></div>



        </div>
        <div className="relative w-[600px] h-[420px] mt-[30px]">
        <div className="absolute inset-0 bg-white rounded-full blur-lg opacity-10"></div>
        <Image className="" src={"/camera.png"} alt={"camera"} height={420} width={600}/>
        </div>
        
{/* main */}
    </div>
  )
}

export default Music