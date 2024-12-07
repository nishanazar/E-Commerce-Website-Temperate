import Image from "next/image"
import Botton from "../components/Botton"

const Contact = () => {
  return (
    <>
    <div className="flex gap-11 mt-[200px] mb-[110px] ml-[135]">
    <div><Image src={"/contact.png"} alt={"pic"} height={457} width={340}/></div>
    <div className="w-[800px] h-[457px] shadow-lg rounded pt-9 pl-6">
    <div className="flex gap-4">
    <div> <input className="h-[50px] w-[235px] bg-[#F5F5F5] rounded-[2px] pl-3 mt-2" type="name" placeholder="Your Name" /></div>
       
    <div><input className="h-[50px] w-[235px] bg-[#F5F5F5] rounded-[2px] pl-3 px-3 mt-2 text-gray-400" type="email"  placeholder="Your Email" /></div>
    <div>
    <input className="h-[50px] w-[235px] bg-[#F5F5F5] rounded-[2px] pl-3 mt-2" type="phone"  placeholder="Your Phone" />
    </div>
    </div>
    <div className="mt-4">  
    <input className="h-[205px] w-[737px]  rounded-[4px] pl-3 px-1 mt-2 pb-[80px] text-gray-400 bg-[#F5F5F5]" type="message"  placeholder="Message" />
    </div>
    <div className="ml-[520px] mt-[50px]">
    <Botton bgColor={"bg-[#DB4444]"} text={"Send Massage"} width={"w-[215px]"}/>
    </div>
    </div>
    </div>


      
        
      
      </>
  )
}

export default Contact