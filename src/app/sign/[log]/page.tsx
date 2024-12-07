import Image from "next/image"
import Botton from "../../components/Botton"
const   Log = () => {
  return (
  <div className="w-[1305px] h-[781px]  my-[170px] gap-[129px] flex">
  <div className="w-[805px] h-[781px] bg-[#CBE4E8]">
  <Image className="pt-[75px]" src={"/mobile.png"} alt={"sign-up"} height={706} width={919}/>

  </div>
  <div className="w-[371px] h-[326px] mt-[200px]">
  <h2 className="w-[345px] h-[30px] text-[36px] leading-[30px] tracking-[4%] font-medium mb-6 ">Log in to Exclusive</h2>
  <p className="text-[16px] leading-[24px] w-[191px] h-[24px] mb-8">Enter your details below</p>
  <div className="space-y-[18px] text-[16px]">
  <div>
  <input
  type="text"
  placeholder="Email or Phone Number"
  className="w-[370px]  border-0 border-b-[1px] border-gray-400  outline-none p-2 "/>
  </div>
  <div className="">
      <input
        type="Password"
        placeholder="Email or Phone Number"
        className="w-[370px]  border-0 border-b-[1px] border-gray-400  outline-none p-2 "
      />
    </div>

  
    </div>
    
    <div className="mt-8 flex gap-[100px]">
    <Botton bgColor={"bg-[#DB4444]"} text={"Log In"} width={"w-[143px]"}/>

    <p className="w-[141px] h-[24px] text-[16px] font-normal text-[#DB4444] pt-3 ">Forget Password?</p>
    </div>
    
    {/* box */}
    
 
  


   
 
  </div>
  </div>


  )
}

export default Log