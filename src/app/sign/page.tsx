import Image from "next/image"
import Botton from "../components/Botton"
import Link from "next/link"

const Sign = () => {
  return (
  <div className="w-[1305px] h-[781px]  my-[170px] gap-[129px] flex">
  <div className="w-[805px] h-[781px] bg-[#CBE4E8]">
  <Image className="pt-[75px]" src={"/mobile.png"} alt={"sign-up"} height={706} width={919}/>
  </div>
  <div className="w-[371px] h-[530px] gap-[24px]  mt-[130px]">
  <h2 className="w-[339px] h-[30px] text-[36px] leading-[30px] tracking-[4%] font-medium ">Create an account</h2>
  <p className="text-[16px] leading-[24px] py-4">Enter your details below</p>
  <div className="space-y-5 text-[16px]">
  <div className="">
  <input
  type="text"
  placeholder="Name"
  className="w-[370px]  border-0 border-b-[1px] border-gray-400  outline-none p-2 "/>
  </div>
  <div className="">
  <input
  type="text"
  placeholder="Email or Phone Number"
  className="w-[370px]  border-0 border-b-[1px] border-gray-400  outline-none p-2"/>
  </div>
  <div className="">
  <input
  type="text"
  placeholder="Password"
  className="w-[370px]  border-0 border-b-[1px] border-gray-400  outline-none p-2" />
  </div>
  </div>
  <div className="mt-8 mb-6">
  <Botton bgColor={"bg-[#DB4444]"} text={"Create Account"} width={"w-[371px]"}/>
  </div>
    
   {/* box */}
   <div className="w-[371px] h-[56px] rounded border-[1px] border-[#00000066] flex gap-3 py-[16px] px-[86px]"> <Image src={"/Icon-Google.png"} alt={"Icon-Google"} height={24} width={24}/>
    <p className="w-[159px] h-[24px] text-[16px] ">Sign up with Google</p></div>
 
  
    <div className="w-[248px] h-[28px]  flex mx-auto mt-10 "> 
    <p className="w-[185px] h-[24px] text-[16px] font-normal ">Already have account?</p>
    <Link href="/sign/log"> <p className='w-[47px] h-[24px] font-medium underline leading-[24px] '>Log in</p></Link>
  </div>
  </div>
</div>

  )
}

export default Sign